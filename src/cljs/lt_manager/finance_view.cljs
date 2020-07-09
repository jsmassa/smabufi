(ns lt-manager.finance-view
  (:require [reagent.core :as reagent]
            [cljsjs.react]
            ;;[cljsjs.pdfmake]
            [cljsjs.jspdf]
            [lt-manager.state :as state]
            [lt-manager.utilities :refer [show-money show-date format-date date-input
                                          sort-by-date table text-select-input
                                          text-input money-input next-key get-distinct
                                          ok cancel edit bin row-with-toggle]]))

(defn date-limit-form []
  [:div.form-group
   "Von"
   [date-input @state/finance-date-limit-lower
    #(reset! state/finance-date-limit-lower %)]
    "bis"
   [date-input @state/finance-date-limit-upper
    #(reset! state/finance-date-limit-upper %)]])

(defn money-list-panel [entries negative?]
  [(if negative? :div.panel.panel-danger :div.panel.panel-success)
   [:div.panel-heading (if negative? "Ausgaben" "Einnahmen")]
   [:div.table-responsive
    [:table.table
     [:tbody
      (doall (for [[category v] (group-by #(:category (second %)) entries)]
               [:tr {:key category}
                [:td [:p.text-right category ":"]
                 (doall (for [[subcategory val] (group-by #(:subcategory (second %)) v)
                              :when (not (nil? subcategory))]
                          [:p.text-right.text-muted {:key subcategory}
                           [:small (char 8226) " " subcategory]]))]
                [:td [:p.text-right
                      (show-money (* (reduce + (map #(:price (second %)) v))
                                     (if negative? -1 1))) " €"]
                 (doall (for [[subcategory val] (group-by #(:subcategory (second %)) v)
                              :when (not (nil? subcategory))]
                          [:p.text-right.text-muted {:key subcategory}
                           [:small (show-money (* (reduce + (map #(:price (second %)) val))
                                                  (if negative? -1 1))) " €"]]))]]))]
     [(if negative? :tr.danger :tr.success)
      [:td [:p.text-right
            [:strong "Gesamt:"]]]
      [:td [:p.text-right
            [:strong (show-money (* (reduce + (map #(:price (second %)) entries))
                                    (if negative? -1 1))) " €"]]]]]]])

(defn revenue-panel [revenues]
  [money-list-panel revenues false])

(defn expense-panel [expenses]
  [money-list-panel expenses true])

(defn total-panel [revenues expenses]
  [:div.panel.panel-default
   [:div.panel-heading
    [:p.text-center
     [:strong "Insgesamt: "]
     (str (show-money (reduce + (map #(:price (second %)) revenues)))
          " € - "
          (show-money (- (reduce + (map #(:price (second %)) expenses))))
          " € = ")
     (let [total (+ (reduce + (map #(:price (second %)) revenues))
                    (reduce + (map #(:price (second %)) expenses)))]
       (if (< total 0)
         [:strong.text-danger (show-money total) " €"]
         [:strong.text-success (show-money total) " €"]))]]])

(defn account-row [key rec]
  [(show-date (:date rec))
   (:category rec)
   (:subcategory rec)
   (:description rec) 
   (str (show-money (:price rec)) " €")
   [edit #(reset! state/selected-account key)]
   ""])

(defn account-row-selected [key rec]
  (let [categories (get-distinct :category @state/accounts)
        subcategories
        (if (and (not (nil? @state/selected-account))
                 (contains? (@state/selected-account @state/accounts) :category))
          (get-distinct :subcategory
                        (filter #(= (:category (@state/selected-account @state/accounts))
                                    (:category (second %)))
                                @state/accounts))
          [])]
    [[date-input (:date rec)
      #(swap! state/accounts assoc-in [key :date] %)]
     [text-select-input (:category rec) categories
      #(swap! state/accounts assoc-in [key :category] %)]
     [text-select-input (:subcategory rec) subcategories
      #(swap! state/accounts assoc-in [key :subcategory] %)]
     [text-input (:description rec)
      #(swap! state/accounts assoc-in [key :description] %)] 
     [money-input (:price @state/new-account)
      #(swap! state/accounts assoc-in [key :price] %)]
     [ok #(reset! state/selected-account nil)]
     [bin #(.modal (js/$ "#deleteAccountModal") "show")]]))

(defn new-account-row []
  (let [categories (get-distinct :category @state/accounts)
        subcategories (get-distinct :subcategory
                                    (filter #(= (:category @state/new-account)
                                                (:category (second %)))
                                            @state/accounts))]
    [[date-input (:date @state/new-account)
      #(swap! state/new-account assoc :date %)]
     [text-select-input (:category @state/new-account) categories
      #(swap! state/new-account assoc :category %)]
     [text-select-input (:subcategory @state/new-account) subcategories 
      #(swap! state/new-account assoc :subcategory %)]
     [text-input (:description @state/new-account)
      #(swap! state/new-account assoc :description %)] 
     [money-input (:price @state/new-account)
      #(swap! state/new-account assoc :price %)]
     [ok #(do (swap! state/accounts assoc (next-key @state/accounts)
                     @state/new-account)
              (reset! state/new-account state/default-account))]
     [cancel #(do (reset! state/new-account state/default-account))]]))

(defn account-table [accounts]
  [table ["Datum" "Kategorie" "Unterkategorie" "Beschreibung" "Kosten" ""]
   accounts
   @state/selected-account
   account-row
account-row-selected
   (when @state/new-account-active (new-account-row))])

(defn account-panel []
  (let [accounts (filter #(< (.getTime @state/finance-date-limit-lower)
                             (.getTime (:date (second %)))
                             (.getTime @state/finance-date-limit-upper)) @state/accounts)]
    [:div.panel.panel-default
     [:div.panel-heading
      [row-with-toggle "Einnahmen und Ausgaben" state/new-account-active]]
     (if (and (empty? accounts) (not @state/new-account-active))
       [:div.panel-body "Keine Eintragungen"]
       [account-table accounts state/new-account-active state/new-account])]))

(defn finance-view []
  [:div
   (let [accounts (filter #(< (.getTime @state/finance-date-limit-lower)
                              (.getTime (:date (second %)))
                              (.getTime @state/finance-date-limit-upper)) @state/accounts)
         revenues (filter #(< 0 (:price (second %))) accounts)
         expenses (filter #(> 0 (:price (second %))) accounts)]
     [:div  
      [date-limit-form]
      [:div.row
       [:div.col-md-6 [revenue-panel revenues]] 
       [:div.col-md-6 [expense-panel expenses]]]
      [total-panel revenues expenses]
      [:div [:p {:style {"cursor" "pointer"}
               ;;  :on-click ;; #(let [electron (.-remote (js/require "electron")) pdfwindow (js/require "electron-pdf-window") w (electron.BrowserWindow. (clj->js {"width" 800 "height" 600}))] (do (.log js/console w "print sth") (.addSupport pdfwindow w) (.loadURL w "compressed.tracemonkey-pldi-09.pdf")))
                 ;;#(.modal (js/$ "#pdfModal") "show")
                ;;; #(let [doc (clj->js {:content "PDF content"})] (do (.download (.createPdf js/pdfMake doc) "Datei.pdf")))
                 ;;#(let [doc (js/jspdf)] (do (.text doc "Hello World" 10 10) (.output doc "blob")))
                 }
             "Rechnung erstellen"]]
      [account-panel]])])


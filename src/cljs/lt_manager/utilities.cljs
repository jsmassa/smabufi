(ns lt-manager.utilities
  (:require [goog.i18n.DateTimeFormat]
            [lt-manager.state :as state]))

(defn show-money [cents]
  (let [e (quot cents 100)
        ct (mod cents 100)]
    (str e "," (if (< ct 10)
                 (str "0" ct)
                 ct))))

(defn show-date [date]
  (.format (goog.i18n.DateTimeFormat. "dd.MM.yyyy") date))

(defn format-date [date]
  (.format (goog.i18n.DateTimeFormat. "yyyy-MM-dd") date))

(defn sort-by-date
  ([appointments] (sort-by-date appointments false))
  ([appointments reverse?]
   (let [sorted (sort-by #(.getTime (:date (second %))) appointments)]
     (if reverse? (reverse sorted) sorted))))

(defn next-key [keyword-numbered-map]
  (keyword (str (inc (apply max (map #(js/parseInt (subs (str (first %)) 1))
                                     keyword-numbered-map))))))

(defn get-distinct [key hmap]
  (vec (distinct (filter identity (map #(key (second %)) hmap)))))

(defn date-input [shown-date on-change-function dpid]
  [:div.form-group
   [:input.span2.form-control
    {:size "16"
     :type "text"
     :value (show-date shown-date)
     :id dpid
     :on-change #(do (.log js/console (.-target.value %))
                   (on-change-function (js/Date. (.-target.value %))))}]
    [:script {:type "text/javascript"}
     (js/$ (fn [] (.datepicker (js/$ dpid ;;(str " #" dpid)
                                ))))]]
                                        ;;[:div.form-group [:input.form-control {:type "date" :value (format-date shown-date) :on-change #(on-change-function (js/Date. (.-target.value %)))}]]
  )

(defn time-input [shown-time on-change-function]
  [:div.form-group
   [:input.form-control
    {:type "number"
     :value shown-time
     :on-change #(on-change-function (.-target.value %))}]])

(defn money-input [shown-sum on-change-function]
  [:div.form-group
   [:input.form-control
    {:type "text" ;; type "number" showing floating point values with dot
     :pattern "[0-9]+([,][0-9]{1,2})?"
     :value (str (quot shown-sum 100) "," (rem shown-sum 100))
     :on-change #(on-change-function
                  (int (* (float (.replace (.-target.value %) #"," ".")) 100)))}]])

(defn checkbox [checked? on-change-function]
  [:input {:type "checkbox"
           :checked checked?
           :on-change #(on-change-function (.-target.checked %))}])

(defn client-input [shown-client on-change-function]
  [:div
   [:div.form-group
    [:select.form-control
     {:defaultValue shown-client 
      :id "clientSelect"
      :on-change #(on-change-function (.-target.value %))}
     [:option {:value :create-new} "Neu"]
     [:optgroup {:label "Privatkunden"}
      (doall (for [[c-id c] @state/clients :when (:private c)]
               [:option {:key c-id :value c-id}
                (:name c)]))]
     [:optgroup {:label "Gruppen etc."}
      (doall (for [[e-id e] @state/events]
               [:option {:key (str "event-" e-id) :value (str "event-" e-id)}
                (str (:name e) " (" (:name ((:client-id e) @state/clients)) ")")]))]]]])

(defn text-select-input [shown-text options on-change-function]
  [:div.input-group
   [:input.form-control
    {:type "text" :value shown-text :on-change #(on-change-function (.-target.value %))}]
   [:div.input-group-btn
    [:button.btn.btn-secondary.dropdown-toggle
     {:type "button" :data-toggle "dropdown" :aria-haspopup true :aria-expanded false}
     [:span.caret]]
    [:ul.dropdown-menu.dropdown-menu-right
     (if (empty? options)
       [:li [:p.dropdown-item "Keine Einträge"]]
       (doall (for [option options]
                [:li {:key option}
                 [:a.dropdown-item {:href "#" :on-click #(on-change-function option)}
                  option]])))]]])

(defn text-input [shown-text on-change-function]
  [:div.input-group
   [:input.form-control
    {:type "text" :value shown-text :on-change #(on-change-function (.-target.value %))}]])


(defn table [col-labels sorted-entries selected-key row selected-row & [new-row]]
  (if (and (empty? sorted-entries) (nil? new-row))
    [:p "Keine Eintragungen"]
    [:div.table-responsive
     [:table.table
        [:thead
         [:tr
          (doall (for [[k td] (zipmap (range (count col-labels))
                                      col-labels)]
                   [:th {:key k} td]))]]
        [:tbody
         [:tr (when (not (nil? new-row))
                (doall (for [[k td] (zipmap (range (count new-row)) new-row)]
                         [:td {:key (str "new" k)} td])))]
         (doall (for [[key tr] sorted-entries]
                  [(if (contains? tr :account-id) :tr :tr.bg-danger)
                   {:key key}
                   (doall (for [[k td]
                                (let [sel-row (selected-row key tr)]
                                  (zipmap (range (count sel-row))
                                          (if (= key selected-key)
                                            sel-row
                                            (row key tr))))]
                            [:td {:key k} td]))]))]]]))

(defn edit [on-click-function]
  [:img {:on-click on-click-function
         :src "icon/glyphicons_150_edit.png"
         :style {"cursor" "pointer"}}])

(defn ok [on-click-function]
  [:img {:on-click on-click-function
         :src "icon/glyphicons_206_ok_2.png"
         :style {"cursor" "pointer"}}])

(defn cancel [on-click-function]
  [:img {:on-click on-click-function
         :src "icon/glyphicons_207_remove_2.png"
         :style {"cursor" "pointer"}}])

(defn bin [on-click-function]
  [:img {:on-click on-click-function
         :src "icon/glyphicons_016_bin.png"
         :style {"cursor" "pointer"}}])

(defn btn-plus [on-click-function]
  [:button.btn.btn-default
   {:on-click on-click-function
    :style {"cursor" "pointer"}}
   [:img {:src "icon/glyphicons_432_plus.png"}]])

(defn btn-minus [on-click-function]
  [:button.btn.btn-default
   {:on-click on-click-function
    :style {"cursor" "pointer"}}
   [:img {:src "icon/glyphicons_434_minus.png"}]])

(defn row-with-plus [title on-click-function]
  [:div.row
   [:div.col-xs-6 [:h4 title]]
   [:div.col-xs-6 [:div.pull-right [btn-plus on-click-function]]]])

(defn row-with-toggle [title toggle]
  [:div.row
   [:div.col-xs-6 [:h4 title]]
   [:div.col-xs-6 [:div.pull-right
                   (if @toggle
                     [btn-minus #(reset! toggle false)]
                     [btn-plus #(reset! toggle true)])]]])

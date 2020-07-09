(ns lt-manager.core
  (:require [reagent.core :as reagent]
            [cljsjs.react]
            [cljsjs.jquery]
            [cljs.reader :as reader]
            [goog.i18n.DateTimeFormat :as dtf]
            [lt-manager.state :as state]
            [lt-manager.appointment-view :refer [appointment-view]]
            [lt-manager.client-view :refer [client-view]]
            [lt-manager.finance-view :refer [finance-view]]
            [lt-manager.search-view :refer [search-view]]
            [lt-manager.popups :refer [popups]]))
(defonce sections
  ["Termine" "Klienten" "Finanzen"])

(defn content-header []
  [:nav.navbar.navbar-default
   [:div.container-fluid
    [:div.navbar-header
     [:h2
      (if (and (= @state/current-section "Klienten")
               (not (nil? @state/selected-client)))
        [:a {:on-click #(reset! state/selected-client nil)} @state/current-section]
        @state/current-section)
      (when (and (= @state/current-section "Klienten")
                 (not (nil? @state/selected-client)))
        [:small " - "
         (:name (@state/selected-client @state/clients))])]]
    [:div.navbar-form.navbar-right
     [:div.form-group 
      [:input.form-control {:type "text"
                            :on-change #(reset! state/search (.-target.value %))
                            :value @state/search}]]
     [:button.btn.btn-default
      {:on-click #(reset! state/current-section "Suchergebnisse")}
      "Suchen" ]]]])

(defn content []
  [:div
   [content-header]
   (case @state/current-section
     "Termine" [appointment-view]
     "Klienten" [client-view]
     "Finanzen" [finance-view]
     "Suchergebnisse" [search-view]
     :default "View not implemented!")])

(defn navigation []
  [:ul.sidebar-nav
   [:li.sidebar-brand  "Lerntherapie Massa"]
   (doall (for [[key label] (map vector
                                 (range (count sections))
                                 sections)]
            [:li {:key key} [:a {:on-click #(do (reset! state/selected-client nil)
                                                (reset! state/current-section label))}
                             label]]))]
  ;;[:div.sidebar-logo [:img {:src "img/LogoColorNoText.png"}]]
  )

(defn main-page []
  [:div#wrapper
   [:div#sidebar-wrapper [navigation]]
   [:div#page-content-wrapper [content]]
   [popups]])

(defn mount-root []
  (reagent/render [main-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

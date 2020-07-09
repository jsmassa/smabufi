(ns lt-manager.appointment-view
  (:require [lt-manager.state :as state]
            [lt-manager.utilities :refer [show-money show-date format-date sort-by-date
                                          row-with-toggle]]
            [lt-manager.appointment-table :refer [appointment-table]]))


(defn appointment-view []
  (let [now (.getTime (js/Date.))
        earlier (sort-by-date (filter #(< (.getTime (:date (second %))) now)
                                      @state/appointments) true)
        later (sort-by-date (filter #(> (.getTime (:date (second %))) now)
                                    @state/appointments))]
    [:div
     [:div.panel.panel-default
      [:div.panel-heading
       [row-with-toggle "Kommende Termine" state/new-later-appointment-active]]
      (if (and (empty? later) (not @state/new-later-appointment-active))
        [:div.panel-body "Keine Eintragungen"]
        [appointment-table later
         state/new-later-appointment-active
         state/new-later-appointment])]
     [:div.panel.panel-default
      [:div.panel-heading
       [row-with-toggle "Vergangene Termine" state/new-earlier-appointment-active]]
      (if (and (empty? earlier) (not @state/new-earlier-appointment-active))
        [:div.panel-body "Keine Eintragungen"]
        [appointment-table earlier
         state/new-earlier-appointment-active
         state/new-earlier-appointment])]]))

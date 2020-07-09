(ns appointment-view
  (:require [lt-manager.state :as state]
            [lt-manager.utilities :refer [show-money show-date format-date
                                          sort-by-date
                                          appointment-table]]))

(defn appointment-view []
  (let [date (js/Date. 2014 1 1)
        earlier (sort-by-date (filter #(< (.getTime (:date (second %))) (.getTime date))
                                      @state/appointments))
        later (sort-by-date (filter #(> (.getTime (:date (second %))) (.getTime date))
                                    @state/appointments))]
    [:div
     [:div.panel.panel-default
      [:div.panel-heading "Kommende Termine"]
      [appointment-table later]]
     [:div.panel.panel-default
      [:div.panel-heading "Vergangene Termine"]
      [appointment-table earlier]]]))

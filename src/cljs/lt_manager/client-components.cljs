(ns lt-manager.client-components
  (:require [lt-manager.state :as state]
            [lt-manager.utilities :refer [row-with-plus row-with-toggle
                                          text-input ok next-key cancel]]
            [lt-manager.event-table :refer [event-table]]))


(defn client-panel-with-plus [title clients new-active? new-client default-client]
  [:div.panel.panel-default
   [:div.panel-heading
    (if (nil? new-active?)
      [:h4 title]
      [row-with-toggle title new-active?])]
   [:div.panel-body
    (when @new-active?
      [:a.list-group-item {:href "#"}
       [:div.row
        [:div.col-xs-6
         [text-input (:name @new-client)
          #(swap! new-client assoc :name %)]]
        [:div.col-xs-6
         [ok #(do (swap! state/clients assoc (next-key @state/clients)
                         @new-client)
                  (reset! new-client default-client)
                  (reset! new-active? false))]
         [cancel #(reset! new-active? false)]]]])
    (doall (for [[key client] clients]
             [:a.list-group-item {:key key
                                  :href "#"
                                  :on-click #(do (reset! state/selected-client key)
                                                 (reset! state/new-client-appointment-active false))}
              (:name client)]))]])

(defn list-panel [title keyed-records-with-name on-click-function]
  [:div.panel.panel-default
   [:div.panel-heading [:h4 title]]
   [:div.panel-body
    (doall (for [[key record] keyed-records-with-name]
             [:a.list-group-item {:key key
                                  :href "#"
                                  :on-click #(on-click-function key)}
              (:name record)]))]])


(defn event-panel [events]
  [:div.panel.panel-default
   [:div.panel-heading [row-with-toggle "Gruppen etc." state/new-event-active]]
   (if (and (empty? events) (not @state/new-event-active))
     [:div.panel-body "Keine Eintragungen"]
     [event-table events])])


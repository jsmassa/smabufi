(ns lt-manager.search-view
  (:require [lt-manager.client-components :refer [list-panel]]
            [lt-manager.state :as state]))


(defn private-client-panel [clients]
  [list-panel "Privatkunden"
   clients 
   #(do (reset! state/current-section "Klienten")
        (reset! state/selected-client %))])

(defn institution-panel [clients]
  [list-panel "Institutionen"
   clients
   #(do (reset! state/current-section "Klienten")
        (reset! state/selected-client %))])

(defn event-panel [events]
  [list-panel "Gruppen etc."
   events
   #(do (reset! state/current-section "Klienten")
        (reset! state/selected-client (:client-id (get @state/events %))))])

(defn search-view []
  [:div  ;; naive search
   (let [clients (filter #(not= -1 (.indexOf (.toLowerCase (:name (second %)))
                                             (.toLowerCase @state/search)))
                         @state/clients)
         private-clients (if (empty? clients) [] (group-by #(:private (second %)) clients))
         events (filter #(not= -1 (.indexOf (.toLowerCase (:name (second %)))
                                            (.toLowerCase @state/search)))
                        @state/events)]
     [:div
      [private-client-panel (get private-clients true)]
      [institution-panel (get private-clients false)]
      [event-panel events]])])


(ns lt-manager.event-table
  (:require [lt-manager.state :as state]
            [lt-manager.utilities :refer
             [next-key table text-input ok bin edit cancel]]))


(defn event-row [key event]
  [(:name event)
   (if (:group event) "ja" "nein")
   [:a {:on-click #(do (reset! state/selected-participant-event key)
                       (.modal (js/$ "#participantModal") "show"))}
    "anzeigen" ]
   [edit #(reset! state/selected-event key)]
   ""])

(defn event-row-selected [key event]
  [[text-input (:name event)
    #(swap! state/events assoc-in [key :name] %)]
   ""
   [:a {:on-click #(do (reset! state/selected-participant-event key)
                       (.modal (js/$ "#participantModal") "show"))}
    "anzeigen"]
   [ok #(reset! state/selected-event nil)]
   [bin #(.modal (js/$ "#deleteEventModal") "show")]])

(defn new-event-row []
  [[text-input (:name @state/new-event)
    #(swap! state/new-event assoc :name %)]
   ""
   [:a {:on-click #(do (reset! state/selected-participant-event key)
                       (.modal (js/$ "#participantModal") "show"))}
    "anzeigen"]
   [ok #(do (swap! state/events assoc (next-key @state/events) @state/new-event)
            (reset! state/new-event state/default-event)
            (reset! state/new-event-active false))]
   [cancel #(reset! state/new-event-active false)]])

(defn event-table [events]
  [table ["Name" "Gruppe?" "Teilnehmer" "" ""]
   events 
   @state/selected-event
   event-row
   event-row-selected
   (when @state/new-event-active (new-event-row))]) 

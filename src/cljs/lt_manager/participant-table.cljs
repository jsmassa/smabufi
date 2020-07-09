(ns lt-manager.participant-table
  (:require  [lt-manager.state :as state]
             [lt-manager.utilities :refer [table text-select-input get-distinct
                                           next-key text-input row-with-plus
                                           btn-plus ok cancel bin edit]]))

(defn participant-row [key contact]
  [(:name contact)
   (:label contact)
   (:email contact)
   (:phone contact)
   [edit #(reset! state/selected-participant key)]
   ""])

(defn participant-row-selected [key contact]
  [[text-select-input (:name contact) (get-distinct :name @state/contacts)
    #(swap! state/accounts assoc-in [key :name] %)]
   [text-select-input (:label contact) (get-distinct :label @state/contacts)
    #(swap! state/accounts assoc-in [key :label] %)]
   [text-select-input (:email contact) (get-distinct :email @state/contacts)
    #(swap! state/accounts assoc-in [key :email] %)]
   [text-select-input (:phone contact) (get-distinct :phone @state/contacts)
    #(swap! state/accounts assoc-in [key :phone] %)]
   [ok #(reset! state/selected-participant nil)]
   [bin #(do)]])

(defn new-participant []
  [(:name @state/new-participant)
   (:label @state/new-participant)
   (:email @state/new-participant)
   (:phone @state/new-participant)
   [ok #(do (swap! state/contacts assoc (next-key @state/contacts)
                   @state/new-participant)
            (reset! state/new-participant state/default-participant))]
   [cancel #(reset! state/new-participant state/default-participant)]])

(defn participant-table [participant-contacts]
  [table ["Name" "Zusatz" "Email" "Telefon" "" ""]
   participant-contacts 
   @state/selected-participant
   participant-row
   participant-row-selected
   new-participant])


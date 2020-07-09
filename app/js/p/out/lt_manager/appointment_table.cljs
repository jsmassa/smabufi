(ns lt-manager.appointment-table
  (:require [lt-manager.state :as state]
            ;;[lt-manager.store :refer get-event]
            
            [lt-manager.utilities :refer
             [show-date show-money checkbox next-key table
              date-input time-input money-input client-input
              ok bin edit cancel format-date]]))

(defn show-client [apt]
  (if (contains? apt :event)
     (let [event ((:event apt) @state/events)]
       (str (:name event) " (" (:name ((:client-id event) @state/clients)) ")"))
     (:name (get @state/clients (:client-id apt)))))

(defn appointment-row [key apt]
  [(show-date (:date apt))
   (show-client apt)
   (:hours apt)
   (show-money (:price apt))
   (show-money (quot (:price apt) (:hours apt)))
   (if (contains? apt :account-id) "ja" "nein")
   [edit #(reset! state/selected-appointment key)]
   ""])

(defn appointment-row-selected [key apt]
  [[date-input (:date apt) #(swap! state/appointments assoc-in [key :date] %) (str "apt" key)]
   ;;[:div [:input.span2.form-control {:size "16" :type "text" :value (show-date (:date apt)) :id "dpd1"}] [:script {:type "text/javascript"} (js/$ (fn [] (.datepicker (js/$ "#dpd1"))))]]
   [client-input (if (contains? apt :event)
                   (str "event-" (:event apt))
                   (:client-id apt))
    #(if (= :create-new (keyword %))
       (.modal (js/$ "#clientModal") "show")
       (if (= -1 (.indexOf % "event-"))
         (swap! state/appointments assoc-in [key :client-id]
                (keyword %))
         (do (swap! state/appointments assoc-in [key :event]
                    (keyword (subs % 7)))
             (swap! state/appointments assoc key
                    (dissoc (key @state/appointments) :client-id)))))]
   [time-input (:hours apt)
    #(swap! state/appointments assoc-in [key :hours] %)]
   [money-input (:price apt)
    #(swap! state/appointments assoc-in [key :price] %)]
   [money-input (quot (:price apt) (:hours apt))
    #(swap! state/appointments assoc-in [key :price] (* % (:hours apt)))]
   (if (contains? apt :account-id)
     [:a {:on-click #(do (swap! state/accounts dissoc (:account-id apt))
                         (swap! state/appointments assoc key (dissoc apt :account-id)))}
      "Einnahme löschen"]
     [:a {:on-click #(do (let [private (contains? apt :client-id)
                               event (if private nil ((:event apt) @state/events))
                               category (if private "Privat"
                                            (if (:group event) "Gruppen" "Sonstiges"))
                               subcategory (if private "" (:name ((:client-id event)
                                                                  @state/clients)))]
                           (reset! state/new-account {:date (js/Date.) :category category
                                                      :subcategory subcategory
                                                      :price (:price apt)}))
                         (.modal (js/$ "#revenueModal") "show")
                         (.log js/console @state/new-account)
                         (when (not (nil? @state/new-account-key))
                           (do (swap! state/appointments assoc-in [key :account-id]
                                      @state/new-account-key)
                               (reset! @state/new-account-key nil))))}
      "Einnahme hinzufügen"] )
   [ok #(reset! state/selected-appointment nil)]
   [bin #(.modal (js/$ "#deleteAppointmentModal") "show")]])


(defn new-appointment-row [new-active? new-appointment]
  [[date-input (:date @new-appointment)
    #(swap! new-appointment assoc :date %)]
   (if (= @state/current-section "Klienten")
     (show-client @state/new-client-appointment )
     [client-input (:client-id @new-appointment)
      #(if (= :create-new (keyword %))
         (.modal (js/$ "#clientModal") "show")
         (if (= 0 (.indexOf % "event-"))
           (do (swap! new-appointment assoc :event (keyword (subs % 7)))
               (swap! new-appointment dissoc :client-id))
           (swap! new-appointment assoc :client-id (keyword %))))])
   [time-input (:hours  @new-appointment)
    #(swap! new-appointment assoc :hours %)]
   [money-input (:price @new-appointment)
    #(swap! new-appointment assoc :price %)]
   [money-input (quot (:price @new-appointment) (:hours @new-appointment))
    #(swap! new-appointment assoc :price (* % (:hours @new-appointment)))]
   "nein"
   [ok #(do (swap! state/appointments assoc (next-key @state/appointments)
                   @new-appointment)
            (reset! new-appointment state/default-appointment)
            (reset! new-active? false))]
   [cancel #(do (reset! new-appointment state/default-appointment)
                (reset! new-active? false))]])

(defn appointment-table [sorted-entries new-active? new-appointment]
  [table ["Datum" "Bezeichnung" "Stunden" "Kosten in €" "€ / Stunden" "bezahlt" "" ""]
   sorted-entries
   @state/selected-appointment
   appointment-row
   appointment-row-selected
   (when @new-active? (new-appointment-row new-active? new-appointment))
   ])

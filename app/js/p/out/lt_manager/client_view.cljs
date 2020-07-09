(ns lt-manager.client-view
  (:require [lt-manager.state :as state]
            [lt-manager.utilities :refer [table text-select-input get-distinct
                                          next-key text-input row-with-plus
                                          row-with-toggle
                                          btn-plus ok cancel bin edit]]
            [lt-manager.client-components :refer [client-panel-with-plus event-panel]]
            [lt-manager.appointment-table :refer [appointment-table]]
            [lt-manager.event-table :refer [event-table]]))

(defn private-client-panel []
  (client-panel-with-plus
   "Privatkunden"
   (filter #(:private (second %)) @state/clients)
   state/new-private-client-active
   state/new-private-client
   state/default-private-client))

(defn institution-panel []
  (client-panel-with-plus
   "Institutionen"
   (remove #(:private (second %)) @state/clients)
   state/new-institution-active
   state/new-institution
   state/default-institution))


(defn client-overview []
  [:div
   [:div.row
    [:div.col-xs-6 [private-client-panel]]
    [:div.col-xs-6 [institution-panel]]]])

(defn contact-panel [client-id client]
  [:div.panel.panel-default
   [:div.panel-heading [row-with-toggle "Kontakt" state/new-contact-active]]
   [:div.panel-body
    (when @state/new-contact-active
      [:div 
       [text-input (:label @state/new-contact) #(swap! state/new-contact assoc :label %)]
       [:div
        [:div.table-responsive 
         [:table.table
          [:tr [:th "Name:"]
           [:td [text-input (:name @state/new-contact)
                 #(swap! state/new-contact assoc :name %)]]]
          [:tr [:th "Telefon:"]
           [:td [text-input (:phone @state/new-contact)
                 #(swap! state/new-contact assoc :phone %)]]]
          [:tr [:th "Email:"]
           [:td [text-input (:email @state/new-contact)
                 #(swap! state/new-contact assoc :email %)]
            [:div.pull-right
             [ok #(let [k (next-key @state/contacts)]
                    (do (swap! state/contacts assoc k @state/new-contact)
                        (swap! state/clients assoc-in [client-id :contact-ids]
                               (conj (:contact-ids client) k))
                        (reset! state/new-contact state/default-contact)
                        (reset! state/new-contact-active false)))]
             [cancel #(do (reset! state/new-contact state/default-contact)
                          (reset! state/new-contact-active false))]]]]]]]])
    (if (or (and (contains? client :contact-ids)
                 (not (empty? (:contact-ids client))))
            @state/new-contact-active) 
      (doall (for [key (:contact-ids client)]
               (let [contact (key @state/contacts)]
                 [:div {:key key}
                  [:div
                   [:strong (:label contact)]
                   (when (not= @state/selected-contact key)
                     [:div.pull-right [edit #(reset! state/selected-contact key)]])]
                  (if (= key @state/selected-contact)
                    [:div
                     [:div.table-responsive 
                      [:table.table
                       [:tr [:th "Name:"] [:td [text-input (:name contact)
                                                #(swap! state/contacts assoc-in [key :name] %)]]]
                       [:tr [:th "Telefon:"] [:td [text-input (:phone contact)
                                                   #(swap! state/contacts assoc-in [key :phone] %)]]]
                       [:tr [:th "Email:"]
                        [:td [text-input (:email contact)
                              #(swap! state/contacts assoc-in [key :email] %)]
                         [:div.pull-right
                          [ok #(reset! state/selected-contact nil)]
                          [bin #(do (swap! state/clients assoc-in [client-id :contact-ids]
                                           (disj (:contact-ids client) key))
                                    (swap! state/selected-contact key)
                                    (.modal (js/$ "#deleteContactModal") "show"))]]]]]]]
                    [:div.table-responsive 
                     [:table.table
                      [:tr [:th "Name:"] [:td (:name contact)]]
                      [:tr [:th "Telefon:"] [:td (:phone contact)]]
                      [:tr [:th "Email:"] [:td (:email contact)]]]])

                  ])))
      [:div "Keine Eintragungen"])]])

(defn address-panel [client-id client] ;; todo:fix
  [:div.panel.panel-default
   [:div.panel-heading
    (if (contains? client :address-id)
      [:h4 "Rechnungsadresse"]
      [row-with-toggle "Rechnungsadresse" state/new-address-active])]
   [:div.panel-body
    (when @state/new-address-active
      [:div
       [:div.table-responsive 
        [:table.table
         [:tr [:th "Name:"] [:td [text-input (:name @state/new-address)
                                  #(swap! state/new-address assoc :name %)]]]
         [:tr [:th "Straße:"] [:td [text-input (:street @state/new-address)
                                    #(swap! state/new-address assoc :street %)]]]
         [:tr [:th "Postleitzahl:"] [:td [text-input (:postal-code @state/new-address)
                                    #(swap! state/new-address assoc :postal-code %)]]]
         [:tr [:th "Stadt:"] [:td [text-input (:city @state/new-address)
                                   #(swap! state/new-address assoc :city %)]]]]]
       [:div.pull-right
        [ok #(let [k (next-key @state/addresses)]
               (do (swap! state/addresses assoc k @state/new-address)
                   (swap! state/clients assoc-in [client-id :address-id] k)
                   (reset! state/new-address state/default-address)
                   (reset! state/new-address-active false)))]
        [cancel #(do (reset! state/new-address state/default-address)
                     (reset! state/new-address-active false))]]])
    (if (contains? client :address-id) 
      (let [address ((:address-id client) @state/addresses)]
        (if (= (:address-id client) @state/selected-address)
          [:div.table-responsive 
           [:table.table
            [:tr [:th "Name:"]
             [:td [text-input (:name address)
                   #(swap! state/addresses assoc-in [key :name] %)]]]
            [:tr [:th "Straße:"]
             [:td [text-input (:street address)
                   #(swap! state/addresses assoc-in [key :street] %)]]]
            [:tr [:th "Postleitzahl:"]
             [:td [text-input (:postal-code address)
                   #(swap! state/addresses assoc-in [key :postal-code] %)]]]
            [:tr [:th "Stadt:"]
             [:td [text-input (:city address) 
                   #(swap! state/addresses assoc-in [key :city] %)]
              [:div.pull-right
               [ok #(reset! state/selected-address nil)]
               [bin #(do (swap! state/clients assoc client-id (dissoc client :address-id))
                         (swap! state/selected-address (:address-id client))
                         (.modal (js/$ "#deleteAddressModal") "show"))]]]]]]
          [:div
           [:div.pull-right [edit #(reset! state/selected-address (:address-id client))]]
           [:div.table-responsive
            [:table.table
             [:tr [:th "Name:"] [:td (:name address)]]
             [:tr [:th "Straße:"] [:td (:street address) ]]
             [:tr [:th "Postleitzahl:"] [:td (:postal-code address) ]]
             [:tr [:th "Stadt:"] [:td (:city address)]]]]]))
      (when (not @state/new-address-active)
        [:div "Keine Eintragungen"]))]])

(defn appointment-panel [client-id]
  [:div.panel.panel-default
   [:div.panel-heading
    [row-with-toggle "Termin" state/new-client-appointment-active 
    ;; #(do (reset! state/new-client-appointment state/default-appointment) (swap! state/new-client-appointment assoc :client-id client-id))
     ]]
   (let [dates (filter #(= (:client-id (second %)) client-id)
                       @state/appointments)]
     (if (and (empty? dates) (not state/new-client-appointment-active))
       [:div.panel-body "Keine Eintragungen"]
       [appointment-table dates
        state/new-client-appointment-active
        state/new-client-appointment]))])

(defn client-details [client-id]
  (let [client (client-id @state/clients)]
    [:div
     [:div.pull-right
      [bin #(.modal (js/$ "#deleteClientModal") "show")]]
     [:h3 (:name client)]
     [contact-panel client-id client] 
     [address-panel client-id client] 
     (when (not (:private client))
       [event-panel (filter #(= client-id (:client-id (second %))) @state/events)]) 
     [appointment-panel client-id] 
     [:button.btn.btn-default.pull-right
      {:on-click #(reset! state/selected-client nil)}
      "Zurück zur Klientenübersicht"]]))

(defn client-view []
  [:div
   (if (nil? @state/selected-client)
     [client-overview]
     [client-details @state/selected-client])])


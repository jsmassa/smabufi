(ns lt-manager.popups
  (:require
   [lt-manager.state :as state]
            [lt-manager.utilities :refer [date-input text-input show-money next-key]]
            [lt-manager.participant-table :refer [participant-table]]))

(defn form [label-field-mapping]
  [:form
   (doall (for [[label field] label-field-mapping]
            [:div.form-group.row {:key label}
             [:label.col-sm-3 label]
             [:div.col-sm-7 field]]))])

(defn client-popup []
  [:div.modal.fade {:id "clientModal" :tabIndex "-1" :role "dialog"}
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header
      [:button.close {:type "button" :data-dismiss "modal"} "×"]
      [:h3 "Neuer Kunde"]]
     [:div.modal-body
      [:div.container-fluid
       [:form.row
        [:div.form-group.col-sm-6
         [:label {:for "client-name"} "Anzeigename"]
         [:input.form-control {:type "text" :id "client-name" :value "Anzeigename"}
          (:name @state/new-private-client)]]
        [:fieldset.form-group.col-sm-2
         [:div.radio
          [:label [:input {:type "radio" :name "client-kind" :id "client-kind"}]
           "Privatkunde"]]
         [:div.radio
          [:label [:input {:type "radio" :name "client-kind" :id "client-kind"}]
           "Institution"]]]]
       [:h4 "Rechnungsadresse"]
       [:form
        [:div.form-group.row
         [:label.col-sm-2 {:for "inputaddressname"} "Name"]
         [:div.col-sm-10
          [:input.form-control {:type "text" :id "inputaddressname" :placeholer "Name"}]]]
        [:div.form-group.row
         [:label.col-sm-2 {:for "inputstreet"} "Straße"]
         [:div.col-sm-10
          [:input.form-control {:type "text" :id "inputstreet" :placeholer "Straße und Hausnummer"}]]]
        [:div.form-group.row
         [:label.col-sm-2 {:for "inputcity"} "Stadt"]
         [:div.col-sm-10
          [:input.form-control {:type "text" :id "inputcity" :placeholer "Stadt"}]]]]]]
     [:div {:class "modal-footer"}
      [:a.btn {:href "#" :data-dismiss "modal"} "Abbrechen"]
      [:a.btn.btn-primary {:href "#"} "Speichern"]]]]])

(defn confirmation-popup [id question on-yes-function]
  [:div.modal.fade
   {:id id :tabIndex "-1" :role "dialog"}
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header
      [:button.close {:type "button" :data-dismiss "modal"} "×"]
      [:h3 question]]
     [:div.modal-body
      [:div.row
       [:div.col-xs-2]
       [:div.col-xs-4
        [:a.btn.btn-default.btn-lg.center-block
         {:href "#" :data-dismiss "modal"} "Nein"]]
       [:div.col-xs-4
        [:a.btn.btn-primary.btn-lg.center-block
         {:href "#"
          :data-dismiss "modal"
          :on-click on-yes-function}
         "Ja"]]
       [:div.col-xs-2]]]]]])

(defn pdf-popup []
  [:div.modal.fade
   {:id "pdfModal" :tabIndex "-1" :role "dialog"}
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header "Rechnung erstellen"]
     [:div.modal-body
      [:iframe {:id "pdf";; :src (let [doc (js/jspdf)] (do (.text doc "Hello World" 10 10) (.output doc "datauristring")))
                :width "500" :height "500"}]
      ;;[:object {:frame-resize true :data @state/bill-url :type "application/pdf" :width "200px" :height "200px"} [:embed {:src @state/bill-url :type "application/pdf"}]]
      ]
     [:div.modal-footer
      [:a.btn {:href "#" :data-dismiss "modal"} "Abbrechen"]
      [:a.btn.btn-primary {:href "#" :data-dismiss "modal"} "Speichern"]]]]])

(defn delete-appointment-popup []
  [confirmation-popup "deleteAppointmentModal"
   "Eintrag wirklich löschen?"
   #(do (swap! state/appointments dissoc @state/selected-appointment)
        (reset! state/selected-appointment nil))])

(defn delete-event-popup []
  [confirmation-popup "deleteEventModal"
   "Eintrag wirklich löschen?"
   #(do (swap! state/events dissoc @state/selected-event)
        (reset! state/selected-event nil))])

(defn delete-address-popup []
  [confirmation-popup "deleteAddressModal"
   "Adresse komplett löschen?"
   #(swap! state/addresses dissoc @state/selected-address)])

(defn delete-contact-popup []
  [confirmation-popup "deleteContactModal"
   "Kontaktdaten komplett löschen?"
   #(swap! state/contacts dissoc @state/selected-contact)])

(defn delete-account-popup []
  [confirmation-popup "deleteAccountModal"
   "Eintrag löschen?"
   #(do (swap! state/accounts dissoc @state/selected-account)
        (let [appointments (filter (fn [apt] (= @state/selected-account(:account-id (second apt))))
                                  @state/appointments)]
          (for [apt appointments] ;; delete account from appointments
            (swap! state/appointments assoc (first apt)
                   (dissoc ((first apt) @state/appointments) :account-id)))))])

(defn delete-client-popup []
  [confirmation-popup "deleteClientModal"
   "Klienten löschen?"
   #(do (swap! state/clients dissoc @state/selected-client)
        (reset! state/selected-client nil))])

(defn revenue-popup []
  [:div.modal.fade {:id "revenueModal" :tabIndex "-1" :role "dialog"}
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header
      [:button.close {:type "button" :data-dismiss "modal"} "×"]
      [:h3 "Neue Einnahme"]]
     [:div.modal-body
      [form [["Datum" [date-input (:date @state/new-account)
                       #(swap! state/new-account assoc :date %)]]
             ["Kategorie" (:category @state/new-account)]
             ["Unterkategorie" (if (= "" (:subcategory @state/new-account))
                                 " -"
                                 (:subcategory @state/new-account))]
             ["Beschreibung" [text-input (if (contains? @state/new-account :description)
                                           (:description @state/new-account)
                                           "")
                              #(swap! state/new-account assoc :description %)]]
             ["Kosten" (str (show-money (:price @state/new-account)) " €")]]]]
     [:div {:class "modal-footer"}
      [:a.btn {:href "#" :data-dismiss "modal"} "Abbrechen"]
      [:a.btn.btn-primary
       {:href "#" :data-dismiss "modal"
        :on-click #(let [key (next-key @state/accounts)]
                     (do (swap! state/accounts assoc key @state/new-account)
                         (reset! state/new-account state/default-account)
                         (reset! state/new-account-key key)))}
       "Speichern"]]]]])

(defn participant-popup []
  (when (not (nil? @state/selected-participant-event))
    (let [event (@state/selected-participant-event @state/events)]
      [:div.modal.fade {:id "participantModal" :tabIndex "-1" :role "dialog"}
       [:div.modal-dialog
        [:div.modal-content
         [:div.modal-header
          [:button.close {:type "button" :data-dismiss "modal"} "×"]
          [:h3 "Teilnehmer von " (:name event)]]
         [:div.modal-body
          [participant-table (zipmap (:participants event)
                                     (replace @state/contacts (:participants event) ))]]
         [:div.modal-footer
          [:a.btn {:href "#" :data-dismiss "modal"} "Abbrechen"]
          [:a.btn.btn-primary {:href "#"} "Speichern"]]]]])))


(defn popups []
  [:div
   [client-popup]
   [revenue-popup]
   [participant-popup]
   [delete-appointment-popup]
   [delete-event-popup]
   [delete-address-popup]
   [delete-contact-popup]
   [delete-account-popup] 
   [delete-client-popup] 
   [pdf-popup]
   ])

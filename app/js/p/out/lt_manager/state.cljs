(ns lt-manager.state
  (:require [reagent.core :as reagent]
            [alandipert.storage-atom :refer [local-storage]]))


;; navigation
(defonce current-section (reagent/atom "Termine"))

;; defaults
(defonce default-appointment {:date (js/Date.) :price 5000 :hours 1 :paid false})
(defonce default-private-client {:name "" :private true})
(defonce default-institution {:name "" :private false})

;; appointment view
(defonce new-earlier-appointment-active (reagent/atom false))
(defonce new-earlier-appointment (reagent/atom default-appointment))
(defonce new-later-appointment-active (reagent/atom false))
(defonce new-later-appointment (reagent/atom default-appointment))

(defonce new-appointment (reagent/atom default-appointment))
(defonce new-appointment-active (reagent/atom false))
(defonce selected-appointment (reagent/atom nil))

;; client view
(defonce new-private-client-active (reagent/atom false))
(defonce new-private-client (reagent/atom default-private-client))

(defonce new-institution-active (reagent/atom false))
(defonce new-institution (reagent/atom default-institution))

(defonce selected-client (reagent/atom nil))

(defonce new-client-appointment (reagent/atom default-appointment))
(defonce new-client-appointment-active (reagent/atom false))

(defonce default-contact {})
(defonce new-contact-active (reagent/atom false))
(defonce new-contact (reagent/atom default-contact))
(defonce selected-contact(reagent/atom nil))

(defonce default-address {})
(defonce new-address-active (reagent/atom false))
(defonce new-address (reagent/atom default-address))
(defonce selected-address(reagent/atom nil))

(defonce selected-event (reagent/atom nil))
(defonce selected-participant-event (reagent/atom nil))
(defonce default-event {:name "" :group false :participants []})
(defonce new-event-active (reagent/atom false))
(defonce new-event (reagent/atom default-event))

(defonce selected-participant (reagent/atom nil))
(defonce default-participant {:name "" :group false :participants []})
(defonce new-participant-active (reagent/atom false))
(defonce new-participant (reagent/atom default-event))

;; finance view
(defonce selected-account (reagent/atom nil))
(defonce default-account {:date (js/Date.) :price 0 :category "" :subcategory ""})
(defonce new-account (reagent/atom default-account))
(defonce new-account-active (reagent/atom false))
(defonce new-account-key (reagent/atom nil))
(defonce bill-url (reagent/atom ""))

(defonce today (js/Date.))
(defonce finance-date-limit-upper (reagent/atom today))
(defonce finance-date-limit-lower (reagent/atom (js/Date. (.setMonth (js/Date.)
                                                                     (- (.getMonth today) 3)))))
;; search
(defonce search (reagent/atom ""))


;; data
(def appointments
  (local-storage
   (reagent/atom
    {:1 {:date (js/Date. 2016 3 11) :client-id :1000 :price 2536 :hours 3}
     :2 {:date (js/Date. 2016 6 11) :client-id :1001 :price 3252 :hours 3}
     :3 {:date (js/Date. 2015 0 6) :client-id :1000 :price 1183 :hours 5}
     :4 {:date (js/Date. 2016 4 15) :client-id :1000 :price 3035 :hours 1}
     :5 {:date (js/Date. 2016 3 21) :client-id :1002 :price 2553 :hours 2 :account-id :0}
     :6 {:date (js/Date. 2016 5 3) :client-id :1002 :price 4576 :hours 2}
     :7 {:date (js/Date. 2016 6 25) :client-id :1003 :price 3534 :hours 3}
     :8 {:date (js/Date. 2016 6 22) :event :0 :price 5432 :hours 2 :account-id :2}
     :9 {:date (js/Date. 2016 6 25) :event :1 :price 5472 :hours 2 :account-id :1}})
   :appointments))

(def events ;; participants are contacts
  (local-storage
   (reagent/atom
    {:0 {:name "VortragZ" :group false :participants [:0 :1 :2] :client-id :2000}
     :1 {:name "GruppeX" :group true :participants [:0 :1 :2] :client-id :2000}})
   :events))

(def clients
  (local-storage
   (reagent/atom
    {:1000 {:name "Picard" :private true :address-id :23 :contact-ids #{:0}}
     :1001 {:name "Riker" :private true :address-id :43 :contact-ids #{:1}}
     :1002 {:name "Data" :private true :address-id :75 :contact-ids #{:2}}
     :1003 {:name "Troi" :private true :address-id :45 :contact-ids #{:0}}
     :1004 {:name "Crusher" :private true :address-id :23 :contact-ids #{:1}}
     :2000 {:name "Starfleet" :private false :address-id :43 :contact-ids #{:2}}})
   :clients))

(def accounts
  (local-storage
   (reagent/atom
    {:0 {:date (js/Date. 2017 2 12) :price 2553 :category "Privat"}
     :1 {:date (js/Date. 2017 2 12) :price 5472 :category "Gruppen" :subcategory "Starfleet"}
     :2 {:date (js/Date. 2017 2 15) :price 5432 :category "Sonstiges" :subcategory "Starfleet"}
     :3 {:date (js/Date. 2017 2 12) :price -7799 :category "Bücher" :description "Was zum lesen"}
     :4 {:date (js/Date. 2017 2 28) :price -2000 :category "Büromaterial" :description "Papier"}
     :5 {:date (js/Date. 2017 2 27) :price -1550 :category "Spiele" :description "Ein Lernspiel"}})
   :accounts))

(def contacts
  (local-storage
   (reagent/atom
    {:0 {:label "Privat" :name "nvklf" :phone "063581938" :email "sth@sth.de"}
     :1 {:label "Schule" :name "fewgr" :phone "073520732" :email "mail@gmail.com"}
     :2 {:label "Arbeit" :name "vfifo" :phone "0853027345" :email "ich@email.de"}
     :3 {:label "Mobil" :name "fewgr" :phone "0220267921" :email "email@gmx.de"}})
   :contacts))

(def addresses
  (local-storage
   (reagent/atom
    {:23 {:name "Rechnungsname" :street "Einestraße 1" :city "Einestadt" :postal-code 76598}
     :43 {:name "Rechnungsname" :street "Diestraße 2" :city "Zweitestadt" :postal-code 55438}
     :75 {:name "Rechnungsname" :street "Dingsstraße 3" :city "Anderestadt" :postal-code 76521}
     :45 {:name "Rechnungsname" :street "Sonestraße 4" :city "Nocheinestadt" :postal-code 43897}})
   :addresses))

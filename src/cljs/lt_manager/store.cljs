(ns lt-manager.store
  (:require [reagent.core :as reagent]))

;; persistent storage in localstorage

(defn store [k obj]
  (.setItem js/localStorage k (js/JSON.stringify (clj->js obj))))

(defn keywordify [m]
  (cond
    (map? m) (into {} (for [[k v] m] [(keyword k) (keywordify v)]))
    (coll? m) (vec (map keywordify m))
    :else m))

(defn fetch [k default]
  (let [item (.getItem js/localStorage k)]
    (if item
      (-> (.getItem js/localStorage k)
          (or (js-obj))
          (js/JSON.parse)
          (js->clj)
          (keywordify))
      default)))

;;(defn get-events [] (fetch "events" {}))

;; (defn get-event [id] (id (fetch "events"))

;; data

(ns figwheel.connect (:require [lt-manager.dev] [figwheel.client] [figwheel.client.utils] [lt-manager.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/lt-manager.core.mount-root (apply js/lt-manager.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'lt-manager.core/mount-root' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})


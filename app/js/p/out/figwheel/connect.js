// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('lt_manager.dev');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('lt_manager.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21516__delegate = function (x){
if(cljs.core.truth_(lt_manager.core.mount_root)){
return cljs.core.apply.call(null,lt_manager.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'lt-manager.core/mount-root' is missing");
}
};
var G__21516 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21517__i = 0, G__21517__a = new Array(arguments.length -  0);
while (G__21517__i < G__21517__a.length) {G__21517__a[G__21517__i] = arguments[G__21517__i + 0]; ++G__21517__i;}
  x = new cljs.core.IndexedSeq(G__21517__a,0);
} 
return G__21516__delegate.call(this,x);};
G__21516.cljs$lang$maxFixedArity = 0;
G__21516.cljs$lang$applyTo = (function (arglist__21518){
var x = cljs.core.seq(arglist__21518);
return G__21516__delegate(x);
});
G__21516.cljs$core$IFn$_invoke$arity$variadic = G__21516__delegate;
return G__21516;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map
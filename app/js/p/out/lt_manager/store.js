// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.store');
goog.require('cljs.core');
goog.require('reagent.core');
lt_manager.store.store = (function lt_manager$store$store(k,obj){
return localStorage.setItem(k,JSON.stringify(cljs.core.clj__GT_js.call(null,obj)));
});
lt_manager.store.keywordify = (function lt_manager$store$keywordify(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19062__auto__ = (function lt_manager$store$keywordify_$_iter__41915(s__41916){
return (new cljs.core.LazySeq(null,(function (){
var s__41916__$1 = s__41916;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41916__$1);
if(temp__4425__auto__){
var s__41916__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41916__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__41916__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__41918 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__41917 = (0);
while(true){
if((i__41917 < size__19061__auto__)){
var vec__41921 = cljs.core._nth.call(null,c__19060__auto__,i__41917);
var k = cljs.core.nth.call(null,vec__41921,(0),null);
var v = cljs.core.nth.call(null,vec__41921,(1),null);
cljs.core.chunk_append.call(null,b__41918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),lt_manager$store$keywordify.call(null,v)], null));

var G__41923 = (i__41917 + (1));
i__41917 = G__41923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41918),lt_manager$store$keywordify_$_iter__41915.call(null,cljs.core.chunk_rest.call(null,s__41916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41918),null);
}
} else {
var vec__41922 = cljs.core.first.call(null,s__41916__$2);
var k = cljs.core.nth.call(null,vec__41922,(0),null);
var v = cljs.core.nth.call(null,vec__41922,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),lt_manager$store$keywordify.call(null,v)], null),lt_manager$store$keywordify_$_iter__41915.call(null,cljs.core.rest.call(null,s__41916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,m);
})());
} else {
if(cljs.core.coll_QMARK_.call(null,m)){
return cljs.core.vec.call(null,cljs.core.map.call(null,lt_manager$store$keywordify,m));
} else {
return m;

}
}
});
lt_manager.store.fetch = (function lt_manager$store$fetch(k,default$){
var item = localStorage.getItem(k);
if(cljs.core.truth_(item)){
return lt_manager.store.keywordify.call(null,cljs.core.js__GT_clj.call(null,JSON.parse((function (){var or__18290__auto__ = localStorage.getItem(k);
if(cljs.core.truth_(or__18290__auto__)){
return or__18290__auto__;
} else {
return {};
}
})())));
} else {
return default$;
}
});

//# sourceMappingURL=store.js.map
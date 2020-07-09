// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.core');
goog.require('cljs.core');
goog.require('lt_manager.client_view');
goog.require('reagent.core');
goog.require('cljsjs.jquery');
goog.require('lt_manager.popups');
goog.require('goog.i18n.DateTimeFormat');
goog.require('cljsjs.react');
goog.require('lt_manager.state');
goog.require('lt_manager.finance_view');
goog.require('lt_manager.search_view');
goog.require('lt_manager.appointment_view');
goog.require('cljs.reader');
if(typeof lt_manager.core.sections !== 'undefined'){
} else {
lt_manager.core.sections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Termine","Klienten","Finanzen"], null);
}
lt_manager.core.content_header = (function lt_manager$core$content_header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-default","nav.navbar.navbar-default",560267194),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lt_manager.state.current_section),"Klienten")) && (!((cljs.core.deref.call(null,lt_manager.state.selected_client) == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,null);
})], null),cljs.core.deref.call(null,lt_manager.state.current_section)], null):cljs.core.deref.call(null,lt_manager.state.current_section)),(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lt_manager.state.current_section),"Klienten")) && (!((cljs.core.deref.call(null,lt_manager.state.selected_client) == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704)," - ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.selected_client).call(null,cljs.core.deref.call(null,lt_manager.state.clients)))], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-form.navbar-right","div.navbar-form.navbar-right",1636939445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20500_SHARP_){
return cljs.core.reset_BANG_.call(null,lt_manager.state.search,p1__20500_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,lt_manager.state.search)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.current_section,"Suchergebnisse");
})], null),"Suchen"], null)], null)], null)], null);
});
lt_manager.core.content = (function lt_manager$core$content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.core.content_header], null),(function (){var G__20502 = cljs.core.deref.call(null,lt_manager.state.current_section);
if(cljs.core._EQ_.call(null,"Termine",G__20502)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.appointment_view.appointment_view], null);
} else {
if(cljs.core._EQ_.call(null,"Klienten",G__20502)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.client_view], null);
} else {
if(cljs.core._EQ_.call(null,"Finanzen",G__20502)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.finance_view], null);
} else {
if(cljs.core._EQ_.call(null,"Suchergebnisse",G__20502)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.search_view.search_view], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__20502)){
return "View not implemented!";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,lt_manager.state.current_section))].join('')));

}
}
}
}
}
})()], null);
});
lt_manager.core.navigation = (function lt_manager$core$navigation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.sidebar-nav","ul.sidebar-nav",-2087471315),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.sidebar-brand","li.sidebar-brand",841806130),"Lerntherapie Massa"], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$core$navigation_$_iter__20511(s__20512){
return (new cljs.core.LazySeq(null,(function (){
var s__20512__$1 = s__20512;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20512__$1);
if(temp__4425__auto__){
var s__20512__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20512__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__20512__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__20514 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__20513 = (0);
while(true){
if((i__20513 < size__19061__auto__)){
var vec__20517 = cljs.core._nth.call(null,c__19060__auto__,i__20513);
var key = cljs.core.nth.call(null,vec__20517,(0),null);
var label = cljs.core.nth.call(null,vec__20517,(1),null);
cljs.core.chunk_append.call(null,b__20514,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20513,vec__20517,key,label,c__19060__auto__,size__19061__auto__,b__20514,s__20512__$2,temp__4425__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,null);

return cljs.core.reset_BANG_.call(null,lt_manager.state.current_section,label);
});})(i__20513,vec__20517,key,label,c__19060__auto__,size__19061__auto__,b__20514,s__20512__$2,temp__4425__auto__))
], null),label], null)], null));

var G__20519 = (i__20513 + (1));
i__20513 = G__20519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20514),lt_manager$core$navigation_$_iter__20511.call(null,cljs.core.chunk_rest.call(null,s__20512__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20514),null);
}
} else {
var vec__20518 = cljs.core.first.call(null,s__20512__$2);
var key = cljs.core.nth.call(null,vec__20518,(0),null);
var label = cljs.core.nth.call(null,vec__20518,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__20518,key,label,s__20512__$2,temp__4425__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,null);

return cljs.core.reset_BANG_.call(null,lt_manager.state.current_section,label);
});})(vec__20518,key,label,s__20512__$2,temp__4425__auto__))
], null),label], null)], null),lt_manager$core$navigation_$_iter__20511.call(null,cljs.core.rest.call(null,s__20512__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,cljs.core.count.call(null,lt_manager.core.sections)),lt_manager.core.sections));
})())], null);
});
lt_manager.core.main_page = (function lt_manager$core$main_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wrapper","div#wrapper",220024300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-wrapper","div#sidebar-wrapper",1043226224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.core.navigation], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#page-content-wrapper","div#page-content-wrapper",-520561575),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.core.content], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.popups], null)], null);
});
lt_manager.core.mount_root = (function lt_manager$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.core.main_page], null),document.getElementById("app"));
});
lt_manager.core.init_BANG_ = (function lt_manager$core$init_BANG_(){
return lt_manager.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.client_components');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
goog.require('lt_manager.event_table');
lt_manager.client_components.client_panel_with_plus = (function lt_manager$client_components$client_panel_with_plus(title,clients,new_active_QMARK_,new_client,default_client){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),(((new_active_QMARK_ == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,title,new_active_QMARK_], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),(cljs.core.truth_(cljs.core.deref.call(null,new_active_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_client)),(function (p1__27150_SHARP_){
return cljs.core.swap_BANG_.call(null,new_client,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__27150_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.clients,cljs.core.assoc,lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.clients)),cljs.core.deref.call(null,new_client));

cljs.core.reset_BANG_.call(null,new_client,default_client);

return cljs.core.reset_BANG_.call(null,new_active_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.cancel,(function (){
return cljs.core.reset_BANG_.call(null,new_active_QMARK_,false);
})], null)], null)], null)], null):null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$client_components$client_panel_with_plus_$_iter__27159(s__27160){
return (new cljs.core.LazySeq(null,(function (){
var s__27160__$1 = s__27160;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27160__$1);
if(temp__4425__auto__){
var s__27160__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27160__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__27160__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__27162 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__27161 = (0);
while(true){
if((i__27161 < size__19061__auto__)){
var vec__27165 = cljs.core._nth.call(null,c__19060__auto__,i__27161);
var key = cljs.core.nth.call(null,vec__27165,(0),null);
var client = cljs.core.nth.call(null,vec__27165,(1),null);
cljs.core.chunk_append.call(null,b__27162,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27161,vec__27165,key,client,c__19060__auto__,size__19061__auto__,b__27162,s__27160__$2,temp__4425__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,key);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_client_appointment_active,false);
});})(i__27161,vec__27165,key,client,c__19060__auto__,size__19061__auto__,b__27162,s__27160__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(client)], null));

var G__27167 = (i__27161 + (1));
i__27161 = G__27167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27162),lt_manager$client_components$client_panel_with_plus_$_iter__27159.call(null,cljs.core.chunk_rest.call(null,s__27160__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27162),null);
}
} else {
var vec__27166 = cljs.core.first.call(null,s__27160__$2);
var key = cljs.core.nth.call(null,vec__27166,(0),null);
var client = cljs.core.nth.call(null,vec__27166,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27166,key,client,s__27160__$2,temp__4425__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,key);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_client_appointment_active,false);
});})(vec__27166,key,client,s__27160__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(client)], null),lt_manager$client_components$client_panel_with_plus_$_iter__27159.call(null,cljs.core.rest.call(null,s__27160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,clients);
})())], null)], null);
});
lt_manager.client_components.list_panel = (function lt_manager$client_components$list_panel(title,keyed_records_with_name,on_click_function){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$client_components$list_panel_$_iter__27176(s__27177){
return (new cljs.core.LazySeq(null,(function (){
var s__27177__$1 = s__27177;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27177__$1);
if(temp__4425__auto__){
var s__27177__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27177__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__27177__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__27179 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__27178 = (0);
while(true){
if((i__27178 < size__19061__auto__)){
var vec__27182 = cljs.core._nth.call(null,c__19060__auto__,i__27178);
var key = cljs.core.nth.call(null,vec__27182,(0),null);
var record = cljs.core.nth.call(null,vec__27182,(1),null);
cljs.core.chunk_append.call(null,b__27179,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27178,vec__27182,key,record,c__19060__auto__,size__19061__auto__,b__27179,s__27177__$2,temp__4425__auto__){
return (function (){
return on_click_function.call(null,key);
});})(i__27178,vec__27182,key,record,c__19060__auto__,size__19061__auto__,b__27179,s__27177__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(record)], null));

var G__27184 = (i__27178 + (1));
i__27178 = G__27184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27179),lt_manager$client_components$list_panel_$_iter__27176.call(null,cljs.core.chunk_rest.call(null,s__27177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27179),null);
}
} else {
var vec__27183 = cljs.core.first.call(null,s__27177__$2);
var key = cljs.core.nth.call(null,vec__27183,(0),null);
var record = cljs.core.nth.call(null,vec__27183,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",362927887),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27183,key,record,s__27177__$2,temp__4425__auto__){
return (function (){
return on_click_function.call(null,key);
});})(vec__27183,key,record,s__27177__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(record)], null),lt_manager$client_components$list_panel_$_iter__27176.call(null,cljs.core.rest.call(null,s__27177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,keyed_records_with_name);
})())], null)], null);
});
lt_manager.client_components.event_panel = (function lt_manager$client_components$event_panel(events){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,"Gruppen etc.",lt_manager.state.new_event_active], null)], null),(((cljs.core.empty_QMARK_.call(null,events)) && (cljs.core.not.call(null,cljs.core.deref.call(null,lt_manager.state.new_event_active))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),"Keine Eintragungen"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.event_table.event_table,events], null))], null);
});

//# sourceMappingURL=client_components.js.map
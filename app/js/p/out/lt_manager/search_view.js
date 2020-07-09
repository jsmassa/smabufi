// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.search_view');
goog.require('cljs.core');
goog.require('lt_manager.client_components');
goog.require('lt_manager.state');
lt_manager.search_view.private_client_panel = (function lt_manager$search_view$private_client_panel(clients){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_components.list_panel,"Privatkunden",clients,(function (p1__27187_SHARP_){
cljs.core.reset_BANG_.call(null,lt_manager.state.current_section,"Klienten");

return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,p1__27187_SHARP_);
})], null);
});
lt_manager.search_view.institution_panel = (function lt_manager$search_view$institution_panel(clients){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_components.list_panel,"Institutionen",clients,(function (p1__27188_SHARP_){
cljs.core.reset_BANG_.call(null,lt_manager.state.current_section,"Klienten");

return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,p1__27188_SHARP_);
})], null);
});
lt_manager.search_view.event_panel = (function lt_manager$search_view$event_panel(events){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_components.list_panel,"Gruppen etc.",events,(function (p1__27189_SHARP_){
cljs.core.reset_BANG_.call(null,lt_manager.state.current_section,"Klienten");

return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,lt_manager.state.events),p1__27189_SHARP_)));
})], null);
});
lt_manager.search_view.search_view = (function lt_manager$search_view$search_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var clients = cljs.core.filter.call(null,(function (p1__27190_SHARP_){
return cljs.core.not_EQ_.call(null,(-1),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27190_SHARP_)).toLowerCase().indexOf(cljs.core.deref.call(null,lt_manager.state.search).toLowerCase()));
}),cljs.core.deref.call(null,lt_manager.state.clients));
var private_clients = ((cljs.core.empty_QMARK_.call(null,clients))?cljs.core.PersistentVector.EMPTY:cljs.core.group_by.call(null,((function (clients){
return (function (p1__27191_SHARP_){
return new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27191_SHARP_));
});})(clients))
,clients));
var events = cljs.core.filter.call(null,((function (clients,private_clients){
return (function (p1__27192_SHARP_){
return cljs.core.not_EQ_.call(null,(-1),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27192_SHARP_)).toLowerCase().indexOf(cljs.core.deref.call(null,lt_manager.state.search).toLowerCase()));
});})(clients,private_clients))
,cljs.core.deref.call(null,lt_manager.state.events));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.search_view.private_client_panel,cljs.core.get.call(null,private_clients,true)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.search_view.institution_panel,cljs.core.get.call(null,private_clients,false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.search_view.event_panel,events], null)], null);
})()], null);
});

//# sourceMappingURL=search_view.js.map
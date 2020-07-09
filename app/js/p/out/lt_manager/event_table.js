// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.event_table');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
lt_manager.event_table.event_row = (function lt_manager$event_table$event_row(key,event){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event),(cljs.core.truth_(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(event))?"ja":"nein"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.selected_participant_event,key);

return $("#participantModal").modal("show");
})], null),"anzeigen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.edit,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_event,key);
})], null),""], null);
});
lt_manager.event_table.event_row_selected = (function lt_manager$event_table$event_row_selected(key,event){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event),(function (p1__27146_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.events,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__27146_SHARP_);
})], null),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.selected_participant_event,key);

return $("#participantModal").modal("show");
})], null),"anzeigen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_event,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,(function (){
return $("#deleteEventModal").modal("show");
})], null)], null);
});
lt_manager.event_table.new_event_row = (function lt_manager$event_table$new_event_row(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_event)),(function (p1__27147_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_event,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__27147_SHARP_);
})], null),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.selected_participant_event,cljs.core.key);

return $("#participantModal").modal("show");
})], null),"anzeigen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.events,cljs.core.assoc,lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.events)),cljs.core.deref.call(null,lt_manager.state.new_event));

cljs.core.reset_BANG_.call(null,lt_manager.state.new_event,lt_manager.state.default_event);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_event_active,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.cancel,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.new_event_active,false);
})], null)], null);
});
lt_manager.event_table.event_table = (function lt_manager$event_table$event_table(events){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name","Gruppe?","Teilnehmer","",""], null),events,cljs.core.deref.call(null,lt_manager.state.selected_event),lt_manager.event_table.event_row,lt_manager.event_table.event_row_selected,(cljs.core.truth_(cljs.core.deref.call(null,lt_manager.state.new_event_active))?lt_manager.event_table.new_event_row.call(null):null)], null);
});

//# sourceMappingURL=event_table.js.map
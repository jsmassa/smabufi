// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.appointment_view');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
goog.require('lt_manager.appointment_table');
lt_manager.appointment_view.appointment_view = (function lt_manager$appointment_view$appointment_view(){
var now = (new Date()).getTime();
var earlier = lt_manager.utilities.sort_by_date.call(null,cljs.core.filter.call(null,((function (now){
return (function (p1__27113_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27113_SHARP_)).getTime() < now);
});})(now))
,cljs.core.deref.call(null,lt_manager.state.appointments)),true);
var later = lt_manager.utilities.sort_by_date.call(null,cljs.core.filter.call(null,((function (now,earlier){
return (function (p1__27114_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27114_SHARP_)).getTime() > now);
});})(now,earlier))
,cljs.core.deref.call(null,lt_manager.state.appointments)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,"Kommende Termine",lt_manager.state.new_later_appointment_active], null)], null),(((cljs.core.empty_QMARK_.call(null,later)) && (cljs.core.not.call(null,cljs.core.deref.call(null,lt_manager.state.new_later_appointment_active))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),"Keine Eintragungen"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.appointment_table.appointment_table,later,lt_manager.state.new_later_appointment_active,lt_manager.state.new_later_appointment], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,"Vergangene Termine",lt_manager.state.new_earlier_appointment_active], null)], null),(((cljs.core.empty_QMARK_.call(null,earlier)) && (cljs.core.not.call(null,cljs.core.deref.call(null,lt_manager.state.new_earlier_appointment_active))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),"Keine Eintragungen"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.appointment_table.appointment_table,earlier,lt_manager.state.new_earlier_appointment_active,lt_manager.state.new_earlier_appointment], null))], null)], null);
});

//# sourceMappingURL=appointment_view.js.map
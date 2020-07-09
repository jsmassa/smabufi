// Compiled by ClojureScript 1.7.228 {}
goog.provide('appointment_view');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
appointment_view.appointment_view = (function appointment_view$appointment_view(){
var date = (new Date((2014),(1),(1)));
var earlier = lt_manager.utilities.sort_by_date.call(null,cljs.core.filter.call(null,((function (date){
return (function (p1__23539_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__23539_SHARP_)).getTime() < date.getTime());
});})(date))
,cljs.core.deref.call(null,lt_manager.state.appointments)));
var later = lt_manager.utilities.sort_by_date.call(null,cljs.core.filter.call(null,((function (date,earlier){
return (function (p1__23540_SHARP_){
return (new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__23540_SHARP_)).getTime() > date.getTime());
});})(date,earlier))
,cljs.core.deref.call(null,lt_manager.state.appointments)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Kommende Termine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.appointment_table,later], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Vergangene Termine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.appointment_table,earlier], null)], null)], null);
});

//# sourceMappingURL=appointment_view.js.map
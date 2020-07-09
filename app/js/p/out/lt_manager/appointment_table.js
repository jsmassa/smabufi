// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.appointment_table');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
lt_manager.appointment_table.show_client = (function lt_manager$appointment_table$show_client(apt){
if(cljs.core.contains_QMARK_.call(null,apt,new cljs.core.Keyword(null,"event","event",301435442))){
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(apt).call(null,cljs.core.deref.call(null,lt_manager.state.events));
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(event).call(null,cljs.core.deref.call(null,lt_manager.state.clients)))),cljs.core.str(")")].join('');
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,lt_manager.state.clients),new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(apt)));
}
});
lt_manager.appointment_table.appointment_row = (function lt_manager$appointment_table$appointment_row(key,apt){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.show_date.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(apt)),lt_manager.appointment_table.show_client.call(null,apt),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(apt),lt_manager.utilities.show_money.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(apt)),lt_manager.utilities.show_money.call(null,cljs.core.quot.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(apt),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(apt))),((cljs.core.contains_QMARK_.call(null,apt,new cljs.core.Keyword(null,"account-id","account-id",-860833743)))?"ja":"nein"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.edit,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_appointment,key);
})], null),""], null);
});
lt_manager.appointment_table.appointment_row_selected = (function lt_manager$appointment_table$appointment_row_selected(key,apt){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.date_input,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(apt),(function (p1__26844_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"date","date",-1463434462)], null),p1__26844_SHARP_);
}),[cljs.core.str("apt"),cljs.core.str(key)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.client_input,((cljs.core.contains_QMARK_.call(null,apt,new cljs.core.Keyword(null,"event","event",301435442)))?[cljs.core.str("event-"),cljs.core.str(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(apt))].join(''):new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(apt)),(function (p1__26845_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create-new","create-new",2007592228),cljs.core.keyword.call(null,p1__26845_SHARP_))){
return $("#clientModal").modal("show");
} else {
if(cljs.core._EQ_.call(null,(-1),p1__26845_SHARP_.indexOf("event-"))){
return cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"client-id","client-id",-464622140)], null),cljs.core.keyword.call(null,p1__26845_SHARP_));
} else {
cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"event","event",301435442)], null),cljs.core.keyword.call(null,cljs.core.subs.call(null,p1__26845_SHARP_,(7))));

return cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc,key,cljs.core.dissoc.call(null,key.call(null,cljs.core.deref.call(null,lt_manager.state.appointments)),new cljs.core.Keyword(null,"client-id","client-id",-464622140)));
}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.time_input,new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(apt),(function (p1__26846_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"hours","hours",58380855)], null),p1__26846_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.money_input,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(apt),(function (p1__26847_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"price","price",22129180)], null),p1__26847_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.money_input,cljs.core.quot.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(apt),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(apt)),(function (p1__26848_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"price","price",22129180)], null),(p1__26848_SHARP_ * new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(apt)));
})], null),((cljs.core.contains_QMARK_.call(null,apt,new cljs.core.Keyword(null,"account-id","account-id",-860833743)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.dissoc,new cljs.core.Keyword(null,"account-id","account-id",-860833743).cljs$core$IFn$_invoke$arity$1(apt));

return cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc,key,cljs.core.dissoc.call(null,apt,new cljs.core.Keyword(null,"account-id","account-id",-860833743)));
})], null),"Einnahme l\u00F6schen"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var private_26849 = cljs.core.contains_QMARK_.call(null,apt,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event_26850 = ((private_26849)?null:new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(apt).call(null,cljs.core.deref.call(null,lt_manager.state.events)));
var category_26851 = ((private_26849)?"Privat":(cljs.core.truth_(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(event_26850))?"Gruppen":"Sonstiges"));
var subcategory_26852 = ((private_26849)?"":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(event_26850).call(null,cljs.core.deref.call(null,lt_manager.state.clients))));
cljs.core.reset_BANG_.call(null,lt_manager.state.new_account,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()),new cljs.core.Keyword(null,"category","category",-593092832),category_26851,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),subcategory_26852,new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(apt)], null));

$("#revenueModal").modal("show");

console.log(cljs.core.deref.call(null,lt_manager.state.new_account));

if(!((cljs.core.deref.call(null,lt_manager.state.new_account_key) == null))){
cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"account-id","account-id",-860833743)], null),cljs.core.deref.call(null,lt_manager.state.new_account_key));

return cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,lt_manager.state.new_account_key),null);
} else {
return null;
}
})], null),"Einnahme hinzuf\u00FCgen"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_appointment,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,(function (){
return $("#deleteAppointmentModal").modal("show");
})], null)], null);
});
lt_manager.appointment_table.new_appointment_row = (function lt_manager$appointment_table$new_appointment_row(new_active_QMARK_,new_appointment){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.date_input,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_appointment)),(function (p1__26853_SHARP_){
return cljs.core.swap_BANG_.call(null,new_appointment,cljs.core.assoc,new cljs.core.Keyword(null,"date","date",-1463434462),p1__26853_SHARP_);
})], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lt_manager.state.current_section),"Klienten"))?lt_manager.appointment_table.show_client.call(null,cljs.core.deref.call(null,lt_manager.state.new_client_appointment)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.client_input,new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_appointment)),(function (p1__26854_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"create-new","create-new",2007592228),cljs.core.keyword.call(null,p1__26854_SHARP_))){
return $("#clientModal").modal("show");
} else {
if(cljs.core._EQ_.call(null,(0),p1__26854_SHARP_.indexOf("event-"))){
cljs.core.swap_BANG_.call(null,new_appointment,cljs.core.assoc,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.keyword.call(null,cljs.core.subs.call(null,p1__26854_SHARP_,(7))));

return cljs.core.swap_BANG_.call(null,new_appointment,cljs.core.dissoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
} else {
return cljs.core.swap_BANG_.call(null,new_appointment,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.keyword.call(null,p1__26854_SHARP_));
}
}
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.time_input,new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_appointment)),(function (p1__26855_SHARP_){
return cljs.core.swap_BANG_.call(null,new_appointment,cljs.core.assoc,new cljs.core.Keyword(null,"hours","hours",58380855),p1__26855_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.money_input,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_appointment)),(function (p1__26856_SHARP_){
return cljs.core.swap_BANG_.call(null,new_appointment,cljs.core.assoc,new cljs.core.Keyword(null,"price","price",22129180),p1__26856_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.money_input,cljs.core.quot.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_appointment)),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_appointment))),(function (p1__26857_SHARP_){
return cljs.core.swap_BANG_.call(null,new_appointment,cljs.core.assoc,new cljs.core.Keyword(null,"price","price",22129180),(p1__26857_SHARP_ * new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new_appointment))));
})], null),"nein",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc,lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.appointments)),cljs.core.deref.call(null,new_appointment));

cljs.core.reset_BANG_.call(null,new_appointment,lt_manager.state.default_appointment);

return cljs.core.reset_BANG_.call(null,new_active_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.cancel,(function (){
cljs.core.reset_BANG_.call(null,new_appointment,lt_manager.state.default_appointment);

return cljs.core.reset_BANG_.call(null,new_active_QMARK_,false);
})], null)], null);
});
lt_manager.appointment_table.appointment_table = (function lt_manager$appointment_table$appointment_table(sorted_entries,new_active_QMARK_,new_appointment){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.table,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datum","Bezeichnung","Stunden","Kosten in \u20AC","\u20AC / Stunden","bezahlt","",""], null),sorted_entries,cljs.core.deref.call(null,lt_manager.state.selected_appointment),lt_manager.appointment_table.appointment_row,lt_manager.appointment_table.appointment_row_selected,(cljs.core.truth_(cljs.core.deref.call(null,new_active_QMARK_))?lt_manager.appointment_table.new_appointment_row.call(null,new_active_QMARK_,new_appointment):null)], null);
});

//# sourceMappingURL=appointment_table.js.map
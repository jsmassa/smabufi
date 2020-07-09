// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.client_view');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
goog.require('lt_manager.client_components');
goog.require('lt_manager.appointment_table');
goog.require('lt_manager.event_table');
lt_manager.client_view.private_client_panel = (function lt_manager$client_view$private_client_panel(){
return lt_manager.client_components.client_panel_with_plus.call(null,"Privatkunden",cljs.core.filter.call(null,(function (p1__27195_SHARP_){
return new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27195_SHARP_));
}),cljs.core.deref.call(null,lt_manager.state.clients)),lt_manager.state.new_private_client_active,lt_manager.state.new_private_client,lt_manager.state.default_private_client);
});
lt_manager.client_view.institution_panel = (function lt_manager$client_view$institution_panel(){
return lt_manager.client_components.client_panel_with_plus.call(null,"Institutionen",cljs.core.remove.call(null,(function (p1__27196_SHARP_){
return new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27196_SHARP_));
}),cljs.core.deref.call(null,lt_manager.state.clients)),lt_manager.state.new_institution_active,lt_manager.state.new_institution,lt_manager.state.default_institution);
});
lt_manager.client_view.client_overview = (function lt_manager$client_view$client_overview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.private_client_panel], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.institution_panel], null)], null)], null)], null);
});
lt_manager.client_view.contact_panel = (function lt_manager$client_view$contact_panel(client_id,client){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,"Kontakt",lt_manager.state.new_contact_active], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),(cljs.core.truth_(cljs.core.deref.call(null,lt_manager.state.new_contact_active))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_contact)),(function (p1__27197_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_contact,cljs.core.assoc,new cljs.core.Keyword(null,"label","label",1718410804),p1__27197_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_contact)),(function (p1__27198_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_contact,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__27198_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Telefon:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_contact)),(function (p1__27199_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_contact,cljs.core.assoc,new cljs.core.Keyword(null,"phone","phone",-763596057),p1__27199_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Email:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_contact)),(function (p1__27200_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_contact,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__27200_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
var k = lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.contacts));
cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc,k,cljs.core.deref.call(null,lt_manager.state.new_contact));

cljs.core.swap_BANG_.call(null,lt_manager.state.clients,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048).cljs$core$IFn$_invoke$arity$1(client),k));

cljs.core.reset_BANG_.call(null,lt_manager.state.new_contact,lt_manager.state.default_contact);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_contact_active,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.cancel,(function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.new_contact,lt_manager.state.default_contact);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_contact_active,false);
})], null)], null)], null)], null)], null)], null)], null)], null):null),(cljs.core.truth_((function (){var or__18290__auto__ = (cljs.core.contains_QMARK_.call(null,client,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048))) && (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048).cljs$core$IFn$_invoke$arity$1(client))));
if(or__18290__auto__){
return or__18290__auto__;
} else {
return cljs.core.deref.call(null,lt_manager.state.new_contact_active);
}
})())?cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$client_view$contact_panel_$_iter__27208(s__27209){
return (new cljs.core.LazySeq(null,(function (){
var s__27209__$1 = s__27209;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27209__$1);
if(temp__4425__auto__){
var s__27209__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27209__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__27209__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__27211 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__27210 = (0);
while(true){
if((i__27210 < size__19061__auto__)){
var key = cljs.core._nth.call(null,c__19060__auto__,i__27210);
cljs.core.chunk_append.call(null,b__27211,(function (){var contact = key.call(null,cljs.core.deref.call(null,lt_manager.state.contacts));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(contact)], null),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,lt_manager.state.selected_contact),key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.edit,((function (i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_contact,key);
});})(i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__))
], null)], null):null)], null),((cljs.core._EQ_.call(null,key,cljs.core.deref.call(null,lt_manager.state.selected_contact)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contact),((function (i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__){
return (function (p1__27201_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__27201_SHARP_);
});})(i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Telefon:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(contact),((function (i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__){
return (function (p1__27202_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"phone","phone",-763596057)], null),p1__27202_SHARP_);
});})(i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Email:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(contact),((function (i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__){
return (function (p1__27203_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"email","email",1415816706)], null),p1__27203_SHARP_);
});})(i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,((function (i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_contact,null);
});})(i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,((function (i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__){
return (function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.clients,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048)], null),cljs.core.disj.call(null,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048).cljs$core$IFn$_invoke$arity$1(client),key));

cljs.core.swap_BANG_.call(null,lt_manager.state.selected_contact,key);

return $("#deleteContactModal").modal("show");
});})(i__27210,contact,key,c__19060__auto__,size__19061__auto__,b__27211,s__27209__$2,temp__4425__auto__))
], null)], null)], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contact)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Telefon:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(contact)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Email:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(contact)], null)], null)], null)], null))], null);
})());

var G__27212 = (i__27210 + (1));
i__27210 = G__27212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27211),lt_manager$client_view$contact_panel_$_iter__27208.call(null,cljs.core.chunk_rest.call(null,s__27209__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27211),null);
}
} else {
var key = cljs.core.first.call(null,s__27209__$2);
return cljs.core.cons.call(null,(function (){var contact = key.call(null,cljs.core.deref.call(null,lt_manager.state.contacts));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(contact)], null),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,lt_manager.state.selected_contact),key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.edit,((function (contact,key,s__27209__$2,temp__4425__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_contact,key);
});})(contact,key,s__27209__$2,temp__4425__auto__))
], null)], null):null)], null),((cljs.core._EQ_.call(null,key,cljs.core.deref.call(null,lt_manager.state.selected_contact)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contact),((function (contact,key,s__27209__$2,temp__4425__auto__){
return (function (p1__27201_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__27201_SHARP_);
});})(contact,key,s__27209__$2,temp__4425__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Telefon:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(contact),((function (contact,key,s__27209__$2,temp__4425__auto__){
return (function (p1__27202_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"phone","phone",-763596057)], null),p1__27202_SHARP_);
});})(contact,key,s__27209__$2,temp__4425__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Email:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(contact),((function (contact,key,s__27209__$2,temp__4425__auto__){
return (function (p1__27203_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"email","email",1415816706)], null),p1__27203_SHARP_);
});})(contact,key,s__27209__$2,temp__4425__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,((function (contact,key,s__27209__$2,temp__4425__auto__){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_contact,null);
});})(contact,key,s__27209__$2,temp__4425__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,((function (contact,key,s__27209__$2,temp__4425__auto__){
return (function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.clients,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048)], null),cljs.core.disj.call(null,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048).cljs$core$IFn$_invoke$arity$1(client),key));

cljs.core.swap_BANG_.call(null,lt_manager.state.selected_contact,key);

return $("#deleteContactModal").modal("show");
});})(contact,key,s__27209__$2,temp__4425__auto__))
], null)], null)], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contact)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Telefon:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(contact)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Email:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(contact)], null)], null)], null)], null))], null);
})(),lt_manager$client_view$contact_panel_$_iter__27208.call(null,cljs.core.rest.call(null,s__27209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048).cljs$core$IFn$_invoke$arity$1(client));
})()):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Keine Eintragungen"], null))], null)], null);
});
lt_manager.client_view.address_panel = (function lt_manager$client_view$address_panel(client_id,client){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),((cljs.core.contains_QMARK_.call(null,client,new cljs.core.Keyword(null,"address-id","address-id",1186706344)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Rechnungsadresse"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,"Rechnungsadresse",lt_manager.state.new_address_active], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),(cljs.core.truth_(cljs.core.deref.call(null,lt_manager.state.new_address_active))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_address)),(function (p1__27213_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_address,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__27213_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stra\u00DFe:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_address)),(function (p1__27214_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_address,cljs.core.assoc,new cljs.core.Keyword(null,"street","street",1870012303),p1__27214_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Postleitzahl:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_address)),(function (p1__27215_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_address,cljs.core.assoc,new cljs.core.Keyword(null,"postal-code","postal-code",368585871),p1__27215_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stadt:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_address)),(function (p1__27216_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_address,cljs.core.assoc,new cljs.core.Keyword(null,"city","city",-393302614),p1__27216_SHARP_);
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
var k = lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.addresses));
cljs.core.swap_BANG_.call(null,lt_manager.state.addresses,cljs.core.assoc,k,cljs.core.deref.call(null,lt_manager.state.new_address));

cljs.core.swap_BANG_.call(null,lt_manager.state.clients,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id,new cljs.core.Keyword(null,"address-id","address-id",1186706344)], null),k);

cljs.core.reset_BANG_.call(null,lt_manager.state.new_address,lt_manager.state.default_address);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_address_active,false);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.cancel,(function (){
cljs.core.reset_BANG_.call(null,lt_manager.state.new_address,lt_manager.state.default_address);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_address_active,false);
})], null)], null)], null):null),((cljs.core.contains_QMARK_.call(null,client,new cljs.core.Keyword(null,"address-id","address-id",1186706344)))?(function (){var address = new cljs.core.Keyword(null,"address-id","address-id",1186706344).cljs$core$IFn$_invoke$arity$1(client).call(null,cljs.core.deref.call(null,lt_manager.state.addresses));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"address-id","address-id",1186706344).cljs$core$IFn$_invoke$arity$1(client),cljs.core.deref.call(null,lt_manager.state.selected_address))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(address),((function (address){
return (function (p1__27217_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.addresses,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key,new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__27217_SHARP_);
});})(address))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stra\u00DFe:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(address),((function (address){
return (function (p1__27218_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.addresses,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key,new cljs.core.Keyword(null,"street","street",1870012303)], null),p1__27218_SHARP_);
});})(address))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Postleitzahl:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(address),((function (address){
return (function (p1__27219_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.addresses,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key,new cljs.core.Keyword(null,"postal-code","postal-code",368585871)], null),p1__27219_SHARP_);
});})(address))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stadt:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(address),((function (address){
return (function (p1__27220_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.addresses,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.key,new cljs.core.Keyword(null,"city","city",-393302614)], null),p1__27220_SHARP_);
});})(address))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,((function (address){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_address,null);
});})(address))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,((function (address){
return (function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.clients,cljs.core.assoc,client_id,cljs.core.dissoc.call(null,client,new cljs.core.Keyword(null,"address-id","address-id",1186706344)));

cljs.core.swap_BANG_.call(null,lt_manager.state.selected_address,new cljs.core.Keyword(null,"address-id","address-id",1186706344).cljs$core$IFn$_invoke$arity$1(client));

return $("#deleteAddressModal").modal("show");
});})(address))
], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.edit,((function (address){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_address,new cljs.core.Keyword(null,"address-id","address-id",1186706344).cljs$core$IFn$_invoke$arity$1(client));
});})(address))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(address)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stra\u00DFe:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(address)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Postleitzahl:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"postal-code","postal-code",368585871).cljs$core$IFn$_invoke$arity$1(address)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stadt:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(address)], null)], null)], null)], null)], null);
}
})():((cljs.core.not.call(null,cljs.core.deref.call(null,lt_manager.state.new_address_active)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Keine Eintragungen"], null):null))], null)], null);
});
lt_manager.client_view.appointment_panel = (function lt_manager$client_view$appointment_panel(client_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,"Termin",lt_manager.state.new_client_appointment_active], null)], null),(function (){var dates = cljs.core.filter.call(null,(function (p1__27221_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27221_SHARP_)),client_id);
}),cljs.core.deref.call(null,lt_manager.state.appointments));
if((cljs.core.empty_QMARK_.call(null,dates)) && (cljs.core.not.call(null,lt_manager.state.new_client_appointment_active))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),"Keine Eintragungen"], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.appointment_table.appointment_table,dates,lt_manager.state.new_client_appointment_active,lt_manager.state.new_client_appointment], null);
}
})()], null);
});
lt_manager.client_view.client_details = (function lt_manager$client_view$client_details(client_id){
var client = client_id.call(null,cljs.core.deref.call(null,lt_manager.state.clients));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,((function (client){
return (function (){
return $("#deleteClientModal").modal("show");
});})(client))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(client)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.contact_panel,client_id,client], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.address_panel,client_id,client], null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(client)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_components.event_panel,cljs.core.filter.call(null,((function (client){
return (function (p1__27222_SHARP_){
return cljs.core._EQ_.call(null,client_id,new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27222_SHARP_)));
});})(client))
,cljs.core.deref.call(null,lt_manager.state.events))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.appointment_panel,client_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.pull-right","button.btn.btn-default.pull-right",1868443249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (client){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,null);
});})(client))
], null),"Zur\u00FCck zur Klienten\u00FCbersicht"], null)], null);
});
lt_manager.client_view.client_view = (function lt_manager$client_view$client_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.deref.call(null,lt_manager.state.selected_client) == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.client_overview], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.client_view.client_details,cljs.core.deref.call(null,lt_manager.state.selected_client)], null))], null);
});

//# sourceMappingURL=client_view.js.map
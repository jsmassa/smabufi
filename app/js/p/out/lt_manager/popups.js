// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.popups');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
goog.require('lt_manager.participant_table');
lt_manager.popups.form = (function lt_manager$popups$form(label_field_mapping){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.doall.call(null,(function (){var iter__19063__auto__ = (function lt_manager$popups$form_$_iter__22650(s__22651){
return (new cljs.core.LazySeq(null,(function (){
var s__22651__$1 = s__22651;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22651__$1);
if(temp__4425__auto__){
var s__22651__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22651__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__22651__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__22653 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__22652 = (0);
while(true){
if((i__22652 < size__19062__auto__)){
var vec__22656 = cljs.core._nth.call(null,c__19061__auto__,i__22652);
var label = cljs.core.nth.call(null,vec__22656,(0),null);
var field = cljs.core.nth.call(null,vec__22656,(1),null);
cljs.core.chunk_append.call(null,b__22653,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.row","div.form-group.row",448197899),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-7","div.col-sm-7",-1884513921),field], null)], null));

var G__22658 = (i__22652 + (1));
i__22652 = G__22658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22653),lt_manager$popups$form_$_iter__22650.call(null,cljs.core.chunk_rest.call(null,s__22651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22653),null);
}
} else {
var vec__22657 = cljs.core.first.call(null,s__22651__$2);
var label = cljs.core.nth.call(null,vec__22657,(0),null);
var field = cljs.core.nth.call(null,vec__22657,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.row","div.form-group.row",448197899),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-7","div.col-sm-7",-1884513921),field], null)], null),lt_manager$popups$form_$_iter__22650.call(null,cljs.core.rest.call(null,s__22651__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19063__auto__.call(null,label_field_mapping);
})())], null);
});
lt_manager.popups.client_popup = (function lt_manager$popups$client_popup(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"clientModal",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Neuer Kunde"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.row","form.row",-1285611859),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.col-sm-6","div.form-group.col-sm-6",-1516357162),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"client-name"], null),"Anzeigename"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"client-name",new cljs.core.Keyword(null,"value","value",305978217),"Anzeigename"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_private_client))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group.col-sm-2","fieldset.form-group.col-sm-2",1728474094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.radio","div.radio",1435221667),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"client-kind",new cljs.core.Keyword(null,"id","id",-1388402092),"client-kind"], null)], null),"Privatkunde"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.radio","div.radio",1435221667),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"client-kind",new cljs.core.Keyword(null,"id","id",-1388402092),"client-kind"], null)], null),"Institution"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Rechnungsadresse"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.row","div.form-group.row",448197899),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-2","label.col-sm-2",-1366004891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"inputaddressname"], null),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"inputaddressname",new cljs.core.Keyword(null,"placeholer","placeholer",2042355183),"Name"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.row","div.form-group.row",448197899),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-2","label.col-sm-2",-1366004891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"inputstreet"], null),"Stra\u00DFe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"inputstreet",new cljs.core.Keyword(null,"placeholer","placeholer",2042355183),"Stra\u00DFe und Hausnummer"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.row","div.form-group.row",448197899),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-2","label.col-sm-2",-1366004891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"inputcity"], null),"Stadt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"inputcity",new cljs.core.Keyword(null,"placeholer","placeholer",2042355183),"Stadt"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-footer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Abbrechen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Speichern"], null)], null)], null)], null)], null);
});
lt_manager.popups.confirmation_popup = (function lt_manager$popups$confirmation_popup(id,question,on_yes_function){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),question], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-2","div.col-xs-2",1114365381)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default.btn-lg.center-block","a.btn.btn-default.btn-lg.center-block",-1079971583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Nein"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.btn-lg.center-block","a.btn.btn-primary.btn-lg.center-block",-1955380691),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_yes_function], null),"Ja"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-2","div.col-xs-2",1114365381)], null)], null)], null)], null)], null)], null);
});
lt_manager.popups.pdf_popup = (function lt_manager$popups$pdf_popup(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"pdfModal",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),"Rechnung erstellen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"pdf",new cljs.core.Keyword(null,"width","width",-384071477),"500",new cljs.core.Keyword(null,"height","height",1025178622),"500"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Abbrechen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Speichern"], null)], null)], null)], null)], null);
});
lt_manager.popups.delete_appointment_popup = (function lt_manager$popups$delete_appointment_popup(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.confirmation_popup,"deleteAppointmentModal","Eintrag wirklich l\u00F6schen?",(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.dissoc,cljs.core.deref.call(null,lt_manager.state.selected_appointment));

return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_appointment,null);
})], null);
});
lt_manager.popups.delete_event_popup = (function lt_manager$popups$delete_event_popup(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.confirmation_popup,"deleteEventModal","Eintrag wirklich l\u00F6schen?",(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.events,cljs.core.dissoc,cljs.core.deref.call(null,lt_manager.state.selected_event));

return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_event,null);
})], null);
});
lt_manager.popups.delete_address_popup = (function lt_manager$popups$delete_address_popup(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.confirmation_popup,"deleteAddressModal","Adresse komplett l\u00F6schen?",(function (){
return cljs.core.swap_BANG_.call(null,lt_manager.state.addresses,cljs.core.dissoc,cljs.core.deref.call(null,lt_manager.state.selected_address));
})], null);
});
lt_manager.popups.delete_contact_popup = (function lt_manager$popups$delete_contact_popup(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.confirmation_popup,"deleteContactModal","Kontaktdaten komplett l\u00F6schen?",(function (){
return cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.dissoc,cljs.core.deref.call(null,lt_manager.state.selected_contact));
})], null);
});
lt_manager.popups.delete_account_popup = (function lt_manager$popups$delete_account_popup(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.confirmation_popup,"deleteAccountModal","Eintrag l\u00F6schen?",(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.dissoc,cljs.core.deref.call(null,lt_manager.state.selected_account));

var appointments = cljs.core.filter.call(null,(function (apt){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,lt_manager.state.selected_account),new cljs.core.Keyword(null,"account-id","account-id",-860833743).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,apt)));
}),cljs.core.deref.call(null,lt_manager.state.appointments));
var iter__19063__auto__ = ((function (appointments){
return (function lt_manager$popups$delete_account_popup_$_iter__22663(s__22664){
return (new cljs.core.LazySeq(null,((function (appointments){
return (function (){
var s__22664__$1 = s__22664;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22664__$1);
if(temp__4425__auto__){
var s__22664__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22664__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__22664__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__22666 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__22665 = (0);
while(true){
if((i__22665 < size__19062__auto__)){
var apt = cljs.core._nth.call(null,c__19061__auto__,i__22665);
cljs.core.chunk_append.call(null,b__22666,cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc,cljs.core.first.call(null,apt),cljs.core.dissoc.call(null,cljs.core.first.call(null,apt).call(null,cljs.core.deref.call(null,lt_manager.state.appointments)),new cljs.core.Keyword(null,"account-id","account-id",-860833743))));

var G__22667 = (i__22665 + (1));
i__22665 = G__22667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22666),lt_manager$popups$delete_account_popup_$_iter__22663.call(null,cljs.core.chunk_rest.call(null,s__22664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22666),null);
}
} else {
var apt = cljs.core.first.call(null,s__22664__$2);
return cljs.core.cons.call(null,cljs.core.swap_BANG_.call(null,lt_manager.state.appointments,cljs.core.assoc,cljs.core.first.call(null,apt),cljs.core.dissoc.call(null,cljs.core.first.call(null,apt).call(null,cljs.core.deref.call(null,lt_manager.state.appointments)),new cljs.core.Keyword(null,"account-id","account-id",-860833743))),lt_manager$popups$delete_account_popup_$_iter__22663.call(null,cljs.core.rest.call(null,s__22664__$2)));
}
} else {
return null;
}
break;
}
});})(appointments))
,null,null));
});})(appointments))
;
return iter__19063__auto__.call(null,appointments);
})], null);
});
lt_manager.popups.delete_client_popup = (function lt_manager$popups$delete_client_popup(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.confirmation_popup,"deleteClientModal","Klienten l\u00F6schen?",(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.clients,cljs.core.dissoc,cljs.core.deref.call(null,lt_manager.state.selected_client));

return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_client,null);
})], null);
});
lt_manager.popups.revenue_popup = (function lt_manager$popups$revenue_popup(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"revenueModal",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Neue Einnahme"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datum",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.date_input,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),(function (p1__22668_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_account,cljs.core.assoc,new cljs.core.Keyword(null,"date","date",-1463434462),p1__22668_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Kategorie",new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unterkategorie",((cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account))))?" -":new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Beschreibung",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,lt_manager.state.new_account),new cljs.core.Keyword(null,"description","description",-1428560544)))?new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)):""),(function (p1__22669_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_account,cljs.core.assoc,new cljs.core.Keyword(null,"description","description",-1428560544),p1__22669_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Kosten",[cljs.core.str(lt_manager.utilities.show_money.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)))),cljs.core.str(" \u20AC")].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-footer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Abbrechen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var key = lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.accounts));
cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc,key,cljs.core.deref.call(null,lt_manager.state.new_account));

cljs.core.reset_BANG_.call(null,lt_manager.state.new_account,lt_manager.state.default_account);

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_account_key,key);
})], null),"Speichern"], null)], null)], null)], null)], null);
});
lt_manager.popups.participant_popup = (function lt_manager$popups$participant_popup(){
if(!((cljs.core.deref.call(null,lt_manager.state.selected_participant_event) == null))){
var event = cljs.core.deref.call(null,lt_manager.state.selected_participant_event).call(null,cljs.core.deref.call(null,lt_manager.state.events));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"participantModal",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"\u00D7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Teilnehmer von ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.participant_table.participant_table,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(event),cljs.core.replace.call(null,cljs.core.deref.call(null,lt_manager.state.contacts),new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(event)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Abbrechen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Speichern"], null)], null)], null)], null)], null);
} else {
return null;
}
});
lt_manager.popups.popups = (function lt_manager$popups$popups(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.client_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.revenue_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.participant_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.delete_appointment_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.delete_event_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.delete_address_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.delete_contact_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.delete_account_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.delete_client_popup], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.popups.pdf_popup], null)], null);
});

//# sourceMappingURL=popups.js.map
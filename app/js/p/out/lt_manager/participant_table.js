// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.participant_table');
goog.require('cljs.core');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
lt_manager.participant_table.participant_row = (function lt_manager$participant_table$participant_row(key,contact){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contact),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(contact),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(contact),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(contact),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.edit,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_participant,key);
})], null),""], null);
});
lt_manager.participant_table.participant_row_selected = (function lt_manager$participant_table$participant_row_selected(key,contact){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contact),lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref.call(null,lt_manager.state.contacts)),(function (p1__26890_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__26890_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(contact),lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,lt_manager.state.contacts)),(function (p1__26891_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"label","label",1718410804)], null),p1__26891_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(contact),lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref.call(null,lt_manager.state.contacts)),(function (p1__26892_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"email","email",1415816706)], null),p1__26892_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(contact),lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"phone","phone",-763596057),cljs.core.deref.call(null,lt_manager.state.contacts)),(function (p1__26893_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"phone","phone",-763596057)], null),p1__26893_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_participant,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,(function (){
return null;
})], null)], null);
});
lt_manager.participant_table.new_participant = (function lt_manager$participant_table$new_participant(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_participant)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_participant)),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_participant)),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_participant)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,(function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.contacts,cljs.core.assoc,lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.contacts)),cljs.core.deref.call(null,lt_manager.state.new_participant));

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_participant,lt_manager.state.default_participant);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.cancel,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.new_participant,lt_manager.state.default_participant);
})], null)], null);
});
lt_manager.participant_table.participant_table = (function lt_manager$participant_table$participant_table(participant_contacts){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.table,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name","Zusatz","Email","Telefon","",""], null),participant_contacts,cljs.core.deref.call(null,lt_manager.state.selected_participant),lt_manager.participant_table.participant_row,lt_manager.participant_table.participant_row_selected,lt_manager.participant_table.new_participant], null);
});

//# sourceMappingURL=participant_table.js.map
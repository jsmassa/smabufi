// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.utilities');
goog.require('cljs.core');
goog.require('goog.i18n.DateTimeFormat');
goog.require('lt_manager.state');
lt_manager.utilities.show_money = (function lt_manager$utilities$show_money(cents){
var e = cljs.core.quot.call(null,cents,(100));
var ct = cljs.core.mod.call(null,cents,(100));
return [cljs.core.str(e),cljs.core.str(","),cljs.core.str((((ct < (10)))?[cljs.core.str("0"),cljs.core.str(ct)].join(''):ct))].join('');
});
lt_manager.utilities.show_date = (function lt_manager$utilities$show_date(date){
return (new goog.i18n.DateTimeFormat("dd.MM.yyyy")).format(date);
});
lt_manager.utilities.format_date = (function lt_manager$utilities$format_date(date){
return (new goog.i18n.DateTimeFormat("yyyy-MM-dd")).format(date);
});
lt_manager.utilities.sort_by_date = (function lt_manager$utilities$sort_by_date(var_args){
var args26660 = [];
var len__19348__auto___26663 = arguments.length;
var i__19349__auto___26664 = (0);
while(true){
if((i__19349__auto___26664 < len__19348__auto___26663)){
args26660.push((arguments[i__19349__auto___26664]));

var G__26665 = (i__19349__auto___26664 + (1));
i__19349__auto___26664 = G__26665;
continue;
} else {
}
break;
}

var G__26662 = args26660.length;
switch (G__26662) {
case 1:
return lt_manager.utilities.sort_by_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lt_manager.utilities.sort_by_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26660.length)].join('')));

}
});

lt_manager.utilities.sort_by_date.cljs$core$IFn$_invoke$arity$1 = (function (appointments){
return lt_manager.utilities.sort_by_date.call(null,appointments,false);
});

lt_manager.utilities.sort_by_date.cljs$core$IFn$_invoke$arity$2 = (function (appointments,reverse_QMARK_){
var sorted = cljs.core.sort_by.call(null,(function (p1__26659_SHARP_){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__26659_SHARP_)).getTime();
}),appointments);
if(cljs.core.truth_(reverse_QMARK_)){
return cljs.core.reverse.call(null,sorted);
} else {
return sorted;
}
});

lt_manager.utilities.sort_by_date.cljs$lang$maxFixedArity = 2;
lt_manager.utilities.next_key = (function lt_manager$utilities$next_key(keyword_numbered_map){
return cljs.core.keyword.call(null,[cljs.core.str((cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__26667_SHARP_){
return parseInt(cljs.core.subs.call(null,[cljs.core.str(cljs.core.first.call(null,p1__26667_SHARP_))].join(''),(1)));
}),keyword_numbered_map)) + (1)))].join(''));
});
lt_manager.utilities.get_distinct = (function lt_manager$utilities$get_distinct(key,hmap){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__26668_SHARP_){
return key.call(null,cljs.core.second.call(null,p1__26668_SHARP_));
}),hmap))));
});
lt_manager.utilities.date_input = (function lt_manager$utilities$date_input(shown_date,on_change_function,dpid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.span2.form-control","input.span2.form-control",-1370361562),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1098693007),"16",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),lt_manager.utilities.show_date.call(null,shown_date),new cljs.core.Keyword(null,"id","id",-1388402092),dpid,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26669_SHARP_){
console.log(p1__26669_SHARP_.target.value);

return on_change_function.call(null,(new Date(p1__26669_SHARP_.target.value)));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript"], null),$((function (){
return $(dpid).datepicker();
}))], null)], null);
});
lt_manager.utilities.time_input = (function lt_manager$utilities$time_input(shown_time,on_change_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),shown_time,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26670_SHARP_){
return on_change_function.call(null,p1__26670_SHARP_.target.value);
})], null)], null)], null);
});
lt_manager.utilities.money_input = (function lt_manager$utilities$money_input(shown_sum,on_change_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]+([,][0-9]{1,2})?",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(cljs.core.quot.call(null,shown_sum,(100))),cljs.core.str(","),cljs.core.str(cljs.core.rem.call(null,shown_sum,(100)))].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26671_SHARP_){
return on_change_function.call(null,((p1__26671_SHARP_.target.value.replace(/,/,".") * (100)) | (0)));
})], null)], null)], null);
});
lt_manager.utilities.checkbox = (function lt_manager$utilities$checkbox(checked_QMARK_,on_change_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26672_SHARP_){
return on_change_function.call(null,p1__26672_SHARP_.target.checked);
})], null)], null);
});
lt_manager.utilities.client_input = (function lt_manager$utilities$client_input(shown_client,on_change_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),shown_client,new cljs.core.Keyword(null,"id","id",-1388402092),"clientSelect",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26673_SHARP_){
return on_change_function.call(null,p1__26673_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"create-new","create-new",2007592228)], null),"Neu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Privatkunden"], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$utilities$client_input_$_iter__26690(s__26691){
return (new cljs.core.LazySeq(null,(function (){
var s__26691__$1 = s__26691;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26691__$1);
if(temp__4425__auto__){
var s__26691__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26691__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__26691__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__26693 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__26692 = (0);
while(true){
if((i__26692 < size__19061__auto__)){
var vec__26696 = cljs.core._nth.call(null,c__19060__auto__,i__26692);
var c_id = cljs.core.nth.call(null,vec__26696,(0),null);
var c = cljs.core.nth.call(null,vec__26696,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(c))){
cljs.core.chunk_append.call(null,b__26693,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),c_id,new cljs.core.Keyword(null,"value","value",305978217),c_id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c)], null));

var G__26706 = (i__26692 + (1));
i__26692 = G__26706;
continue;
} else {
var G__26707 = (i__26692 + (1));
i__26692 = G__26707;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26693),lt_manager$utilities$client_input_$_iter__26690.call(null,cljs.core.chunk_rest.call(null,s__26691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26693),null);
}
} else {
var vec__26697 = cljs.core.first.call(null,s__26691__$2);
var c_id = cljs.core.nth.call(null,vec__26697,(0),null);
var c = cljs.core.nth.call(null,vec__26697,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(c))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),c_id,new cljs.core.Keyword(null,"value","value",305978217),c_id], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c)], null),lt_manager$utilities$client_input_$_iter__26690.call(null,cljs.core.rest.call(null,s__26691__$2)));
} else {
var G__26708 = cljs.core.rest.call(null,s__26691__$2);
s__26691__$1 = G__26708;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,cljs.core.deref.call(null,lt_manager.state.clients));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Gruppen etc."], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$utilities$client_input_$_iter__26698(s__26699){
return (new cljs.core.LazySeq(null,(function (){
var s__26699__$1 = s__26699;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26699__$1);
if(temp__4425__auto__){
var s__26699__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26699__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__26699__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__26701 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__26700 = (0);
while(true){
if((i__26700 < size__19061__auto__)){
var vec__26704 = cljs.core._nth.call(null,c__19060__auto__,i__26700);
var e_id = cljs.core.nth.call(null,vec__26704,(0),null);
var e = cljs.core.nth.call(null,vec__26704,(1),null);
cljs.core.chunk_append.call(null,b__26701,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("event-"),cljs.core.str(e_id)].join(''),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str("event-"),cljs.core.str(e_id)].join('')], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(e).call(null,cljs.core.deref.call(null,lt_manager.state.clients)))),cljs.core.str(")")].join('')], null));

var G__26709 = (i__26700 + (1));
i__26700 = G__26709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26701),lt_manager$utilities$client_input_$_iter__26698.call(null,cljs.core.chunk_rest.call(null,s__26699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26701),null);
}
} else {
var vec__26705 = cljs.core.first.call(null,s__26699__$2);
var e_id = cljs.core.nth.call(null,vec__26705,(0),null);
var e = cljs.core.nth.call(null,vec__26705,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("event-"),cljs.core.str(e_id)].join(''),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str("event-"),cljs.core.str(e_id)].join('')], null),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(e).call(null,cljs.core.deref.call(null,lt_manager.state.clients)))),cljs.core.str(")")].join('')], null),lt_manager$utilities$client_input_$_iter__26698.call(null,cljs.core.rest.call(null,s__26699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,cljs.core.deref.call(null,lt_manager.state.events));
})())], null)], null)], null)], null);
});
lt_manager.utilities.text_select_input = (function lt_manager$utilities$text_select_input(shown_text,options,on_change_function){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),shown_text,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26710_SHARP_){
return on_change_function.call(null,p1__26710_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-btn","div.input-group-btn",-1451148673),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary.dropdown-toggle","button.btn.btn-secondary.dropdown-toggle",-100103516),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),true,new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.dropdown-menu-right","ul.dropdown-menu.dropdown-menu-right",-656102173),((cljs.core.empty_QMARK_.call(null,options))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.dropdown-item","p.dropdown-item",1712339111),"Keine Eintr\u00E4ge"], null)], null):cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$utilities$text_select_input_$_iter__26715(s__26716){
return (new cljs.core.LazySeq(null,(function (){
var s__26716__$1 = s__26716;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26716__$1);
if(temp__4425__auto__){
var s__26716__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26716__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__26716__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__26718 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__26717 = (0);
while(true){
if((i__26717 < size__19061__auto__)){
var option = cljs.core._nth.call(null,c__19060__auto__,i__26717);
cljs.core.chunk_append.call(null,b__26718,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26717,option,c__19060__auto__,size__19061__auto__,b__26718,s__26716__$2,temp__4425__auto__){
return (function (){
return on_change_function.call(null,option);
});})(i__26717,option,c__19060__auto__,size__19061__auto__,b__26718,s__26716__$2,temp__4425__auto__))
], null),option], null)], null));

var G__26719 = (i__26717 + (1));
i__26717 = G__26719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26718),lt_manager$utilities$text_select_input_$_iter__26715.call(null,cljs.core.chunk_rest.call(null,s__26716__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26718),null);
}
} else {
var option = cljs.core.first.call(null,s__26716__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__26716__$2,temp__4425__auto__){
return (function (){
return on_change_function.call(null,option);
});})(option,s__26716__$2,temp__4425__auto__))
], null),option], null)], null),lt_manager$utilities$text_select_input_$_iter__26715.call(null,cljs.core.rest.call(null,s__26716__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,options);
})()))], null)], null)], null);
});
lt_manager.utilities.text_input = (function lt_manager$utilities$text_input(shown_text,on_change_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),shown_text,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26720_SHARP_){
return on_change_function.call(null,p1__26720_SHARP_.target.value);
})], null)], null)], null);
});
lt_manager.utilities.table = (function lt_manager$utilities$table(var_args){
var args__19355__auto__ = [];
var len__19348__auto___26785 = arguments.length;
var i__19349__auto___26786 = (0);
while(true){
if((i__19349__auto___26786 < len__19348__auto___26785)){
args__19355__auto__.push((arguments[i__19349__auto___26786]));

var G__26787 = (i__19349__auto___26786 + (1));
i__19349__auto___26786 = G__26787;
continue;
} else {
}
break;
}

var argseq__19356__auto__ = ((((5) < args__19355__auto__.length))?(new cljs.core.IndexedSeq(args__19355__auto__.slice((5)),(0))):null);
return lt_manager.utilities.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19356__auto__);
});

lt_manager.utilities.table.cljs$core$IFn$_invoke$arity$variadic = (function (col_labels,sorted_entries,selected_key,row,selected_row,p__26727){
var vec__26728 = p__26727;
var new_row = cljs.core.nth.call(null,vec__26728,(0),null);
if((cljs.core.empty_QMARK_.call(null,sorted_entries)) && ((new_row == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Keine Eintragungen"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (vec__26728,new_row){
return (function lt_manager$utilities$iter__26729(s__26730){
return (new cljs.core.LazySeq(null,((function (vec__26728,new_row){
return (function (){
var s__26730__$1 = s__26730;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26730__$1);
if(temp__4425__auto__){
var s__26730__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26730__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__26730__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__26732 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__26731 = (0);
while(true){
if((i__26731 < size__19061__auto__)){
var vec__26735 = cljs.core._nth.call(null,c__19060__auto__,i__26731);
var k = cljs.core.nth.call(null,vec__26735,(0),null);
var td = cljs.core.nth.call(null,vec__26735,(1),null);
cljs.core.chunk_append.call(null,b__26732,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),td], null));

var G__26788 = (i__26731 + (1));
i__26731 = G__26788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26732),lt_manager$utilities$iter__26729.call(null,cljs.core.chunk_rest.call(null,s__26730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26732),null);
}
} else {
var vec__26736 = cljs.core.first.call(null,s__26730__$2);
var k = cljs.core.nth.call(null,vec__26736,(0),null);
var td = cljs.core.nth.call(null,vec__26736,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),td], null),lt_manager$utilities$iter__26729.call(null,cljs.core.rest.call(null,s__26730__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26728,new_row))
,null,null));
});})(vec__26728,new_row))
;
return iter__19062__auto__.call(null,cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,col_labels)),col_labels));
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),((!((new_row == null)))?cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (vec__26728,new_row){
return (function lt_manager$utilities$iter__26737(s__26738){
return (new cljs.core.LazySeq(null,((function (vec__26728,new_row){
return (function (){
var s__26738__$1 = s__26738;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26738__$1);
if(temp__4425__auto__){
var s__26738__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26738__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__26738__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__26740 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__26739 = (0);
while(true){
if((i__26739 < size__19061__auto__)){
var vec__26743 = cljs.core._nth.call(null,c__19060__auto__,i__26739);
var k = cljs.core.nth.call(null,vec__26743,(0),null);
var td = cljs.core.nth.call(null,vec__26743,(1),null);
cljs.core.chunk_append.call(null,b__26740,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("new"),cljs.core.str(k)].join('')], null),td], null));

var G__26789 = (i__26739 + (1));
i__26739 = G__26789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26740),lt_manager$utilities$iter__26737.call(null,cljs.core.chunk_rest.call(null,s__26738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26740),null);
}
} else {
var vec__26744 = cljs.core.first.call(null,s__26738__$2);
var k = cljs.core.nth.call(null,vec__26744,(0),null);
var td = cljs.core.nth.call(null,vec__26744,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("new"),cljs.core.str(k)].join('')], null),td], null),lt_manager$utilities$iter__26737.call(null,cljs.core.rest.call(null,s__26738__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26728,new_row))
,null,null));
});})(vec__26728,new_row))
;
return iter__19062__auto__.call(null,cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new_row)),new_row));
})()):null)], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (vec__26728,new_row){
return (function lt_manager$utilities$iter__26745(s__26746){
return (new cljs.core.LazySeq(null,((function (vec__26728,new_row){
return (function (){
var s__26746__$1 = s__26746;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26746__$1);
if(temp__4425__auto__){
var s__26746__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26746__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__26746__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__26748 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__26747 = (0);
while(true){
if((i__26747 < size__19061__auto__)){
var vec__26767 = cljs.core._nth.call(null,c__19060__auto__,i__26747);
var key = cljs.core.nth.call(null,vec__26767,(0),null);
var tr = cljs.core.nth.call(null,vec__26767,(1),null);
cljs.core.chunk_append.call(null,b__26748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_.call(null,tr,new cljs.core.Keyword(null,"account-id","account-id",-860833743)))?new cljs.core.Keyword(null,"tr","tr",-1424774646):new cljs.core.Keyword(null,"tr.bg-danger","tr.bg-danger",615988984)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (i__26747,vec__26767,key,tr,c__19060__auto__,size__19061__auto__,b__26748,s__26746__$2,temp__4425__auto__,vec__26728,new_row){
return (function lt_manager$utilities$iter__26745_$_iter__26768(s__26769){
return (new cljs.core.LazySeq(null,((function (i__26747,vec__26767,key,tr,c__19060__auto__,size__19061__auto__,b__26748,s__26746__$2,temp__4425__auto__,vec__26728,new_row){
return (function (){
var s__26769__$1 = s__26769;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26769__$1);
if(temp__4425__auto____$1){
var s__26769__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26769__$2)){
var c__19060__auto____$1 = cljs.core.chunk_first.call(null,s__26769__$2);
var size__19061__auto____$1 = cljs.core.count.call(null,c__19060__auto____$1);
var b__26771 = cljs.core.chunk_buffer.call(null,size__19061__auto____$1);
if((function (){var i__26770 = (0);
while(true){
if((i__26770 < size__19061__auto____$1)){
var vec__26774 = cljs.core._nth.call(null,c__19060__auto____$1,i__26770);
var k = cljs.core.nth.call(null,vec__26774,(0),null);
var td = cljs.core.nth.call(null,vec__26774,(1),null);
cljs.core.chunk_append.call(null,b__26771,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),td], null));

var G__26790 = (i__26770 + (1));
i__26770 = G__26790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26771),lt_manager$utilities$iter__26745_$_iter__26768.call(null,cljs.core.chunk_rest.call(null,s__26769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26771),null);
}
} else {
var vec__26775 = cljs.core.first.call(null,s__26769__$2);
var k = cljs.core.nth.call(null,vec__26775,(0),null);
var td = cljs.core.nth.call(null,vec__26775,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),td], null),lt_manager$utilities$iter__26745_$_iter__26768.call(null,cljs.core.rest.call(null,s__26769__$2)));
}
} else {
return null;
}
break;
}
});})(i__26747,vec__26767,key,tr,c__19060__auto__,size__19061__auto__,b__26748,s__26746__$2,temp__4425__auto__,vec__26728,new_row))
,null,null));
});})(i__26747,vec__26767,key,tr,c__19060__auto__,size__19061__auto__,b__26748,s__26746__$2,temp__4425__auto__,vec__26728,new_row))
;
return iter__19062__auto__.call(null,(function (){var sel_row = selected_row.call(null,key,tr);
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,sel_row)),((cljs.core._EQ_.call(null,key,selected_key))?sel_row:row.call(null,key,tr)));
})());
})())], null));

var G__26791 = (i__26747 + (1));
i__26747 = G__26791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26748),lt_manager$utilities$iter__26745.call(null,cljs.core.chunk_rest.call(null,s__26746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26748),null);
}
} else {
var vec__26776 = cljs.core.first.call(null,s__26746__$2);
var key = cljs.core.nth.call(null,vec__26776,(0),null);
var tr = cljs.core.nth.call(null,vec__26776,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_.call(null,tr,new cljs.core.Keyword(null,"account-id","account-id",-860833743)))?new cljs.core.Keyword(null,"tr","tr",-1424774646):new cljs.core.Keyword(null,"tr.bg-danger","tr.bg-danger",615988984)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (vec__26776,key,tr,s__26746__$2,temp__4425__auto__,vec__26728,new_row){
return (function lt_manager$utilities$iter__26745_$_iter__26777(s__26778){
return (new cljs.core.LazySeq(null,((function (vec__26776,key,tr,s__26746__$2,temp__4425__auto__,vec__26728,new_row){
return (function (){
var s__26778__$1 = s__26778;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__26778__$1);
if(temp__4425__auto____$1){
var s__26778__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26778__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__26778__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__26780 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__26779 = (0);
while(true){
if((i__26779 < size__19061__auto__)){
var vec__26783 = cljs.core._nth.call(null,c__19060__auto__,i__26779);
var k = cljs.core.nth.call(null,vec__26783,(0),null);
var td = cljs.core.nth.call(null,vec__26783,(1),null);
cljs.core.chunk_append.call(null,b__26780,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),td], null));

var G__26792 = (i__26779 + (1));
i__26779 = G__26792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26780),lt_manager$utilities$iter__26745_$_iter__26777.call(null,cljs.core.chunk_rest.call(null,s__26778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26780),null);
}
} else {
var vec__26784 = cljs.core.first.call(null,s__26778__$2);
var k = cljs.core.nth.call(null,vec__26784,(0),null);
var td = cljs.core.nth.call(null,vec__26784,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),td], null),lt_manager$utilities$iter__26745_$_iter__26777.call(null,cljs.core.rest.call(null,s__26778__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26776,key,tr,s__26746__$2,temp__4425__auto__,vec__26728,new_row))
,null,null));
});})(vec__26776,key,tr,s__26746__$2,temp__4425__auto__,vec__26728,new_row))
;
return iter__19062__auto__.call(null,(function (){var sel_row = selected_row.call(null,key,tr);
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,sel_row)),((cljs.core._EQ_.call(null,key,selected_key))?sel_row:row.call(null,key,tr)));
})());
})())], null),lt_manager$utilities$iter__26745.call(null,cljs.core.rest.call(null,s__26746__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26728,new_row))
,null,null));
});})(vec__26728,new_row))
;
return iter__19062__auto__.call(null,sorted_entries);
})())], null)], null)], null);
}
});

lt_manager.utilities.table.cljs$lang$maxFixedArity = (5);

lt_manager.utilities.table.cljs$lang$applyTo = (function (seq26721){
var G__26722 = cljs.core.first.call(null,seq26721);
var seq26721__$1 = cljs.core.next.call(null,seq26721);
var G__26723 = cljs.core.first.call(null,seq26721__$1);
var seq26721__$2 = cljs.core.next.call(null,seq26721__$1);
var G__26724 = cljs.core.first.call(null,seq26721__$2);
var seq26721__$3 = cljs.core.next.call(null,seq26721__$2);
var G__26725 = cljs.core.first.call(null,seq26721__$3);
var seq26721__$4 = cljs.core.next.call(null,seq26721__$3);
var G__26726 = cljs.core.first.call(null,seq26721__$4);
var seq26721__$5 = cljs.core.next.call(null,seq26721__$4);
return lt_manager.utilities.table.cljs$core$IFn$_invoke$arity$variadic(G__26722,G__26723,G__26724,G__26725,G__26726,seq26721__$5);
});
lt_manager.utilities.edit = (function lt_manager$utilities$edit(on_click_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_function,new cljs.core.Keyword(null,"src","src",-1651076051),"icon/glyphicons_150_edit.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["cursor","pointer"], null)], null)], null);
});
lt_manager.utilities.ok = (function lt_manager$utilities$ok(on_click_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_function,new cljs.core.Keyword(null,"src","src",-1651076051),"icon/glyphicons_206_ok_2.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["cursor","pointer"], null)], null)], null);
});
lt_manager.utilities.cancel = (function lt_manager$utilities$cancel(on_click_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_function,new cljs.core.Keyword(null,"src","src",-1651076051),"icon/glyphicons_207_remove_2.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["cursor","pointer"], null)], null)], null);
});
lt_manager.utilities.bin = (function lt_manager$utilities$bin(on_click_function){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_function,new cljs.core.Keyword(null,"src","src",-1651076051),"icon/glyphicons_016_bin.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["cursor","pointer"], null)], null)], null);
});
lt_manager.utilities.btn_plus = (function lt_manager$utilities$btn_plus(on_click_function){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_function,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["cursor","pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"icon/glyphicons_432_plus.png"], null)], null)], null);
});
lt_manager.utilities.btn_minus = (function lt_manager$utilities$btn_minus(on_click_function){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_function,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["cursor","pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"icon/glyphicons_434_minus.png"], null)], null)], null);
});
lt_manager.utilities.row_with_plus = (function lt_manager$utilities$row_with_plus(title,on_click_function){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.btn_plus,on_click_function], null)], null)], null)], null);
});
lt_manager.utilities.row_with_toggle = (function lt_manager$utilities$row_with_toggle(title,toggle){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),(cljs.core.truth_(cljs.core.deref.call(null,toggle))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.btn_minus,(function (){
return cljs.core.reset_BANG_.call(null,toggle,false);
})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.btn_plus,(function (){
return cljs.core.reset_BANG_.call(null,toggle,true);
})], null))], null)], null)], null);
});

//# sourceMappingURL=utilities.js.map
// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.finance_view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.react');
goog.require('cljsjs.jspdf');
goog.require('lt_manager.state');
goog.require('lt_manager.utilities');
lt_manager.finance_view.date_limit_form = (function lt_manager$finance_view$date_limit_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),"Von",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.date_input,cljs.core.deref.call(null,lt_manager.state.finance_date_limit_lower),(function (p1__20313_SHARP_){
return cljs.core.reset_BANG_.call(null,lt_manager.state.finance_date_limit_lower,p1__20313_SHARP_);
})], null),"bis",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.date_input,cljs.core.deref.call(null,lt_manager.state.finance_date_limit_upper),(function (p1__20314_SHARP_){
return cljs.core.reset_BANG_.call(null,lt_manager.state.finance_date_limit_upper,p1__20314_SHARP_);
})], null)], null);
});
lt_manager.finance_view.money_list_panel = (function lt_manager$finance_view$money_list_panel(entries,negative_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(negative_QMARK_)?new cljs.core.Keyword(null,"div.panel.panel-danger","div.panel.panel-danger",68968440):new cljs.core.Keyword(null,"div.panel.panel-success","div.panel.panel-success",1715337086)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),(cljs.core.truth_(negative_QMARK_)?"Ausgaben":"Einnahmen")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = (function lt_manager$finance_view$money_list_panel_$_iter__20393(s__20394){
return (new cljs.core.LazySeq(null,(function (){
var s__20394__$1 = s__20394;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20394__$1);
if(temp__4425__auto__){
var s__20394__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20394__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__20394__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__20396 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__20395 = (0);
while(true){
if((i__20395 < size__19061__auto__)){
var vec__20431 = cljs.core._nth.call(null,c__19060__auto__,i__20395);
var category = cljs.core.nth.call(null,vec__20431,(0),null);
var v = cljs.core.nth.call(null,vec__20431,(1),null);
cljs.core.chunk_append.call(null,b__20396,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right","p.text-right",635397807),category,":"], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20432(s__20433){
return (new cljs.core.LazySeq(null,((function (i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function (){
var s__20433__$1 = s__20433;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20433__$1);
if(temp__4425__auto____$1){
var s__20433__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20433__$2)){
var c__19060__auto____$1 = cljs.core.chunk_first.call(null,s__20433__$2);
var size__19061__auto____$1 = cljs.core.count.call(null,c__19060__auto____$1);
var b__20435 = cljs.core.chunk_buffer.call(null,size__19061__auto____$1);
if((function (){var i__20434 = (0);
while(true){
if((i__20434 < size__19061__auto____$1)){
var vec__20438 = cljs.core._nth.call(null,c__19060__auto____$1,i__20434);
var subcategory = cljs.core.nth.call(null,vec__20438,(0),null);
var val = cljs.core.nth.call(null,vec__20438,(1),null);
if(!((subcategory == null))){
cljs.core.chunk_append.call(null,b__20435,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),cljs.core.char$.call(null,(8226))," ",subcategory], null)], null));

var G__20465 = (i__20434 + (1));
i__20434 = G__20465;
continue;
} else {
var G__20466 = (i__20434 + (1));
i__20434 = G__20466;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20435),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20432.call(null,cljs.core.chunk_rest.call(null,s__20433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20435),null);
}
} else {
var vec__20439 = cljs.core.first.call(null,s__20433__$2);
var subcategory = cljs.core.nth.call(null,vec__20439,(0),null);
var val = cljs.core.nth.call(null,vec__20439,(1),null);
if(!((subcategory == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),cljs.core.char$.call(null,(8226))," ",subcategory], null)], null),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20432.call(null,cljs.core.rest.call(null,s__20433__$2)));
} else {
var G__20467 = cljs.core.rest.call(null,s__20433__$2);
s__20433__$1 = G__20467;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
,null,null));
});})(i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
;
return iter__19062__auto__.call(null,cljs.core.group_by.call(null,((function (i__20395,iter__19062__auto__,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function (p1__20316_SHARP_){
return new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20316_SHARP_));
});})(i__20395,iter__19062__auto__,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
,v));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right","p.text-right",635397807),lt_manager.utilities.show_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function (p1__20317_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20317_SHARP_));
});})(i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
,v)) * (cljs.core.truth_(negative_QMARK_)?(-1):(1))))," \u20AC"], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20440(s__20441){
return (new cljs.core.LazySeq(null,((function (i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function (){
var s__20441__$1 = s__20441;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20441__$1);
if(temp__4425__auto____$1){
var s__20441__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20441__$2)){
var c__19060__auto____$1 = cljs.core.chunk_first.call(null,s__20441__$2);
var size__19061__auto____$1 = cljs.core.count.call(null,c__19060__auto____$1);
var b__20443 = cljs.core.chunk_buffer.call(null,size__19061__auto____$1);
if((function (){var i__20442 = (0);
while(true){
if((i__20442 < size__19061__auto____$1)){
var vec__20446 = cljs.core._nth.call(null,c__19060__auto____$1,i__20442);
var subcategory = cljs.core.nth.call(null,vec__20446,(0),null);
var val = cljs.core.nth.call(null,vec__20446,(1),null);
if(!((subcategory == null))){
cljs.core.chunk_append.call(null,b__20443,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),lt_manager.utilities.show_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__20442,s__20441__$1,i__20395,vec__20446,subcategory,val,c__19060__auto____$1,size__19061__auto____$1,b__20443,s__20441__$2,temp__4425__auto____$1,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function (p1__20319_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20319_SHARP_));
});})(i__20442,s__20441__$1,i__20395,vec__20446,subcategory,val,c__19060__auto____$1,size__19061__auto____$1,b__20443,s__20441__$2,temp__4425__auto____$1,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
,val)) * (cljs.core.truth_(negative_QMARK_)?(-1):(1))))," \u20AC"], null)], null));

var G__20468 = (i__20442 + (1));
i__20442 = G__20468;
continue;
} else {
var G__20469 = (i__20442 + (1));
i__20442 = G__20469;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20443),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20440.call(null,cljs.core.chunk_rest.call(null,s__20441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20443),null);
}
} else {
var vec__20447 = cljs.core.first.call(null,s__20441__$2);
var subcategory = cljs.core.nth.call(null,vec__20447,(0),null);
var val = cljs.core.nth.call(null,vec__20447,(1),null);
if(!((subcategory == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),lt_manager.utilities.show_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__20441__$1,i__20395,vec__20447,subcategory,val,s__20441__$2,temp__4425__auto____$1,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function (p1__20319_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20319_SHARP_));
});})(s__20441__$1,i__20395,vec__20447,subcategory,val,s__20441__$2,temp__4425__auto____$1,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
,val)) * (cljs.core.truth_(negative_QMARK_)?(-1):(1))))," \u20AC"], null)], null),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20440.call(null,cljs.core.rest.call(null,s__20441__$2)));
} else {
var G__20470 = cljs.core.rest.call(null,s__20441__$2);
s__20441__$1 = G__20470;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
,null,null));
});})(i__20395,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
;
return iter__19062__auto__.call(null,cljs.core.group_by.call(null,((function (i__20395,iter__19062__auto__,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__){
return (function (p1__20318_SHARP_){
return new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20318_SHARP_));
});})(i__20395,iter__19062__auto__,vec__20431,category,v,c__19060__auto__,size__19061__auto__,b__20396,s__20394__$2,temp__4425__auto__))
,v));
})())], null)], null));

var G__20471 = (i__20395 + (1));
i__20395 = G__20471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20396),lt_manager$finance_view$money_list_panel_$_iter__20393.call(null,cljs.core.chunk_rest.call(null,s__20394__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20396),null);
}
} else {
var vec__20448 = cljs.core.first.call(null,s__20394__$2);
var category = cljs.core.nth.call(null,vec__20448,(0),null);
var v = cljs.core.nth.call(null,vec__20448,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right","p.text-right",635397807),category,":"], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20449(s__20450){
return (new cljs.core.LazySeq(null,((function (vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function (){
var s__20450__$1 = s__20450;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20450__$1);
if(temp__4425__auto____$1){
var s__20450__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20450__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__20450__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__20452 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__20451 = (0);
while(true){
if((i__20451 < size__19061__auto__)){
var vec__20455 = cljs.core._nth.call(null,c__19060__auto__,i__20451);
var subcategory = cljs.core.nth.call(null,vec__20455,(0),null);
var val = cljs.core.nth.call(null,vec__20455,(1),null);
if(!((subcategory == null))){
cljs.core.chunk_append.call(null,b__20452,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),cljs.core.char$.call(null,(8226))," ",subcategory], null)], null));

var G__20472 = (i__20451 + (1));
i__20451 = G__20472;
continue;
} else {
var G__20473 = (i__20451 + (1));
i__20451 = G__20473;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20452),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20449.call(null,cljs.core.chunk_rest.call(null,s__20450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20452),null);
}
} else {
var vec__20456 = cljs.core.first.call(null,s__20450__$2);
var subcategory = cljs.core.nth.call(null,vec__20456,(0),null);
var val = cljs.core.nth.call(null,vec__20456,(1),null);
if(!((subcategory == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),cljs.core.char$.call(null,(8226))," ",subcategory], null)], null),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20449.call(null,cljs.core.rest.call(null,s__20450__$2)));
} else {
var G__20474 = cljs.core.rest.call(null,s__20450__$2);
s__20450__$1 = G__20474;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__20448,category,v,s__20394__$2,temp__4425__auto__))
,null,null));
});})(vec__20448,category,v,s__20394__$2,temp__4425__auto__))
;
return iter__19062__auto__.call(null,cljs.core.group_by.call(null,((function (iter__19062__auto__,vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function (p1__20316_SHARP_){
return new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20316_SHARP_));
});})(iter__19062__auto__,vec__20448,category,v,s__20394__$2,temp__4425__auto__))
,v));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right","p.text-right",635397807),lt_manager.utilities.show_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function (p1__20317_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20317_SHARP_));
});})(vec__20448,category,v,s__20394__$2,temp__4425__auto__))
,v)) * (cljs.core.truth_(negative_QMARK_)?(-1):(1))))," \u20AC"], null),cljs.core.doall.call(null,(function (){var iter__19062__auto__ = ((function (vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20457(s__20458){
return (new cljs.core.LazySeq(null,((function (vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function (){
var s__20458__$1 = s__20458;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20458__$1);
if(temp__4425__auto____$1){
var s__20458__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20458__$2)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,s__20458__$2);
var size__19061__auto__ = cljs.core.count.call(null,c__19060__auto__);
var b__20460 = cljs.core.chunk_buffer.call(null,size__19061__auto__);
if((function (){var i__20459 = (0);
while(true){
if((i__20459 < size__19061__auto__)){
var vec__20463 = cljs.core._nth.call(null,c__19060__auto__,i__20459);
var subcategory = cljs.core.nth.call(null,vec__20463,(0),null);
var val = cljs.core.nth.call(null,vec__20463,(1),null);
if(!((subcategory == null))){
cljs.core.chunk_append.call(null,b__20460,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),lt_manager.utilities.show_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__20459,s__20458__$1,vec__20463,subcategory,val,c__19060__auto__,size__19061__auto__,b__20460,s__20458__$2,temp__4425__auto____$1,vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function (p1__20319_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20319_SHARP_));
});})(i__20459,s__20458__$1,vec__20463,subcategory,val,c__19060__auto__,size__19061__auto__,b__20460,s__20458__$2,temp__4425__auto____$1,vec__20448,category,v,s__20394__$2,temp__4425__auto__))
,val)) * (cljs.core.truth_(negative_QMARK_)?(-1):(1))))," \u20AC"], null)], null));

var G__20475 = (i__20459 + (1));
i__20459 = G__20475;
continue;
} else {
var G__20476 = (i__20459 + (1));
i__20459 = G__20476;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20460),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20457.call(null,cljs.core.chunk_rest.call(null,s__20458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20460),null);
}
} else {
var vec__20464 = cljs.core.first.call(null,s__20458__$2);
var subcategory = cljs.core.nth.call(null,vec__20464,(0),null);
var val = cljs.core.nth.call(null,vec__20464,(1),null);
if(!((subcategory == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right.text-muted","p.text-right.text-muted",205308777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subcategory], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),lt_manager.utilities.show_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__20458__$1,vec__20464,subcategory,val,s__20458__$2,temp__4425__auto____$1,vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function (p1__20319_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20319_SHARP_));
});})(s__20458__$1,vec__20464,subcategory,val,s__20458__$2,temp__4425__auto____$1,vec__20448,category,v,s__20394__$2,temp__4425__auto__))
,val)) * (cljs.core.truth_(negative_QMARK_)?(-1):(1))))," \u20AC"], null)], null),lt_manager$finance_view$money_list_panel_$_iter__20393_$_iter__20457.call(null,cljs.core.rest.call(null,s__20458__$2)));
} else {
var G__20477 = cljs.core.rest.call(null,s__20458__$2);
s__20458__$1 = G__20477;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__20448,category,v,s__20394__$2,temp__4425__auto__))
,null,null));
});})(vec__20448,category,v,s__20394__$2,temp__4425__auto__))
;
return iter__19062__auto__.call(null,cljs.core.group_by.call(null,((function (iter__19062__auto__,vec__20448,category,v,s__20394__$2,temp__4425__auto__){
return (function (p1__20318_SHARP_){
return new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20318_SHARP_));
});})(iter__19062__auto__,vec__20448,category,v,s__20394__$2,temp__4425__auto__))
,v));
})())], null)], null),lt_manager$finance_view$money_list_panel_$_iter__20393.call(null,cljs.core.rest.call(null,s__20394__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19062__auto__.call(null,cljs.core.group_by.call(null,((function (iter__19062__auto__){
return (function (p1__20315_SHARP_){
return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20315_SHARP_));
});})(iter__19062__auto__))
,entries));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(negative_QMARK_)?new cljs.core.Keyword(null,"tr.danger","tr.danger",-65063027):new cljs.core.Keyword(null,"tr.success","tr.success",-815583958)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right","p.text-right",635397807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Gesamt:"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-right","p.text-right",635397807),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),lt_manager.utilities.show_money.call(null,(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__20320_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20320_SHARP_));
}),entries)) * (cljs.core.truth_(negative_QMARK_)?(-1):(1))))," \u20AC"], null)], null)], null)], null)], null)], null)], null);
});
lt_manager.finance_view.revenue_panel = (function lt_manager$finance_view$revenue_panel(revenues){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.money_list_panel,revenues,false], null);
});
lt_manager.finance_view.expense_panel = (function lt_manager$finance_view$expense_panel(expenses){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.money_list_panel,expenses,true], null);
});
lt_manager.finance_view.total_panel = (function lt_manager$finance_view$total_panel(revenues,expenses){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Insgesamt: "], null),[cljs.core.str(lt_manager.utilities.show_money.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__20478_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20478_SHARP_));
}),revenues)))),cljs.core.str(" \u20AC - "),cljs.core.str(lt_manager.utilities.show_money.call(null,(- cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__20479_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20479_SHARP_));
}),expenses))))),cljs.core.str(" \u20AC = ")].join(''),(function (){var total = (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__20480_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20480_SHARP_));
}),revenues)) + cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__20481_SHARP_){
return new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20481_SHARP_));
}),expenses)));
if((total < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-danger","strong.text-danger",256358881),lt_manager.utilities.show_money.call(null,total)," \u20AC"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-success","strong.text-success",-1315581249),lt_manager.utilities.show_money.call(null,total)," \u20AC"], null);
}
})()], null)], null)], null);
});
lt_manager.finance_view.account_row = (function lt_manager$finance_view$account_row(key,rec){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.show_date.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(rec)),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(rec),new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(rec),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(rec),[cljs.core.str(lt_manager.utilities.show_money.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(rec))),cljs.core.str(" \u20AC")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.edit,(function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_account,key);
})], null),""], null);
});
lt_manager.finance_view.account_row_selected = (function lt_manager$finance_view$account_row_selected(key,rec){
var categories = lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.deref.call(null,lt_manager.state.accounts));
var subcategories = (((!((cljs.core.deref.call(null,lt_manager.state.selected_account) == null))) && (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,lt_manager.state.selected_account).call(null,cljs.core.deref.call(null,lt_manager.state.accounts)),new cljs.core.Keyword(null,"category","category",-593092832))))?lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),cljs.core.filter.call(null,((function (categories){
return (function (p1__20482_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.selected_account).call(null,cljs.core.deref.call(null,lt_manager.state.accounts))),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20482_SHARP_)));
});})(categories))
,cljs.core.deref.call(null,lt_manager.state.accounts))):cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.date_input,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(rec),((function (categories,subcategories){
return (function (p1__20483_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"date","date",-1463434462)], null),p1__20483_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(rec),categories,((function (categories,subcategories){
return (function (p1__20484_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"category","category",-593092832)], null),p1__20484_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(rec),subcategories,((function (categories,subcategories){
return (function (p1__20485_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998)], null),p1__20485_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(rec),((function (categories,subcategories){
return (function (p1__20486_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"description","description",-1428560544)], null),p1__20486_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.money_input,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),((function (categories,subcategories){
return (function (p1__20487_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"price","price",22129180)], null),p1__20487_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,((function (categories,subcategories){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.selected_account,null);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.bin,((function (categories,subcategories){
return (function (){
return $("#deleteAccountModal").modal("show");
});})(categories,subcategories))
], null)], null);
});
lt_manager.finance_view.new_account_row = (function lt_manager$finance_view$new_account_row(){
var categories = lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.deref.call(null,lt_manager.state.accounts));
var subcategories = lt_manager.utilities.get_distinct.call(null,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),cljs.core.filter.call(null,((function (categories){
return (function (p1__20488_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20488_SHARP_)));
});})(categories))
,cljs.core.deref.call(null,lt_manager.state.accounts)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.date_input,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),((function (categories,subcategories){
return (function (p1__20489_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_account,cljs.core.assoc,new cljs.core.Keyword(null,"date","date",-1463434462),p1__20489_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),categories,((function (categories,subcategories){
return (function (p1__20490_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_account,cljs.core.assoc,new cljs.core.Keyword(null,"category","category",-593092832),p1__20490_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_select_input,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),subcategories,((function (categories,subcategories){
return (function (p1__20491_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_account,cljs.core.assoc,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),p1__20491_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.text_input,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),((function (categories,subcategories){
return (function (p1__20492_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_account,cljs.core.assoc,new cljs.core.Keyword(null,"description","description",-1428560544),p1__20492_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.money_input,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt_manager.state.new_account)),((function (categories,subcategories){
return (function (p1__20493_SHARP_){
return cljs.core.swap_BANG_.call(null,lt_manager.state.new_account,cljs.core.assoc,new cljs.core.Keyword(null,"price","price",22129180),p1__20493_SHARP_);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.ok,((function (categories,subcategories){
return (function (){
cljs.core.swap_BANG_.call(null,lt_manager.state.accounts,cljs.core.assoc,lt_manager.utilities.next_key.call(null,cljs.core.deref.call(null,lt_manager.state.accounts)),cljs.core.deref.call(null,lt_manager.state.new_account));

return cljs.core.reset_BANG_.call(null,lt_manager.state.new_account,lt_manager.state.default_account);
});})(categories,subcategories))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.cancel,((function (categories,subcategories){
return (function (){
return cljs.core.reset_BANG_.call(null,lt_manager.state.new_account,lt_manager.state.default_account);
});})(categories,subcategories))
], null)], null);
});
lt_manager.finance_view.account_table = (function lt_manager$finance_view$account_table(accounts){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.table,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Datum","Kategorie","Unterkategorie","Beschreibung","Kosten",""], null),accounts,cljs.core.deref.call(null,lt_manager.state.selected_account),lt_manager.finance_view.account_row,lt_manager.finance_view.account_row_selected,(cljs.core.truth_(cljs.core.deref.call(null,lt_manager.state.new_account_active))?lt_manager.finance_view.new_account_row.call(null):null)], null);
});
lt_manager.finance_view.account_panel = (function lt_manager$finance_view$account_panel(){
var accounts = cljs.core.filter.call(null,(function (p1__20494_SHARP_){
return ((cljs.core.deref.call(null,lt_manager.state.finance_date_limit_lower).getTime() < new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20494_SHARP_)).getTime())) && ((new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20494_SHARP_)).getTime() < cljs.core.deref.call(null,lt_manager.state.finance_date_limit_upper).getTime()));
}),cljs.core.deref.call(null,lt_manager.state.accounts));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.utilities.row_with_toggle,"Einnahmen und Ausgaben",lt_manager.state.new_account_active], null)], null),(((cljs.core.empty_QMARK_.call(null,accounts)) && (cljs.core.not.call(null,cljs.core.deref.call(null,lt_manager.state.new_account_active))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),"Keine Eintragungen"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.account_table,accounts,lt_manager.state.new_account_active,lt_manager.state.new_account], null))], null);
});
lt_manager.finance_view.finance_view = (function lt_manager$finance_view$finance_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var accounts = cljs.core.filter.call(null,(function (p1__20495_SHARP_){
return ((cljs.core.deref.call(null,lt_manager.state.finance_date_limit_lower).getTime() < new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20495_SHARP_)).getTime())) && ((new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20495_SHARP_)).getTime() < cljs.core.deref.call(null,lt_manager.state.finance_date_limit_upper).getTime()));
}),cljs.core.deref.call(null,lt_manager.state.accounts));
var revenues = cljs.core.filter.call(null,((function (accounts){
return (function (p1__20496_SHARP_){
return ((0) < new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20496_SHARP_)));
});})(accounts))
,accounts);
var expenses = cljs.core.filter.call(null,((function (accounts,revenues){
return (function (p1__20497_SHARP_){
return ((0) > new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20497_SHARP_)));
});})(accounts,revenues))
,accounts);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.date_limit_form], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.revenue_panel,revenues], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.expense_panel,expenses], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.total_panel,revenues,expenses], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["cursor","pointer"], null)], null),"Rechnung erstellen"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt_manager.finance_view.account_panel], null)], null);
})()], null);
});

//# sourceMappingURL=finance_view.js.map
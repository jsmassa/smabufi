// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28162_28176 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28163_28177 = null;
var count__28164_28178 = (0);
var i__28165_28179 = (0);
while(true){
if((i__28165_28179 < count__28164_28178)){
var f_28180 = cljs.core._nth.call(null,chunk__28163_28177,i__28165_28179);
cljs.core.println.call(null,"  ",f_28180);

var G__28181 = seq__28162_28176;
var G__28182 = chunk__28163_28177;
var G__28183 = count__28164_28178;
var G__28184 = (i__28165_28179 + (1));
seq__28162_28176 = G__28181;
chunk__28163_28177 = G__28182;
count__28164_28178 = G__28183;
i__28165_28179 = G__28184;
continue;
} else {
var temp__4425__auto___28185 = cljs.core.seq.call(null,seq__28162_28176);
if(temp__4425__auto___28185){
var seq__28162_28186__$1 = temp__4425__auto___28185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28162_28186__$1)){
var c__21818__auto___28187 = cljs.core.chunk_first.call(null,seq__28162_28186__$1);
var G__28188 = cljs.core.chunk_rest.call(null,seq__28162_28186__$1);
var G__28189 = c__21818__auto___28187;
var G__28190 = cljs.core.count.call(null,c__21818__auto___28187);
var G__28191 = (0);
seq__28162_28176 = G__28188;
chunk__28163_28177 = G__28189;
count__28164_28178 = G__28190;
i__28165_28179 = G__28191;
continue;
} else {
var f_28192 = cljs.core.first.call(null,seq__28162_28186__$1);
cljs.core.println.call(null,"  ",f_28192);

var G__28193 = cljs.core.next.call(null,seq__28162_28186__$1);
var G__28194 = null;
var G__28195 = (0);
var G__28196 = (0);
seq__28162_28176 = G__28193;
chunk__28163_28177 = G__28194;
count__28164_28178 = G__28195;
i__28165_28179 = G__28196;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28197 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21015__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28197);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28197)))?cljs.core.second.call(null,arglists_28197):arglists_28197));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28166 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28167 = null;
var count__28168 = (0);
var i__28169 = (0);
while(true){
if((i__28169 < count__28168)){
var vec__28170 = cljs.core._nth.call(null,chunk__28167,i__28169);
var name = cljs.core.nth.call(null,vec__28170,(0),null);
var map__28171 = cljs.core.nth.call(null,vec__28170,(1),null);
var map__28171__$1 = ((((!((map__28171 == null)))?((((map__28171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28171):map__28171);
var doc = cljs.core.get.call(null,map__28171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28198 = seq__28166;
var G__28199 = chunk__28167;
var G__28200 = count__28168;
var G__28201 = (i__28169 + (1));
seq__28166 = G__28198;
chunk__28167 = G__28199;
count__28168 = G__28200;
i__28169 = G__28201;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28166);
if(temp__4425__auto__){
var seq__28166__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28166__$1)){
var c__21818__auto__ = cljs.core.chunk_first.call(null,seq__28166__$1);
var G__28202 = cljs.core.chunk_rest.call(null,seq__28166__$1);
var G__28203 = c__21818__auto__;
var G__28204 = cljs.core.count.call(null,c__21818__auto__);
var G__28205 = (0);
seq__28166 = G__28202;
chunk__28167 = G__28203;
count__28168 = G__28204;
i__28169 = G__28205;
continue;
} else {
var vec__28173 = cljs.core.first.call(null,seq__28166__$1);
var name = cljs.core.nth.call(null,vec__28173,(0),null);
var map__28174 = cljs.core.nth.call(null,vec__28173,(1),null);
var map__28174__$1 = ((((!((map__28174 == null)))?((((map__28174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28174):map__28174);
var doc = cljs.core.get.call(null,map__28174__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28174__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28206 = cljs.core.next.call(null,seq__28166__$1);
var G__28207 = null;
var G__28208 = (0);
var G__28209 = (0);
seq__28166 = G__28206;
chunk__28167 = G__28207;
count__28168 = G__28208;
i__28169 = G__28209;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
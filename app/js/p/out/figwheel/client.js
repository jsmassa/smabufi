// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28466 = cljs.core._EQ_;
var expr__28467 = (function (){var or__21015__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e28470){if((e28470 instanceof Error)){
var e = e28470;
return false;
} else {
throw e28470;

}
}})();
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28466.call(null,"true",expr__28467))){
return true;
} else {
if(cljs.core.truth_(pred__28466.call(null,"false",expr__28467))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28467)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28472){if((e28472 instanceof Error)){
var e = e28472;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28472;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__22080__auto__ = [];
var len__22073__auto___28474 = arguments.length;
var i__22074__auto___28475 = (0);
while(true){
if((i__22074__auto___28475 < len__22073__auto___28474)){
args__22080__auto__.push((arguments[i__22074__auto___28475]));

var G__28476 = (i__22074__auto___28475 + (1));
i__22074__auto___28475 = G__28476;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((0) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22081__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28473){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28473));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28477){
var map__28480 = p__28477;
var map__28480__$1 = ((((!((map__28480 == null)))?((((map__28480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28480):map__28480);
var message = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21015__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21003__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21003__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21003__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24244__auto___28642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___28642,ch){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___28642,ch){
return (function (state_28611){
var state_val_28612 = (state_28611[(1)]);
if((state_val_28612 === (7))){
var inst_28607 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28613_28643 = state_28611__$1;
(statearr_28613_28643[(2)] = inst_28607);

(statearr_28613_28643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (1))){
var state_28611__$1 = state_28611;
var statearr_28614_28644 = state_28611__$1;
(statearr_28614_28644[(2)] = null);

(statearr_28614_28644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (4))){
var inst_28564 = (state_28611[(7)]);
var inst_28564__$1 = (state_28611[(2)]);
var state_28611__$1 = (function (){var statearr_28615 = state_28611;
(statearr_28615[(7)] = inst_28564__$1);

return statearr_28615;
})();
if(cljs.core.truth_(inst_28564__$1)){
var statearr_28616_28645 = state_28611__$1;
(statearr_28616_28645[(1)] = (5));

} else {
var statearr_28617_28646 = state_28611__$1;
(statearr_28617_28646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (15))){
var inst_28571 = (state_28611[(8)]);
var inst_28586 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28571);
var inst_28587 = cljs.core.first.call(null,inst_28586);
var inst_28588 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28587);
var inst_28589 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28588)].join('');
var inst_28590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28589);
var state_28611__$1 = state_28611;
var statearr_28618_28647 = state_28611__$1;
(statearr_28618_28647[(2)] = inst_28590);

(statearr_28618_28647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (13))){
var inst_28595 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28619_28648 = state_28611__$1;
(statearr_28619_28648[(2)] = inst_28595);

(statearr_28619_28648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (6))){
var state_28611__$1 = state_28611;
var statearr_28620_28649 = state_28611__$1;
(statearr_28620_28649[(2)] = null);

(statearr_28620_28649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (17))){
var inst_28593 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28621_28650 = state_28611__$1;
(statearr_28621_28650[(2)] = inst_28593);

(statearr_28621_28650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (3))){
var inst_28609 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28611__$1,inst_28609);
} else {
if((state_val_28612 === (12))){
var inst_28570 = (state_28611[(9)]);
var inst_28584 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28570,opts);
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28584)){
var statearr_28622_28651 = state_28611__$1;
(statearr_28622_28651[(1)] = (15));

} else {
var statearr_28623_28652 = state_28611__$1;
(statearr_28623_28652[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (2))){
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28611__$1,(4),ch);
} else {
if((state_val_28612 === (11))){
var inst_28571 = (state_28611[(8)]);
var inst_28576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28577 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28571);
var inst_28578 = cljs.core.async.timeout.call(null,(1000));
var inst_28579 = [inst_28577,inst_28578];
var inst_28580 = (new cljs.core.PersistentVector(null,2,(5),inst_28576,inst_28579,null));
var state_28611__$1 = state_28611;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28611__$1,(14),inst_28580);
} else {
if((state_val_28612 === (9))){
var inst_28571 = (state_28611[(8)]);
var inst_28597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28598 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28571);
var inst_28599 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28598);
var inst_28600 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28599)].join('');
var inst_28601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28600);
var state_28611__$1 = (function (){var statearr_28624 = state_28611;
(statearr_28624[(10)] = inst_28597);

return statearr_28624;
})();
var statearr_28625_28653 = state_28611__$1;
(statearr_28625_28653[(2)] = inst_28601);

(statearr_28625_28653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (5))){
var inst_28564 = (state_28611[(7)]);
var inst_28566 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28567 = (new cljs.core.PersistentArrayMap(null,2,inst_28566,null));
var inst_28568 = (new cljs.core.PersistentHashSet(null,inst_28567,null));
var inst_28569 = figwheel.client.focus_msgs.call(null,inst_28568,inst_28564);
var inst_28570 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28569);
var inst_28571 = cljs.core.first.call(null,inst_28569);
var inst_28572 = figwheel.client.autoload_QMARK_.call(null);
var state_28611__$1 = (function (){var statearr_28626 = state_28611;
(statearr_28626[(9)] = inst_28570);

(statearr_28626[(8)] = inst_28571);

return statearr_28626;
})();
if(cljs.core.truth_(inst_28572)){
var statearr_28627_28654 = state_28611__$1;
(statearr_28627_28654[(1)] = (8));

} else {
var statearr_28628_28655 = state_28611__$1;
(statearr_28628_28655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (14))){
var inst_28582 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28629_28656 = state_28611__$1;
(statearr_28629_28656[(2)] = inst_28582);

(statearr_28629_28656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (16))){
var state_28611__$1 = state_28611;
var statearr_28630_28657 = state_28611__$1;
(statearr_28630_28657[(2)] = null);

(statearr_28630_28657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (10))){
var inst_28603 = (state_28611[(2)]);
var state_28611__$1 = (function (){var statearr_28631 = state_28611;
(statearr_28631[(11)] = inst_28603);

return statearr_28631;
})();
var statearr_28632_28658 = state_28611__$1;
(statearr_28632_28658[(2)] = null);

(statearr_28632_28658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (8))){
var inst_28570 = (state_28611[(9)]);
var inst_28574 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28570,opts);
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28574)){
var statearr_28633_28659 = state_28611__$1;
(statearr_28633_28659[(1)] = (11));

} else {
var statearr_28634_28660 = state_28611__$1;
(statearr_28634_28660[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24244__auto___28642,ch))
;
return ((function (switch__24132__auto__,c__24244__auto___28642,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24133__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24133__auto____0 = (function (){
var statearr_28638 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28638[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24133__auto__);

(statearr_28638[(1)] = (1));

return statearr_28638;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24133__auto____1 = (function (state_28611){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_28611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e28639){if((e28639 instanceof Object)){
var ex__24136__auto__ = e28639;
var statearr_28640_28661 = state_28611;
(statearr_28640_28661[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28662 = state_28611;
state_28611 = G__28662;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24133__auto__ = function(state_28611){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24133__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24133__auto____1.call(this,state_28611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24133__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24133__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___28642,ch))
})();
var state__24246__auto__ = (function (){var statearr_28641 = f__24245__auto__.call(null);
(statearr_28641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___28642);

return statearr_28641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___28642,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28663_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28663_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28670 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28670){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28669 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28669;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28668;
}}catch (e28667){if((e28667 instanceof Error)){
var e = e28667;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28670], null));
} else {
var e = e28667;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28670))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28671){
var map__28678 = p__28671;
var map__28678__$1 = ((((!((map__28678 == null)))?((((map__28678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28678):map__28678);
var opts = map__28678__$1;
var build_id = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28678,map__28678__$1,opts,build_id){
return (function (p__28680){
var vec__28681 = p__28680;
var map__28682 = cljs.core.nth.call(null,vec__28681,(0),null);
var map__28682__$1 = ((((!((map__28682 == null)))?((((map__28682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28682):map__28682);
var msg = map__28682__$1;
var msg_name = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28681,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28681,map__28682,map__28682__$1,msg,msg_name,_,map__28678,map__28678__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28681,map__28682,map__28682__$1,msg,msg_name,_,map__28678,map__28678__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28678,map__28678__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28688){
var vec__28689 = p__28688;
var map__28690 = cljs.core.nth.call(null,vec__28689,(0),null);
var map__28690__$1 = ((((!((map__28690 == null)))?((((map__28690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28690):map__28690);
var msg = map__28690__$1;
var msg_name = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28689,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28692){
var map__28702 = p__28692;
var map__28702__$1 = ((((!((map__28702 == null)))?((((map__28702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28702):map__28702);
var on_compile_warning = cljs.core.get.call(null,map__28702__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28702__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28702,map__28702__$1,on_compile_warning,on_compile_fail){
return (function (p__28704){
var vec__28705 = p__28704;
var map__28706 = cljs.core.nth.call(null,vec__28705,(0),null);
var map__28706__$1 = ((((!((map__28706 == null)))?((((map__28706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28706):map__28706);
var msg = map__28706__$1;
var msg_name = cljs.core.get.call(null,map__28706__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28705,(1));
var pred__28708 = cljs.core._EQ_;
var expr__28709 = msg_name;
if(cljs.core.truth_(pred__28708.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28709))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28708.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28709))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28702,map__28702__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__,msg_hist,msg_names,msg){
return (function (state_28925){
var state_val_28926 = (state_28925[(1)]);
if((state_val_28926 === (7))){
var inst_28849 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28849)){
var statearr_28927_28973 = state_28925__$1;
(statearr_28927_28973[(1)] = (8));

} else {
var statearr_28928_28974 = state_28925__$1;
(statearr_28928_28974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (20))){
var inst_28919 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28929_28975 = state_28925__$1;
(statearr_28929_28975[(2)] = inst_28919);

(statearr_28929_28975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (27))){
var inst_28915 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28930_28976 = state_28925__$1;
(statearr_28930_28976[(2)] = inst_28915);

(statearr_28930_28976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (1))){
var inst_28842 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28842)){
var statearr_28931_28977 = state_28925__$1;
(statearr_28931_28977[(1)] = (2));

} else {
var statearr_28932_28978 = state_28925__$1;
(statearr_28932_28978[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (24))){
var inst_28917 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28933_28979 = state_28925__$1;
(statearr_28933_28979[(2)] = inst_28917);

(statearr_28933_28979[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (4))){
var inst_28923 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28925__$1,inst_28923);
} else {
if((state_val_28926 === (15))){
var inst_28921 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28934_28980 = state_28925__$1;
(statearr_28934_28980[(2)] = inst_28921);

(statearr_28934_28980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (21))){
var inst_28880 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28935_28981 = state_28925__$1;
(statearr_28935_28981[(2)] = inst_28880);

(statearr_28935_28981[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (31))){
var inst_28904 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28904)){
var statearr_28936_28982 = state_28925__$1;
(statearr_28936_28982[(1)] = (34));

} else {
var statearr_28937_28983 = state_28925__$1;
(statearr_28937_28983[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (32))){
var inst_28913 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28938_28984 = state_28925__$1;
(statearr_28938_28984[(2)] = inst_28913);

(statearr_28938_28984[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (33))){
var inst_28902 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28939_28985 = state_28925__$1;
(statearr_28939_28985[(2)] = inst_28902);

(statearr_28939_28985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (13))){
var inst_28863 = figwheel.client.heads_up.clear.call(null);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(16),inst_28863);
} else {
if((state_val_28926 === (22))){
var inst_28884 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28885 = figwheel.client.heads_up.append_message.call(null,inst_28884);
var state_28925__$1 = state_28925;
var statearr_28940_28986 = state_28925__$1;
(statearr_28940_28986[(2)] = inst_28885);

(statearr_28940_28986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (36))){
var inst_28911 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28941_28987 = state_28925__$1;
(statearr_28941_28987[(2)] = inst_28911);

(statearr_28941_28987[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (29))){
var inst_28895 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28942_28988 = state_28925__$1;
(statearr_28942_28988[(2)] = inst_28895);

(statearr_28942_28988[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (6))){
var inst_28844 = (state_28925[(7)]);
var state_28925__$1 = state_28925;
var statearr_28943_28989 = state_28925__$1;
(statearr_28943_28989[(2)] = inst_28844);

(statearr_28943_28989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (28))){
var inst_28891 = (state_28925[(2)]);
var inst_28892 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28893 = figwheel.client.heads_up.display_warning.call(null,inst_28892);
var state_28925__$1 = (function (){var statearr_28944 = state_28925;
(statearr_28944[(8)] = inst_28891);

return statearr_28944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(29),inst_28893);
} else {
if((state_val_28926 === (25))){
var inst_28889 = figwheel.client.heads_up.clear.call(null);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(28),inst_28889);
} else {
if((state_val_28926 === (34))){
var inst_28906 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(37),inst_28906);
} else {
if((state_val_28926 === (17))){
var inst_28871 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28945_28990 = state_28925__$1;
(statearr_28945_28990[(2)] = inst_28871);

(statearr_28945_28990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (3))){
var inst_28861 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28861)){
var statearr_28946_28991 = state_28925__$1;
(statearr_28946_28991[(1)] = (13));

} else {
var statearr_28947_28992 = state_28925__$1;
(statearr_28947_28992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (12))){
var inst_28857 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28948_28993 = state_28925__$1;
(statearr_28948_28993[(2)] = inst_28857);

(statearr_28948_28993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (2))){
var inst_28844 = (state_28925[(7)]);
var inst_28844__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28925__$1 = (function (){var statearr_28949 = state_28925;
(statearr_28949[(7)] = inst_28844__$1);

return statearr_28949;
})();
if(cljs.core.truth_(inst_28844__$1)){
var statearr_28950_28994 = state_28925__$1;
(statearr_28950_28994[(1)] = (5));

} else {
var statearr_28951_28995 = state_28925__$1;
(statearr_28951_28995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (23))){
var inst_28887 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28887)){
var statearr_28952_28996 = state_28925__$1;
(statearr_28952_28996[(1)] = (25));

} else {
var statearr_28953_28997 = state_28925__$1;
(statearr_28953_28997[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (35))){
var state_28925__$1 = state_28925;
var statearr_28954_28998 = state_28925__$1;
(statearr_28954_28998[(2)] = null);

(statearr_28954_28998[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (19))){
var inst_28882 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28882)){
var statearr_28955_28999 = state_28925__$1;
(statearr_28955_28999[(1)] = (22));

} else {
var statearr_28956_29000 = state_28925__$1;
(statearr_28956_29000[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (11))){
var inst_28853 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28957_29001 = state_28925__$1;
(statearr_28957_29001[(2)] = inst_28853);

(statearr_28957_29001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (9))){
var inst_28855 = figwheel.client.heads_up.clear.call(null);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(12),inst_28855);
} else {
if((state_val_28926 === (5))){
var inst_28846 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28925__$1 = state_28925;
var statearr_28958_29002 = state_28925__$1;
(statearr_28958_29002[(2)] = inst_28846);

(statearr_28958_29002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (14))){
var inst_28873 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28873)){
var statearr_28959_29003 = state_28925__$1;
(statearr_28959_29003[(1)] = (18));

} else {
var statearr_28960_29004 = state_28925__$1;
(statearr_28960_29004[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (26))){
var inst_28897 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28897)){
var statearr_28961_29005 = state_28925__$1;
(statearr_28961_29005[(1)] = (30));

} else {
var statearr_28962_29006 = state_28925__$1;
(statearr_28962_29006[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (16))){
var inst_28865 = (state_28925[(2)]);
var inst_28866 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28867 = figwheel.client.format_messages.call(null,inst_28866);
var inst_28868 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28869 = figwheel.client.heads_up.display_error.call(null,inst_28867,inst_28868);
var state_28925__$1 = (function (){var statearr_28963 = state_28925;
(statearr_28963[(9)] = inst_28865);

return statearr_28963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(17),inst_28869);
} else {
if((state_val_28926 === (30))){
var inst_28899 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28900 = figwheel.client.heads_up.display_warning.call(null,inst_28899);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(33),inst_28900);
} else {
if((state_val_28926 === (10))){
var inst_28859 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28964_29007 = state_28925__$1;
(statearr_28964_29007[(2)] = inst_28859);

(statearr_28964_29007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (18))){
var inst_28875 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28876 = figwheel.client.format_messages.call(null,inst_28875);
var inst_28877 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28878 = figwheel.client.heads_up.display_error.call(null,inst_28876,inst_28877);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(21),inst_28878);
} else {
if((state_val_28926 === (37))){
var inst_28908 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28965_29008 = state_28925__$1;
(statearr_28965_29008[(2)] = inst_28908);

(statearr_28965_29008[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (8))){
var inst_28851 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(11),inst_28851);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24244__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24132__auto__,c__24244__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto____0 = (function (){
var statearr_28969 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28969[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto__);

(statearr_28969[(1)] = (1));

return statearr_28969;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto____1 = (function (state_28925){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_28925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e28970){if((e28970 instanceof Object)){
var ex__24136__auto__ = e28970;
var statearr_28971_29009 = state_28925;
(statearr_28971_29009[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29010 = state_28925;
state_28925 = G__29010;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto__ = function(state_28925){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto____1.call(this,state_28925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__,msg_hist,msg_names,msg))
})();
var state__24246__auto__ = (function (){var statearr_28972 = f__24245__auto__.call(null);
(statearr_28972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_28972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__,msg_hist,msg_names,msg))
);

return c__24244__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24244__auto___29073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___29073,ch){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___29073,ch){
return (function (state_29056){
var state_val_29057 = (state_29056[(1)]);
if((state_val_29057 === (1))){
var state_29056__$1 = state_29056;
var statearr_29058_29074 = state_29056__$1;
(statearr_29058_29074[(2)] = null);

(statearr_29058_29074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (2))){
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29056__$1,(4),ch);
} else {
if((state_val_29057 === (3))){
var inst_29054 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29056__$1,inst_29054);
} else {
if((state_val_29057 === (4))){
var inst_29044 = (state_29056[(7)]);
var inst_29044__$1 = (state_29056[(2)]);
var state_29056__$1 = (function (){var statearr_29059 = state_29056;
(statearr_29059[(7)] = inst_29044__$1);

return statearr_29059;
})();
if(cljs.core.truth_(inst_29044__$1)){
var statearr_29060_29075 = state_29056__$1;
(statearr_29060_29075[(1)] = (5));

} else {
var statearr_29061_29076 = state_29056__$1;
(statearr_29061_29076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (5))){
var inst_29044 = (state_29056[(7)]);
var inst_29046 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29044);
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29056__$1,(8),inst_29046);
} else {
if((state_val_29057 === (6))){
var state_29056__$1 = state_29056;
var statearr_29062_29077 = state_29056__$1;
(statearr_29062_29077[(2)] = null);

(statearr_29062_29077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (7))){
var inst_29052 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29063_29078 = state_29056__$1;
(statearr_29063_29078[(2)] = inst_29052);

(statearr_29063_29078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (8))){
var inst_29048 = (state_29056[(2)]);
var state_29056__$1 = (function (){var statearr_29064 = state_29056;
(statearr_29064[(8)] = inst_29048);

return statearr_29064;
})();
var statearr_29065_29079 = state_29056__$1;
(statearr_29065_29079[(2)] = null);

(statearr_29065_29079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24244__auto___29073,ch))
;
return ((function (switch__24132__auto__,c__24244__auto___29073,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24133__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24133__auto____0 = (function (){
var statearr_29069 = [null,null,null,null,null,null,null,null,null];
(statearr_29069[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24133__auto__);

(statearr_29069[(1)] = (1));

return statearr_29069;
});
var figwheel$client$heads_up_plugin_$_state_machine__24133__auto____1 = (function (state_29056){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_29056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e29070){if((e29070 instanceof Object)){
var ex__24136__auto__ = e29070;
var statearr_29071_29080 = state_29056;
(statearr_29071_29080[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29081 = state_29056;
state_29056 = G__29081;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24133__auto__ = function(state_29056){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24133__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24133__auto____1.call(this,state_29056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24133__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24133__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___29073,ch))
})();
var state__24246__auto__ = (function (){var statearr_29072 = f__24245__auto__.call(null);
(statearr_29072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___29073);

return statearr_29072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___29073,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (1))){
var inst_29097 = cljs.core.async.timeout.call(null,(3000));
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(2),inst_29097);
} else {
if((state_val_29103 === (2))){
var inst_29099 = (state_29102[(2)]);
var inst_29100 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29102__$1 = (function (){var statearr_29104 = state_29102;
(statearr_29104[(7)] = inst_29099);

return statearr_29104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
return null;
}
}
});})(c__24244__auto__))
;
return ((function (switch__24132__auto__,c__24244__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24133__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24133__auto____0 = (function (){
var statearr_29108 = [null,null,null,null,null,null,null,null];
(statearr_29108[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24133__auto__);

(statearr_29108[(1)] = (1));

return statearr_29108;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24133__auto____1 = (function (state_29102){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e29109){if((e29109 instanceof Object)){
var ex__24136__auto__ = e29109;
var statearr_29110_29112 = state_29102;
(statearr_29110_29112[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29113 = state_29102;
state_29102 = G__29113;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24133__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24133__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24133__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24133__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24133__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__))
})();
var state__24246__auto__ = (function (){var statearr_29111 = f__24245__auto__.call(null);
(statearr_29111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_29111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__))
);

return c__24244__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29114){
var map__29121 = p__29114;
var map__29121__$1 = ((((!((map__29121 == null)))?((((map__29121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29121):map__29121);
var ed = map__29121__$1;
var formatted_exception = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29123_29127 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29124_29128 = null;
var count__29125_29129 = (0);
var i__29126_29130 = (0);
while(true){
if((i__29126_29130 < count__29125_29129)){
var msg_29131 = cljs.core._nth.call(null,chunk__29124_29128,i__29126_29130);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29131);

var G__29132 = seq__29123_29127;
var G__29133 = chunk__29124_29128;
var G__29134 = count__29125_29129;
var G__29135 = (i__29126_29130 + (1));
seq__29123_29127 = G__29132;
chunk__29124_29128 = G__29133;
count__29125_29129 = G__29134;
i__29126_29130 = G__29135;
continue;
} else {
var temp__4425__auto___29136 = cljs.core.seq.call(null,seq__29123_29127);
if(temp__4425__auto___29136){
var seq__29123_29137__$1 = temp__4425__auto___29136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29123_29137__$1)){
var c__21818__auto___29138 = cljs.core.chunk_first.call(null,seq__29123_29137__$1);
var G__29139 = cljs.core.chunk_rest.call(null,seq__29123_29137__$1);
var G__29140 = c__21818__auto___29138;
var G__29141 = cljs.core.count.call(null,c__21818__auto___29138);
var G__29142 = (0);
seq__29123_29127 = G__29139;
chunk__29124_29128 = G__29140;
count__29125_29129 = G__29141;
i__29126_29130 = G__29142;
continue;
} else {
var msg_29143 = cljs.core.first.call(null,seq__29123_29137__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29143);

var G__29144 = cljs.core.next.call(null,seq__29123_29137__$1);
var G__29145 = null;
var G__29146 = (0);
var G__29147 = (0);
seq__29123_29127 = G__29144;
chunk__29124_29128 = G__29145;
count__29125_29129 = G__29146;
i__29126_29130 = G__29147;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29148){
var map__29151 = p__29148;
var map__29151__$1 = ((((!((map__29151 == null)))?((((map__29151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29151):map__29151);
var w = map__29151__$1;
var message = cljs.core.get.call(null,map__29151__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21003__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21003__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21003__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29159 = cljs.core.seq.call(null,plugins);
var chunk__29160 = null;
var count__29161 = (0);
var i__29162 = (0);
while(true){
if((i__29162 < count__29161)){
var vec__29163 = cljs.core._nth.call(null,chunk__29160,i__29162);
var k = cljs.core.nth.call(null,vec__29163,(0),null);
var plugin = cljs.core.nth.call(null,vec__29163,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29165 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29159,chunk__29160,count__29161,i__29162,pl_29165,vec__29163,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29165.call(null,msg_hist);
});})(seq__29159,chunk__29160,count__29161,i__29162,pl_29165,vec__29163,k,plugin))
);
} else {
}

var G__29166 = seq__29159;
var G__29167 = chunk__29160;
var G__29168 = count__29161;
var G__29169 = (i__29162 + (1));
seq__29159 = G__29166;
chunk__29160 = G__29167;
count__29161 = G__29168;
i__29162 = G__29169;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29159);
if(temp__4425__auto__){
var seq__29159__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29159__$1)){
var c__21818__auto__ = cljs.core.chunk_first.call(null,seq__29159__$1);
var G__29170 = cljs.core.chunk_rest.call(null,seq__29159__$1);
var G__29171 = c__21818__auto__;
var G__29172 = cljs.core.count.call(null,c__21818__auto__);
var G__29173 = (0);
seq__29159 = G__29170;
chunk__29160 = G__29171;
count__29161 = G__29172;
i__29162 = G__29173;
continue;
} else {
var vec__29164 = cljs.core.first.call(null,seq__29159__$1);
var k = cljs.core.nth.call(null,vec__29164,(0),null);
var plugin = cljs.core.nth.call(null,vec__29164,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29174 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29159,chunk__29160,count__29161,i__29162,pl_29174,vec__29164,k,plugin,seq__29159__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29174.call(null,msg_hist);
});})(seq__29159,chunk__29160,count__29161,i__29162,pl_29174,vec__29164,k,plugin,seq__29159__$1,temp__4425__auto__))
);
} else {
}

var G__29175 = cljs.core.next.call(null,seq__29159__$1);
var G__29176 = null;
var G__29177 = (0);
var G__29178 = (0);
seq__29159 = G__29175;
chunk__29160 = G__29176;
count__29161 = G__29177;
i__29162 = G__29178;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29179 = [];
var len__22073__auto___29182 = arguments.length;
var i__22074__auto___29183 = (0);
while(true){
if((i__22074__auto___29183 < len__22073__auto___29182)){
args29179.push((arguments[i__22074__auto___29183]));

var G__29184 = (i__22074__auto___29183 + (1));
i__22074__auto___29183 = G__29184;
continue;
} else {
}
break;
}

var G__29181 = args29179.length;
switch (G__29181) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29179.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22080__auto__ = [];
var len__22073__auto___29190 = arguments.length;
var i__22074__auto___29191 = (0);
while(true){
if((i__22074__auto___29191 < len__22073__auto___29190)){
args__22080__auto__.push((arguments[i__22074__auto___29191]));

var G__29192 = (i__22074__auto___29191 + (1));
i__22074__auto___29191 = G__29192;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((0) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22081__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29187){
var map__29188 = p__29187;
var map__29188__$1 = ((((!((map__29188 == null)))?((((map__29188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);
var opts = map__29188__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29186){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29186));
});

//# sourceMappingURL=client.js.map
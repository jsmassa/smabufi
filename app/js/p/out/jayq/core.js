// Compiled by ClojureScript 1.7.228 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args22125 = [];
var len__22073__auto___22128 = arguments.length;
var i__22074__auto___22129 = (0);
while(true){
if((i__22074__auto___22129 < len__22073__auto___22128)){
args22125.push((arguments[i__22074__auto___22129]));

var G__22130 = (i__22074__auto___22129 + (1));
i__22074__auto___22129 = G__22130;
continue;
} else {
}
break;
}

var G__22127 = args22125.length;
switch (G__22127) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22125.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__21015__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__22133 = null;
var G__22133__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__22133__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__22133 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__22133__2.call(this,self__,k);
case 3:
return G__22133__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22133.cljs$core$IFn$_invoke$arity$2 = G__22133__2;
G__22133.cljs$core$IFn$_invoke$arity$3 = G__22133__3;
return G__22133;
})()
;

jQuery.prototype.apply = (function (self__,args22132){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22132)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22139 = arguments.length;
var i__22074__auto___22140 = (0);
while(true){
if((i__22074__auto___22140 < len__22073__auto___22139)){
args__22080__auto__.push((arguments[i__22074__auto___22140]));

var G__22141 = (i__22074__auto___22140 + (1));
i__22074__auto___22140 = G__22141;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((2) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22081__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__22137){
var vec__22138 = p__22137;
var speed = cljs.core.nth.call(null,vec__22138,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22138,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq22134){
var G__22135 = cljs.core.first.call(null,seq22134);
var seq22134__$1 = cljs.core.next.call(null,seq22134);
var G__22136 = cljs.core.first.call(null,seq22134__$1);
var seq22134__$2 = cljs.core.next.call(null,seq22134__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__22135,G__22136,seq22134__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args22142 = [];
var len__22073__auto___22145 = arguments.length;
var i__22074__auto___22146 = (0);
while(true){
if((i__22074__auto___22146 < len__22073__auto___22145)){
args22142.push((arguments[i__22074__auto___22146]));

var G__22147 = (i__22074__auto___22146 + (1));
i__22074__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var G__22144 = args22142.length;
switch (G__22144) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22142.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args22149 = [];
var len__22073__auto___22152 = arguments.length;
var i__22074__auto___22153 = (0);
while(true){
if((i__22074__auto___22153 < len__22073__auto___22152)){
args22149.push((arguments[i__22074__auto___22153]));

var G__22154 = (i__22074__auto___22153 + (1));
i__22074__auto___22153 = G__22154;
continue;
} else {
}
break;
}

var G__22151 = args22149.length;
switch (G__22151) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22149.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args22156 = [];
var len__22073__auto___22159 = arguments.length;
var i__22074__auto___22160 = (0);
while(true){
if((i__22074__auto___22160 < len__22073__auto___22159)){
args22156.push((arguments[i__22074__auto___22160]));

var G__22161 = (i__22074__auto___22160 + (1));
i__22074__auto___22160 = G__22161;
continue;
} else {
}
break;
}

var G__22158 = args22156.length;
switch (G__22158) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22156.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args22163 = [];
var len__22073__auto___22166 = arguments.length;
var i__22074__auto___22167 = (0);
while(true){
if((i__22074__auto___22167 < len__22073__auto___22166)){
args22163.push((arguments[i__22074__auto___22167]));

var G__22168 = (i__22074__auto___22167 + (1));
i__22074__auto___22167 = G__22168;
continue;
} else {
}
break;
}

var G__22165 = args22163.length;
switch (G__22165) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22163.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args22170 = [];
var len__22073__auto___22173 = arguments.length;
var i__22074__auto___22174 = (0);
while(true){
if((i__22074__auto___22174 < len__22073__auto___22173)){
args22170.push((arguments[i__22074__auto___22174]));

var G__22175 = (i__22074__auto___22174 + (1));
i__22074__auto___22174 = G__22175;
continue;
} else {
}
break;
}

var G__22172 = args22170.length;
switch (G__22172) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22170.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args22177 = [];
var len__22073__auto___22180 = arguments.length;
var i__22074__auto___22181 = (0);
while(true){
if((i__22074__auto___22181 < len__22073__auto___22180)){
args22177.push((arguments[i__22074__auto___22181]));

var G__22182 = (i__22074__auto___22181 + (1));
i__22074__auto___22181 = G__22182;
continue;
} else {
}
break;
}

var G__22179 = args22177.length;
switch (G__22179) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22177.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args22184 = [];
var len__22073__auto___22187 = arguments.length;
var i__22074__auto___22188 = (0);
while(true){
if((i__22074__auto___22188 < len__22073__auto___22187)){
args22184.push((arguments[i__22074__auto___22188]));

var G__22189 = (i__22074__auto___22188 + (1));
i__22074__auto___22188 = G__22189;
continue;
} else {
}
break;
}

var G__22186 = args22184.length;
switch (G__22186) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22184.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22195 = arguments.length;
var i__22074__auto___22196 = (0);
while(true){
if((i__22074__auto___22196 < len__22073__auto___22195)){
args__22080__auto__.push((arguments[i__22074__auto___22196]));

var G__22197 = (i__22074__auto___22196 + (1));
i__22074__auto___22196 = G__22197;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__22193){
var vec__22194 = p__22193;
var speed = cljs.core.nth.call(null,vec__22194,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22194,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq22191){
var G__22192 = cljs.core.first.call(null,seq22191);
var seq22191__$1 = cljs.core.next.call(null,seq22191);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__22192,seq22191__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22202 = arguments.length;
var i__22074__auto___22203 = (0);
while(true){
if((i__22074__auto___22203 < len__22073__auto___22202)){
args__22080__auto__.push((arguments[i__22074__auto___22203]));

var G__22204 = (i__22074__auto___22203 + (1));
i__22074__auto___22203 = G__22204;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__22200){
var vec__22201 = p__22200;
var speed = cljs.core.nth.call(null,vec__22201,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22201,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq22198){
var G__22199 = cljs.core.first.call(null,seq22198);
var seq22198__$1 = cljs.core.next.call(null,seq22198);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__22199,seq22198__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22209 = arguments.length;
var i__22074__auto___22210 = (0);
while(true){
if((i__22074__auto___22210 < len__22073__auto___22209)){
args__22080__auto__.push((arguments[i__22074__auto___22210]));

var G__22211 = (i__22074__auto___22210 + (1));
i__22074__auto___22210 = G__22211;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__22207){
var vec__22208 = p__22207;
var speed = cljs.core.nth.call(null,vec__22208,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22208,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq22205){
var G__22206 = cljs.core.first.call(null,seq22205);
var seq22205__$1 = cljs.core.next.call(null,seq22205);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__22206,seq22205__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22216 = arguments.length;
var i__22074__auto___22217 = (0);
while(true){
if((i__22074__auto___22217 < len__22073__auto___22216)){
args__22080__auto__.push((arguments[i__22074__auto___22217]));

var G__22218 = (i__22074__auto___22217 + (1));
i__22074__auto___22217 = G__22218;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__22214){
var vec__22215 = p__22214;
var speed = cljs.core.nth.call(null,vec__22215,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22215,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq22212){
var G__22213 = cljs.core.first.call(null,seq22212);
var seq22212__$1 = cljs.core.next.call(null,seq22212);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__22213,seq22212__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22223 = arguments.length;
var i__22074__auto___22224 = (0);
while(true){
if((i__22074__auto___22224 < len__22073__auto___22223)){
args__22080__auto__.push((arguments[i__22074__auto___22224]));

var G__22225 = (i__22074__auto___22224 + (1));
i__22074__auto___22224 = G__22225;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__22221){
var vec__22222 = p__22221;
var speed = cljs.core.nth.call(null,vec__22222,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22222,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq22219){
var G__22220 = cljs.core.first.call(null,seq22219);
var seq22219__$1 = cljs.core.next.call(null,seq22219);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__22220,seq22219__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22230 = arguments.length;
var i__22074__auto___22231 = (0);
while(true){
if((i__22074__auto___22231 < len__22073__auto___22230)){
args__22080__auto__.push((arguments[i__22074__auto___22231]));

var G__22232 = (i__22074__auto___22231 + (1));
i__22074__auto___22231 = G__22232;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__22228){
var vec__22229 = p__22228;
var speed = cljs.core.nth.call(null,vec__22229,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22229,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq22226){
var G__22227 = cljs.core.first.call(null,seq22226);
var seq22226__$1 = cljs.core.next.call(null,seq22226);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__22227,seq22226__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22237 = arguments.length;
var i__22074__auto___22238 = (0);
while(true){
if((i__22074__auto___22238 < len__22073__auto___22237)){
args__22080__auto__.push((arguments[i__22074__auto___22238]));

var G__22239 = (i__22074__auto___22238 + (1));
i__22074__auto___22238 = G__22239;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__22235){
var vec__22236 = p__22235;
var speed = cljs.core.nth.call(null,vec__22236,(0),null);
var on_finish = cljs.core.nth.call(null,vec__22236,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq22233){
var G__22234 = cljs.core.first.call(null,seq22233);
var seq22233__$1 = cljs.core.next.call(null,seq22233);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__22234,seq22233__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args22240 = [];
var len__22073__auto___22243 = arguments.length;
var i__22074__auto___22244 = (0);
while(true){
if((i__22074__auto___22244 < len__22073__auto___22243)){
args22240.push((arguments[i__22074__auto___22244]));

var G__22245 = (i__22074__auto___22244 + (1));
i__22074__auto___22244 = G__22245;
continue;
} else {
}
break;
}

var G__22242 = args22240.length;
switch (G__22242) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22240.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args22247 = [];
var len__22073__auto___22250 = arguments.length;
var i__22074__auto___22251 = (0);
while(true){
if((i__22074__auto___22251 < len__22073__auto___22250)){
args22247.push((arguments[i__22074__auto___22251]));

var G__22252 = (i__22074__auto___22251 + (1));
i__22074__auto___22251 = G__22252;
continue;
} else {
}
break;
}

var G__22249 = args22247.length;
switch (G__22249) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22247.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args22254 = [];
var len__22073__auto___22257 = arguments.length;
var i__22074__auto___22258 = (0);
while(true){
if((i__22074__auto___22258 < len__22073__auto___22257)){
args22254.push((arguments[i__22074__auto___22258]));

var G__22259 = (i__22074__auto___22258 + (1));
i__22074__auto___22258 = G__22259;
continue;
} else {
}
break;
}

var G__22256 = args22254.length;
switch (G__22256) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22254.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args22261 = [];
var len__22073__auto___22264 = arguments.length;
var i__22074__auto___22265 = (0);
while(true){
if((i__22074__auto___22265 < len__22073__auto___22264)){
args22261.push((arguments[i__22074__auto___22265]));

var G__22266 = (i__22074__auto___22265 + (1));
i__22074__auto___22265 = G__22266;
continue;
} else {
}
break;
}

var G__22263 = args22261.length;
switch (G__22263) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22261.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args22268 = [];
var len__22073__auto___22271 = arguments.length;
var i__22074__auto___22272 = (0);
while(true){
if((i__22074__auto___22272 < len__22073__auto___22271)){
args22268.push((arguments[i__22074__auto___22272]));

var G__22273 = (i__22074__auto___22272 + (1));
i__22074__auto___22272 = G__22273;
continue;
} else {
}
break;
}

var G__22270 = args22268.length;
switch (G__22270) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22268.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args22275 = [];
var len__22073__auto___22278 = arguments.length;
var i__22074__auto___22279 = (0);
while(true){
if((i__22074__auto___22279 < len__22073__auto___22278)){
args22275.push((arguments[i__22074__auto___22279]));

var G__22280 = (i__22074__auto___22279 + (1));
i__22074__auto___22279 = G__22280;
continue;
} else {
}
break;
}

var G__22277 = args22275.length;
switch (G__22277) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22275.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args22282 = [];
var len__22073__auto___22285 = arguments.length;
var i__22074__auto___22286 = (0);
while(true){
if((i__22074__auto___22286 < len__22073__auto___22285)){
args22282.push((arguments[i__22074__auto___22286]));

var G__22287 = (i__22074__auto___22286 + (1));
i__22074__auto___22286 = G__22287;
continue;
} else {
}
break;
}

var G__22284 = args22282.length;
switch (G__22284) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22282.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args22289 = [];
var len__22073__auto___22292 = arguments.length;
var i__22074__auto___22293 = (0);
while(true){
if((i__22074__auto___22293 < len__22073__auto___22292)){
args22289.push((arguments[i__22074__auto___22293]));

var G__22294 = (i__22074__auto___22293 + (1));
i__22074__auto___22293 = G__22294;
continue;
} else {
}
break;
}

var G__22291 = args22289.length;
switch (G__22291) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22289.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args22296 = [];
var len__22073__auto___22299 = arguments.length;
var i__22074__auto___22300 = (0);
while(true){
if((i__22074__auto___22300 < len__22073__auto___22299)){
args22296.push((arguments[i__22074__auto___22300]));

var G__22301 = (i__22074__auto___22300 + (1));
i__22074__auto___22300 = G__22301;
continue;
} else {
}
break;
}

var G__22298 = args22296.length;
switch (G__22298) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22296.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args22303 = [];
var len__22073__auto___22306 = arguments.length;
var i__22074__auto___22307 = (0);
while(true){
if((i__22074__auto___22307 < len__22073__auto___22306)){
args22303.push((arguments[i__22074__auto___22307]));

var G__22308 = (i__22074__auto___22307 + (1));
i__22074__auto___22307 = G__22308;
continue;
} else {
}
break;
}

var G__22305 = args22303.length;
switch (G__22305) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22303.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22315 = arguments.length;
var i__22074__auto___22316 = (0);
while(true){
if((i__22074__auto___22316 < len__22073__auto___22315)){
args__22080__auto__.push((arguments[i__22074__auto___22316]));

var G__22317 = (i__22074__auto___22316 + (1));
i__22074__auto___22316 = G__22317;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((2) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22081__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__22313){
var vec__22314 = p__22313;
var context = cljs.core.nth.call(null,vec__22314,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq22310){
var G__22311 = cljs.core.first.call(null,seq22310);
var seq22310__$1 = cljs.core.next.call(null,seq22310);
var G__22312 = cljs.core.first.call(null,seq22310__$1);
var seq22310__$2 = cljs.core.next.call(null,seq22310__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__22311,G__22312,seq22310__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args22318 = [];
var len__22073__auto___22321 = arguments.length;
var i__22074__auto___22322 = (0);
while(true){
if((i__22074__auto___22322 < len__22073__auto___22321)){
args22318.push((arguments[i__22074__auto___22322]));

var G__22323 = (i__22074__auto___22322 + (1));
i__22074__auto___22322 = G__22323;
continue;
} else {
}
break;
}

var G__22320 = args22318.length;
switch (G__22320) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22318.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args22325 = [];
var len__22073__auto___22328 = arguments.length;
var i__22074__auto___22329 = (0);
while(true){
if((i__22074__auto___22329 < len__22073__auto___22328)){
args22325.push((arguments[i__22074__auto___22329]));

var G__22330 = (i__22074__auto___22329 + (1));
i__22074__auto___22329 = G__22330;
continue;
} else {
}
break;
}

var G__22327 = args22325.length;
switch (G__22327) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22325.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args22332 = [];
var len__22073__auto___22335 = arguments.length;
var i__22074__auto___22336 = (0);
while(true){
if((i__22074__auto___22336 < len__22073__auto___22335)){
args22332.push((arguments[i__22074__auto___22336]));

var G__22337 = (i__22074__auto___22336 + (1));
i__22074__auto___22336 = G__22337;
continue;
} else {
}
break;
}

var G__22334 = args22332.length;
switch (G__22334) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22332.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args22339 = [];
var len__22073__auto___22342 = arguments.length;
var i__22074__auto___22343 = (0);
while(true){
if((i__22074__auto___22343 < len__22073__auto___22342)){
args22339.push((arguments[i__22074__auto___22343]));

var G__22344 = (i__22074__auto___22343 + (1));
i__22074__auto___22343 = G__22344;
continue;
} else {
}
break;
}

var G__22341 = args22339.length;
switch (G__22341) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22339.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__22348){
var map__22351 = p__22348;
var map__22351__$1 = ((((!((map__22351 == null)))?((((map__22351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22351):map__22351);
var request = map__22351__$1;
var data = cljs.core.get.call(null,map__22351__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__22351__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__22351,map__22351__$1,request,data,contentType){
return (function (p1__22347_SHARP_){
if(cljs.core.truth_((function (){var and__21003__auto__ = ct;
if(cljs.core.truth_(and__21003__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__21003__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__22347_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__22347_SHARP_;
}
});})(ct,map__22351,map__22351__$1,request,data,contentType))
.call(null,((function (ct,map__22351,map__22351__$1,request,data,contentType){
return (function (p1__22346_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__22346_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__22346_SHARP_;
}
});})(ct,map__22351,map__22351__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args22353 = [];
var len__22073__auto___22356 = arguments.length;
var i__22074__auto___22357 = (0);
while(true){
if((i__22074__auto___22357 < len__22073__auto___22356)){
args22353.push((arguments[i__22074__auto___22357]));

var G__22358 = (i__22074__auto___22357 + (1));
i__22074__auto___22357 = G__22358;
continue;
} else {
}
break;
}

var G__22355 = args22353.length;
switch (G__22355) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22353.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__22360,content,callback){
var vec__22362 = p__22360;
var method = cljs.core.nth.call(null,vec__22362,(0),null);
var uri = cljs.core.nth.call(null,vec__22362,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22368 = arguments.length;
var i__22074__auto___22369 = (0);
while(true){
if((i__22074__auto___22369 < len__22073__auto___22368)){
args__22080__auto__.push((arguments[i__22074__auto___22369]));

var G__22370 = (i__22074__auto___22369 + (1));
i__22074__auto___22369 = G__22370;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((2) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22081__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__22366){
var vec__22367 = p__22366;
var func = cljs.core.nth.call(null,vec__22367,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq22363){
var G__22364 = cljs.core.first.call(null,seq22363);
var seq22363__$1 = cljs.core.next.call(null,seq22363);
var G__22365 = cljs.core.first.call(null,seq22363__$1);
var seq22363__$2 = cljs.core.next.call(null,seq22363__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__22364,G__22365,seq22363__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22376 = arguments.length;
var i__22074__auto___22377 = (0);
while(true){
if((i__22074__auto___22377 < len__22073__auto___22376)){
args__22080__auto__.push((arguments[i__22074__auto___22377]));

var G__22378 = (i__22074__auto___22377 + (1));
i__22074__auto___22377 = G__22378;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((2) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22081__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__22374){
var vec__22375 = p__22374;
var sel = cljs.core.nth.call(null,vec__22375,(0),null);
var data = cljs.core.nth.call(null,vec__22375,(1),null);
var handler = cljs.core.nth.call(null,vec__22375,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq22371){
var G__22372 = cljs.core.first.call(null,seq22371);
var seq22371__$1 = cljs.core.next.call(null,seq22371);
var G__22373 = cljs.core.first.call(null,seq22371__$1);
var seq22371__$2 = cljs.core.next.call(null,seq22371__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__22372,G__22373,seq22371__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22384 = arguments.length;
var i__22074__auto___22385 = (0);
while(true){
if((i__22074__auto___22385 < len__22073__auto___22384)){
args__22080__auto__.push((arguments[i__22074__auto___22385]));

var G__22386 = (i__22074__auto___22385 + (1));
i__22074__auto___22385 = G__22386;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((2) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22081__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__22382){
var vec__22383 = p__22382;
var sel = cljs.core.nth.call(null,vec__22383,(0),null);
var data = cljs.core.nth.call(null,vec__22383,(1),null);
var handler = cljs.core.nth.call(null,vec__22383,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq22379){
var G__22380 = cljs.core.first.call(null,seq22379);
var seq22379__$1 = cljs.core.next.call(null,seq22379);
var G__22381 = cljs.core.first.call(null,seq22379__$1);
var seq22379__$2 = cljs.core.next.call(null,seq22379__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__22380,G__22381,seq22379__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22392 = arguments.length;
var i__22074__auto___22393 = (0);
while(true){
if((i__22074__auto___22393 < len__22073__auto___22392)){
args__22080__auto__.push((arguments[i__22074__auto___22393]));

var G__22394 = (i__22074__auto___22393 + (1));
i__22074__auto___22393 = G__22394;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((2) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22081__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__22390){
var vec__22391 = p__22390;
var sel = cljs.core.nth.call(null,vec__22391,(0),null);
var handler = cljs.core.nth.call(null,vec__22391,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq22387){
var G__22388 = cljs.core.first.call(null,seq22387);
var seq22387__$1 = cljs.core.next.call(null,seq22387);
var G__22389 = cljs.core.first.call(null,seq22387__$1);
var seq22387__$2 = cljs.core.next.call(null,seq22387__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__22388,G__22389,seq22387__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args22395 = [];
var len__22073__auto___22398 = arguments.length;
var i__22074__auto___22399 = (0);
while(true){
if((i__22074__auto___22399 < len__22073__auto___22398)){
args22395.push((arguments[i__22074__auto___22399]));

var G__22400 = (i__22074__auto___22399 + (1));
i__22074__auto___22399 = G__22400;
continue;
} else {
}
break;
}

var G__22397 = args22395.length;
switch (G__22397) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22395.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args22402 = [];
var len__22073__auto___22405 = arguments.length;
var i__22074__auto___22406 = (0);
while(true){
if((i__22074__auto___22406 < len__22073__auto___22405)){
args22402.push((arguments[i__22074__auto___22406]));

var G__22407 = (i__22074__auto___22406 + (1));
i__22074__auto___22406 = G__22407;
continue;
} else {
}
break;
}

var G__22404 = args22402.length;
switch (G__22404) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22402.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args22409 = [];
var len__22073__auto___22412 = arguments.length;
var i__22074__auto___22413 = (0);
while(true){
if((i__22074__auto___22413 < len__22073__auto___22412)){
args22409.push((arguments[i__22074__auto___22413]));

var G__22414 = (i__22074__auto___22413 + (1));
i__22074__auto___22413 = G__22414;
continue;
} else {
}
break;
}

var G__22411 = args22409.length;
switch (G__22411) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22409.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args22416 = [];
var len__22073__auto___22419 = arguments.length;
var i__22074__auto___22420 = (0);
while(true){
if((i__22074__auto___22420 < len__22073__auto___22419)){
args22416.push((arguments[i__22074__auto___22420]));

var G__22421 = (i__22074__auto___22420 + (1));
i__22074__auto___22420 = G__22421;
continue;
} else {
}
break;
}

var G__22418 = args22416.length;
switch (G__22418) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22416.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args22423 = [];
var len__22073__auto___22426 = arguments.length;
var i__22074__auto___22427 = (0);
while(true){
if((i__22074__auto___22427 < len__22073__auto___22426)){
args22423.push((arguments[i__22074__auto___22427]));

var G__22428 = (i__22074__auto___22427 + (1));
i__22074__auto___22427 = G__22428;
continue;
} else {
}
break;
}

var G__22425 = args22423.length;
switch (G__22425) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22423.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args22430 = [];
var len__22073__auto___22433 = arguments.length;
var i__22074__auto___22434 = (0);
while(true){
if((i__22074__auto___22434 < len__22073__auto___22433)){
args22430.push((arguments[i__22074__auto___22434]));

var G__22435 = (i__22074__auto___22434 + (1));
i__22074__auto___22434 = G__22435;
continue;
} else {
}
break;
}

var G__22432 = args22430.length;
switch (G__22432) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22430.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22439 = arguments.length;
var i__22074__auto___22440 = (0);
while(true){
if((i__22074__auto___22440 < len__22073__auto___22439)){
args__22080__auto__.push((arguments[i__22074__auto___22440]));

var G__22441 = (i__22074__auto___22440 + (1));
i__22074__auto___22440 = G__22441;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq22437){
var G__22438 = cljs.core.first.call(null,seq22437);
var seq22437__$1 = cljs.core.next.call(null,seq22437);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__22438,seq22437__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22444 = arguments.length;
var i__22074__auto___22445 = (0);
while(true){
if((i__22074__auto___22445 < len__22073__auto___22444)){
args__22080__auto__.push((arguments[i__22074__auto___22445]));

var G__22446 = (i__22074__auto___22445 + (1));
i__22074__auto___22445 = G__22446;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq22442){
var G__22443 = cljs.core.first.call(null,seq22442);
var seq22442__$1 = cljs.core.next.call(null,seq22442);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__22443,seq22442__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args22447 = [];
var len__22073__auto___22450 = arguments.length;
var i__22074__auto___22451 = (0);
while(true){
if((i__22074__auto___22451 < len__22073__auto___22450)){
args22447.push((arguments[i__22074__auto___22451]));

var G__22452 = (i__22074__auto___22451 + (1));
i__22074__auto___22451 = G__22452;
continue;
} else {
}
break;
}

var G__22449 = args22447.length;
switch (G__22449) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22447.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__22080__auto__ = [];
var len__22073__auto___22456 = arguments.length;
var i__22074__auto___22457 = (0);
while(true){
if((i__22074__auto___22457 < len__22073__auto___22456)){
args__22080__auto__.push((arguments[i__22074__auto___22457]));

var G__22458 = (i__22074__auto___22457 + (1));
i__22074__auto___22457 = G__22458;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq22454){
var G__22455 = cljs.core.first.call(null,seq22454);
var seq22454__$1 = cljs.core.next.call(null,seq22454);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__22455,seq22454__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args22459 = [];
var len__22073__auto___22462 = arguments.length;
var i__22074__auto___22463 = (0);
while(true){
if((i__22074__auto___22463 < len__22073__auto___22462)){
args22459.push((arguments[i__22074__auto___22463]));

var G__22464 = (i__22074__auto___22463 + (1));
i__22074__auto___22463 = G__22464;
continue;
} else {
}
break;
}

var G__22461 = args22459.length;
switch (G__22461) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22459.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map
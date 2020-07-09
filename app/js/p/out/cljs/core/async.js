// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24289 = [];
var len__22073__auto___24295 = arguments.length;
var i__22074__auto___24296 = (0);
while(true){
if((i__22074__auto___24296 < len__22073__auto___24295)){
args24289.push((arguments[i__22074__auto___24296]));

var G__24297 = (i__22074__auto___24296 + (1));
i__22074__auto___24296 = G__24297;
continue;
} else {
}
break;
}

var G__24291 = args24289.length;
switch (G__24291) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24289.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24292 = (function (f,blockable,meta24293){
this.f = f;
this.blockable = blockable;
this.meta24293 = meta24293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24294,meta24293__$1){
var self__ = this;
var _24294__$1 = this;
return (new cljs.core.async.t_cljs$core$async24292(self__.f,self__.blockable,meta24293__$1));
});

cljs.core.async.t_cljs$core$async24292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24294){
var self__ = this;
var _24294__$1 = this;
return self__.meta24293;
});

cljs.core.async.t_cljs$core$async24292.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24293","meta24293",-1982297279,null)], null);
});

cljs.core.async.t_cljs$core$async24292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24292";

cljs.core.async.t_cljs$core$async24292.cljs$lang$ctorPrWriter = (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async24292");
});

cljs.core.async.__GT_t_cljs$core$async24292 = (function cljs$core$async$__GT_t_cljs$core$async24292(f__$1,blockable__$1,meta24293){
return (new cljs.core.async.t_cljs$core$async24292(f__$1,blockable__$1,meta24293));
});

}

return (new cljs.core.async.t_cljs$core$async24292(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24301 = [];
var len__22073__auto___24304 = arguments.length;
var i__22074__auto___24305 = (0);
while(true){
if((i__22074__auto___24305 < len__22073__auto___24304)){
args24301.push((arguments[i__22074__auto___24305]));

var G__24306 = (i__22074__auto___24305 + (1));
i__22074__auto___24305 = G__24306;
continue;
} else {
}
break;
}

var G__24303 = args24301.length;
switch (G__24303) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24301.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24308 = [];
var len__22073__auto___24311 = arguments.length;
var i__22074__auto___24312 = (0);
while(true){
if((i__22074__auto___24312 < len__22073__auto___24311)){
args24308.push((arguments[i__22074__auto___24312]));

var G__24313 = (i__22074__auto___24312 + (1));
i__22074__auto___24312 = G__24313;
continue;
} else {
}
break;
}

var G__24310 = args24308.length;
switch (G__24310) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24308.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24315 = [];
var len__22073__auto___24318 = arguments.length;
var i__22074__auto___24319 = (0);
while(true){
if((i__22074__auto___24319 < len__22073__auto___24318)){
args24315.push((arguments[i__22074__auto___24319]));

var G__24320 = (i__22074__auto___24319 + (1));
i__22074__auto___24319 = G__24320;
continue;
} else {
}
break;
}

var G__24317 = args24315.length;
switch (G__24317) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24315.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24322 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24322);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24322,ret){
return (function (){
return fn1.call(null,val_24322);
});})(val_24322,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24323 = [];
var len__22073__auto___24326 = arguments.length;
var i__22074__auto___24327 = (0);
while(true){
if((i__22074__auto___24327 < len__22073__auto___24326)){
args24323.push((arguments[i__22074__auto___24327]));

var G__24328 = (i__22074__auto___24327 + (1));
i__22074__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var G__24325 = args24323.length;
switch (G__24325) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24323.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21918__auto___24330 = n;
var x_24331 = (0);
while(true){
if((x_24331 < n__21918__auto___24330)){
(a[x_24331] = (0));

var G__24332 = (x_24331 + (1));
x_24331 = G__24332;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24333 = (i + (1));
i = G__24333;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24337 = (function (alt_flag,flag,meta24338){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24338 = meta24338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24339,meta24338__$1){
var self__ = this;
var _24339__$1 = this;
return (new cljs.core.async.t_cljs$core$async24337(self__.alt_flag,self__.flag,meta24338__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24339){
var self__ = this;
var _24339__$1 = this;
return self__.meta24338;
});})(flag))
;

cljs.core.async.t_cljs$core$async24337.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24337.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24338","meta24338",-1221923942,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24337";

cljs.core.async.t_cljs$core$async24337.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async24337");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24337 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24337(alt_flag__$1,flag__$1,meta24338){
return (new cljs.core.async.t_cljs$core$async24337(alt_flag__$1,flag__$1,meta24338));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24337(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24343 = (function (alt_handler,flag,cb,meta24344){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24344 = meta24344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24345,meta24344__$1){
var self__ = this;
var _24345__$1 = this;
return (new cljs.core.async.t_cljs$core$async24343(self__.alt_handler,self__.flag,self__.cb,meta24344__$1));
});

cljs.core.async.t_cljs$core$async24343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24345){
var self__ = this;
var _24345__$1 = this;
return self__.meta24344;
});

cljs.core.async.t_cljs$core$async24343.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24344","meta24344",2028036749,null)], null);
});

cljs.core.async.t_cljs$core$async24343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24343";

cljs.core.async.t_cljs$core$async24343.cljs$lang$ctorPrWriter = (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async24343");
});

cljs.core.async.__GT_t_cljs$core$async24343 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24343(alt_handler__$1,flag__$1,cb__$1,meta24344){
return (new cljs.core.async.t_cljs$core$async24343(alt_handler__$1,flag__$1,cb__$1,meta24344));
});

}

return (new cljs.core.async.t_cljs$core$async24343(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24346_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24346_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24347_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24347_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21015__auto__ = wport;
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24348 = (i + (1));
i = G__24348;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21015__auto__ = ret;
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__21003__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21003__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21003__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22080__auto__ = [];
var len__22073__auto___24354 = arguments.length;
var i__22074__auto___24355 = (0);
while(true){
if((i__22074__auto___24355 < len__22073__auto___24354)){
args__22080__auto__.push((arguments[i__22074__auto___24355]));

var G__24356 = (i__22074__auto___24355 + (1));
i__22074__auto___24355 = G__24356;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((1) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22081__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24351){
var map__24352 = p__24351;
var map__24352__$1 = ((((!((map__24352 == null)))?((((map__24352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352):map__24352);
var opts = map__24352__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24349){
var G__24350 = cljs.core.first.call(null,seq24349);
var seq24349__$1 = cljs.core.next.call(null,seq24349);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24350,seq24349__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24357 = [];
var len__22073__auto___24407 = arguments.length;
var i__22074__auto___24408 = (0);
while(true){
if((i__22074__auto___24408 < len__22073__auto___24407)){
args24357.push((arguments[i__22074__auto___24408]));

var G__24409 = (i__22074__auto___24408 + (1));
i__22074__auto___24408 = G__24409;
continue;
} else {
}
break;
}

var G__24359 = args24357.length;
switch (G__24359) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24357.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24244__auto___24411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___24411){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___24411){
return (function (state_24383){
var state_val_24384 = (state_24383[(1)]);
if((state_val_24384 === (7))){
var inst_24379 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24385_24412 = state_24383__$1;
(statearr_24385_24412[(2)] = inst_24379);

(statearr_24385_24412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (1))){
var state_24383__$1 = state_24383;
var statearr_24386_24413 = state_24383__$1;
(statearr_24386_24413[(2)] = null);

(statearr_24386_24413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (4))){
var inst_24362 = (state_24383[(7)]);
var inst_24362__$1 = (state_24383[(2)]);
var inst_24363 = (inst_24362__$1 == null);
var state_24383__$1 = (function (){var statearr_24387 = state_24383;
(statearr_24387[(7)] = inst_24362__$1);

return statearr_24387;
})();
if(cljs.core.truth_(inst_24363)){
var statearr_24388_24414 = state_24383__$1;
(statearr_24388_24414[(1)] = (5));

} else {
var statearr_24389_24415 = state_24383__$1;
(statearr_24389_24415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (13))){
var state_24383__$1 = state_24383;
var statearr_24390_24416 = state_24383__$1;
(statearr_24390_24416[(2)] = null);

(statearr_24390_24416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (6))){
var inst_24362 = (state_24383[(7)]);
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24383__$1,(11),to,inst_24362);
} else {
if((state_val_24384 === (3))){
var inst_24381 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24383__$1,inst_24381);
} else {
if((state_val_24384 === (12))){
var state_24383__$1 = state_24383;
var statearr_24391_24417 = state_24383__$1;
(statearr_24391_24417[(2)] = null);

(statearr_24391_24417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (2))){
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24383__$1,(4),from);
} else {
if((state_val_24384 === (11))){
var inst_24372 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
if(cljs.core.truth_(inst_24372)){
var statearr_24392_24418 = state_24383__$1;
(statearr_24392_24418[(1)] = (12));

} else {
var statearr_24393_24419 = state_24383__$1;
(statearr_24393_24419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (9))){
var state_24383__$1 = state_24383;
var statearr_24394_24420 = state_24383__$1;
(statearr_24394_24420[(2)] = null);

(statearr_24394_24420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (5))){
var state_24383__$1 = state_24383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24395_24421 = state_24383__$1;
(statearr_24395_24421[(1)] = (8));

} else {
var statearr_24396_24422 = state_24383__$1;
(statearr_24396_24422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (14))){
var inst_24377 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24397_24423 = state_24383__$1;
(statearr_24397_24423[(2)] = inst_24377);

(statearr_24397_24423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (10))){
var inst_24369 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24398_24424 = state_24383__$1;
(statearr_24398_24424[(2)] = inst_24369);

(statearr_24398_24424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (8))){
var inst_24366 = cljs.core.async.close_BANG_.call(null,to);
var state_24383__$1 = state_24383;
var statearr_24399_24425 = state_24383__$1;
(statearr_24399_24425[(2)] = inst_24366);

(statearr_24399_24425[(1)] = (10));


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
});})(c__24244__auto___24411))
;
return ((function (switch__24132__auto__,c__24244__auto___24411){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_24403 = [null,null,null,null,null,null,null,null];
(statearr_24403[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_24403[(1)] = (1));

return statearr_24403;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_24383){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_24383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e24404){if((e24404 instanceof Object)){
var ex__24136__auto__ = e24404;
var statearr_24405_24426 = state_24383;
(statearr_24405_24426[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24427 = state_24383;
state_24383 = G__24427;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_24383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_24383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___24411))
})();
var state__24246__auto__ = (function (){var statearr_24406 = f__24245__auto__.call(null);
(statearr_24406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___24411);

return statearr_24406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___24411))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24611){
var vec__24612 = p__24611;
var v = cljs.core.nth.call(null,vec__24612,(0),null);
var p = cljs.core.nth.call(null,vec__24612,(1),null);
var job = vec__24612;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24244__auto___24794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___24794,res,vec__24612,v,p,job,jobs,results){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___24794,res,vec__24612,v,p,job,jobs,results){
return (function (state_24617){
var state_val_24618 = (state_24617[(1)]);
if((state_val_24618 === (1))){
var state_24617__$1 = state_24617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24617__$1,(2),res,v);
} else {
if((state_val_24618 === (2))){
var inst_24614 = (state_24617[(2)]);
var inst_24615 = cljs.core.async.close_BANG_.call(null,res);
var state_24617__$1 = (function (){var statearr_24619 = state_24617;
(statearr_24619[(7)] = inst_24614);

return statearr_24619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24617__$1,inst_24615);
} else {
return null;
}
}
});})(c__24244__auto___24794,res,vec__24612,v,p,job,jobs,results))
;
return ((function (switch__24132__auto__,c__24244__auto___24794,res,vec__24612,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0 = (function (){
var statearr_24623 = [null,null,null,null,null,null,null,null];
(statearr_24623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__);

(statearr_24623[(1)] = (1));

return statearr_24623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1 = (function (state_24617){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_24617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e24624){if((e24624 instanceof Object)){
var ex__24136__auto__ = e24624;
var statearr_24625_24795 = state_24617;
(statearr_24625_24795[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24796 = state_24617;
state_24617 = G__24796;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = function(state_24617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1.call(this,state_24617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___24794,res,vec__24612,v,p,job,jobs,results))
})();
var state__24246__auto__ = (function (){var statearr_24626 = f__24245__auto__.call(null);
(statearr_24626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___24794);

return statearr_24626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___24794,res,vec__24612,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24627){
var vec__24628 = p__24627;
var v = cljs.core.nth.call(null,vec__24628,(0),null);
var p = cljs.core.nth.call(null,vec__24628,(1),null);
var job = vec__24628;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21918__auto___24797 = n;
var __24798 = (0);
while(true){
if((__24798 < n__21918__auto___24797)){
var G__24629_24799 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24629_24799) {
case "compute":
var c__24244__auto___24801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24798,c__24244__auto___24801,G__24629_24799,n__21918__auto___24797,jobs,results,process,async){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (__24798,c__24244__auto___24801,G__24629_24799,n__21918__auto___24797,jobs,results,process,async){
return (function (state_24642){
var state_val_24643 = (state_24642[(1)]);
if((state_val_24643 === (1))){
var state_24642__$1 = state_24642;
var statearr_24644_24802 = state_24642__$1;
(statearr_24644_24802[(2)] = null);

(statearr_24644_24802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (2))){
var state_24642__$1 = state_24642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24642__$1,(4),jobs);
} else {
if((state_val_24643 === (3))){
var inst_24640 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24642__$1,inst_24640);
} else {
if((state_val_24643 === (4))){
var inst_24632 = (state_24642[(2)]);
var inst_24633 = process.call(null,inst_24632);
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24633)){
var statearr_24645_24803 = state_24642__$1;
(statearr_24645_24803[(1)] = (5));

} else {
var statearr_24646_24804 = state_24642__$1;
(statearr_24646_24804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (5))){
var state_24642__$1 = state_24642;
var statearr_24647_24805 = state_24642__$1;
(statearr_24647_24805[(2)] = null);

(statearr_24647_24805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (6))){
var state_24642__$1 = state_24642;
var statearr_24648_24806 = state_24642__$1;
(statearr_24648_24806[(2)] = null);

(statearr_24648_24806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (7))){
var inst_24638 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24649_24807 = state_24642__$1;
(statearr_24649_24807[(2)] = inst_24638);

(statearr_24649_24807[(1)] = (3));


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
});})(__24798,c__24244__auto___24801,G__24629_24799,n__21918__auto___24797,jobs,results,process,async))
;
return ((function (__24798,switch__24132__auto__,c__24244__auto___24801,G__24629_24799,n__21918__auto___24797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0 = (function (){
var statearr_24653 = [null,null,null,null,null,null,null];
(statearr_24653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__);

(statearr_24653[(1)] = (1));

return statearr_24653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1 = (function (state_24642){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_24642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e24654){if((e24654 instanceof Object)){
var ex__24136__auto__ = e24654;
var statearr_24655_24808 = state_24642;
(statearr_24655_24808[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24809 = state_24642;
state_24642 = G__24809;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = function(state_24642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1.call(this,state_24642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__;
})()
;})(__24798,switch__24132__auto__,c__24244__auto___24801,G__24629_24799,n__21918__auto___24797,jobs,results,process,async))
})();
var state__24246__auto__ = (function (){var statearr_24656 = f__24245__auto__.call(null);
(statearr_24656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___24801);

return statearr_24656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(__24798,c__24244__auto___24801,G__24629_24799,n__21918__auto___24797,jobs,results,process,async))
);


break;
case "async":
var c__24244__auto___24810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24798,c__24244__auto___24810,G__24629_24799,n__21918__auto___24797,jobs,results,process,async){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (__24798,c__24244__auto___24810,G__24629_24799,n__21918__auto___24797,jobs,results,process,async){
return (function (state_24669){
var state_val_24670 = (state_24669[(1)]);
if((state_val_24670 === (1))){
var state_24669__$1 = state_24669;
var statearr_24671_24811 = state_24669__$1;
(statearr_24671_24811[(2)] = null);

(statearr_24671_24811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24670 === (2))){
var state_24669__$1 = state_24669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24669__$1,(4),jobs);
} else {
if((state_val_24670 === (3))){
var inst_24667 = (state_24669[(2)]);
var state_24669__$1 = state_24669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24669__$1,inst_24667);
} else {
if((state_val_24670 === (4))){
var inst_24659 = (state_24669[(2)]);
var inst_24660 = async.call(null,inst_24659);
var state_24669__$1 = state_24669;
if(cljs.core.truth_(inst_24660)){
var statearr_24672_24812 = state_24669__$1;
(statearr_24672_24812[(1)] = (5));

} else {
var statearr_24673_24813 = state_24669__$1;
(statearr_24673_24813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24670 === (5))){
var state_24669__$1 = state_24669;
var statearr_24674_24814 = state_24669__$1;
(statearr_24674_24814[(2)] = null);

(statearr_24674_24814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24670 === (6))){
var state_24669__$1 = state_24669;
var statearr_24675_24815 = state_24669__$1;
(statearr_24675_24815[(2)] = null);

(statearr_24675_24815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24670 === (7))){
var inst_24665 = (state_24669[(2)]);
var state_24669__$1 = state_24669;
var statearr_24676_24816 = state_24669__$1;
(statearr_24676_24816[(2)] = inst_24665);

(statearr_24676_24816[(1)] = (3));


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
});})(__24798,c__24244__auto___24810,G__24629_24799,n__21918__auto___24797,jobs,results,process,async))
;
return ((function (__24798,switch__24132__auto__,c__24244__auto___24810,G__24629_24799,n__21918__auto___24797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0 = (function (){
var statearr_24680 = [null,null,null,null,null,null,null];
(statearr_24680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__);

(statearr_24680[(1)] = (1));

return statearr_24680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1 = (function (state_24669){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_24669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e24681){if((e24681 instanceof Object)){
var ex__24136__auto__ = e24681;
var statearr_24682_24817 = state_24669;
(statearr_24682_24817[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24818 = state_24669;
state_24669 = G__24818;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = function(state_24669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1.call(this,state_24669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__;
})()
;})(__24798,switch__24132__auto__,c__24244__auto___24810,G__24629_24799,n__21918__auto___24797,jobs,results,process,async))
})();
var state__24246__auto__ = (function (){var statearr_24683 = f__24245__auto__.call(null);
(statearr_24683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___24810);

return statearr_24683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(__24798,c__24244__auto___24810,G__24629_24799,n__21918__auto___24797,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24819 = (__24798 + (1));
__24798 = G__24819;
continue;
} else {
}
break;
}

var c__24244__auto___24820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___24820,jobs,results,process,async){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___24820,jobs,results,process,async){
return (function (state_24705){
var state_val_24706 = (state_24705[(1)]);
if((state_val_24706 === (1))){
var state_24705__$1 = state_24705;
var statearr_24707_24821 = state_24705__$1;
(statearr_24707_24821[(2)] = null);

(statearr_24707_24821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (2))){
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24705__$1,(4),from);
} else {
if((state_val_24706 === (3))){
var inst_24703 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24705__$1,inst_24703);
} else {
if((state_val_24706 === (4))){
var inst_24686 = (state_24705[(7)]);
var inst_24686__$1 = (state_24705[(2)]);
var inst_24687 = (inst_24686__$1 == null);
var state_24705__$1 = (function (){var statearr_24708 = state_24705;
(statearr_24708[(7)] = inst_24686__$1);

return statearr_24708;
})();
if(cljs.core.truth_(inst_24687)){
var statearr_24709_24822 = state_24705__$1;
(statearr_24709_24822[(1)] = (5));

} else {
var statearr_24710_24823 = state_24705__$1;
(statearr_24710_24823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (5))){
var inst_24689 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24705__$1 = state_24705;
var statearr_24711_24824 = state_24705__$1;
(statearr_24711_24824[(2)] = inst_24689);

(statearr_24711_24824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (6))){
var inst_24686 = (state_24705[(7)]);
var inst_24691 = (state_24705[(8)]);
var inst_24691__$1 = cljs.core.async.chan.call(null,(1));
var inst_24692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24693 = [inst_24686,inst_24691__$1];
var inst_24694 = (new cljs.core.PersistentVector(null,2,(5),inst_24692,inst_24693,null));
var state_24705__$1 = (function (){var statearr_24712 = state_24705;
(statearr_24712[(8)] = inst_24691__$1);

return statearr_24712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24705__$1,(8),jobs,inst_24694);
} else {
if((state_val_24706 === (7))){
var inst_24701 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24713_24825 = state_24705__$1;
(statearr_24713_24825[(2)] = inst_24701);

(statearr_24713_24825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (8))){
var inst_24691 = (state_24705[(8)]);
var inst_24696 = (state_24705[(2)]);
var state_24705__$1 = (function (){var statearr_24714 = state_24705;
(statearr_24714[(9)] = inst_24696);

return statearr_24714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24705__$1,(9),results,inst_24691);
} else {
if((state_val_24706 === (9))){
var inst_24698 = (state_24705[(2)]);
var state_24705__$1 = (function (){var statearr_24715 = state_24705;
(statearr_24715[(10)] = inst_24698);

return statearr_24715;
})();
var statearr_24716_24826 = state_24705__$1;
(statearr_24716_24826[(2)] = null);

(statearr_24716_24826[(1)] = (2));


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
});})(c__24244__auto___24820,jobs,results,process,async))
;
return ((function (switch__24132__auto__,c__24244__auto___24820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0 = (function (){
var statearr_24720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__);

(statearr_24720[(1)] = (1));

return statearr_24720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1 = (function (state_24705){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_24705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e24721){if((e24721 instanceof Object)){
var ex__24136__auto__ = e24721;
var statearr_24722_24827 = state_24705;
(statearr_24722_24827[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24828 = state_24705;
state_24705 = G__24828;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = function(state_24705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1.call(this,state_24705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___24820,jobs,results,process,async))
})();
var state__24246__auto__ = (function (){var statearr_24723 = f__24245__auto__.call(null);
(statearr_24723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___24820);

return statearr_24723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___24820,jobs,results,process,async))
);


var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__,jobs,results,process,async){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__,jobs,results,process,async){
return (function (state_24761){
var state_val_24762 = (state_24761[(1)]);
if((state_val_24762 === (7))){
var inst_24757 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
var statearr_24763_24829 = state_24761__$1;
(statearr_24763_24829[(2)] = inst_24757);

(statearr_24763_24829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (20))){
var state_24761__$1 = state_24761;
var statearr_24764_24830 = state_24761__$1;
(statearr_24764_24830[(2)] = null);

(statearr_24764_24830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (1))){
var state_24761__$1 = state_24761;
var statearr_24765_24831 = state_24761__$1;
(statearr_24765_24831[(2)] = null);

(statearr_24765_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (4))){
var inst_24726 = (state_24761[(7)]);
var inst_24726__$1 = (state_24761[(2)]);
var inst_24727 = (inst_24726__$1 == null);
var state_24761__$1 = (function (){var statearr_24766 = state_24761;
(statearr_24766[(7)] = inst_24726__$1);

return statearr_24766;
})();
if(cljs.core.truth_(inst_24727)){
var statearr_24767_24832 = state_24761__$1;
(statearr_24767_24832[(1)] = (5));

} else {
var statearr_24768_24833 = state_24761__$1;
(statearr_24768_24833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (15))){
var inst_24739 = (state_24761[(8)]);
var state_24761__$1 = state_24761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24761__$1,(18),to,inst_24739);
} else {
if((state_val_24762 === (21))){
var inst_24752 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
var statearr_24769_24834 = state_24761__$1;
(statearr_24769_24834[(2)] = inst_24752);

(statearr_24769_24834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (13))){
var inst_24754 = (state_24761[(2)]);
var state_24761__$1 = (function (){var statearr_24770 = state_24761;
(statearr_24770[(9)] = inst_24754);

return statearr_24770;
})();
var statearr_24771_24835 = state_24761__$1;
(statearr_24771_24835[(2)] = null);

(statearr_24771_24835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (6))){
var inst_24726 = (state_24761[(7)]);
var state_24761__$1 = state_24761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24761__$1,(11),inst_24726);
} else {
if((state_val_24762 === (17))){
var inst_24747 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
if(cljs.core.truth_(inst_24747)){
var statearr_24772_24836 = state_24761__$1;
(statearr_24772_24836[(1)] = (19));

} else {
var statearr_24773_24837 = state_24761__$1;
(statearr_24773_24837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (3))){
var inst_24759 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24761__$1,inst_24759);
} else {
if((state_val_24762 === (12))){
var inst_24736 = (state_24761[(10)]);
var state_24761__$1 = state_24761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24761__$1,(14),inst_24736);
} else {
if((state_val_24762 === (2))){
var state_24761__$1 = state_24761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24761__$1,(4),results);
} else {
if((state_val_24762 === (19))){
var state_24761__$1 = state_24761;
var statearr_24774_24838 = state_24761__$1;
(statearr_24774_24838[(2)] = null);

(statearr_24774_24838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (11))){
var inst_24736 = (state_24761[(2)]);
var state_24761__$1 = (function (){var statearr_24775 = state_24761;
(statearr_24775[(10)] = inst_24736);

return statearr_24775;
})();
var statearr_24776_24839 = state_24761__$1;
(statearr_24776_24839[(2)] = null);

(statearr_24776_24839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (9))){
var state_24761__$1 = state_24761;
var statearr_24777_24840 = state_24761__$1;
(statearr_24777_24840[(2)] = null);

(statearr_24777_24840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (5))){
var state_24761__$1 = state_24761;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24778_24841 = state_24761__$1;
(statearr_24778_24841[(1)] = (8));

} else {
var statearr_24779_24842 = state_24761__$1;
(statearr_24779_24842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (14))){
var inst_24741 = (state_24761[(11)]);
var inst_24739 = (state_24761[(8)]);
var inst_24739__$1 = (state_24761[(2)]);
var inst_24740 = (inst_24739__$1 == null);
var inst_24741__$1 = cljs.core.not.call(null,inst_24740);
var state_24761__$1 = (function (){var statearr_24780 = state_24761;
(statearr_24780[(11)] = inst_24741__$1);

(statearr_24780[(8)] = inst_24739__$1);

return statearr_24780;
})();
if(inst_24741__$1){
var statearr_24781_24843 = state_24761__$1;
(statearr_24781_24843[(1)] = (15));

} else {
var statearr_24782_24844 = state_24761__$1;
(statearr_24782_24844[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (16))){
var inst_24741 = (state_24761[(11)]);
var state_24761__$1 = state_24761;
var statearr_24783_24845 = state_24761__$1;
(statearr_24783_24845[(2)] = inst_24741);

(statearr_24783_24845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (10))){
var inst_24733 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
var statearr_24784_24846 = state_24761__$1;
(statearr_24784_24846[(2)] = inst_24733);

(statearr_24784_24846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (18))){
var inst_24744 = (state_24761[(2)]);
var state_24761__$1 = state_24761;
var statearr_24785_24847 = state_24761__$1;
(statearr_24785_24847[(2)] = inst_24744);

(statearr_24785_24847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24762 === (8))){
var inst_24730 = cljs.core.async.close_BANG_.call(null,to);
var state_24761__$1 = state_24761;
var statearr_24786_24848 = state_24761__$1;
(statearr_24786_24848[(2)] = inst_24730);

(statearr_24786_24848[(1)] = (10));


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
}
}
}
}
});})(c__24244__auto__,jobs,results,process,async))
;
return ((function (switch__24132__auto__,c__24244__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0 = (function (){
var statearr_24790 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__);

(statearr_24790[(1)] = (1));

return statearr_24790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1 = (function (state_24761){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_24761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e24791){if((e24791 instanceof Object)){
var ex__24136__auto__ = e24791;
var statearr_24792_24849 = state_24761;
(statearr_24792_24849[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24850 = state_24761;
state_24761 = G__24850;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__ = function(state_24761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1.call(this,state_24761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__,jobs,results,process,async))
})();
var state__24246__auto__ = (function (){var statearr_24793 = f__24245__auto__.call(null);
(statearr_24793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_24793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__,jobs,results,process,async))
);

return c__24244__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24851 = [];
var len__22073__auto___24854 = arguments.length;
var i__22074__auto___24855 = (0);
while(true){
if((i__22074__auto___24855 < len__22073__auto___24854)){
args24851.push((arguments[i__22074__auto___24855]));

var G__24856 = (i__22074__auto___24855 + (1));
i__22074__auto___24855 = G__24856;
continue;
} else {
}
break;
}

var G__24853 = args24851.length;
switch (G__24853) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24851.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24858 = [];
var len__22073__auto___24861 = arguments.length;
var i__22074__auto___24862 = (0);
while(true){
if((i__22074__auto___24862 < len__22073__auto___24861)){
args24858.push((arguments[i__22074__auto___24862]));

var G__24863 = (i__22074__auto___24862 + (1));
i__22074__auto___24862 = G__24863;
continue;
} else {
}
break;
}

var G__24860 = args24858.length;
switch (G__24860) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24858.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24865 = [];
var len__22073__auto___24918 = arguments.length;
var i__22074__auto___24919 = (0);
while(true){
if((i__22074__auto___24919 < len__22073__auto___24918)){
args24865.push((arguments[i__22074__auto___24919]));

var G__24920 = (i__22074__auto___24919 + (1));
i__22074__auto___24919 = G__24920;
continue;
} else {
}
break;
}

var G__24867 = args24865.length;
switch (G__24867) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24865.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24244__auto___24922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___24922,tc,fc){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___24922,tc,fc){
return (function (state_24893){
var state_val_24894 = (state_24893[(1)]);
if((state_val_24894 === (7))){
var inst_24889 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24895_24923 = state_24893__$1;
(statearr_24895_24923[(2)] = inst_24889);

(statearr_24895_24923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (1))){
var state_24893__$1 = state_24893;
var statearr_24896_24924 = state_24893__$1;
(statearr_24896_24924[(2)] = null);

(statearr_24896_24924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (4))){
var inst_24870 = (state_24893[(7)]);
var inst_24870__$1 = (state_24893[(2)]);
var inst_24871 = (inst_24870__$1 == null);
var state_24893__$1 = (function (){var statearr_24897 = state_24893;
(statearr_24897[(7)] = inst_24870__$1);

return statearr_24897;
})();
if(cljs.core.truth_(inst_24871)){
var statearr_24898_24925 = state_24893__$1;
(statearr_24898_24925[(1)] = (5));

} else {
var statearr_24899_24926 = state_24893__$1;
(statearr_24899_24926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (13))){
var state_24893__$1 = state_24893;
var statearr_24900_24927 = state_24893__$1;
(statearr_24900_24927[(2)] = null);

(statearr_24900_24927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (6))){
var inst_24870 = (state_24893[(7)]);
var inst_24876 = p.call(null,inst_24870);
var state_24893__$1 = state_24893;
if(cljs.core.truth_(inst_24876)){
var statearr_24901_24928 = state_24893__$1;
(statearr_24901_24928[(1)] = (9));

} else {
var statearr_24902_24929 = state_24893__$1;
(statearr_24902_24929[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (3))){
var inst_24891 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24893__$1,inst_24891);
} else {
if((state_val_24894 === (12))){
var state_24893__$1 = state_24893;
var statearr_24903_24930 = state_24893__$1;
(statearr_24903_24930[(2)] = null);

(statearr_24903_24930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (2))){
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24893__$1,(4),ch);
} else {
if((state_val_24894 === (11))){
var inst_24870 = (state_24893[(7)]);
var inst_24880 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24893__$1,(8),inst_24880,inst_24870);
} else {
if((state_val_24894 === (9))){
var state_24893__$1 = state_24893;
var statearr_24904_24931 = state_24893__$1;
(statearr_24904_24931[(2)] = tc);

(statearr_24904_24931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (5))){
var inst_24873 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24874 = cljs.core.async.close_BANG_.call(null,fc);
var state_24893__$1 = (function (){var statearr_24905 = state_24893;
(statearr_24905[(8)] = inst_24873);

return statearr_24905;
})();
var statearr_24906_24932 = state_24893__$1;
(statearr_24906_24932[(2)] = inst_24874);

(statearr_24906_24932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (14))){
var inst_24887 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
var statearr_24907_24933 = state_24893__$1;
(statearr_24907_24933[(2)] = inst_24887);

(statearr_24907_24933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (10))){
var state_24893__$1 = state_24893;
var statearr_24908_24934 = state_24893__$1;
(statearr_24908_24934[(2)] = fc);

(statearr_24908_24934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24894 === (8))){
var inst_24882 = (state_24893[(2)]);
var state_24893__$1 = state_24893;
if(cljs.core.truth_(inst_24882)){
var statearr_24909_24935 = state_24893__$1;
(statearr_24909_24935[(1)] = (12));

} else {
var statearr_24910_24936 = state_24893__$1;
(statearr_24910_24936[(1)] = (13));

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
});})(c__24244__auto___24922,tc,fc))
;
return ((function (switch__24132__auto__,c__24244__auto___24922,tc,fc){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_24914 = [null,null,null,null,null,null,null,null,null];
(statearr_24914[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_24914[(1)] = (1));

return statearr_24914;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_24893){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_24893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e24915){if((e24915 instanceof Object)){
var ex__24136__auto__ = e24915;
var statearr_24916_24937 = state_24893;
(statearr_24916_24937[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24938 = state_24893;
state_24893 = G__24938;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_24893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_24893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___24922,tc,fc))
})();
var state__24246__auto__ = (function (){var statearr_24917 = f__24245__auto__.call(null);
(statearr_24917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___24922);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___24922,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__){
return (function (state_25002){
var state_val_25003 = (state_25002[(1)]);
if((state_val_25003 === (7))){
var inst_24998 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
var statearr_25004_25025 = state_25002__$1;
(statearr_25004_25025[(2)] = inst_24998);

(statearr_25004_25025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (1))){
var inst_24982 = init;
var state_25002__$1 = (function (){var statearr_25005 = state_25002;
(statearr_25005[(7)] = inst_24982);

return statearr_25005;
})();
var statearr_25006_25026 = state_25002__$1;
(statearr_25006_25026[(2)] = null);

(statearr_25006_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (4))){
var inst_24985 = (state_25002[(8)]);
var inst_24985__$1 = (state_25002[(2)]);
var inst_24986 = (inst_24985__$1 == null);
var state_25002__$1 = (function (){var statearr_25007 = state_25002;
(statearr_25007[(8)] = inst_24985__$1);

return statearr_25007;
})();
if(cljs.core.truth_(inst_24986)){
var statearr_25008_25027 = state_25002__$1;
(statearr_25008_25027[(1)] = (5));

} else {
var statearr_25009_25028 = state_25002__$1;
(statearr_25009_25028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (6))){
var inst_24982 = (state_25002[(7)]);
var inst_24989 = (state_25002[(9)]);
var inst_24985 = (state_25002[(8)]);
var inst_24989__$1 = f.call(null,inst_24982,inst_24985);
var inst_24990 = cljs.core.reduced_QMARK_.call(null,inst_24989__$1);
var state_25002__$1 = (function (){var statearr_25010 = state_25002;
(statearr_25010[(9)] = inst_24989__$1);

return statearr_25010;
})();
if(inst_24990){
var statearr_25011_25029 = state_25002__$1;
(statearr_25011_25029[(1)] = (8));

} else {
var statearr_25012_25030 = state_25002__$1;
(statearr_25012_25030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (3))){
var inst_25000 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25002__$1,inst_25000);
} else {
if((state_val_25003 === (2))){
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25002__$1,(4),ch);
} else {
if((state_val_25003 === (9))){
var inst_24989 = (state_25002[(9)]);
var inst_24982 = inst_24989;
var state_25002__$1 = (function (){var statearr_25013 = state_25002;
(statearr_25013[(7)] = inst_24982);

return statearr_25013;
})();
var statearr_25014_25031 = state_25002__$1;
(statearr_25014_25031[(2)] = null);

(statearr_25014_25031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (5))){
var inst_24982 = (state_25002[(7)]);
var state_25002__$1 = state_25002;
var statearr_25015_25032 = state_25002__$1;
(statearr_25015_25032[(2)] = inst_24982);

(statearr_25015_25032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (10))){
var inst_24996 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
var statearr_25016_25033 = state_25002__$1;
(statearr_25016_25033[(2)] = inst_24996);

(statearr_25016_25033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (8))){
var inst_24989 = (state_25002[(9)]);
var inst_24992 = cljs.core.deref.call(null,inst_24989);
var state_25002__$1 = state_25002;
var statearr_25017_25034 = state_25002__$1;
(statearr_25017_25034[(2)] = inst_24992);

(statearr_25017_25034[(1)] = (10));


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
});})(c__24244__auto__))
;
return ((function (switch__24132__auto__,c__24244__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24133__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24133__auto____0 = (function (){
var statearr_25021 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25021[(0)] = cljs$core$async$reduce_$_state_machine__24133__auto__);

(statearr_25021[(1)] = (1));

return statearr_25021;
});
var cljs$core$async$reduce_$_state_machine__24133__auto____1 = (function (state_25002){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_25002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e25022){if((e25022 instanceof Object)){
var ex__24136__auto__ = e25022;
var statearr_25023_25035 = state_25002;
(statearr_25023_25035[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25036 = state_25002;
state_25002 = G__25036;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24133__auto__ = function(state_25002){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24133__auto____1.call(this,state_25002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24133__auto____0;
cljs$core$async$reduce_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24133__auto____1;
return cljs$core$async$reduce_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__))
})();
var state__24246__auto__ = (function (){var statearr_25024 = f__24245__auto__.call(null);
(statearr_25024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_25024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__))
);

return c__24244__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25037 = [];
var len__22073__auto___25089 = arguments.length;
var i__22074__auto___25090 = (0);
while(true){
if((i__22074__auto___25090 < len__22073__auto___25089)){
args25037.push((arguments[i__22074__auto___25090]));

var G__25091 = (i__22074__auto___25090 + (1));
i__22074__auto___25090 = G__25091;
continue;
} else {
}
break;
}

var G__25039 = args25037.length;
switch (G__25039) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25037.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__){
return (function (state_25064){
var state_val_25065 = (state_25064[(1)]);
if((state_val_25065 === (7))){
var inst_25046 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
var statearr_25066_25093 = state_25064__$1;
(statearr_25066_25093[(2)] = inst_25046);

(statearr_25066_25093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (1))){
var inst_25040 = cljs.core.seq.call(null,coll);
var inst_25041 = inst_25040;
var state_25064__$1 = (function (){var statearr_25067 = state_25064;
(statearr_25067[(7)] = inst_25041);

return statearr_25067;
})();
var statearr_25068_25094 = state_25064__$1;
(statearr_25068_25094[(2)] = null);

(statearr_25068_25094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (4))){
var inst_25041 = (state_25064[(7)]);
var inst_25044 = cljs.core.first.call(null,inst_25041);
var state_25064__$1 = state_25064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25064__$1,(7),ch,inst_25044);
} else {
if((state_val_25065 === (13))){
var inst_25058 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
var statearr_25069_25095 = state_25064__$1;
(statearr_25069_25095[(2)] = inst_25058);

(statearr_25069_25095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (6))){
var inst_25049 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
if(cljs.core.truth_(inst_25049)){
var statearr_25070_25096 = state_25064__$1;
(statearr_25070_25096[(1)] = (8));

} else {
var statearr_25071_25097 = state_25064__$1;
(statearr_25071_25097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (3))){
var inst_25062 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25064__$1,inst_25062);
} else {
if((state_val_25065 === (12))){
var state_25064__$1 = state_25064;
var statearr_25072_25098 = state_25064__$1;
(statearr_25072_25098[(2)] = null);

(statearr_25072_25098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (2))){
var inst_25041 = (state_25064[(7)]);
var state_25064__$1 = state_25064;
if(cljs.core.truth_(inst_25041)){
var statearr_25073_25099 = state_25064__$1;
(statearr_25073_25099[(1)] = (4));

} else {
var statearr_25074_25100 = state_25064__$1;
(statearr_25074_25100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (11))){
var inst_25055 = cljs.core.async.close_BANG_.call(null,ch);
var state_25064__$1 = state_25064;
var statearr_25075_25101 = state_25064__$1;
(statearr_25075_25101[(2)] = inst_25055);

(statearr_25075_25101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (9))){
var state_25064__$1 = state_25064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25076_25102 = state_25064__$1;
(statearr_25076_25102[(1)] = (11));

} else {
var statearr_25077_25103 = state_25064__$1;
(statearr_25077_25103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (5))){
var inst_25041 = (state_25064[(7)]);
var state_25064__$1 = state_25064;
var statearr_25078_25104 = state_25064__$1;
(statearr_25078_25104[(2)] = inst_25041);

(statearr_25078_25104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (10))){
var inst_25060 = (state_25064[(2)]);
var state_25064__$1 = state_25064;
var statearr_25079_25105 = state_25064__$1;
(statearr_25079_25105[(2)] = inst_25060);

(statearr_25079_25105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25065 === (8))){
var inst_25041 = (state_25064[(7)]);
var inst_25051 = cljs.core.next.call(null,inst_25041);
var inst_25041__$1 = inst_25051;
var state_25064__$1 = (function (){var statearr_25080 = state_25064;
(statearr_25080[(7)] = inst_25041__$1);

return statearr_25080;
})();
var statearr_25081_25106 = state_25064__$1;
(statearr_25081_25106[(2)] = null);

(statearr_25081_25106[(1)] = (2));


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
});})(c__24244__auto__))
;
return ((function (switch__24132__auto__,c__24244__auto__){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_25085 = [null,null,null,null,null,null,null,null];
(statearr_25085[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_25085[(1)] = (1));

return statearr_25085;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_25064){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_25064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e25086){if((e25086 instanceof Object)){
var ex__24136__auto__ = e25086;
var statearr_25087_25107 = state_25064;
(statearr_25087_25107[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25108 = state_25064;
state_25064 = G__25108;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_25064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_25064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__))
})();
var state__24246__auto__ = (function (){var statearr_25088 = f__24245__auto__.call(null);
(statearr_25088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_25088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__))
);

return c__24244__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21670__auto__ = (((_ == null))?null:_);
var m__21671__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,_);
} else {
var m__21671__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21671__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m,ch);
} else {
var m__21671__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m);
} else {
var m__21671__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25330 = (function (mult,ch,cs,meta25331){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25331 = meta25331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25332,meta25331__$1){
var self__ = this;
var _25332__$1 = this;
return (new cljs.core.async.t_cljs$core$async25330(self__.mult,self__.ch,self__.cs,meta25331__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25332){
var self__ = this;
var _25332__$1 = this;
return self__.meta25331;
});})(cs))
;

cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25330.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25330.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25331","meta25331",-1325284601,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25330";

cljs.core.async.t_cljs$core$async25330.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async25330");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25330 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25330(mult__$1,ch__$1,cs__$1,meta25331){
return (new cljs.core.async.t_cljs$core$async25330(mult__$1,ch__$1,cs__$1,meta25331));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25330(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24244__auto___25551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___25551,cs,m,dchan,dctr,done){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___25551,cs,m,dchan,dctr,done){
return (function (state_25463){
var state_val_25464 = (state_25463[(1)]);
if((state_val_25464 === (7))){
var inst_25459 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25465_25552 = state_25463__$1;
(statearr_25465_25552[(2)] = inst_25459);

(statearr_25465_25552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (20))){
var inst_25364 = (state_25463[(7)]);
var inst_25374 = cljs.core.first.call(null,inst_25364);
var inst_25375 = cljs.core.nth.call(null,inst_25374,(0),null);
var inst_25376 = cljs.core.nth.call(null,inst_25374,(1),null);
var state_25463__$1 = (function (){var statearr_25466 = state_25463;
(statearr_25466[(8)] = inst_25375);

return statearr_25466;
})();
if(cljs.core.truth_(inst_25376)){
var statearr_25467_25553 = state_25463__$1;
(statearr_25467_25553[(1)] = (22));

} else {
var statearr_25468_25554 = state_25463__$1;
(statearr_25468_25554[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (27))){
var inst_25411 = (state_25463[(9)]);
var inst_25406 = (state_25463[(10)]);
var inst_25404 = (state_25463[(11)]);
var inst_25335 = (state_25463[(12)]);
var inst_25411__$1 = cljs.core._nth.call(null,inst_25404,inst_25406);
var inst_25412 = cljs.core.async.put_BANG_.call(null,inst_25411__$1,inst_25335,done);
var state_25463__$1 = (function (){var statearr_25469 = state_25463;
(statearr_25469[(9)] = inst_25411__$1);

return statearr_25469;
})();
if(cljs.core.truth_(inst_25412)){
var statearr_25470_25555 = state_25463__$1;
(statearr_25470_25555[(1)] = (30));

} else {
var statearr_25471_25556 = state_25463__$1;
(statearr_25471_25556[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (1))){
var state_25463__$1 = state_25463;
var statearr_25472_25557 = state_25463__$1;
(statearr_25472_25557[(2)] = null);

(statearr_25472_25557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (24))){
var inst_25364 = (state_25463[(7)]);
var inst_25381 = (state_25463[(2)]);
var inst_25382 = cljs.core.next.call(null,inst_25364);
var inst_25344 = inst_25382;
var inst_25345 = null;
var inst_25346 = (0);
var inst_25347 = (0);
var state_25463__$1 = (function (){var statearr_25473 = state_25463;
(statearr_25473[(13)] = inst_25344);

(statearr_25473[(14)] = inst_25345);

(statearr_25473[(15)] = inst_25347);

(statearr_25473[(16)] = inst_25381);

(statearr_25473[(17)] = inst_25346);

return statearr_25473;
})();
var statearr_25474_25558 = state_25463__$1;
(statearr_25474_25558[(2)] = null);

(statearr_25474_25558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (39))){
var state_25463__$1 = state_25463;
var statearr_25478_25559 = state_25463__$1;
(statearr_25478_25559[(2)] = null);

(statearr_25478_25559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (4))){
var inst_25335 = (state_25463[(12)]);
var inst_25335__$1 = (state_25463[(2)]);
var inst_25336 = (inst_25335__$1 == null);
var state_25463__$1 = (function (){var statearr_25479 = state_25463;
(statearr_25479[(12)] = inst_25335__$1);

return statearr_25479;
})();
if(cljs.core.truth_(inst_25336)){
var statearr_25480_25560 = state_25463__$1;
(statearr_25480_25560[(1)] = (5));

} else {
var statearr_25481_25561 = state_25463__$1;
(statearr_25481_25561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (15))){
var inst_25344 = (state_25463[(13)]);
var inst_25345 = (state_25463[(14)]);
var inst_25347 = (state_25463[(15)]);
var inst_25346 = (state_25463[(17)]);
var inst_25360 = (state_25463[(2)]);
var inst_25361 = (inst_25347 + (1));
var tmp25475 = inst_25344;
var tmp25476 = inst_25345;
var tmp25477 = inst_25346;
var inst_25344__$1 = tmp25475;
var inst_25345__$1 = tmp25476;
var inst_25346__$1 = tmp25477;
var inst_25347__$1 = inst_25361;
var state_25463__$1 = (function (){var statearr_25482 = state_25463;
(statearr_25482[(18)] = inst_25360);

(statearr_25482[(13)] = inst_25344__$1);

(statearr_25482[(14)] = inst_25345__$1);

(statearr_25482[(15)] = inst_25347__$1);

(statearr_25482[(17)] = inst_25346__$1);

return statearr_25482;
})();
var statearr_25483_25562 = state_25463__$1;
(statearr_25483_25562[(2)] = null);

(statearr_25483_25562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (21))){
var inst_25385 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25487_25563 = state_25463__$1;
(statearr_25487_25563[(2)] = inst_25385);

(statearr_25487_25563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (31))){
var inst_25411 = (state_25463[(9)]);
var inst_25415 = done.call(null,null);
var inst_25416 = cljs.core.async.untap_STAR_.call(null,m,inst_25411);
var state_25463__$1 = (function (){var statearr_25488 = state_25463;
(statearr_25488[(19)] = inst_25415);

return statearr_25488;
})();
var statearr_25489_25564 = state_25463__$1;
(statearr_25489_25564[(2)] = inst_25416);

(statearr_25489_25564[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (32))){
var inst_25405 = (state_25463[(20)]);
var inst_25406 = (state_25463[(10)]);
var inst_25404 = (state_25463[(11)]);
var inst_25403 = (state_25463[(21)]);
var inst_25418 = (state_25463[(2)]);
var inst_25419 = (inst_25406 + (1));
var tmp25484 = inst_25405;
var tmp25485 = inst_25404;
var tmp25486 = inst_25403;
var inst_25403__$1 = tmp25486;
var inst_25404__$1 = tmp25485;
var inst_25405__$1 = tmp25484;
var inst_25406__$1 = inst_25419;
var state_25463__$1 = (function (){var statearr_25490 = state_25463;
(statearr_25490[(20)] = inst_25405__$1);

(statearr_25490[(10)] = inst_25406__$1);

(statearr_25490[(22)] = inst_25418);

(statearr_25490[(11)] = inst_25404__$1);

(statearr_25490[(21)] = inst_25403__$1);

return statearr_25490;
})();
var statearr_25491_25565 = state_25463__$1;
(statearr_25491_25565[(2)] = null);

(statearr_25491_25565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (40))){
var inst_25431 = (state_25463[(23)]);
var inst_25435 = done.call(null,null);
var inst_25436 = cljs.core.async.untap_STAR_.call(null,m,inst_25431);
var state_25463__$1 = (function (){var statearr_25492 = state_25463;
(statearr_25492[(24)] = inst_25435);

return statearr_25492;
})();
var statearr_25493_25566 = state_25463__$1;
(statearr_25493_25566[(2)] = inst_25436);

(statearr_25493_25566[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (33))){
var inst_25422 = (state_25463[(25)]);
var inst_25424 = cljs.core.chunked_seq_QMARK_.call(null,inst_25422);
var state_25463__$1 = state_25463;
if(inst_25424){
var statearr_25494_25567 = state_25463__$1;
(statearr_25494_25567[(1)] = (36));

} else {
var statearr_25495_25568 = state_25463__$1;
(statearr_25495_25568[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (13))){
var inst_25354 = (state_25463[(26)]);
var inst_25357 = cljs.core.async.close_BANG_.call(null,inst_25354);
var state_25463__$1 = state_25463;
var statearr_25496_25569 = state_25463__$1;
(statearr_25496_25569[(2)] = inst_25357);

(statearr_25496_25569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (22))){
var inst_25375 = (state_25463[(8)]);
var inst_25378 = cljs.core.async.close_BANG_.call(null,inst_25375);
var state_25463__$1 = state_25463;
var statearr_25497_25570 = state_25463__$1;
(statearr_25497_25570[(2)] = inst_25378);

(statearr_25497_25570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (36))){
var inst_25422 = (state_25463[(25)]);
var inst_25426 = cljs.core.chunk_first.call(null,inst_25422);
var inst_25427 = cljs.core.chunk_rest.call(null,inst_25422);
var inst_25428 = cljs.core.count.call(null,inst_25426);
var inst_25403 = inst_25427;
var inst_25404 = inst_25426;
var inst_25405 = inst_25428;
var inst_25406 = (0);
var state_25463__$1 = (function (){var statearr_25498 = state_25463;
(statearr_25498[(20)] = inst_25405);

(statearr_25498[(10)] = inst_25406);

(statearr_25498[(11)] = inst_25404);

(statearr_25498[(21)] = inst_25403);

return statearr_25498;
})();
var statearr_25499_25571 = state_25463__$1;
(statearr_25499_25571[(2)] = null);

(statearr_25499_25571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (41))){
var inst_25422 = (state_25463[(25)]);
var inst_25438 = (state_25463[(2)]);
var inst_25439 = cljs.core.next.call(null,inst_25422);
var inst_25403 = inst_25439;
var inst_25404 = null;
var inst_25405 = (0);
var inst_25406 = (0);
var state_25463__$1 = (function (){var statearr_25500 = state_25463;
(statearr_25500[(20)] = inst_25405);

(statearr_25500[(10)] = inst_25406);

(statearr_25500[(11)] = inst_25404);

(statearr_25500[(27)] = inst_25438);

(statearr_25500[(21)] = inst_25403);

return statearr_25500;
})();
var statearr_25501_25572 = state_25463__$1;
(statearr_25501_25572[(2)] = null);

(statearr_25501_25572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (43))){
var state_25463__$1 = state_25463;
var statearr_25502_25573 = state_25463__$1;
(statearr_25502_25573[(2)] = null);

(statearr_25502_25573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (29))){
var inst_25447 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25503_25574 = state_25463__$1;
(statearr_25503_25574[(2)] = inst_25447);

(statearr_25503_25574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (44))){
var inst_25456 = (state_25463[(2)]);
var state_25463__$1 = (function (){var statearr_25504 = state_25463;
(statearr_25504[(28)] = inst_25456);

return statearr_25504;
})();
var statearr_25505_25575 = state_25463__$1;
(statearr_25505_25575[(2)] = null);

(statearr_25505_25575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (6))){
var inst_25395 = (state_25463[(29)]);
var inst_25394 = cljs.core.deref.call(null,cs);
var inst_25395__$1 = cljs.core.keys.call(null,inst_25394);
var inst_25396 = cljs.core.count.call(null,inst_25395__$1);
var inst_25397 = cljs.core.reset_BANG_.call(null,dctr,inst_25396);
var inst_25402 = cljs.core.seq.call(null,inst_25395__$1);
var inst_25403 = inst_25402;
var inst_25404 = null;
var inst_25405 = (0);
var inst_25406 = (0);
var state_25463__$1 = (function (){var statearr_25506 = state_25463;
(statearr_25506[(20)] = inst_25405);

(statearr_25506[(10)] = inst_25406);

(statearr_25506[(11)] = inst_25404);

(statearr_25506[(30)] = inst_25397);

(statearr_25506[(29)] = inst_25395__$1);

(statearr_25506[(21)] = inst_25403);

return statearr_25506;
})();
var statearr_25507_25576 = state_25463__$1;
(statearr_25507_25576[(2)] = null);

(statearr_25507_25576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (28))){
var inst_25422 = (state_25463[(25)]);
var inst_25403 = (state_25463[(21)]);
var inst_25422__$1 = cljs.core.seq.call(null,inst_25403);
var state_25463__$1 = (function (){var statearr_25508 = state_25463;
(statearr_25508[(25)] = inst_25422__$1);

return statearr_25508;
})();
if(inst_25422__$1){
var statearr_25509_25577 = state_25463__$1;
(statearr_25509_25577[(1)] = (33));

} else {
var statearr_25510_25578 = state_25463__$1;
(statearr_25510_25578[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (25))){
var inst_25405 = (state_25463[(20)]);
var inst_25406 = (state_25463[(10)]);
var inst_25408 = (inst_25406 < inst_25405);
var inst_25409 = inst_25408;
var state_25463__$1 = state_25463;
if(cljs.core.truth_(inst_25409)){
var statearr_25511_25579 = state_25463__$1;
(statearr_25511_25579[(1)] = (27));

} else {
var statearr_25512_25580 = state_25463__$1;
(statearr_25512_25580[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (34))){
var state_25463__$1 = state_25463;
var statearr_25513_25581 = state_25463__$1;
(statearr_25513_25581[(2)] = null);

(statearr_25513_25581[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (17))){
var state_25463__$1 = state_25463;
var statearr_25514_25582 = state_25463__$1;
(statearr_25514_25582[(2)] = null);

(statearr_25514_25582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (3))){
var inst_25461 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25463__$1,inst_25461);
} else {
if((state_val_25464 === (12))){
var inst_25390 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25515_25583 = state_25463__$1;
(statearr_25515_25583[(2)] = inst_25390);

(statearr_25515_25583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (2))){
var state_25463__$1 = state_25463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25463__$1,(4),ch);
} else {
if((state_val_25464 === (23))){
var state_25463__$1 = state_25463;
var statearr_25516_25584 = state_25463__$1;
(statearr_25516_25584[(2)] = null);

(statearr_25516_25584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (35))){
var inst_25445 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25517_25585 = state_25463__$1;
(statearr_25517_25585[(2)] = inst_25445);

(statearr_25517_25585[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (19))){
var inst_25364 = (state_25463[(7)]);
var inst_25368 = cljs.core.chunk_first.call(null,inst_25364);
var inst_25369 = cljs.core.chunk_rest.call(null,inst_25364);
var inst_25370 = cljs.core.count.call(null,inst_25368);
var inst_25344 = inst_25369;
var inst_25345 = inst_25368;
var inst_25346 = inst_25370;
var inst_25347 = (0);
var state_25463__$1 = (function (){var statearr_25518 = state_25463;
(statearr_25518[(13)] = inst_25344);

(statearr_25518[(14)] = inst_25345);

(statearr_25518[(15)] = inst_25347);

(statearr_25518[(17)] = inst_25346);

return statearr_25518;
})();
var statearr_25519_25586 = state_25463__$1;
(statearr_25519_25586[(2)] = null);

(statearr_25519_25586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (11))){
var inst_25364 = (state_25463[(7)]);
var inst_25344 = (state_25463[(13)]);
var inst_25364__$1 = cljs.core.seq.call(null,inst_25344);
var state_25463__$1 = (function (){var statearr_25520 = state_25463;
(statearr_25520[(7)] = inst_25364__$1);

return statearr_25520;
})();
if(inst_25364__$1){
var statearr_25521_25587 = state_25463__$1;
(statearr_25521_25587[(1)] = (16));

} else {
var statearr_25522_25588 = state_25463__$1;
(statearr_25522_25588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (9))){
var inst_25392 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25523_25589 = state_25463__$1;
(statearr_25523_25589[(2)] = inst_25392);

(statearr_25523_25589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (5))){
var inst_25342 = cljs.core.deref.call(null,cs);
var inst_25343 = cljs.core.seq.call(null,inst_25342);
var inst_25344 = inst_25343;
var inst_25345 = null;
var inst_25346 = (0);
var inst_25347 = (0);
var state_25463__$1 = (function (){var statearr_25524 = state_25463;
(statearr_25524[(13)] = inst_25344);

(statearr_25524[(14)] = inst_25345);

(statearr_25524[(15)] = inst_25347);

(statearr_25524[(17)] = inst_25346);

return statearr_25524;
})();
var statearr_25525_25590 = state_25463__$1;
(statearr_25525_25590[(2)] = null);

(statearr_25525_25590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (14))){
var state_25463__$1 = state_25463;
var statearr_25526_25591 = state_25463__$1;
(statearr_25526_25591[(2)] = null);

(statearr_25526_25591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (45))){
var inst_25453 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25527_25592 = state_25463__$1;
(statearr_25527_25592[(2)] = inst_25453);

(statearr_25527_25592[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (26))){
var inst_25395 = (state_25463[(29)]);
var inst_25449 = (state_25463[(2)]);
var inst_25450 = cljs.core.seq.call(null,inst_25395);
var state_25463__$1 = (function (){var statearr_25528 = state_25463;
(statearr_25528[(31)] = inst_25449);

return statearr_25528;
})();
if(inst_25450){
var statearr_25529_25593 = state_25463__$1;
(statearr_25529_25593[(1)] = (42));

} else {
var statearr_25530_25594 = state_25463__$1;
(statearr_25530_25594[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (16))){
var inst_25364 = (state_25463[(7)]);
var inst_25366 = cljs.core.chunked_seq_QMARK_.call(null,inst_25364);
var state_25463__$1 = state_25463;
if(inst_25366){
var statearr_25531_25595 = state_25463__$1;
(statearr_25531_25595[(1)] = (19));

} else {
var statearr_25532_25596 = state_25463__$1;
(statearr_25532_25596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (38))){
var inst_25442 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25533_25597 = state_25463__$1;
(statearr_25533_25597[(2)] = inst_25442);

(statearr_25533_25597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (30))){
var state_25463__$1 = state_25463;
var statearr_25534_25598 = state_25463__$1;
(statearr_25534_25598[(2)] = null);

(statearr_25534_25598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (10))){
var inst_25345 = (state_25463[(14)]);
var inst_25347 = (state_25463[(15)]);
var inst_25353 = cljs.core._nth.call(null,inst_25345,inst_25347);
var inst_25354 = cljs.core.nth.call(null,inst_25353,(0),null);
var inst_25355 = cljs.core.nth.call(null,inst_25353,(1),null);
var state_25463__$1 = (function (){var statearr_25535 = state_25463;
(statearr_25535[(26)] = inst_25354);

return statearr_25535;
})();
if(cljs.core.truth_(inst_25355)){
var statearr_25536_25599 = state_25463__$1;
(statearr_25536_25599[(1)] = (13));

} else {
var statearr_25537_25600 = state_25463__$1;
(statearr_25537_25600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (18))){
var inst_25388 = (state_25463[(2)]);
var state_25463__$1 = state_25463;
var statearr_25538_25601 = state_25463__$1;
(statearr_25538_25601[(2)] = inst_25388);

(statearr_25538_25601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (42))){
var state_25463__$1 = state_25463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25463__$1,(45),dchan);
} else {
if((state_val_25464 === (37))){
var inst_25422 = (state_25463[(25)]);
var inst_25431 = (state_25463[(23)]);
var inst_25335 = (state_25463[(12)]);
var inst_25431__$1 = cljs.core.first.call(null,inst_25422);
var inst_25432 = cljs.core.async.put_BANG_.call(null,inst_25431__$1,inst_25335,done);
var state_25463__$1 = (function (){var statearr_25539 = state_25463;
(statearr_25539[(23)] = inst_25431__$1);

return statearr_25539;
})();
if(cljs.core.truth_(inst_25432)){
var statearr_25540_25602 = state_25463__$1;
(statearr_25540_25602[(1)] = (39));

} else {
var statearr_25541_25603 = state_25463__$1;
(statearr_25541_25603[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25464 === (8))){
var inst_25347 = (state_25463[(15)]);
var inst_25346 = (state_25463[(17)]);
var inst_25349 = (inst_25347 < inst_25346);
var inst_25350 = inst_25349;
var state_25463__$1 = state_25463;
if(cljs.core.truth_(inst_25350)){
var statearr_25542_25604 = state_25463__$1;
(statearr_25542_25604[(1)] = (10));

} else {
var statearr_25543_25605 = state_25463__$1;
(statearr_25543_25605[(1)] = (11));

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
});})(c__24244__auto___25551,cs,m,dchan,dctr,done))
;
return ((function (switch__24132__auto__,c__24244__auto___25551,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24133__auto__ = null;
var cljs$core$async$mult_$_state_machine__24133__auto____0 = (function (){
var statearr_25547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25547[(0)] = cljs$core$async$mult_$_state_machine__24133__auto__);

(statearr_25547[(1)] = (1));

return statearr_25547;
});
var cljs$core$async$mult_$_state_machine__24133__auto____1 = (function (state_25463){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_25463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e25548){if((e25548 instanceof Object)){
var ex__24136__auto__ = e25548;
var statearr_25549_25606 = state_25463;
(statearr_25549_25606[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25607 = state_25463;
state_25463 = G__25607;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24133__auto__ = function(state_25463){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24133__auto____1.call(this,state_25463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24133__auto____0;
cljs$core$async$mult_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24133__auto____1;
return cljs$core$async$mult_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___25551,cs,m,dchan,dctr,done))
})();
var state__24246__auto__ = (function (){var statearr_25550 = f__24245__auto__.call(null);
(statearr_25550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___25551);

return statearr_25550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___25551,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25608 = [];
var len__22073__auto___25611 = arguments.length;
var i__22074__auto___25612 = (0);
while(true){
if((i__22074__auto___25612 < len__22073__auto___25611)){
args25608.push((arguments[i__22074__auto___25612]));

var G__25613 = (i__22074__auto___25612 + (1));
i__22074__auto___25612 = G__25613;
continue;
} else {
}
break;
}

var G__25610 = args25608.length;
switch (G__25610) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25608.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m,ch);
} else {
var m__21671__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m,ch);
} else {
var m__21671__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m);
} else {
var m__21671__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m,state_map);
} else {
var m__21671__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21670__auto__ = (((m == null))?null:m);
var m__21671__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,m,mode);
} else {
var m__21671__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22080__auto__ = [];
var len__22073__auto___25625 = arguments.length;
var i__22074__auto___25626 = (0);
while(true){
if((i__22074__auto___25626 < len__22073__auto___25625)){
args__22080__auto__.push((arguments[i__22074__auto___25626]));

var G__25627 = (i__22074__auto___25626 + (1));
i__22074__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var argseq__22081__auto__ = ((((3) < args__22080__auto__.length))?(new cljs.core.IndexedSeq(args__22080__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22081__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25619){
var map__25620 = p__25619;
var map__25620__$1 = ((((!((map__25620 == null)))?((((map__25620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25620):map__25620);
var opts = map__25620__$1;
var statearr_25622_25628 = state;
(statearr_25622_25628[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25620,map__25620__$1,opts){
return (function (val){
var statearr_25623_25629 = state;
(statearr_25623_25629[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25620,map__25620__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25624_25630 = state;
(statearr_25624_25630[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25615){
var G__25616 = cljs.core.first.call(null,seq25615);
var seq25615__$1 = cljs.core.next.call(null,seq25615);
var G__25617 = cljs.core.first.call(null,seq25615__$1);
var seq25615__$2 = cljs.core.next.call(null,seq25615__$1);
var G__25618 = cljs.core.first.call(null,seq25615__$2);
var seq25615__$3 = cljs.core.next.call(null,seq25615__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25616,G__25617,G__25618,seq25615__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25794 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25795){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25795 = meta25795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25796,meta25795__$1){
var self__ = this;
var _25796__$1 = this;
return (new cljs.core.async.t_cljs$core$async25794(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25795__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25796){
var self__ = this;
var _25796__$1 = this;
return self__.meta25795;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25795","meta25795",756336385,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25794";

cljs.core.async.t_cljs$core$async25794.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async25794");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25794 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25794(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25795){
return (new cljs.core.async.t_cljs$core$async25794(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25795));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25794(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24244__auto___25957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25894){
var state_val_25895 = (state_25894[(1)]);
if((state_val_25895 === (7))){
var inst_25812 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25896_25958 = state_25894__$1;
(statearr_25896_25958[(2)] = inst_25812);

(statearr_25896_25958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (20))){
var inst_25824 = (state_25894[(7)]);
var state_25894__$1 = state_25894;
var statearr_25897_25959 = state_25894__$1;
(statearr_25897_25959[(2)] = inst_25824);

(statearr_25897_25959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (27))){
var state_25894__$1 = state_25894;
var statearr_25898_25960 = state_25894__$1;
(statearr_25898_25960[(2)] = null);

(statearr_25898_25960[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (1))){
var inst_25800 = (state_25894[(8)]);
var inst_25800__$1 = calc_state.call(null);
var inst_25802 = (inst_25800__$1 == null);
var inst_25803 = cljs.core.not.call(null,inst_25802);
var state_25894__$1 = (function (){var statearr_25899 = state_25894;
(statearr_25899[(8)] = inst_25800__$1);

return statearr_25899;
})();
if(inst_25803){
var statearr_25900_25961 = state_25894__$1;
(statearr_25900_25961[(1)] = (2));

} else {
var statearr_25901_25962 = state_25894__$1;
(statearr_25901_25962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (24))){
var inst_25868 = (state_25894[(9)]);
var inst_25847 = (state_25894[(10)]);
var inst_25854 = (state_25894[(11)]);
var inst_25868__$1 = inst_25847.call(null,inst_25854);
var state_25894__$1 = (function (){var statearr_25902 = state_25894;
(statearr_25902[(9)] = inst_25868__$1);

return statearr_25902;
})();
if(cljs.core.truth_(inst_25868__$1)){
var statearr_25903_25963 = state_25894__$1;
(statearr_25903_25963[(1)] = (29));

} else {
var statearr_25904_25964 = state_25894__$1;
(statearr_25904_25964[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (4))){
var inst_25815 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25815)){
var statearr_25905_25965 = state_25894__$1;
(statearr_25905_25965[(1)] = (8));

} else {
var statearr_25906_25966 = state_25894__$1;
(statearr_25906_25966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (15))){
var inst_25841 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25841)){
var statearr_25907_25967 = state_25894__$1;
(statearr_25907_25967[(1)] = (19));

} else {
var statearr_25908_25968 = state_25894__$1;
(statearr_25908_25968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (21))){
var inst_25846 = (state_25894[(12)]);
var inst_25846__$1 = (state_25894[(2)]);
var inst_25847 = cljs.core.get.call(null,inst_25846__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25848 = cljs.core.get.call(null,inst_25846__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25849 = cljs.core.get.call(null,inst_25846__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25894__$1 = (function (){var statearr_25909 = state_25894;
(statearr_25909[(10)] = inst_25847);

(statearr_25909[(13)] = inst_25848);

(statearr_25909[(12)] = inst_25846__$1);

return statearr_25909;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25894__$1,(22),inst_25849);
} else {
if((state_val_25895 === (31))){
var inst_25876 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25876)){
var statearr_25910_25969 = state_25894__$1;
(statearr_25910_25969[(1)] = (32));

} else {
var statearr_25911_25970 = state_25894__$1;
(statearr_25911_25970[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (32))){
var inst_25853 = (state_25894[(14)]);
var state_25894__$1 = state_25894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25894__$1,(35),out,inst_25853);
} else {
if((state_val_25895 === (33))){
var inst_25846 = (state_25894[(12)]);
var inst_25824 = inst_25846;
var state_25894__$1 = (function (){var statearr_25912 = state_25894;
(statearr_25912[(7)] = inst_25824);

return statearr_25912;
})();
var statearr_25913_25971 = state_25894__$1;
(statearr_25913_25971[(2)] = null);

(statearr_25913_25971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (13))){
var inst_25824 = (state_25894[(7)]);
var inst_25831 = inst_25824.cljs$lang$protocol_mask$partition0$;
var inst_25832 = (inst_25831 & (64));
var inst_25833 = inst_25824.cljs$core$ISeq$;
var inst_25834 = (inst_25832) || (inst_25833);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25834)){
var statearr_25914_25972 = state_25894__$1;
(statearr_25914_25972[(1)] = (16));

} else {
var statearr_25915_25973 = state_25894__$1;
(statearr_25915_25973[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (22))){
var inst_25853 = (state_25894[(14)]);
var inst_25854 = (state_25894[(11)]);
var inst_25852 = (state_25894[(2)]);
var inst_25853__$1 = cljs.core.nth.call(null,inst_25852,(0),null);
var inst_25854__$1 = cljs.core.nth.call(null,inst_25852,(1),null);
var inst_25855 = (inst_25853__$1 == null);
var inst_25856 = cljs.core._EQ_.call(null,inst_25854__$1,change);
var inst_25857 = (inst_25855) || (inst_25856);
var state_25894__$1 = (function (){var statearr_25916 = state_25894;
(statearr_25916[(14)] = inst_25853__$1);

(statearr_25916[(11)] = inst_25854__$1);

return statearr_25916;
})();
if(cljs.core.truth_(inst_25857)){
var statearr_25917_25974 = state_25894__$1;
(statearr_25917_25974[(1)] = (23));

} else {
var statearr_25918_25975 = state_25894__$1;
(statearr_25918_25975[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (36))){
var inst_25846 = (state_25894[(12)]);
var inst_25824 = inst_25846;
var state_25894__$1 = (function (){var statearr_25919 = state_25894;
(statearr_25919[(7)] = inst_25824);

return statearr_25919;
})();
var statearr_25920_25976 = state_25894__$1;
(statearr_25920_25976[(2)] = null);

(statearr_25920_25976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (29))){
var inst_25868 = (state_25894[(9)]);
var state_25894__$1 = state_25894;
var statearr_25921_25977 = state_25894__$1;
(statearr_25921_25977[(2)] = inst_25868);

(statearr_25921_25977[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (6))){
var state_25894__$1 = state_25894;
var statearr_25922_25978 = state_25894__$1;
(statearr_25922_25978[(2)] = false);

(statearr_25922_25978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (28))){
var inst_25864 = (state_25894[(2)]);
var inst_25865 = calc_state.call(null);
var inst_25824 = inst_25865;
var state_25894__$1 = (function (){var statearr_25923 = state_25894;
(statearr_25923[(7)] = inst_25824);

(statearr_25923[(15)] = inst_25864);

return statearr_25923;
})();
var statearr_25924_25979 = state_25894__$1;
(statearr_25924_25979[(2)] = null);

(statearr_25924_25979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (25))){
var inst_25890 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25925_25980 = state_25894__$1;
(statearr_25925_25980[(2)] = inst_25890);

(statearr_25925_25980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (34))){
var inst_25888 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25926_25981 = state_25894__$1;
(statearr_25926_25981[(2)] = inst_25888);

(statearr_25926_25981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (17))){
var state_25894__$1 = state_25894;
var statearr_25927_25982 = state_25894__$1;
(statearr_25927_25982[(2)] = false);

(statearr_25927_25982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (3))){
var state_25894__$1 = state_25894;
var statearr_25928_25983 = state_25894__$1;
(statearr_25928_25983[(2)] = false);

(statearr_25928_25983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (12))){
var inst_25892 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25894__$1,inst_25892);
} else {
if((state_val_25895 === (2))){
var inst_25800 = (state_25894[(8)]);
var inst_25805 = inst_25800.cljs$lang$protocol_mask$partition0$;
var inst_25806 = (inst_25805 & (64));
var inst_25807 = inst_25800.cljs$core$ISeq$;
var inst_25808 = (inst_25806) || (inst_25807);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25808)){
var statearr_25929_25984 = state_25894__$1;
(statearr_25929_25984[(1)] = (5));

} else {
var statearr_25930_25985 = state_25894__$1;
(statearr_25930_25985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (23))){
var inst_25853 = (state_25894[(14)]);
var inst_25859 = (inst_25853 == null);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25859)){
var statearr_25931_25986 = state_25894__$1;
(statearr_25931_25986[(1)] = (26));

} else {
var statearr_25932_25987 = state_25894__$1;
(statearr_25932_25987[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (35))){
var inst_25879 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25879)){
var statearr_25933_25988 = state_25894__$1;
(statearr_25933_25988[(1)] = (36));

} else {
var statearr_25934_25989 = state_25894__$1;
(statearr_25934_25989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (19))){
var inst_25824 = (state_25894[(7)]);
var inst_25843 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25824);
var state_25894__$1 = state_25894;
var statearr_25935_25990 = state_25894__$1;
(statearr_25935_25990[(2)] = inst_25843);

(statearr_25935_25990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (11))){
var inst_25824 = (state_25894[(7)]);
var inst_25828 = (inst_25824 == null);
var inst_25829 = cljs.core.not.call(null,inst_25828);
var state_25894__$1 = state_25894;
if(inst_25829){
var statearr_25936_25991 = state_25894__$1;
(statearr_25936_25991[(1)] = (13));

} else {
var statearr_25937_25992 = state_25894__$1;
(statearr_25937_25992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (9))){
var inst_25800 = (state_25894[(8)]);
var state_25894__$1 = state_25894;
var statearr_25938_25993 = state_25894__$1;
(statearr_25938_25993[(2)] = inst_25800);

(statearr_25938_25993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (5))){
var state_25894__$1 = state_25894;
var statearr_25939_25994 = state_25894__$1;
(statearr_25939_25994[(2)] = true);

(statearr_25939_25994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (14))){
var state_25894__$1 = state_25894;
var statearr_25940_25995 = state_25894__$1;
(statearr_25940_25995[(2)] = false);

(statearr_25940_25995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (26))){
var inst_25854 = (state_25894[(11)]);
var inst_25861 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25854);
var state_25894__$1 = state_25894;
var statearr_25941_25996 = state_25894__$1;
(statearr_25941_25996[(2)] = inst_25861);

(statearr_25941_25996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (16))){
var state_25894__$1 = state_25894;
var statearr_25942_25997 = state_25894__$1;
(statearr_25942_25997[(2)] = true);

(statearr_25942_25997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (38))){
var inst_25884 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25943_25998 = state_25894__$1;
(statearr_25943_25998[(2)] = inst_25884);

(statearr_25943_25998[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (30))){
var inst_25847 = (state_25894[(10)]);
var inst_25848 = (state_25894[(13)]);
var inst_25854 = (state_25894[(11)]);
var inst_25871 = cljs.core.empty_QMARK_.call(null,inst_25847);
var inst_25872 = inst_25848.call(null,inst_25854);
var inst_25873 = cljs.core.not.call(null,inst_25872);
var inst_25874 = (inst_25871) && (inst_25873);
var state_25894__$1 = state_25894;
var statearr_25944_25999 = state_25894__$1;
(statearr_25944_25999[(2)] = inst_25874);

(statearr_25944_25999[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (10))){
var inst_25800 = (state_25894[(8)]);
var inst_25820 = (state_25894[(2)]);
var inst_25821 = cljs.core.get.call(null,inst_25820,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25822 = cljs.core.get.call(null,inst_25820,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25823 = cljs.core.get.call(null,inst_25820,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25824 = inst_25800;
var state_25894__$1 = (function (){var statearr_25945 = state_25894;
(statearr_25945[(16)] = inst_25821);

(statearr_25945[(7)] = inst_25824);

(statearr_25945[(17)] = inst_25823);

(statearr_25945[(18)] = inst_25822);

return statearr_25945;
})();
var statearr_25946_26000 = state_25894__$1;
(statearr_25946_26000[(2)] = null);

(statearr_25946_26000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (18))){
var inst_25838 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25947_26001 = state_25894__$1;
(statearr_25947_26001[(2)] = inst_25838);

(statearr_25947_26001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (37))){
var state_25894__$1 = state_25894;
var statearr_25948_26002 = state_25894__$1;
(statearr_25948_26002[(2)] = null);

(statearr_25948_26002[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25895 === (8))){
var inst_25800 = (state_25894[(8)]);
var inst_25817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25800);
var state_25894__$1 = state_25894;
var statearr_25949_26003 = state_25894__$1;
(statearr_25949_26003[(2)] = inst_25817);

(statearr_25949_26003[(1)] = (10));


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
});})(c__24244__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24132__auto__,c__24244__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24133__auto__ = null;
var cljs$core$async$mix_$_state_machine__24133__auto____0 = (function (){
var statearr_25953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25953[(0)] = cljs$core$async$mix_$_state_machine__24133__auto__);

(statearr_25953[(1)] = (1));

return statearr_25953;
});
var cljs$core$async$mix_$_state_machine__24133__auto____1 = (function (state_25894){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_25894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e25954){if((e25954 instanceof Object)){
var ex__24136__auto__ = e25954;
var statearr_25955_26004 = state_25894;
(statearr_25955_26004[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26005 = state_25894;
state_25894 = G__26005;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24133__auto__ = function(state_25894){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24133__auto____1.call(this,state_25894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24133__auto____0;
cljs$core$async$mix_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24133__auto____1;
return cljs$core$async$mix_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24246__auto__ = (function (){var statearr_25956 = f__24245__auto__.call(null);
(statearr_25956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___25957);

return statearr_25956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___25957,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21670__auto__ = (((p == null))?null:p);
var m__21671__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21671__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21670__auto__ = (((p == null))?null:p);
var m__21671__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,p,v,ch);
} else {
var m__21671__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26006 = [];
var len__22073__auto___26009 = arguments.length;
var i__22074__auto___26010 = (0);
while(true){
if((i__22074__auto___26010 < len__22073__auto___26009)){
args26006.push((arguments[i__22074__auto___26010]));

var G__26011 = (i__22074__auto___26010 + (1));
i__22074__auto___26010 = G__26011;
continue;
} else {
}
break;
}

var G__26008 = args26006.length;
switch (G__26008) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26006.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21670__auto__ = (((p == null))?null:p);
var m__21671__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,p);
} else {
var m__21671__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21670__auto__ = (((p == null))?null:p);
var m__21671__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21670__auto__)]);
if(!((m__21671__auto__ == null))){
return m__21671__auto__.call(null,p,v);
} else {
var m__21671__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21671__auto____$1 == null))){
return m__21671__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26014 = [];
var len__22073__auto___26139 = arguments.length;
var i__22074__auto___26140 = (0);
while(true){
if((i__22074__auto___26140 < len__22073__auto___26139)){
args26014.push((arguments[i__22074__auto___26140]));

var G__26141 = (i__22074__auto___26140 + (1));
i__22074__auto___26140 = G__26141;
continue;
} else {
}
break;
}

var G__26016 = args26014.length;
switch (G__26016) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26014.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21015__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21015__auto__,mults){
return (function (p1__26013_SHARP_){
if(cljs.core.truth_(p1__26013_SHARP_.call(null,topic))){
return p1__26013_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26013_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21015__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26017 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26018){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26018 = meta26018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26019,meta26018__$1){
var self__ = this;
var _26019__$1 = this;
return (new cljs.core.async.t_cljs$core$async26017(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26018__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26019){
var self__ = this;
var _26019__$1 = this;
return self__.meta26018;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26018","meta26018",-1339974691,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26017";

cljs.core.async.t_cljs$core$async26017.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async26017");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26017 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26017(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26018){
return (new cljs.core.async.t_cljs$core$async26017(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26018));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26017(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24244__auto___26143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26143,mults,ensure_mult,p){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26143,mults,ensure_mult,p){
return (function (state_26091){
var state_val_26092 = (state_26091[(1)]);
if((state_val_26092 === (7))){
var inst_26087 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
var statearr_26093_26144 = state_26091__$1;
(statearr_26093_26144[(2)] = inst_26087);

(statearr_26093_26144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (20))){
var state_26091__$1 = state_26091;
var statearr_26094_26145 = state_26091__$1;
(statearr_26094_26145[(2)] = null);

(statearr_26094_26145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (1))){
var state_26091__$1 = state_26091;
var statearr_26095_26146 = state_26091__$1;
(statearr_26095_26146[(2)] = null);

(statearr_26095_26146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (24))){
var inst_26070 = (state_26091[(7)]);
var inst_26079 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26070);
var state_26091__$1 = state_26091;
var statearr_26096_26147 = state_26091__$1;
(statearr_26096_26147[(2)] = inst_26079);

(statearr_26096_26147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (4))){
var inst_26022 = (state_26091[(8)]);
var inst_26022__$1 = (state_26091[(2)]);
var inst_26023 = (inst_26022__$1 == null);
var state_26091__$1 = (function (){var statearr_26097 = state_26091;
(statearr_26097[(8)] = inst_26022__$1);

return statearr_26097;
})();
if(cljs.core.truth_(inst_26023)){
var statearr_26098_26148 = state_26091__$1;
(statearr_26098_26148[(1)] = (5));

} else {
var statearr_26099_26149 = state_26091__$1;
(statearr_26099_26149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (15))){
var inst_26064 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
var statearr_26100_26150 = state_26091__$1;
(statearr_26100_26150[(2)] = inst_26064);

(statearr_26100_26150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (21))){
var inst_26084 = (state_26091[(2)]);
var state_26091__$1 = (function (){var statearr_26101 = state_26091;
(statearr_26101[(9)] = inst_26084);

return statearr_26101;
})();
var statearr_26102_26151 = state_26091__$1;
(statearr_26102_26151[(2)] = null);

(statearr_26102_26151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (13))){
var inst_26046 = (state_26091[(10)]);
var inst_26048 = cljs.core.chunked_seq_QMARK_.call(null,inst_26046);
var state_26091__$1 = state_26091;
if(inst_26048){
var statearr_26103_26152 = state_26091__$1;
(statearr_26103_26152[(1)] = (16));

} else {
var statearr_26104_26153 = state_26091__$1;
(statearr_26104_26153[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (22))){
var inst_26076 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
if(cljs.core.truth_(inst_26076)){
var statearr_26105_26154 = state_26091__$1;
(statearr_26105_26154[(1)] = (23));

} else {
var statearr_26106_26155 = state_26091__$1;
(statearr_26106_26155[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (6))){
var inst_26022 = (state_26091[(8)]);
var inst_26070 = (state_26091[(7)]);
var inst_26072 = (state_26091[(11)]);
var inst_26070__$1 = topic_fn.call(null,inst_26022);
var inst_26071 = cljs.core.deref.call(null,mults);
var inst_26072__$1 = cljs.core.get.call(null,inst_26071,inst_26070__$1);
var state_26091__$1 = (function (){var statearr_26107 = state_26091;
(statearr_26107[(7)] = inst_26070__$1);

(statearr_26107[(11)] = inst_26072__$1);

return statearr_26107;
})();
if(cljs.core.truth_(inst_26072__$1)){
var statearr_26108_26156 = state_26091__$1;
(statearr_26108_26156[(1)] = (19));

} else {
var statearr_26109_26157 = state_26091__$1;
(statearr_26109_26157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (25))){
var inst_26081 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
var statearr_26110_26158 = state_26091__$1;
(statearr_26110_26158[(2)] = inst_26081);

(statearr_26110_26158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (17))){
var inst_26046 = (state_26091[(10)]);
var inst_26055 = cljs.core.first.call(null,inst_26046);
var inst_26056 = cljs.core.async.muxch_STAR_.call(null,inst_26055);
var inst_26057 = cljs.core.async.close_BANG_.call(null,inst_26056);
var inst_26058 = cljs.core.next.call(null,inst_26046);
var inst_26032 = inst_26058;
var inst_26033 = null;
var inst_26034 = (0);
var inst_26035 = (0);
var state_26091__$1 = (function (){var statearr_26111 = state_26091;
(statearr_26111[(12)] = inst_26057);

(statearr_26111[(13)] = inst_26032);

(statearr_26111[(14)] = inst_26035);

(statearr_26111[(15)] = inst_26034);

(statearr_26111[(16)] = inst_26033);

return statearr_26111;
})();
var statearr_26112_26159 = state_26091__$1;
(statearr_26112_26159[(2)] = null);

(statearr_26112_26159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (3))){
var inst_26089 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26091__$1,inst_26089);
} else {
if((state_val_26092 === (12))){
var inst_26066 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
var statearr_26113_26160 = state_26091__$1;
(statearr_26113_26160[(2)] = inst_26066);

(statearr_26113_26160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (2))){
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26091__$1,(4),ch);
} else {
if((state_val_26092 === (23))){
var state_26091__$1 = state_26091;
var statearr_26114_26161 = state_26091__$1;
(statearr_26114_26161[(2)] = null);

(statearr_26114_26161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (19))){
var inst_26022 = (state_26091[(8)]);
var inst_26072 = (state_26091[(11)]);
var inst_26074 = cljs.core.async.muxch_STAR_.call(null,inst_26072);
var state_26091__$1 = state_26091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26091__$1,(22),inst_26074,inst_26022);
} else {
if((state_val_26092 === (11))){
var inst_26032 = (state_26091[(13)]);
var inst_26046 = (state_26091[(10)]);
var inst_26046__$1 = cljs.core.seq.call(null,inst_26032);
var state_26091__$1 = (function (){var statearr_26115 = state_26091;
(statearr_26115[(10)] = inst_26046__$1);

return statearr_26115;
})();
if(inst_26046__$1){
var statearr_26116_26162 = state_26091__$1;
(statearr_26116_26162[(1)] = (13));

} else {
var statearr_26117_26163 = state_26091__$1;
(statearr_26117_26163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (9))){
var inst_26068 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
var statearr_26118_26164 = state_26091__$1;
(statearr_26118_26164[(2)] = inst_26068);

(statearr_26118_26164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (5))){
var inst_26029 = cljs.core.deref.call(null,mults);
var inst_26030 = cljs.core.vals.call(null,inst_26029);
var inst_26031 = cljs.core.seq.call(null,inst_26030);
var inst_26032 = inst_26031;
var inst_26033 = null;
var inst_26034 = (0);
var inst_26035 = (0);
var state_26091__$1 = (function (){var statearr_26119 = state_26091;
(statearr_26119[(13)] = inst_26032);

(statearr_26119[(14)] = inst_26035);

(statearr_26119[(15)] = inst_26034);

(statearr_26119[(16)] = inst_26033);

return statearr_26119;
})();
var statearr_26120_26165 = state_26091__$1;
(statearr_26120_26165[(2)] = null);

(statearr_26120_26165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (14))){
var state_26091__$1 = state_26091;
var statearr_26124_26166 = state_26091__$1;
(statearr_26124_26166[(2)] = null);

(statearr_26124_26166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (16))){
var inst_26046 = (state_26091[(10)]);
var inst_26050 = cljs.core.chunk_first.call(null,inst_26046);
var inst_26051 = cljs.core.chunk_rest.call(null,inst_26046);
var inst_26052 = cljs.core.count.call(null,inst_26050);
var inst_26032 = inst_26051;
var inst_26033 = inst_26050;
var inst_26034 = inst_26052;
var inst_26035 = (0);
var state_26091__$1 = (function (){var statearr_26125 = state_26091;
(statearr_26125[(13)] = inst_26032);

(statearr_26125[(14)] = inst_26035);

(statearr_26125[(15)] = inst_26034);

(statearr_26125[(16)] = inst_26033);

return statearr_26125;
})();
var statearr_26126_26167 = state_26091__$1;
(statearr_26126_26167[(2)] = null);

(statearr_26126_26167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (10))){
var inst_26032 = (state_26091[(13)]);
var inst_26035 = (state_26091[(14)]);
var inst_26034 = (state_26091[(15)]);
var inst_26033 = (state_26091[(16)]);
var inst_26040 = cljs.core._nth.call(null,inst_26033,inst_26035);
var inst_26041 = cljs.core.async.muxch_STAR_.call(null,inst_26040);
var inst_26042 = cljs.core.async.close_BANG_.call(null,inst_26041);
var inst_26043 = (inst_26035 + (1));
var tmp26121 = inst_26032;
var tmp26122 = inst_26034;
var tmp26123 = inst_26033;
var inst_26032__$1 = tmp26121;
var inst_26033__$1 = tmp26123;
var inst_26034__$1 = tmp26122;
var inst_26035__$1 = inst_26043;
var state_26091__$1 = (function (){var statearr_26127 = state_26091;
(statearr_26127[(13)] = inst_26032__$1);

(statearr_26127[(14)] = inst_26035__$1);

(statearr_26127[(17)] = inst_26042);

(statearr_26127[(15)] = inst_26034__$1);

(statearr_26127[(16)] = inst_26033__$1);

return statearr_26127;
})();
var statearr_26128_26168 = state_26091__$1;
(statearr_26128_26168[(2)] = null);

(statearr_26128_26168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (18))){
var inst_26061 = (state_26091[(2)]);
var state_26091__$1 = state_26091;
var statearr_26129_26169 = state_26091__$1;
(statearr_26129_26169[(2)] = inst_26061);

(statearr_26129_26169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26092 === (8))){
var inst_26035 = (state_26091[(14)]);
var inst_26034 = (state_26091[(15)]);
var inst_26037 = (inst_26035 < inst_26034);
var inst_26038 = inst_26037;
var state_26091__$1 = state_26091;
if(cljs.core.truth_(inst_26038)){
var statearr_26130_26170 = state_26091__$1;
(statearr_26130_26170[(1)] = (10));

} else {
var statearr_26131_26171 = state_26091__$1;
(statearr_26131_26171[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__24244__auto___26143,mults,ensure_mult,p))
;
return ((function (switch__24132__auto__,c__24244__auto___26143,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26135[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26135[(1)] = (1));

return statearr_26135;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26091){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26136){if((e26136 instanceof Object)){
var ex__24136__auto__ = e26136;
var statearr_26137_26172 = state_26091;
(statearr_26137_26172[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26173 = state_26091;
state_26091 = G__26173;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26143,mults,ensure_mult,p))
})();
var state__24246__auto__ = (function (){var statearr_26138 = f__24245__auto__.call(null);
(statearr_26138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26143);

return statearr_26138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26143,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26174 = [];
var len__22073__auto___26177 = arguments.length;
var i__22074__auto___26178 = (0);
while(true){
if((i__22074__auto___26178 < len__22073__auto___26177)){
args26174.push((arguments[i__22074__auto___26178]));

var G__26179 = (i__22074__auto___26178 + (1));
i__22074__auto___26178 = G__26179;
continue;
} else {
}
break;
}

var G__26176 = args26174.length;
switch (G__26176) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26174.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26181 = [];
var len__22073__auto___26184 = arguments.length;
var i__22074__auto___26185 = (0);
while(true){
if((i__22074__auto___26185 < len__22073__auto___26184)){
args26181.push((arguments[i__22074__auto___26185]));

var G__26186 = (i__22074__auto___26185 + (1));
i__22074__auto___26185 = G__26186;
continue;
} else {
}
break;
}

var G__26183 = args26181.length;
switch (G__26183) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26181.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26188 = [];
var len__22073__auto___26259 = arguments.length;
var i__22074__auto___26260 = (0);
while(true){
if((i__22074__auto___26260 < len__22073__auto___26259)){
args26188.push((arguments[i__22074__auto___26260]));

var G__26261 = (i__22074__auto___26260 + (1));
i__22074__auto___26260 = G__26261;
continue;
} else {
}
break;
}

var G__26190 = args26188.length;
switch (G__26190) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26188.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24244__auto___26263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26263,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26263,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26229){
var state_val_26230 = (state_26229[(1)]);
if((state_val_26230 === (7))){
var state_26229__$1 = state_26229;
var statearr_26231_26264 = state_26229__$1;
(statearr_26231_26264[(2)] = null);

(statearr_26231_26264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (1))){
var state_26229__$1 = state_26229;
var statearr_26232_26265 = state_26229__$1;
(statearr_26232_26265[(2)] = null);

(statearr_26232_26265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (4))){
var inst_26193 = (state_26229[(7)]);
var inst_26195 = (inst_26193 < cnt);
var state_26229__$1 = state_26229;
if(cljs.core.truth_(inst_26195)){
var statearr_26233_26266 = state_26229__$1;
(statearr_26233_26266[(1)] = (6));

} else {
var statearr_26234_26267 = state_26229__$1;
(statearr_26234_26267[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (15))){
var inst_26225 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
var statearr_26235_26268 = state_26229__$1;
(statearr_26235_26268[(2)] = inst_26225);

(statearr_26235_26268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (13))){
var inst_26218 = cljs.core.async.close_BANG_.call(null,out);
var state_26229__$1 = state_26229;
var statearr_26236_26269 = state_26229__$1;
(statearr_26236_26269[(2)] = inst_26218);

(statearr_26236_26269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (6))){
var state_26229__$1 = state_26229;
var statearr_26237_26270 = state_26229__$1;
(statearr_26237_26270[(2)] = null);

(statearr_26237_26270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (3))){
var inst_26227 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26229__$1,inst_26227);
} else {
if((state_val_26230 === (12))){
var inst_26215 = (state_26229[(8)]);
var inst_26215__$1 = (state_26229[(2)]);
var inst_26216 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26215__$1);
var state_26229__$1 = (function (){var statearr_26238 = state_26229;
(statearr_26238[(8)] = inst_26215__$1);

return statearr_26238;
})();
if(cljs.core.truth_(inst_26216)){
var statearr_26239_26271 = state_26229__$1;
(statearr_26239_26271[(1)] = (13));

} else {
var statearr_26240_26272 = state_26229__$1;
(statearr_26240_26272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (2))){
var inst_26192 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26193 = (0);
var state_26229__$1 = (function (){var statearr_26241 = state_26229;
(statearr_26241[(7)] = inst_26193);

(statearr_26241[(9)] = inst_26192);

return statearr_26241;
})();
var statearr_26242_26273 = state_26229__$1;
(statearr_26242_26273[(2)] = null);

(statearr_26242_26273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (11))){
var inst_26193 = (state_26229[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26229,(10),Object,null,(9));
var inst_26202 = chs__$1.call(null,inst_26193);
var inst_26203 = done.call(null,inst_26193);
var inst_26204 = cljs.core.async.take_BANG_.call(null,inst_26202,inst_26203);
var state_26229__$1 = state_26229;
var statearr_26243_26274 = state_26229__$1;
(statearr_26243_26274[(2)] = inst_26204);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (9))){
var inst_26193 = (state_26229[(7)]);
var inst_26206 = (state_26229[(2)]);
var inst_26207 = (inst_26193 + (1));
var inst_26193__$1 = inst_26207;
var state_26229__$1 = (function (){var statearr_26244 = state_26229;
(statearr_26244[(7)] = inst_26193__$1);

(statearr_26244[(10)] = inst_26206);

return statearr_26244;
})();
var statearr_26245_26275 = state_26229__$1;
(statearr_26245_26275[(2)] = null);

(statearr_26245_26275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (5))){
var inst_26213 = (state_26229[(2)]);
var state_26229__$1 = (function (){var statearr_26246 = state_26229;
(statearr_26246[(11)] = inst_26213);

return statearr_26246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26229__$1,(12),dchan);
} else {
if((state_val_26230 === (14))){
var inst_26215 = (state_26229[(8)]);
var inst_26220 = cljs.core.apply.call(null,f,inst_26215);
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26229__$1,(16),out,inst_26220);
} else {
if((state_val_26230 === (16))){
var inst_26222 = (state_26229[(2)]);
var state_26229__$1 = (function (){var statearr_26247 = state_26229;
(statearr_26247[(12)] = inst_26222);

return statearr_26247;
})();
var statearr_26248_26276 = state_26229__$1;
(statearr_26248_26276[(2)] = null);

(statearr_26248_26276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (10))){
var inst_26197 = (state_26229[(2)]);
var inst_26198 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26229__$1 = (function (){var statearr_26249 = state_26229;
(statearr_26249[(13)] = inst_26197);

return statearr_26249;
})();
var statearr_26250_26277 = state_26229__$1;
(statearr_26250_26277[(2)] = inst_26198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (8))){
var inst_26211 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
var statearr_26251_26278 = state_26229__$1;
(statearr_26251_26278[(2)] = inst_26211);

(statearr_26251_26278[(1)] = (5));


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
});})(c__24244__auto___26263,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24132__auto__,c__24244__auto___26263,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26255[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26255[(1)] = (1));

return statearr_26255;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26229){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26256){if((e26256 instanceof Object)){
var ex__24136__auto__ = e26256;
var statearr_26257_26279 = state_26229;
(statearr_26257_26279[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26280 = state_26229;
state_26229 = G__26280;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26263,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24246__auto__ = (function (){var statearr_26258 = f__24245__auto__.call(null);
(statearr_26258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26263);

return statearr_26258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26263,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26282 = [];
var len__22073__auto___26338 = arguments.length;
var i__22074__auto___26339 = (0);
while(true){
if((i__22074__auto___26339 < len__22073__auto___26338)){
args26282.push((arguments[i__22074__auto___26339]));

var G__26340 = (i__22074__auto___26339 + (1));
i__22074__auto___26339 = G__26340;
continue;
} else {
}
break;
}

var G__26284 = args26282.length;
switch (G__26284) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26282.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24244__auto___26342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26342,out){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26342,out){
return (function (state_26314){
var state_val_26315 = (state_26314[(1)]);
if((state_val_26315 === (7))){
var inst_26293 = (state_26314[(7)]);
var inst_26294 = (state_26314[(8)]);
var inst_26293__$1 = (state_26314[(2)]);
var inst_26294__$1 = cljs.core.nth.call(null,inst_26293__$1,(0),null);
var inst_26295 = cljs.core.nth.call(null,inst_26293__$1,(1),null);
var inst_26296 = (inst_26294__$1 == null);
var state_26314__$1 = (function (){var statearr_26316 = state_26314;
(statearr_26316[(7)] = inst_26293__$1);

(statearr_26316[(8)] = inst_26294__$1);

(statearr_26316[(9)] = inst_26295);

return statearr_26316;
})();
if(cljs.core.truth_(inst_26296)){
var statearr_26317_26343 = state_26314__$1;
(statearr_26317_26343[(1)] = (8));

} else {
var statearr_26318_26344 = state_26314__$1;
(statearr_26318_26344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (1))){
var inst_26285 = cljs.core.vec.call(null,chs);
var inst_26286 = inst_26285;
var state_26314__$1 = (function (){var statearr_26319 = state_26314;
(statearr_26319[(10)] = inst_26286);

return statearr_26319;
})();
var statearr_26320_26345 = state_26314__$1;
(statearr_26320_26345[(2)] = null);

(statearr_26320_26345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (4))){
var inst_26286 = (state_26314[(10)]);
var state_26314__$1 = state_26314;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26314__$1,(7),inst_26286);
} else {
if((state_val_26315 === (6))){
var inst_26310 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
var statearr_26321_26346 = state_26314__$1;
(statearr_26321_26346[(2)] = inst_26310);

(statearr_26321_26346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (3))){
var inst_26312 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26314__$1,inst_26312);
} else {
if((state_val_26315 === (2))){
var inst_26286 = (state_26314[(10)]);
var inst_26288 = cljs.core.count.call(null,inst_26286);
var inst_26289 = (inst_26288 > (0));
var state_26314__$1 = state_26314;
if(cljs.core.truth_(inst_26289)){
var statearr_26323_26347 = state_26314__$1;
(statearr_26323_26347[(1)] = (4));

} else {
var statearr_26324_26348 = state_26314__$1;
(statearr_26324_26348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (11))){
var inst_26286 = (state_26314[(10)]);
var inst_26303 = (state_26314[(2)]);
var tmp26322 = inst_26286;
var inst_26286__$1 = tmp26322;
var state_26314__$1 = (function (){var statearr_26325 = state_26314;
(statearr_26325[(11)] = inst_26303);

(statearr_26325[(10)] = inst_26286__$1);

return statearr_26325;
})();
var statearr_26326_26349 = state_26314__$1;
(statearr_26326_26349[(2)] = null);

(statearr_26326_26349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (9))){
var inst_26294 = (state_26314[(8)]);
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26314__$1,(11),out,inst_26294);
} else {
if((state_val_26315 === (5))){
var inst_26308 = cljs.core.async.close_BANG_.call(null,out);
var state_26314__$1 = state_26314;
var statearr_26327_26350 = state_26314__$1;
(statearr_26327_26350[(2)] = inst_26308);

(statearr_26327_26350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (10))){
var inst_26306 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
var statearr_26328_26351 = state_26314__$1;
(statearr_26328_26351[(2)] = inst_26306);

(statearr_26328_26351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (8))){
var inst_26286 = (state_26314[(10)]);
var inst_26293 = (state_26314[(7)]);
var inst_26294 = (state_26314[(8)]);
var inst_26295 = (state_26314[(9)]);
var inst_26298 = (function (){var cs = inst_26286;
var vec__26291 = inst_26293;
var v = inst_26294;
var c = inst_26295;
return ((function (cs,vec__26291,v,c,inst_26286,inst_26293,inst_26294,inst_26295,state_val_26315,c__24244__auto___26342,out){
return (function (p1__26281_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26281_SHARP_);
});
;})(cs,vec__26291,v,c,inst_26286,inst_26293,inst_26294,inst_26295,state_val_26315,c__24244__auto___26342,out))
})();
var inst_26299 = cljs.core.filterv.call(null,inst_26298,inst_26286);
var inst_26286__$1 = inst_26299;
var state_26314__$1 = (function (){var statearr_26329 = state_26314;
(statearr_26329[(10)] = inst_26286__$1);

return statearr_26329;
})();
var statearr_26330_26352 = state_26314__$1;
(statearr_26330_26352[(2)] = null);

(statearr_26330_26352[(1)] = (2));


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
});})(c__24244__auto___26342,out))
;
return ((function (switch__24132__auto__,c__24244__auto___26342,out){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26334[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26334[(1)] = (1));

return statearr_26334;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26314){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26335){if((e26335 instanceof Object)){
var ex__24136__auto__ = e26335;
var statearr_26336_26353 = state_26314;
(statearr_26336_26353[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26354 = state_26314;
state_26314 = G__26354;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26342,out))
})();
var state__24246__auto__ = (function (){var statearr_26337 = f__24245__auto__.call(null);
(statearr_26337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26342);

return statearr_26337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26342,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26355 = [];
var len__22073__auto___26404 = arguments.length;
var i__22074__auto___26405 = (0);
while(true){
if((i__22074__auto___26405 < len__22073__auto___26404)){
args26355.push((arguments[i__22074__auto___26405]));

var G__26406 = (i__22074__auto___26405 + (1));
i__22074__auto___26405 = G__26406;
continue;
} else {
}
break;
}

var G__26357 = args26355.length;
switch (G__26357) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26355.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24244__auto___26408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26408,out){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26408,out){
return (function (state_26381){
var state_val_26382 = (state_26381[(1)]);
if((state_val_26382 === (7))){
var inst_26363 = (state_26381[(7)]);
var inst_26363__$1 = (state_26381[(2)]);
var inst_26364 = (inst_26363__$1 == null);
var inst_26365 = cljs.core.not.call(null,inst_26364);
var state_26381__$1 = (function (){var statearr_26383 = state_26381;
(statearr_26383[(7)] = inst_26363__$1);

return statearr_26383;
})();
if(inst_26365){
var statearr_26384_26409 = state_26381__$1;
(statearr_26384_26409[(1)] = (8));

} else {
var statearr_26385_26410 = state_26381__$1;
(statearr_26385_26410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (1))){
var inst_26358 = (0);
var state_26381__$1 = (function (){var statearr_26386 = state_26381;
(statearr_26386[(8)] = inst_26358);

return statearr_26386;
})();
var statearr_26387_26411 = state_26381__$1;
(statearr_26387_26411[(2)] = null);

(statearr_26387_26411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (4))){
var state_26381__$1 = state_26381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26381__$1,(7),ch);
} else {
if((state_val_26382 === (6))){
var inst_26376 = (state_26381[(2)]);
var state_26381__$1 = state_26381;
var statearr_26388_26412 = state_26381__$1;
(statearr_26388_26412[(2)] = inst_26376);

(statearr_26388_26412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (3))){
var inst_26378 = (state_26381[(2)]);
var inst_26379 = cljs.core.async.close_BANG_.call(null,out);
var state_26381__$1 = (function (){var statearr_26389 = state_26381;
(statearr_26389[(9)] = inst_26378);

return statearr_26389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26381__$1,inst_26379);
} else {
if((state_val_26382 === (2))){
var inst_26358 = (state_26381[(8)]);
var inst_26360 = (inst_26358 < n);
var state_26381__$1 = state_26381;
if(cljs.core.truth_(inst_26360)){
var statearr_26390_26413 = state_26381__$1;
(statearr_26390_26413[(1)] = (4));

} else {
var statearr_26391_26414 = state_26381__$1;
(statearr_26391_26414[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (11))){
var inst_26358 = (state_26381[(8)]);
var inst_26368 = (state_26381[(2)]);
var inst_26369 = (inst_26358 + (1));
var inst_26358__$1 = inst_26369;
var state_26381__$1 = (function (){var statearr_26392 = state_26381;
(statearr_26392[(8)] = inst_26358__$1);

(statearr_26392[(10)] = inst_26368);

return statearr_26392;
})();
var statearr_26393_26415 = state_26381__$1;
(statearr_26393_26415[(2)] = null);

(statearr_26393_26415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (9))){
var state_26381__$1 = state_26381;
var statearr_26394_26416 = state_26381__$1;
(statearr_26394_26416[(2)] = null);

(statearr_26394_26416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (5))){
var state_26381__$1 = state_26381;
var statearr_26395_26417 = state_26381__$1;
(statearr_26395_26417[(2)] = null);

(statearr_26395_26417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (10))){
var inst_26373 = (state_26381[(2)]);
var state_26381__$1 = state_26381;
var statearr_26396_26418 = state_26381__$1;
(statearr_26396_26418[(2)] = inst_26373);

(statearr_26396_26418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (8))){
var inst_26363 = (state_26381[(7)]);
var state_26381__$1 = state_26381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26381__$1,(11),out,inst_26363);
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
});})(c__24244__auto___26408,out))
;
return ((function (switch__24132__auto__,c__24244__auto___26408,out){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26400[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26400[(1)] = (1));

return statearr_26400;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26381){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26401){if((e26401 instanceof Object)){
var ex__24136__auto__ = e26401;
var statearr_26402_26419 = state_26381;
(statearr_26402_26419[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26420 = state_26381;
state_26381 = G__26420;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26408,out))
})();
var state__24246__auto__ = (function (){var statearr_26403 = f__24245__auto__.call(null);
(statearr_26403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26408);

return statearr_26403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26408,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26428 = (function (map_LT_,f,ch,meta26429){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26429 = meta26429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26430,meta26429__$1){
var self__ = this;
var _26430__$1 = this;
return (new cljs.core.async.t_cljs$core$async26428(self__.map_LT_,self__.f,self__.ch,meta26429__$1));
});

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26430){
var self__ = this;
var _26430__$1 = this;
return self__.meta26429;
});

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26431 = (function (map_LT_,f,ch,meta26429,_,fn1,meta26432){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26429 = meta26429;
this._ = _;
this.fn1 = fn1;
this.meta26432 = meta26432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26433,meta26432__$1){
var self__ = this;
var _26433__$1 = this;
return (new cljs.core.async.t_cljs$core$async26431(self__.map_LT_,self__.f,self__.ch,self__.meta26429,self__._,self__.fn1,meta26432__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26433){
var self__ = this;
var _26433__$1 = this;
return self__.meta26432;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26421_SHARP_){
return f1.call(null,(((p1__26421_SHARP_ == null))?null:self__.f.call(null,p1__26421_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26429","meta26429",2057542274,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26428","cljs.core.async/t_cljs$core$async26428",-402175618,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26432","meta26432",53076366,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26431";

cljs.core.async.t_cljs$core$async26431.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async26431");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26431 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26431(map_LT___$1,f__$1,ch__$1,meta26429__$1,___$2,fn1__$1,meta26432){
return (new cljs.core.async.t_cljs$core$async26431(map_LT___$1,f__$1,ch__$1,meta26429__$1,___$2,fn1__$1,meta26432));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26431(self__.map_LT_,self__.f,self__.ch,self__.meta26429,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21003__auto__ = ret;
if(cljs.core.truth_(and__21003__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21003__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26429","meta26429",2057542274,null)], null);
});

cljs.core.async.t_cljs$core$async26428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26428";

cljs.core.async.t_cljs$core$async26428.cljs$lang$ctorPrWriter = (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async26428");
});

cljs.core.async.__GT_t_cljs$core$async26428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26428(map_LT___$1,f__$1,ch__$1,meta26429){
return (new cljs.core.async.t_cljs$core$async26428(map_LT___$1,f__$1,ch__$1,meta26429));
});

}

return (new cljs.core.async.t_cljs$core$async26428(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26437 = (function (map_GT_,f,ch,meta26438){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26438 = meta26438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26439,meta26438__$1){
var self__ = this;
var _26439__$1 = this;
return (new cljs.core.async.t_cljs$core$async26437(self__.map_GT_,self__.f,self__.ch,meta26438__$1));
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26439){
var self__ = this;
var _26439__$1 = this;
return self__.meta26438;
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26438","meta26438",1988999829,null)], null);
});

cljs.core.async.t_cljs$core$async26437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26437";

cljs.core.async.t_cljs$core$async26437.cljs$lang$ctorPrWriter = (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async26437");
});

cljs.core.async.__GT_t_cljs$core$async26437 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26437(map_GT___$1,f__$1,ch__$1,meta26438){
return (new cljs.core.async.t_cljs$core$async26437(map_GT___$1,f__$1,ch__$1,meta26438));
});

}

return (new cljs.core.async.t_cljs$core$async26437(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26443 = (function (filter_GT_,p,ch,meta26444){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26444 = meta26444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26445,meta26444__$1){
var self__ = this;
var _26445__$1 = this;
return (new cljs.core.async.t_cljs$core$async26443(self__.filter_GT_,self__.p,self__.ch,meta26444__$1));
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26445){
var self__ = this;
var _26445__$1 = this;
return self__.meta26444;
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26444","meta26444",-417838548,null)], null);
});

cljs.core.async.t_cljs$core$async26443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26443";

cljs.core.async.t_cljs$core$async26443.cljs$lang$ctorPrWriter = (function (this__21613__auto__,writer__21614__auto__,opt__21615__auto__){
return cljs.core._write.call(null,writer__21614__auto__,"cljs.core.async/t_cljs$core$async26443");
});

cljs.core.async.__GT_t_cljs$core$async26443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26443(filter_GT___$1,p__$1,ch__$1,meta26444){
return (new cljs.core.async.t_cljs$core$async26443(filter_GT___$1,p__$1,ch__$1,meta26444));
});

}

return (new cljs.core.async.t_cljs$core$async26443(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26446 = [];
var len__22073__auto___26490 = arguments.length;
var i__22074__auto___26491 = (0);
while(true){
if((i__22074__auto___26491 < len__22073__auto___26490)){
args26446.push((arguments[i__22074__auto___26491]));

var G__26492 = (i__22074__auto___26491 + (1));
i__22074__auto___26491 = G__26492;
continue;
} else {
}
break;
}

var G__26448 = args26446.length;
switch (G__26448) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26446.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24244__auto___26494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26494,out){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26494,out){
return (function (state_26469){
var state_val_26470 = (state_26469[(1)]);
if((state_val_26470 === (7))){
var inst_26465 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26471_26495 = state_26469__$1;
(statearr_26471_26495[(2)] = inst_26465);

(statearr_26471_26495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (1))){
var state_26469__$1 = state_26469;
var statearr_26472_26496 = state_26469__$1;
(statearr_26472_26496[(2)] = null);

(statearr_26472_26496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (4))){
var inst_26451 = (state_26469[(7)]);
var inst_26451__$1 = (state_26469[(2)]);
var inst_26452 = (inst_26451__$1 == null);
var state_26469__$1 = (function (){var statearr_26473 = state_26469;
(statearr_26473[(7)] = inst_26451__$1);

return statearr_26473;
})();
if(cljs.core.truth_(inst_26452)){
var statearr_26474_26497 = state_26469__$1;
(statearr_26474_26497[(1)] = (5));

} else {
var statearr_26475_26498 = state_26469__$1;
(statearr_26475_26498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (6))){
var inst_26451 = (state_26469[(7)]);
var inst_26456 = p.call(null,inst_26451);
var state_26469__$1 = state_26469;
if(cljs.core.truth_(inst_26456)){
var statearr_26476_26499 = state_26469__$1;
(statearr_26476_26499[(1)] = (8));

} else {
var statearr_26477_26500 = state_26469__$1;
(statearr_26477_26500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (3))){
var inst_26467 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26469__$1,inst_26467);
} else {
if((state_val_26470 === (2))){
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26469__$1,(4),ch);
} else {
if((state_val_26470 === (11))){
var inst_26459 = (state_26469[(2)]);
var state_26469__$1 = state_26469;
var statearr_26478_26501 = state_26469__$1;
(statearr_26478_26501[(2)] = inst_26459);

(statearr_26478_26501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (9))){
var state_26469__$1 = state_26469;
var statearr_26479_26502 = state_26469__$1;
(statearr_26479_26502[(2)] = null);

(statearr_26479_26502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (5))){
var inst_26454 = cljs.core.async.close_BANG_.call(null,out);
var state_26469__$1 = state_26469;
var statearr_26480_26503 = state_26469__$1;
(statearr_26480_26503[(2)] = inst_26454);

(statearr_26480_26503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (10))){
var inst_26462 = (state_26469[(2)]);
var state_26469__$1 = (function (){var statearr_26481 = state_26469;
(statearr_26481[(8)] = inst_26462);

return statearr_26481;
})();
var statearr_26482_26504 = state_26469__$1;
(statearr_26482_26504[(2)] = null);

(statearr_26482_26504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26470 === (8))){
var inst_26451 = (state_26469[(7)]);
var state_26469__$1 = state_26469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26469__$1,(11),out,inst_26451);
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
});})(c__24244__auto___26494,out))
;
return ((function (switch__24132__auto__,c__24244__auto___26494,out){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26486 = [null,null,null,null,null,null,null,null,null];
(statearr_26486[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26486[(1)] = (1));

return statearr_26486;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26469){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26487){if((e26487 instanceof Object)){
var ex__24136__auto__ = e26487;
var statearr_26488_26505 = state_26469;
(statearr_26488_26505[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26506 = state_26469;
state_26469 = G__26506;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26494,out))
})();
var state__24246__auto__ = (function (){var statearr_26489 = f__24245__auto__.call(null);
(statearr_26489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26494);

return statearr_26489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26494,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26507 = [];
var len__22073__auto___26510 = arguments.length;
var i__22074__auto___26511 = (0);
while(true){
if((i__22074__auto___26511 < len__22073__auto___26510)){
args26507.push((arguments[i__22074__auto___26511]));

var G__26512 = (i__22074__auto___26511 + (1));
i__22074__auto___26511 = G__26512;
continue;
} else {
}
break;
}

var G__26509 = args26507.length;
switch (G__26509) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26507.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__){
return (function (state_26679){
var state_val_26680 = (state_26679[(1)]);
if((state_val_26680 === (7))){
var inst_26675 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26681_26722 = state_26679__$1;
(statearr_26681_26722[(2)] = inst_26675);

(statearr_26681_26722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (20))){
var inst_26645 = (state_26679[(7)]);
var inst_26656 = (state_26679[(2)]);
var inst_26657 = cljs.core.next.call(null,inst_26645);
var inst_26631 = inst_26657;
var inst_26632 = null;
var inst_26633 = (0);
var inst_26634 = (0);
var state_26679__$1 = (function (){var statearr_26682 = state_26679;
(statearr_26682[(8)] = inst_26633);

(statearr_26682[(9)] = inst_26656);

(statearr_26682[(10)] = inst_26632);

(statearr_26682[(11)] = inst_26634);

(statearr_26682[(12)] = inst_26631);

return statearr_26682;
})();
var statearr_26683_26723 = state_26679__$1;
(statearr_26683_26723[(2)] = null);

(statearr_26683_26723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (1))){
var state_26679__$1 = state_26679;
var statearr_26684_26724 = state_26679__$1;
(statearr_26684_26724[(2)] = null);

(statearr_26684_26724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (4))){
var inst_26620 = (state_26679[(13)]);
var inst_26620__$1 = (state_26679[(2)]);
var inst_26621 = (inst_26620__$1 == null);
var state_26679__$1 = (function (){var statearr_26685 = state_26679;
(statearr_26685[(13)] = inst_26620__$1);

return statearr_26685;
})();
if(cljs.core.truth_(inst_26621)){
var statearr_26686_26725 = state_26679__$1;
(statearr_26686_26725[(1)] = (5));

} else {
var statearr_26687_26726 = state_26679__$1;
(statearr_26687_26726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (15))){
var state_26679__$1 = state_26679;
var statearr_26691_26727 = state_26679__$1;
(statearr_26691_26727[(2)] = null);

(statearr_26691_26727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (21))){
var state_26679__$1 = state_26679;
var statearr_26692_26728 = state_26679__$1;
(statearr_26692_26728[(2)] = null);

(statearr_26692_26728[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (13))){
var inst_26633 = (state_26679[(8)]);
var inst_26632 = (state_26679[(10)]);
var inst_26634 = (state_26679[(11)]);
var inst_26631 = (state_26679[(12)]);
var inst_26641 = (state_26679[(2)]);
var inst_26642 = (inst_26634 + (1));
var tmp26688 = inst_26633;
var tmp26689 = inst_26632;
var tmp26690 = inst_26631;
var inst_26631__$1 = tmp26690;
var inst_26632__$1 = tmp26689;
var inst_26633__$1 = tmp26688;
var inst_26634__$1 = inst_26642;
var state_26679__$1 = (function (){var statearr_26693 = state_26679;
(statearr_26693[(8)] = inst_26633__$1);

(statearr_26693[(14)] = inst_26641);

(statearr_26693[(10)] = inst_26632__$1);

(statearr_26693[(11)] = inst_26634__$1);

(statearr_26693[(12)] = inst_26631__$1);

return statearr_26693;
})();
var statearr_26694_26729 = state_26679__$1;
(statearr_26694_26729[(2)] = null);

(statearr_26694_26729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (22))){
var state_26679__$1 = state_26679;
var statearr_26695_26730 = state_26679__$1;
(statearr_26695_26730[(2)] = null);

(statearr_26695_26730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (6))){
var inst_26620 = (state_26679[(13)]);
var inst_26629 = f.call(null,inst_26620);
var inst_26630 = cljs.core.seq.call(null,inst_26629);
var inst_26631 = inst_26630;
var inst_26632 = null;
var inst_26633 = (0);
var inst_26634 = (0);
var state_26679__$1 = (function (){var statearr_26696 = state_26679;
(statearr_26696[(8)] = inst_26633);

(statearr_26696[(10)] = inst_26632);

(statearr_26696[(11)] = inst_26634);

(statearr_26696[(12)] = inst_26631);

return statearr_26696;
})();
var statearr_26697_26731 = state_26679__$1;
(statearr_26697_26731[(2)] = null);

(statearr_26697_26731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (17))){
var inst_26645 = (state_26679[(7)]);
var inst_26649 = cljs.core.chunk_first.call(null,inst_26645);
var inst_26650 = cljs.core.chunk_rest.call(null,inst_26645);
var inst_26651 = cljs.core.count.call(null,inst_26649);
var inst_26631 = inst_26650;
var inst_26632 = inst_26649;
var inst_26633 = inst_26651;
var inst_26634 = (0);
var state_26679__$1 = (function (){var statearr_26698 = state_26679;
(statearr_26698[(8)] = inst_26633);

(statearr_26698[(10)] = inst_26632);

(statearr_26698[(11)] = inst_26634);

(statearr_26698[(12)] = inst_26631);

return statearr_26698;
})();
var statearr_26699_26732 = state_26679__$1;
(statearr_26699_26732[(2)] = null);

(statearr_26699_26732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (3))){
var inst_26677 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26679__$1,inst_26677);
} else {
if((state_val_26680 === (12))){
var inst_26665 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26700_26733 = state_26679__$1;
(statearr_26700_26733[(2)] = inst_26665);

(statearr_26700_26733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (2))){
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26679__$1,(4),in$);
} else {
if((state_val_26680 === (23))){
var inst_26673 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26701_26734 = state_26679__$1;
(statearr_26701_26734[(2)] = inst_26673);

(statearr_26701_26734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (19))){
var inst_26660 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26702_26735 = state_26679__$1;
(statearr_26702_26735[(2)] = inst_26660);

(statearr_26702_26735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (11))){
var inst_26645 = (state_26679[(7)]);
var inst_26631 = (state_26679[(12)]);
var inst_26645__$1 = cljs.core.seq.call(null,inst_26631);
var state_26679__$1 = (function (){var statearr_26703 = state_26679;
(statearr_26703[(7)] = inst_26645__$1);

return statearr_26703;
})();
if(inst_26645__$1){
var statearr_26704_26736 = state_26679__$1;
(statearr_26704_26736[(1)] = (14));

} else {
var statearr_26705_26737 = state_26679__$1;
(statearr_26705_26737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (9))){
var inst_26667 = (state_26679[(2)]);
var inst_26668 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26679__$1 = (function (){var statearr_26706 = state_26679;
(statearr_26706[(15)] = inst_26667);

return statearr_26706;
})();
if(cljs.core.truth_(inst_26668)){
var statearr_26707_26738 = state_26679__$1;
(statearr_26707_26738[(1)] = (21));

} else {
var statearr_26708_26739 = state_26679__$1;
(statearr_26708_26739[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (5))){
var inst_26623 = cljs.core.async.close_BANG_.call(null,out);
var state_26679__$1 = state_26679;
var statearr_26709_26740 = state_26679__$1;
(statearr_26709_26740[(2)] = inst_26623);

(statearr_26709_26740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (14))){
var inst_26645 = (state_26679[(7)]);
var inst_26647 = cljs.core.chunked_seq_QMARK_.call(null,inst_26645);
var state_26679__$1 = state_26679;
if(inst_26647){
var statearr_26710_26741 = state_26679__$1;
(statearr_26710_26741[(1)] = (17));

} else {
var statearr_26711_26742 = state_26679__$1;
(statearr_26711_26742[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (16))){
var inst_26663 = (state_26679[(2)]);
var state_26679__$1 = state_26679;
var statearr_26712_26743 = state_26679__$1;
(statearr_26712_26743[(2)] = inst_26663);

(statearr_26712_26743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26680 === (10))){
var inst_26632 = (state_26679[(10)]);
var inst_26634 = (state_26679[(11)]);
var inst_26639 = cljs.core._nth.call(null,inst_26632,inst_26634);
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26679__$1,(13),out,inst_26639);
} else {
if((state_val_26680 === (18))){
var inst_26645 = (state_26679[(7)]);
var inst_26654 = cljs.core.first.call(null,inst_26645);
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26679__$1,(20),out,inst_26654);
} else {
if((state_val_26680 === (8))){
var inst_26633 = (state_26679[(8)]);
var inst_26634 = (state_26679[(11)]);
var inst_26636 = (inst_26634 < inst_26633);
var inst_26637 = inst_26636;
var state_26679__$1 = state_26679;
if(cljs.core.truth_(inst_26637)){
var statearr_26713_26744 = state_26679__$1;
(statearr_26713_26744[(1)] = (10));

} else {
var statearr_26714_26745 = state_26679__$1;
(statearr_26714_26745[(1)] = (11));

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
}
}
}
}
}
}
});})(c__24244__auto__))
;
return ((function (switch__24132__auto__,c__24244__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24133__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24133__auto____0 = (function (){
var statearr_26718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26718[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24133__auto__);

(statearr_26718[(1)] = (1));

return statearr_26718;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24133__auto____1 = (function (state_26679){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object)){
var ex__24136__auto__ = e26719;
var statearr_26720_26746 = state_26679;
(statearr_26720_26746[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26747 = state_26679;
state_26679 = G__26747;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24133__auto__ = function(state_26679){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24133__auto____1.call(this,state_26679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24133__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24133__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__))
})();
var state__24246__auto__ = (function (){var statearr_26721 = f__24245__auto__.call(null);
(statearr_26721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_26721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__))
);

return c__24244__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26748 = [];
var len__22073__auto___26751 = arguments.length;
var i__22074__auto___26752 = (0);
while(true){
if((i__22074__auto___26752 < len__22073__auto___26751)){
args26748.push((arguments[i__22074__auto___26752]));

var G__26753 = (i__22074__auto___26752 + (1));
i__22074__auto___26752 = G__26753;
continue;
} else {
}
break;
}

var G__26750 = args26748.length;
switch (G__26750) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26748.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26755 = [];
var len__22073__auto___26758 = arguments.length;
var i__22074__auto___26759 = (0);
while(true){
if((i__22074__auto___26759 < len__22073__auto___26758)){
args26755.push((arguments[i__22074__auto___26759]));

var G__26760 = (i__22074__auto___26759 + (1));
i__22074__auto___26759 = G__26760;
continue;
} else {
}
break;
}

var G__26757 = args26755.length;
switch (G__26757) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26755.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26762 = [];
var len__22073__auto___26813 = arguments.length;
var i__22074__auto___26814 = (0);
while(true){
if((i__22074__auto___26814 < len__22073__auto___26813)){
args26762.push((arguments[i__22074__auto___26814]));

var G__26815 = (i__22074__auto___26814 + (1));
i__22074__auto___26814 = G__26815;
continue;
} else {
}
break;
}

var G__26764 = args26762.length;
switch (G__26764) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26762.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24244__auto___26817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26817,out){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26817,out){
return (function (state_26788){
var state_val_26789 = (state_26788[(1)]);
if((state_val_26789 === (7))){
var inst_26783 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26790_26818 = state_26788__$1;
(statearr_26790_26818[(2)] = inst_26783);

(statearr_26790_26818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (1))){
var inst_26765 = null;
var state_26788__$1 = (function (){var statearr_26791 = state_26788;
(statearr_26791[(7)] = inst_26765);

return statearr_26791;
})();
var statearr_26792_26819 = state_26788__$1;
(statearr_26792_26819[(2)] = null);

(statearr_26792_26819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (4))){
var inst_26768 = (state_26788[(8)]);
var inst_26768__$1 = (state_26788[(2)]);
var inst_26769 = (inst_26768__$1 == null);
var inst_26770 = cljs.core.not.call(null,inst_26769);
var state_26788__$1 = (function (){var statearr_26793 = state_26788;
(statearr_26793[(8)] = inst_26768__$1);

return statearr_26793;
})();
if(inst_26770){
var statearr_26794_26820 = state_26788__$1;
(statearr_26794_26820[(1)] = (5));

} else {
var statearr_26795_26821 = state_26788__$1;
(statearr_26795_26821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (6))){
var state_26788__$1 = state_26788;
var statearr_26796_26822 = state_26788__$1;
(statearr_26796_26822[(2)] = null);

(statearr_26796_26822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (3))){
var inst_26785 = (state_26788[(2)]);
var inst_26786 = cljs.core.async.close_BANG_.call(null,out);
var state_26788__$1 = (function (){var statearr_26797 = state_26788;
(statearr_26797[(9)] = inst_26785);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26788__$1,inst_26786);
} else {
if((state_val_26789 === (2))){
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26788__$1,(4),ch);
} else {
if((state_val_26789 === (11))){
var inst_26768 = (state_26788[(8)]);
var inst_26777 = (state_26788[(2)]);
var inst_26765 = inst_26768;
var state_26788__$1 = (function (){var statearr_26798 = state_26788;
(statearr_26798[(10)] = inst_26777);

(statearr_26798[(7)] = inst_26765);

return statearr_26798;
})();
var statearr_26799_26823 = state_26788__$1;
(statearr_26799_26823[(2)] = null);

(statearr_26799_26823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (9))){
var inst_26768 = (state_26788[(8)]);
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26788__$1,(11),out,inst_26768);
} else {
if((state_val_26789 === (5))){
var inst_26768 = (state_26788[(8)]);
var inst_26765 = (state_26788[(7)]);
var inst_26772 = cljs.core._EQ_.call(null,inst_26768,inst_26765);
var state_26788__$1 = state_26788;
if(inst_26772){
var statearr_26801_26824 = state_26788__$1;
(statearr_26801_26824[(1)] = (8));

} else {
var statearr_26802_26825 = state_26788__$1;
(statearr_26802_26825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (10))){
var inst_26780 = (state_26788[(2)]);
var state_26788__$1 = state_26788;
var statearr_26803_26826 = state_26788__$1;
(statearr_26803_26826[(2)] = inst_26780);

(statearr_26803_26826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26789 === (8))){
var inst_26765 = (state_26788[(7)]);
var tmp26800 = inst_26765;
var inst_26765__$1 = tmp26800;
var state_26788__$1 = (function (){var statearr_26804 = state_26788;
(statearr_26804[(7)] = inst_26765__$1);

return statearr_26804;
})();
var statearr_26805_26827 = state_26788__$1;
(statearr_26805_26827[(2)] = null);

(statearr_26805_26827[(1)] = (2));


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
});})(c__24244__auto___26817,out))
;
return ((function (switch__24132__auto__,c__24244__auto___26817,out){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26809[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26809[(1)] = (1));

return statearr_26809;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26788){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26810){if((e26810 instanceof Object)){
var ex__24136__auto__ = e26810;
var statearr_26811_26828 = state_26788;
(statearr_26811_26828[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26829 = state_26788;
state_26788 = G__26829;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26817,out))
})();
var state__24246__auto__ = (function (){var statearr_26812 = f__24245__auto__.call(null);
(statearr_26812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26817);

return statearr_26812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26817,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26830 = [];
var len__22073__auto___26900 = arguments.length;
var i__22074__auto___26901 = (0);
while(true){
if((i__22074__auto___26901 < len__22073__auto___26900)){
args26830.push((arguments[i__22074__auto___26901]));

var G__26902 = (i__22074__auto___26901 + (1));
i__22074__auto___26901 = G__26902;
continue;
} else {
}
break;
}

var G__26832 = args26830.length;
switch (G__26832) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26830.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24244__auto___26904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26904,out){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26904,out){
return (function (state_26870){
var state_val_26871 = (state_26870[(1)]);
if((state_val_26871 === (7))){
var inst_26866 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
var statearr_26872_26905 = state_26870__$1;
(statearr_26872_26905[(2)] = inst_26866);

(statearr_26872_26905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (1))){
var inst_26833 = (new Array(n));
var inst_26834 = inst_26833;
var inst_26835 = (0);
var state_26870__$1 = (function (){var statearr_26873 = state_26870;
(statearr_26873[(7)] = inst_26834);

(statearr_26873[(8)] = inst_26835);

return statearr_26873;
})();
var statearr_26874_26906 = state_26870__$1;
(statearr_26874_26906[(2)] = null);

(statearr_26874_26906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (4))){
var inst_26838 = (state_26870[(9)]);
var inst_26838__$1 = (state_26870[(2)]);
var inst_26839 = (inst_26838__$1 == null);
var inst_26840 = cljs.core.not.call(null,inst_26839);
var state_26870__$1 = (function (){var statearr_26875 = state_26870;
(statearr_26875[(9)] = inst_26838__$1);

return statearr_26875;
})();
if(inst_26840){
var statearr_26876_26907 = state_26870__$1;
(statearr_26876_26907[(1)] = (5));

} else {
var statearr_26877_26908 = state_26870__$1;
(statearr_26877_26908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (15))){
var inst_26860 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
var statearr_26878_26909 = state_26870__$1;
(statearr_26878_26909[(2)] = inst_26860);

(statearr_26878_26909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (13))){
var state_26870__$1 = state_26870;
var statearr_26879_26910 = state_26870__$1;
(statearr_26879_26910[(2)] = null);

(statearr_26879_26910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (6))){
var inst_26835 = (state_26870[(8)]);
var inst_26856 = (inst_26835 > (0));
var state_26870__$1 = state_26870;
if(cljs.core.truth_(inst_26856)){
var statearr_26880_26911 = state_26870__$1;
(statearr_26880_26911[(1)] = (12));

} else {
var statearr_26881_26912 = state_26870__$1;
(statearr_26881_26912[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (3))){
var inst_26868 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26870__$1,inst_26868);
} else {
if((state_val_26871 === (12))){
var inst_26834 = (state_26870[(7)]);
var inst_26858 = cljs.core.vec.call(null,inst_26834);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26870__$1,(15),out,inst_26858);
} else {
if((state_val_26871 === (2))){
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26870__$1,(4),ch);
} else {
if((state_val_26871 === (11))){
var inst_26850 = (state_26870[(2)]);
var inst_26851 = (new Array(n));
var inst_26834 = inst_26851;
var inst_26835 = (0);
var state_26870__$1 = (function (){var statearr_26882 = state_26870;
(statearr_26882[(7)] = inst_26834);

(statearr_26882[(10)] = inst_26850);

(statearr_26882[(8)] = inst_26835);

return statearr_26882;
})();
var statearr_26883_26913 = state_26870__$1;
(statearr_26883_26913[(2)] = null);

(statearr_26883_26913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (9))){
var inst_26834 = (state_26870[(7)]);
var inst_26848 = cljs.core.vec.call(null,inst_26834);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26870__$1,(11),out,inst_26848);
} else {
if((state_val_26871 === (5))){
var inst_26843 = (state_26870[(11)]);
var inst_26834 = (state_26870[(7)]);
var inst_26838 = (state_26870[(9)]);
var inst_26835 = (state_26870[(8)]);
var inst_26842 = (inst_26834[inst_26835] = inst_26838);
var inst_26843__$1 = (inst_26835 + (1));
var inst_26844 = (inst_26843__$1 < n);
var state_26870__$1 = (function (){var statearr_26884 = state_26870;
(statearr_26884[(11)] = inst_26843__$1);

(statearr_26884[(12)] = inst_26842);

return statearr_26884;
})();
if(cljs.core.truth_(inst_26844)){
var statearr_26885_26914 = state_26870__$1;
(statearr_26885_26914[(1)] = (8));

} else {
var statearr_26886_26915 = state_26870__$1;
(statearr_26886_26915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (14))){
var inst_26863 = (state_26870[(2)]);
var inst_26864 = cljs.core.async.close_BANG_.call(null,out);
var state_26870__$1 = (function (){var statearr_26888 = state_26870;
(statearr_26888[(13)] = inst_26863);

return statearr_26888;
})();
var statearr_26889_26916 = state_26870__$1;
(statearr_26889_26916[(2)] = inst_26864);

(statearr_26889_26916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (10))){
var inst_26854 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
var statearr_26890_26917 = state_26870__$1;
(statearr_26890_26917[(2)] = inst_26854);

(statearr_26890_26917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (8))){
var inst_26843 = (state_26870[(11)]);
var inst_26834 = (state_26870[(7)]);
var tmp26887 = inst_26834;
var inst_26834__$1 = tmp26887;
var inst_26835 = inst_26843;
var state_26870__$1 = (function (){var statearr_26891 = state_26870;
(statearr_26891[(7)] = inst_26834__$1);

(statearr_26891[(8)] = inst_26835);

return statearr_26891;
})();
var statearr_26892_26918 = state_26870__$1;
(statearr_26892_26918[(2)] = null);

(statearr_26892_26918[(1)] = (2));


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
});})(c__24244__auto___26904,out))
;
return ((function (switch__24132__auto__,c__24244__auto___26904,out){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26896[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26896[(1)] = (1));

return statearr_26896;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26870){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26897){if((e26897 instanceof Object)){
var ex__24136__auto__ = e26897;
var statearr_26898_26919 = state_26870;
(statearr_26898_26919[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26920 = state_26870;
state_26870 = G__26920;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26904,out))
})();
var state__24246__auto__ = (function (){var statearr_26899 = f__24245__auto__.call(null);
(statearr_26899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26904);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26904,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26921 = [];
var len__22073__auto___26995 = arguments.length;
var i__22074__auto___26996 = (0);
while(true){
if((i__22074__auto___26996 < len__22073__auto___26995)){
args26921.push((arguments[i__22074__auto___26996]));

var G__26997 = (i__22074__auto___26996 + (1));
i__22074__auto___26996 = G__26997;
continue;
} else {
}
break;
}

var G__26923 = args26921.length;
switch (G__26923) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26921.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24244__auto___26999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___26999,out){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___26999,out){
return (function (state_26965){
var state_val_26966 = (state_26965[(1)]);
if((state_val_26966 === (7))){
var inst_26961 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
var statearr_26967_27000 = state_26965__$1;
(statearr_26967_27000[(2)] = inst_26961);

(statearr_26967_27000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (1))){
var inst_26924 = [];
var inst_26925 = inst_26924;
var inst_26926 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26965__$1 = (function (){var statearr_26968 = state_26965;
(statearr_26968[(7)] = inst_26925);

(statearr_26968[(8)] = inst_26926);

return statearr_26968;
})();
var statearr_26969_27001 = state_26965__$1;
(statearr_26969_27001[(2)] = null);

(statearr_26969_27001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (4))){
var inst_26929 = (state_26965[(9)]);
var inst_26929__$1 = (state_26965[(2)]);
var inst_26930 = (inst_26929__$1 == null);
var inst_26931 = cljs.core.not.call(null,inst_26930);
var state_26965__$1 = (function (){var statearr_26970 = state_26965;
(statearr_26970[(9)] = inst_26929__$1);

return statearr_26970;
})();
if(inst_26931){
var statearr_26971_27002 = state_26965__$1;
(statearr_26971_27002[(1)] = (5));

} else {
var statearr_26972_27003 = state_26965__$1;
(statearr_26972_27003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (15))){
var inst_26955 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
var statearr_26973_27004 = state_26965__$1;
(statearr_26973_27004[(2)] = inst_26955);

(statearr_26973_27004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (13))){
var state_26965__$1 = state_26965;
var statearr_26974_27005 = state_26965__$1;
(statearr_26974_27005[(2)] = null);

(statearr_26974_27005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (6))){
var inst_26925 = (state_26965[(7)]);
var inst_26950 = inst_26925.length;
var inst_26951 = (inst_26950 > (0));
var state_26965__$1 = state_26965;
if(cljs.core.truth_(inst_26951)){
var statearr_26975_27006 = state_26965__$1;
(statearr_26975_27006[(1)] = (12));

} else {
var statearr_26976_27007 = state_26965__$1;
(statearr_26976_27007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (3))){
var inst_26963 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26965__$1,inst_26963);
} else {
if((state_val_26966 === (12))){
var inst_26925 = (state_26965[(7)]);
var inst_26953 = cljs.core.vec.call(null,inst_26925);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26965__$1,(15),out,inst_26953);
} else {
if((state_val_26966 === (2))){
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26965__$1,(4),ch);
} else {
if((state_val_26966 === (11))){
var inst_26933 = (state_26965[(10)]);
var inst_26929 = (state_26965[(9)]);
var inst_26943 = (state_26965[(2)]);
var inst_26944 = [];
var inst_26945 = inst_26944.push(inst_26929);
var inst_26925 = inst_26944;
var inst_26926 = inst_26933;
var state_26965__$1 = (function (){var statearr_26977 = state_26965;
(statearr_26977[(7)] = inst_26925);

(statearr_26977[(8)] = inst_26926);

(statearr_26977[(11)] = inst_26943);

(statearr_26977[(12)] = inst_26945);

return statearr_26977;
})();
var statearr_26978_27008 = state_26965__$1;
(statearr_26978_27008[(2)] = null);

(statearr_26978_27008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (9))){
var inst_26925 = (state_26965[(7)]);
var inst_26941 = cljs.core.vec.call(null,inst_26925);
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26965__$1,(11),out,inst_26941);
} else {
if((state_val_26966 === (5))){
var inst_26926 = (state_26965[(8)]);
var inst_26933 = (state_26965[(10)]);
var inst_26929 = (state_26965[(9)]);
var inst_26933__$1 = f.call(null,inst_26929);
var inst_26934 = cljs.core._EQ_.call(null,inst_26933__$1,inst_26926);
var inst_26935 = cljs.core.keyword_identical_QMARK_.call(null,inst_26926,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26936 = (inst_26934) || (inst_26935);
var state_26965__$1 = (function (){var statearr_26979 = state_26965;
(statearr_26979[(10)] = inst_26933__$1);

return statearr_26979;
})();
if(cljs.core.truth_(inst_26936)){
var statearr_26980_27009 = state_26965__$1;
(statearr_26980_27009[(1)] = (8));

} else {
var statearr_26981_27010 = state_26965__$1;
(statearr_26981_27010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (14))){
var inst_26958 = (state_26965[(2)]);
var inst_26959 = cljs.core.async.close_BANG_.call(null,out);
var state_26965__$1 = (function (){var statearr_26983 = state_26965;
(statearr_26983[(13)] = inst_26958);

return statearr_26983;
})();
var statearr_26984_27011 = state_26965__$1;
(statearr_26984_27011[(2)] = inst_26959);

(statearr_26984_27011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (10))){
var inst_26948 = (state_26965[(2)]);
var state_26965__$1 = state_26965;
var statearr_26985_27012 = state_26965__$1;
(statearr_26985_27012[(2)] = inst_26948);

(statearr_26985_27012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26966 === (8))){
var inst_26925 = (state_26965[(7)]);
var inst_26933 = (state_26965[(10)]);
var inst_26929 = (state_26965[(9)]);
var inst_26938 = inst_26925.push(inst_26929);
var tmp26982 = inst_26925;
var inst_26925__$1 = tmp26982;
var inst_26926 = inst_26933;
var state_26965__$1 = (function (){var statearr_26986 = state_26965;
(statearr_26986[(7)] = inst_26925__$1);

(statearr_26986[(8)] = inst_26926);

(statearr_26986[(14)] = inst_26938);

return statearr_26986;
})();
var statearr_26987_27013 = state_26965__$1;
(statearr_26987_27013[(2)] = null);

(statearr_26987_27013[(1)] = (2));


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
});})(c__24244__auto___26999,out))
;
return ((function (switch__24132__auto__,c__24244__auto___26999,out){
return (function() {
var cljs$core$async$state_machine__24133__auto__ = null;
var cljs$core$async$state_machine__24133__auto____0 = (function (){
var statearr_26991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26991[(0)] = cljs$core$async$state_machine__24133__auto__);

(statearr_26991[(1)] = (1));

return statearr_26991;
});
var cljs$core$async$state_machine__24133__auto____1 = (function (state_26965){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_26965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e26992){if((e26992 instanceof Object)){
var ex__24136__auto__ = e26992;
var statearr_26993_27014 = state_26965;
(statearr_26993_27014[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26965;
state_26965 = G__27015;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
cljs$core$async$state_machine__24133__auto__ = function(state_26965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24133__auto____1.call(this,state_26965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24133__auto____0;
cljs$core$async$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24133__auto____1;
return cljs$core$async$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___26999,out))
})();
var state__24246__auto__ = (function (){var statearr_26994 = f__24245__auto__.call(null);
(statearr_26994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___26999);

return statearr_26994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___26999,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
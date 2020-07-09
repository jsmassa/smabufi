// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21015__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21015__auto__){
return or__21015__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21015__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27138_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27138_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27143 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27144 = null;
var count__27145 = (0);
var i__27146 = (0);
while(true){
if((i__27146 < count__27145)){
var n = cljs.core._nth.call(null,chunk__27144,i__27146);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27147 = seq__27143;
var G__27148 = chunk__27144;
var G__27149 = count__27145;
var G__27150 = (i__27146 + (1));
seq__27143 = G__27147;
chunk__27144 = G__27148;
count__27145 = G__27149;
i__27146 = G__27150;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27143);
if(temp__4425__auto__){
var seq__27143__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27143__$1)){
var c__21818__auto__ = cljs.core.chunk_first.call(null,seq__27143__$1);
var G__27151 = cljs.core.chunk_rest.call(null,seq__27143__$1);
var G__27152 = c__21818__auto__;
var G__27153 = cljs.core.count.call(null,c__21818__auto__);
var G__27154 = (0);
seq__27143 = G__27151;
chunk__27144 = G__27152;
count__27145 = G__27153;
i__27146 = G__27154;
continue;
} else {
var n = cljs.core.first.call(null,seq__27143__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27155 = cljs.core.next.call(null,seq__27143__$1);
var G__27156 = null;
var G__27157 = (0);
var G__27158 = (0);
seq__27143 = G__27155;
chunk__27144 = G__27156;
count__27145 = G__27157;
i__27146 = G__27158;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27197_27204 = cljs.core.seq.call(null,deps);
var chunk__27198_27205 = null;
var count__27199_27206 = (0);
var i__27200_27207 = (0);
while(true){
if((i__27200_27207 < count__27199_27206)){
var dep_27208 = cljs.core._nth.call(null,chunk__27198_27205,i__27200_27207);
topo_sort_helper_STAR_.call(null,dep_27208,(depth + (1)),state);

var G__27209 = seq__27197_27204;
var G__27210 = chunk__27198_27205;
var G__27211 = count__27199_27206;
var G__27212 = (i__27200_27207 + (1));
seq__27197_27204 = G__27209;
chunk__27198_27205 = G__27210;
count__27199_27206 = G__27211;
i__27200_27207 = G__27212;
continue;
} else {
var temp__4425__auto___27213 = cljs.core.seq.call(null,seq__27197_27204);
if(temp__4425__auto___27213){
var seq__27197_27214__$1 = temp__4425__auto___27213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27197_27214__$1)){
var c__21818__auto___27215 = cljs.core.chunk_first.call(null,seq__27197_27214__$1);
var G__27216 = cljs.core.chunk_rest.call(null,seq__27197_27214__$1);
var G__27217 = c__21818__auto___27215;
var G__27218 = cljs.core.count.call(null,c__21818__auto___27215);
var G__27219 = (0);
seq__27197_27204 = G__27216;
chunk__27198_27205 = G__27217;
count__27199_27206 = G__27218;
i__27200_27207 = G__27219;
continue;
} else {
var dep_27220 = cljs.core.first.call(null,seq__27197_27214__$1);
topo_sort_helper_STAR_.call(null,dep_27220,(depth + (1)),state);

var G__27221 = cljs.core.next.call(null,seq__27197_27214__$1);
var G__27222 = null;
var G__27223 = (0);
var G__27224 = (0);
seq__27197_27204 = G__27221;
chunk__27198_27205 = G__27222;
count__27199_27206 = G__27223;
i__27200_27207 = G__27224;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27201){
var vec__27203 = p__27201;
var x = cljs.core.nth.call(null,vec__27203,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27203,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27203,x,xs,get_deps__$1){
return (function (p1__27159_SHARP_){
return clojure.set.difference.call(null,p1__27159_SHARP_,x);
});})(vec__27203,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27237 = cljs.core.seq.call(null,provides);
var chunk__27238 = null;
var count__27239 = (0);
var i__27240 = (0);
while(true){
if((i__27240 < count__27239)){
var prov = cljs.core._nth.call(null,chunk__27238,i__27240);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27241_27249 = cljs.core.seq.call(null,requires);
var chunk__27242_27250 = null;
var count__27243_27251 = (0);
var i__27244_27252 = (0);
while(true){
if((i__27244_27252 < count__27243_27251)){
var req_27253 = cljs.core._nth.call(null,chunk__27242_27250,i__27244_27252);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27253,prov);

var G__27254 = seq__27241_27249;
var G__27255 = chunk__27242_27250;
var G__27256 = count__27243_27251;
var G__27257 = (i__27244_27252 + (1));
seq__27241_27249 = G__27254;
chunk__27242_27250 = G__27255;
count__27243_27251 = G__27256;
i__27244_27252 = G__27257;
continue;
} else {
var temp__4425__auto___27258 = cljs.core.seq.call(null,seq__27241_27249);
if(temp__4425__auto___27258){
var seq__27241_27259__$1 = temp__4425__auto___27258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27241_27259__$1)){
var c__21818__auto___27260 = cljs.core.chunk_first.call(null,seq__27241_27259__$1);
var G__27261 = cljs.core.chunk_rest.call(null,seq__27241_27259__$1);
var G__27262 = c__21818__auto___27260;
var G__27263 = cljs.core.count.call(null,c__21818__auto___27260);
var G__27264 = (0);
seq__27241_27249 = G__27261;
chunk__27242_27250 = G__27262;
count__27243_27251 = G__27263;
i__27244_27252 = G__27264;
continue;
} else {
var req_27265 = cljs.core.first.call(null,seq__27241_27259__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27265,prov);

var G__27266 = cljs.core.next.call(null,seq__27241_27259__$1);
var G__27267 = null;
var G__27268 = (0);
var G__27269 = (0);
seq__27241_27249 = G__27266;
chunk__27242_27250 = G__27267;
count__27243_27251 = G__27268;
i__27244_27252 = G__27269;
continue;
}
} else {
}
}
break;
}

var G__27270 = seq__27237;
var G__27271 = chunk__27238;
var G__27272 = count__27239;
var G__27273 = (i__27240 + (1));
seq__27237 = G__27270;
chunk__27238 = G__27271;
count__27239 = G__27272;
i__27240 = G__27273;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27237);
if(temp__4425__auto__){
var seq__27237__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27237__$1)){
var c__21818__auto__ = cljs.core.chunk_first.call(null,seq__27237__$1);
var G__27274 = cljs.core.chunk_rest.call(null,seq__27237__$1);
var G__27275 = c__21818__auto__;
var G__27276 = cljs.core.count.call(null,c__21818__auto__);
var G__27277 = (0);
seq__27237 = G__27274;
chunk__27238 = G__27275;
count__27239 = G__27276;
i__27240 = G__27277;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27237__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27245_27278 = cljs.core.seq.call(null,requires);
var chunk__27246_27279 = null;
var count__27247_27280 = (0);
var i__27248_27281 = (0);
while(true){
if((i__27248_27281 < count__27247_27280)){
var req_27282 = cljs.core._nth.call(null,chunk__27246_27279,i__27248_27281);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27282,prov);

var G__27283 = seq__27245_27278;
var G__27284 = chunk__27246_27279;
var G__27285 = count__27247_27280;
var G__27286 = (i__27248_27281 + (1));
seq__27245_27278 = G__27283;
chunk__27246_27279 = G__27284;
count__27247_27280 = G__27285;
i__27248_27281 = G__27286;
continue;
} else {
var temp__4425__auto___27287__$1 = cljs.core.seq.call(null,seq__27245_27278);
if(temp__4425__auto___27287__$1){
var seq__27245_27288__$1 = temp__4425__auto___27287__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27245_27288__$1)){
var c__21818__auto___27289 = cljs.core.chunk_first.call(null,seq__27245_27288__$1);
var G__27290 = cljs.core.chunk_rest.call(null,seq__27245_27288__$1);
var G__27291 = c__21818__auto___27289;
var G__27292 = cljs.core.count.call(null,c__21818__auto___27289);
var G__27293 = (0);
seq__27245_27278 = G__27290;
chunk__27246_27279 = G__27291;
count__27247_27280 = G__27292;
i__27248_27281 = G__27293;
continue;
} else {
var req_27294 = cljs.core.first.call(null,seq__27245_27288__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27294,prov);

var G__27295 = cljs.core.next.call(null,seq__27245_27288__$1);
var G__27296 = null;
var G__27297 = (0);
var G__27298 = (0);
seq__27245_27278 = G__27295;
chunk__27246_27279 = G__27296;
count__27247_27280 = G__27297;
i__27248_27281 = G__27298;
continue;
}
} else {
}
}
break;
}

var G__27299 = cljs.core.next.call(null,seq__27237__$1);
var G__27300 = null;
var G__27301 = (0);
var G__27302 = (0);
seq__27237 = G__27299;
chunk__27238 = G__27300;
count__27239 = G__27301;
i__27240 = G__27302;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27307_27311 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27308_27312 = null;
var count__27309_27313 = (0);
var i__27310_27314 = (0);
while(true){
if((i__27310_27314 < count__27309_27313)){
var ns_27315 = cljs.core._nth.call(null,chunk__27308_27312,i__27310_27314);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27315);

var G__27316 = seq__27307_27311;
var G__27317 = chunk__27308_27312;
var G__27318 = count__27309_27313;
var G__27319 = (i__27310_27314 + (1));
seq__27307_27311 = G__27316;
chunk__27308_27312 = G__27317;
count__27309_27313 = G__27318;
i__27310_27314 = G__27319;
continue;
} else {
var temp__4425__auto___27320 = cljs.core.seq.call(null,seq__27307_27311);
if(temp__4425__auto___27320){
var seq__27307_27321__$1 = temp__4425__auto___27320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27307_27321__$1)){
var c__21818__auto___27322 = cljs.core.chunk_first.call(null,seq__27307_27321__$1);
var G__27323 = cljs.core.chunk_rest.call(null,seq__27307_27321__$1);
var G__27324 = c__21818__auto___27322;
var G__27325 = cljs.core.count.call(null,c__21818__auto___27322);
var G__27326 = (0);
seq__27307_27311 = G__27323;
chunk__27308_27312 = G__27324;
count__27309_27313 = G__27325;
i__27310_27314 = G__27326;
continue;
} else {
var ns_27327 = cljs.core.first.call(null,seq__27307_27321__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27327);

var G__27328 = cljs.core.next.call(null,seq__27307_27321__$1);
var G__27329 = null;
var G__27330 = (0);
var G__27331 = (0);
seq__27307_27311 = G__27328;
chunk__27308_27312 = G__27329;
count__27309_27313 = G__27330;
i__27310_27314 = G__27331;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21015__auto__ = goog.require__;
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27332__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27333__i = 0, G__27333__a = new Array(arguments.length -  0);
while (G__27333__i < G__27333__a.length) {G__27333__a[G__27333__i] = arguments[G__27333__i + 0]; ++G__27333__i;}
  args = new cljs.core.IndexedSeq(G__27333__a,0);
} 
return G__27332__delegate.call(this,args);};
G__27332.cljs$lang$maxFixedArity = 0;
G__27332.cljs$lang$applyTo = (function (arglist__27334){
var args = cljs.core.seq(arglist__27334);
return G__27332__delegate(args);
});
G__27332.cljs$core$IFn$_invoke$arity$variadic = G__27332__delegate;
return G__27332;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27336 = cljs.core._EQ_;
var expr__27337 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27336.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27337))){
var path_parts = ((function (pred__27336,expr__27337){
return (function (p1__27335_SHARP_){
return clojure.string.split.call(null,p1__27335_SHARP_,/[\/\\]/);
});})(pred__27336,expr__27337))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27336,expr__27337){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27339){if((e27339 instanceof Error)){
var e = e27339;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27339;

}
}})());
});
;})(path_parts,sep,root,pred__27336,expr__27337))
} else {
if(cljs.core.truth_(pred__27336.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27337))){
return ((function (pred__27336,expr__27337){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27336,expr__27337){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27336,expr__27337))
);

return deferred.addErrback(((function (deferred,pred__27336,expr__27337){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27336,expr__27337))
);
});
;})(pred__27336,expr__27337))
} else {
return ((function (pred__27336,expr__27337){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27336,expr__27337))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27340,callback){
var map__27343 = p__27340;
var map__27343__$1 = ((((!((map__27343 == null)))?((((map__27343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27343):map__27343);
var file_msg = map__27343__$1;
var request_url = cljs.core.get.call(null,map__27343__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27343,map__27343__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27343,map__27343__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__){
return (function (state_27367){
var state_val_27368 = (state_27367[(1)]);
if((state_val_27368 === (7))){
var inst_27363 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
var statearr_27369_27389 = state_27367__$1;
(statearr_27369_27389[(2)] = inst_27363);

(statearr_27369_27389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (1))){
var state_27367__$1 = state_27367;
var statearr_27370_27390 = state_27367__$1;
(statearr_27370_27390[(2)] = null);

(statearr_27370_27390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (4))){
var inst_27347 = (state_27367[(7)]);
var inst_27347__$1 = (state_27367[(2)]);
var state_27367__$1 = (function (){var statearr_27371 = state_27367;
(statearr_27371[(7)] = inst_27347__$1);

return statearr_27371;
})();
if(cljs.core.truth_(inst_27347__$1)){
var statearr_27372_27391 = state_27367__$1;
(statearr_27372_27391[(1)] = (5));

} else {
var statearr_27373_27392 = state_27367__$1;
(statearr_27373_27392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (6))){
var state_27367__$1 = state_27367;
var statearr_27374_27393 = state_27367__$1;
(statearr_27374_27393[(2)] = null);

(statearr_27374_27393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (3))){
var inst_27365 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27367__$1,inst_27365);
} else {
if((state_val_27368 === (2))){
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27367__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27368 === (11))){
var inst_27359 = (state_27367[(2)]);
var state_27367__$1 = (function (){var statearr_27375 = state_27367;
(statearr_27375[(8)] = inst_27359);

return statearr_27375;
})();
var statearr_27376_27394 = state_27367__$1;
(statearr_27376_27394[(2)] = null);

(statearr_27376_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (9))){
var inst_27351 = (state_27367[(9)]);
var inst_27353 = (state_27367[(10)]);
var inst_27355 = inst_27353.call(null,inst_27351);
var state_27367__$1 = state_27367;
var statearr_27377_27395 = state_27367__$1;
(statearr_27377_27395[(2)] = inst_27355);

(statearr_27377_27395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (5))){
var inst_27347 = (state_27367[(7)]);
var inst_27349 = figwheel.client.file_reloading.blocking_load.call(null,inst_27347);
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27367__$1,(8),inst_27349);
} else {
if((state_val_27368 === (10))){
var inst_27351 = (state_27367[(9)]);
var inst_27357 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27351);
var state_27367__$1 = state_27367;
var statearr_27378_27396 = state_27367__$1;
(statearr_27378_27396[(2)] = inst_27357);

(statearr_27378_27396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27368 === (8))){
var inst_27353 = (state_27367[(10)]);
var inst_27347 = (state_27367[(7)]);
var inst_27351 = (state_27367[(2)]);
var inst_27352 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27353__$1 = cljs.core.get.call(null,inst_27352,inst_27347);
var state_27367__$1 = (function (){var statearr_27379 = state_27367;
(statearr_27379[(9)] = inst_27351);

(statearr_27379[(10)] = inst_27353__$1);

return statearr_27379;
})();
if(cljs.core.truth_(inst_27353__$1)){
var statearr_27380_27397 = state_27367__$1;
(statearr_27380_27397[(1)] = (9));

} else {
var statearr_27381_27398 = state_27367__$1;
(statearr_27381_27398[(1)] = (10));

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
});})(c__24244__auto__))
;
return ((function (switch__24132__auto__,c__24244__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24133__auto__ = null;
var figwheel$client$file_reloading$state_machine__24133__auto____0 = (function (){
var statearr_27385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27385[(0)] = figwheel$client$file_reloading$state_machine__24133__auto__);

(statearr_27385[(1)] = (1));

return statearr_27385;
});
var figwheel$client$file_reloading$state_machine__24133__auto____1 = (function (state_27367){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_27367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object)){
var ex__24136__auto__ = e27386;
var statearr_27387_27399 = state_27367;
(statearr_27387_27399[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27400 = state_27367;
state_27367 = G__27400;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24133__auto__ = function(state_27367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24133__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24133__auto____1.call(this,state_27367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24133__auto____0;
figwheel$client$file_reloading$state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24133__auto____1;
return figwheel$client$file_reloading$state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__))
})();
var state__24246__auto__ = (function (){var statearr_27388 = f__24245__auto__.call(null);
(statearr_27388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_27388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__))
);

return c__24244__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27401,callback){
var map__27404 = p__27401;
var map__27404__$1 = ((((!((map__27404 == null)))?((((map__27404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27404):map__27404);
var file_msg = map__27404__$1;
var namespace = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27404,map__27404__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27404,map__27404__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27406){
var map__27409 = p__27406;
var map__27409__$1 = ((((!((map__27409 == null)))?((((map__27409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27409):map__27409);
var file_msg = map__27409__$1;
var namespace = cljs.core.get.call(null,map__27409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21003__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21003__auto__){
var or__21015__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21015__auto__)){
return or__21015__auto__;
} else {
var or__21015__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21015__auto____$1)){
return or__21015__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21003__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27411,callback){
var map__27414 = p__27411;
var map__27414__$1 = ((((!((map__27414 == null)))?((((map__27414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27414):map__27414);
var file_msg = map__27414__$1;
var request_url = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24244__auto___27502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto___27502,out){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto___27502,out){
return (function (state_27484){
var state_val_27485 = (state_27484[(1)]);
if((state_val_27485 === (1))){
var inst_27462 = cljs.core.nth.call(null,files,(0),null);
var inst_27463 = cljs.core.nthnext.call(null,files,(1));
var inst_27464 = files;
var state_27484__$1 = (function (){var statearr_27486 = state_27484;
(statearr_27486[(7)] = inst_27462);

(statearr_27486[(8)] = inst_27463);

(statearr_27486[(9)] = inst_27464);

return statearr_27486;
})();
var statearr_27487_27503 = state_27484__$1;
(statearr_27487_27503[(2)] = null);

(statearr_27487_27503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (2))){
var inst_27467 = (state_27484[(10)]);
var inst_27464 = (state_27484[(9)]);
var inst_27467__$1 = cljs.core.nth.call(null,inst_27464,(0),null);
var inst_27468 = cljs.core.nthnext.call(null,inst_27464,(1));
var inst_27469 = (inst_27467__$1 == null);
var inst_27470 = cljs.core.not.call(null,inst_27469);
var state_27484__$1 = (function (){var statearr_27488 = state_27484;
(statearr_27488[(11)] = inst_27468);

(statearr_27488[(10)] = inst_27467__$1);

return statearr_27488;
})();
if(inst_27470){
var statearr_27489_27504 = state_27484__$1;
(statearr_27489_27504[(1)] = (4));

} else {
var statearr_27490_27505 = state_27484__$1;
(statearr_27490_27505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (3))){
var inst_27482 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27484__$1,inst_27482);
} else {
if((state_val_27485 === (4))){
var inst_27467 = (state_27484[(10)]);
var inst_27472 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27467);
var state_27484__$1 = state_27484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27484__$1,(7),inst_27472);
} else {
if((state_val_27485 === (5))){
var inst_27478 = cljs.core.async.close_BANG_.call(null,out);
var state_27484__$1 = state_27484;
var statearr_27491_27506 = state_27484__$1;
(statearr_27491_27506[(2)] = inst_27478);

(statearr_27491_27506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (6))){
var inst_27480 = (state_27484[(2)]);
var state_27484__$1 = state_27484;
var statearr_27492_27507 = state_27484__$1;
(statearr_27492_27507[(2)] = inst_27480);

(statearr_27492_27507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27485 === (7))){
var inst_27468 = (state_27484[(11)]);
var inst_27474 = (state_27484[(2)]);
var inst_27475 = cljs.core.async.put_BANG_.call(null,out,inst_27474);
var inst_27464 = inst_27468;
var state_27484__$1 = (function (){var statearr_27493 = state_27484;
(statearr_27493[(12)] = inst_27475);

(statearr_27493[(9)] = inst_27464);

return statearr_27493;
})();
var statearr_27494_27508 = state_27484__$1;
(statearr_27494_27508[(2)] = null);

(statearr_27494_27508[(1)] = (2));


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
});})(c__24244__auto___27502,out))
;
return ((function (switch__24132__auto__,c__24244__auto___27502,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto____0 = (function (){
var statearr_27498 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27498[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto__);

(statearr_27498[(1)] = (1));

return statearr_27498;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto____1 = (function (state_27484){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_27484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e27499){if((e27499 instanceof Object)){
var ex__24136__auto__ = e27499;
var statearr_27500_27509 = state_27484;
(statearr_27500_27509[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27510 = state_27484;
state_27484 = G__27510;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto__ = function(state_27484){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto____1.call(this,state_27484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto___27502,out))
})();
var state__24246__auto__ = (function (){var statearr_27501 = f__24245__auto__.call(null);
(statearr_27501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto___27502);

return statearr_27501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto___27502,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27511,opts){
var map__27515 = p__27511;
var map__27515__$1 = ((((!((map__27515 == null)))?((((map__27515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27515):map__27515);
var eval_body__$1 = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21003__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21003__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21003__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27517){var e = e27517;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27518_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27518_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27523){
var vec__27524 = p__27523;
var k = cljs.core.nth.call(null,vec__27524,(0),null);
var v = cljs.core.nth.call(null,vec__27524,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27525){
var vec__27526 = p__27525;
var k = cljs.core.nth.call(null,vec__27526,(0),null);
var v = cljs.core.nth.call(null,vec__27526,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27530,p__27531){
var map__27778 = p__27530;
var map__27778__$1 = ((((!((map__27778 == null)))?((((map__27778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27778):map__27778);
var opts = map__27778__$1;
var before_jsload = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27779 = p__27531;
var map__27779__$1 = ((((!((map__27779 == null)))?((((map__27779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27779):map__27779);
var msg = map__27779__$1;
var files = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27779__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24245__auto__ = (function (){var switch__24132__auto__ = ((function (c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27932){
var state_val_27933 = (state_27932[(1)]);
if((state_val_27933 === (7))){
var inst_27793 = (state_27932[(7)]);
var inst_27794 = (state_27932[(8)]);
var inst_27795 = (state_27932[(9)]);
var inst_27796 = (state_27932[(10)]);
var inst_27801 = cljs.core._nth.call(null,inst_27794,inst_27796);
var inst_27802 = figwheel.client.file_reloading.eval_body.call(null,inst_27801,opts);
var inst_27803 = (inst_27796 + (1));
var tmp27934 = inst_27793;
var tmp27935 = inst_27794;
var tmp27936 = inst_27795;
var inst_27793__$1 = tmp27934;
var inst_27794__$1 = tmp27935;
var inst_27795__$1 = tmp27936;
var inst_27796__$1 = inst_27803;
var state_27932__$1 = (function (){var statearr_27937 = state_27932;
(statearr_27937[(11)] = inst_27802);

(statearr_27937[(7)] = inst_27793__$1);

(statearr_27937[(8)] = inst_27794__$1);

(statearr_27937[(9)] = inst_27795__$1);

(statearr_27937[(10)] = inst_27796__$1);

return statearr_27937;
})();
var statearr_27938_28024 = state_27932__$1;
(statearr_27938_28024[(2)] = null);

(statearr_27938_28024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (20))){
var inst_27836 = (state_27932[(12)]);
var inst_27844 = figwheel.client.file_reloading.sort_files.call(null,inst_27836);
var state_27932__$1 = state_27932;
var statearr_27939_28025 = state_27932__$1;
(statearr_27939_28025[(2)] = inst_27844);

(statearr_27939_28025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (27))){
var state_27932__$1 = state_27932;
var statearr_27940_28026 = state_27932__$1;
(statearr_27940_28026[(2)] = null);

(statearr_27940_28026[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (1))){
var inst_27785 = (state_27932[(13)]);
var inst_27782 = before_jsload.call(null,files);
var inst_27783 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27784 = (function (){return ((function (inst_27785,inst_27782,inst_27783,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27527_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27527_SHARP_);
});
;})(inst_27785,inst_27782,inst_27783,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27785__$1 = cljs.core.filter.call(null,inst_27784,files);
var inst_27786 = cljs.core.not_empty.call(null,inst_27785__$1);
var state_27932__$1 = (function (){var statearr_27941 = state_27932;
(statearr_27941[(13)] = inst_27785__$1);

(statearr_27941[(14)] = inst_27782);

(statearr_27941[(15)] = inst_27783);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27786)){
var statearr_27942_28027 = state_27932__$1;
(statearr_27942_28027[(1)] = (2));

} else {
var statearr_27943_28028 = state_27932__$1;
(statearr_27943_28028[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (24))){
var state_27932__$1 = state_27932;
var statearr_27944_28029 = state_27932__$1;
(statearr_27944_28029[(2)] = null);

(statearr_27944_28029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (39))){
var inst_27886 = (state_27932[(16)]);
var state_27932__$1 = state_27932;
var statearr_27945_28030 = state_27932__$1;
(statearr_27945_28030[(2)] = inst_27886);

(statearr_27945_28030[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (46))){
var inst_27927 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
var statearr_27946_28031 = state_27932__$1;
(statearr_27946_28031[(2)] = inst_27927);

(statearr_27946_28031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (4))){
var inst_27830 = (state_27932[(2)]);
var inst_27831 = cljs.core.List.EMPTY;
var inst_27832 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27831);
var inst_27833 = (function (){return ((function (inst_27830,inst_27831,inst_27832,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27528_SHARP_){
var and__21003__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27528_SHARP_);
if(cljs.core.truth_(and__21003__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27528_SHARP_));
} else {
return and__21003__auto__;
}
});
;})(inst_27830,inst_27831,inst_27832,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27834 = cljs.core.filter.call(null,inst_27833,files);
var inst_27835 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27836 = cljs.core.concat.call(null,inst_27834,inst_27835);
var state_27932__$1 = (function (){var statearr_27947 = state_27932;
(statearr_27947[(12)] = inst_27836);

(statearr_27947[(17)] = inst_27830);

(statearr_27947[(18)] = inst_27832);

return statearr_27947;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27948_28032 = state_27932__$1;
(statearr_27948_28032[(1)] = (16));

} else {
var statearr_27949_28033 = state_27932__$1;
(statearr_27949_28033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (15))){
var inst_27820 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
var statearr_27950_28034 = state_27932__$1;
(statearr_27950_28034[(2)] = inst_27820);

(statearr_27950_28034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (21))){
var inst_27846 = (state_27932[(19)]);
var inst_27846__$1 = (state_27932[(2)]);
var inst_27847 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27846__$1);
var state_27932__$1 = (function (){var statearr_27951 = state_27932;
(statearr_27951[(19)] = inst_27846__$1);

return statearr_27951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27932__$1,(22),inst_27847);
} else {
if((state_val_27933 === (31))){
var inst_27930 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27932__$1,inst_27930);
} else {
if((state_val_27933 === (32))){
var inst_27886 = (state_27932[(16)]);
var inst_27891 = inst_27886.cljs$lang$protocol_mask$partition0$;
var inst_27892 = (inst_27891 & (64));
var inst_27893 = inst_27886.cljs$core$ISeq$;
var inst_27894 = (inst_27892) || (inst_27893);
var state_27932__$1 = state_27932;
if(cljs.core.truth_(inst_27894)){
var statearr_27952_28035 = state_27932__$1;
(statearr_27952_28035[(1)] = (35));

} else {
var statearr_27953_28036 = state_27932__$1;
(statearr_27953_28036[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (40))){
var inst_27907 = (state_27932[(20)]);
var inst_27906 = (state_27932[(2)]);
var inst_27907__$1 = cljs.core.get.call(null,inst_27906,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27908 = cljs.core.get.call(null,inst_27906,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27909 = cljs.core.not_empty.call(null,inst_27907__$1);
var state_27932__$1 = (function (){var statearr_27954 = state_27932;
(statearr_27954[(21)] = inst_27908);

(statearr_27954[(20)] = inst_27907__$1);

return statearr_27954;
})();
if(cljs.core.truth_(inst_27909)){
var statearr_27955_28037 = state_27932__$1;
(statearr_27955_28037[(1)] = (41));

} else {
var statearr_27956_28038 = state_27932__$1;
(statearr_27956_28038[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (33))){
var state_27932__$1 = state_27932;
var statearr_27957_28039 = state_27932__$1;
(statearr_27957_28039[(2)] = false);

(statearr_27957_28039[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (13))){
var inst_27806 = (state_27932[(22)]);
var inst_27810 = cljs.core.chunk_first.call(null,inst_27806);
var inst_27811 = cljs.core.chunk_rest.call(null,inst_27806);
var inst_27812 = cljs.core.count.call(null,inst_27810);
var inst_27793 = inst_27811;
var inst_27794 = inst_27810;
var inst_27795 = inst_27812;
var inst_27796 = (0);
var state_27932__$1 = (function (){var statearr_27958 = state_27932;
(statearr_27958[(7)] = inst_27793);

(statearr_27958[(8)] = inst_27794);

(statearr_27958[(9)] = inst_27795);

(statearr_27958[(10)] = inst_27796);

return statearr_27958;
})();
var statearr_27959_28040 = state_27932__$1;
(statearr_27959_28040[(2)] = null);

(statearr_27959_28040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (22))){
var inst_27849 = (state_27932[(23)]);
var inst_27850 = (state_27932[(24)]);
var inst_27846 = (state_27932[(19)]);
var inst_27854 = (state_27932[(25)]);
var inst_27849__$1 = (state_27932[(2)]);
var inst_27850__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27849__$1);
var inst_27851 = (function (){var all_files = inst_27846;
var res_SINGLEQUOTE_ = inst_27849__$1;
var res = inst_27850__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27849,inst_27850,inst_27846,inst_27854,inst_27849__$1,inst_27850__$1,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27529_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27529_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27849,inst_27850,inst_27846,inst_27854,inst_27849__$1,inst_27850__$1,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27852 = cljs.core.filter.call(null,inst_27851,inst_27849__$1);
var inst_27853 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27854__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27853);
var inst_27855 = cljs.core.not_empty.call(null,inst_27854__$1);
var state_27932__$1 = (function (){var statearr_27960 = state_27932;
(statearr_27960[(23)] = inst_27849__$1);

(statearr_27960[(26)] = inst_27852);

(statearr_27960[(24)] = inst_27850__$1);

(statearr_27960[(25)] = inst_27854__$1);

return statearr_27960;
})();
if(cljs.core.truth_(inst_27855)){
var statearr_27961_28041 = state_27932__$1;
(statearr_27961_28041[(1)] = (23));

} else {
var statearr_27962_28042 = state_27932__$1;
(statearr_27962_28042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (36))){
var state_27932__$1 = state_27932;
var statearr_27963_28043 = state_27932__$1;
(statearr_27963_28043[(2)] = false);

(statearr_27963_28043[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (41))){
var inst_27907 = (state_27932[(20)]);
var inst_27911 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27912 = cljs.core.map.call(null,inst_27911,inst_27907);
var inst_27913 = cljs.core.pr_str.call(null,inst_27912);
var inst_27914 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27913)].join('');
var inst_27915 = figwheel.client.utils.log.call(null,inst_27914);
var state_27932__$1 = state_27932;
var statearr_27964_28044 = state_27932__$1;
(statearr_27964_28044[(2)] = inst_27915);

(statearr_27964_28044[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (43))){
var inst_27908 = (state_27932[(21)]);
var inst_27918 = (state_27932[(2)]);
var inst_27919 = cljs.core.not_empty.call(null,inst_27908);
var state_27932__$1 = (function (){var statearr_27965 = state_27932;
(statearr_27965[(27)] = inst_27918);

return statearr_27965;
})();
if(cljs.core.truth_(inst_27919)){
var statearr_27966_28045 = state_27932__$1;
(statearr_27966_28045[(1)] = (44));

} else {
var statearr_27967_28046 = state_27932__$1;
(statearr_27967_28046[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (29))){
var inst_27849 = (state_27932[(23)]);
var inst_27886 = (state_27932[(16)]);
var inst_27852 = (state_27932[(26)]);
var inst_27850 = (state_27932[(24)]);
var inst_27846 = (state_27932[(19)]);
var inst_27854 = (state_27932[(25)]);
var inst_27882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27885 = (function (){var all_files = inst_27846;
var res_SINGLEQUOTE_ = inst_27849;
var res = inst_27850;
var files_not_loaded = inst_27852;
var dependencies_that_loaded = inst_27854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27886,inst_27852,inst_27850,inst_27846,inst_27854,inst_27882,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27884){
var map__27968 = p__27884;
var map__27968__$1 = ((((!((map__27968 == null)))?((((map__27968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27968):map__27968);
var namespace = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27886,inst_27852,inst_27850,inst_27846,inst_27854,inst_27882,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27886__$1 = cljs.core.group_by.call(null,inst_27885,inst_27852);
var inst_27888 = (inst_27886__$1 == null);
var inst_27889 = cljs.core.not.call(null,inst_27888);
var state_27932__$1 = (function (){var statearr_27970 = state_27932;
(statearr_27970[(16)] = inst_27886__$1);

(statearr_27970[(28)] = inst_27882);

return statearr_27970;
})();
if(inst_27889){
var statearr_27971_28047 = state_27932__$1;
(statearr_27971_28047[(1)] = (32));

} else {
var statearr_27972_28048 = state_27932__$1;
(statearr_27972_28048[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (44))){
var inst_27908 = (state_27932[(21)]);
var inst_27921 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27908);
var inst_27922 = cljs.core.pr_str.call(null,inst_27921);
var inst_27923 = [cljs.core.str("not required: "),cljs.core.str(inst_27922)].join('');
var inst_27924 = figwheel.client.utils.log.call(null,inst_27923);
var state_27932__$1 = state_27932;
var statearr_27973_28049 = state_27932__$1;
(statearr_27973_28049[(2)] = inst_27924);

(statearr_27973_28049[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (6))){
var inst_27827 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
var statearr_27974_28050 = state_27932__$1;
(statearr_27974_28050[(2)] = inst_27827);

(statearr_27974_28050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (28))){
var inst_27852 = (state_27932[(26)]);
var inst_27879 = (state_27932[(2)]);
var inst_27880 = cljs.core.not_empty.call(null,inst_27852);
var state_27932__$1 = (function (){var statearr_27975 = state_27932;
(statearr_27975[(29)] = inst_27879);

return statearr_27975;
})();
if(cljs.core.truth_(inst_27880)){
var statearr_27976_28051 = state_27932__$1;
(statearr_27976_28051[(1)] = (29));

} else {
var statearr_27977_28052 = state_27932__$1;
(statearr_27977_28052[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (25))){
var inst_27850 = (state_27932[(24)]);
var inst_27866 = (state_27932[(2)]);
var inst_27867 = cljs.core.not_empty.call(null,inst_27850);
var state_27932__$1 = (function (){var statearr_27978 = state_27932;
(statearr_27978[(30)] = inst_27866);

return statearr_27978;
})();
if(cljs.core.truth_(inst_27867)){
var statearr_27979_28053 = state_27932__$1;
(statearr_27979_28053[(1)] = (26));

} else {
var statearr_27980_28054 = state_27932__$1;
(statearr_27980_28054[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (34))){
var inst_27901 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
if(cljs.core.truth_(inst_27901)){
var statearr_27981_28055 = state_27932__$1;
(statearr_27981_28055[(1)] = (38));

} else {
var statearr_27982_28056 = state_27932__$1;
(statearr_27982_28056[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (17))){
var state_27932__$1 = state_27932;
var statearr_27983_28057 = state_27932__$1;
(statearr_27983_28057[(2)] = recompile_dependents);

(statearr_27983_28057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (3))){
var state_27932__$1 = state_27932;
var statearr_27984_28058 = state_27932__$1;
(statearr_27984_28058[(2)] = null);

(statearr_27984_28058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (12))){
var inst_27823 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
var statearr_27985_28059 = state_27932__$1;
(statearr_27985_28059[(2)] = inst_27823);

(statearr_27985_28059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (2))){
var inst_27785 = (state_27932[(13)]);
var inst_27792 = cljs.core.seq.call(null,inst_27785);
var inst_27793 = inst_27792;
var inst_27794 = null;
var inst_27795 = (0);
var inst_27796 = (0);
var state_27932__$1 = (function (){var statearr_27986 = state_27932;
(statearr_27986[(7)] = inst_27793);

(statearr_27986[(8)] = inst_27794);

(statearr_27986[(9)] = inst_27795);

(statearr_27986[(10)] = inst_27796);

return statearr_27986;
})();
var statearr_27987_28060 = state_27932__$1;
(statearr_27987_28060[(2)] = null);

(statearr_27987_28060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (23))){
var inst_27849 = (state_27932[(23)]);
var inst_27852 = (state_27932[(26)]);
var inst_27850 = (state_27932[(24)]);
var inst_27846 = (state_27932[(19)]);
var inst_27854 = (state_27932[(25)]);
var inst_27857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27859 = (function (){var all_files = inst_27846;
var res_SINGLEQUOTE_ = inst_27849;
var res = inst_27850;
var files_not_loaded = inst_27852;
var dependencies_that_loaded = inst_27854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27852,inst_27850,inst_27846,inst_27854,inst_27857,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27858){
var map__27988 = p__27858;
var map__27988__$1 = ((((!((map__27988 == null)))?((((map__27988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27988):map__27988);
var request_url = cljs.core.get.call(null,map__27988__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27852,inst_27850,inst_27846,inst_27854,inst_27857,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27860 = cljs.core.reverse.call(null,inst_27854);
var inst_27861 = cljs.core.map.call(null,inst_27859,inst_27860);
var inst_27862 = cljs.core.pr_str.call(null,inst_27861);
var inst_27863 = figwheel.client.utils.log.call(null,inst_27862);
var state_27932__$1 = (function (){var statearr_27990 = state_27932;
(statearr_27990[(31)] = inst_27857);

return statearr_27990;
})();
var statearr_27991_28061 = state_27932__$1;
(statearr_27991_28061[(2)] = inst_27863);

(statearr_27991_28061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (35))){
var state_27932__$1 = state_27932;
var statearr_27992_28062 = state_27932__$1;
(statearr_27992_28062[(2)] = true);

(statearr_27992_28062[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (19))){
var inst_27836 = (state_27932[(12)]);
var inst_27842 = figwheel.client.file_reloading.expand_files.call(null,inst_27836);
var state_27932__$1 = state_27932;
var statearr_27993_28063 = state_27932__$1;
(statearr_27993_28063[(2)] = inst_27842);

(statearr_27993_28063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (11))){
var state_27932__$1 = state_27932;
var statearr_27994_28064 = state_27932__$1;
(statearr_27994_28064[(2)] = null);

(statearr_27994_28064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (9))){
var inst_27825 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
var statearr_27995_28065 = state_27932__$1;
(statearr_27995_28065[(2)] = inst_27825);

(statearr_27995_28065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (5))){
var inst_27795 = (state_27932[(9)]);
var inst_27796 = (state_27932[(10)]);
var inst_27798 = (inst_27796 < inst_27795);
var inst_27799 = inst_27798;
var state_27932__$1 = state_27932;
if(cljs.core.truth_(inst_27799)){
var statearr_27996_28066 = state_27932__$1;
(statearr_27996_28066[(1)] = (7));

} else {
var statearr_27997_28067 = state_27932__$1;
(statearr_27997_28067[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (14))){
var inst_27806 = (state_27932[(22)]);
var inst_27815 = cljs.core.first.call(null,inst_27806);
var inst_27816 = figwheel.client.file_reloading.eval_body.call(null,inst_27815,opts);
var inst_27817 = cljs.core.next.call(null,inst_27806);
var inst_27793 = inst_27817;
var inst_27794 = null;
var inst_27795 = (0);
var inst_27796 = (0);
var state_27932__$1 = (function (){var statearr_27998 = state_27932;
(statearr_27998[(7)] = inst_27793);

(statearr_27998[(8)] = inst_27794);

(statearr_27998[(9)] = inst_27795);

(statearr_27998[(32)] = inst_27816);

(statearr_27998[(10)] = inst_27796);

return statearr_27998;
})();
var statearr_27999_28068 = state_27932__$1;
(statearr_27999_28068[(2)] = null);

(statearr_27999_28068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (45))){
var state_27932__$1 = state_27932;
var statearr_28000_28069 = state_27932__$1;
(statearr_28000_28069[(2)] = null);

(statearr_28000_28069[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (26))){
var inst_27849 = (state_27932[(23)]);
var inst_27852 = (state_27932[(26)]);
var inst_27850 = (state_27932[(24)]);
var inst_27846 = (state_27932[(19)]);
var inst_27854 = (state_27932[(25)]);
var inst_27869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27871 = (function (){var all_files = inst_27846;
var res_SINGLEQUOTE_ = inst_27849;
var res = inst_27850;
var files_not_loaded = inst_27852;
var dependencies_that_loaded = inst_27854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27852,inst_27850,inst_27846,inst_27854,inst_27869,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27870){
var map__28001 = p__27870;
var map__28001__$1 = ((((!((map__28001 == null)))?((((map__28001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28001):map__28001);
var namespace = cljs.core.get.call(null,map__28001__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27852,inst_27850,inst_27846,inst_27854,inst_27869,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27872 = cljs.core.map.call(null,inst_27871,inst_27850);
var inst_27873 = cljs.core.pr_str.call(null,inst_27872);
var inst_27874 = figwheel.client.utils.log.call(null,inst_27873);
var inst_27875 = (function (){var all_files = inst_27846;
var res_SINGLEQUOTE_ = inst_27849;
var res = inst_27850;
var files_not_loaded = inst_27852;
var dependencies_that_loaded = inst_27854;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27852,inst_27850,inst_27846,inst_27854,inst_27869,inst_27871,inst_27872,inst_27873,inst_27874,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27849,inst_27852,inst_27850,inst_27846,inst_27854,inst_27869,inst_27871,inst_27872,inst_27873,inst_27874,state_val_27933,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27876 = setTimeout(inst_27875,(10));
var state_27932__$1 = (function (){var statearr_28003 = state_27932;
(statearr_28003[(33)] = inst_27874);

(statearr_28003[(34)] = inst_27869);

return statearr_28003;
})();
var statearr_28004_28070 = state_27932__$1;
(statearr_28004_28070[(2)] = inst_27876);

(statearr_28004_28070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (16))){
var state_27932__$1 = state_27932;
var statearr_28005_28071 = state_27932__$1;
(statearr_28005_28071[(2)] = reload_dependents);

(statearr_28005_28071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (38))){
var inst_27886 = (state_27932[(16)]);
var inst_27903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27886);
var state_27932__$1 = state_27932;
var statearr_28006_28072 = state_27932__$1;
(statearr_28006_28072[(2)] = inst_27903);

(statearr_28006_28072[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (30))){
var state_27932__$1 = state_27932;
var statearr_28007_28073 = state_27932__$1;
(statearr_28007_28073[(2)] = null);

(statearr_28007_28073[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (10))){
var inst_27806 = (state_27932[(22)]);
var inst_27808 = cljs.core.chunked_seq_QMARK_.call(null,inst_27806);
var state_27932__$1 = state_27932;
if(inst_27808){
var statearr_28008_28074 = state_27932__$1;
(statearr_28008_28074[(1)] = (13));

} else {
var statearr_28009_28075 = state_27932__$1;
(statearr_28009_28075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (18))){
var inst_27840 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
if(cljs.core.truth_(inst_27840)){
var statearr_28010_28076 = state_27932__$1;
(statearr_28010_28076[(1)] = (19));

} else {
var statearr_28011_28077 = state_27932__$1;
(statearr_28011_28077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (42))){
var state_27932__$1 = state_27932;
var statearr_28012_28078 = state_27932__$1;
(statearr_28012_28078[(2)] = null);

(statearr_28012_28078[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (37))){
var inst_27898 = (state_27932[(2)]);
var state_27932__$1 = state_27932;
var statearr_28013_28079 = state_27932__$1;
(statearr_28013_28079[(2)] = inst_27898);

(statearr_28013_28079[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27933 === (8))){
var inst_27806 = (state_27932[(22)]);
var inst_27793 = (state_27932[(7)]);
var inst_27806__$1 = cljs.core.seq.call(null,inst_27793);
var state_27932__$1 = (function (){var statearr_28014 = state_27932;
(statearr_28014[(22)] = inst_27806__$1);

return statearr_28014;
})();
if(inst_27806__$1){
var statearr_28015_28080 = state_27932__$1;
(statearr_28015_28080[(1)] = (10));

} else {
var statearr_28016_28081 = state_27932__$1;
(statearr_28016_28081[(1)] = (11));

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
}
});})(c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24132__auto__,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto____0 = (function (){
var statearr_28020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28020[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto__);

(statearr_28020[(1)] = (1));

return statearr_28020;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto____1 = (function (state_27932){
while(true){
var ret_value__24134__auto__ = (function (){try{while(true){
var result__24135__auto__ = switch__24132__auto__.call(null,state_27932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24135__auto__;
}
break;
}
}catch (e28021){if((e28021 instanceof Object)){
var ex__24136__auto__ = e28021;
var statearr_28022_28082 = state_27932;
(statearr_28022_28082[(5)] = ex__24136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28083 = state_27932;
state_27932 = G__28083;
continue;
} else {
return ret_value__24134__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto__ = function(state_27932){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto____1.call(this,state_27932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24133__auto__;
})()
;})(switch__24132__auto__,c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24246__auto__ = (function (){var statearr_28023 = f__24245__auto__.call(null);
(statearr_28023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24244__auto__);

return statearr_28023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24246__auto__);
});})(c__24244__auto__,map__27778,map__27778__$1,opts,before_jsload,on_jsload,reload_dependents,map__27779,map__27779__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24244__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28086,link){
var map__28089 = p__28086;
var map__28089__$1 = ((((!((map__28089 == null)))?((((map__28089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28089):map__28089);
var file = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28089,map__28089__$1,file){
return (function (p1__28084_SHARP_,p2__28085_SHARP_){
if(cljs.core._EQ_.call(null,p1__28084_SHARP_,p2__28085_SHARP_)){
return p1__28084_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28089,map__28089__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28095){
var map__28096 = p__28095;
var map__28096__$1 = ((((!((map__28096 == null)))?((((map__28096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28096):map__28096);
var match_length = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28096__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28091_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28091_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28098 = [];
var len__22073__auto___28101 = arguments.length;
var i__22074__auto___28102 = (0);
while(true){
if((i__22074__auto___28102 < len__22073__auto___28101)){
args28098.push((arguments[i__22074__auto___28102]));

var G__28103 = (i__22074__auto___28102 + (1));
i__22074__auto___28102 = G__28103;
continue;
} else {
}
break;
}

var G__28100 = args28098.length;
switch (G__28100) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28098.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28105_SHARP_,p2__28106_SHARP_){
return cljs.core.assoc.call(null,p1__28105_SHARP_,cljs.core.get.call(null,p2__28106_SHARP_,key),p2__28106_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28107){
var map__28110 = p__28107;
var map__28110__$1 = ((((!((map__28110 == null)))?((((map__28110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28110):map__28110);
var f_data = map__28110__$1;
var file = cljs.core.get.call(null,map__28110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28112,files_msg){
var map__28119 = p__28112;
var map__28119__$1 = ((((!((map__28119 == null)))?((((map__28119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28119):map__28119);
var opts = map__28119__$1;
var on_cssload = cljs.core.get.call(null,map__28119__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28121_28125 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28122_28126 = null;
var count__28123_28127 = (0);
var i__28124_28128 = (0);
while(true){
if((i__28124_28128 < count__28123_28127)){
var f_28129 = cljs.core._nth.call(null,chunk__28122_28126,i__28124_28128);
figwheel.client.file_reloading.reload_css_file.call(null,f_28129);

var G__28130 = seq__28121_28125;
var G__28131 = chunk__28122_28126;
var G__28132 = count__28123_28127;
var G__28133 = (i__28124_28128 + (1));
seq__28121_28125 = G__28130;
chunk__28122_28126 = G__28131;
count__28123_28127 = G__28132;
i__28124_28128 = G__28133;
continue;
} else {
var temp__4425__auto___28134 = cljs.core.seq.call(null,seq__28121_28125);
if(temp__4425__auto___28134){
var seq__28121_28135__$1 = temp__4425__auto___28134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28121_28135__$1)){
var c__21818__auto___28136 = cljs.core.chunk_first.call(null,seq__28121_28135__$1);
var G__28137 = cljs.core.chunk_rest.call(null,seq__28121_28135__$1);
var G__28138 = c__21818__auto___28136;
var G__28139 = cljs.core.count.call(null,c__21818__auto___28136);
var G__28140 = (0);
seq__28121_28125 = G__28137;
chunk__28122_28126 = G__28138;
count__28123_28127 = G__28139;
i__28124_28128 = G__28140;
continue;
} else {
var f_28141 = cljs.core.first.call(null,seq__28121_28135__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28141);

var G__28142 = cljs.core.next.call(null,seq__28121_28135__$1);
var G__28143 = null;
var G__28144 = (0);
var G__28145 = (0);
seq__28121_28125 = G__28142;
chunk__28122_28126 = G__28143;
count__28123_28127 = G__28144;
i__28124_28128 = G__28145;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28119,map__28119__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28119,map__28119__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
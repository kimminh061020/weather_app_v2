exports.ids = [3,1];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/weather.b0d7023.png";

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f25d62b2", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader.vue?vue&type=template&id=c4a3ea90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-wrap"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" height=\"70px\" data-v-c4a3ea90> "),_c('b-nav',{attrs:{"align":"center"}},[_c('b-nav-item',[_c('router-link',{attrs:{"to":"/","id":"nav-bar-home"}},[_vm._v("Home")])],1),_vm._v(" "),_c('b-nav-item',[_c('router-link',{attrs:{"to":"/about","id":"nav-bar-about"}},[_vm._v("About")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"button_wrap\" data-v-c4a3ea90>","</div>",[_c('b-button',{attrs:{"pill":"","id":"button"}},[_vm._v("Contact")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=template&id=c4a3ea90&scoped=true&

// EXTERNAL MODULE: ./assets/weather.png
var weather = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppHeadervue_type_script_lang_js_ = ({
  name: 'AppHeader'
});
// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppHeadervue_type_script_lang_js_ = (AppHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c4a3ea90",
  "30e04b30"
  
)

/* harmony default export */ var AppHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_c4a3ea90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_c4a3ea90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_c4a3ea90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_c4a3ea90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_c4a3ea90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-wrap[data-v-c4a3ea90]{display:grid;grid-template-columns:1fr 2fr 1fr;background:#000;padding-bottom:10px;padding-top:10px}#nav-bar-about[data-v-c4a3ea90],#nav-bar-home[data-v-c4a3ea90]{color:#fff;font-size:20px;padding:10px}img[data-v-c4a3ea90]{padding-left:30px}.justify-content-center[data-v-c4a3ea90]{justify-content:center!important;align-content:center}#button_wrap[data-v-c4a3ea90]{color:#000;display:flex;align-items:center;justify-content:flex-end}#button[data-v-c4a3ea90]{background:#fff;color:#000;font-weight:600;margin-right:10%;width:200px}@media only screen and (max-width:980px){#nav-bar-about[data-v-c4a3ea90],#nav-bar-home[data-v-c4a3ea90]{font-size:15px;padding:0}#button[data-v-c4a3ea90]{background:#fff;width:100px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("27840019", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgNiAxNCI+CiAgPGcgaWQ9ImRvd24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMzEgNTY4KSByb3RhdGUoMTgwKSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzQiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDQiIHdpZHRoPSIyIiBoZWlnaHQ9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDI3IDU1OCkiIGZpbGw9IiNmZmZmZmYiLz4KICAgIDxwYXRoIGlkPSJQb2x5Z29uXzEiIGRhdGEtbmFtZT0iUG9seWdvbiAxIiBkPSJNMywwLDYsNEgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAyNSA1NTQpIiBmaWxsPSIjZmZmZmZmIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgNiAxNCI+CiAgPGcgaWQ9Ikdyb3VwXzEiIGRhdGEtbmFtZT0iR3JvdXAgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMjUgLTU1NCkiPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV80IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA0IiB3aWR0aD0iMiIgaGVpZ2h0PSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAyNyA1NTgpIiBmaWxsPSIjZmZmZmZmIi8+CiAgICA8cGF0aCBpZD0iUG9seWdvbl8xIiBkYXRhLW5hbWU9IlBvbHlnb24gMSIgZD0iTTMsMCw2LDRIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMjUgNTU0KSIgZmlsbD0iI2ZmZmZmZiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b2d8f84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b2d8f84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b2d8f84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b2d8f84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b2d8f84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#main[data-v-0b2d8f84]{position:absolute;height:100%;width:100%}.day[data-v-0b2d8f84]{background:linear-gradient(to bottom left,#d7d3ac,#fff)}.night[data-v-0b2d8f84]{background:linear-gradient(to bottom left,#4854a2,#3d3d3d);color:#fff}.title[data-v-0b2d8f84]{font-size:50px;font-weight:500}.form-rounded[data-v-0b2d8f84]{border-radius:2rem}.back-card[data-v-0b2d8f84]{border-radius:40px!important;color:#fff;background:linear-gradient(to bottom right,#707070,#434647);text-shadow:2px 2px 2px #707070}.city-name[data-v-0b2d8f84]{position:absolute;width:100%}.city-name p[data-v-0b2d8f84]{font-weight:400;font-size:16pt}.city-name span[data-v-0b2d8f84]{position:relative;top:-50px;font-size:40pt;font-family:\"Times New Roman\",Times,serif}.temp span[data-v-0b2d8f84]{font-weight:100;font-size:5em;letter-spacing:-5px;white-space:nowrap}.card-mid[data-v-0b2d8f84]{line-height:.5}.condition[data-v-0b2d8f84]{font-size:1em;font-weight:700;line-height:1em;text-transform:capitalize}.high[data-v-0b2d8f84],.low[data-v-0b2d8f84]{font-size:15px}.card-bottom p[data-v-0b2d8f84]{font-size:50px;font-weight:100;letter-spacing:-3px}.card-bottom[data-v-0b2d8f84]{line-height:.5}.card-bottom span[data-v-0b2d8f84]{font-size:12px}.form-control[data-v-0b2d8f84]:focus{box-shadow:none;border-color:inherit}#day[data-v-0b2d8f84]{background:#add8e6}#night[data-v-0b2d8f84]{background:#483d8b}[data-v-0b2d8f84]:root{--shadow:#fd6f21;--ring:currentColor;--blend1:#fc5830;--blend2:#f98c24;--blend-from:0%;--blend-to:100%;--blend-dir:top right}[icon][data-v-0b2d8f84]{flex:none;display:none;position:absolute;overflow:hidden;font-size:calc(10em + 1vmin);width:100%;height:100%;background:linear-gradient(to top right,#fc5830 0,#f98c24);background:linear-gradient(to top right,var(--blend1) var(--blend-from),var(--blend2) var(--blend-to))}[icon][data-v-0b2d8f84]:after{content:attr(data-label);position:absolute;top:calc(100% + 1vmin);left:50%;transform:translateX(-50%);font:inherit;font-size:.15em}[icon=sunny][data-v-0b2d8f84]{--shadow:#fd6f21;--blend1:#fc5830;--blend2:#f98c24;--blend-to:65%}[icon=cloudy][data-v-0b2d8f84]{--shadow:#1378bb;--blend2:#1378bb;--blend1:#758595;--blend2:#e0e2e5;--blend1:#1b9ce2;--blend-to:65%}[icon=cloudy][data-v-0b2d8f84],[icon=snowy][data-v-0b2d8f84]{--shadow:#c9e8de;--blend-to:90%}[icon=snowy][data-v-0b2d8f84]{--blend1:#758595;--blend2:#2c4a77;--blend-dir:bottom left}[icon=stormy][data-v-0b2d8f84]{--shadow:#34c6d8;--blend1:#4b9cc2;--blend2:#9adbd9}[icon=nightmoon][data-v-0b2d8f84]{--shadow:#5133a5;--blend1:#4054b2;--blend2:#1b2038;--blend-to:65%;--blend-dir:bottom right}.sun[data-v-0b2d8f84]{top:20%;left:80%;transform:translate(-50%,-50%);width:30%;height:20%;color:#e6e8db;background:#ffeb3b;box-shadow:inset 0 0 0 .02em currentColor,0 0 .3em -.03em #fd6f21;box-shadow:0 0 0 .02em var(--ring) inset,0 0 .3em -.03em var(--shadow);transform-origin:.1em .1em}.sun[data-v-0b2d8f84],.sun[data-v-0b2d8f84]:after{position:absolute;border-radius:100%}.sun[data-v-0b2d8f84]:after{content:\"\";top:.1em;left:0;will-change:transform;transform:translate(-50%,-50%);width:.1em;height:.1em;background:hsla(0,0%,100%,.3);box-shadow:inset 0 0 .1em 0 hsla(0,0%,100%,.7),-.1em -.1em 0 .2em hsla(0,0%,100%,.3);-webkit-animation:flare-data-v-0b2d8f84 12s linear infinite alternate;animation:flare-data-v-0b2d8f84 12s linear infinite alternate}.cloud[data-v-0b2d8f84]{position:absolute;top:.1em;left:65%;width:.37em;height:.13em;border-radius:.1em;background-color:#fff;box-shadow:inset 0 0 .1em .02em currentColor,0 0 .3em -.03em #fd6f21;box-shadow:0 0 .1em .02em var(--ring) inset,0 0 .3em -.03em var(--shadow);-webkit-animation:move-data-v-0b2d8f84 3s ease-in-out infinite;animation:move-data-v-0b2d8f84 3s ease-in-out infinite}.cloud+.cloud[data-v-0b2d8f84]{top:25%;left:40%;-webkit-animation:move-data-v-0b2d8f84 3.7s linear infinite;animation:move-data-v-0b2d8f84 3.7s linear infinite}.cloud[data-v-0b2d8f84]:after,.cloud[data-v-0b2d8f84]:before{content:\"\";position:inherit;border-radius:inherit;background-color:inherit;box-shadow:inherit;bottom:30%}.cloud[data-v-0b2d8f84]:before{left:.05em;width:.2em;height:.2em}.cloud[data-v-0b2d8f84]:after{left:.15em;width:.15em;height:.15em}[icon=snowy] ul[data-v-0b2d8f84]{position:absolute;list-style:none;top:0;left:10%;right:0;height:100%;margin:0;padding:0}[icon=snowy] li[data-v-0b2d8f84]:after,[icon=snowy] li[data-v-0b2d8f84]:before{content:\"\";position:absolute;list-style:none;width:.015em;height:.01em;border-radius:100%;background-color:currentColor;background-color:var(--ring);will-change:transform,opacity;-webkit-animation:snow-data-v-0b2d8f84 3.7s ease-out infinite;animation:snow-data-v-0b2d8f84 3.7s ease-out infinite;opacity:0}[icon=snowy] li[data-v-0b2d8f84]:nth-child(13n+11):after,[icon=snowy] li[data-v-0b2d8f84]:nth-child(odd):before{top:-7%;left:40%}[icon=snowy] li[data-v-0b2d8f84]:nth-child(3n+2):before,[icon=snowy] li[data-v-0b2d8f84]:nth-child(11n+7):after{top:5%;left:90%;-webkit-animation-delay:1s;animation-delay:1s}[icon=snowy] li[data-v-0b2d8f84]:nth-child(5n+3):before,[icon=snowy] li[data-v-0b2d8f84]:nth-child(7n+5):after{top:-10%;left:80%;-webkit-animation-delay:2s;animation-delay:2s}[icon=snowy] li[data-v-0b2d8f84]:nth-child(5n+3):after,[icon=snowy] li[data-v-0b2d8f84]:nth-child(7n+5):before{top:10%;left:10%;-webkit-animation-delay:1.3s;animation-delay:1.3s}[icon=snowy] li[data-v-0b2d8f84]:nth-child(3n+2):after,[icon=snowy] li[data-v-0b2d8f84]:nth-child(11n+7):before{top:20%;left:70%;-webkit-animation-delay:1.5s;animation-delay:1.5s}[icon=snowy] li[data-v-0b2d8f84]:nth-child(13n+11):before,[icon=snowy] li[data-v-0b2d8f84]:nth-child(odd):after{top:35%;left:20%;-webkit-animation-delay:.5s;animation-delay:.5s}.snowman[data-v-0b2d8f84]{position:absolute;bottom:30%;left:40%;width:.15em;height:.15em;opacity:.9;background:currentColor;background:var(--ring);border-radius:100%}.snowman[data-v-0b2d8f84]:after{content:\"\";position:absolute;top:90%;left:30%;transform:translate(-50%);width:.275em;height:.3em;border-radius:inherit;background-color:currentColor;background-color:var(--ring)}.snowman[data-v-0b2d8f84]:before{content:\"\";position:absolute;top:0;left:50%;transform:translate(-55%,-50%);width:.45em;height:.4em;border-radius:60%;border:.02em solid transparent;border-bottom:.02em solid var(--blend1);will-change:border-radius;-webkit-animation:snowman-data-v-0b2d8f84 9s ease-in infinite;animation:snowman-data-v-0b2d8f84 9s ease-in infinite}[icon=stormy][data-v-0b2d8f84]:before{--shadow:hsla(0,0%,100%,0);content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;opacity:.4;will-change:background-color;-webkit-animation:flash-data-v-0b2d8f84 2.3s linear 80ms infinite;animation:flash-data-v-0b2d8f84 2.3s linear 80ms infinite}[icon=stormy] .cloud[data-v-0b2d8f84]{--shadow:#c9e8de;--ring:#f0f2f0;background-color:#fd6f21;background-color:var(--shadow);font-size:1.3em;left:70%;will-change:background-color,transform,opacity;-webkit-animation:flash-data-v-0b2d8f84 2.3s linear infinite,move-data-v-0b2d8f84 3.7s linear infinite;animation:flash-data-v-0b2d8f84 2.3s linear infinite,move-data-v-0b2d8f84 3.7s linear infinite}[icon=stormy] ul[data-v-0b2d8f84]{position:absolute;list-style:none;top:0;left:70%;right:0;height:100%;margin:0;padding:0}[icon=stormy] li[data-v-0b2d8f84],[icon=stormy] li[data-v-0b2d8f84]:after,[icon=stormy] li[data-v-0b2d8f84]:before{position:absolute;width:.005em;height:.055em;border-radius:10%;background-color:#fff;opacity:0;will-change:transform,opacity;-webkit-animation:rain-data-v-0b2d8f84 2s linear infinite;animation:rain-data-v-0b2d8f84 2s linear infinite;transform:rotate(25deg)}[icon=stormy] li[data-v-0b2d8f84]:after,[icon=stormy] li[data-v-0b2d8f84]:before{content:\"\"}[icon=stormy] li[data-v-0b2d8f84]:nth-child(5n+3):before,[icon=stormy] li[data-v-0b2d8f84]:nth-child(11n+7):after,[icon=stormy] li[data-v-0b2d8f84]:nth-child(odd){top:10%;left:68%;-webkit-animation-delay:.5s;animation-delay:.5s}[icon=stormy] li[data-v-0b2d8f84]:nth-child(3n+2),[icon=stormy] li[data-v-0b2d8f84]:nth-child(3n+2):after,[icon=stormy] li[data-v-0b2d8f84]:nth-child(7n+5):after{top:5%;left:45%;-webkit-animation-delay:1.25s;animation-delay:1.25s}[icon=stormy] li[data-v-0b2d8f84]:nth-child(5n+3):after,[icon=stormy] li[data-v-0b2d8f84]:nth-child(7n+5),[icon=stormy] li[data-v-0b2d8f84]:nth-child(odd):before{top:4%;left:82%;-webkit-animation-delay:.75s;animation-delay:.75s}[icon=stormy] li[data-v-0b2d8f84]:nth-child(3n+2):after,[icon=stormy] li[data-v-0b2d8f84]:nth-child(7n+5),[icon=stormy] li[data-v-0b2d8f84]:nth-child(11n+7):before{top:15%;left:15%;-webkit-animation-delay:2s;animation-delay:2s}[icon=stormy] li[data-v-0b2d8f84]:nth-child(7n+5):before,[icon=stormy] li[data-v-0b2d8f84]:nth-child(11n+7),[icon=stormy] li[data-v-0b2d8f84]:nth-child(odd):after{top:10%;left:33%;-webkit-animation-delay:2.5s;animation-delay:2.5s}[icon=nightmoon][data-v-0b2d8f84]:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-image:radial-gradient(1px 1px at 50%,at 20%,#fff,transparent),radial-gradient(1px 1px at 30%,at 65%,#fff,transparent),radial-gradient(2px 2px at 15%,at 5%,#fff,transparent),radial-gradient(2px 2px at 37%,at 35%,#fff,transparent),radial-gradient(2px 2px at 65%,at 47%,#fff,transparent),radial-gradient(1px 1px at 42%,at 29%,#fff,transparent),radial-gradient(1px 1px at 73%,at 56%,#fff,transparent),radial-gradient(1px 1px at 24%,at 19%,#fff,transparent),radial-gradient(2px 2px at 31%,at 47%,#fff,transparent),radial-gradient(1px 1px at 18%,at 39%,#fff,transparent);background-image:radial-gradient(1px 1px at 50% 20%,#fff,transparent),radial-gradient(1px 1px at 30% 65%,#fff,transparent),radial-gradient(2px 2px at 15% 5%,#fff,transparent),radial-gradient(2px 2px at 37% 35%,#fff,transparent),radial-gradient(2px 2px at 65% 47%,#fff,transparent),radial-gradient(1px 1px at 42% 29%,#fff,transparent),radial-gradient(1px 1px at 73% 56%,#fff,transparent),radial-gradient(1px 1px at 24% 19%,#fff,transparent),radial-gradient(2px 2px at 31% 47%,#fff,transparent),radial-gradient(1px 1px at 18% 39%,#fff,transparent);background-repeat:repeat;will-change:transform;-webkit-animation:revolve-data-v-0b2d8f84 120s linear infinite;animation:revolve-data-v-0b2d8f84 120s linear infinite}.moon[data-v-0b2d8f84]{top:20%;left:80%;transform:translate(-50%,-50%);width:25%;height:20%;background:radial-gradient(circle at bottom left,currentColor,#fef07e);background:radial-gradient(circle at bottom left,var(--ring),#fef07e);box-shadow:inset 0 0 0 .02em currentColor,0 0 .3em -.03em #f98c24;box-shadow:0 0 0 .02em var(--ring) inset,0 0 .3em -.03em var(--blend2)}.moon[data-v-0b2d8f84],.moon[data-v-0b2d8f84]:after,.moon[data-v-0b2d8f84]:before{position:absolute;border-radius:100%}.moon[data-v-0b2d8f84]:after,.moon[data-v-0b2d8f84]:before{content:\"\";background-color:#fc5830;background-color:var(--blend1);box-shadow:.01em .01em .1em 0 #fc5830;box-shadow:.01em .01em .1em 0 var(--blend1)}.moon[data-v-0b2d8f84]:before{top:15%;left:55%;width:20%;height:20%;opacity:.3}.moon[data-v-0b2d8f84]:after{bottom:50%;left:25%;width:15%;height:15%;opacity:.2}.meteor[data-v-0b2d8f84]{position:absolute;background-color:#fff;opacity:0;top:20%;left:55%;width:1px;height:15px;transform:rotate(45deg);will-change:transform,opacity;-webkit-animation:meteor-data-v-0b2d8f84 6.25s ease-in infinite;animation:meteor-data-v-0b2d8f84 6.25s ease-in infinite}[icon=cloudy][data-v-0b2d8f84],[icon=nightmoon][data-v-0b2d8f84],[icon=snowy][data-v-0b2d8f84],[icon=stormy][data-v-0b2d8f84],[icon=sunny][data-v-0b2d8f84]{display:block}@-webkit-keyframes flare-data-v-0b2d8f84{to{transform:translate(-.3em,.3em);opacity:.4;font-size:.2em}}@keyframes flare-data-v-0b2d8f84{to{transform:translate(-.3em,.3em);opacity:.4;font-size:.2em}}@-webkit-keyframes move-data-v-0b2d8f84{50%{transform:translateX(-.05em)}}@keyframes move-data-v-0b2d8f84{50%{transform:translateX(-.05em)}}@-webkit-keyframes snow-data-v-0b2d8f84{50%{opacity:1}to{transform:translate(-.1em,15vmin)}}@keyframes snow-data-v-0b2d8f84{50%{opacity:1}to{transform:translate(-.1em,15vmin)}}@-webkit-keyframes snowman-data-v-0b2d8f84{50%{border-radius:60% 60% 30% 50%}}@keyframes snowman-data-v-0b2d8f84{50%{border-radius:60% 60% 30% 50%}}@-webkit-keyframes flash-data-v-0b2d8f84{49%{background-color:#fd6f21;background-color:var(--shadow)}51%{background-color:currentColor;background-color:var(--ring)}53%{background-color:#fd6f21;background-color:var(--shadow)}57%{background-color:currentColor;background-color:var(--ring)}85%{background-color:#fd6f21;background-color:var(--shadow)}}@keyframes flash-data-v-0b2d8f84{49%{background-color:#fd6f21;background-color:var(--shadow)}51%{background-color:currentColor;background-color:var(--ring)}53%{background-color:#fd6f21;background-color:var(--shadow)}57%{background-color:currentColor;background-color:var(--ring)}85%{background-color:#fd6f21;background-color:var(--shadow)}}@-webkit-keyframes rain-data-v-0b2d8f84{10%{opacity:.4}50%{opacity:1}to{transform:translate(-.1em,.5em)}}@keyframes rain-data-v-0b2d8f84{10%{opacity:.4}50%{opacity:1}to{transform:translate(-.1em,.5em)}}@-webkit-keyframes revolve-data-v-0b2d8f84{to{transform:rotate(1turn)}}@keyframes revolve-data-v-0b2d8f84{to{transform:rotate(1turn)}}@-webkit-keyframes meteor-data-v-0b2d8f84{5%{opacity:1}8%{transform:translate(-.6em,.6em) rotate(45deg);opacity:0}}@keyframes meteor-data-v-0b2d8f84{5%{opacity:1}8%{transform:translate(-.6em,.6em) rotate(45deg);opacity:0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=0b2d8f84&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.isDay ? 'day' : 'night',attrs:{"id":"main"}},[_c('AppHeader'),_vm._ssrNode(" <div class=\"container my-5\" style=\"max-width: 400px; min-width: 360px\" data-v-0b2d8f84><h1 class=\"title text-center\" data-v-0b2d8f84>Weather in</h1> <form class=\"search-location\" data-v-0b2d8f84><input type=\"text\" placeholder=\"What City?\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.citySearch)))+" class=\"form-control text-muted form-rounded p-4 shadow-sm\" data-v-0b2d8f84></form> "+((_vm.cityFound)?("<p class=\"text-center my-3\" data-v-0b2d8f84>No city found</p>"):"<!---->")+" "+((_vm.visible)?("<div"+(_vm._ssrAttr("id",_vm.isDay ? 'day' : 'night'))+" class=\"card rounded my-3 shadow-lg back-card overflow-hidden\" data-v-0b2d8f84><div data-v-0b2d8f84>"+((_vm.clearSky)?("<div icon=\"sunny\" data-label=\"Sunny\" data-v-0b2d8f84><span class=\"sun\" data-v-0b2d8f84></span></div>"):"<!---->")+" "+((_vm.snowy)?("<div icon=\"snowy\" data-label=\"Chilly\" data-v-0b2d8f84><ul data-v-0b2d8f84><li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li></ul></div>"):"<!---->")+" "+((_vm.stormy)?("<div icon=\"stormy\" data-label=\"Soggy\" data-v-0b2d8f84><span class=\"cloud\" data-v-0b2d8f84></span> <ul data-v-0b2d8f84><li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li> <li data-v-0b2d8f84></li></ul></div>"):"<!---->")+" "+((_vm.cloudy)?("<div icon=\"cloudy\" data-label=\"Perfect\" data-v-0b2d8f84><span class=\"cloud\" data-v-0b2d8f84></span> <span class=\"cloud\" data-v-0b2d8f84></span></div>"):"<!---->")+" "+((_vm.clearNight)?("<div icon=\"nightmoon\" data-label=\"Cool!\" data-v-0b2d8f84><span class=\"moon\" data-v-0b2d8f84></span> <span class=\"meteor\" data-v-0b2d8f84></span></div>"):"<!---->")+"</div> <div class=\"card-top text-center\" style=\"margin-bottom: 15rem\" data-v-0b2d8f84><div class=\"city-name my-3\" data-v-0b2d8f84><p data-v-0b2d8f84>"+_vm._ssrEscape(_vm._s(_vm.weather.cityName))+"</p> <span data-v-0b2d8f84>...</span> <p data-v-0b2d8f84>"+_vm._ssrEscape(_vm._s(_vm.weather.country))+"</p></div></div> <div class=\"card-body\" data-v-0b2d8f84><div class=\"card-mid\" data-v-0b2d8f84><div class=\"row\" data-v-0b2d8f84><div class=\"col-12 text-center temp\" data-v-0b2d8f84><span data-v-0b2d8f84>"+_vm._ssrEscape(_vm._s(_vm.weather.temperature)+"°C")+"</span> <p class=\"my-4\" data-v-0b2d8f84>"+_vm._ssrEscape(_vm._s(_vm.weather.description))+"</p></div></div> <div class=\"row\" data-v-0b2d8f84><div class=\"col d-flex justify-content-between px-5 mx-5\" data-v-0b2d8f84><p data-v-0b2d8f84><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-0b2d8f84>"+_vm._ssrEscape("\n                "+_vm._s(_vm.weather.lowTemp)+"°C\n              ")+"</p> <p data-v-0b2d8f84><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-0b2d8f84>"+_vm._ssrEscape("\n                "+_vm._s(_vm.weather.highTemp)+"°C\n              ")+"</p></div></div></div> <div class=\"card-bottom px-5 py-4 row\" data-v-0b2d8f84><div class=\"col text-center\" data-v-0b2d8f84><p data-v-0b2d8f84>"+_vm._ssrEscape(_vm._s(_vm.weather.feelsLike)+"°C")+"</p> <span data-v-0b2d8f84>Feels like</span></div> <div class=\"col text-center\" data-v-0b2d8f84><p data-v-0b2d8f84>"+_vm._ssrEscape(_vm._s(_vm.weather.humidity)+"%")+"</p> <span data-v-0b2d8f84>humidity</span></div></div></div></div>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=0b2d8f84&scoped=true&

// EXTERNAL MODULE: ./components/AppHeader.vue + 4 modules
var AppHeader = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      cityFound: false,
      visible: false,
      stormy: false,
      cloudy: false,
      clearSky: false,
      clearNight: false,
      snowy: false,
      isDay: true,
      citySearch: "",
      weather: {
        cityName: "Gwarinpa",
        country: "NG",
        temperature: 12,
        description: "Clouds everywhere",
        lowTemp: "19",
        highTemp: "30",
        feelsLike: "20",
        humidity: "55"
      }
    };
  },

  methods: {
    getWeather: async function () {
      console.log(this.citySearch);
      const key = "822fc8446f5adc72ac8c766a871329a8";
      const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`; //fetch weather

      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
        this.citySearch = "";
        this.weather.cityName = data.name;
        this.weather.country = data.sys.country;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.description = data.weather[0].description;
        this.weather.lowTemp = Math.round(data.main.temp_min);
        this.weather.highTemp = Math.round(data.main.temp_max);
        this.weather.feelsLike = Math.round(data.main.feels_like);
        this.weather.humidity = Math.round(data.main.humidity);
        const timeOfDay = data.weather[0].icon; ///check for time of day

        if (timeOfDay.includes("n")) {
          this.isDay = false;
        } else {
          this.isDay = true;
        }

        const mainWeather = data.weather[0].main; //check weather animations

        if (mainWeather.includes("Clouds")) {
          this.stormy = false;
          this.cloudy = true;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }

        if (mainWeather.includes("Clouds")) {
          this.stormy = false;
          this.cloudy = true;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }

        if (mainWeather.includes("Thunderstorm") || mainWeather.includes("Rain")) {
          this.stormy = true;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = false;
        }

        if (mainWeather.includes("Clear") && this.isDay) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = true;
          this.clearNight = false;
          this.snowy = false;
        }

        if (mainWeather.includes("Clouds") && !this.isDay) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = true;
          this.snowy = false;
        }

        if (mainWeather.includes("Snow")) {
          this.stormy = false;
          this.cloudy = false;
          this.clearSky = false;
          this.clearNight = false;
          this.snowy = true;
        }

        this.visible = true;
        this.cityFound = false;
      } catch (error) {
        console.log(error);
        this.cityFound = true;
        this.visible = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b2d8f84",
  "0496fe2a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppHeader: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=index.js.map
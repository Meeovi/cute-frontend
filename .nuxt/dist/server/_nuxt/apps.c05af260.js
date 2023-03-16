import { u as useHead } from "./composables.e2080067.js";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "tslib";
import "ts-invariant";
import "zen-observable-ts";
import "symbol-observable";
import "cookie-es";
import "ohash";
import "graphql";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "@fortawesome/free-solid-svg-icons";
import "vue-instantsearch/vue3/es";
import "defu";
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "apps",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "ShopnCute App"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="features8 cid-sahWKkhPSb" id="features8-p"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.2", "background-color": "rgb(35, 35, 35)" })}"></div><div class="container"><div class="media-container-row"><div class="card col-12 col-md-6 col-lg-4"><div class="card-img"><span class="mbr-iconfont mobi-mbri-hearth mobi-mbri"></span></div><div class="card-box align-center"><h4 class="card-title mbr-fonts-style display-7"> ShopnCute</h4><p class="mbr-text mbr-fonts-style display-7">With the ShopnCute app, you can take your shopping bag with you. Simply download the app and receive notifications on the latest products, subscribe to stores within our site, and more. So what are you waiting for, get the app today <br><br></p><div class="mbr-section-btn text-center"><a href="/applications" class="btn btn-secondary display-4"> More </a></div></div></div><div class="card col-12 col-md-6 col-lg-4"><div class="card-img"><span class="mbr-iconfont mobi-mbri-website-theme mobi-mbri"></span></div><div class="card-box align-center"><h4 class="card-title mbr-fonts-style display-7"> ShopnBold</h4><p class="mbr-text mbr-fonts-style display-7">With the ShopnBold app, you can take your shopping bag with you. Simply download the app and receive notifications on the latest products, subscribe to stores within our site, and more. So what are you waiting for, get the app today \xA0<br></p><div class="mbr-section-btn text-center"><a href="https://www.shopnbold.com/apps" class="btn btn-secondary display-4" target="_blank"> More </a></div></div></div><div class="card col-12 col-md-6 col-lg-4"><div class="card-img"><span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span></div><div class="card-box align-center"><h4 class="card-title mbr-fonts-style display-7"> Meeovi</h4><p class="mbr-text mbr-fonts-style display-7">Meeovi has all the things you would expect, a social feel complete with profiles, activity feeds, social sharing, videos, music, and best of all a marketplace for you to sell and shop. Get the app today <br><br></p><div class="mbr-section-btn text-center"><a href="https://meeovi.com/apps" class="btn btn-secondary display-4" target="_blank"> More </a></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=apps.c05af260.js.map

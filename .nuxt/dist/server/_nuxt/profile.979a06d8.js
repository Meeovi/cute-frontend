import { u as useHead } from "./composables.e2080067.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_5 } from "./product1.c5b243b4.js";
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
const _imports_0 = "" + globalThis.__buildAssetsURL("face1.52550f08.jpg");
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "My Profile"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="testimonials2 cid-tyEh1JH2Y2" id="testimonials2-22"><div class="container"><div class="media-container-row"><div class="mbr-figure pr-lg-5" style="${ssrRenderStyle({ "width": "130%" })}"><img${ssrRenderAttr("src", _imports_0)}></div><div class="media-content px-3 align-self-center mbr-white py-2"><p class="mbr-text testimonial-text mbr-fonts-style display-7"> Loving the additions to the new version of Mobirise web dev app. It&#39;s a great, cleanly designed, user-friendly, not-bloated design program. So easy and a pleasure to use </p><p class="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7"> David F. </p><p class="mbr-author-desc mbr-fonts-style display-7"> DEVELOPER </p></div></div></div></section><section class="services1 cid-tyEgXKyICt" id="services1-21"><div class="container"><div class="row justify-content-center"><div class="title pb-5 col-12"><h2 class="align-left pb-3 mbr-fonts-style display-1"> My Favorites</h2></div><div class="card col-12 col-md-6 p-3 col-lg-4"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="card-box"><h4 class="card-title mbr-fonts-style display-5"> Watch Star </h4><p class="mbr-text mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium dolores doloribus eligendi eum illo placeat quis repellendus sequi tempore! </p><div class="mbr-section-btn align-left"><a href="#" class="btn btn-warning-outline display-4"> $ 790 </a></div></div></div></div><div class="card col-12 col-md-6 p-3 col-lg-4"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="card-box"><h4 class="card-title mbr-fonts-style display-5"> Watch Special </h4><p class="mbr-text mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium dolores doloribus eligendi eum illo placeat quis repellendus sequi tempore! </p><div class="mbr-section-btn align-left"><a href="#" class="btn btn-warning-outline display-4"> $ 690 </a></div></div></div></div><div class="card col-12 col-md-6 p-3 col-lg-4 last-child"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="card-box"><h4 class="card-title mbr-fonts-style display-5"> Watch Srong </h4><p class="mbr-text mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium dolores doloribus eligendi eum illo placeat quis repellendus sequi tempore! </p><div class="mbr-section-btn align-left"><a href="#" class="btn btn-warning-outline display-4"> $ 990 </a></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/User/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile.979a06d8.js.map

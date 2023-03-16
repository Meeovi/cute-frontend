import { u as useHead } from "./composables.e2080067.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./background6.ad963154.js";
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
  __name: "careers",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Careers"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contentSection" }, _attrs))}><section class="step3 cid-tuuCRUQAEW" id="step3-1q"><div class="container"><h2 class="mbr-section-title pb-3 mbr-fonts-style align-center display-2"> Career Opportunities</h2><div class="media-container-row"><div class="media-block" style="${ssrRenderStyle({ "width": "49%" })}"><div class="mbr-figure"><img${ssrRenderAttr("src", _imports_0)}></div></div><div class="step-container"><div class="card separline pb-4"><div class="step-element d-flex"><div class="step-wrapper pr-3"><div class="step d-flex align-items-center justify-content-center"> 1 </div></div><div class="step-text-content"><h4 class="mbr-step-title pb-3 mbr-fonts-style display-5">Specification </h4><p class="mbr-step-text mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat libero, bibendum in libero tempor, luctus volutpat ligula. Integer fringilla porttitor pretium. </p></div></div></div><div class="card separline pb-4"><div class="step-element d-flex"><div class="step-wrapper pr-3"><div class="step d-flex align-items-center justify-content-center"> 2 </div></div><div class="step-text-content"><h4 class="mbr-step-title pb-3 mbr-fonts-style display-5">Project Planning</h4><p class="mbr-step-text mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat libero, bibendum in libero tempor, luctus volutpat ligula. Integer fringilla porttitor pretium.</p></div></div></div><div class="card"><div class="step-element d-flex"><div class="step-wrapper pr-3"><div class="step d-flex align-items-center justify-content-center"> 3 </div></div><div class="step-text-content"><h4 class="mbr-step-title pb-3 mbr-fonts-style display-5">Deployment </h4><p class="mbr-step-text mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat libero, bibendum in libero tempor, luctus volutpat ligula. Integer fringilla porttitor pretium.</p></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=careers.ff401a4e.js.map

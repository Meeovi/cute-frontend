import { u as useHead } from "./composables.e2080067.js";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact Us"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="mbr-section form1 cid-tuuDY4WXsE" id="form1-1t"><div class="container"><div class="row justify-content-center"><div class="title col-12 col-lg-8"><h2 class="mbr-section-title align-center pb-3 mbr-fonts-style display-2"> CONTACT US</h2></div></div></div><div class="container"><div class="row justify-content-center"><div class="media-container-column col-lg-8" data-form-type="formoid"><form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Mobirise Form"><input type="hidden" name="email" data-form-email="true" value="zUV9ZvDDvlOJaO7W/sB6JVmR35cDiBr4IY170TjMIeMGW5W9e8XuVXEbGBWcmD1vkkeIEmz19A4RiNcpkfYfbskHzolqH6onW3maojPVKHcMEISUSg+yGxsfnqnE9cnR"><div class="row"><div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div><div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12"></div></div><div class="dragArea row"><div class="col-md-4 form-group" data-for="name"><label for="name-form1-1t" class="form-control-label mbr-fonts-style display-7">Name</label><input type="text" name="name" data-form-field="Name" required="required" class="form-control display-7" id="name-form1-1t"></div><div class="col-md-4 form-group" data-for="email"><label for="email-form1-1t" class="form-control-label mbr-fonts-style display-7">Email</label><input type="email" name="email" data-form-field="Email" required="required" class="form-control display-7" id="email-form1-1t"></div><div data-for="phone" class="col-md-4 form-group"><label for="phone-form1-1t" class="form-control-label mbr-fonts-style display-7">Phone</label><input type="tel" name="phone" data-form-field="Phone" class="form-control display-7" id="phone-form1-1t"></div><div data-for="message" class="col-md-12 form-group"><label for="message-form1-1t" class="form-control-label mbr-fonts-style display-7">Message</label><textarea name="message" data-form-field="Message" class="form-control display-7" id="message-form1-1t"></textarea></div><div class="col-md-12 input-group-btn align-center"><button type="submit" class="btn btn-primary btn-form display-4">CONTACT US</button></div></div></form></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Legal/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact.f130adeb.js.map

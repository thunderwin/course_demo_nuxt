import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { reactive, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-DjsnOoQx.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/h3/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/destr/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/hookable/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/ohash/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/klona/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/defu/dist/defu.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/scule/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unctx/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/pathe/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unhead/dist/server.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/devalue/index.js';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u8054\u7CFB\u6211 - \u7A0B\u5E8F\u5458\u5BFC\u5E08",
      meta: [
        { name: "description", content: "\u8054\u7CFB\u4E13\u4E1A\u7684\u7A0B\u5E8F\u5458\u5BFC\u5E08\uFF0C\u83B7\u53D6\u4E2A\u6027\u5316\u7684\u7F16\u7A0B\u5B66\u4E60\u6307\u5BFC\u548C\u804C\u4E1A\u89C4\u5212\u5EFA\u8BAE\u3002" }
      ]
    });
    reactive({
      name: "",
      email: "",
      phone: "",
      subject: "",
      experience: "",
      message: "",
      newsletter: false
    });
    ref(false);
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-a69ff8e7><section class="page-hero" data-v-a69ff8e7><div class="container" data-v-a69ff8e7><div class="hero-content" data-v-a69ff8e7><h1 class="page-title" data-v-a69ff8e7>\u8054\u7CFB\u6211</h1><p class="page-subtitle" data-v-a69ff8e7> \u51C6\u5907\u5F00\u59CB\u60A8\u7684\u7F16\u7A0B\u5B66\u4E60\u4E4B\u65C5\uFF1F\u6211\u5F88\u4E50\u610F\u4E0E\u60A8\u4EA4\u6D41\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u4E13\u4E1A\u7684\u7F16\u7A0B\u6307\u5BFC\u548C\u5EFA\u8BAE\u3002 </p></div></div></section><section class="faq-section" id="contact" data-v-a69ff8e7><div class="container" data-v-a69ff8e7><h2 class="section-title" data-v-a69ff8e7>\u5E38\u89C1\u95EE\u9898</h2><div class="faq-grid" data-v-a69ff8e7><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>\u{1F914} \u6211\u5B8C\u5168\u6CA1\u6709\u7F16\u7A0B\u57FA\u7840\uFF0C\u53EF\u4EE5\u5B66\u4F1A\u5417\uFF1F</h3><p data-v-a69ff8e7>\u5F53\u7136\u53EF\u4EE5\uFF01\u6211\u4E13\u95E8\u4E3A\u96F6\u57FA\u7840\u5B66\u5458\u8BBE\u8BA1\u4E86\u5B66\u4E60\u8DEF\u5F84\uFF0C\u4ECE\u6700\u57FA\u672C\u7684\u6982\u5FF5\u5F00\u59CB\uFF0C\u5FAA\u5E8F\u6E10\u8FDB\u3002\u6BCF\u4E2A\u4EBA\u90FD\u53EF\u4EE5\u5B66\u4F1A\u7F16\u7A0B\uFF0C\u5173\u952E\u662F\u627E\u5230\u5408\u9002\u7684\u65B9\u6CD5\u548C\u575A\u6301\u7EC3\u4E60\u3002</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>\u23F0 \u5B66\u4E60\u7F16\u7A0B\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF1F</h3><p data-v-a69ff8e7>\u8FD9\u53D6\u51B3\u4E8E\u60A8\u7684\u76EE\u6807\u548C\u6295\u5165\u65F6\u95F4\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u638C\u63E1\u57FA\u7840\u8BED\u6CD5\u9700\u89811-2\u4E2A\u6708\uFF0C\u80FD\u591F\u72EC\u7ACB\u5F00\u53D1\u5C0F\u9879\u76EE\u9700\u89813-6\u4E2A\u6708\uFF0C\u6210\u4E3A\u5408\u683C\u7684\u5F00\u53D1\u8005\u9700\u89816-12\u4E2A\u6708\u7684\u6301\u7EED\u5B66\u4E60\u3002</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>\u{1F4B0} \u8D39\u7528\u662F\u600E\u4E48\u8BA1\u7B97\u7684\uFF1F</h3><p data-v-a69ff8e7>\u6211\u63D0\u4F9B\u591A\u79CD\u670D\u52A1\u65B9\u5F0F\uFF1A\u4E00\u5BF9\u4E00\u6307\u5BFC\uFF08\u6309\u5C0F\u65F6\u6536\u8D39\uFF09\u3001\u8BFE\u7A0B\u5305\uFF08\u6309\u9636\u6BB5\u6536\u8D39\uFF09\u3001\u9879\u76EE\u6307\u5BFC\uFF08\u6309\u9879\u76EE\u6536\u8D39\uFF09\u3002\u5177\u4F53\u8D39\u7528\u4F1A\u6839\u636E\u60A8\u7684\u9700\u6C42\u5B9A\u5236\uFF0C\u9996\u6B21\u54A8\u8BE2\u514D\u8D39\u3002</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>\u{1F4DA} \u9700\u8981\u51C6\u5907\u4EC0\u4E48\u8BBE\u5907\u6216\u8F6F\u4EF6\uFF1F</h3><p data-v-a69ff8e7>\u53EA\u9700\u8981\u4E00\u53F0\u80FD\u4E0A\u7F51\u7684\u7535\u8111\u5373\u53EF\u5F00\u59CB\u5B66\u4E60\u3002\u6211\u4F1A\u6307\u5BFC\u60A8\u5B89\u88C5\u5FC5\u8981\u7684\u5F00\u53D1\u73AF\u5883\u548C\u5DE5\u5177\uFF0C\u5E76\u63A8\u8350\u9002\u5408\u7684\u5B66\u4E60\u8D44\u6E90\u3002</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>\u{1F3AF} \u5982\u4F55\u9009\u62E9\u9002\u5408\u7684\u7F16\u7A0B\u8BED\u8A00\uFF1F</h3><p data-v-a69ff8e7>\u9009\u62E9\u7F16\u7A0B\u8BED\u8A00\u8981\u8003\u8651\u60A8\u7684\u76EE\u6807\uFF1A\u7F51\u9875\u5F00\u53D1\u63A8\u8350JavaScript\u3001\u79FB\u52A8\u5E94\u7528\u63A8\u8350Flutter/React Native\u3001\u6570\u636E\u5206\u6790\u63A8\u8350Python\u3001\u6E38\u620F\u5F00\u53D1\u63A8\u8350C#\u7B49\u3002\u6211\u4F1A\u6839\u636E\u60A8\u7684\u5174\u8DA3\u548C\u76EE\u6807\u63D0\u4F9B\u5EFA\u8BAE\u3002</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>\u{1F550} \u4EC0\u4E48\u65F6\u5019\u53EF\u4EE5\u5F00\u59CB\uFF1F</h3><p data-v-a69ff8e7>\u968F\u65F6\u90FD\u53EF\u4EE5\u5F00\u59CB\uFF01\u6211\u7684\u65F6\u95F4\u6BD4\u8F83\u7075\u6D3B\uFF0C\u53EF\u4EE5\u6839\u636E\u60A8\u7684\u65E5\u7A0B\u5B89\u6392\u8BFE\u7A0B\u65F6\u95F4\u3002\u5EFA\u8BAE\u5148\u901A\u8FC7\u90AE\u4EF6\u6216\u5FAE\u4FE1\u8054\u7CFB\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B89\u6392\u4E00\u6B21\u514D\u8D39\u7684\u54A8\u8BE2\uFF0C\u4E86\u89E3\u60A8\u7684\u9700\u6C42\u3002</p></div></div></div></section><section class="cta-section" data-v-a69ff8e7><div class="container" data-v-a69ff8e7><div class="cta-content" data-v-a69ff8e7><h2 data-v-a69ff8e7>\u51C6\u5907\u5F00\u59CB\u60A8\u7684\u7F16\u7A0B\u4E4B\u65C5\u4E86\u5417\uFF1F</h2><p data-v-a69ff8e7>\u4E0D\u8981\u72B9\u8C6B\uFF0C\u8FC8\u51FA\u7B2C\u4E00\u6B65\uFF01\u6211\u5C06\u7AED\u8BDA\u4E3A\u60A8\u63D0\u4F9B\u4E13\u4E1A\u7684\u6307\u5BFC\u548C\u652F\u6301\u3002</p><div class="cta-buttons" data-v-a69ff8e7><button class="btn btn-primary" data-v-a69ff8e7>\u7ACB\u5373\u8054\u7CFB</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8FD4\u56DE\u9996\u9875`);
          } else {
            return [
              createTextVNode("\u8FD4\u56DE\u9996\u9875")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a69ff8e7"]]);

export { contactUs as default };
//# sourceMappingURL=contact-us-BMupWWf5.mjs.map

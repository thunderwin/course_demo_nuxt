import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-DjsnOoQx.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/h3/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/destr/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/hookable/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/ofetch/dist/node.mjs';
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
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u6587\u7AE0\u53D1\u5E03\u7BA1\u7406 - \u535A\u5BA2\u540E\u53F0",
      meta: [
        { name: "description", content: "\u535A\u5BA2\u6587\u7AE0\u53D1\u5E03\u548C\u7BA1\u7406\u9875\u9762" }
      ]
    });
    const article = ref({
      title: "",
      // 文章标题
      content: "",
      // 文章内容
      author: ""
      // 作者姓名
    });
    const currentTime = ref(/* @__PURE__ */ new Date());
    const isSubmitting = ref(false);
    const publishStatus = ref(null);
    const formatTime = (date) => {
      return date.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-container" }, _attrs))} data-v-7ecbed15><div class="page-header glass-card" data-v-7ecbed15><h1 class="title" data-v-7ecbed15>\u6587\u7AE0\u53D1\u5E03\u7BA1\u7406</h1><p class="subtitle" data-v-7ecbed15>\u521B\u5EFA\u548C\u53D1\u5E03\u60A8\u7684\u535A\u5BA2\u6587\u7AE0</p></div><div class="form-container glass-card" data-v-7ecbed15><form class="article-form" data-v-7ecbed15><div class="form-group" data-v-7ecbed15><label for="title" class="form-label" data-v-7ecbed15>\u6587\u7AE0\u6807\u9898</label><input id="title"${ssrRenderAttr("value", unref(article).title)} type="text" class="form-input glass-input" placeholder="\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898..." required data-v-7ecbed15></div><div class="form-group" data-v-7ecbed15><label for="author" class="form-label" data-v-7ecbed15>\u4F5C\u8005</label><input id="author"${ssrRenderAttr("value", unref(article).author)} type="text" class="form-input glass-input" placeholder="\u8BF7\u8F93\u5165\u4F5C\u8005\u59D3\u540D..." required data-v-7ecbed15></div><div class="form-group" data-v-7ecbed15><label for="content" class="form-label" data-v-7ecbed15>\u6587\u7AE0\u5185\u5BB9</label><textarea id="content" class="form-textarea glass-input" placeholder="\u8BF7\u8F93\u5165\u6587\u7AE0\u5185\u5BB9..." rows="12" required data-v-7ecbed15>${ssrInterpolate(unref(article).content)}</textarea></div><div class="form-group" data-v-7ecbed15><label class="form-label" data-v-7ecbed15>\u521B\u5EFA\u65F6\u95F4</label><div class="time-display glass-input" data-v-7ecbed15>${ssrInterpolate(formatTime(unref(currentTime)))}</div></div><div class="form-actions" data-v-7ecbed15><button type="submit" class="submit-btn glass-btn"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-7ecbed15>`);
      if (!unref(isSubmitting)) {
        _push(`<span data-v-7ecbed15>\u53D1\u5E03\u6587\u7AE0</span>`);
      } else {
        _push(`<span data-v-7ecbed15>\u53D1\u5E03\u4E2D...</span>`);
      }
      _push(`</button><button type="button" class="reset-btn glass-btn-secondary" data-v-7ecbed15> \u91CD\u7F6E\u8868\u5355 </button></div></form></div>`);
      if (unref(publishStatus)) {
        _push(`<div class="${ssrRenderClass([unref(publishStatus).type, "status-message"])}" data-v-7ecbed15>${ssrInterpolate(unref(publishStatus).message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ecbed15"]]);

export { admin as default };
//# sourceMappingURL=admin-Dg63q8yr.mjs.map

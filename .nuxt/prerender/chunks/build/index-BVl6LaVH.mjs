import { withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-DjsnOoQx.mjs';
import { u as useLazyFetch } from './fetch-iqg21vuw.mjs';
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
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/perfect-debounce/dist/index.mjs';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u535A\u5BA2\u5217\u8868 - \u6211\u7684\u535A\u5BA2",
      meta: [
        { name: "description", content: "\u6D4F\u89C8\u6211\u7684\u6240\u6709\u535A\u5BA2\u6587\u7AE0\uFF0C\u5206\u4EAB\u6280\u672F\u5FC3\u5F97\u548C\u6210\u957F\u7ECF\u5386" }
      ]
    });
    const { data: articles, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useLazyFetch("/articles", {
      server: false,
      // 在客户端获取数据
      baseURL: "http://localhost:7000",
      // 后端服务器地址
      transform: (data) => {
        return data.success ? data.data : [];
      }
    }, "$ns2Xa_1kks")), __temp = await __temp, __restore(), __temp);
    const getExcerpt = (content) => {
      if (!content) return "\u6682\u65E0\u5185\u5BB9...";
      const plainText = content.replace(/<[^>]*>/g, "");
      return plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;
    };
    const formatDate = (dateString) => {
      if (!dateString) return "\u672A\u77E5\u65E5\u671F";
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays === 1) {
        return `\u4ECA\u5929 ${date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
      } else if (diffDays <= 7) {
        return `${diffDays - 1}\u5929\u524D`;
      } else {
        return date.toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-container" }, _attrs))} data-v-137d593b><div class="hero-section" data-v-137d593b><div class="glass-card title-card" data-v-137d593b><h1 class="main-title" data-v-137d593b><span class="title-gradient" data-v-137d593b>\u{1F4DD} \u6211\u7684\u535A\u5BA2</span></h1><p class="subtitle" data-v-137d593b>\u5206\u4EAB\u6280\u672F\u5FC3\u5F97\uFF0C\u8BB0\u5F55\u6210\u957F\u8DB3\u8FF9</p></div></div>`);
      if (unref(pending)) {
        _push(`<div class="loading-section" data-v-137d593b><div class="glass-card loading-card" data-v-137d593b><div class="loading-spinner" data-v-137d593b></div><p data-v-137d593b>\u6B63\u5728\u52A0\u8F7D\u7CBE\u5F69\u5185\u5BB9...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="error-section" data-v-137d593b><div class="glass-card error-card" data-v-137d593b><div class="error-icon" data-v-137d593b>\u274C</div><h3 data-v-137d593b>\u52A0\u8F7D\u5931\u8D25</h3><p data-v-137d593b>${ssrInterpolate(unref(error).message || "\u83B7\u53D6\u6587\u7AE0\u5217\u8868\u65F6\u51FA\u73B0\u95EE\u9898")}</p><button class="retry-btn" data-v-137d593b> \u{1F504} \u91CD\u8BD5 </button></div></div>`);
      } else {
        _push(`<div class="articles-section" data-v-137d593b><div class="stats-bar" data-v-137d593b><div class="glass-card stats-card" data-v-137d593b><span class="stats-text" data-v-137d593b> \u{1F4CA} \u5171 ${ssrInterpolate(((_a = unref(articles)) == null ? void 0 : _a.length) || 0)} \u7BC7\u6587\u7AE0 </span></div></div>`);
        if (unref(articles) && unref(articles).length > 0) {
          _push(`<div class="articles-grid" data-v-137d593b><!--[-->`);
          ssrRenderList(unref(articles), (article) => {
            _push(`<article class="glass-card article-card" data-v-137d593b><h2 class="article-title" data-v-137d593b>${ssrInterpolate(article.title)}</h2><div class="article-excerpt" data-v-137d593b>${ssrInterpolate(getExcerpt(article.content))}</div><div class="article-meta" data-v-137d593b><div class="meta-item" data-v-137d593b><span class="meta-icon" data-v-137d593b>\u{1F464}</span><span class="meta-text" data-v-137d593b>${ssrInterpolate(article.author)}</span></div><div class="meta-item" data-v-137d593b><span class="meta-icon" data-v-137d593b>\u{1F4C5}</span><span class="meta-text" data-v-137d593b>${ssrInterpolate(formatDate(article.publishedAt))}</span></div></div><div class="read-more" data-v-137d593b><span class="read-more-text" data-v-137d593b>\u9605\u8BFB\u5168\u6587</span><span class="read-more-arrow" data-v-137d593b>\u2192</span></div></article>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="empty-section" data-v-137d593b><div class="glass-card empty-card" data-v-137d593b><div class="empty-icon" data-v-137d593b>\u{1F4DD}</div><h3 data-v-137d593b>\u6682\u65E0\u6587\u7AE0</h3><p data-v-137d593b>\u8FD8\u6CA1\u6709\u53D1\u5E03\u4EFB\u4F55\u6587\u7AE0\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01</p></div></div>`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-137d593b"]]);

export { index as default };
//# sourceMappingURL=index-BVl6LaVH.mjs.map

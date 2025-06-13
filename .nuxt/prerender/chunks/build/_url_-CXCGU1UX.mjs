import { withAsyncContext, watch, mergeProps, unref, useSSRContext } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useLazyFetch } from './fetch-iqg21vuw.mjs';
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
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = {
  __name: "[url]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const articleId = route.params.url;
    const { data: article, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useLazyFetch(`/articles/${articleId}`, {
      server: false,
      // 在客户端获取数据
      baseURL: "http://localhost:7000",
      // 后端服务器地址
      transform: (data) => {
        return data.success ? data.data : null;
      }
    }, "$VRerHQGuIR")), __temp = await __temp, __restore(), __temp);
    watch(article, (newArticle) => {
      if (newArticle) {
        useHead({
          title: `${newArticle.title} - \u6211\u7684\u535A\u5BA2`,
          meta: [
            {
              name: "description",
              content: getExcerpt(newArticle.content, 160)
            },
            {
              property: "og:title",
              content: newArticle.title
            },
            {
              property: "og:description",
              content: getExcerpt(newArticle.content, 160)
            }
          ]
        });
      }
    }, { immediate: true });
    const getExcerpt = (content, limit = 150) => {
      if (!content) return "\u6682\u65E0\u5185\u5BB9...";
      const plainText = content.replace(/<[^>]*>/g, "");
      return plainText.length > limit ? plainText.substring(0, limit) + "..." : plainText;
    };
    const formatContent = (content) => {
      if (!content) return "\u6682\u65E0\u5185\u5BB9";
      let formattedContent = content.replace(/\n/g, "<br>");
      formattedContent = formattedContent.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`(.*?)`/g, "<code>$1</code>");
      return formattedContent;
    };
    const getWordCount = (content) => {
      if (!content) return 0;
      const plainText = content.replace(/<[^>]*>/g, "");
      return plainText.length;
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
        return date.toLocaleString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "article-container" }, _attrs))} data-v-53b85787><div class="navigation-bar" data-v-53b85787><button class="glass-card back-btn" data-v-53b85787><span class="back-arrow" data-v-53b85787>\u2190</span><span data-v-53b85787>\u8FD4\u56DE\u5217\u8868</span></button></div>`);
      if (unref(pending)) {
        _push(`<div class="loading-section" data-v-53b85787><div class="glass-card loading-card" data-v-53b85787><div class="loading-spinner" data-v-53b85787></div><p data-v-53b85787>\u6B63\u5728\u52A0\u8F7D\u6587\u7AE0\u5185\u5BB9...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="error-section" data-v-53b85787><div class="glass-card error-card" data-v-53b85787><div class="error-icon" data-v-53b85787>\u274C</div><h3 data-v-53b85787>\u52A0\u8F7D\u5931\u8D25</h3><p data-v-53b85787>${ssrInterpolate(unref(error).message || "\u83B7\u53D6\u6587\u7AE0\u5185\u5BB9\u65F6\u51FA\u73B0\u95EE\u9898")}</p><button class="retry-btn" data-v-53b85787> \u{1F504} \u91CD\u8BD5 </button></div></div>`);
      } else if (unref(article)) {
        _push(`<article class="article-section" data-v-53b85787><header class="glass-card article-header" data-v-53b85787><h1 class="article-title" data-v-53b85787>${ssrInterpolate(unref(article).title)}</h1><div class="article-meta" data-v-53b85787><div class="meta-row" data-v-53b85787><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>\u{1F464}</span><span class="meta-label" data-v-53b85787>\u4F5C\u8005:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(unref(article).author)}</span></div><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>\u{1F4C5}</span><span class="meta-label" data-v-53b85787>\u53D1\u5E03:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(formatDate(unref(article).publishedAt))}</span></div></div><div class="meta-row" data-v-53b85787><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>\u{1F550}</span><span class="meta-label" data-v-53b85787>\u521B\u5EFA:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(formatDate(unref(article).createdAt))}</span></div><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>\u{1F4CA}</span><span class="meta-label" data-v-53b85787>\u5B57\u6570:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(getWordCount(unref(article).content))} \u5B57</span></div></div></div></header><div class="glass-card article-content" data-v-53b85787><div class="content-wrapper" data-v-53b85787>${(_a = formatContent(unref(article).content)) != null ? _a : ""}</div></div><footer class="glass-card article-footer" data-v-53b85787><div class="footer-actions" data-v-53b85787><button class="action-btn primary" data-v-53b85787><span class="btn-icon" data-v-53b85787>\u{1F4DD}</span><span data-v-53b85787>\u8FD4\u56DE\u5217\u8868</span></button><button class="action-btn secondary" data-v-53b85787><span class="btn-icon" data-v-53b85787>\u{1F4E4}</span><span data-v-53b85787>\u5206\u4EAB\u6587\u7AE0</span></button></div><div class="article-info" data-v-53b85787><p class="info-text" data-v-53b85787> \u611F\u8C22\u60A8\u7684\u9605\u8BFB\uFF01\u5982\u679C\u89C9\u5F97\u6587\u7AE0\u4E0D\u9519\uFF0C\u6B22\u8FCE\u5206\u4EAB\u7ED9\u670B\u53CB\u3002 </p></div></footer></article>`);
      } else {
        _push(`<div class="not-found-section" data-v-53b85787><div class="glass-card not-found-card" data-v-53b85787><div class="not-found-icon" data-v-53b85787>\u{1F4C4}</div><h3 data-v-53b85787>\u6587\u7AE0\u4E0D\u5B58\u5728</h3><p data-v-53b85787>\u62B1\u6B49\uFF0C\u60A8\u8981\u67E5\u770B\u7684\u6587\u7AE0\u53EF\u80FD\u5DF2\u88AB\u5220\u9664\u6216\u4E0D\u5B58\u5728\u3002</p><button class="back-home-btn" data-v-53b85787> \u{1F3E0} \u8FD4\u56DE\u9996\u9875 </button></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[url].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _url_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53b85787"]]);

export { _url_ as default };
//# sourceMappingURL=_url_-CXCGU1UX.mjs.map

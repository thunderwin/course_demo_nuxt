import { withAsyncContext, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { u as useLazyFetch } from "./fetch-iqg21vuw.js";
import { u as useHead } from "./v3-DjsnOoQx.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/hookable/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/unctx/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/radix3/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/defu/dist/defu.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/ufo/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/@unhead/vue/dist/index.mjs";
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
          title: `${newArticle.title} - 我的博客`,
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
      if (!content) return "暂无内容...";
      const plainText = content.replace(/<[^>]*>/g, "");
      return plainText.length > limit ? plainText.substring(0, limit) + "..." : plainText;
    };
    const formatContent = (content) => {
      if (!content) return "暂无内容";
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
      if (!dateString) return "未知日期";
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays === 1) {
        return `今天 ${date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
      } else if (diffDays <= 7) {
        return `${diffDays - 1}天前`;
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "article-container" }, _attrs))} data-v-53b85787><div class="navigation-bar" data-v-53b85787><button class="glass-card back-btn" data-v-53b85787><span class="back-arrow" data-v-53b85787>←</span><span data-v-53b85787>返回列表</span></button></div>`);
      if (unref(pending)) {
        _push(`<div class="loading-section" data-v-53b85787><div class="glass-card loading-card" data-v-53b85787><div class="loading-spinner" data-v-53b85787></div><p data-v-53b85787>正在加载文章内容...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="error-section" data-v-53b85787><div class="glass-card error-card" data-v-53b85787><div class="error-icon" data-v-53b85787>❌</div><h3 data-v-53b85787>加载失败</h3><p data-v-53b85787>${ssrInterpolate(unref(error).message || "获取文章内容时出现问题")}</p><button class="retry-btn" data-v-53b85787> 🔄 重试 </button></div></div>`);
      } else if (unref(article)) {
        _push(`<article class="article-section" data-v-53b85787><header class="glass-card article-header" data-v-53b85787><h1 class="article-title" data-v-53b85787>${ssrInterpolate(unref(article).title)}</h1><div class="article-meta" data-v-53b85787><div class="meta-row" data-v-53b85787><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>👤</span><span class="meta-label" data-v-53b85787>作者:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(unref(article).author)}</span></div><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>📅</span><span class="meta-label" data-v-53b85787>发布:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(formatDate(unref(article).publishedAt))}</span></div></div><div class="meta-row" data-v-53b85787><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>🕐</span><span class="meta-label" data-v-53b85787>创建:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(formatDate(unref(article).createdAt))}</span></div><div class="meta-item" data-v-53b85787><span class="meta-icon" data-v-53b85787>📊</span><span class="meta-label" data-v-53b85787>字数:</span><span class="meta-value" data-v-53b85787>${ssrInterpolate(getWordCount(unref(article).content))} 字</span></div></div></div></header><div class="glass-card article-content" data-v-53b85787><div class="content-wrapper" data-v-53b85787>${formatContent(unref(article).content) ?? ""}</div></div><footer class="glass-card article-footer" data-v-53b85787><div class="footer-actions" data-v-53b85787><button class="action-btn primary" data-v-53b85787><span class="btn-icon" data-v-53b85787>📝</span><span data-v-53b85787>返回列表</span></button><button class="action-btn secondary" data-v-53b85787><span class="btn-icon" data-v-53b85787>📤</span><span data-v-53b85787>分享文章</span></button></div><div class="article-info" data-v-53b85787><p class="info-text" data-v-53b85787> 感谢您的阅读！如果觉得文章不错，欢迎分享给朋友。 </p></div></footer></article>`);
      } else {
        _push(`<div class="not-found-section" data-v-53b85787><div class="glass-card not-found-card" data-v-53b85787><div class="not-found-icon" data-v-53b85787>📄</div><h3 data-v-53b85787>文章不存在</h3><p data-v-53b85787>抱歉，您要查看的文章可能已被删除或不存在。</p><button class="back-home-btn" data-v-53b85787> 🏠 返回首页 </button></div></div>`);
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
export {
  _url_ as default
};
//# sourceMappingURL=_url_-CXCGU1UX.js.map

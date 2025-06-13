import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { u as useHead } from "./v3-DjsnOoQx.js";
import { u as useLazyFetch } from "./fetch-iqg21vuw.js";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/unctx/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/radix3/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/defu/dist/defu.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "博客列表 - 我的博客",
      meta: [
        { name: "description", content: "浏览我的所有博客文章，分享技术心得和成长经历" }
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
      if (!content) return "暂无内容...";
      const plainText = content.replace(/<[^>]*>/g, "");
      return plainText.length > 150 ? plainText.substring(0, 150) + "..." : plainText;
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
        return date.toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-container" }, _attrs))} data-v-137d593b><div class="hero-section" data-v-137d593b><div class="glass-card title-card" data-v-137d593b><h1 class="main-title" data-v-137d593b><span class="title-gradient" data-v-137d593b>📝 我的博客</span></h1><p class="subtitle" data-v-137d593b>分享技术心得，记录成长足迹</p></div></div>`);
      if (unref(pending)) {
        _push(`<div class="loading-section" data-v-137d593b><div class="glass-card loading-card" data-v-137d593b><div class="loading-spinner" data-v-137d593b></div><p data-v-137d593b>正在加载精彩内容...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="error-section" data-v-137d593b><div class="glass-card error-card" data-v-137d593b><div class="error-icon" data-v-137d593b>❌</div><h3 data-v-137d593b>加载失败</h3><p data-v-137d593b>${ssrInterpolate(unref(error).message || "获取文章列表时出现问题")}</p><button class="retry-btn" data-v-137d593b> 🔄 重试 </button></div></div>`);
      } else {
        _push(`<div class="articles-section" data-v-137d593b><div class="stats-bar" data-v-137d593b><div class="glass-card stats-card" data-v-137d593b><span class="stats-text" data-v-137d593b> 📊 共 ${ssrInterpolate(((_a = unref(articles)) == null ? void 0 : _a.length) || 0)} 篇文章 </span></div></div>`);
        if (unref(articles) && unref(articles).length > 0) {
          _push(`<div class="articles-grid" data-v-137d593b><!--[-->`);
          ssrRenderList(unref(articles), (article) => {
            _push(`<article class="glass-card article-card" data-v-137d593b><h2 class="article-title" data-v-137d593b>${ssrInterpolate(article.title)}</h2><div class="article-excerpt" data-v-137d593b>${ssrInterpolate(getExcerpt(article.content))}</div><div class="article-meta" data-v-137d593b><div class="meta-item" data-v-137d593b><span class="meta-icon" data-v-137d593b>👤</span><span class="meta-text" data-v-137d593b>${ssrInterpolate(article.author)}</span></div><div class="meta-item" data-v-137d593b><span class="meta-icon" data-v-137d593b>📅</span><span class="meta-text" data-v-137d593b>${ssrInterpolate(formatDate(article.publishedAt))}</span></div></div><div class="read-more" data-v-137d593b><span class="read-more-text" data-v-137d593b>阅读全文</span><span class="read-more-arrow" data-v-137d593b>→</span></div></article>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="empty-section" data-v-137d593b><div class="glass-card empty-card" data-v-137d593b><div class="empty-icon" data-v-137d593b>📝</div><h3 data-v-137d593b>暂无文章</h3><p data-v-137d593b>还没有发布任何文章，敬请期待！</p></div></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-BVl6LaVH.js.map

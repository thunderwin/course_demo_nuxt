import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { u as useHead } from "./v3-DjsnOoQx.js";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/unctx/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/radix3/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/defu/dist/defu.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "文章发布管理 - 博客后台",
      meta: [
        { name: "description", content: "博客文章发布和管理页面" }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-container" }, _attrs))} data-v-7ecbed15><div class="page-header glass-card" data-v-7ecbed15><h1 class="title" data-v-7ecbed15>文章发布管理</h1><p class="subtitle" data-v-7ecbed15>创建和发布您的博客文章</p></div><div class="form-container glass-card" data-v-7ecbed15><form class="article-form" data-v-7ecbed15><div class="form-group" data-v-7ecbed15><label for="title" class="form-label" data-v-7ecbed15>文章标题</label><input id="title"${ssrRenderAttr("value", unref(article).title)} type="text" class="form-input glass-input" placeholder="请输入文章标题..." required data-v-7ecbed15></div><div class="form-group" data-v-7ecbed15><label for="author" class="form-label" data-v-7ecbed15>作者</label><input id="author"${ssrRenderAttr("value", unref(article).author)} type="text" class="form-input glass-input" placeholder="请输入作者姓名..." required data-v-7ecbed15></div><div class="form-group" data-v-7ecbed15><label for="content" class="form-label" data-v-7ecbed15>文章内容</label><textarea id="content" class="form-textarea glass-input" placeholder="请输入文章内容..." rows="12" required data-v-7ecbed15>${ssrInterpolate(unref(article).content)}</textarea></div><div class="form-group" data-v-7ecbed15><label class="form-label" data-v-7ecbed15>创建时间</label><div class="time-display glass-input" data-v-7ecbed15>${ssrInterpolate(formatTime(unref(currentTime)))}</div></div><div class="form-actions" data-v-7ecbed15><button type="submit" class="submit-btn glass-btn"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} data-v-7ecbed15>`);
      if (!unref(isSubmitting)) {
        _push(`<span data-v-7ecbed15>发布文章</span>`);
      } else {
        _push(`<span data-v-7ecbed15>发布中...</span>`);
      }
      _push(`</button><button type="button" class="reset-btn glass-btn-secondary" data-v-7ecbed15> 重置表单 </button></div></form></div>`);
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
export {
  admin as default
};
//# sourceMappingURL=admin-Dg63q8yr.js.map

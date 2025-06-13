import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/hookable/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/unctx/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/radix3/dist/index.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/defu/dist/defu.mjs";
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-container" }, _attrs))} data-v-97c5146b><div class="hero-section" data-v-97c5146b><h1 class="main-title" data-v-97c5146b>关于我们</h1><p class="subtitle" data-v-97c5146b>致力于创造卓越的数字体验</p></div><div class="content-section" data-v-97c5146b><div class="intro-card" data-v-97c5146b><h2 data-v-97c5146b>我们的故事</h2><p data-v-97c5146b> 我们是一支充满激情的技术团队，专注于为客户提供创新的数字解决方案。 从网站开发到移动应用，从用户体验设计到技术咨询，我们始终坚持用技术改变世界的信念。 </p></div><div class="values-grid" data-v-97c5146b><div class="value-card" data-v-97c5146b><div class="icon" data-v-97c5146b>🚀</div><h3 data-v-97c5146b>创新驱动</h3><p data-v-97c5146b>持续探索前沿技术，为客户带来突破性的解决方案</p></div><div class="value-card" data-v-97c5146b><div class="icon" data-v-97c5146b>🎯</div><h3 data-v-97c5146b>专业精神</h3><p data-v-97c5146b>严谨的工作态度，精湛的技术能力，确保项目质量</p></div><div class="value-card" data-v-97c5146b><div class="icon" data-v-97c5146b>🤝</div><h3 data-v-97c5146b>客户至上</h3><p data-v-97c5146b>深入理解客户需求，提供贴心的技术支持和服务</p></div></div><div class="team-section" data-v-97c5146b><h2 data-v-97c5146b>我们的团队</h2><p data-v-97c5146b> 汇聚了前端开发、后端架构、UI/UX设计、产品管理等多领域的专业人才。 我们相信团队的力量，通过协作创造更大的价值。 </p><div class="stats" data-v-97c5146b><div class="stat-item" data-v-97c5146b><span class="number" data-v-97c5146b>50+</span><span class="label" data-v-97c5146b>成功项目</span></div><div class="stat-item" data-v-97c5146b><span class="number" data-v-97c5146b>3年+</span><span class="label" data-v-97c5146b>行业经验</span></div><div class="stat-item" data-v-97c5146b><span class="number" data-v-97c5146b>99%</span><span class="label" data-v-97c5146b>客户满意度</span></div></div></div><div class="contact-cta" id="contact" data-v-97c5146b><h2 data-v-97c5146b>让我们一起创造未来</h2><p data-v-97c5146b>有项目需求或技术咨询？我们随时准备为您提供专业服务。</p><button class="cta-button" data-v-97c5146b>联系我们</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97c5146b"]]);
export {
  aboutUs as default
};
//# sourceMappingURL=about-us-GxNboT4g.js.map

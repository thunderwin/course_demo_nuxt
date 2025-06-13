import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { reactive, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "/Users/nate/codewarehouse/course/nate_blog/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "联系我 - 程序员导师",
      meta: [
        { name: "description", content: "联系专业的程序员导师，获取个性化的编程学习指导和职业规划建议。" }
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-a69ff8e7><section class="page-hero" data-v-a69ff8e7><div class="container" data-v-a69ff8e7><div class="hero-content" data-v-a69ff8e7><h1 class="page-title" data-v-a69ff8e7>联系我</h1><p class="page-subtitle" data-v-a69ff8e7> 准备开始您的编程学习之旅？我很乐意与您交流，为您提供专业的编程指导和建议。 </p></div></div></section><section class="faq-section" id="contact" data-v-a69ff8e7><div class="container" data-v-a69ff8e7><h2 class="section-title" data-v-a69ff8e7>常见问题</h2><div class="faq-grid" data-v-a69ff8e7><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>🤔 我完全没有编程基础，可以学会吗？</h3><p data-v-a69ff8e7>当然可以！我专门为零基础学员设计了学习路径，从最基本的概念开始，循序渐进。每个人都可以学会编程，关键是找到合适的方法和坚持练习。</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>⏰ 学习编程需要多长时间？</h3><p data-v-a69ff8e7>这取决于您的目标和投入时间。一般来说，掌握基础语法需要1-2个月，能够独立开发小项目需要3-6个月，成为合格的开发者需要6-12个月的持续学习。</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>💰 费用是怎么计算的？</h3><p data-v-a69ff8e7>我提供多种服务方式：一对一指导（按小时收费）、课程包（按阶段收费）、项目指导（按项目收费）。具体费用会根据您的需求定制，首次咨询免费。</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>📚 需要准备什么设备或软件？</h3><p data-v-a69ff8e7>只需要一台能上网的电脑即可开始学习。我会指导您安装必要的开发环境和工具，并推荐适合的学习资源。</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>🎯 如何选择适合的编程语言？</h3><p data-v-a69ff8e7>选择编程语言要考虑您的目标：网页开发推荐JavaScript、移动应用推荐Flutter/React Native、数据分析推荐Python、游戏开发推荐C#等。我会根据您的兴趣和目标提供建议。</p></div><div class="faq-item" data-v-a69ff8e7><h3 data-v-a69ff8e7>🕐 什么时候可以开始？</h3><p data-v-a69ff8e7>随时都可以开始！我的时间比较灵活，可以根据您的日程安排课程时间。建议先通过邮件或微信联系，我们可以安排一次免费的咨询，了解您的需求。</p></div></div></div></section><section class="cta-section" data-v-a69ff8e7><div class="container" data-v-a69ff8e7><div class="cta-content" data-v-a69ff8e7><h2 data-v-a69ff8e7>准备开始您的编程之旅了吗？</h2><p data-v-a69ff8e7>不要犹豫，迈出第一步！我将竭诚为您提供专业的指导和支持。</p><div class="cta-buttons" data-v-a69ff8e7><button class="btn btn-primary" data-v-a69ff8e7>立即联系</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`返回首页`);
          } else {
            return [
              createTextVNode("返回首页")
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
export {
  contactUs as default
};
//# sourceMappingURL=contact-us-BMupWWf5.js.map

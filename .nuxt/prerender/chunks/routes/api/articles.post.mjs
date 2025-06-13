import { defineEventHandler, getMethod, createError, readBody } from 'file:///Users/nate/codewarehouse/course/nate_blog/node_modules/h3/dist/index.mjs';

const articles_post = defineEventHandler(async (event) => {
  try {
    if (getMethod(event) !== "POST") {
      throw createError({
        statusCode: 405,
        statusMessage: "\u65B9\u6CD5\u4E0D\u88AB\u5141\u8BB8"
      });
    }
    const body = await readBody(event);
    if (!body.title || !body.content || !body.author) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5\uFF1A\u6807\u9898\u3001\u5185\u5BB9\u548C\u4F5C\u8005\u90FD\u662F\u5FC5\u9700\u7684"
      });
    }
    const article = {
      id: generateArticleId(),
      // 生成唯一ID
      title: body.title.trim(),
      content: body.content.trim(),
      author: body.author.trim(),
      createdAt: body.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      publishedAt: body.publishedAt || (/* @__PURE__ */ new Date()).toISOString(),
      status: "published",
      // 文章状态
      views: 0,
      // 初始浏览量
      likes: 0
      // 初始点赞数
    };
    await saveArticleToStorage(article);
    return {
      success: true,
      message: "\u6587\u7AE0\u53D1\u5E03\u6210\u529F",
      data: {
        id: article.id,
        title: article.title,
        author: article.author,
        publishedAt: article.publishedAt
      }
    };
  } catch (error) {
    console.error("\u6587\u7AE0\u53D1\u5E03API\u9519\u8BEF:", error);
    if (error.statusCode) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
    });
  }
});
function generateArticleId() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `article_${timestamp}_${random}`;
}
async function saveArticleToStorage(article) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log("\u6587\u7AE0\u5DF2\u4FDD\u5B58:", {
    id: article.id,
    title: article.title,
    author: article.author,
    publishedAt: article.publishedAt
  });
}

export { articles_post as default };
//# sourceMappingURL=articles.post.mjs.map

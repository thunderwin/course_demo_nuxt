/**
 * 文章发布API端点
 * 处理POST请求，接收文章数据并进行存储
 */
export default defineEventHandler(async (event) => {
  try {
    // 确保是POST请求
    if (getMethod(event) !== 'POST') {
      throw createError({
        statusCode: 405,
        statusMessage: '方法不被允许'
      })
    }

    // 解析请求体中的文章数据
    const body = await readBody(event)
    
    // 验证必填字段
    if (!body.title || !body.content || !body.author) {
      throw createError({
        statusCode: 400,
        statusMessage: '缺少必填字段：标题、内容和作者都是必需的'
      })
    }

    // 构建完整的文章对象
    const article = {
      id: generateArticleId(), // 生成唯一ID
      title: body.title.trim(),
      content: body.content.trim(),
      author: body.author.trim(),
      createdAt: body.createdAt || new Date().toISOString(),
      publishedAt: body.publishedAt || new Date().toISOString(),
      status: 'published', // 文章状态
      views: 0, // 初始浏览量
      likes: 0, // 初始点赞数
    }

    // 这里可以添加数据库存储逻辑
    // 目前暂时保存到内存中作为演示
    await saveArticleToStorage(article)

    // 返回成功响应
    return {
      success: true,
      message: '文章发布成功',
      data: {
        id: article.id,
        title: article.title,
        author: article.author,
        publishedAt: article.publishedAt
      }
    }

  } catch (error) {
    // 错误处理
    console.error('文章发布API错误:', error)
    
    // 如果是已知错误，直接抛出
    if (error.statusCode) {
      throw error
    }
    
    // 未知错误，返回500
    throw createError({
      statusCode: 500,
      statusMessage: '服务器内部错误'
    })
  }
})

/**
 * 生成唯一的文章ID
 * @returns {string} 格式化的文章ID
 */
function generateArticleId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8)
  return `article_${timestamp}_${random}`
}

/**
 * 将文章保存到存储中
 * 这里可以替换为实际的数据库操作
 * @param {Object} article - 文章对象
 */
async function saveArticleToStorage(article: any): Promise<void> {
  // 模拟数据库存储延迟
  await new Promise(resolve => setTimeout(resolve, 100))
  
  // 这里应该是实际的数据库存储逻辑
  // 例如：await db.articles.insert(article)
  
  console.log('文章已保存:', {
    id: article.id,
    title: article.title,
    author: article.author,
    publishedAt: article.publishedAt
  })
} 
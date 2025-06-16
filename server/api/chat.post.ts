/**
 * 聊天API端点
 * 处理POST请求，接收用户消息并返回AI回复
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

    // 解析请求体中的消息数据
    const body = await readBody(event)
    
    // 验证必填字段
    if (!body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: '缺少必填字段：message'
      })
    }

    // 模拟AI回复逻辑（这里可以集成真实的AI服务）
    const userMessage = body.message.trim()
    let aiReply = ''

    // 简单的回复逻辑 - 你可以替换为真实的AI API调用
    if (userMessage.includes('你好') || userMessage.includes('hello')) {
      aiReply = '你好！很高兴见到你，有什么可以帮助你的吗？'
    } else if (userMessage.includes('天气')) {
      aiReply = '抱歉，我暂时无法获取实时天气信息。建议你查看天气预报应用。'
    } else if (userMessage.includes('时间')) {
      aiReply = `现在的时间是：${new Date().toLocaleString('zh-CN')}`
    } else if (userMessage.includes('帮助')) {
      aiReply = '我是你的智能助手，可以回答问题、提供建议和进行对话。请随时告诉我你需要什么帮助！'
    } else {
      // 默认回复
      aiReply = `我收到了你的消息："${userMessage}"。作为一个智能助手，我正在努力理解并为你提供最好的回复。有什么具体问题我可以帮助你解决吗？`
    }

    // 记录对话（可选）
    console.log(`[聊天记录] 用户: ${userMessage}`)
    console.log(`[聊天记录] AI: ${aiReply}`)

    // 返回成功响应
    return {
      success: true,
      message: '消息处理成功',
      reply: aiReply,
      conversation_id: body.conversation_id || 'default',
      timestamp: Date.now()
    }

  } catch (error: any) {
    // 错误处理
    console.error('聊天API错误:', error)
    
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
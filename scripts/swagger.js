import { generateApi } from 'swagger-typescript-api'
import path from 'node:path'

// Node.js swagger 地址（原来的）
const nodeUrl = 'https://sandbox-api-v2.goldoge.com:8443/api-web/json'
// const nodeUrl = 'https://test.goldoge.com:8443/backend/api-web/json';

// Go swagger 地址（新的）
// Swagger UI 页面: https://test.goldoge.com:8443/v2/api/api/swagger/index.html
const goSwaggerBase =
  'https://test.goldoge.com:8443/v2/api/api/swagger/doc.json'

const commonConfig = {
  httpClientType: 'axios',
  modular: true,
  generateClient: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: true,
  unwrapResponseData: true,
  singleHttpClient: true,
  enumNamesAsValues: true,
  enumKeyResolverName: true,
  primitiveTypeConstructs: () => ({
    integer: {
      $default: 'number',
      int64: 'string',
    },
  }),
}

// 生成 Node.js API
const generateNodeApi = () => {
  console.log('正在生成 Node.js API...')
  return generateApi({
    ...commonConfig,
    url: nodeUrl,
    name: 'MySuperbApi.ts',
    output: path.resolve(process.cwd(), './src/request/package'),
  })
}

// 生成 Go API（带错误重试）
const generateGoApi = async () => {
  console.log('正在生成 Go API...')
  const goUrlOptions = [
    `${goSwaggerBase}/swagger/doc.json`,
    `${goSwaggerBase}/swagger.json`,
    `${goSwaggerBase}/v2/api-docs`,
  ]

  let lastError = null
  for (const url of goUrlOptions) {
    try {
      console.log(`尝试 Go swagger 端点: ${url}`)
      await generateApi({
        ...commonConfig,
        url,
        name: 'GoApi.ts',
        output: path.resolve(process.cwd(), './src/request/package/go'),
      })
      console.log(`✓ Go API 生成成功 (使用端点: ${url})`)
      return
    } catch (error) {
      console.warn(`端点 ${url} 失败:`, error.message)
      lastError = error
    }
  }

  // 如果所有端点都失败，抛出最后一个错误
  throw new Error(
    `所有 Go swagger 端点都失败。最后尝试的端点: ${goUrlOptions[goUrlOptions.length - 1]}\n错误: ${lastError?.message}`,
  )
}

// 同时生成两个 API
Promise.all([generateNodeApi(), generateGoApi()])
  .then(() => {
    console.log('✓ 所有 API 生成完成！')
    process.exit(0)
  })
  .catch((e) => {
    console.error('✗ 生成 API 时出错:', e.message || e)
    process.exit(1)
  })

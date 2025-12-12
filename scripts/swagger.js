import { generateApi } from 'swagger-typescript-api'
import path from 'node:path'

const url = 'https://xxx/json'

generateApi({
  url,
  httpClientType: 'axios',
  modular: true,
  name: 'MySuperbApi.ts',
  output: path.resolve(process.cwd(), './src/request'),
  generateClient: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: true,
  unwrapResponseData: true,
  singleHttpClient: true,
  enumNamesAsValues: true,
  enumKeyResolverName: true,
  // prettier: false,
  primitiveTypeConstructs: () => ({
    integer: {
      $default: 'number',
      int64: 'string',
    },
  }),
})
  .then(() => {
    process.exit(0)
  })
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })

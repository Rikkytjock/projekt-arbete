import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as dotenv from 'dotenv'
import { AppModule } from './app/app.module'

dotenv.config({ path: './apps/backend-wte/.env' })

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: 'http://localhost:4200'
  })

  app.setGlobalPrefix('api')

  const port = process.env['PORT'] || 3000
  await app.listen(port)

  Logger.log(`🚀 Application is running on: http://localhost:${port}/api`)
}

bootstrap()

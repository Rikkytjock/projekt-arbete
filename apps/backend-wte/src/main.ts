import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as dotenv from 'dotenv'
import express from 'express'
import { AppModule } from './app/app.module'
import stripeRoutes from './routes/stripe.routes'
dotenv.config({ path: './apps/backend-wte/.env' }) // ENV

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // CORS
  app.enableCors({
    origin: 'http://localhost:4200'
  })

  const expressApp = app.getHttpAdapter().getInstance()

  expressApp.use(express.json())

  expressApp.use('/api', stripeRoutes)

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  const port = process.env['PORT'] || 3000
  await app.listen(port)

  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()

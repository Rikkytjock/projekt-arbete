import { Module } from '@nestjs/common'
import { CheckoutModule } from '../checkout/checkout.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [CheckoutModule], // importerar checkout module
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

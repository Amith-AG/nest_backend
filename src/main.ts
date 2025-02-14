import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("process prot:",process.env.PORT)
  await app.listen(process.env.PORT,'0.0.0.0');
}
bootstrap();

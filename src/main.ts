import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const application = await NestFactory.create(AppModule);
  application.enableCors();
  await application.listen(3000);
}
bootstrap();

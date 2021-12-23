import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const application = await NestFactory.create(AppModule);
  application.enableCors();
  await application.listen(process.env.PORT || 3000);
}
bootstrap();

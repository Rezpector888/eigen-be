import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const swaggerConfig = new DocumentBuilder().setTitle("API Eigen").setDescription("Eigen Backend Test Case").setVersion("1.0").build();

  const swaggerOption: SwaggerCustomOptions = {
    explorer: true,
  }
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("/docs", app, swaggerDocument, swaggerOption);
  await app.listen(3000);
}
bootstrap();

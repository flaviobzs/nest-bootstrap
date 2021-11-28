import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  //   const options = new DocumentBuilder()
  //   .setTitle('Social Ocean API')
  //   .setDescription('')
  //   .setVersion('1.0')
  //   .addBearerAuth()
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  // const port = parseInt(process.env.PORT, 10) || 5000;
  // await app.listen(port, '0.0.0.0');

  await app.listen(3000);

  // const appUrl = await app.getUrl();
  // console.log(`Application is running on: ${appUrl}`);
}
bootstrap();

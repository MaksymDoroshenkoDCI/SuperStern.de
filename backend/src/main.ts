import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for Next.js frontend
  app.enableCors({
    origin: '*', // Allow all during development
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Set prefix for APIs
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 5001;
  await app.listen(port);
  console.log(`Backend server is running on: http://localhost:${port}/api`);
}
bootstrap();

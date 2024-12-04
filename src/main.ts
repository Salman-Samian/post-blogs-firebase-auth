import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FirebaseAdminService } from './firebase/firebase-admin.service';
import { FirebaseAuthMiddleware } from './middleware/firebase-auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new FirebaseAuthMiddleware(new FirebaseAdminService()).use);

  await app.listen(3000);
}
bootstrap();

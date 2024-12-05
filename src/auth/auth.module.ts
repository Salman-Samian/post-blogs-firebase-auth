import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { FirebaseAdminService } from '../firebase/firebase-admin.service';

@Module({
  controllers: [AuthController],
  providers: [FirebaseAdminService],
})
export class AuthModule {}

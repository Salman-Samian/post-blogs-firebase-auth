import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FirebaseAdminService } from '../firebase/firebase-admin.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  @Post('login')
  async login(@Body('token') token: string) {
    if (!token) {
      throw new HttpException(
        'Unauthorized: Missing token',
        HttpStatus.UNAUTHORIZED,
      );
    }

    try {
      const decodedToken = await this.firebaseAdminService.verifyToken(token);

      return {
        message: 'Authentication successful',
        userId: decodedToken.uid,
        email: decodedToken.email,
      };
    } catch {
      throw new HttpException(
        'Unauthorized: Invalid token',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}

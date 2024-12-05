import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { FirebaseAdminService } from '../firebase/firebase-admin.service';

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'GET' && req.path === '/') {
      return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res
        .status(401)
        .json({ message: 'Unauthorized: Missing or invalid token' });
    }

    const token = authHeader.split('Bearer ')[1];

    try {
      const decodedToken = await this.firebaseAdminService.verifyToken(token);
      req['user'] = decodedToken;
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: 'Unauthorized: Invalid token ' + error });
    }
  }
}

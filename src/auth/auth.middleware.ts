import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Your authentication logic goes here.
    // For example, you can check if the request has a valid JWT token:
    const auth = req.headers.authorization;

    if (!auth) {
      res.status(401).json({ message: 'Missing authentication token' });
      return;
    }

    try {
        jwt.verify(auth.split(' ')[1], 'secretKey');
        // TODO: Set the user in the request object using the decoded token
    } catch (error) {
        res.status(401).json({ message: 'Invalid authentication token' });
        return;
    }

    // TODO: Validate the token and set the user in the request object

    next();
  }
}
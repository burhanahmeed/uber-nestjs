import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Your authentication logic goes here.
    // For example, you can check if the request has a valid JWT token:
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: 'Missing authentication token' });
      return;
    }

    try {
        const decodedToken = jwt.verify(token, 'your_secret_key');
        // TODO: Set the user in the request object using the decoded token
    } catch (error) {
        res.status(401).json({ message: 'Invalid authentication token' });
        return;
    }

    // TODO: Validate the token and set the user in the request object

    next();
  }
}
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async login(username: string, password: string): Promise<boolean> {
        // Your login logic using Prisma goes here
        // Example: Check if the username and password match a user in the database
        const user = await this.prisma.user.findUnique({
            where: { username },
        });

        if (!user || user.password !== password) {
            return false;
        }

        // Generate JWT token
        const token = sign({ username }, 'secretKey');

        return token;
    }
}
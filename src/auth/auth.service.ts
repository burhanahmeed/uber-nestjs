import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async login(email: string, password: string): Promise<boolean> {
        // Your login logic using Prisma goes here
        // Example: Check if the username and password match a user in the database
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user || user.password !== password) {
            return false;
        }

        // Generate JWT token
        const token = sign({ email }, 'secretKey');

        return token;
    }

    async signup(email: string, password: string): Promise<boolean> {
        // Your signup logic using Prisma goes here
        // Example: Create a new user with the provided email and password
        const newUser = await this.prisma.user.create({
            data: {
                email,
                password,
            },
        });
        if (!newUser) {
            return false;
        }
        return true;
    }
}
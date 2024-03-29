import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        // Call the authentication service to handle the login logic
        const token = await this.authService.login(loginDto.username, loginDto.password);
        return { token };
    }

    @Post('signup')
    async signup(@Body() signupDto: LoginDto) {
        // Call the authentication service to handle the signup logic
        const user = await this.authService.signup(signupDto.username, signupDto.password);
        return { user };
    }
}
import { Controller, Post, Body, UnauthorizedException, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: any) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return this.authService.login(user);
  }

  @Post('setup-admin')
  async setupAdmin(@Body() body: any) {
    const { email, password } = body;
    if (!email || !password) {
      throw new UnauthorizedException('Email and password required');
    }
    return this.authService.registerAdmin(email, password);
  }
}

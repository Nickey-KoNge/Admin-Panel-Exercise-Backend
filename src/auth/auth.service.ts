// src/auth/auth.service.ts
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUserService } from 'src/modules/user/services/user.service';
import { USER_SERVICE } from 'src/modules/user/constants/user.tokens';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid password');

    const { ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id, role: user.role_id };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'accessSecret',
      expiresIn: '1h',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET || 'refreshSecret',
      expiresIn: '1d',
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_REFRESH_SECRET || 'refreshSecret',
      });

      const newAccessToken = this.jwtService.sign(
        { username: payload.username, sub: payload.sub, role: payload.role },
        {
          secret: process.env.JWT_SECRET || 'accessSecret',
          expiresIn: '1h',
        },
      );

      return { access_token: newAccessToken };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}

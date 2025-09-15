// src/auth/auth.service.ts

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUserService } from 'src/modules/user/services/user.service';
import { USER_SERVICE } from 'src/modules/user/constants/user.tokens';
import { ConfigService } from '@nestjs/config'; // ✅ Import ConfigService

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(USER_SERVICE) private readonly userService: IUserService,
    private readonly configService: ConfigService, // ✅ Inject ConfigService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user; // Exclude password from the result
    return result;
  }

  async login(user: any) {
    // The payload now includes name, sub (subject, user ID), and role
    const payload = { name: user.name, sub: user.id, role: user.role_id };

    const accessToken = this.jwtService.sign(payload); // No need to specify options, they're taken from the module registration

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'), // ✅ Use ConfigService
      expiresIn: '7d', // A longer expiration for the refresh token
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role_id: user.role_id,
      },
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async refreshToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'), // ✅ Use ConfigService
      });

      // Create a new payload for the access token, excluding refresh-specific claims
      const newPayload = {
        name: payload.name,
        sub: payload.sub,
        role: payload.role,
      };
      const newAccessToken = this.jwtService.sign(newPayload);

      return { accessToken: newAccessToken };
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token.');
    }
  }
}

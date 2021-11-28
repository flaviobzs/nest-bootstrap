import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersRepository } from '../../users/user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(jwtPayload: any): Promise<any> {
    // verificar o que vem no header aqui ( jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken())
    const user = await this.usersRepository.findOne({ id: jwtPayload.id });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

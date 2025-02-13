import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateOAuthLogin(email: string): string {
    if (!email.endsWith("@asn.com")) {
      throw new Error("Accès refusé");
    }

    const payload = { email };
    return this.jwtService.sign(payload);
  }
}

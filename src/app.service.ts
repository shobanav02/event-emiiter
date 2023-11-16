import { Injectable ,Logger } from '@nestjs/common';
import  { UserRegisteredEvent } from './user.registered';

class RegisterDto {
  email: string;
  password: string;
}

@Injectable()
export class AppService {

  constructor (private readonly userEvent: UserRegisteredEvent) {}
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  async register(payload: RegisterDto) {
    this.logger.log('Register');
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 5000));
    this.logger.log('New user registered...', payload.email);
    // this.logger.error("error");
    // this.logger.warn("warning");
    // this.logger.debug("debug");
    // this.logger.fatal("fatal");
    // this.logger.verbose("verbose")
    this.userEvent.emitEvent(payload.email)
      
  }
}

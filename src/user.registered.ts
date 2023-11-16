import { Injectable } from "@nestjs/common";
import { EventEmitter2 , OnEvent} from "@nestjs/event-emitter";

@Injectable()
export class UserRegisteredEvent {
    constructor(private readonly eventEmitter: EventEmitter2) {}

    emitEvent(payload) {
        this.eventEmitter.emit('msg.sent',`New user ${payload} has been registerd`);
    }

    @OnEvent('msg.sent') 
    listerToEvent(msg: string) {
        console.log('Message Received : ', msg)
    }
}
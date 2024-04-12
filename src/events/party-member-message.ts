import Event from '../core/event';
import BotClient from '../core/client';
import { PartyMessage } from 'fnbr';

class PartyMemberMessageEvent extends Event {
    constructor() {
        super({
            name: 'party:member:message',
        })
    }
    
    async run (client: BotClient, message: PartyMessage) {
        if (message.content.startsWith(client.settings.prefix)) {
            return message.reply('');
        }
    }
}

export default new PartyMemberMessageEvent;

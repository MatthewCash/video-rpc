const DiscordRPC = require('discord-rpc');

let client = new DiscordRPC.Client({transport: 'ipc'});

client.on('ready', () => {
    client.setActivity({
        state: 'Hello!',
        details: 'Discord RPC',
        largeImageKey: 'logo',
        largeImageText: 'Hovering',
        instance: false

    });
});

client.login({clientId: '511309294671626251'});
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Inicializa o cliente com autenticação local
const client = new Client({
    authStrategy: new LocalAuth()
});

// Gera o QR code para autenticação
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR code gerado. Escaneie com o WhatsApp.');
});

// Confirmação de que o cliente está pronto
client.on('ready', () => {
    console.log('Cliente está pronto!');
});

// Recebe mensagens e responde
client.on('message', message => {
    console.log(`Mensagem recebida: ${message.body}`);
    if (message.body === 'Oi') {
        message.reply('Olá! Como posso ajudar?');
    }
});

// Inicializa o cliente
client.initialize();

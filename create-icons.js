import fs from 'fs';
import { createCanvas } from 'canvas';

function createIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Fundo azul
    ctx.fillStyle = '#00aed1';
    ctx.fillRect(0, 0, size, size);
    
    // Texto
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size/4}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('GM', size/2, size/2);
    
    return canvas.toBuffer('image/png');
}

// Criar diretório se não existir
if (!fs.existsSync('public/icons')) {
    fs.mkdirSync('public/icons', { recursive: true });
}

// Criar ícones
fs.writeFileSync('public/icons/icon-192x192.png', createIcon(192));
fs.writeFileSync('public/icons/icon-512x512.png', createIcon(512));

console.log('Ícones criados com sucesso!'); 
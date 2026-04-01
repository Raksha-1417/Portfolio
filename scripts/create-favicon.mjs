/**
 * Generates a minimal valid 1x1 transparent favicon.ico in public/
 * Run with: node scripts/create-favicon.mjs
 */
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Minimal valid 1x1 transparent ICO (32bpp BGRA)
// ICO header (6 bytes) + ICONDIRENTRY (16 bytes) + BITMAPINFOHEADER (40 bytes) + pixel (4 bytes) + AND mask (4 bytes) = 70 bytes
const bytes = Buffer.from([
  // ICONDIR header
  0x00, 0x00,             // Reserved
  0x01, 0x00,             // Type: 1 = ICO
  0x01, 0x00,             // Count: 1 image

  // ICONDIRENTRY
  0x01,                   // Width: 1px
  0x01,                   // Height: 1px
  0x00,                   // ColorCount: 0
  0x00,                   // Reserved
  0x01, 0x00,             // Planes: 1
  0x20, 0x00,             // BitCount: 32bpp
  0x30, 0x00, 0x00, 0x00, // BytesInRes: 48 (40 header + 4 pixel + 4 AND mask)
  0x16, 0x00, 0x00, 0x00, // ImageOffset: 22 (after ICONDIR + ICONDIRENTRY)

  // BITMAPINFOHEADER (40 bytes)
  0x28, 0x00, 0x00, 0x00, // biSize: 40
  0x01, 0x00, 0x00, 0x00, // biWidth: 1
  0x02, 0x00, 0x00, 0x00, // biHeight: 2 (1*2 for XOR+AND in ICO format)
  0x01, 0x00,             // biPlanes: 1
  0x20, 0x00,             // biBitCount: 32
  0x00, 0x00, 0x00, 0x00, // biCompression: BI_RGB
  0x04, 0x00, 0x00, 0x00, // biSizeImage: 4 bytes
  0x00, 0x00, 0x00, 0x00, // biXPelsPerMeter
  0x00, 0x00, 0x00, 0x00, // biYPelsPerMeter
  0x00, 0x00, 0x00, 0x00, // biClrUsed
  0x00, 0x00, 0x00, 0x00, // biClrImportant

  // XOR bitmap: 1 pixel, fully transparent (BGRA: 0,0,0,0)
  0x00, 0x00, 0x00, 0x00,

  // AND mask: 4 bytes (1 bit per pixel, row-padded to 4 bytes); 0 = show pixel
  0x00, 0x00, 0x00, 0x00,
]);

const outPath = join(__dirname, '..', 'public', 'favicon.ico');
writeFileSync(outPath, bytes);
console.log(`✅ Created favicon.ico (${bytes.length} bytes) at ${outPath}`);

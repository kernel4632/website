/**
 * 生成 Favicon 脚本
 * 将 avatar.jpg 转换为各种尺寸的 favicon 文件
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { writeFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const publicDir = join(rootDir, "public");
const avatarPath = join(publicDir, "assets", "avatar.jpg");

async function generateFavicons() {
  console.log("开始生成 favicon 文件...");

  try {
    // 读取原始头像
    const avatar = sharp(avatarPath);

    // 生成 favicon-16x16.png
    await avatar
      .clone()
      .resize(16, 16, { fit: "cover" })
      .png()
      .toFile(join(publicDir, "favicon-16x16.png"));
    console.log("✓ 生成 favicon-16x16.png");

    // 生成 favicon-32x32.png
    await avatar
      .clone()
      .resize(32, 32, { fit: "cover" })
      .png()
      .toFile(join(publicDir, "favicon-32x32.png"));
    console.log("✓ 生成 favicon-32x32.png");

    // 生成 apple-touch-icon.png (180x180)
    await avatar
      .clone()
      .resize(180, 180, { fit: "cover" })
      .png()
      .toFile(join(publicDir, "apple-touch-icon.png"));
    console.log("✓ 生成 apple-touch-icon.png");

    // 生成 favicon.ico (包含多个尺寸: 16x16, 32x32, 48x48)
    // ICO 格式需要特殊处理，我们使用 PNG 作为主要格式
    // 并生成一个 32x32 的 ico 文件
    const ico32Buffer = await avatar
      .clone()
      .resize(32, 32, { fit: "cover" })
      .png()
      .toBuffer();

    const ico16Buffer = await avatar
      .clone()
      .resize(16, 16, { fit: "cover" })
      .png()
      .toBuffer();

    const ico48Buffer = await avatar
      .clone()
      .resize(48, 48, { fit: "cover" })
      .png()
      .toBuffer();

    // 创建 ICO 文件
    // ICO 文件格式: Header + Directory Entries + Image Data
    const images = [
      { size: 16, buffer: ico16Buffer },
      { size: 32, buffer: ico32Buffer },
      { size: 48, buffer: ico48Buffer },
    ];

    // ICO Header (6 bytes)
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved, must be 0
    header.writeUInt16LE(1, 2); // Image type: 1 = ICO
    header.writeUInt16LE(images.length, 4); // Number of images

    // Calculate offsets
    const directorySize = 16 * images.length;
    let currentOffset = 6 + directorySize;

    // Directory entries (16 bytes each)
    const directories = [];
    for (const img of images) {
      const dir = Buffer.alloc(16);
      dir.writeUInt8(img.size === 256 ? 0 : img.size, 0); // Width
      dir.writeUInt8(img.size === 256 ? 0 : img.size, 1); // Height
      dir.writeUInt8(0, 2); // Color palette
      dir.writeUInt8(0, 3); // Reserved
      dir.writeUInt16LE(1, 4); // Color planes
      dir.writeUInt16LE(32, 6); // Bits per pixel
      dir.writeUInt32LE(img.buffer.length, 8); // Image size
      dir.writeUInt32LE(currentOffset, 12); // Image offset
      directories.push(dir);
      currentOffset += img.buffer.length;
    }

    // Combine all parts
    const icoBuffer = Buffer.concat([
      header,
      ...directories,
      ...images.map((img) => img.buffer),
    ]);

    writeFileSync(join(publicDir, "favicon.ico"), icoBuffer);
    console.log("✓ 生成 favicon.ico");

    // 额外生成一个 192x192 的 PNG 用于 PWA
    await avatar
      .clone()
      .resize(192, 192, { fit: "cover" })
      .png()
      .toFile(join(publicDir, "icon-192x192.png"));
    console.log("✓ 生成 icon-192x192.png");

    // 生成 512x512 的 PNG 用于 PWA
    await avatar
      .clone()
      .resize(512, 512, { fit: "cover" })
      .png()
      .toFile(join(publicDir, "icon-512x512.png"));
    console.log("✓ 生成 icon-512x512.png");

    console.log("\n所有 favicon 文件生成完成！");
  } catch (error) {
    console.error("生成 favicon 时出错:", error);
    process.exit(1);
  }
}

generateFavicons();

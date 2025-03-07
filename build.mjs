// Custom build script for Vercel deployment
import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get directory name using ES module approach
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting Vercel build process');

// Use Vite's JavaScript API instead of CLI
async function buildProject() {
  try {
    console.log('🏗️ Building application...');
    await build({
      root: __dirname,
      configFile: resolve(__dirname, 'vite.config.js'),
      logLevel: 'info'
    });
    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildProject();

// Custom build script for Vercel
import { execSync } from 'child_process';

console.log('🚀 Starting custom Vercel build script');

try {
  // Explicitly set permissions on the vite binary (this helps on Linux-based environments like Vercel)
  console.log('📋 Setting permissions on vite binary...');
  try {
    execSync('chmod +x ./node_modules/.bin/vite', { stdio: 'inherit' });
  } catch (error) {
    console.warn('⚠️ Could not set permissions, but continuing build process:', error.message);
  }

  // Build the app using a direct node call to the Vite binary
  console.log('🏗️ Building application...');
  execSync('node ./node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

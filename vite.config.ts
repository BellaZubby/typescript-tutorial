import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    /*the line of code below, gives a command to replace @ and replace with current directory name and src*/
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]
  }
})

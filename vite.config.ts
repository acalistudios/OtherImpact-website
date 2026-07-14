import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If this project ever lives in a Dropbox/OneDrive-synced folder, keep
  // Vite's dep cache outside it — those services lock files mid-write and
  // cause EBUSY errors on deps_temp renames.
  cacheDir: join(tmpdir(), 'otherimpact-website-vite-cache'),
})

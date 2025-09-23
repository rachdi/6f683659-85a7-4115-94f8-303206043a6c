{
  "name": "vite_react_shadcn_ts",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.11.0",
    "gh-pages": "^5.0.0",
    "lovable-tagger": "^1.1.9",
    "typescript": "^5.2.2",
    "vite": "^7.1.7"
  }
}

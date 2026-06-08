/**
 * PM2 process file for Plesk deployment (no Docker).
 * Run from project root: pm2 startOrReload ecosystem.config.cjs --env production
 */
const appPort = process.env.APP_PORT || process.env.PORT || 3000;

module.exports = {
  apps: [
    {
      name: process.env.PM2_APP_NAME || "soaraat-landing",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: `start -p ${appPort}`,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "750M",
      env_production: {
        NODE_ENV: "production",
        PORT: appPort,
      },
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      merge_logs: true,
      time: true,
    },
  ],
};

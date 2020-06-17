module.exports = {
  apps: [
    {
      name: "jin-pm",
      script: "./bin/http.js",
      watch: true,
      env: {
        NODE_ENV: "development",
        watch: true,
      },
      env_dev: {
        instances: 0,
        NODE_ENV: "production",
        HOST: "localhost",
        PORT: 3000,
      },
      env_dev: {
        instances: 0,
        NODE_ENV: "production",
        exec_mode: "cluster",
        HOST: "localhost",
        PORT: 3000,
      },
    },
  ],
};

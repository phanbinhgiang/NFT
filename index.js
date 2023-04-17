const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

// dev1
(() => {
  buildSetup();
  startCreating();
})();

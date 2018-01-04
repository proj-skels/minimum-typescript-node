var fs = require('fs');

console.log("Initializing the project.");

var providedPackage = JSON.parse(fs.readFileSync('tasks/assets/package.json'));
var initedPackage = JSON.parse(fs.readFileSync('package.json'));
[
  'main',
  'scripts',
  'devDependencies',
  'dependencies'
].forEach((property) => {
  initedPackage[property] = providedPackage[property];
});
fs.writeFileSync('package.json', JSON.stringify(initedPackage, null, 2));

console.log("Initialization complete.");
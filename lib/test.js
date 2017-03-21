const util = require('./util');

//bump versions (patch, minor, major)
const patch = util.bump('3.3.3', 'patch');
const minor = util.bump('3.3.3', 'minor');
const major = util.bump('3.3.3', 'major');


console.log('patch', patch);
console.log('minor', minor);
console.log('major', major);

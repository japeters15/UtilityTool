# UtilityTool
A tool used for Debugging your code!

# Installation
Inside of terminal type, "npm install utility_debug_tool --sav-dev".

# Usage
In order to start the debug tool you must add "DEBUG=true" in the front of "nodemon src/server.js"

## Example Usage

```javascript

const util = require('utility_debug_tool');

//bump versions (patch, minor, major)
const patch = util.bump('3.3.3', 'patch');
const minor = util.bump('3.3.3', 'minor');
const major = util.bump('3.3.3', 'major');

// Success messages
util.debug('patch', patch, true);
util.debug('minor', minor, true);

// Error Messages
util.debug('major', major, false);


```

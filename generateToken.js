const crypto = require('crypto');

// Generate a random byte buffer and convert to hexadecimal
const jwtSecret = crypto.randomBytes(32).toString('hex');

console.log('Generated JWT Secret:', jwtSecret);

const salt = crypto.randomBytes(16).toString('base64');
console.log('Generated Salt:', salt);


const adminAuthSecret = crypto.randomBytes(32).toString('base64');
console.log('Generated Admin Auth Secret:', adminAuthSecret);

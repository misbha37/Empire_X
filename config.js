const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349152768261",
SESSION_ID: process.env.SESSION_ID || "acM23ISK#8IrRef2HWa36mGO3q3Groc4LhEvyrQxIjeyxB7gyjKk",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/g4qzs7.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR EMPIRE_V1 IS ONLINE",
PREFIX: process.env.PREFIX || ".",
OWNER_REACT: process.env.OWNER_REACT || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_NAME: process.env.OWNER_NAME || "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐞𝐦𝐩𝐢𝐫𝐞",
BOT_NAME: process.env.BOT_NAME || "Empire_X",
};

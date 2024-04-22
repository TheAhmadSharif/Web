const totalCPUs = require("os")
const cpuCount = totalCPUs.cpus().length;


console.log(' : ', cpuCount);
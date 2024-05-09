const http = require('http');
const os = require('os');

function asyncOperation(callback) {
    const delay = Math.random() * 1000;
    setTimeout(callback, delay);
}

function handleRequest(req, res) {
    asyncOperation(() => {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');

        const responseData = {
            cpu: os.cpus(),
            platform: os.platform(),
            type: os.type(),
            release: os.release(),
            totalMemory: os.totalmem(),
            freeMemory: os.freemem()
        };


        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(responseData));
    });
}

const server = http.createServer((req, res) => {
    handleRequest(req, res);
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

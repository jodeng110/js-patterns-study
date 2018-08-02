const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const port = 3000;
const mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css",
    "woff": "application/font-woff",
    "woff2": "application/font-woff2",
    "ttf": "application/x-font-ttf",
    "eot": "application/vnd.ms-fontobject",
    "svg": "image/svg+xml",
    "json": "application/json"
};

const app = function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    fs.readFile(`${path.join(__dirname, '../public')}${urlObj.pathname}`, function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }

        const filename = path.basename(urlObj.pathname);
        const mimeType = mimeTypes[filename.split('.').pop()];
        res.writeHead(200, {"Content-Type": mimeType});
        res.end(data);
    });

};


const server = http.createServer(app);
server.listen(port, function () {
    console.log(`server has started on port ${port}...(localhost:${port})`);
});
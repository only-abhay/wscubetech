import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    const filename = urlParse.query.filename;

    // CREATE FILE
    if (urlParse.pathname === "/create") {
        fs.writeFile(filename, "hello brother", (err) => {
            if (err) {
                return res.end("file not created");
            }
            return res.end("file created");
        });
    }

    // READ FILE
    else if (urlParse.pathname === "/read") {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                return res.end("file not readable");
            }
            return res.end(data); // 👈 actual content
        });
    }

    // DELETE FILE
    else if (urlParse.pathname === "/delete") {
        fs.unlink(filename, (err) => {
            if (err) {
                return res.end("file not deleted");
            }
            return res.end("file deleted");
        });
    }

    // DEFAULT
    else {
        res.end("Invalid route");
    }
});

server.listen(5000, () => {
    console.log("server is running on port 5000");
});
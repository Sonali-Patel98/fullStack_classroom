const http = require('http');
const fs = require('fs');
const os = require('os');

const server = http.createServer((req, res) => {

    // ---------------- HOME ----------------
    if (req.url === '/') {
        res.end("Hello this is Section G");
    }

    // ---------------- ABOUT ----------------
    else if (req.url === '/about') {
        res.end(`
Name: Sonali Patel
Roll No: 12345
Section: G
DOB: 01-01-2004
Favorite Sport: Cricket
Favorite Player: Virat Kohli
        `);
    }

    // ---------------- WRITE LOGS ----------------
    else if (req.url === '/write-logs') {
        const log = `Log generated at: ${new Date().toLocaleString()}\n`;
        fs.appendFileSync("logs.txt", log);
        res.end("Log written successfully");
    }

    // ---------------- READ LOGS ----------------
    else if (req.url === '/read-logs') {
        if (fs.existsSync("logs.txt")) {
            const data = fs.readFileSync("logs.txt", "utf-8");
            res.end(data);
        } else {
            res.end("File does not exist");
        }
    }

    // ---------------- EDIT FILE ----------------
    else if (req.url === '/edit') {
        fs.writeFileSync("logs.txt", "hiii.\n");
        res.end("File edited successfully");
    }

    // ---------------- RENAME FILE ----------------
    else if (req.url === '/rename') {
        if (fs.existsSync("logs.txt")) {
            fs.renameSync("logs.txt", "renamed.txt");
            res.end("File renamed successfully");
        } else {
            res.end("File not found");
        }
    }

    // ---------------- COPY FILE ----------------
    else if (req.url === '/copy') {
        if (fs.existsSync("renamed.txt")) {
            fs.copyFileSync("renamed.txt", "copy.txt");
            res.end("File copied successfully");
        } else {
            res.end("File not found");
        }
    }

    // ---------------- DELETE FILE ----------------
    else if (req.url === '/delete') {
        if (fs.existsSync("copy.txt")) {
            fs.unlinkSync("copy.txt");
            res.end("File deleted successfully");
        } else {
            res.end("File not found");
        }
    }

    // ---------------- SYSTEM SPECS ----------------
    else if (req.url === '/system-specs') {
        res.end(`
Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
Uptime: ${os.uptime()} seconds
        `);
    }
    else {
        res.end("Wrong Route");
    }

});

server.listen(2022, () => {
    console.log("Server running on port 3000");
});
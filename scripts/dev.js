#!/usr/bin/env node

const { spawn } = require("child_process");

// Start both web and API dev servers
const webProcess = spawn("npm", ["--workspace", "apps/web", "run", "dev"], {
    stdio: "inherit",
    shell: true,
});

const apiProcess = spawn("npm", ["--workspace", "apps/api", "run", "dev"], {
    stdio: "inherit",
    shell: true,
});

// Wait 4 seconds then open the browser
setTimeout(async () => {
    try {
        const open = (await import("open")).default;
        await open("http://localhost:3000");
    } catch (err) {
        console.error("Failed to open browser:", err.message);
    }
}, 4000);

// Handle process exit
process.on("SIGINT", () => {
    webProcess.kill();
    apiProcess.kill();
    process.exit(0);
});

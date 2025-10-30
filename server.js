import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000;
const HOST = process.env.HOST || "0.0.0.0";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Define static folder path
const staticPath = path.join(__dirname, "static");

// ✅ Serve static files *before* catch-all
app.use("/static", express.static(staticPath));

// ✅ Serve index.html only for unknown routes (not files with .js, .css, etc.)
app.get("*", (req, res, next) => {
  if (req.path.includes("."))
    return next(); // skip files
  res.sendFile(path.join(staticPath, "index.html"));
});

// ✅ Start server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});

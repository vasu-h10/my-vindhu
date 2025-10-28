import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000;
const HOST = process.env.HOST || "0.0.0.0";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve the "static" folder
app.use(express.static(path.join(__dirname, "static")));

// ✅ Serve index.html for all routes (Render & SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

// ✅ Start server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});

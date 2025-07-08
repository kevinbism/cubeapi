const express = require("express");
const path = require("node:path");
const app = express();
const port = process.env.PORT || 3000;

// Serve i file statici dalla cartella build di VitePress
app.use(express.static(path.join(__dirname, "docs/.vitepress/dist")));

// Fallback per le rotte SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "docs/.vitepress/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

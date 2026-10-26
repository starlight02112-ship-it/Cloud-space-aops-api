import express from "express";
import cors from "cors";
import AoPS from "aops-js";

const app = express();
const PORT = Number(process.env.PORT || 3000);

// This local server provides a browser-friendly endpoint for the standalone HTML.
// It requests public AoPS blog topics anonymously; no account password is needed.
app.use(cors({ origin: true }));
app.get("/api/health", (_req, res) => res.json({ ok: true, service: "Cloudscape AoPS API bridge" }));

app.get("/api/topics", async (_req, res) => {
  try {
    const aops = new AoPS({ verbose: false });
    await aops.login(); // anonymous session; deliberately no credentials
    const data = await aops.fetchTopics({
      category_id: "1946392",
      category_type: "blog"
    });
    res.set("Cache-Control", "no-store");
    res.json(data);
  } catch (error) {
    console.error("AoPS topic fetch failed:", error?.message || error);
    res.status(502).json({
      error: "Could not retrieve AoPS topics.",
      detail: "AoPS or the unofficial library may have changed. Check the server console and API documentation."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Cloudscape AoPS API bridge listening on http://localhost:${PORT}`);
});

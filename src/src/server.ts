import express from "express";
import { json } from "body-parser";

/**
 * Server owns:
 * - HTTP lifecycle
 * - middleware wiring
 * - port binding
 *
 * It does NOT own:
 * - business logic
 * - AI calls
 * - Discord logic
 */

export function createServer() {
  const app = express();

  // Core middleware
  app.use(json());

  // Health check (mandatory for Cloud Run / Railway)
  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
}

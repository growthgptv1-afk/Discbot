# Discbot
Backend execution engine for GrowthGPT.

Provides a single, deterministic ad-generation API
used by Discord (Phase 1) and future web clients.

---

## Responsibilities

- Accept structured generation requests
- Enforce mode and speed constraints
- Call Gemini models with a locked system prompt
- Deduct and track user credits
- Return final ad output only (no reasoning)

---

## Current Client

- Discord (slash commands)

---

## Stack

- Node.js
- TypeScript
- Express
- Discord Interactions API
- Gemini API
- Docker-ready (Railway / Cloud Run)

---

## Core Endpoint
POST /generate
Copy code

Generates a single ad based on:
- product input
- mode (awareness / performance / conceptual)
- speed (fast / deep)

---

## Non-Goals (Phase 1)

- No frontend rendering
- No multi-step conversations
- No prompt exposure
- No analytics or dashboards

---

## Status

Phase 1 — single-request generation backend

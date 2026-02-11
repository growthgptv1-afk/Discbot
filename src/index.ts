// Discobot backend entry point (Phase 1)
// Boots the HTTP server
import { createServer } from './server';

const PORT = Number(process.env.PORT) || 3000;

const app = createServer();

app.listen(PORT, () => {
  console.log('🚀 Discobot listening on port', PORT);
});

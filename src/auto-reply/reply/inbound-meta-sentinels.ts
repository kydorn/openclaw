/**
 * Plain string constants for inbound-metadata envelope sentinels.
 *
 * Why this file exists (local-patches): both `inbound-meta.ts` (server-side
 * envelope producer) and `strip-inbound-meta.ts` (consumer, used by both the
 * gateway and the browser control UI) need these strings. Earlier, the
 * straightforward "export from inbound-meta.ts, import in strip-inbound-meta.ts"
 * shape ended up dragging the whole server tree (and ultimately
 * `@openclaw/fs-safe`) into the UI bundle through transitive imports —
 * causing the recurring `Uncaught ReferenceError: process is not defined`
 * regression (see openclaw/openclaw#62311, #62909, #76242).
 *
 * Keeping this module deliberately empty of imports — only plain `const`
 * string declarations — means vite can safely bundle it for the browser
 * without pulling Node-only code in.
 *
 * Must stay in sync with upstream wording in `buildInboundUserContextPrefix`.
 */

export const MESSAGE_TOOL_DELIVERY_HINT =
  "Delivery: to send a message, use the `message` tool.";

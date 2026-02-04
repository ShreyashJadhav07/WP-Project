## Purpose
Provide concise, actionable guidance for AI coding agents working on this React + Vite Firebase chat clone.

## Big picture
- SPA built with React (client) and Firebase (Auth, Firestore, Storage). Routing via `react-router-dom`.
- Left pane: `ChatPanel` (contact list). Right pane: `ChatWindow` (messages). See `src/Components/Home.jsx`.
- Auth state + shared user data is provided by `src/Components/AuthContext.jsx` which exports `useAuth()`.

## Key workflows & commands
- Local dev: `npm run dev` (calls `vite`).
- Build: `npm run build` and preview with `npm run preview`.
- Lint: `npm run lint` (ESLint config present).

## Integration points / external deps
- Firebase is initialized in `firebase.js` and exports `auth`, `db`, `storage` used throughout.
- Firestore collections used:
  - `users` — user profiles (fields: `profile_pic`, `name`, `email`, `lastSeen`, `status`).
  - `user-chats` — chat documents keyed by computed `chatId`, each with `messages` array.
- Storage: profile pictures are uploaded to `profile/` (see `AuthContext.updatePhoto`).

## Data shapes & patterns (concrete examples)
- chatId formation (in `ChatWindow.jsx`):
  - `chatId = userId > receiverId ? `${userId}-${receiverId}` : `${receiverId}-${userId}``
  - Messages: `{ text, time, sender, receiver }` appended via `arrayUnion`.
- Auth flow (in `AuthContext.jsx`): listens to `onAuthStateChanged`, reads `users/{uid}` doc and sets `userData`.
- New user creation (in `Login.jsx`): `setDoc(doc(db, 'users', uid), { email, profile_pic: photoURL, name: displayName, lastSeen })`.

## Project-specific conventions
- Tailwind is used everywhere for styling — prefer adding classes directly rather than separate CSS files.
- Component layout convention: `ChatPanel` is left fixed width (`w-[30vw] min-w-[350px]`), `ChatWindow` uses `w-[70%]`.
- Protected routes use `useAuth()` and `ProtectedRoute.jsx` to show a spinner while auth is loading.

## Notable implementation details / gotchas
- `AuthContext.updatePhoto` uses `ref(storage, 'profile/${userData.is}')` — `userData.is` looks like a typo (likely `userData.id`). Review before changing storage paths.
- Chat deletion in `ChatWindow` removes the whole `user-chats/{chatId}` doc; callers expect navigation back to `/` after deletion.
- Many components read/write Firestore directly in UI components. For larger changes, preserve the existing direct-use pattern (no central API layer exists).

## Where to look first for common tasks
- Add new route or page: `src/App.jsx` and add a component under `src/Components/`.
- Change auth/user fields: `src/Components/AuthContext.jsx` and `firebase.js`.
- Messaging logic: `src/Components/ChatWindow.jsx` and `src/Components/ChatPanel.jsx`.

## Example prompts for the agent
- "Add a 'typing' indicator: update `ChatWindow.jsx` to write a `typing` flag to `user-chats/{chatId}` and show it when `typing` is true. Keep existing message schema and UI layout." 
- "Refactor message sending into a helper `src/lib/messages.js` used by `ChatWindow.jsx`, preserving `arrayUnion` update semantics."

## When in doubt
- Preserve existing Firestore collection names and document shapes.
- Run `npm run dev` to manually verify visual changes and auth flows.

If anything is unclear or you'd like this expanded into explicit coding tasks, tell me which area to expand.

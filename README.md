# Inmobiliaria
Breit - Inmobiliaria

## Tests end-to-end con Playwright

- En local, `npx playwright test` usa `http://127.0.0.1:5173`.
- Si ya tienes `npm run dev` abierto en `5173`, Playwright reutiliza ese servidor.
- Si no hay un servidor activo, Playwright levanta Vite automáticamente en `5173` antes de correr los tests.
- En CI, Playwright compila la app y la sirve con `vite preview` en `http://127.0.0.1:4173`.

No hace falta modificar el workflow para levantar `localhost` manualmente: la lógica queda centralizada en `playwright.config.js`.


import { test, expect } from '@playwright/test';

// Test principal: carga de la página
test('La página principal carga correctamente', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle(/Inmobiliaria|Home/i);
});

// Test de renderizado de Carrusel mini en propiedades destacadas
test('El Carrusel mini de propiedades destacadas se renderiza', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const carruselMini = page.locator('.card-carrusel-mini .carrusel-mini');
  await expect(carruselMini.first()).toBeVisible();
});

// Test de visualización de propiedades destacadas
test('Se muestran propiedades destacadas', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const cards = page.locator('.propiedad-card');
  await expect(cards).toHaveCount(3); // Por defecto hay 3 destacadas
});

// Test de filtro avanzado: casas en venta
test('Filtro avanzado: casas en venta', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('text=Propiedades');
  await page.click('text=Casas');
  await page.click('text=Comprar');
  const header = page.locator('.propiedades-header h2');
  await expect(header).toContainText('Casas en Venta');
  const lista = page.locator('.propiedades-lista .propiedad-completa');
  await expect(await lista.count()).toBeGreaterThan(0);
});

// Test de visualización de imágenes en Carrusel
test('Las imágenes de Carrusel se muestran', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const imagenesMini = page.locator('.carrusel-mini img');
  await expect(imagenesMini.first()).toBeVisible();
});

// Test de navegación a "Nosotros"
test('Navegación a sección Nosotros', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('text=Nosotros');
  const nosotros = page.locator('.nosotros-container');
  await expect(nosotros).toBeVisible();
});

// Playwright por defecto guarda screenshots en caso de fallo

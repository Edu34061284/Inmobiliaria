# 📋 Guía para Actualizar Propiedades

Este documento explica cómo actualizar las propiedades de la inmobiliaria usando Excel.

## 📊 Estructura del Archivo Excel

El archivo `propiedades.xlsx` es una tabla de Excel con formato profesional que contiene las siguientes columnas:

| Columna | Descripción | Ejemplo |
|---------|-------------|---------|
| **id** | Número único de la propiedad | 1, 2, 3... |
| **tipo** | Tipo de propiedad | casa, departamento, campo, terreno |
| **operacion** | Tipo de operación | venta, alquiler |
| **titulo** | Título de la propiedad | "Casa en el Centro" |
| **descripcion** | Descripción detallada | "Hermosa casa de 3 dormitorios..." |
| **precio** | Precio en pesos | 250000 |
| **ubicacion** | Ubicación de la propiedad | "Río Cuarto" |
| **dormitorios** | Cantidad de dormitorios | 3 (usar 0 para campos/terrenos) |
| **banos** | Cantidad de baños | 2 (usar 0 para campos/terrenos) |
| **imagen1** | URL de la primera imagen | https://... |
| **imagen2** | URL de la segunda imagen (opcional) | https://... |
| **imagen3** | URL de la tercera imagen (opcional) | https://... |

## 🔄 Proceso de Actualización

### 1️⃣ Editar el Archivo Excel

1. **Abrir el archivo**
   - Haz doble clic en `propiedades.xlsx`
   - Se abrirá una tabla con formato profesional

2. **Realizar cambios**

   **➕ Para AGREGAR una propiedad:**
   - Haz clic en la última fila de la tabla
   - Presiona **Tab** en la última celda para crear una nueva fila
   - Completa todos los campos
   - El formato se aplicará automáticamente

   **✏️ Para MODIFICAR una propiedad:**
   - Localiza la fila que deseas editar
   - Haz clic en la celda y modifica el valor

   **❌ Para ELIMINAR una propiedad:**
   - Haz clic derecho en el número de fila
   - Selecciona "Eliminar"

3. **Guardar los cambios**
   - Presiona **Ctrl + S**
   - Cierra Excel

### 2️⃣ Ejecutar el Script de Conversión

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
.\convertir-propiedades.ps1
```

**Salida esperada:**
```
Convirtiendo Excel a JSON...
✓ Conversión completada!
Archivo generado: .\src\data\propiedades.json

Total de propiedades: 7
```

### 3️⃣ Ver los Cambios

1. Abre tu navegador en `http://localhost:5173`
2. Recarga la página (F5)
3. Los cambios aparecerán inmediatamente

## ✅ Reglas Importantes

| Regla | Detalles |
|-------|----------|
| **IDs únicos** | Cada propiedad debe tener un número diferente |
| **Tipos válidos** | Usar solo: `casa`, `departamento`, `campo`, `terreno` (minúsculas) |
| **Operaciones válidas** | Usar solo: `venta`, `alquiler` (minúsculas) |
| **Precios** | Solo números sin puntos, comas ni símbolos ($) |
| **Imágenes** | URLs completas comenzando con `http://` o `https://` |
| **Campos numéricos** | Dormitorios y baños deben ser números enteros |

## 🛠️ Solución de Problemas

### ❌ El script muestra un error

**Problema:** `No se puede abrir el archivo Excel`
- **Solución:** Cierra Excel completamente antes de ejecutar el script

**Problema:** `Error durante la conversión`
- **Solución:** Verifica que el archivo se llame exactamente `propiedades.xlsx`

### ❌ Los datos no se actualizan en el sitio

1. Verifica que el script se ejecutó sin errores
2. Revisa que el archivo `src/data/propiedades.json` se haya actualizado
3. Recarga la página con **Ctrl + F5** (recarga forzada)

### ❌ Formato incorrecto

- No elimines los encabezados de la tabla
- No cambies el orden de las columnas
- Mantén los tipos de datos correctos en cada columna

## 💡 Consejos

✅ **Backup:** Haz una copia del archivo Excel antes de hacer cambios grandes
✅ **Pruebas:** Agrega/modifica una propiedad a la vez para detectar errores fácilmente
✅ **Imágenes:** Usa servicios como Imgur o tu propio servidor para alojar las imágenes
✅ **Formato:** Excel mantiene el formato automáticamente con su tabla profesional
✅ **Orden:** Puedes ordenar y filtrar las propiedades directamente en Excel
   https://ejemplo.com/imagen.jpg
   ```

2. **Imágenes locales**: Coloca las imágenes en `src/assets/propiedades/`
   ```
   /assets/propiedades/casa1.jpg
   ```

### Recomendaciones para imágenes:

- Tamaño recomendado: 1200x800 píxeles
- Formato: JPG o PNG
- Peso máximo: 500KB por imagen
- Mínimo 1 imagen, máximo 3 imágenes por propiedad

## ⚠️ Reglas Importantes

1. **El ID debe ser único** - No repetir números
2. **El tipo debe ser**: casa, departamento, campo o terreno
3. **La operación debe ser**: venta o alquiler
4. **Los números no llevan puntos ni comas** - Ejemplo: 250000 (no 250.000)
5. **Las descripciones con comas deben estar entre comillas** en el CSV

## 🛠️ Solución de Problemas

### El script de conversión no funciona

1. Asegúrate de estar en la carpeta correcta del proyecto
2. Verifica que PowerShell puede ejecutar scripts:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

### Los cambios no se ven en la web

1. Verifica que el archivo JSON se haya actualizado
2. Haz un "hard refresh": Ctrl + Shift + R (Windows/Linux) o Cmd + Shift + R (Mac)
3. Revisa la consola del navegador (F12) por errores

### Error al abrir el CSV en Excel

- Si ves caracteres raros (tildes mal), es un problema de codificación
- Abre el CSV con un editor de texto (Notepad++) y guárdalo como UTF-8

## 📞 Contacto

Si tienes problemas con la actualización de propiedades, contacta al administrador del sistema.

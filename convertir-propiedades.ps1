<#
Script para convertir propiedades.xlsx a src\data\propiedades.json
Uso: .\convertir-propiedades.ps1
#>

$excelPath = Join-Path $PSScriptRoot "propiedades.xlsx"
$jsonPath = Join-Path $PSScriptRoot "src\data\propiedades.json"

Write-Host "Convirtiendo Excel a JSON..." -ForegroundColor Green

# Validaciones iniciales
if (-not (Test-Path -Path $excelPath)) {
    Write-Host "No se encontro el archivo: $excelPath" -ForegroundColor Red
    Write-Host "Asegurate de que 'propiedades.xlsx' existe en la raiz del proyecto." -ForegroundColor Yellow
    exit 1
}

$jsonDir = Split-Path -Path $jsonPath -Parent
if (-not (Test-Path -Path $jsonDir)) {
    New-Item -ItemType Directory -Path $jsonDir | Out-Null
}

# Cargar Excel COM Object
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

try {
    # Abrir el archivo Excel
    $workbook = $excel.Workbooks.Open($excelPath)
    $worksheet = $workbook.Worksheets.Item(1)

    # Obtener el rango de datos
    $usedRange = $worksheet.UsedRange
    $rowCount = [int]$usedRange.Rows.Count
    $colCount = [int]$usedRange.Columns.Count

    if ($rowCount -lt 2) {
        throw "La hoja no contiene datos (se requieren encabezados y al menos una fila)."
    }

    # Crear array para almacenar las propiedades
    $propiedadesJson = @()

    # Leer cada fila (empezando desde la fila 2, después del encabezado)
    for ($row = 2; $row -le $rowCount; $row++) {
        # Saltar filas completamente vacías (id vacío)
        $idCell = $worksheet.Cells.Item($row, 1).Value2
        if (-not $idCell) { continue }


        # Leer la columna de imágenes (columna 10) y generar rutas por ID
        $imagenes = @()
        $imagenesRaw = ($worksheet.Cells.Item($row, 10).Text).Trim()
        if ($imagenesRaw) {
            $imgList = $imagenesRaw -split ","
            foreach ($img in $imgList) {
                $imgClean = $img.Trim()
                if ($imgClean) {
                    $imagenes += "/imagenes/propiedades/$idCell/$imgClean"
                }
            }
        }

        # Conversión segura de números (maneja textos con comas/puntos)
        function To-IntSafe($value) {
            if ($null -eq $value -or $value -eq "") { return $null }
            $s = [string]$value
            $s = $s -replace "[^0-9]", ""
            if ($s -eq "") { return $null }
            return [int]$s
        }

        # Crear el objeto de propiedad
        $propiedad = [PSCustomObject]@{
            id = To-IntSafe $worksheet.Cells.Item($row, 1).Value2
            tipo = ($worksheet.Cells.Item($row, 2).Text).Trim()
            operacion = ($worksheet.Cells.Item($row, 3).Text).Trim()
            titulo = ($worksheet.Cells.Item($row, 4).Text).Trim()
            descripcion = ($worksheet.Cells.Item($row, 5).Text).Trim()
            precio = To-IntSafe $worksheet.Cells.Item($row, 6).Value2
            ubicacion = ($worksheet.Cells.Item($row, 7).Text).Trim()
            dormitorios = To-IntSafe $worksheet.Cells.Item($row, 8).Value2
            banos = To-IntSafe $worksheet.Cells.Item($row, 9).Value2
            imagenes = $imagenes
        }

        $propiedadesJson += $propiedad
    }

    # Cerrar el workbook (si sigue abierto)
    try { $workbook.Close($false) } catch { }

    # Convertir a JSON y guardar
    $propiedadesJson | ConvertTo-Json -Depth 10 | Set-Content -Path $jsonPath -Encoding UTF8

    Write-Host "Conversion completada!" -ForegroundColor Green
    Write-Host "Archivo generado: $jsonPath" -ForegroundColor Cyan
    Write-Host "Total de propiedades: $($propiedadesJson.Count)" -ForegroundColor Yellow
}
catch {
    Write-Host "Error durante la conversion: $($_.Exception.Message)" -ForegroundColor Red
}
finally {
    # Limpieza segura de objetos COM
    try { $excel.Quit() } catch { }

    if ($worksheet) {
        try { [System.Runtime.Interopservices.Marshal]::ReleaseComObject($worksheet) | Out-Null } catch { }
        $worksheet = $null
    }
    if ($workbook) {
        # No intentar cerrar nuevamente para evitar RPC_E_DISCONNECTED
        try { [System.Runtime.Interopservices.Marshal]::ReleaseComObject($workbook) | Out-Null } catch { }
        $workbook = $null
    }
    if ($excel) {
        try { [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null } catch { }
        $excel = $null
    }

    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
}

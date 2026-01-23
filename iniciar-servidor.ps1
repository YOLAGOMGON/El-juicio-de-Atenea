# Script PowerShell para iniciar el servidor
Write-Host "Iniciando servidor HTTP para Atenea..." -ForegroundColor Green
Write-Host ""

# Verificar si Python está instalado
try {
    $pythonVersion = python --version 2>&1
    Write-Host "Python encontrado: $pythonVersion" -ForegroundColor Cyan
    python server.py
} catch {
    Write-Host "Error: Python no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host "Por favor instala Python desde https://www.python.org/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Presiona cualquier tecla para salir..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}



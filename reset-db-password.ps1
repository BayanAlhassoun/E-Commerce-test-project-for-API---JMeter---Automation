# ============================================================
# EduShop - PostgreSQL Password Reset Script
# Run this script ONCE as Administrator to set the postgres
# password to "postgres123" (what appsettings.json expects).
#
# HOW TO RUN:
#   Right-click this file → "Run with PowerShell as Administrator"
# ============================================================

$ErrorActionPreference = "Stop"
$pgBin  = "C:\Program Files\PostgreSQL\18\bin"
$pgData = "C:\Program Files\PostgreSQL\18\data"
$pgHba  = "$pgData\pg_hba.conf"
$svc    = "postgresql-x64-18"
$newPwd = "postgres123"

Write-Host "`n[1/5] Backing up pg_hba.conf..." -ForegroundColor Cyan
Copy-Item $pgHba "$pgHba.bak" -Force

Write-Host "[2/5] Setting authentication to TRUST (temporary)..." -ForegroundColor Cyan
$content = Get-Content $pgHba -Raw
$content = $content -replace 'scram-sha-256', 'trust'
Set-Content $pgHba $content -Encoding UTF8

Write-Host "[3/5] Restarting PostgreSQL service..." -ForegroundColor Cyan
Restart-Service $svc -Force
Start-Sleep -Seconds 4

Write-Host "[4/5] Resetting postgres password to '$newPwd'..." -ForegroundColor Cyan
$env:PGPASSWORD = ""
& "$pgBin\psql.exe" -U postgres -c "ALTER USER postgres WITH PASSWORD '$newPwd';" 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Could not connect. Is PostgreSQL running?" -ForegroundColor Red
    exit 1
}

Write-Host "[5/5] Restoring scram-sha-256 authentication..." -ForegroundColor Cyan
$content = Get-Content $pgHba -Raw
$content = $content -replace 'trust', 'scram-sha-256'
Set-Content $pgHba $content -Encoding UTF8
Restart-Service $svc -Force
Start-Sleep -Seconds 3

Write-Host "`n✅ Done! postgres password is now: $newPwd" -ForegroundColor Green
Write-Host "   You can now run: dotnet run" -ForegroundColor Green
Write-Host "   (from backend\EcommerceAPI folder)`n" -ForegroundColor Green

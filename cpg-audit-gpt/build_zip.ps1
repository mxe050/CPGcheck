$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Out = Join-Path (Split-Path -Parent $Root) "cpg-audit-gpt.zip"

if (Test-Path -LiteralPath $Out) {
  Remove-Item -LiteralPath $Out
}

$Temp = Join-Path ([System.IO.Path]::GetTempPath()) ("cpg-audit-gpt-" + [System.Guid]::NewGuid())
New-Item -ItemType Directory -Force -Path $Temp | Out-Null

try {
  Copy-Item -LiteralPath (Join-Path $Root "instructions\00_CUSTOM_GPT_INSTRUCTIONS.md") -Destination (Join-Path $Temp "00_CUSTOM_GPT_INSTRUCTIONS.md")
  Copy-Item -LiteralPath (Join-Path $Root "CHANGELOG.md") -Destination (Join-Path $Temp "CHANGELOG.md")
  New-Item -ItemType Directory -Force -Path (Join-Path $Temp "knowledge") | Out-Null
  Get-ChildItem -LiteralPath (Join-Path $Root "knowledge") -Filter "*.md" -File |
    Sort-Object Name |
    ForEach-Object {
      Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $Temp "knowledge\$($_.Name)")
    }

  Compress-Archive -LiteralPath (Join-Path $Temp "00_CUSTOM_GPT_INSTRUCTIONS.md"),(Join-Path $Temp "CHANGELOG.md"),(Join-Path $Temp "knowledge") -DestinationPath $Out
  Write-Host "Built $Out"
}
finally {
  Remove-Item -LiteralPath $Temp -Recurse -Force
}

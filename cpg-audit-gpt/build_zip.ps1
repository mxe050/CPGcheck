$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Out = Join-Path (Split-Path -Parent $Root) "cpg-audit-gpt.zip"

if (Test-Path -LiteralPath $Out) {
  Remove-Item -LiteralPath $Out
}

$Items = Get-ChildItem -LiteralPath $Root -Recurse -File |
  Where-Object {
    $_.Name -notlike ".*" -and
    $_.FullName -notmatch "__pycache__" -and
    $_.Extension -in @(".txt", ".md", ".json", ".py", ".mjs", ".ps1")
  }

$Temp = Join-Path ([System.IO.Path]::GetTempPath()) ("cpg-audit-gpt-" + [System.Guid]::NewGuid())
New-Item -ItemType Directory -Force -Path $Temp | Out-Null

try {
  foreach ($Item in $Items) {
    $Relative = $Item.FullName.Substring((Split-Path -Parent $Root).Length + 1)
    $Destination = Join-Path $Temp $Relative
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Destination) | Out-Null
    Copy-Item -LiteralPath $Item.FullName -Destination $Destination
  }

  Compress-Archive -LiteralPath (Join-Path $Temp "cpg-audit-gpt") -DestinationPath $Out
  Write-Host "Built $Out"
}
finally {
  Remove-Item -LiteralPath $Temp -Recurse -Force
}

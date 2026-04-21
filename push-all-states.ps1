# Save this to C:\rcg-site-GIT and run from PowerShell in that folder
# Right-click PowerShell and "Run as Administrator" if needed
# Then type: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
# Then run: .\push-all-states.ps1

Set-Location "C:\rcg-site-GIT"

$placeholder = @"
export default function Page() {
  return <main><p>Coming soon.</p></main>
}
"@

$states = @(
  "alabama", "alaska", "arkansas", "california", "connecticut", "delaware",
  "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky",
  "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota",
  "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire",
  "new-mexico", "new-york", "north-carolina", "north-dakota", "oklahoma",
  "oregon", "pennsylvania", "rhode-island", "south-carolina", "south-dakota",
  "tennessee", "texas", "utah", "vermont", "virginia", "washington",
  "west-virginia", "wisconsin", "wyoming"
)

foreach ($state in $states) {
  $dir = "src\app\states\$state"
  if (!(Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
    Write-Host "Created folder: $state"
  }
  $file = "$dir\page.tsx"
  Set-Content -Path $file -Value $placeholder -Encoding UTF8
  Write-Host "Created page: $state"
}

git add -A
git commit -m "add all remaining state page folders with placeholders"
git push origin main

Write-Host ""
Write-Host "All done - check GitHub now"

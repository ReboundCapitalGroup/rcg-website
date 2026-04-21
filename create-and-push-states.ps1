# Run this from C:\rcg-site-GIT
# Open PowerShell, navigate to C:\rcg-site-GIT, then run: .\create-and-push-states.ps1

$states = @(
    "alabama", "alaska", "arkansas", "california", "connecticut", "delaware",
    "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky",
    "louisiana", "maine", "maryland", "massachusetts", "minnesota", "mississippi",
    "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey",
    "new-mexico", "new-york", "north-carolina", "north-dakota", "oklahoma",
    "oregon", "pennsylvania", "rhode-island", "south-carolina", "south-dakota",
    "tennessee", "texas", "utah", "vermont", "virginia", "washington",
    "west-virginia", "wisconsin", "wyoming"
)

$placeholder = @"
export default function Page() {
  return <main><p>Coming soon.</p></main>
}
"@

foreach ($state in $states) {
    $dir = "src\app\states\$state"
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }
    $file = "$dir\page.tsx"
    if (!(Test-Path $file)) {
        Set-Content -Path $file -Value $placeholder
    }
    Write-Host "Created $state"
}

git add .
git commit -m "add all state page folders"
git push

Write-Host ""
Write-Host "Done. All state folders pushed to GitHub."

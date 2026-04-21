# Fix-State-Stat-Bars.ps1
# Replaces "Expanding / RCG Status" stat with actual unclaimed $ amount
# in all 25 deployed state pages.
#
# Usage:
#   cd C:\rcg-site-GIT
#   .\Fix-State-Stat-Bars.ps1
#
# After running:
#   git status          # review what changed
#   git diff            # see line-by-line changes
#   git add -A
#   git commit -m "Add unclaimed fund amounts to state page stat bars"
#   git push

$ErrorActionPreference = 'Stop'

# Resolve repo root: assume script is run from C:\rcg-site-GIT
$repoRoot = (Get-Location).Path
$statesDir = Join-Path $repoRoot 'src\app\states'

if (-not (Test-Path $statesDir)) {
    Write-Host "ERROR: Cannot find $statesDir" -ForegroundColor Red
    Write-Host "Make sure you're running this from the root of the rcg-site-GIT repo." -ForegroundColor Red
    exit 1
}

# Map of state folder -> replacement amount
# Each entry: [folder-slug, old-counties-value, old-counties-label, new-amount]
$fixes = @(
    # Batch 1
    @{ slug = 'delaware';        countsVal = '3';         countsLabel = 'Counties Monitored'; amount = '$310M' }
    @{ slug = 'hawaii';          countsVal = '5';         countsLabel = 'Counties Monitored'; amount = '$290M' }
    @{ slug = 'rhode-island';    countsVal = '5';         countsLabel = 'Counties Monitored'; amount = '$290M' }
    @{ slug = 'connecticut';     countsVal = '8';         countsLabel = 'Counties Monitored'; amount = '$940M' }
    @{ slug = 'new-hampshire';   countsVal = '10';        countsLabel = 'Counties Monitored'; amount = '$320M' }
    # Batch 2
    @{ slug = 'maine';           countsVal = '16';        countsLabel = 'Counties Monitored'; amount = '$310M' }
    @{ slug = 'nevada';          countsVal = '17';        countsLabel = 'Counties Monitored'; amount = '$840M' }
    @{ slug = 'alaska';          countsVal = 'Statewide'; countsLabel = 'Coverage';           amount = '$210M' }
    @{ slug = 'wyoming';         countsVal = '23';        countsLabel = 'Counties Monitored'; amount = '$98M'  }
    @{ slug = 'vermont';         countsVal = '14';        countsLabel = 'Counties Monitored'; amount = '$150M' }
    # Batch 3
    @{ slug = 'massachusetts';   countsVal = '14';        countsLabel = 'Counties Monitored'; amount = '$2.4B' }
    @{ slug = 'new-jersey';      countsVal = '21';        countsLabel = 'Counties Monitored'; amount = '$2.8B' }
    @{ slug = 'utah';            countsVal = '29';        countsLabel = 'Counties Monitored'; amount = '$490M' }
    @{ slug = 'oregon';          countsVal = '36';        countsLabel = 'Counties Monitored'; amount = '$780M' }
    @{ slug = 'idaho';           countsVal = '44';        countsLabel = 'Counties Monitored'; amount = '$218M' }
    # Batch 4
    @{ slug = 'south-carolina';  countsVal = '46';        countsLabel = 'Counties Monitored'; amount = '$620M' }
    @{ slug = 'north-dakota';    countsVal = '53';        countsLabel = 'Counties Monitored'; amount = '$118M' }
    @{ slug = 'montana';         countsVal = '56';        countsLabel = 'Counties Monitored'; amount = '$148M' }
    @{ slug = 'louisiana';       countsVal = '64';        countsLabel = 'Parishes Monitored'; amount = '$720M' }
    @{ slug = 'south-dakota';    countsVal = '66';        countsLabel = 'Counties Monitored'; amount = '$112M' }
    # Batch 5
    @{ slug = 'west-virginia';   countsVal = '55';        countsLabel = 'Counties Monitored'; amount = '$280M' }
    @{ slug = 'alabama';         countsVal = '67';        countsLabel = 'Counties Monitored'; amount = '$892M' }
    @{ slug = 'arkansas';        countsVal = '75';        countsLabel = 'Counties Monitored'; amount = '$421M' }
    @{ slug = 'oklahoma';        countsVal = '77';        countsLabel = 'Counties Monitored'; amount = '$520M' }
    @{ slug = 'mississippi';     countsVal = '82';        countsLabel = 'Counties Monitored'; amount = '$280M' }
)

$successCount = 0
$skipCount    = 0
$missingCount = 0

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RCG STATE PAGE STAT BAR FIX" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

foreach ($fix in $fixes) {
    $filePath = Join-Path $statesDir "$($fix.slug)\page.tsx"

    if (-not (Test-Path $filePath)) {
        Write-Host "  [MISSING]  $($fix.slug.PadRight(18)) -> file not found: $filePath" -ForegroundColor Yellow
        $missingCount++
        continue
    }

    $content = Get-Content $filePath -Raw

    # Build the find and replace strings
    $findStr    = "{ val: '$($fix.countsVal)', label: '$($fix.countsLabel)' },{ val: 'Expanding', label: 'RCG Status' }"
    $replaceStr = "{ val: '$($fix.countsVal)', label: '$($fix.countsLabel)' },{ val: '$($fix.amount)', label: 'Unclaimed Funds Held' }"

    if ($content -match [regex]::Escape($findStr)) {
        $newContent = $content -replace [regex]::Escape($findStr), $replaceStr
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "  [OK]       $($fix.slug.PadRight(18)) -> $($fix.amount)" -ForegroundColor Green
        $successCount++
    }
    elseif ($content -match "'$($fix.amount)', label: 'Unclaimed Funds Held'") {
        Write-Host "  [SKIP]     $($fix.slug.PadRight(18)) -> already updated" -ForegroundColor Gray
        $skipCount++
    }
    else {
        Write-Host "  [WARN]     $($fix.slug.PadRight(18)) -> FIND pattern not found (manual review needed)" -ForegroundColor Yellow
        $missingCount++
    }
}

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  SUMMARY" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  Updated:        $successCount" -ForegroundColor Green
Write-Host "  Already done:   $skipCount"   -ForegroundColor Gray
Write-Host "  Missing/warn:   $missingCount" -ForegroundColor Yellow
Write-Host ""

if ($successCount -gt 0) {
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Review changes:  git status" -ForegroundColor White
    Write-Host "  2. See diffs:       git diff" -ForegroundColor White
    Write-Host "  3. Commit:          git add -A && git commit -m `"Add unclaimed fund amounts to state page stat bars`"" -ForegroundColor White
    Write-Host "  4. Push:            git push" -ForegroundColor White
    Write-Host ""
}

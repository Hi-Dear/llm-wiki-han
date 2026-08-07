$ErrorActionPreference = 'Stop'
$repo = 'C:\06_Project_Han'
$logFile = Join-Path $repo 'scripts\auto_pull.log'

function Write-Log($msg) {
    $ts = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    Add-Content -Path $logFile -Value "[$ts] $msg" -Encoding utf8
}

Set-Location $repo

try {
    $status = git status --porcelain
    if ($LASTEXITCODE -ne 0) {
        Write-Log "git status failed (exit $LASTEXITCODE) - skip"
        exit 1
    }

    if ($status) {
        Write-Log "로컬에 미커밋 변경사항이 있어 pull을 건너뜀 (충돌 방지)"
        exit 0
    }

    git fetch origin 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Log "git fetch 실패 (exit $LASTEXITCODE)"
        exit 1
    }

    $pullOutput = git pull --ff-only 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Log "pull 성공: $pullOutput"
    } else {
        Write-Log "pull 실패 (fast-forward 불가 등, exit $LASTEXITCODE): $pullOutput"
    }
} catch {
    Write-Log "예외 발생: $_"
    exit 1
}

@echo off
cd /d C:\rcg-site-GIT\src\app\states

for %%s in (
  alabama alaska arkansas california connecticut delaware
  hawaii idaho illinois indiana iowa kansas kentucky
  louisiana maine maryland massachusetts minnesota mississippi
  missouri montana nebraska nevada new-hampshire new-jersey
  new-mexico new-york north-carolina north-dakota oklahoma
  oregon pennsylvania rhode-island south-carolina south-dakota
  tennessee texas utah vermont virginia washington
  west-virginia wisconsin wyoming
) do (
  if not exist %%s mkdir %%s
  if not exist %%s\page.tsx echo. > %%s\page.tsx
  echo Created %%s
)

echo.
echo All state folders and page.tsx files created.
echo Now paste the code for each state into its page.tsx file.
pause

:: 1 安装依赖的npm包
:: npm install --save-dev babel-cli babel-preset-env
:: npm install --save-dev babel-preset-stage-0
:: npm install --save-dev babel-register
:: npm install --save babel-polyfill
:: npm install --save bufferhelper

:: 2 配置 .babelrc
:: {
::   "presets": [
::     "env",
::     "stage-0"
::   ]
:: }

:: 3 运行我
cd %~dp0
echo powershell.exe -NoExit  -Command "cd %~dp0 | powershell.exe -NoExit  -Command npm start" > 运行npmStart.cmd
echo powershell.exe -NoExit  -Command "cd %~dp0src | powershell.exe -NoExit  -Command node createApiList.js" > 创建ApiList.cmd
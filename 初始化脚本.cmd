:: 1 ��װ������npm��
:: npm install --save-dev babel-cli babel-preset-env
:: npm install --save-dev babel-preset-stage-0
:: npm install --save-dev babel-register
:: npm install --save babel-polyfill
:: npm install --save bufferhelper

:: 2 ���� .babelrc
:: {
::   "presets": [
::     "env",
::     "stage-0"
::   ]
:: }

:: 3 ������
cd %~dp0
echo powershell.exe -NoExit  -Command "cd %~dp0 | powershell.exe -NoExit  -Command npm start" > ����npmStart.cmd
echo powershell.exe -NoExit  -Command "cd %~dp0src | powershell.exe -NoExit  -Command node createApiList.js" > ����ApiList.cmd
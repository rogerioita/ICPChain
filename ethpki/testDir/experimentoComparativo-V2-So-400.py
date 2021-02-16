# controller-ethpkiCM2-400.py 


import os
count = 0

while count < 30:
    os.system("echo '+++++++++Ethpki Com Criptogafia ++++++++++++++++'")

    os.system("echo 'Inicio da realizacao de testes com 400 Contas!!!'")
    os.chdir('/home/rogerio/AppsMC2/ethpki-Criptografado/testDir')
    os.system('python paraleliza-400.py')
    os.system('pwd')
    os.chdir('/home/rogerio/resultados/temporarios')
    os.system('sleep 2')
    os.system("mv log-Eth.csv /home/rogerio/comCriptografia/log-Eth-Criptografado_400_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")
    os.system("mv stat-Eth.csv /home/rogerio/comCriptografia/stat-Eth-Criptografado_400_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")

    count += 1



count = 0
while count < 30:

    os.system("echo '+++++++++Ethpki Sem Criptogafia ++++++++++++++++'")

    os.system("echo 'Inicio da realizacao de testes com 400 Contas!!!'")
    os.chdir('/home/rogerio/Apps/ethpki/testDir')
    os.system('python paraleliza-400.py')
    os.system('pwd')
    os.chdir('/home/rogerio/resultados/temporarios/')
    os.system('sleep 2')
    os.system("mv log-Eth.csv  /home/rogerio/semCriptografia/log-Eth-TextoClaro_400_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")
    os.system("mv stat-Eth.csv /home/rogerio/semCriptografia/stat-Eth-TextoClaro_400_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")
    count += 1


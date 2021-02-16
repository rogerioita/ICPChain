import os
import time
count = 0
while count <= 30:    
    print("Rodada de Numero", count+1)

    os.system("echo '++++++++++++++++++++++Ethpki++++++++++++++++++++'")

    os.system("echo 'Inicio da realizacao de testes com 200 Contas!!!'")
    os.chdir('/home/rogerio/AppsMC2/ethpki-Random/testDir')
    os.system('python paraleliza-200.py')
    os.system('pwd')
    os.chdir('/home/rogerio/resultados/temporarios/')
    os.system('sleep 2')
    os.system("mv log-Eth.csv  ./200/log-Eth-Random_200_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")
    os.system("mv stat-Eth.csv  ./200/stat-Eth-Random_200_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")

    count += 1



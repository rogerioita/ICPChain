import os
count = 0
while count <= 30:    
    print("Rodada de Numero", count+1)

    os.system("echo '++++++++++++++++++++++Ethpki++++++++++++++++++++'")

    os.system("echo 'Inicio da realizacao de testes com 400 Contas!!!'")
    os.chdir('/home/rogerio/AppsMC2/ethpki-Criptografado/testDir')
    os.system('python paraleliza-400.py')
    os.system('pwd')
    os.chdir('/home/rogerio/resultados/temporarios/')
    os.system('sleep 2')
    os.system("mv log-Eth.csv  ./400/log-Eth-Criptografado_400_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")
    os.system("mv stat-Eth.csv  ./400/stat-Eth-Criptografado_400_Contas_`date +%d'-'%m'-'%Y'_'%H-3:%M:%S`.csv")

    count += 1



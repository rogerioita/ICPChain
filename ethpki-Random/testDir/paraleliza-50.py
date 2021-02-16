import os
from multiprocessing import Pool


processos = (
    'callct050.py', 'callct049.py', 'callct048.py', 'callct047.py', 'callct046.py', 'callct045.py', 'callct044.py', 'callct043.py', 'callct042.py', 'callct041.py', 'callct040.py', 'callct039.py', 'callct038.py', 'callct037.py', 'callct036.py', 'callct035.py', 'callct034.py', 'callct033.py', 'callct032.py', 'callct031.py', 'callct030.py', 'callct029.py', 'callct028.py', 'callct027.py', 'callct026.py', 'callct025.py', 'callct024.py', 'callct023.py', 'callct022.py', 'callct021.py', 'callct020.py', 'callct019.py', 'callct018.py', 'callct017.py', 'callct016.py', 'callct015.py', 'callct014.py', 'callct013.py', 'callct012.py', 'callct011.py', 'callct010.py', 'callct009.py', 'callct008.py', 'callct007.py', 'callct006.py', 'callct005.py', 'callct004.py', 'callct003.py', 'callct002.py', 'callct001.py'
)


def roda_processo(processo):
    os.system('python {}'.format(processo))


pool = Pool(processes=50)
pool.map(roda_processo, processos)

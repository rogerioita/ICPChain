import os
from multiprocessing import Pool


processos = (
    'callct020.py', 'callct019.py', 'callct018.py', 'callct017.py', 'callct016.py', 'callct015.py', 'callct014.py', 'callct013.py', 'callct012.py', 'callct011.py', 'callct010.py', 'callct009.py', 'callct008.py', 'callct007.py', 'callct006.py', 'callct005.py', 'callct004.py', 'callct003.py', 'callct002.py', 'callct001.py'
)


def roda_processo(processo):
    os.system('python {}'.format(processo))


pool = Pool(processes=20)
pool.map(roda_processo, processos)

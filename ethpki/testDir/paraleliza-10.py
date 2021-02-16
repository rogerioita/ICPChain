import os
from multiprocessing import Pool


processos = (
    'callct010.py', 'callct009.py', 'callct008.py', 'callct007.py', 'callct006.py', 'callct005.py', 'callct004.py', 'callct003.py', 'callct002.py', 'callct001.py'
)


def roda_processo(processo):
    os.system('python {}'.format(processo))


pool = Pool(processes=10)
pool.map(roda_processo, processos)

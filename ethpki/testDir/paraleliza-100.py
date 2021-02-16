import os
from multiprocessing import Pool


processos = (
    'callct100.py', 'callct099.py', 'callct098.py', 'callct097.py', 'callct096.py', 'callct095.py', 'callct094.py', 'callct093.py', 'callct092.py', 'callct091.py', 'callct090.py', 'callct089.py', 'callct088.py', 'callct087.py', 'callct086.py', 'callct085.py', 'callct084.py', 'callct083.py', 'callct082.py', 'callct081.py', 'callct080.py', 'callct079.py', 'callct078.py', 'callct077.py', 'callct076.py', 'callct075.py', 'callct074.py', 'callct073.py', 'callct072.py', 'callct071.py', 'callct070.py', 'callct069.py', 'callct068.py', 'callct067.py', 'callct066.py', 'callct065.py', 'callct064.py', 'callct063.py', 'callct062.py', 'callct061.py', 'callct060.py', 'callct059.py', 'callct058.py', 'callct057.py', 'callct056.py', 'callct055.py', 'callct054.py', 'callct053.py', 'callct052.py', 'callct051.py', 'callct050.py', 'callct049.py', 'callct048.py', 'callct047.py', 'callct046.py', 'callct045.py', 'callct044.py', 'callct043.py', 'callct042.py', 'callct041.py', 'callct040.py', 'callct039.py', 'callct038.py', 'callct037.py', 'callct036.py', 'callct035.py', 'callct034.py', 'callct033.py', 'callct032.py', 'callct031.py', 'callct030.py', 'callct029.py', 'callct028.py', 'callct027.py', 'callct026.py', 'callct025.py', 'callct024.py', 'callct023.py', 'callct022.py', 'callct021.py', 'callct020.py', 'callct019.py', 'callct018.py', 'callct017.py', 'callct016.py', 'callct015.py', 'callct014.py', 'callct013.py', 'callct012.py', 'callct011.py', 'callct010.py', 'callct009.py', 'callct008.py', 'callct007.py', 'callct006.py', 'callct005.py', 'callct004.py', 'callct003.py', 'callct002.py', 'callct001.py'
)


def roda_processo(processo):
    os.system('python {}'.format(processo))


pool = Pool(processes=100)
pool.map(roda_processo, processos)

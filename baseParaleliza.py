import os                                                                       
from multiprocessing import Pool                                                
                                                                                
                                                                                
processos = (
                                                                                
def roda_processo(processo):                                                             
    os.system('python {}'.format(processo))                                       
                                                                                
                                                                                
pool = Pool(processes=)                                                        
pool.map(roda_processo, processos)

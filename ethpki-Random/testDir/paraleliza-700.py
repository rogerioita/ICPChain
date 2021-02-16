import os
from multiprocessing import Pool


processos = (
'callct700.py', 'callct699.py', 'callct698.py', 'callct697.py', 'callct696.py', 'callct695.py', 'callct694.py', 'callct693.py', 'callct692.py', 'callct691.py', 'callct690.py', 'callct689.py', 'callct688.py', 'callct687.py', 'callct686.py', 'callct685.py', 'callct684.py', 'callct683.py', 'callct682.py', 'callct681.py', 'callct680.py', 'callct679.py', 'callct678.py', 'callct677.py', 'callct676.py', 'callct675.py', 'callct674.py', 'callct673.py', 'callct672.py', 'callct671.py', 'callct670.py', 'callct669.py', 'callct668.py', 'callct667.py', 'callct666.py', 'callct665.py', 'callct664.py', 'callct663.py', 'callct662.py', 'callct661.py', 'callct660.py', 'callct659.py', 'callct658.py', 'callct657.py', 'callct656.py', 'callct655.py', 'callct654.py', 'callct653.py', 'callct652.py', 'callct651.py', 'callct650.py', 'callct649.py', 'callct648.py', 'callct647.py', 'callct646.py', 'callct645.py', 'callct644.py', 'callct643.py', 'callct642.py', 'callct641.py', 'callct640.py', 'callct639.py', 'callct638.py', 'callct637.py', 'callct636.py', 'callct635.py', 'callct634.py', 'callct633.py', 'callct632.py', 'callct631.py', 'callct630.py', 'callct629.py', 'callct628.py', 'callct627.py', 'callct626.py', 'callct625.py', 'callct624.py', 'callct623.py', 'callct622.py', 'callct621.py', 'callct620.py', 'callct619.py', 'callct618.py', 'callct617.py', 'callct616.py', 'callct615.py', 'callct614.py', 'callct613.py', 'callct612.py', 'callct611.py', 'callct610.py', 'callct609.py', 'callct608.py', 'callct607.py', 'callct606.py', 'callct605.py', 'callct604.py', 'callct603.py', 'callct602.py', 'callct601.py'
)
, 'callct600.py'
, 'callct599.py'
, 'callct598.py'
, 'callct597.py'
, 'callct596.py'
, 'callct595.py'
, 'callct594.py'
, 'callct593.py'
, 'callct592.py'
, 'callct591.py'
, 'callct590.py'
, 'callct589.py'
, 'callct588.py'
, 'callct587.py'
, 'callct586.py'
, 'callct585.py'
, 'callct584.py'
, 'callct583.py'
, 'callct582.py'
, 'callct581.py'
, 'callct580.py'
, 'callct579.py'
, 'callct578.py'
, 'callct577.py'
, 'callct576.py'
, 'callct575.py'
, 'callct574.py'
, 'callct573.py'
, 'callct572.py'
, 'callct571.py'
, 'callct570.py'
, 'callct569.py'
, 'callct568.py'
, 'callct567.py'
, 'callct566.py'
, 'callct565.py'
, 'callct564.py'
, 'callct563.py'
, 'callct562.py'
, 'callct561.py'
, 'callct560.py'
, 'callct559.py'
, 'callct558.py'
, 'callct557.py'
, 'callct556.py'
, 'callct555.py'
, 'callct554.py'
, 'callct553.py'
, 'callct552.py'
, 'callct551.py'
, 'callct550.py'
, 'callct549.py'
, 'callct548.py'
, 'callct547.py'
, 'callct546.py'
, 'callct545.py'
, 'callct544.py'
, 'callct543.py'
, 'callct542.py'
, 'callct541.py'
, 'callct540.py'
, 'callct539.py'
, 'callct538.py'
, 'callct537.py'
, 'callct536.py'
, 'callct535.py'
, 'callct534.py'
, 'callct533.py'
, 'callct532.py'
, 'callct531.py'
, 'callct530.py'
, 'callct529.py'
, 'callct528.py'
, 'callct527.py'
, 'callct526.py'
, 'callct525.py'
, 'callct524.py'
, 'callct523.py'
, 'callct522.py'
, 'callct521.py'
, 'callct520.py'
, 'callct519.py'
, 'callct518.py'
, 'callct517.py'
, 'callct516.py'
, 'callct515.py'
, 'callct514.py'
, 'callct513.py'
, 'callct512.py'
, 'callct511.py'
, 'callct510.py'
, 'callct509.py'
, 'callct508.py'
, 'callct507.py'
, 'callct506.py'
, 'callct505.py'
, 'callct504.py'
, 'callct503.py'
, 'callct502.py'
, 'callct501.py'
), 'callct500.py', 'callct499.py', 'callct498.py', 'callct497.py', 'callct496.py', 'callct495.py', 'callct494.py', 'callct493.py', 'callct492.py', 'callct491.py', 'callct490.py', 'callct489.py', 'callct488.py', 'callct487.py', 'callct486.py', 'callct485.py', 'callct484.py', 'callct483.py', 'callct482.py', 'callct481.py', 'callct480.py', 'callct479.py', 'callct478.py', 'callct477.py', 'callct476.py', 'callct475.py', 'callct474.py', 'callct473.py', 'callct472.py', 'callct471.py', 'callct470.py', 'callct469.py', 'callct468.py', 'callct467.py', 'callct466.py', 'callct465.py', 'callct464.py', 'callct463.py', 'callct462.py', 'callct461.py', 'callct460.py', 'callct459.py', 'callct458.py', 'callct457.py', 'callct456.py', 'callct455.py', 'callct454.py', 'callct453.py', 'callct452.py', 'callct451.py', 'callct450.py', 'callct449.py', 'callct448.py', 'callct447.py', 'callct446.py', 'callct445.py', 'callct444.py', 'callct443.py', 'callct442.py', 'callct441.py', 'callct440.py', 'callct439.py', 'callct438.py', 'callct437.py', 'callct436.py', 'callct435.py', 'callct434.py', 'callct433.py', 'callct432.py', 'callct431.py', 'callct430.py', 'callct429.py', 'callct428.py', 'callct427.py', 'callct426.py', 'callct425.py', 'callct424.py', 'callct423.py', 'callct422.py', 'callct421.py', 'callct420.py', 'callct419.py', 'callct418.py', 'callct417.py', 'callct416.py', 'callct415.py', 'callct414.py', 'callct413.py', 'callct412.py', 'callct411.py', 'callct410.py', 'callct409.py', 'callct408.py', 'callct407.py', 'callct406.py', 'callct405.py', 'callct404.py', 'callct403.py', 'callct402.py', 'callct401.py'
), 'callct400.py', 'callct399.py', 'callct398.py', 'callct397.py', 'callct396.py', 'callct395.py', 'callct394.py', 'callct393.py', 'callct392.py', 'callct391.py', 'callct390.py', 'callct389.py', 'callct388.py', 'callct387.py', 'callct386.py', 'callct385.py', 'callct384.py', 'callct383.py', 'callct382.py', 'callct381.py', 'callct380.py', 'callct379.py', 'callct378.py', 'callct377.py', 'callct376.py', 'callct375.py', 'callct374.py', 'callct373.py', 'callct372.py', 'callct371.py', 'callct370.py', 'callct369.py', 'callct368.py', 'callct367.py', 'callct366.py', 'callct365.py', 'callct364.py', 'callct363.py', 'callct362.py', 'callct361.py', 'callct360.py', 'callct359.py', 'callct358.py', 'callct357.py', 'callct356.py', 'callct355.py', 'callct354.py', 'callct353.py', 'callct352.py', 'callct351.py', 'callct350.py', 'callct349.py', 'callct348.py', 'callct347.py', 'callct346.py', 'callct345.py', 'callct344.py', 'callct343.py', 'callct342.py', 'callct341.py', 'callct340.py', 'callct339.py', 'callct338.py', 'callct337.py', 'callct336.py', 'callct335.py', 'callct334.py', 'callct333.py', 'callct332.py', 'callct331.py', 'callct330.py', 'callct329.py', 'callct328.py', 'callct327.py', 'callct326.py', 'callct325.py', 'callct324.py', 'callct323.py', 'callct322.py', 'callct321.py', 'callct320.py', 'callct319.py', 'callct318.py', 'callct317.py', 'callct316.py', 'callct315.py', 'callct314.py', 'callct313.py', 'callct312.py', 'callct311.py', 'callct310.py', 'callct309.py', 'callct308.py', 'callct307.py', 'callct306.py', 'callct305.py', 'callct304.py', 'callct303.py', 'callct302.py', 'callct301.py'
), 'callct300.py', 'callct299.py', 'callct298.py', 'callct297.py', 'callct296.py', 'callct295.py', 'callct294.py', 'callct293.py', 'callct292.py', 'callct291.py', 'callct290.py', 'callct289.py', 'callct288.py', 'callct287.py', 'callct286.py', 'callct285.py', 'callct284.py', 'callct283.py', 'callct282.py', 'callct281.py', 'callct280.py', 'callct279.py', 'callct278.py', 'callct277.py', 'callct276.py', 'callct275.py', 'callct274.py', 'callct273.py', 'callct272.py', 'callct271.py', 'callct270.py', 'callct269.py', 'callct268.py', 'callct267.py', 'callct266.py', 'callct265.py', 'callct264.py', 'callct263.py', 'callct262.py', 'callct261.py', 'callct260.py', 'callct259.py', 'callct258.py', 'callct257.py', 'callct256.py', 'callct255.py', 'callct254.py', 'callct253.py', 'callct252.py', 'callct251.py', 'callct250.py', 'callct249.py', 'callct248.py', 'callct247.py', 'callct246.py', 'callct245.py', 'callct244.py', 'callct243.py', 'callct242.py', 'callct241.py', 'callct240.py', 'callct239.py', 'callct238.py', 'callct237.py', 'callct236.py', 'callct235.py', 'callct234.py', 'callct233.py', 'callct232.py', 'callct231.py', 'callct230.py', 'callct229.py', 'callct228.py', 'callct227.py', 'callct226.py', 'callct225.py', 'callct224.py', 'callct223.py', 'callct222.py', 'callct221.py', 'callct220.py', 'callct219.py', 'callct218.py', 'callct217.py', 'callct216.py', 'callct215.py', 'callct214.py', 'callct213.py', 'callct212.py', 'callct211.py', 'callct210.py', 'callct209.py', 'callct208.py', 'callct207.py', 'callct206.py', 'callct205.py', 'callct204.py', 'callct203.py', 'callct202.py', 'callct201.py'
), 'callct200.py', 'callct199.py', 'callct198.py', 'callct197.py', 'callct196.py', 'callct195.py', 'callct194.py', 'callct193.py', 'callct192.py', 'callct191.py', 'callct190.py', 'callct189.py', 'callct188.py', 'callct187.py', 'callct186.py', 'callct185.py', 'callct184.py', 'callct183.py', 'callct182.py', 'callct181.py', 'callct180.py', 'callct179.py', 'callct178.py', 'callct177.py', 'callct176.py', 'callct175.py', 'callct174.py', 'callct173.py', 'callct172.py', 'callct171.py', 'callct170.py', 'callct169.py', 'callct168.py', 'callct167.py', 'callct166.py', 'callct165.py', 'callct164.py', 'callct163.py', 'callct162.py', 'callct161.py', 'callct160.py', 'callct159.py', 'callct158.py', 'callct157.py', 'callct156.py', 'callct155.py', 'callct154.py', 'callct153.py', 'callct152.py', 'callct151.py', 'callct150.py', 'callct149.py', 'callct148.py', 'callct147.py', 'callct146.py', 'callct145.py', 'callct144.py', 'callct143.py', 'callct142.py', 'callct141.py', 'callct140.py', 'callct139.py', 'callct138.py', 'callct137.py', 'callct136.py', 'callct135.py', 'callct134.py', 'callct133.py', 'callct132.py', 'callct131.py', 'callct130.py', 'callct129.py', 'callct128.py', 'callct127.py', 'callct126.py', 'callct125.py', 'callct124.py', 'callct123.py', 'callct122.py', 'callct121.py', 'callct120.py', 'callct119.py', 'callct118.py', 'callct117.py', 'callct116.py', 'callct115.py', 'callct114.py', 'callct113.py', 'callct112.py', 'callct111.py', 'callct110.py', 'callct109.py', 'callct108.py', 'callct107.py', 'callct106.py', 'callct105.py', 'callct104.py', 'callct103.py', 'callct102.py', 'callct101.py'
), 'callct100.py', 'callct099.py', 'callct098.py', 'callct097.py', 'callct096.py', 'callct095.py', 'callct094.py', 'callct093.py', 'callct092.py', 'callct091.py', 'callct090.py', 'callct089.py', 'callct088.py', 'callct087.py', 'callct086.py', 'callct085.py', 'callct084.py', 'callct083.py', 'callct082.py', 'callct081.py', 'callct080.py', 'callct079.py', 'callct078.py', 'callct077.py', 'callct076.py', 'callct075.py', 'callct074.py', 'callct073.py', 'callct072.py', 'callct071.py', 'callct070.py', 'callct069.py', 'callct068.py', 'callct067.py', 'callct066.py', 'callct065.py', 'callct064.py', 'callct063.py', 'callct062.py', 'callct061.py', 'callct060.py', 'callct059.py', 'callct058.py', 'callct057.py', 'callct056.py', 'callct055.py', 'callct054.py', 'callct053.py', 'callct052.py', 'callct051.py', 'callct050.py', 'callct049.py', 'callct048.py', 'callct047.py', 'callct046.py', 'callct045.py', 'callct044.py', 'callct043.py', 'callct042.py', 'callct041.py', 'callct040.py', 'callct039.py', 'callct038.py', 'callct037.py', 'callct036.py', 'callct035.py', 'callct034.py', 'callct033.py', 'callct032.py', 'callct031.py', 'callct030.py', 'callct029.py', 'callct028.py', 'callct027.py', 'callct026.py', 'callct025.py', 'callct024.py', 'callct023.py', 'callct022.py', 'callct021.py', 'callct020.py', 'callct019.py', 'callct018.py', 'callct017.py', 'callct016.py', 'callct015.py', 'callct014.py', 'callct013.py', 'callct012.py', 'callct011.py', 'callct010.py', 'callct009.py', 'callct008.py', 'callct007.py', 'callct006.py', 'callct005.py', 'callct004.py', 'callct003.py', 'callct002.py', 'callct001.py'
)

def roda_processo(processo):
    os.system('python {}'.format(processo))


pool=Pool(processes=700)
pool.map(roda_processo, processos)

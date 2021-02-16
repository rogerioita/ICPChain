let fs = require('fs');
var shell = require('shelljs');


var text = [] ; text = fs.readFileSync("../paralelo.csv").toString('utf-8');
var re = /\r\n|\n/;
var nameList = text.split(re);

console.log(nameList[0].slice(0,6))
console.log(nameList[0].slice(6,52))

console.log(nameList[9].slice(0,6))
console.log(nameList[9].slice(6,52))


var k =0;
while (nameList[k].slice(0,5) != nameList[1000].slice(0,5)) {
    //++++ Cria para cada Address Account um script de teste, baseado no "baseScpki,js"
    shell.cat('baseScpki.js').toEnd('/home/rogerio/AppsMC2/scpki/testDir/' +nameList[k].slice(0,5) +'.js');

    //++++ Aloca testAddress de para cada arquivo criado no intem anterior
    shell.exec(`sed -i "s/testAddress = ''/testAddress ='${nameList[k].slice(6,52)}'/" /home/rogerio/AppsMC2/scpki/testDir/` + nameList[k].slice(0,5) +'.js')

	//++++ Cria as chamadas dos arquivos ".js" através de arquivos ".py"
    shell.cat('/home/rogerio/AppsMC2/baseCall.py').to('/home/rogerio/AppsMC2/scpki/testDir/call'  +nameList[k].slice(0,5) +'.py');

    //++++ Aloca testAddress para cada chamada criada no intem anterior
	shell.exec(`sed -i "s/'node'/'node ${nameList[k].slice(0,5)}.js'/" /home/rogerio/AppsMC2/scpki/testDir/call` + nameList[k].slice(0,5) +'.py')
	k++
}


shell.cat('baseScpki.js').toEnd('/home/rogerio/AppsMC2/scpki/testDir/' +nameList[k].slice(0,5) +'.js');
shell.exec(`sed -i "s/testAddress = ''/testAddress ='${nameList[k].slice(6,52)}'/" /home/rogerio/AppsMC2/scpki/testDir/` + nameList[k].slice(0,5) +'.js')
shell.cat('/home/rogerio/AppsMC2/baseCall.py').to('/home/rogerio/AppsMC2/scpki/testDir/call'  +nameList[k].slice(0,5) +'.py');
shell.exec(`sed -i "s/'node'/'node ${nameList[k].slice(0,5)}.js'/" /home/rogerio/AppsMC2/scpki/testDir/call` + nameList[k].slice(0,5) +'.py')

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MetaScript dos Sctips de paralelização ++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++paraleliza-10.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-10.py')
while (nameList[j].slice(0,5) != nameList[9].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-10.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-10.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-10.py`)
shell.exec(`sed -i "s/processes=/processes=10/" paraleliza-10.py`)
shell.exec('autopep8 -i paraleliza-10.py')

//++++++++++++++paraleliza-20.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-20.py')
while (nameList[j].slice(0,5) != nameList[19].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-20.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-20.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-20.py`)
shell.exec(`sed -i "s/processes=/processes=20/" paraleliza-20.py`)
shell.exec('autopep8 -i paraleliza-20.py')

//++++++++++++++paraleliza-30.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-30.py')
while (nameList[j].slice(0,5) != nameList[29].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-30.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-30.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-30.py`)
shell.exec(`sed -i "s/processes=/processes=30/" paraleliza-30.py`)
shell.exec('autopep8 -i paraleliza-30.py')


//++++++++++++++paraleliza-40.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-40.py')
while (nameList[j].slice(0,5) != nameList[39].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-40.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-40.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-40.py`)
shell.exec(`sed -i "s/processes=/processes=40/" paraleliza-40.py`)
shell.exec('autopep8 -i paraleliza-40.py')

//++++++++++++++paraleliza-50.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-50.py')
while (nameList[j].slice(0,5) != nameList[49].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-50.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-50.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-50.py`)
shell.exec(`sed -i "s/processes=/processes=50/" paraleliza-50.py`)
shell.exec('autopep8 -i paraleliza-50.py')

//++++++++++++++paraleliza-100.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-100.py')
while (nameList[j].slice(0,5) != nameList[99].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-100.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-100.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-100.py`)
shell.exec(`sed -i "s/processes=/processes=100/" paraleliza-100.py`)
shell.exec('autopep8 -i paraleliza-100.py')

//++++++++++++++paraleliza-200.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-200.py')
while (nameList[j].slice(0,5) != nameList[199].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-200.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-200.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-200.py`)
shell.exec(`sed -i "s/processes=/processes=200/" paraleliza-200.py`)
shell.exec('autopep8 -i paraleliza-200.py')



//++++++++++++++paraleliza-300.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-300.py')
while (nameList[j].slice(0,5) != nameList[299].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-300.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-300.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-300.py`)
shell.exec(`sed -i "s/processes=/processes=300/" paraleliza-300.py`)
shell.exec('autopep8 -i paraleliza-300.py')



//++++++++++++++paraleliza-400.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-400.py')
while (nameList[j].slice(0,5) != nameList[399].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-400.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-400.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-400.py`)
shell.exec(`sed -i "s/processes=/processes=400/" paraleliza-400.py`)
shell.exec('autopep8 -i paraleliza-400.py')

//++++++++++++++paraleliza-500.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-500.py')
while (nameList[j].slice(0,5) != nameList[499].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-500.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-500.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-500.py`)
shell.exec(`sed -i "s/processes=/processes=500/" paraleliza-500.py`)
shell.exec('autopep8 -i paraleliza-500.py')


//++++++++++++++paraleliza-600.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-600.py')
while (nameList[j].slice(0,5) != nameList[599].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-600.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-600.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-600.py`)
shell.exec(`sed -i "s/processes=/processes=600/" paraleliza-600.py`)
shell.exec('autopep8 -i paraleliza-600.py')


//++++++++++++++paraleliza-700.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-700.py')
while (nameList[j].slice(0,5) != nameList[699].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-700.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-700.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-700.py`)
shell.exec(`sed -i "s/processes=/processes=700/" paraleliza-700.py`)
shell.exec('autopep8 -i paraleliza-700.py')


//++++++++++++++paraleliza-800.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-800.py')
while (nameList[j].slice(0,5) != nameList[799].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-800.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-800.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-800.py`)
shell.exec(`sed -i "s/processes=/processes=800/" paraleliza-800.py`)
shell.exec('autopep8 -i paraleliza-800.py')



//++++++++++++++paraleliza-900.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-900.py')
while (nameList[j].slice(0,5) != nameList[899].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-900.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-900.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-900.py`)
shell.exec(`sed -i "s/processes=/processes=900/" paraleliza-900.py`)
shell.exec('autopep8 -i paraleliza-900.py')


//++++++++++++++paraleliza-1000.py

var j =0;
var form = '"' 
var arr = new Array();
shell.exec('cp /home/rogerio/AppsMC2/baseParaleliza.py paraleliza-1000.py')
while (nameList[j].slice(0,5) != nameList[999].slice(0,5)) {


    arr='call'+nameList[j].slice(0,5)+'.py' 

    shell.exec(`sed -i "/= (/a ,'${arr}'" paraleliza-1000.py`)

    j++
}
shell.exec(`sed -i "/= (/a 'call${nameList[j].slice(0,5)}.py'" paraleliza-1000.py`)

shell.exec(`sed -i "/01.py'/a )" paraleliza-1000.py`)
shell.exec(`sed -i "s/processes=/processes=1000/" paraleliza-1000.py`)
shell.exec('autopep8 -i paraleliza-1000.py')




//++++++++++++++++++++++++++++++++++++++++++++


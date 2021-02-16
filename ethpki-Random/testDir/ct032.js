let fs = require('fs');
let Web3 = require('web3');
var shell = require('shelljs');
let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://192.168.15.180:8565'));


var testAddress ='0x54aa9c8d9e7d9c43261ef2d863dd89c83225d3c8'; 

let contractAddress = "0x86b66debf5c264829e9b85a16beb1b58367fbe87";
let fromAddress = "0xd528af6e56cf19b0cc4690a88a58dd2048c3f562";
var form = '"' 
var obtainedTestAddress;
var obtainedSourceAddress;
obtainedTestAddress = (form+testAddress+form)
obtainedSourceAddress = (form+fromAddress+form)


let abiStr = fs.readFileSync('ethAbi.json', 'utf8');
let abi = JSON.parse(abiStr);
let pki = new web3.eth.Contract(abi, contractAddress);


function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

t=random(1,4)*15*1000

console.log(t/1000,'segundos')

// Função que será temporalizada
function sayHi() {
  console.log("Será realizado o experimento com o Address:" +testAddress);

sendTransaction()
    .then(function() {
        console.log("Done!");
    })
    .catch(function(error) {
        console.log(error);
    })
async function sendTransaction() {
        
    for (i=0; i<= 0; i++) {

        var fim, inicio;

	//++++++++++++++++++++++++++++++++++++++++++++MÉTODO APPEND()++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var app;
	shell.exec('vmstat 1 -t >> /home/rogerio/resultados/temporarios/stat-Eth.csv', { async : true, silent:true});
        inicio = new Date();
        app=await pki.methods.append("Criando uma Mensagem", "1979")
            .send({from: testAddress, gas: 600000}).on('receipt');


        fim = new Date();
//        shell.exec('pkill vmstat');

        shell.echo('Anexação, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + app.gasUsed,
                   ', Bloco, ' + app.blockNumber,', Status, ' + app.status,',  Hash da Transacao, ' + app.transactionHash,
		   ', Origem, ' + app.from,', Horario,', new Date()).toEnd('/home/rogerio/resultados/temporarios/log-Eth.csv'); 

        //+++++++++++++++++++++++++++++++++++++++++++++MÉTODO SIGN()++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var sig;
//        shell.exec('vmstat 1 -t >> /home/rogerio/resultados/temporarios/stat-Eth.csv', { async : true, silent:true});
        inicio = new Date();

        sig=await pki.methods.sign("0", 3600)
            .send({from: testAddress, gas: 600000}).on('receipt');

        fim = new Date();
//        shell.exec('pkill vmstat');
        shell.echo('Assinatura, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + sig.gasUsed,
                   ', Bloco, ' + sig.blockNumber,', Status, ' + sig.status,',  Hash da Transacao, ' + sig.transactionHash,
		   ', Origem, ' + sig.from,', Horario,', new Date()).toEnd('/home/rogerio/resultados/temporarios/log-Eth.csv');

        //+++++++++++++++++++++++++++++++++++++++++++++++MÉTODO REVOKE()++++++++++++++++++++++++++++++++++++++++++++++++++
	var rev;
//        shell.exec('vmstat 1 -t >> /home/rogerio/resultados/temporarios/stat-Eth.csv', { async : true, silent:true});
        inicio = new Date();

        rev=await pki.methods.revoke("0")
            .send({from: testAddress, gas: 600000}).on('receipt');

        fim = new Date();
        shell.echo('Revogação, ', (fim.getTime() - inicio.getTime()),', Uso de Gas, ', rev.gasUsed,
                   ', Bloco, ', rev.blockNumber,', Status, ', rev.status,',  Hash da Transacao, ', rev.transactionHash,
		   ', Origem,', rev.from,', Horario,', new Date()).toEnd('/home/rogerio/resultados/temporarios/log-Eth.csv');
	shell.exec('pkill vmstat') ;
}
}

}

var myGreeting = setTimeout(sayHi, t);





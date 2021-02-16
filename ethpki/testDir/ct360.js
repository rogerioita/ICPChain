let fs = require('fs');
let Web3 = require('web3');
var shell = require('shelljs');
let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://192.168.15.180:8565'));


var testAddress ='0x0123e12c3d4525e726ed909ec0e016bd619d4c7c'; 

let contractAddress = "0xf62DE2bbA0337aCf0DBFf331a58fe144c5F42680";
let fromAddress = "0xd528af6e56cf19b0cc4690a88a58dd2048c3f562";
var form = '"' 
var obtainedTestAddress;
var obtainedSourceAddress;
obtainedTestAddress = (form+testAddress+form)
obtainedSourceAddress = (form+fromAddress+form)


let abiStr = fs.readFileSync('ethAbi.json', 'utf8');
let abi = JSON.parse(abiStr);
let pki = new web3.eth.Contract(abi, contractAddress);


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
/*
//++++++++++++++++++++++++++++++++++++++++++++MÉTODO REGISTER 1 ()++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Caso 1: Somente Registrar como Owner        
// Caso 2: Registrar como Owner e Registrar outra Conta Qq
// Caso 3: Seguir o Advanced Scenario
	var reg1; 
	shell.exec('vmstat 1 -t >> /home/rogerio/stat.csv', { async : true, silent:true});
        inicio = new Date();
        reg1=await pki.methods.append("0xd528af6e56cf19b0cc4690a88a58dd2048c3f562", "0")
            .send({from: fromAddress, gas: 600000}).on('receipt');

        fim = new Date();
        shell.exec('pkill vmstat');

        shell.echo('Registro 1, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + reg1.gasUsed,
                   ', Bloco, ' + reg1.blockNumber,', Status, ' + reg1.status,',  Hash da Transacao, ' + reg1.transactionHash,
                   ', Origem, ' + reg1.from,', Horario,', new Date()).toEnd('/home/rogerio/log-Eth.csv'); 


//++++++++++++++++++++++++++++++++++++++++++++MÉTODO REGISTER 2 ()++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var reg2;
	shell.exec('vmstat 1 -t >> /home/rogerio/stat.csv', { async : true, silent:true});
        inicio = new Date();


	reg2=await pki.methods.append("0xD2b4c6384DE7Bc2385Db849dd4F17337c42B58d5", "1")
            .send({from: fromAddress, gas: 600000}).on('receipt');

	fim = new Date();
        shell.exec('pkill vmstat');

        shell.echo('Registro 2, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + reg2.gasUsed,
                   ', Bloco, ' + reg2.blockNumber,', Status, ' + reg2.status,',  Hash da Transacao, ' + reg2.transactionHash,
                   ', Origem, ' + reg2.from,', Horario,', new Date()).toEnd('/home/rogerio/log-Eth.csv'); 

*/
	//++++++++++++++++++++++++++++++++++++++++++++MÉTODO APPEND()++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var app;
	shell.exec('vmstat 1 -t >> ~/resultados/temporarios/comCriptografia/stat-Eth-Criptografado.csv', { async : true, silent:true});
        inicio = new Date();
        app=await pki.methods.append("Criando uma Mensagem", "1979")
            .send({from: testAddress, gas: 600000}).on('receipt');


        fim = new Date();
//        shell.exec('pkill vmstat');

        shell.echo('Anexação, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + app.gasUsed,
                   ', Bloco, ' + app.blockNumber,', Status, ' + app.status,',  Hash da Transacao, ' + app.transactionHash,
		   ', Origem, ' + app.from,', Horario,', new Date()).toEnd('~/resultados/temporarios/comCriptografia/log-Eth-Criptografado.csv'); 

        //+++++++++++++++++++++++++++++++++++++++++++++MÉTODO SIGN()++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var sig;
//        shell.exec('vmstat 1 -t >> ~/resultados/temporarios/comCriptografia/stat-Eth-Criptografado.csv', { async : true, silent:true});
        inicio = new Date();

        sig=await pki.methods.sign("0", 3600)
            .send({from: testAddress, gas: 600000}).on('receipt');

        fim = new Date();
//        shell.exec('pkill vmstat');
        shell.echo('Assinatura, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + sig.gasUsed,
                   ', Bloco, ' + sig.blockNumber,', Status, ' + sig.status,',  Hash da Transacao, ' + sig.transactionHash,
		   ', Origem, ' + sig.from,', Horario,', new Date()).toEnd('~/resultados/temporarios/comCriptografia/log-Eth-Criptografado.csv');

        //+++++++++++++++++++++++++++++++++++++++++++++++MÉTODO REVOKE()++++++++++++++++++++++++++++++++++++++++++++++++++
	var rev;
//        shell.exec('vmstat 1 -t >> ~/resultados/temporarios/comCriptografia/stat-Eth-Criptografado.csv', { async : true, silent:true});
        inicio = new Date();

        rev=await pki.methods.revoke("0")
            .send({from: testAddress, gas: 600000}).on('receipt');

        fim = new Date();
        shell.echo('Revogação, ', (fim.getTime() - inicio.getTime()),', Uso de Gas, ', rev.gasUsed,
                   ', Bloco, ', rev.blockNumber,', Status, ', rev.status,',  Hash da Transacao, ', rev.transactionHash,
		   ', Origem,', rev.from,', Horario,', new Date()).toEnd('~/resultados/temporarios/comCriptografia/log-Eth-Criptografado.csv');
	shell.exec('pkill vmstat') ;
}
}



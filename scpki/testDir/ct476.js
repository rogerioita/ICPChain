let fs = require('fs');
let Web3 = require('web3');
var shell = require('shelljs');
let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://192.168.15.180:8565'));



var testAddress ='0x07c127d7dc23d8389a6c596524f76c3c3a692455'
var form = '"' 
let contractAddress = "0xe49b55a9ec0a421ff65be52e73e02ddb7f2a08ac";
let fromAddress = "0xd528af6e56cf19b0cc4690a88a58dd2048c3f562"; 
var form = '"' 
var obtainedTestAddress;
var obtainedSourceAddress;
obtainedTestAddress = (form+testAddress+form)
obtainedSourceAddress = (form+fromAddress+form)


let abiStr = fs.readFileSync('scpkiAbi.json', 'utf8');
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
        var fim, inicio; //await pki.methods.revoke(0)
        shell.exec('vmstat 1 -t >> /home/rogerio/resultados/temporarios/stat-Scpki.csv', { async : true, silent:true});
        inicio = new Date();
	
		app=await pki.methods.addAttribute("projblock@gmail.com","F","0x6162636400000000000000000000000000000000000000000000000000000000", "Teste inicial","")
		.send({from: testAddress, gas: 600000});
	
	    fim = new Date();
//        shell.exec('pkill vmstat');
        shell.echo('Anexação, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + app.gasUsed,
                   ', Bloco, ' + app.blockNumber,', Status, ' + app.status,',  Hash da Transacao, ' + app.transactionHash,
		   ', Origem, ' + app.from,', Horario,', new Date()).toEnd('/home/rogerio/resultados/temporarios/log-Scpki.csv'); 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   //	shell.exec('vmstat 1 -t >> /home/rogerio/stat-Scpki.csv, { async : true, silent:true});
    	inicio = new Date();

	sig=await pki.methods.signAttribute(0, 07072020)
            .send({from: testAddress, gas: 600000});

    	fim = new Date();
//    	shell.exec('pkill vmstat');
	shell.echo('Assinatura, ' + (fim.getTime() - inicio.getTime()),', Uso de Gas, ' + sig.gasUsed,
                   ', Bloco, ' + sig.blockNumber,', Status, ' + sig.status,',  Hash da Transacao, ' + sig.transactionHash,
    		   ', Origem, ' + app.from,', Horario,', new Date()).toEnd('/home/rogerio/resultados/temporarios/log-Scpki.csv'); 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   	shell.exec('vmstat 1 -t >> /home/rogerio/stat-Scpki.csv', { async : true, silent:true});
    	inicio = new Date();

	rev=await pki.methods.revokeSignature(0)
            .send({from: testAddress, gas: 600000});

    	fim = new Date();
    	
    	shell.echo('Revogação, ', (fim.getTime() - inicio.getTime()),', Uso de Gas, ', rev.gasUsed,
                   ', Bloco, ', rev.blockNumber,', Status, ', rev.status,',  Hash da Transacao, ', rev.transactionHash,
		   ', Origem, ' + app.from,', Horario,', new Date()).toEnd('/home/rogerio/resultados/temporarios/log-Scpki.csv'); 
        shell.exec('pkill vmstat');
}
}


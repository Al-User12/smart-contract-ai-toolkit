const { deploySmartContract, interactWithContract } = require('chain-ai-connect');

// Contoh deployment smart contract dengan integrasi AI
const contractData = {
    name: 'AISmartContract',
    modelId: 'xyz123',
    initialData: { foo: 'bar' }
};
deploySmartContract(contractData).then(contractAddress => {
    console.log('Smart contract deployed at:', contractAddress);
}).catch(error => {
    console.error('Error deploying smart contract:', error);
});

// Contoh interaksi dengan smart contract yang menggunakan AI
const contractAddress = '0xabc123';
const inputData = { input: 'data' };
interactWithContract(contractAddress, inputData).then(result => {
    console.log('Result from smart contract:', result);
}).catch(error => {
    console.error('Error interacting with smart contract:', error);
});

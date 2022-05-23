import CryptoJS from 'crypto-js';

const COINBASE_AMOUNT = 50;

// 코인을 어디로 얼만큼 보냈는가
class TxOut{
    constructor(address, amount) {
        this.address = address;             // string
        this.amount = amount;               // number
    }
}

// 보내진 코인을 실제로 소유했다에 대한 증거
class TxIn{
    constructor(txOutId, txOutIndex, sign) {
        this.txOutId = txOutId;             // string
        this.txOutIndex = txOutIndex;       // number
        this.sign = sign;                   // string
    } 
}


class Transaction {
    constructor(id, txIns, txOuts) {
        this.id = id;                       // string
        this.txIns = txIns;                 // TxIn[]
        this.txOuts = txOuts;               // TxOut[]
    }
}

// transaction ID
const getTransactionID = (transaction) => {
    // txIns에 있는 내용들을 하나의 문자열로 만든다.
    const txInsContent = transaction.txIns
        // 배열 string
        .map((txIn) => txIn.txOutId + txIn.OutIndex)
        .reduce((a, b) =>  a + b, '' );

    // txOuts에 있는 내용들을 하나의 문자열로 만든다.
    const txOutsContent = transaction.txIns
        .map((txOut) => txOut.address + txOut.amount)
        .reduce((a, b) => { a + b, ''} )
    


    // 위의 두내용을 다 합해서 hash 처리한다.
    CryptoJS.SHA256(txInsContent + txOutsContent ).toString();
}


// transaction signature
const signTxIn = (transaction, txIndex, privateKey) => {
    // 보내고 받아야하는 부분.
    // const txIn = transaction.txIns[txIndex];        // txIns 에서 가져오기

    // TODO :sign 코드 검증
    const signature = toHexString(privateKey, transaction.id).toDER();       // id 선언
    return signature;
}

// coinbase Transaction
const getCoinbaseTransaction = (address, blockIndex) => {
    const tr = new Transaction();
    const txIn = new TxIn();
    txIn.sign = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex;

    // 표시
    tr.txIns = [txIn];

    const txOut = new TxOut();
    txOut.address = address;
    txOut.amount = COINBASE_AMOUNT;

    tr.txIns = [txIn];
    tr.txOuts = [txOut];
    tr.id = getTransactionID(tr);

    return tr;
}
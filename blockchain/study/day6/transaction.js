import CryptoJS from 'crypto-js';
import _ from 'lodash';
import { getPublicKeyFromWallet,getPrivateKeyFromWallet} from './wallet.js'

const COINBASE_AMOUNT = 50;

let transactionPool = [];

const getTransactionPool = () => {
    return _.cloneDeep(transactionPool);    // 깊은 복사
}

let unspentTxOuts = [];                     // UnspentTxOut[]


class UnspentTxOut {
    constructor(txOutId, txOutIndex, address,amount){
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.address = address;
        this.amount = amount;
    }
}

let trans = [...transactionPool]            // 깊은 복사

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

const sendTransaction = (address, amount) => {
    // 1. 1. 트랜젝션 생성
    const tx = createTransaction();

    // 2. 트랜젝션 폴더 추가
    transactionPool.push(tx);
    
    // 3. 주변 노드에 전파


    return tx;
}

const createTransaction = (amount , address) => {
    // 1. 아직 처리 되진 않았지만 트랜잭션 풀에 올라가 있는 내용을 확인
    const myAddress = getPublicKeyFromWallet();
    const myUnspentTxOuts = unspnetTxOuts.filter((uTxO) => uTxO.address === myAddress);                 // 하나의 요소
    // Todo : ArrowFunction 형태 확인
    // unspnetTxOuts.filter((uTxO) => uTxO.address === myAddress);                 // 하나의 요소

    const filteredUnspentTxOuts=filterTxPoolTxs(myUnspentTxOuts);

    // 2. 거래애 사용되지 않은 Txouts을 구성, 트랜젝션에 필요한 코인을 확인
    // 넘기는 금액은 다시 나한테 전달
    // amount 는 외부에서 받아온다
    // return 값이 두개
    const {includeTxOuts, leftoverAmount } =findTxOutsForAmount(amount, filteredUnspentTxOuts);

    // 3. 서명 전의 TxIns로 구성
    const unsignedTxIns = includeTxOuts.map(createUnsignedTxIn);

    includeTxOuts
    createUnsignedTxIn

    // 4. 트랜젝션 구성
    const tx = new Transaction();
    tx.txIns = unsignedTxIns;                                             // 서명 전
    tx.txOuts = createTxOuts(address, amount, leftoverAmount);            // 받는사람 주소
    tx.id = getTransactionID(tx);

    // 서명 바뀐값을 새로운 요소로 만든다.
    tx.txIns = tx.txIns.map( (txIn) => {
        txIn.sign = signTxIn(tx, tx.txIns.txOutIndex, getPrivateKeyFromWallet());
        return txIn;
    });

    return tx;
}

const filterTxPoolTxs = (myUnspentTxOuts) => {
    // 트랜젝션 풀에서 트랜잭션 인풋 내용만 추출
    const txIns = _(transactionPool)
            .map((tx)=> tx.txIns)           //매개변수 가져온다, 새로운 배열을 구성한다
            .flatten()
            .value();

    console.log('트랜젝션 : ' , transactionPool );
    console.log("트랜젝션 풀안의 inputs : " , txIns );

    const removeable = [];

    // 함수형 프로그래밍
    // 조건에 맞는 요소들을 찾아낸다
    for (const unspentTxOut of myUnspentTxOuts) {
        // 저장
        const findTxIn = _.find(txIns, (txIn) => {
            // 하나하나 비교.
            return txIn.txOutIndex === unspentTxOut.txOutIndex && 
                txIn.txOutId === unspentTxOut.txOutId 
        })
        // 찾았는데 빈값이다.
        if(findTxIn == undefined) {

        }
        // 뭔가를 찾아 냈다.
        else {
            // 트랜젝션 풀에 올라가 있는것들과 비교
            removeable.push(unspentTxOut);
        }
    }

    // 제거
    _.without(myUnspentTxOuts, ...removeable)
}

const findTxOutsForAmount = (amount, filteredUnspentTxOuts) => {
    // 누적금액
    let currentAmount = 0;
    const includeTxOuts = [];

    for (const unspentTxOut of filteredUnspentTxOuts) {
        // 내 금액 있는거에서 가져간다.
        includeTxOuts.push(unspentTxOut);
        currentAmount = currentAmount + unspnetTxOuts.amount; 
        if(currentAmount >= amount) {           // 보낼수 있는 경우
            // 누적된 금액
            const leftoverAmount = currentAmount - amount;
            return {includeTxOuts, leftoverAmount};
        }
    }

    // 에러
    throw Error('보내려는 금액보다 보유 금액이 적다 !!');
}

const createUnsignedTxIn = (unspentTxOut) => {
    const txIn = new TxIn();
    txIn.txOutId = unspentTxOut.txOutId;
    txIn.txOutIndex = unspentTxOut.txOutIndex;

    return txIn;
}

const createTxOuts =(address, amount, leftoverAmount) => {
    const txOut = new TxOut(address, amount);
    if (leftoverAmount > 0){
        // 내 주소
        const leftoverTxOut = new TxOut(getPublicKeyFromWallet(), leftoverAmount)
        return [leftoverTxOut, txOut];
    }
    else {
        return [txOut];
    }
}

// 중복 검사
const addToTransactionPool = (transaction) => {
    // 올발는 트랜젹선인지
    if (!isValidateTransaction(transaction, unspentTxOuts)) {
        throw Error('추가하려는 트랜잭션이 올바르지가 않다 !!', transaction);
    }

    // 중복 되는지?
    if(isValidateTransaction(transaction)) {
        throw Error('추가하려는 트랜잭션이 트렌젝션 풀에 않다 !!', transaction);
    }

    transactionPool.push(transaction);
}

const isValidateTransaction = (transaction, unspentTxOuts) => {
    // id 일치
    if(getTransactionID(transaction) !== transaction.id)  {
        console.log('invalid transaction : ' , transaction.id);
        // 왜 false 하는지?
        return false;
    }

    const  totalTxInValues = transaction.txInsContent
        .map((txIn) => getTxInAmount(txIn, unspentTxOuts))          // amount 값을 추출 하는구나, amount 를 찾는다.
        .reduce((a ,b) => ((a + b) , 0 )) ;                         // 0 은 최소값, 짧은 형태일땐 중괄호 없어도 된다. reduce()데이터 타입에 따라 알아서 바뀐다

    // 필요한건 amount
    const totalTxOutValues = transaction.txOuts
        .map((txOut) => txOut.amount)
        .reduce((a,b) => (a + b) , 0);

    if (totalTxInValues !== totalTxOutValues){
        console.log('totalTxInValues !== totalTxOutValues id : ', transaction.id);
        return false
    }
}

const getTxInAmount = (txIn, unspentTxOuts) => {
    // 같은 id , index 에 amount 만 뽑아 낼것이다.
    // unTransacionOut
    const findUnspentTxOut = unspentTxOuts.find((uTxO) => uTxO.txOutId === txIn.txOutId &&
        uTxO.txOutIndex === txIn.txOutIndex);

    return findUnspentTxOut.amount;
}

// 검사
const isValidateTxForPool = (transaction) => {
    // 트랜젝션 풀에 있는 txIns들과 transaction에 txInts 비교해서 같은 것이 있는지 확인
    const txPoolIns = _(transactionPool)
        .map((tx) => tx.txIns)
        .flatten()
        .value();

    // 판단
    const containTxIn = ( txIn ) => {
        return _.find(txPoolIns, (txPoolIn) => {
            return txIn.txOutIndex === txPoolIn.txOutIndex &&
                txIn.txOutId === txPoolIn.txOutId;
        })
    }

    for (const txIn of transaction.txIns) {
        if (containTxIn(txIn)) {
            console.log('이미 존재하는 트랜젝션이다 !! id : ', transaction.id)
            return false;
        }
    }

    return true;
}


export {getTransactionPool ,addToTransactionPool}
import CryptoJS from 'crypto-js'

class Block {
    constructor(index, data, timestamp, hash, previousHash,difficulty,nonce){
        this.index =index;
        this.data =data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }
}


// 블록을 가져온다
function getBlocks() {
    return blocks;
}

const getLatestBlock = () => {
    return blocks[blocks.length - 1];
}

const calculateHash = (index, data, timestamp, previousHash , difficulty, nonce) => {
    return CryptoJS.SHA256((index + data+ timestamp+ previousHash + difficulty + nonce).toString()).toString();
}

// 첫(제네시스) 블록 생성
const createGenesisBlock = () => {
    
    const genesisBlock = new Block(
        0,
        'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', 
        new Date().getTime()/100,
        0,
        0,
        0,
        0
    );
        
    genesisBlock.hash = calculateHash(
        genesisBlock.index, 
        genesisBlock.data, 
        genesisBlock.timestamp, 
        genesisBlock.previousHash,
        genesisBlock.difficulty,
        genesisBlock.nonce
    );
    return genesisBlock;
} 

// 일반 블록 생성
const createBlock = (blockData) => {
    // 이전 블록불러오기
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;  //1000 milliseconds 하겠다
    const nextDiffcutly =1;

    //통과가 되면 넣어줄거다
    const nextNonce = findNonce(nextIndex, blockData , nextTimestamp, previousBlock.hash,nextDiffcutly);

    // 블록데이터 = 외부에서 가져오겠다
    const nextHash = calculateHash(nextIndex, blockData , nextTimestamp, previousBlock.hash,nextDiffcutly,nextNonce);
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash, nextDiffcutly, nextNonce);
    // 우리가 관리하는 블럭
    if(isValidNewBlock(newBlock,previousBlock)) {
        // 주로 이런 시스템을 사용한다.
        blocks.push(newBlock);

        return newBlock;
    }

    console.log('fail to create newblock');
    return null;``
}

// 내가 블록을 체굴했을때 상대방에게 알린다.
// 상대방의 체인 정보를 가져 올수있는 방법을 하겠다.
// 



// 블록의 무결성 검증
/* 
    블록의 인덱스가 이전 블록인덱스보다 1 크다
    블록의 previousHash가 블록의 이전의 블록이다.
    블록의 구조가 일치 해야한다.
*/

const isValidBlockStructure = (newBlock) => {
    // 타입 형태
    if(typeof(newBlock.index) === 'number' 
        && typeof(newBlock.data) === 'string'
        && typeof(newBlock.timestamp) === 'number'
        && typeof(newBlock.hash) === 'string'
        && typeof(newBlock.previousHash) === 'string'
        && typeof(newBlock.difficulty) === 'number'
        && typeof(newBlock.nonce) === 'number'
        ) {
            return true;
        }

    return false;
}


// 유효성
const isValidNewBlock = ( newBlock, previousBlock) => {
    // 내가 방금 블록이 이전보다 큰지?
    if(newBlock.index !== previousBlock.index + 1) {
        console.log('invalid index');
        return false;
    }
    // hash 일치
    else if (newBlock.previousHash !== previousBlock.hash) {
        console.log('invalid prervious hash')
        return false;
    }
    // 타입검사
    else if(!isValidBlockStructure(newBlock)){
        console.log('invalid block structure');
        return false;
    }

    return true;
}

//문제 해결을 검사하는 함수
const hashMatchDifificulty = (hash, difficulty) => {
    const binary = hexToBinary(hash);
    const requirePrefix = '0'.repeat(difficulty);

    // 문자열 함수 (startWith)
    return binary.startsWith(requirePrefix);
}

const hexToBinary = (hex) => {
    const lookupTable = {
        '0' : '0000' , '1' : '0001' , '2' : '0010' , '3' : '0011',
        '4' : '0100' , '5' : '0101' , '6' : '0110' , '7' : '0111',
        '8' : '1000' , '9' : '1001' , 'a' : '1010' , 'b' : '1011',
        'c' : '1100' , 'd' : '1101' , 'e' : '1110' , 'f' : '1111' 
    }

    // 결과물
    // 0000001111001111
    let binary = '';
    for(let i = 0 ; i < hex.length; i++){
        if(lookupTable[ hex[i] ]) {
            binary += lookupTable[hex[i]];
        }
        else  {
            console.log('invalid hex : ' , hex)
            return null;
        }
    }
    return binary;
}


//  해쉬값
const findNonce = (index, data, timestamp , previousHash, difficulty) => {
    let nonce =0;

    while (true) { 
        let hash = calculateHash(index, data, timestamp , previousHash, difficulty, nonce);

        if(hashMatchDifificulty(hash, difficulty)) {
            return nonce;
        }
    }
}




// 새로 만들어진 블록이 추가
const blocks = [createGenesisBlock()];


export {getBlocks, createBlock , getLatestBlock}
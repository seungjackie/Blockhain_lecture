// 블록체인 관련 함수
// 블록 구조 설계

/* 
    index : 블록체인의 높이
    data : 블록에 포함된 모든 데이터(트랜잭션 포함)
    timestamp : 블록이 생성된 시간
    hash : 블록 내부 데이터로 생성한 sha256 값
    previousHash : 이전 블록의 해쉬 (이전 블록을 참조)
*/

import CryptoJS from 'crypto-js'

class Block {
    constructor(index, data, timestamp, hash, previousHash){
        this.index =index;
        this.data =data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}


// 블록을 가져온다
function getBlocks() {
    return blocks;
}

const calculateHash = (index, data, timestamp, previousHash) => {
    return CryptoJS.SHA256((index + data+ timestamp+ previousHash).toString()).toString();
}

// 첫(제네시스) 블록 생성
const createGenesisBlock = () => {
    
    const genesisBlock = new Block(
        0,
        'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', 
        new Date().getTime()/100,
        0,
        0
    );
        
    genesisBlock.hash = calculateHash(
        genesisBlock.index, 
        genesisBlock.data, 
        genesisBlock.timestamp, 
        genesisBlock.previousHash
    );
    return genesisBlock;
} 

// 일반 블록 생성
const createBlock = (blockData) => {
    // 이전 블록불러오기
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;  //1000 milliseconds 하겠다
    // 블록데이터 = 외부에서 가져오겠다
    const nextHash = calculateHash(nextIndex, blockData , nextTimestamp, previousBlock.hash)
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash);

    if(isValidNewBlock(newBlock,previousBlock)) {
        blocks.push(newBlock);
        return newBlock;
    }

    console.log('fail to create newblock');
    return null;``
}

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
        && typeof(newBlock.previousHash) === 'string') {
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

// 새로 만들어진 블록이 추가
const blocks = [createGenesisBlock()];


export {getBlocks, createBlock}
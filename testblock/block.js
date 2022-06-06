import CryptoJs from 'crypto-js';

class Block {
    constructor(index, data, timestamp, hash, previousHash){
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
    }
}


function getBlocks() {
    return blocks;
}

const calculateHash = (index, data, timestamp, previousHash ) => {
    return CryptoJs.SHA256((index + data + timestamp + previousHash).toString()).toString();
}

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

const createBlock = (blockData) => {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex =previousBlock.index +1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextHash = calculateHash(nextIndex, blockData, nextTimestamp, previousBlock.hash)
    const newBlock = new Block(nextIndex, blockData, nextTimestamp, nextHash, previousBlock.hash)

    if(isValidNewBlock(newBlock, previousBlock)){
        blocks.push(newBlock);
        return newBlock;
    }
    console.log('fail to create newblock');
    return null;
}


const isValidBlockStructure = (newBlock) => {
    // 타입형태
    if(typeof(newBlock.index) === 'number'
    && typeof(newBlock.data) === 'string'
    && typeof(newBlock.timestamp) === 'number'
    && typeof(newBlock.hash) === 'string'
    && typeof(newBlock.previousHash) === 'string'
    ){
        return true;
    }

    return false;
}

const isValidNewBlock = (newBlock, previousBlock) => {
    if(!newBlock.index === previousBlock.inde +1){
        console.log('invalid index');
        return false;
    }else if(newBlock.previousBHash === previousBlock.hash){
        console.log('invalid previous hash')
        return false;
    }else if(!isValidBlockStructure(newBlock)){
        console.log('invalid block structrure');
        return false;
    }
    return true;
}

const blocks = [createGenesisBlock()];


export {getBlocks, createBlock}
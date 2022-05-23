import ecdsa from 'elliptic';
import fs from 'fs';                        //파일 시스템


// 최신버젼, 암호화 알고리즘
const ec = new ecdsa.ec('secp256k1');
// 폴더명 .prviatekey 가 없으면 defalut
const privateKeyLocation = 'wallet/' + (process.env.PRIVATE_KEY || 'default');
// 파일명
const privateKeyFile = privateKeyLocation + 'private_key'

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate();
    // console.log(privateKey);
    // console.log(privateKey.toString());

    return privateKey.toString(16)
}

const initWallet = () => {
    // 이미 만들어진 경우
    if(fs.existsSync(privateKeyFile))  {
        console.log('지갑에 비밀키가 만들어져 있음');
        return;
    }

    if(fs.existsSync('wallet/') == false) { fs.mkdirSync(('wallet/')); }
    if(fs.existsSync(privateKeyLocation) == false) { fs.mkdirSync((privateKeyLocation)); }

    const privateKey = createPrivateKey();
    fs.writeFileSync(privateKeyFile, privateKey);
}

// privateket 가 있으면 생성
const getPrivateKeyFromWallet = () => {
    const buffer = fs.readFileSync(privateKeyFile, 'utf-8');
    return buffer.toString();
}

// 사용자 권한
const getPublicKeyFromWallet = () =>{
    const privateKey = getPrivateKeyFromWallet();
    const publickey = ec.keyFromPrivate(privateKey, 'hex');

    return publickey.getPublic().encode('hex');
}

export {getPublicKeyFromWallet ,initWallet }
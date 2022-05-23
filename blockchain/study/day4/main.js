//  p2p 서버 초기화
// http 서버 초기화
// 블록체인 함수 사용

import {initHttpServer} from './httpserver.js';
import {initP2PServer} from './p2pserver.js';

const httpPort = parseInt(process.env.HTTP_PORT) || 3001;
const p2pPort = parseInt(process.env.P2P_PORT) || 6001;
// const p2pPort6002 =  6002;
// const p2pPort6003 =  6003;


initHttpServer(httpPort);
initP2PServer(p2pPort);
//서버 추가하기
// initP2PServer(p2pPort6002);
// initP2PServer(p2pPort6003);

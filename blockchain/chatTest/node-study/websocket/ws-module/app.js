const express = require('express');
const path = require('path');                                 // 폴더와 파일의 경로를 지정해주는 모듈이다.
const morgan = require('morgan');                             // 로깅에 도움을 주는 미들 웨어이다.로깅 - 무슨 일이 어디에서 일어났는지를 기록하느것을 의미.
const session = require('express-session');
const app = express();

// 포트 설정 a
app.set('port', process.env.PORT || 8003);
// path.join(경로, .. . ) 여러인자를 넣으면 하나의 경로로 합쳐준다.
// __dirname 은 모두 결합.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// morgan 서버와 클라이언트의 응답 사이에 존재하는 미들웨어
// log의 포멧 지정하기
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET || 'secret',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

// dummy DB
app.set('db', { rooms: new Array(), users: new Array() });

app.get('/', (req, res) => {
  // TODO: add user
  return res.render('index');
});

app.get('/newroom', (req, res) => res.render('new'));

app.post('/newroom', (req, res) => {
  const { title } = req.body;
  const roomId = req.sessionID + Date.now();
  const { rooms } = app.get('db');
  rooms.push({ title, roomId });

  // 채팅방 새로 생성시 홈에 있는 사람들에게 새로은 방 목록 전송
  // Q?: 본인은 왜 제외될까?
  // A!: 나는 현재 연결된 소켓이 없는상태임 home에서 newroom 으로 갈때 connection이 끊어지고
  //     redirect로 /chat/:roomId로 보내져야 chat.js에서 connection을 연결함
  app.get('wss').clients.forEach((client) => {
    if (client.location === 'index' && client.readyState === client.OPEN) client.send(JSON.stringify(rooms));
  });
  return res.redirect(`/chat/${roomId}`);
});

app.get('/chat/:roomId', (req, res) => {
  const { title } = app.get('db').rooms.find((room) => room.roomId === req.params.roomId);
  res.locals.title = title;
  res.render('chat');
});

// Error Exeption
app.use((req, res, next) => {
  const notFoundError = new Error(`${req.method} ${req.url} NotFound`);
  notFoundError.status = 404;
  next(notFoundError);
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== ' production' ? err : {};
  res.status(err.status || 500).render('error');
});

const expressServer = app.listen(app.get('port'), () => console.log('ws module server is running on port ' + app.get('port')));

// socket
require('./socket')(expressServer, app);

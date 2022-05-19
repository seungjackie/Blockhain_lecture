import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';          //bootstrap 가져온것
import {Container,Col , Row , Form, Button} from 'react-bootstrap'
import  ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import {useSelector} from 'react-redux'


// 1. ui 왼쪽에는 등록하는 폼이, 오른쪽은 연락처를 찾을수 있는 리스트 seach가 있다.
// 2. 리스트에 유저이름과 사용지 이름을 볼수있다.
// 3. 리시트에 아이템이 몇개있는지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을수있다.

function App() {

  let {keyword} = useSelector(state => state.keyword)

  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
          {/* 같은 자식 */}
            <ContactForm />
          </Col>
          <Col>
          {/* 같은 자식 */}
            <ContactList />
          </Col>
        </Row>
      </Container>
      

    </div>
  );
}

export default App;

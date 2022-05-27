// 하위 요소는 태그일땐 객채로 들어오느데 아닐땐 문자열

// 하나의 태그를 받는다 donNode를 생성한다, 개별적으로 tag donNode를 처맇나다
function createDOM(node) {

    if(typeof vdom === 'string') {
        return document.createTextNode(node)
    }

    // vdom 은 하나의 노드
    // 반환한 엘리먼트
    const element = document.createElement(node.tag);

    // vdom 이 맞는지?
    // Dom
    node.children
        .map(createDOM)
        // append child, 자식요소 돌고 (인자를)append.child
        .forEach(element.appendChild.bind(element));

    return element;
}

// 객체
const vdom ={
    // 어떤 모양으로 만들지?, 자식요소
    // 재귀 구조가 똑같다
    // 태그명
    tage: 'p',
    props: {},
    children:[
        {
            // 다른 태그
            tage: 'h1',
            props: {},
            children: ["react 만들기"],
        },
    ],
};

document
    .querySelector('#root')
    .appendChild(createDOM(vdom))
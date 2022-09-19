import React, { useEffect, useRef } from 'react';

//글로벌
// 타입스크립트에서는 카카오라는 것을 알려줘야 한다.
// 강제로 추가
declare global {
  interface Window {
    kakao: any
    loadMap: ()=> void    // 함수로 호출
  }
}


function App() {

  // id 를 쓰지 않고 엘레먼트 타입을 가져올수 있다.
  const mapRef = useRef<HTMLDivElement>(null); // 잘 담겨 있는지 확인 하자 / 담겨있지 않다면 null

  useEffect(() => {
    // window.loadMap() 
    // let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

    // let options = { //지도를 생성할 때 필요한 기본 옵션
    //   // 카카오는 사용된적이 없음으로 kakao를 부를순 없다.
    //   center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    //   level: 3 //지도의 레벨(확대, 축소 정도)
    // };

    // var map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


    //mapRef 주의사항
    // console.log(mapRef) // 이미 존재하는 개체이기 때문이다.

    // if(mapRef.current) {

    //   let options = { //지도를 생성할 때 필요한 기본 옵션
    //     // 카카오는 사용된적이 없음으로 kakao를 부를순 없다.
    //     center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    //     level: 3 //지도의 레벨(확대, 축소 정도)
    //   };

    //   //mapRef.current를 넣기
    //   // 함수들이 어떻 매게 타입을 원하는지 알수 있다.
    //   var map = new window.kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴

    //   // console.log(mapRef.current)
    // }

    const script = document.createElement('script')

    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=41a932088acc08cb815dde2e6fd8c0bd&autoload=false"

    // 헤드에 추가 scrpit 태그를 만들어 놓은 다음에 // appendchild=> 바디에 넣어도 상관없다. , index.html 추가
    document.head.appendChild(script)

    // onload 
    // 로딩이 완료 되면 이 코드를 실행 하라.
    script.onload = () => {

      // 중간에 하여서? 동적으로 사용하기 위해서 사용
      // 그래서 로딩이 끝날때 쯤에 사용한다. 쿼리스트링 뒤에 autoload=false
      window.kakao.maps.load(() => {

        if(mapRef.current) {

          console.log("onload 테스트")

          // 로딩 돼었을때

          let options = { //지도를 생성할 때 필요한 기본 옵션
            // 카카오는 사용된적이 없음으로 kakao를 부를순 없다.
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
          };

          //mapRef.current를 넣기
          // 함수들이 어떻 매게 타입을 원하는지 알수 있다.
          var map = new window.kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴

          // console.log(mapRef.current)
        }
      })
    }

    // 스크립트가 종료될때 스크립트 제거
    return () => script.remove()
  },[])


  return (
    <div className="App">
      {/* 스크립트는 발동된 이후에 실행이 되어야함. */}
      <div 
        ref={mapRef}
        style={{
          width: 300,
          height: 300
      }}></div>
    </div>
  );
}

export default App;

// 로딩 되기 전에 카카오 맵을 사용한다 그래서 퍼블릭 인덱스 html에서 작업한다.


// window.a()와 같다 a()
// 윈도우 객체 안에 들어있는 개념이다.
// 자바스크립트에서는 index.html 을 이용해서 window.kakao를 부를순 있지만
// 타입스크립트에서는 맨 위애서 정의를 해줘야 사용할수 있다. 


// window로 접근시 디버깅이 너무 어렵다.

// 리액트를 지원하지 않는 프로그램을 대신 사용해보기.

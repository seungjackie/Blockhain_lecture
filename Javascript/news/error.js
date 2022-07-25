let weight = 29;

// 에러를 발생 시키고 싶으면 try 문을 쓰자
// 에러 나는 순간 끝이다.
try {
  // 소스코드르 쓴다.
  // 이안에서 에러가 발생하면

  if (weight < 30) {
    //  자바스크릅트에서 제공
    throw new Error("당신은 너무 말랐어");
  }

  console.log("밥먹자"); //  에러가 나서 try문이 끝난다.
} catch (e) {
  //에러를 잡아준다.
  console.log("내가 잡은 에러는", e.message);
}

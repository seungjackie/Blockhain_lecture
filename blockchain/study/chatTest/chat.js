const chatBtn=document.querySelector('#chatBtn');
const chatRoom = document.querySelector('#chatRoom');


chatBtn.addEventListener('click',async ()=>{
    let url = 'http://localhost:3000/chat'
    let options = {
        method:'GET'
    }
    let response = await fetch (url,options);
    let result = await response.text();

    chatRoom.innerHTML=result;
})

chatBtn.addEventListener('click',async ()=>{
    let url = 'http://localhost:3000/chat'
    let options = {
        method:'GET'
    }
    let response = await fetch (url,options);
    let res_body = await response.text();

    if(isJson(res_body)){ // 응답이 json인 경우 : 로그인 실패한 경우 
        let {result,msg} = JSON.parse(res_body);
        if (result==false) alert(msg);
        return
    }else{
        // 응답이 html 인 경우 (render잘 되면) : 로그인 성공한 경우
        chatRoom.innerHTML=res_body;
    }
})

function isJson(str){
    try{
        let json = JSON.parse(str);
        return (typeof json =='object') //return : True
    }catch(e){
        return false; 
    }
}
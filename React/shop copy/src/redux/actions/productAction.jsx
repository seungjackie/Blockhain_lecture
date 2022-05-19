function getProducts(searchQuery) {
    return async(dispatch,getState)=>{
        // 두개의 파라미터 , getstate 현재의 스테이츠
        let url = `http://localhost:3004/products?q=${searchQuery}`;
        let response =  await fetch(url);
        let data = await response.json();
        // console.log(data)
        // {data} => 감싸서 보내야 한다 
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
    }
}

function getProductDetail(id) {
    return async (dispatch, getState) => {
        let url = `http://localhost:3004/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        dispatch({type:"GET_PRODUCTDETAIL_SUCCESS", payload:{data}})
  }
}

// 기능별로 나뉜다

export const productAction = {getProducts , getProductDetail};
/* eslint-disable no-unused-vars */
const updateTodoApiCall = (item)=>{
    console.log(item);

    // call the api to add todo items in the database
    fetch('http://127.0.0.1:8000/api/updateTodo',{
        method: 'POST',
        body: JSON.stringify(item),
        headers:{
            'Accept':'application/json',
            'Content-type': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}

export default updateTodoApiCall;
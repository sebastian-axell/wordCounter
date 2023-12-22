

export function getWordCounts(){
    const url = "http://localhost:8080/api/getWordCounts"
    return fetch(url,{
    mode: "cors",
    credentials: "same-origin",
}).then(response=>{
    if (response.status === 200){
        return response.json();
    }
    else{
        console.log("Error response", response.status);
    }
})
}
export function addWord(word){
    const url = "http://localhost:8080/api/addWord"
    return fetch(url,{
    mode: "cors",
    credentials: "same-origin",
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(word) //could be supurflous
})
.then(response=>{
    if (response.status ===200){
        console.log(response);
        return response.json();
        //do something
    }
    else{
        console.log(response.status);
    }
})
}
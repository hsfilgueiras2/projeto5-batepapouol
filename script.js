const chat = document.querySelector(".chat")
let username = {
    name: prompt("QUAL SEU LINDO NOME:")
}
axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", username);
let serverAnswer = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
serverAnswer.then(isUnernameFreeT)
serverAnswer.catch(isUnernameFreeC)





function isUnernameFreeT(resposta){
    alert("then")
    console.log(resposta);
    while(resposta.status == 400){
        username = {
            name: prompt("Esse nome esta indisponivel, pf escolha outro:")
        }
        axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",username);
        serverAnswer = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
        serverAnswer.then()
        serverAnswer.catch()
    }
        alert("vc esta logado")
        setInterval(isUserOnline, 5000);
        setInterval(messageGet, 3000);
    
}


function isUnernameFreeC(erro){
    alert("catch")
    console.log(erro);
    while(erro.response.status == 400){
        username = {
            name: prompt("Esse nome esta indisponivel, pf escolha outro:")
        }
        axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",username);
        serverAnswer = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");
        serverAnswer.then()
        serverAnswer.catch()
    }
        alert("vc esta logado")
        setInterval(isUserOnline, 5000);
        setInterval(messageGet, 3000);
    
}

function displayChat(inbox){
    console.log(inbox);
    chat.innerHTML = ""
    inbox.data.forEach(element => {
        displayMessage(element) 
    });
}

function messageGet(){
    const incoming = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    incoming.then(displayChat)
}
function isUserOnline(){
    axios.post("https://mock-api.driven.com.br/api/v6/uol/status", username);
}
function displayMessage(object){
    if (object.type == "message"){
    chat.innerHTML = chat.innerHTML +
    `<li class="${object.type}">
    <p><em>(${object.time})</em> <bold>${object.from}</bold> para <bold>${object.to}</bold>:
     ${object.text}</p></li>`
    }
    else{
        chat.innerHTML = chat.innerHTML +
        `<li class="${object.type}">
        <p><em>(${object.time})</em> <bold>${object.from}</bold> 
         ${object.text}</p></li>`
    }
}
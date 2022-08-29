const chat = document.querySelector(".chat")
let username = {
    name: prompt("QUAL SEU LINDO NOME:")
}
let serverAnswer = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", username);

serverAnswer.then(isUnernameFreeT)
serverAnswer.catch(isUnernameFreeC)




function sendMessage(){
    const text = document.querySelector("input").value;
    const messageToSend = {
        from: username,
        to: "Todos",
        text: text,
        type: "message"
    }
    const toSend = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", messageToSend)
    toSend.then(messageGet)
    toSend.catch(function(err){console.log(err)})
}
function isUnernameFreeT(resposta){
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
    const maintainConnection = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", username);
    maintainConnection.then(function(pr){
        console.log(pr)
    });
    maintainConnection.catch(function(err){
        console.log(err)
    })
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
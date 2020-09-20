let chat = document.getElementsByTagName("yt-live-chat-text-message-renderer")

for (let item of chat) {
  let link = item.querySelector("#message").txt.querySelector("a")
  if(typeof txt == undefined || txt == null) {
    console.log("não achei")
  } else {
    let link = txt.innerHTML
    if(/forms.gle/.exec(link) && /https/.exec(link)) {
    	console.log("achou")
    }
  }
}

// localizar a janela de comentarios do youtube
// ficr cuidando os novos comentarios
// ver o texto
// se tiver forms.gle clicar 
// dar um apito
// preencher o form
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const TOKEN = "8754577090:AAFG-bR6CQnqw2O4-wD1WYAxZBraG2ROOKk"
const CHAT_ID = "7690339320"

app.post("/enviar", async (req,res)=>{

const {nome,email,mensagem} = req.body

const texto = `
📩 Nova dúvida do site

👤 Nome: ${nome}
📧 Email: ${email}

💬 Mensagem:
${mensagem}
`

const url = `https://api.telegram.org/bot8754577090:AAFG-bR6CQnqw2O4-wD1WYAxZBraG2ROOKk/sendMessage`

try{

await fetch(url,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:CHAT_ID,
text:texto
})
})

res.json({status:"ok"})

}catch(error){

console.log(error)

res.status(500).json({status:"erro"})

}

})

app.listen(3000,()=>{
console.log("Servidor rodando na porta 3000")
})
const express = require('express');
const app = express();

app.get('/', ( response, require ) => {
  response.send("<div>BEM VINDO! <a href='tchau'>FUI</a></div>")
})

app.get('/tchau', ( response, require ) => {
  response.send("BOA NOITE! <a href='/'>HOME</a></div>")
})

app.listen(3000)

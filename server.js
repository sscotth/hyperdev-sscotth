const express = require('express')
const app = express()
const listener = app.listen(process.env.PORT, () => console.log(`Your app is listening on port ${listener.address().port}`))

app.use(express.static('public'))
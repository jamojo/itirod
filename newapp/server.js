var app = require(__dirname + '/backend')
  , port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Listening on port ', port)
})
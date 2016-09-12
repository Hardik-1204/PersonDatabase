var express=require('express');
var path=require('path');
var app=express();
app.use('/js',express.static(__dirname + '/NodeJs'));
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'MyNewPass',
  database : 'person'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
app.get('/',function(req,resp){
	resp.sendFile('person.html',{root: path.join(__dirname,'./')});
});

app.post('/controller.js',function(req,res){
	res.set('Content-Type', 'application/javascript');
	res.render('person',{querytext:query})
	//console.log('Works');
	connection.query(querytext, function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});
});


app.listen(1337,function(){
	console.log('Listening at port 1337');
});
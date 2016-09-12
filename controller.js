$(document).ready(function () {
	// body...
	$('#first').click(function(){
		
		var query='select * from global where fname LIKE \''+$('#searchTxt').val().%+'\'';
		//console.log(query);

	})
	$('#last').click(function(){
		//console.log(this);
		var query='select * from global where lname LIKE \''+$('#searchTxt').val().%+'\'';

	})
	$('#global').click(function(){
		//console.log(this);
		var query='select * from global where fname LIKE \''+$('#searchTxt').val().%+'\' OR lname LIKE \''+$('#searchTxt').val().%+'\'';

	})
	$('#addFirst').click(function(){
		//console.log(this);
		var query='insert into first '+$('#batch').val();

	})
	$('#addLast').click(function(){
		//console.log(this);
		var query='insert into last '+$('#batch').val();

	})
});
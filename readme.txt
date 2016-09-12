Here in Mysql we created few tables;

		for firstname = create table first (fname varchar(20));
		for lastname = create table last(lname varchar(20));

possible combination table:

			Insert into global(fname,lname) select fname , lname from first CROSS JOIN last;

for indexing on tables:

			CREATE INDEX PIndex ON global (fname, lname);

for batch insert add value in this format(''),(''),(''),


When new values are inserted global table has to perform cross join with new values and insert into global table.
User-Register-Login-API-Using-Node.js-Express-Mongodb-jwt


1. To register a new user go to insomnia and in the post method using JSON set a new "email", "login" and "senha".

2. To login , go to the insomnia and in the post method using JSON set your "email" and "senha" already register.

3. When you get LOGGED will be generate a jwt for you,this token is available in header to copy.

4. to acees the /admin in the GET method you need to change de "admin" false for true in the mongo compass, and to access 
"/free" and "/admin" area you need to add your token in the header.


observation: to change the main information of the project go to the .env










Create By: João Vitor de Carvalho

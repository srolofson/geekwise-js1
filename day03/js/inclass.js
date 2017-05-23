var usernameArray = [];
var usernames = prompt('please enter a username');
usernameArray.push(usernames);
console.log(usernameArray);

function getUser(){
   usernames = prompt('please enter another username');
  // usernameArray.push(usernames);
   usernameArray.push(usernames);
   console.log(usernameArray);
  }

function removeUser(){
  usernameArray.shift();
  console.log(usernameArray);
}

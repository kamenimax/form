import firebase from "./firebase"

// listn for form submit
document.getElementById("form").addEventListener("submit",submitForm);


///submit form
function submitForm(e){
    e.preventDefault();

// get value
var name = getInputVal("name"); 
var email = getInputVal("email");
var password = getInputVal("password");  

console.log();

saveMessage(name,email,password);
}

//funtion to get get form value
function getInputVal(id){
  return document.getElementById(id).value;

}



  // reference message collection
  const messagesRef = Firebase.database().ref("messages");

  //save the message to firebase
  function saveMessage(name,email,password){
    newMessageRef = messagesRef.push()
    newMessageRef.set({
      name:name,
      email:email,
      password:password
    });
  }









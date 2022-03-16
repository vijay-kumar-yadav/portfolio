
// Initialize Firebase
firebase.initializeApp(config);


// Required for side-effects
// require("firebase/firestore");


const db = firebase.firestore();

//Refrence message collection
//var messageRef = firebase.database().ref('messages');

// listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    //save message
    saveMessage(name, email, message);
//show alert
document.querySelector('.alert').style.display = 'block';

//hide alert after 3sec
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);

//clear form
document.getElementById('contactForm').reset();
}


// function to get form values 
function getInputVal(id) {
    return document.getElementById(id).value;
}


//fuction to save messaage to firebase
function saveMessage(name, email, message) {
    const data = {
        submittedAt: new Date(),
        name: name,
        email: email,
        message: message
    };
    const ref=db.collection("messages").doc();
    data['id'] = ref.id;
    // data.ip = 
    ref.set(data);


     console.log(data);

    //  var newMessageRef = messageRef.push();
    //  newMessageRef.set(data);
}





// //read message
// async function readMessages(){
//        const messages = await db.collection('messages').get();
//        messages.forEach(element => {
//            console.log(element.data().message);
//        });
//       // console.log(messages.docs);
// }

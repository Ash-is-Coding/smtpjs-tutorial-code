const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "your-token", //add your token here
        To : 'them@website.com', 
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
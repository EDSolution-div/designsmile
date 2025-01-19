function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : document.getElementById("email").value,
        subject : "New Contact Form Enquiry",
        Body : "Name : "+ document.getElementById("name").value
        + "<br>  Phone: "  + document.getElementById("phone").value
        + "<br>  Email: "  + document.getElementById("email").value
        + "<br>  check: "  + document.getElementById("procedure").value
        + "<br>  Message: "  + document.getElementById("message").value
    }).then(
        Message => alert("Message Sent Successfully")
    );
}

(function() {
    emailjs.init({
        publicKey: "NpOWP1Pd7xuAROC_e",
    });
})();

function send() {
    console.log("sending")
    const userMessage = document.getElementById('message').value;

    // Define your template parameters
    const templateParams = {
        name: "ORI CUSTOMER",
        email: "scratchpoodle1679@gmail.com",
        title: "New Contact (ORI CUSTOMER)",
        message: userMessage,
        time: new Date().toLocaleString(), // Example: dynamically add current time
    };

    // Send the email using emailjs.send()
    emailjs.send('service_gnumicv', 'template_e288cm9', templateParams)
        .then(() => {
            alert('Your message has been sent!');
            document.getElementById('message').value = '';
        }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
}
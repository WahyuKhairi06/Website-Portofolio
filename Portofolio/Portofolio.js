document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    Swal.fire({
        title: "Good job!",
        text: "Your message has been sent!",
        icon: "success"
    }).then(() => {

    });
});
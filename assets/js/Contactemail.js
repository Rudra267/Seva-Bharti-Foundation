const Fname = document.getElementById("fname");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function ContactEmail() {

    // console.log(Fname.value, email.value, phone.value, date.value, mess.value, time_slot.value, reason_event.value);
   
    if (!Fname.value || !email.value || !mess.value) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
        });
      

    } else {
        const bodyMessage = 
            
            `Full Name: ${Fname.value}\n` +
            `Email: ${email.value}\n` +
            `Message: ${mess.value}`;

        console.log(bodyMessage);

        const param = {
            to_name: "SBF – Contact Information from Website Visitor",
            from_name: "SBF – Contact Information from Website Visitor",
            message: bodyMessage
        };

        const service_Id = "service_0rxgegb";
        const template_Id = "template_lmireac";

        emailjs.send(service_Id, template_Id, param)
            .then((res) => {
                // Clear form after successful send
                Fname.value = "";
                email.value = "";
                mess.value = "";
            
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `We will reach out to contact you`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err) => console.log(err));
    }
}

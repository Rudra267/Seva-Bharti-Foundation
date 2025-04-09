const Fname = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time_slot = document.getElementById("time_slot");
const mess = document.getElementById("message");
const reason_event = document.getElementById("reason_event");

function sendEmail() {

    // console.log(Fname.value, email.value, phone.value, date.value, mess.value, time_slot.value, reason_event.value);
   
    if (!Fname.value || !email.value || !phone.value || !date.value || !mess.value || !time_slot.value || !reason_event.value) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
        });
      

    } else {
        const bodyMessage = 
            `Time Slot: ${time_slot.value}\n` +
            `Reason for Event: ${reason_event.value}\n` +
            `Full Name: ${Fname.value}\n` +
            `Email: ${email.value}\n` +
            `Phone Number: ${phone.value}\n` +
            `Message: ${mess.value}`;

        console.log(bodyMessage);

        const param = {
            to_name: "SBF - Donor Contact Information",
            from_name: "SBF - Donor Contact Information",
            message: bodyMessage
        };

        const service_Id = "service_0rxgegb";
        const template_Id = "template_7h9755q";

        emailjs.send(service_Id, template_Id, param)
            .then((res) => {
                // Clear form after successful send
                Fname.value = "";
                email.value = "";
                phone.value = "";
                time_slot.value = "";
                mess.value = "";
                reason_event.value = "";

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

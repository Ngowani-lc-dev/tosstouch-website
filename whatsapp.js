

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {

  
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const messageText = document.getElementById("message").value;


  const message =
    `Hello! I would like to book an appointment.\n\n` +
    ` Name: ${name}\n` +
    ` Phone: ${phone}\n` +
    ` Email: ${email}\n` +
    ` Service: ${service}\n` +
    ` Date: ${date}\n` +
    ` Time: ${time}\n` +
    ` Message: ${messageText}`;

 
  const whatsappNumber = "27813644946";


  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


  window.open(whatsappURL, "_blank");
});

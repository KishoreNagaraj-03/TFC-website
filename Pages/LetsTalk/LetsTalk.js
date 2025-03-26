document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("KzbUKFvgwl5YNrNew"); // Ensure your public key is correct

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Input validation
    const userName = form.querySelector("#user_name").value.trim();
    const userEmail = form.querySelector("#user_email").value.trim();
    const userPhone = form.querySelector("#user_phone").value.trim();
    const userIndustry = form.querySelector("#user_industry").value;
    const userService = form.querySelector("#user_service").value;
    const userMessage = form.querySelector("#message").value.trim();

    if (
      !userName ||
      !userEmail ||
      !userPhone ||
      !userIndustry ||
      !userService ||
      !userMessage
    ) {
      errorMessage.textContent = "Please fill in all required fields!";
      errorMessage.style.display = "block";
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
      errorMessage.textContent = "Please enter a valid email address!";
      errorMessage.style.display = "block";
      return;
    }

    if (!/^\d{10}$/.test(userPhone)) {
      errorMessage.textContent = "Please enter a valid 10-digit phone number!";
      errorMessage.style.display = "block";
      return;
    }

    // Disable button and show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    emailjs
      .sendForm("service_g41318j", "template_g22pm5c", form)
      .then(
        (response) => {
          console.log("✅ Email sent successfully:", response);
          successMessage.style.display = "block";
          form.reset();
        },
        (error) => {
          console.error("❌ Error sending email:", error);
          errorMessage.textContent =
            "Failed to send message. Please try again.";
          errorMessage.style.display = "block";
        }
      )
      .finally(() => {
        submitBtn.textContent = "Send Message";
        submitBtn.disabled = false;
      });
  });
});


// This is to prevent img downloading
document.addEventListener("contextmenu", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault(); // Block right-click on images
    // alert("Image download is disabled!");
  }
});
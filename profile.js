// Theme Toggle Button
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check Local Storage for Theme Preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.src = 'sun.jpg'; // Switch to sun icon
}

// Toggle Theme on Button Click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change Icon Based on Mode
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = 'sun.jpg';
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        themeIcon.src = 'moon.jpg';
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

document.getElementById("hireBtn").addEventListener("click", function () {
    // WhatsApp Message
    const phoneNumber = "91-8340576167"; // Replace with your WhatsApp number
    const whatsappMessage = "Hello, I am interested in hiring you. Let's discuss further!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Email Message
    const email = "jaiswalaayushi198@gmail.com"; // Replace with your email
    const subject = "Hiring Inquiry";
    const body = "Hello, I would like to discuss a hiring opportunity with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Email Client
    window.location.href = mailtoLink;
});

function toggleSkill(id) {
    let skill = document.getElementById(id);
    let allSkills = document.querySelectorAll(".skill-content");

    // Close other skills
    allSkills.forEach((el) => {
        if (el.id !== id) el.style.display = "none";
    });

    // Toggle current skill
    if (skill.style.display === "block") {
        skill.style.display = "none";
    } else {
        skill.style.display = "block";
    }
}

 
 // Handle form submission
 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For now, you can log the form data, or send it to a server (e.g., via email or API)
    console.log("Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Show an alert or feedback to the user
    alert("Thank you for reaching out! I sincerely appreciate your interest and will respond as soon as possible.");
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
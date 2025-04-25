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

function hireMe() {
    const phoneNumber = "918340576167"; 
    const message = encodeURIComponent("Hi Aayushi, I’m interested in hiring you. Let’s connect!");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    // Email link
    const email = "jaiswalaayushi198@gmail.com"; 
    const subject = encodeURIComponent("Hiring Inquiry");
    const body = encodeURIComponent("Hi Aayushi,\n\nI’m reaching out to discuss a job opportunity...");
    const emailURL = `mailto:${email}?subject=${subject}&body=${body}`;
   // Open both options
    window.open(whatsappURL, '_blank');     // Opens WhatsApp
    window.location.href = emailURL;        // Opens default email client
  }
  

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
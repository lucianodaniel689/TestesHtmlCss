document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('formResponse').innerText = `Thank you, ${name}! We have received your message.`;
    document.getElementById('contactForm').reset();
});

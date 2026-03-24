// A simple function to add smoothness when clicking navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Stop standard jump

        // Get the target section ID from the href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll to the element smoothly
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header height
                behavior: 'smooth'
            });

            // Update active state in nav (underline moves)
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
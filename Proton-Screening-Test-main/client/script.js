document.getElementById('signup-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.container').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.container').classList.remove('shake');
    }, 600); // Duration of the shake animation
    document.querySelector('.container').style.transition = 'transform 0.3s ease'; // Reset transition
    document.querySelector('.container').style.transform = 'translateX(0)'; // Reset transform
   
   
    
});

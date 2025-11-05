document.getElementById('accessForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('message-status');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        status.textContent = '❌ Please enter a valid email address';
        status.className = 'error';
        return;
    }
    
    try {
        const response = await fetch('https://dingus.media/request-access', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });
        
        if (response.ok) {
            status.textContent = '✅ Request sent! You\'ll receive an invite soon.';
            status.className = 'success';
            document.getElementById('accessForm').reset();
        } else {
            throw new Error();
        }
    } catch (error) {
        status.textContent = '❌ Something went wrong. Please try again.';
        status.className = 'error';
    }
});

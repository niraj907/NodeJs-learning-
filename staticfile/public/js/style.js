const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'rgb(255, 159, 67)') {
        document.body.style.backgroundColor = '#feca57'; // Previous color
    } else {
        document.body.style.backgroundColor = '#ff9f43'; // New color
    }
});

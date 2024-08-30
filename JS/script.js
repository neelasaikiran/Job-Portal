
    let navbar = document.querySelector('.navbar');

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        navbar.classList.remove('active');
    };

    document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
        let maxLength = parseInt(inputNumber.getAttribute('maxLength'), 10);
        
        inputNumber.oninput = () => {
            if (inputNumber.value.length > maxLength) {
                inputNumber.value = inputNumber.value.slice(0, maxLength);
            }
        };
    });

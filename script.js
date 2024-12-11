function generatePassword() {
    const length = document.getElementById('length').value;
    const complexity = document.getElementById('complexity').value;
    const passwordDisplay = document.getElementById('generated-password');

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charSet = lowercaseChars + uppercaseChars;

    if (complexity === 'medium') {
        charSet += numberChars;
    } else if (complexity === 'hard') {
        charSet += numberChars + specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    passwordDisplay.textContent = password;
    passwordDisplay.classList.add('show');
}

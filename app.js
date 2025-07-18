
function calculate() {
    const n1 = parseInt(document.getElementById('n1').value);
    const operator = document.getElementById('operator').value;
    const n2 = parseInt(document.getElementById('n2').value);
    let result;

    switch(operator){
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = n1 / n2;
            }
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}
function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendToScreen(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    try {
        let result = document.getElementById('result').value;
        document.getElementById('result').value = eval(result);
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

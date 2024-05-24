function insert(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function backspace() {
    var current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}

function calculate() {
    var result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

var selectedValue;

function storeSelectedValue() {
    selectedValue = document.querySelector('input[name="pytha-find"]:checked').value;
    console.log(selectedValue);
}

function findPythagorean(need, numA, numB, numC) {
    switch (need) {
        case 'a':
            return Math.sqrt(numC**2 - numB**2);
        case 'b':
            return Math.sqrt(numC**2 - numA**2);
        case 'c':
            return Math.sqrt(numA**2 + numB**2);
        default:
            return "Invalid input: need should be 'a', 'b' or 'c'.";
    }
}

function calculate() {
    var numA = parseFloat(document.getElementById('input-a').value);
    var numB = parseFloat(document.getElementById('input-b').value);
    var numC = parseFloat(document.getElementById('input-c').value);
    var resultNumber = findPythagorean(selectedValue, numA, numB, numC);
    document.getElementById('text-value').innerHTML = selectedValue + '  มีค่า ประมาณ  '+ resultNumber.toFixed(2);
    console.log(resultNumber);
}
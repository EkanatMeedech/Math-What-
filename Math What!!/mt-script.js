function genMT()
{
    document.getElementById('result').innerHTML = "";
    var input = document.getElementById('input-number').value;
    for (let i = 1; i <= 12; i++) {
        let sum = input + ' x ' + i + ' = ' + input*i;
        console.log(sum);
        document.getElementById('result').innerHTML += sum + '<br>';
    }
}
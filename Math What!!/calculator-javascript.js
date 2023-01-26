function addToDisplay(addDisplay)
{
    document.getElementById('display').textContent += addDisplay
}

function click_equal()
{
    let result = eval(document.getElementById('display').textContent)
    document.getElementById('display-before').textContent = document.getElementById('display').textContent
    document.getElementById('display').textContent = result
}

function click_clear()
{
    document.getElementById('display').textContent = ""
    document.getElementById('display-before').textContent = ""
}

function deleteText()
{
    let text = document.getElementById('display').textContent
    let deleteText = text.slice(0, -1)
    console.log(text)
    console.log(deleteText)
    document.getElementById('display').textContent = deleteText
}
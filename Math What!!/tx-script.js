var typeSelect;

function changeType(id)
{
    typeSelect = document.getElementById(id).value;
    console.log("typeSelect : " + typeSelect);
}

function test() 
{
    var vatPercent = parseFloat(document.getElementById('vat-percent').value);
    var numberInput = parseFloat(document.getElementById('number-input').value);
    console.log(document.getElementById('number-input').value);
    if ( typeSelect == "before-vat") 
    {
        var vat = (vatPercent/100) * numberInput;
        document.getElementById('price-number').innerHTML = "ราคาก่อน VAT :  " + numberInput + "฿";
        document.getElementById('vat-number').innerHTML = "VAT " + vatPercent + "% :  " + vat.toFixed(2) + "฿";
        document.getElementById('price-final').innerHTML = "ราคารวม VAT :  " + (numberInput + vat)  + "฿";
    }
    else if ( typeSelect == "total-vat" ) 
    {
        var vat = 100/(100+vatPercent)
        document.getElementById('price-number').innerHTML = "ราคาก่อน VAT : " + (numberInput*vat).toFixed(2) + "฿";
        document.getElementById('vat-number').innerHTML = "VAT " + vatPercent + "% :  " + (numberInput - (vat*numberInput)).toFixed(2) + "฿";
        document.getElementById('price-final').innerHTML = "ราคารวม VAT :  " + numberInput + "฿";
    }
}


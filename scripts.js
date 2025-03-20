///////////////////////////////////////////////////////////////////////////////
// File: script.js
//
// Desc:
//
// Author: Ana Cristina Schmidt, Fernando Acauan e Thiago Tarantino.
///////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////
// Name: window.onload()
// Desc: 
///////////////////////////////////////////////////////////////////////////////
window.onload = async function()
{
    let data = await fetch('https://v6.exchangerate-api.com/v6/6e305420a28d34077a40149c/latest/USD');
    if(!data.ok)
    {
       throw new Error("Could not fetch request");
    }
    let jsonData = await data.json();
    let paises = Object.keys(jsonData.conversion_rates);

    var select = document.getElementById('opcao');
    
        
    paises.forEach(pais => {
        var option = document.createElement('option');
        option.text = option.value = pais;
        select.add(option, pais);

        console.log(pais);
        
    });

    select = document.getElementById('opcao2');
    paises.forEach(pais => {
        var option = document.createElement('option');
        option.text = option.value = pais;
        select.add(option, pais);

        console.log(pais);
        
    });

    console.log(data.json());
}


///////////////////////////////////////////////////////////////////////////////
// Name: Converter()
// Desc: 
///////////////////////////////////////////////////////////////////////////////
async function Converter()
{

    let moeda1 = document.getElementById('opcao').value;
    let moeda2 = document.getElementById("opcao2").value;
    let input  = document.getElementById('textoaConverter').value;

    

    let data = await fetch(`https://v6.exchangerate-api.com/v6/6e305420a28d34077a40149c/pair/${moeda1}/${moeda2}`);
    let jsonData = await data.json();
    console.log(jsonData);

    document.getElementById('textoConvertido').value = jsonData.conversion_rate * input;
}




///////////////////////////////////////////////////////////////////////////////
// Name: Inverter()
// Desc: 
///////////////////////////////////////////////////////////////////////////////
function Inverter()
{
    let temp = document.getElementById('textoaConverter').value;
    document.getElementById('textoaConverter').value = document.getElementById('textoConvertido').value;
    document.getElementById('textoConvertido').value = temp;
}

/*

data = `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/${moeda1}/${moeda2}`


*/
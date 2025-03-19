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
    let data = await fetch('https://v6.exchangerate-api.com/v6/7e3d8fa49ac7bfa926531550/latest/USD');
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
function Converter()
{

}
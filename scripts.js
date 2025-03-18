///////////////////////////////////////////////////////////////////////////////
// File: script.js
//
// Desc:
//
// Author: Fernando Acauan
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
// Name: GetRates()
// Desc: Fetch data.
///////////////////////////////////////////////////////////////////////////////
async function GetRates() 
{
    const kCoin = document.getElementById("textoConvertido").value.toLower();
    let data = await fetch(`https://v6.exchangerate-api.com/v6/7e3d8fa49ac7bfa926531550/latest/${kCoin}`);

    if(!data.ok)
    {
        throw new Error("Could not fetch request");
    }
        

    console.log(data.json());
}

document.getElementById("textoConvertido").innerHTML = data;
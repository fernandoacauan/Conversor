///////////////////////////////////////////////////////////////////////////////
// File: script.js
//
// Desc:
//
// Author: Fernando Acauan
///////////////////////////////////////////////////////////////////////////////




fetch("https://v6.exchangerate-api.com/v6/7e3d8fa49ac7bfa926531550/latest/USD")
    .then(response => console.log(response))
    .catch(error => console.error(error));
const dolarPriceDisplay = document.querySelector('#dollar-price-display');

fetch('https://ve.dolarapi.com/v1/dolares/oficial')
  .then(response => response.json())
  .then(data => console.log(data));


fetch('https://ve.dolarapi.com/v1/dolares/paralelo')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    dolarPriceDisplay.textContent = `${data.promedio} Bs`;
  });

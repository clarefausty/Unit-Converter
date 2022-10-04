let btnEl = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const feetToMeter = 0.305
const litreToGallon = 0.264
const gallonToLitre = 3.788
const kiloToPound = 2.204
const poundToKilo = 0.454

btnEl.addEventListener("click", function(){
    const baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${(baseValue*meterToFeet).toFixed(2)} feet / ${baseValue} feet = ${(baseValue*feetToMeter).toFixed(2)} meters`
    volumeEl.textContent = `${baseValue} litres = ${(baseValue*litreToGallon).toFixed(2)} gallons / ${baseValue} gallons = ${(baseValue*gallonToLitre).toFixed(2)} litres`
    massEl.textContent = `${baseValue} kilos = ${(baseValue*kiloToPound).toFixed(2)} pounds / ${baseValue} pounds = ${(baseValue*poundToKilo).toFixed(2)} kilos`
})

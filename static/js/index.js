let countriesElem = document.getElementById("countries"),
    totalElem = document.getElementById("total"),
    activeElem = document.getElementById("active"),
    recoveredElem = document.getElementById("recovered"),
    deathsElem = document.getElementById("deaths"),
    allcountriesElem = document.getElementById("all-countries"),
    countryElem = document.getElementById("country");

let listOfCountries;

window.onload = function () {
    fetchCovidData("Ghana",false);
    populateTableData(listOfCountries);
    populateCountryList(listOfCountries); 
};

countriesElem.addEventListener("change" , function () {
    fetchCovidData(this.value, true);
})
function fetchCovidData(country, async) {
    let xhr = new XMLHttpRequest();
 
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            listOfCountries = JSON.parse(xhr.response);
            let ctry = listOfCountries.Countries.filter((c) => c.Country === country);

            displayCountryData(ctry);
           
        }

    };
    xhr.open("GET", "https://api.covid19api.com/summary", async);
    xhr.send()
}

function populateTableData(list) {
    let count = 1;
    allcountriesElem.innerHTML = list.Countries.map((c) => 
        `
        <tr>
        <td>${count++} </td>
        <td>${c.Country} </td>
        <td>${c.TotalRecovered} </td>
        <td>${c.TotalConfirmed} </td>
        <td>${c.NewConfirmed} </td>
        <td>${c.TotalDeaths} </td>
        
        </tr>
        `).join("");
    }
    
function displayCountryData(country) {
    country.innerHTML = `<strong>${country[0].Country}'s Stats</strong>`;
    totalElem.innerText = country[0].TotalConfirmed;
    recoveredElem.innerText = country[0].TotalRecovered;
    activeElem.innerText = country[0].NewConfirmed;
    deathsElem.innerText = country[0].TotalDeaths;
}

function populateCountryList(data) {
    let list = data.Countries.map((c) => c.Country);
    countriesElem.innerHTML = list.map(
        (c) => `<option value= "${c}">${c}</option>`
    )
 }

// const covid = {
//   Global: {
//     NewConfirmed: 257911,
//     TotalConfirmed: 18539385,
//     NewDeaths: 6956,
//     TotalDeaths: 700634,
//     NewRecovered: 221735,
//     TotalRecovered: 11134084,
//   },
//   Countries: [
//     {
//       Country: "Afghanistan",
//       CountryCode: "AF",
//       Slug: "afghanistan",
//       NewConfirmed: 35,
//       TotalConfirmed: 36782,
//       NewDeaths: 0,
//       TotalDeaths: 1288,
//       NewRecovered: 0,
//       TotalRecovered: 25669,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Albania",
//       CountryCode: "AL",
//       Slug: "albania",
//       NewConfirmed: 130,
//       TotalConfirmed: 5750,
//       NewDeaths: 4,
//       TotalDeaths: 176,
//       NewRecovered: 0,
//       TotalRecovered: 3031,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Algeria",
//       CountryCode: "DZ",
//       Slug: "algeria",
//       NewConfirmed: 532,
//       TotalConfirmed: 32504,
//       NewDeaths: 9,
//       TotalDeaths: 1248,
//       NewRecovered: 474,
//       TotalRecovered: 22375,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Andorra",
//       CountryCode: "AD",
//       Slug: "andorra",
//       NewConfirmed: 2,
//       TotalConfirmed: 939,
//       NewDeaths: 0,
//       TotalDeaths: 52,
//       NewRecovered: 4,
//       TotalRecovered: 825,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Angola",
//       CountryCode: "AO",
//       Slug: "angola",
//       NewConfirmed: 64,
//       TotalConfirmed: 1344,
//       NewDeaths: 1,
//       TotalDeaths: 59,
//       NewRecovered: 27,
//       TotalRecovered: 503,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Antigua and Barbuda",
//       CountryCode: "AG",
//       Slug: "antigua-and-barbuda",
//       NewConfirmed: 0,
//       TotalConfirmed: 92,
//       NewDeaths: 0,
//       TotalDeaths: 3,
//       NewRecovered: 0,
//       TotalRecovered: 75,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Argentina",
//       CountryCode: "AR",
//       Slug: "argentina",
//       NewConfirmed: 6792,
//       TotalConfirmed: 213535,
//       NewDeaths: 166,
//       TotalDeaths: 3979,
//       NewRecovered: 2827,
//       TotalRecovered: 94129,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Armenia",
//       CountryCode: "AM",
//       Slug: "armenia",
//       NewConfirmed: 196,
//       TotalConfirmed: 39298,
//       NewDeaths: 6,
//       TotalDeaths: 768,
//       NewRecovered: 511,
//       TotalRecovered: 30372,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//     {
//       Country: "Australia",
//       CountryCode: "AU",
//       Slug: "australia",
//       NewConfirmed: 715,
//       TotalConfirmed: 19445,
//       NewDeaths: 15,
//       TotalDeaths: 247,
//       NewRecovered: 176,
//       TotalRecovered: 10799,
//       Date: "2020-08-05T09:44:54Z",
//       Premium: {},
//     },
//   ],
// };
// alert(covid.Countries[2].Country);
// alert(covid.Countries[1]. TotalDeaths);
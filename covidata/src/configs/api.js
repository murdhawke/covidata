var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'x-rapidapi-key': '7507decaaemsh8281263d1fe61e1p13fdc3jsnb2a0b7a91dca',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
      }
    }
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
})

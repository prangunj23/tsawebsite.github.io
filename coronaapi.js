document.addEventListener('DOMContentLoaded', function() {
      function thousands_separators(num)
             {
               var num_parts = num.toString().split(".");
               num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
               return num_parts.join(".");
             }
   fetch('https://api.covidtracking.com/v1/us/current.json')
      .then(response => response.json())
      .then(data => {
         
          const localinfo = data[0];
          document.querySelector('.coronadeathsinfo').innerHTML = thousands_separators(localinfo.death) + " people have died from the coronavirus pandemic this year in the United States.";
          document.querySelector('.coronavaccinesinfo').innerHTML = thousands_separators(localinfo.positive) + " people have contracted the coronavirus in the United States.";
          
       });
      
   fetch("https://covid-19-data.p.rapidapi.com/totals", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "dca0b29f8cmshddb3b0e17a561e2p1ead4bjsnb82d93d300ff",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	      }
      })
      .then(response => response.json())
      .then(data => {
         const globalinfo = data[0];
         document.querySelector('.globaldeathsinfo').innerHTML = thousands_separators(globalinfo.deaths) + " people have died from the coronavirus pandemic this year in the world.";
         
});
});

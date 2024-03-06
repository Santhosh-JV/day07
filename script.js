var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
    request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
     var asia = res.filter((ele)=>ele.region=="Asia")
    console.log(asia);
    var country = asia.map((ele)=>ele.name);
    console.log(country); 

     var population = res.filter((ele)=>ele.population<200000)
    var capital = population.map((ele)=>ele.capital);
    console.log(population);
    console.log(capital); 


     var popco = res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(popco); 

     var ncf = res.forEach((ele)=>{
      console.log(ele.name);
      console.log(ele.capital);
      console.log(ele.flag);
    }) 

     var currency = res.filter((ele)=>ele.currencies[0].code=="USD");
    console.log(currency); 

    var currency = res.filter((ele)=>ele.currencies[0].name == 
    "United States dollar");
    console.log(currency);



     var country = currency.map((ele)=>ele.name);
    console.log(country);
    
  }  

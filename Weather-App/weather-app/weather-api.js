const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "eb70e30b4a73be9431c4c4052e8a52f7"

class WeatherAPI{

    constructor(userInput){

        this.userInput = userInput;
        this.weatherAPIURL = new URL(WEATHER_API_BASE_URL);
      }


    buildURL(){

        this.weatherAPIURL.searchParams.append("units", "metric");
    this.weatherAPIURL.searchParams.append("q", this.userInput);
    this.weatherAPIURL.searchParams.append("appid", APP_ID);

    console.log(`Final URL is ${this.weatherAPIURL}`);


    } 
    // Pattern 01
    async invokeAPI(){
  
      // this.buildURL();
  
      const responseObj = await fetch(this.weatherAPIURL.toString());
      const jsonResponse = await responseObj.json();
  
      return jsonResponse;
    }
  
    // Pattern 02
    async invokeAPIv2(){
  
        // fetch
        // . then()
        // . catch()
    }

}

export {WeatherAPI}
# Weather Dashboard

## Description
This is a web application that provides weather information. When the user inputs their city of interest and clicks "search" the current weather will display, as long as a five day forecast for the selected city. That city is then saved to local storage and the saved cities section, where it can be viewed again with one click. The user can also clear their search history by clicking the "clear" button. The weather information is provided by the Open Weather Map API. I encountered many issues in the development process with local storage and displaying the correct data. In the end I learned a lot about how to fix those issues and the importance of the order of execusion and how to hide/append page elements for a nice user experience.

## Installation
N/A no installation required

## Usage
When you visit [url insert], you will see an empty weather dashboard.
![weatherstart](https://github.com/milena-allaway/weather_dashboard/assets/132115087/1480dee1-8026-46e2-99de-63a3f564290c)

You can search for a city by typing in the input form field where indicated, then click "search". The searched cities weather data will display, showing current data and a future forecast. You will see the city name and date, the weather in degrees celsius, humidity, windspeed, and an icon representing the weather conditions.
![weathersearchclick](https://github.com/milena-allaway/weather_dashboard/assets/132115087/ef52f944-6b67-42bd-982e-89b7dba01d08)

The searched city will be saved in the saved cities section for quick future access.  Mupltiple cities can be saved on the application and viewed later with just one click. 
![weathermultiplesearches](https://github.com/milena-allaway/weather_dashboard/assets/132115087/541bb21e-83b4-434b-b465-4307005abb08)

To clear the search history from local storage and remove all saved buttons, simply click "clear".

## Credits
Weather data is provided by the Open Weather Map API:
https://openweathermap.org
Online references for help with writting JS functions, also commented in the code in their related lines:
https://stackoverflow.com/questions/65546260/
http://aspsolution.net/Code/6/5240/How-to-add-image-src-dynamically-using-Jquery/
https://api.jquery.com/empty/
Bootstrap documentation for flex layout:
https://getbootstrap.com/docs/4.0/utilities/flex/
W3 Schools was referenced for creating the CSS, such as gradient backgrounds.
All the recent class activities in BCS were also referenced for information about Third Party APIs and Server Side APIs. 

## License
MIT License

Copyright (c) 2023 Milena

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

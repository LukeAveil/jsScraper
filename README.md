# Javascript Web Crawler

## Getting setup

Make sure sure you have node installed and then run ``` npm install ```.

Open a terminal window and navigate to the project directory and run ``` npm start ```.

Launch your browser and go to ``` http://localhost:8081 ```.

Once on the page the program will run and the assets will be stored in a JSON file in the project directory.

## My Approach

In recent weeks I have been focusing on furthering my knowledge of Javascript, so I decided to try and complete this task with node.js. My knowledge of node is fairly limited so this was a good opportunity to get to grips with it a bit better.

I found the instructions clear but was a bit unsure what exactly was meant by "static assets". These are assets on a page that do not change, I came to the decision that these assets would be images, scripts and style sheets.

My thinking was to select the img, script and link HTML tags so that I could extract the relevant attributes from each of them. Initially I tried using ``` document.getElementsByTagName('img') ```, but this does not work server side. I came across Cheerio which allows us to traverse the DOM and extract data, it is basically jQuery on the server side!

Once I had got to grips with Cheerio I was able to select the HTML tags I needed and focus in on the particular attributes of each tag.

## Road Blocks

I found this task very challenging and as such it is not quite complete. There are two main issues with the program at the moment...

a) Selecting the HTML tags and focusing in on particular attributes works in most cases. In the case of the scripts most of the captured attributes come out as ``` undefined ```. I am not sure why this is happening and was unable to figure it out at this stage.

b) I have written a function that collects all the urls of the relative links on the landing page and stores them in an array. I was unable to figure out a way to then cycle through these stored urls and for each one run the program again and write the data to the JSON file. My thinking would be to something like ``` pagesToVisit.pop() ```  then take that url and feed it back into the url variable and run the program again. I am unsure how the looping would work and could not get my head around it.

## Conclusion

I found the task challenging but very interesting and enjoyed learning how web crawlers work.

Given more time I would like to get to the bottom of the issues I had, and it would also be cool to try and implement a UI. 

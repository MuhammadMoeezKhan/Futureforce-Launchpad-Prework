# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Muhammad Moeez Khan

Time spent: 7.5 hours spent in total

Link to project: (https://glitch.com/edit/#!/absorbed-lacy-iguanodon)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] Users see their current level and the longest sequence (level) they remembered in the round after it ends  
- [x] Elliptical Warning: Animations for gameOver() includes flashy red animations wihtin background and all buttons, please be careful.  

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x](http://g.recordit.co/j7jqy6wK10.gif)
![x](http://g.recordit.co/jP8UjmqGAt.gif)
![x](http://g.recordit.co/x4nVox7jzA.gif)
![x](http://g.recordit.co/7t26r0SwsD.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://api.jquery.com/text/                    //used to understand how to get text content of DOM element <br>
https://fonts.google.com/                       //used to get fonts <br>
https://www.canva.com/colors/color-meanings/    //used to get hexcodes for colors <br>
https://balsamiq.com/wireframes/                //used for wireframing designs <br>
https://support.glitch.com/t/how-to-access-assets/4062      //used to learn how to implement assets on glitch <br> 
https://www.w3schools.com/jsref/met_win_clearinterval.asp   //used to learn the setInterval() and clearInterval() methods <br>
https://stackoverflow.com/questions/31036619/timer-goes-twice-as-fast-when-triggered-again         //used to undertand use of clearInterval() <br>
https://stackoverflow.com/questions/9507774/how-to-make-background-image-shrink-proportionally-to-fit-button-size-in-javascr    //used to fit image into button <br>
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio     //used to learn about JavaScript's Audio Class

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The dynamic, interactive, and relatable (Simon Game) nature of the project provided us with the freedom to experiment and explore the fundamentals of web development; It was extremely enjoyable because it was challenging. 

The appearance of this project did not put forth any problems, however, the optional Ticking Clock feature proved to be the most challenging aspect for me. As I read the description of the feature, the first question I had was “Where do I place the timer on the screen?”. This was my sub-challenge since the screen was packed with buttons and text where any more information would have made it look untidy. I used the techniques revolving around WireFraming, through online software like Balsamiq.com (balsamiq.com/wireframes) alongside designing the interface on paper. These design templates helped me put the appearance together and move forth to the functionality and implementation.

The most challenging part of the implementation was the small pieces of adding this feature. Firstly I had to figure out how to implement the setInterval() and clearInterval() methods. Through the sources mentioned in the previous question, I learned that the setInterval() method takes two parameters, a call-back function and delay in milliseconds, and returns an id of the timer object made. This callback object id is passed as a parameter for the clearInterval() method to cancel the timer. After acknowledging this, I started coding a startTimer() method, within the scope of which I incorrectly initiated the timerID variable. Due to this mistake, I was unable to use the clearInterval() method, which resulted in the timer doubling in speed since the previous startTimer() method was never stopped. I searched online for help and found the last cited resource from stackoverflow.com. Through this webpage, I realized that it is necessary to clearInterval() before calling setInterval() again. Thus, I realized the only possible way to access the timerID is by making it a global variable that both startTimer(), resetTimer(), and gameOver() methods can access.

After delving into the considerably trickier feature of the project, I am now aware of how to use these methods, when and where to call appropriate methods, being considerate of the scope of a variable, and how to self-learn assigned concepts.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Delving further into the project I faced challenges as I navigated through the code and am eager to ask professional developers how to design code to be easily manageable, easily updateable, and readable. In regards to the code document structure, I am curious to learn where and what to comment in the code so it is understandable by fellow team developers.

Being introduced to Glitch, a new software with a different directory system, hosting, automated deployment, and integrated GitHub access was a fascinating aspect of this project. I am highly curious to delve into various new technologies and ask mentors and colleagues about their favorite development tools. 

Further, the number of websites on the internet is uncountable as they rapidly improve in quantity and quality. I am extremely keen to acknowledge what are some sites that professionals admire and why? Are there certain components and aesthetics in the front-end or certain functionalities, time and space complexities, or database relationships in the backend? Pertaining to making out code design more efficient and following the MVC (Model–View–Controller) design pattern, I am curious as to how could we utilize Embedded JavaScript Libraries (EJS) and React.js to create layouts and templates to eliminate clustered code in our project. 

I am also highly motivated to improve through feedback and critique. I am curious to ask and acknowledge techniques through which I can make the code concise and use better data structures and more efficient and appropriate JavaSciript classes to think and approach a problem more like a professional developer.  


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

As I neared the concluding stages of the project, I recognized that my code was slightly redundant and could be made more concise. I refactored some functions, for example, the timer functions, checkAnswer(), checkStrikes(), and animatePress() contained code that did not influence the state of the game or any useful variables. However, the first function – a click event listener on the start/stop action button – needs refactorization. It includes code that seems clustered, repetitive, and difficult to easily understand. As I alter/add/remove any code that may seem unnecessary the functionality of the program changes.

Pertaining to additional features to the game, it could be made more dynamic and interactive. We can create a pop-up window for when the user gets a strike which also displays the number of strikes remaining before the game ends, and another window could display the user’s high score after every round ends. I further wanted to create confetti animations after the user completes a level that is a multiple of 5 (Level%5 ==0) and a bigger celebration (confetti animation) when they break their high score –  to keep them motivated and going. 

As I progressed with the project, one functionality that I was extremely keen to add was to store the user’s profile information and high scores to eventually create a leadership board. Advanced questions revolving around backend frameworks such as Node, Express, and PHP came to mind. Further, questions regarding the best type of database for this functionality highly intrigue me, do we use SQL, NoSQL, or Cloud databases and how do we connect it without a program to increase web traffic and client repeatability. However, delving into the backend would have pushed out the scope of the project.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/fdfeaeb76db6422094835ed8a957513c)


## License

    Copyright Muhammad Moeez Khan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

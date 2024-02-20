# Sprint 2
### Dong Jun Woun (dwoun)
### Group: JS

### What I planned to do
* Place the interactive buttons on the interactive map - using a coordinate syste
* Find logos for other brands and generate the buttons for other dining locations on campus (front-end only).
* Connect the interactive button to the restaurant popup.
* Add css styling to the buttons


### What I could not do
* I was not able to directly connect Jihun's restaurant pop up to my button. 
* I haven't placed all locations yet, and they are not sorted by time yet.

### Problems that I encountered
1. I was unware of how little I understood of Typescript & React. It took a very long time to understand what I was trying to do.
2. Reusing previously written code 
3. Jovi's code and my code has a small merge conflict
   - So currently my files are stored on a temporary branch

### Issues that I worked on
* [#21] (https://github.com/utk-cs340-fall22/FinDining/issues/21) Place buttons on the map
* [#20] (https://github.com/utk-cs340-fall22/FinDining/issues/20) Create button for all the other locations
* [#22] (https://github.com/utk-cs340-fall22/FinDining/issues/22) Connect the interactive button to the restaurant popup to have an animated connection

### Files that I worked on
* Create map button icon: FinDining/frontend/components/Public
* Place Map Button: 
   * FinDining/frontend/components/CampusMap/index.tsx
   * FinDining/frontend/components/mapButton/mapButton.module.scss
   * FinDining/frontend/components/mapButton/index.tsx 
   * FinDining/frontend/components/mapButton/mapButton1/mapButton.module.scss
   * FinDining/frontend/components/mapButton/mapButton1/index.tsx 

### What I accomplished
* I changed the CSS styling of the buttons and added a styling when hovered.
* I placed most of the dining locations on campus. (All locations in meal plan)
* I made the button connect to an alert javascript function.
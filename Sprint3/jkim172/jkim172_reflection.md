# Sprint 3
### Jihun Kim (jkim172vols)
### Group: JS

### What you planned to do
* Work on data collection for menu items and their prices in Excel
    - Issue [#31](https://github.com/utk-cs340-fall22/FinDining/issues/31)
* Make menu reusable
    - Issue [#35](https://github.com/utk-cs340-fall22/FinDining/issues/35)
* Improve Menu Popup Screen
    - Issue [#42](https://github.com/utk-cs340-fall22/FinDining/issues/42)

### What you did not do
* Did not finish implementing reusable menu screen. I need to make the screen get data from the JSON file.
* Even though I collected really a lot of information about foods and prices, I did not finish collecting them. 

### What problems you encountered
* There were too much data to collect, so it takes much longer time than I expected
* Still, I need to understand the higher skills of typescript. I learned a lot and I could implement a reusable screen with sample data.

### Issues you worked on
* Issue [#31](https://github.com/utk-cs340-fall22/FinDining/issues/31) Gathered information about the foods and prices
* Issue [#35](https://github.com/utk-cs340-fall22/FinDining/issues/35) Implement reusable menu screen using sample data 
* Issue [#42](https://github.com/utk-cs340-fall22/FinDining/issues/42) Make menu screen is viewable in map page and improved its design and layout

### Files you worked on
* Orginize data for menu items and their prices in Excel
    * data/Stores.xlsx
* Make menu page reusable
    * frontend/components/MenuBoard/index.tsx
* Imporve menu page (change layout and add scroll bar)
    * frontend/components/MenuBoard/MenuBoard.module.scss
* Imporve Popup Page
    * frontend/components/Popup/index.tsx
    * frontend/components/Popup/Popup.module.scss
* Improve Help Page and implement help popup
    * frontend/components/help_page/index.tsx
    * frontend/components/help_page/help.module.scss
    * frontend/components/CampusMap/index.tsx
    * frontend/components/ZoomBtns/index.tsx
    * frontend/pages/map/index.tsx
* Improve Style
    * frontend/components/ZoomBtns/ZoomBtn.module.scss

### What you accomplished
* I gathered information about the foods each store sells and the prices of those foods.
* I have simplified the code so that the menu screen is reusable and laid the groundwork for a reusable implementation using sample data.
* I made the menu screen viewable on the map page through a popup and I improved the design and layout of the menu screen.
* I implemented a popup of the help page which could be viewed on the map page.
* I inserted a star-rating system in the popup page.
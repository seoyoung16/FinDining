# Sprint 4
### Jovan Yoshioka (jovanyoshioka)
### Group: JS

### Files that I worked on
* Finish filter functionality
    * .\frontend\components\FiltersElements\index.tsx
    * .\frontend\components\FiltersElements\filterselements.module.scss
    * .\frontend\components\CampusMap\index.tsx
    * .\frontend\components\CampusMap\campusmap.module.scss
    * .\frontend\pages\map\index.tsx

* Implement search bar to the list-based interface
    * .\frontend\components\Search\index.tsx
    * .\frontend\components\Search\search.module.scss
    * .\frontend\components\CampusMap\index.tsx

* Make dining location popup dynamic/reusable
    * .\frontend\components\CampusMap\index.tsx
    * .\frontend\pages\map\index.tsx
    * .\frontend\components\Popup\index.tsx

* Help with rating
    * .\frontend\pages\hello\index.tsx
    * .\frontend\server\actions\HelloWorld.ts
    * .\frontend\components\Rate\index.tsx
    * .\frontend\components\Rate\rate.module.scss
    * .\backend\api\views.py
    * .\backend\backend\settings.py

### What I accomplished
* I finished implementing the filters functionality for the list-based interface. The user is now able to select their preferences regarding dietary restrictions, meal swipe period (i.e., breakfast/lunch/dinner), location, and hours. Once selected, only the relevant dining locations will appear in the list-based interface.
* I implemented a search bar into the list-based interface so that users are able to find a specific dining location quicker and easier. The user can search by restaurant name or location (e.g., Stokely, Hodges, etc.). If no dining locations match the query, the interface reflects so with a simple message.
* I integrated the collected data and the dining location popup component so that the dining location popup is reusable. We are now able to use the same component for all dining locations on both the map-based interface and list-based interface. To make this reusable, I made the image banner, hours of operation, and address dynamic. As part of this task, I piped the variable that holds our collected data through our various components, thus enabling my teammates to easily use the collected data for their tasks.
* I also helped with implementing the rating system. Altering my Hello World api endpoint example from the beginning of the semester, I was able to provide an example of sending a POST request and receiving/parsing a response from our backend.
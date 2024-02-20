# Sprint 2
### Jovan Yoshioka (jovanyoshioka)
### Group: JS

### What you planned to do
* Finish sprint 1 task: develop the front-end of the interactive campus map with zoom, drag, and drag boundaries.
   - Issue [#10](https://github.com/utk-cs340-fall22/FinDining/issues/10)
* Develop the front-end of the filter interface and display on the list-based sidebar ([#18](https://github.com/utk-cs340-fall22/FinDining/issues/18)).
   - Issue [#23](https://github.com/utk-cs340-fall22/FinDining/issues/23)
* Add functionality to filter interface using collected restaurant data.
   - Issue [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24)

### What you did not do
* Did not complete Issue [#23](https://github.com/utk-cs340-fall22/FinDining/issues/23). The front-end of the filter interface is complete, but it needs to be integrated into the list-based sidebar, created in Issue [#18](https://github.com/utk-cs340-fall22/FinDining/issues/18). This task should be trivial (i.e., completed early and quickly in Sprint 3) as buttons are already created to toggle between the list-based and the filter interfaces on the sidebar. 
* Did not complete Issue [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24). I discussed the required data for the filter functionality with my teammates and plan to implement the functionality in Sprint 3 once we get the necessary data (e.g., dietary restrictions, average price value, etc.).

### What problems you encountered
* A majority of my time during Sprint 2 was spent trying to get the zoom functionality working for the interactive map. After hours of debugging, I discovered several difficulties. I was zooming in using the `transform: scale(x)` and `transform-origin` CSS properties, but simply changing the values based on the the user's current x,y position on the map caused an unsmooth zoom, jumping the user across the map. After some personal investigation on how `transform-origin` works, I realized that the previous transformations are not persistent if the `transform` and/or `transform-origin` properties are overwritten. I was able to fix this by appending each new transform value to the existing `transform` CSS value, relative to the new `transform-origin`. However, it was still buggy when zooming in/out, and I suspected the error to be related to the increase/decrease in `scrollTop` and `scrollLeft` values (which I use to calculate the user's current x,y positions); thus, the user's x,y positions were inconsistent between zooms which interfered with the cumulative `transform` CSS value. Having already spent hours on this and still needing to make the map draggable via mouse, I decided to pivot and use an existing zoom/drag React package, `react-zoom-pan-pinch`. This package worked great and I was able to complete the interactive map.

### Issues you worked on
* [#10](https://github.com/utk-cs340-fall22/FinDining/issues/10) Develop the interactive map (front-end)
* [#23](https://github.com/utk-cs340-fall22/FinDining/issues/23) Add Filter Interface to Sidebar
* [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24) Add Functionality to Filter Interface

### Files you worked on
* Issue [#10](https://github.com/utk-cs340-fall22/FinDining/issues/19)
    * FinDining/frontend/components/CampusMap/index.tsx
    * FinDining/frontend/components/CampusMap/old.tsx **[Several Iterations]**
    * FinDining/frontend/components/CampusMap/transformDemo.html
    * FinDining/frontend/components/ZoomBtns/ZoomBtn.module.scss
    * FinDining/frontend/components/ZoomBtns/index.tsx
* Issue [#23](https://github.com/utk-cs340-fall22/FinDining/issues/23)
    * FinDining/frontend/components/FiltersElements/index.tsx
    * FinDining/frontend/components/FiltersElements/filterselements.module.scss
    * FinDining/frontend/pages/filters/index.tsx

### What you accomplished
* I completed implementation of the interactive campus map. In Sprint 1, the map was only draggable via touchscreen (not mouse which negatively influenced the user experience). Additionally, there was no zoom functionality and the user could go outside of the map borders. Now, the map is zoomable (using the buttons created in Issue [#26](https://github.com/utk-cs340-fall22/FinDining/issues/26)), draggable, and bounded by the map borders. It is now ready for further integration with the map icons and filter/list-based interfaces sidebar.
* I developed the front-end of the filter interface that will later be integrated into the list-based sidebar. This includes fields for dietary restrictions, meals (i.e., breakfast, lunch, dinner), method of payment, location, hours of operation, and price (i.e., $, $$, or $$$).
* I discussed the required data for the filter functionality with my teammates and plan to implement the functionality in Sprint 3 once we get the necessary data (e.g., dietary restrictions, average price value, etc.).
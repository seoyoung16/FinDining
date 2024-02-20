# Sprint 3
### Jovan Yoshioka (jovanyoshioka)
### Group: JS

### What you planned to do
* Finish sprint 2 task: display the filter interface (front-end) on the list-based sidebar ([#18](https://github.com/utk-cs340-fall22/FinDining/issues/18)).
   - Issue [#23](https://github.com/utk-cs340-fall22/FinDining/issues/23)
* Integrate dining location popup into the interactive map (i.e., open on map icon click or list-based item click and make popup reusable for different dining locations).
   - Issue [#37](https://github.com/utk-cs340-fall22/FinDining/issues/37)
* Finish sprint 2 task: add functionality to filter interface using collected restaurant data.
   - Issue [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24)

### What you did not do
* Did not complete Issue [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24) as required data collection is ongoing. We project data collection to be complete at the beginning of Sprint 4. Currently, I have essentially set up the workflow for filtering, i.e., how the filter selections are saved and will be checked when displaying dining locations on the list-based interface.

### What problems you encountered
* As described above, data collection is taking longer than expected due to the volume of data required, so I was not able to complete Issue [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24).
* Making the hours of operation on the dining location popup dynamic and reusable proved to be more challenging and time consuming than expected, primarily regarding grouping days with the same hours together and converting the times stored on the back-end into a usable format. Talking through the implementation with teammates helped.

### Issues you worked on
* [#23](https://github.com/utk-cs340-fall22/FinDining/issues/23) Add Filter Interface to Sidebar
* [#37](https://github.com/utk-cs340-fall22/FinDining/issues/37) Integrate Popup into Interactive Map
* [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24) Add Functionality to Filter Interface

### Files you worked on
* Issue [#23](https://github.com/utk-cs340-fall22/FinDining/issues/23)
    * FinDining/frontend/components/CampusMap/index.tsx
    * FinDining/frontend/components/CampusMap/campusmap.module.scss
    * FinDining/frontend/components/FiltersElements/filterselements.module.scss
* Issue [#37](https://github.com/utk-cs340-fall22/FinDining/issues/37)
    * FinDining/frontend/components/CampusMap/index.tsx
    * FinDining/frontend/components/Popup/index.tsx
    * FinDining/frontend/components/Popup/Popup.module.scss
    * FinDining/frontend/components/mapButton/index.tsx
    * FinDining/frontend/pages/map/index.tsx
    * FinDining/frontend/pages/popup/index.tsx
* Issue [#24](https://github.com/utk-cs340-fall22/FinDining/issues/24)
    * FinDining/frontend/components/CampusMap/index.tsx
    * FinDining/frontend/components/FiltersElements/index.tsx

### What you accomplished
* I integrated my filter interface (front-end) into the list-based sidebar ([#18](https://github.com/utk-cs340-fall22/FinDining/issues/18)). This required toggling display between the list of dining locations and the filters using an existing filter button ([#19](https://github.com/utk-cs340-fall22/FinDining/issues/19)).
* I integrated the dining location popup ([#25](https://github.com/utk-cs340-fall22/FinDining/issues/25)) into the interactive map and list-based sidebar. Whenever the user clicks a map icon ([#21](https://github.com/utk-cs340-fall22/FinDining/issues/21)) or list-based item, the popup opens. Additionally, the code was written in a way that will make it easy to retrieve the required data (once data collection is complete) on popup open. This required modifying the popup component to be reusable for different dining locations (i.e., dynamic image banner, hours of operation, and address). Making the hours of operation dynamic required converting the times stored on the back-end into a usable format (i.e., military to standard) and grouping days with the same hours together.
* I began making the filter interface functional. Currently, when the user selects a filter option, it updates a persistent string-boolean pair array that tracks if a filter is on (i.e., true) or off (i.e., false). For Sprint 4, once data collection is complete, when displaying each dining location, I will traverse this filters array and only show the locations that satisfy the "on" filters.
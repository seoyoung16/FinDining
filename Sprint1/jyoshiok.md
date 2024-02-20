# Sprint 1
### Jovan Yoshioka (jovanyoshioka)
### Group: JS

### What you planned to do
* Set up workflow of the project (structure and front-end/back-end connection).
   - Issue [#6](https://github.com/utk-cs340-fall22/FinDining/issues/6)
* Design campus map coordinate system to determine distance between current location and dining location.
   - Issue [#12](https://github.com/utk-cs340-fall22/FinDining/issues/12)
* Develop the front-end of the interactive campus map with zoom, drag, and drag boundaries.
   - Issue [#10](https://github.com/utk-cs340-fall22/FinDining/issues/10)

### What you did not do
* Did not complete Issue [#10](https://github.com/utk-cs340-fall22/FinDining/issues/10). The image is draggable via the scroll bars (works for touchscreen devices), but draggable via mouse should be added in another sprint. Zoom in/out needs to be integrated with zoom in/out buttons created in Issue [#13](https://github.com/utk-cs340-fall22/FinDining/issues/13).

### What problems you encountered
* Setting up the workflow ended up taking a lot longer than expected. I referenced several different structures for integrating React and Django, but ultimately decided to split them up into two directories, frontend and backend, for a clear division thus providing clarity.
* I was able to get a 3D-rendered image of campus from https://maps.utk.edu/ for Issue [#10](https://github.com/utk-cs340-fall22/FinDining/issues/10), but it ended up being low quality/pixelated when zoomed in despite exporting with the highest resolution available. Getting a better quality image (possibly from another source) will be a task for another sprint.

### Issues you worked on
* [#6](https://github.com/utk-cs340-fall22/FinDining/issues/6) Setup workflow
* [#12](https://github.com/utk-cs340-fall22/FinDining/issues/12) Design coordinate system
* [#10](https://github.com/utk-cs340-fall22/FinDining/issues/10) Develop the interactive map (front-end)

### Files you worked on
* Issue [#6](https://github.com/utk-cs340-fall22/FinDining/issues/6)
    * FinDining/frontend/components/HelloWorld/helloworld.module.scss
    * FinDining/frontend/components/HelloWorld/index.tsx
    * FinDining/frontend/pages/hello/index.tsx
    * FinDining/frontend/pages/index.tsx
    * FinDining/frontend/server/actions/HelloWorld.ts
    * FinDining/frontend/styles/global.scss
    * FinDining/backend/api/urls.py
    * FinDining/backend/api/views.py
    * FinDining/README.md
* Issue [#10](https://github.com/utk-cs340-fall22/FinDining/issues/10)
    * FinDining/frontend/components/CampusMap/campusmap.module.scss
    * FinDining/frontend/components/CampusMap/index.tsx
    * FinDining/frontend/pages/map/index.tsx
    * FinDining/frontend/public/campus_map.jpg

### What you accomplished
* I set up the workflow of our project (i.e., structure and front-end/back-end connection). I looked up several guides and ultimately decided to split them up into two directories, frontend and backend, for a clear division thus providing clarity. After this, I created a "hello" page that shows how to add a component (i.e., HelloWorld component that displays "Hello World (from a component)!") as well as how to get data from the back-end (i.e., calling the http://localhost:8000/api/hello-world endpoint and displaying "Hello World (from the back-end)!"). I did this to better understand the workflow for myself, but also to provide examples for my teammates to follow. I also added setup and workflow instructions/notes in the README.md for my teammates.
* I designed the coordinate system that we will use for determining the distance between the user's current position and a dining location. I decided that it would be easiest to use the number of left/top pixels relative to the top left corner of the campus map as the (x, y) coordinates. To convert the user's longitude and latitude to pixel-based coordinates, we would get the longitude and latitude of the (0, 0) (i.e., top/left corner of the campus map) and create a mathematical conversion factor based on this.
* I started implementing the interactive campus map. I tried exporting a high-resolution image from https://maps.utk.edu, but when zooming in, this image still becomes pixelated. I started brainstorming other solutions (e.g., integrating the Google Maps API instead or taking even higher resolution images). I made the campus map draggable via the scroll bars (which works as intended on touchscreen devices), but it still needs to be made draggable via the mouse for desktop browsers.
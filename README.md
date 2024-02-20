# Fin'Dining

 ![alt text](frontend/public/map.png)

## Contributors
- Dong Jun Woun (djwoun)
- Jovan Yoshioka (jovanyoshioka)
- Seoyoung An (seoyoung16)
- Jihun Kim (jkim172vols)
- Jonathan Skeen (jskeen6)

## Project Description
Fin'Dining is a web-based app that makes Vol Dining more accessible, providing a better user experience and ultimately a better dining experience for students at The University of Tennessee. Fin'Dining includes a map-based streamlined interface that contains icons for each dining location. When clicked, the icons provide information about that dining location (i.e., hours of operation, community-based rating, street address, and menu information). To accommodate more types of users who may not want to use the map-based interface, Fin'Dining also includes a list-based interface that shows the dining options in clickable text format. When users click an option's name, the associated dining information appears. For users to find a restaurant easier and quicker, this list-based interface offers a search bar and filters where users can input their preferences regarding dietary restrictions, meal swipe period (i.e., breakfast/lunch/dinner), location, and hours of operation.

## Tech Stack
* Front-End: Typescript, React, Sass, Next.js
* Back-End: Python, Django
* Data: C++

## Prerequisites
* Download Node.js (Recommended Version): https://nodejs.org/en/
* Download Python 9: https://www.python.org/downloads/

## Setup
Follow the below steps:
1. Clone this repository using `git clone https://github.com/utk-cs340-fall22/FinDining.git`
2. Open a command prompt and `cd` into the cloned directory
3. Run `pip install django djangorestframework pandas django-cors-headers`
4. `cd` into the `frontend` directory
5. Run `npm install` to update dependencies
6. Run `npm run dev`; keep this process running and move onto the next step once you see a "ready" message.
7. `cd` into the `backend` directory
8. Run `python .\manage.py makemigrations`
9. Run `python .\manage.py migrate`
10. Run `python .\manage.py runserver`; keep this process running and move onto the next step once you see the "Quit the server with CTRL-BREAK." message.
11. Open `localhost:3000/map` in a browser.
12. Setup is complete.

## How to Use Fin'Dining
Fin'Dining is a web-based app that visualizes dining locations on The University of Tennessee's campus. When at `localhost:3000/map`, you can zoom in and out of the map using the buttons on the right of the screen. You can also click your mouse and drag around the map for easier navigation. On the right side of the screen, there is a question mark icon button that, when clicked, will display a help popup. There is also a drink/food icon button that, when clicked, will display a popup with a few dining options on the Strip.

The dining location icons (which are red when closed and green when open) on the interactive campus map may be clicked to see the dining location's information, including hours of operation, community-based rating, and street adddress via a popup. A user may input their rating by clicking the vote button, clicking on a star, then closing all popups. When the popup is reopened, the average rating will be updated. On this popup, there is also a utensil icon button that, when clicked, will display the menu for that dining location, which is sorted by category and includes prices. The user may also increase the font size using the toggle button in the top right of the menu popup.

There is also a list-based interface for users who wish to view dining options by name/location or simply do not want to use the map-based interface. To access this, click the hamburger button on the top left of the page. This will display a side bar with a list of the dining options' names/locations. When clicked, the same popup that appears when a map icon is clicked will display. The user can search for a dining option using the search bar, typing in a dining option's name or location. The user can also filter, clicking the filter icon button next to the search bar, selecting the desired filters, and going back clicking the left arrow icon button. The filters include dietary restrictions, location, hours of operation, and meals (i.e., when a user can use their meal swipe).

## Workflow
* **Running the Project:** `cd` into the `frontend` directory and run `npm run dev`. `cd` into the `backend` directory and run `python .\manage.py runserver`. Go to `localhost:3000/map` to see your changes.
* **Front-End Development:** Add components (e.g., map icon, popup, etc.) separately in the `components` directory. Follow the `HelloWorld` example. Put your styling in the Sass file and put your HTML in the `return` of your `index.tsx` in the component folder. To see your changes, add the component to a file in the `pages` directory (you can temporarily use the index.tsx file). For example, look how I added `<HelloWorld />` in the `index.tsx` under the `hello` directory (make sure you import HelloWorld at the top).
* **Back-End Development:** Add a new endpoint via the `views.py` file. Create a path to your new endpoint in `urls.py`. Using `fetch`, you can test your endpoint by creating a request either on the front-end or via a JavaScript snippet on your browser.
* **Using an Image:** Add image files under the `public` directory.
* **Using an Icon:** Go to https://fontawesome.com/search?o=r&m=free and look for an icon you like. In your component, import `{FontAwesomeIcon}` from `@fortawesome/react-fontawesome` and `{iconName}` from `@fortawesome/free-solid-svg-icons`. To use the icon, add the following to your HTML: `<FontAwesomeIcon icon={iconName}`. For example, look how I added `<FontAwesomeIcon icon={faGlobeAmericas}` to the HelloWorld component.

## License Information
[License](https://github.com/utk-cs340-fall22/FinDining/blob/main/LICENSE.txt)

## Presentation
[Presentation](https://github.com/utk-cs340-fall22/FinDining/blob/main/CS%20340%20Fin'Dining%20Final%20Presentation%20-%2012_1_2022%20(1).pdf)
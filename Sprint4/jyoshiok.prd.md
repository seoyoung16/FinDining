# Product Requirements Document
Name: Jovan Yoshioka

Product Name: Fin'Dining

## Background
A critical component of college campus life is students' dining experience. A majority of students rely on campus dining to satisfy their nutritional needs, whether grabbing a quick bite before class or eating a hefty breakfast to prepare for the day ahead. Being such a crucial part of thousands of individuals’ lives, campus dining should be a positive experience. Unfortunately, at The University of Tennessee Knoxville (UTK), the current Vol Dining website is lacking the aforementioned positive experience, ultimately hindering students’ lives beyond the food. The website is supposed to act as a centralized interface for students to find their dining options, however, it’s not user-friendly, especially for first-year students; there is no visualization of where the restaurants are located, it is difficult to find which dining locations one may use their meal swipe at, no menu is included to help students learn about the restaurant, and and there is no customization when searching for options (e.g., filters). Such poor websites can be seen at universities other than UTK as well, providing opportunities for scalability.

## Project Overview
We propose creating a web-based app that shows information about each dining location and their menus, improving on how the current Vol Dining website works. The app would be map-based and would show all dining locations as clickable icons, with colored borders indicating if the location is open (green) or closed (red). The map would be interactive, allowing for zoom in/out and dragging for a greater user experience. When users click an icon, a popup would appear with the information associated with that restaurant, i.e., hours of operation, community-based rating (out of five stars), and street address. Via the popup, users would be able to click another button to view the restaurant’s menu and prices, sorted by category (e.g., entree, drink, dessert, etc.). To accommodate more types of users who may not want to use the map-based interface, we would implement a list-based interface as well that shows the restaurants in clickable text format. When users click a restaurant name, the same popup from the map-based interface would appear. For users to find a restaurant easier and quicker, we would implement a search bar and filters where users can input their preferences regarding dietary restrictions, meal swipe period (i.e., breakfast/lunch/dinner), location, and hours of operation.

## Features
1. **Dining location icons on an interactive map**: As a new student, I want to view dining locations via an interactive campus map, so that I can easily find options near me.
2. **Help popup**: As a new user, I want to learn about the various buttons on the interface, so that I know how to use the website.
3. **Popup that displays dining locations on the Strip**: As a new student, in addition to campus dining locations, I want to view dining locations on the Strip, so that I have more options in case I get tired of campus dining or they are closed.
4. **List of dining locations**: As a student, I want to view the campus dining locations as a list instead of a map, so that I can more easily recognize the restaurant and its location by name instead of by image/map location.
5. **Filters for list-based interface**: As a user searching for specific types of restaurants, I want to input my preferences regarding dietary restrictions, meal swipe period, location, and hours of operation, so that I can more easily and quickly find dining locations that fit my needs. 
6. **Search bar on list-based interface**: As a user searching for specific types of restaurants, I want to search for a specific dining location by name/location (e.g., “Chick-fil-a” or “Student Union”), so that I can more easily and quickly find a specific restaurant or location’s options.
7. **Menu items and prices**: As a financially responsible student, I want to view the menu items and their prices, so that I can more easily decide where to eat based on food preference or cost.
8. **Community-based rating**: As a new student, I want to view other users’ ratings of campus dining locations, so that I can more easily decide where to eat and avoid poor establishments.

## Technologies to be used
* Front-End: Typescript, React, Sass, Next.js
* Back-End: Python, Django
* Data: C++
* Icons: Font Awesome
* Other Libraries: react-rating-stars-component, pandas, django-cors-headers, react-zoom-pan-pinch

We will use TypeScript, React, and Sass to build the front-end. Next.js will be used for the routing. We will use Python and Django to build our backend APIs (mainly for rating). We will use C++ to put our collected data about dining locations into a JSON file to be read by the front-end. We will use Font Awesome for icons, react-rating-stars-component for the clickable rating stars, pandas for storing/retrieving rating data in an CSV file, django-cors-headers to allow for API calls from the front-end, and react-zoom-pan-pinch to implement the interactive map.
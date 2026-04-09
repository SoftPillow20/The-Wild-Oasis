# The Wild Oasis CRUD Application

A client-side web application using React.js, using the fundamentals and advanced concept taught by instructor Jonas Schmedtmann from his ultimate react course on Udemy.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Users should be able to

- Login or logout through the app
- Navigate to different pages without page reloads (SPA)
- See sales summary (can be filtered from last 7 days to last 90 days)
- See all the bookings and information about the bookings
- See all the available cabins
- Add new cabin or edit/delete existing cabin
- Cabin can also be duplicated and edited
- Add new user to access the web app
- Change/Update hotel settings
- Update account information (name and password)
- Change the theme to light or dark mode

### Screenshot

![Website screenshot](image.png)

### Links

- Solution URL: [Github](https://github.com/SoftPillow20/The-Wild-Oasis)
- Live Site URL: [https://the-wild-oasis-neon-eight.vercel.app/](https://the-wild-oasis-neon-eight.vercel.app)

## My process

### Built with

- [Vite](https://vite.dev/guide/)
- [React18](https://reactjs.org/) - JS library
- [TailwindCSSv4](https://tailwindcss.com/docs/installation/using-vite)

### What I learned

This project has been the longest one (to develop) I've done so far, even as a course-along project, due to the complexity and advance concept that was taught during the development, some were still hard to grasp and needed sometime to absorb and re-evaluate so that I fully understand the concepts. Furthermore, here are the lists of things I've learned so far:

- **Using React Query for managing remote states:** This was necessary because this project uses supabase as its database (Technically, I can use other databases, as long as the states are not living inside the application) to ensure that this application can fetch the data and mutate them accordingly to our needs.

- **Some advanced React patterns was used:** Such as the render props and compound component pattern. The render props was useful when I was writing the code for the button component. This component was used in some parts of the application, which means this needs to be reusable. By doing render props, I was able to make the button component a reusable component. Another thing is that aside for the render props, I also utilizes the power of the compound component pattern, where creating a context api and having functions as an extension of a component, I was able to reuse not only the button component but also the whole menu component of the application.

- **Client-side and API-side filtering and sorting:** In the application, there were tons of options for data filtering and sorting so users can see the data much better which makes the application more professional and real-life. To make this possible, a client-side and api-side filtering and sorting was done:
  - for client-side, a useSearchParams hook was used to dynamically get the value from a parameter. This way, only the selected parameter is navigated and the filtered/sorted data was rendered.
  - for the api-side, a supabase methods were used to only acquire the data that the client selected from the filter/sort button.

## Author

- Github - [@SoftPillow20](https://github.com/SoftPillow20)

# "Create a movie search page" for the "React Practice Calendar" challenge by reactpractice.dev 

Made by **roznerx** (ignaciorosner@gmail.com)

- Tenth day of the calendar, creating a page that lets the user search for movies!
- This was a blast and had lots of fun while building it! Took some extra time on this because I'm working on a personal streaming platform for personal use, and this could be a nice starting point for the UI in the future
- Had to use the free public ["The Movie Database" (TMDB)](https://www.themoviedb.org/) **API**, which was a nice finde! Super user friendly, with really good [documentation](https://developer.themoviedb.org/docs/getting-started) and [devs forum](https://www.themoviedb.org/talk/category/5047958519c29526b50017d6)
- Copied the main branch of the provided repo to avoid looking at the solution
- Just a main branch, but put a lot of effort into the card design so it would look as good as possible
- All sensitive data like API Keys and such is inside an ```.env``` file, excluded in the ```.gitignore```
- Added a couple extras:
  1) Pagination with [react-paginate](https://www.npmjs.com/package/react-paginate), although it isn't working properly due to the free version of the API making continous requests slow. The proper way to do it would be with a paginated endpoint, which required refactoring the code: too much work for an extra, although I might revisit it in the future
  2) A fetch of my favorite films, consuming the API and showing them as soon as the page loads. Acts as an interesting placeholder!

*Link to the challenge:* https://reactpractice.dev/start-here/ 

*Link to the exercise:* https://reactpractice.dev/exercise/create-a-movie-search-page/?utm_source=calendar.reactpractice.dev&utm_medium=social&utm_campaign=calendar-v1

**NOTE:** I'm really happy with how it turned out, although there might be some stuff that needs refining; for example, the way the selected Task moves up when being dragged, and such

## Screenshots:

![imagen](https://github.com/user-attachments/assets/fbfbcfa3-a626-4378-8ac2-058cda72a02c)
![imagen](https://github.com/user-attachments/assets/11d354a3-4037-40b7-a240-1878659f6235)
![imagen](https://github.com/user-attachments/assets/db1cafc2-7298-4a80-9cd7-8a8272b2ef4b)

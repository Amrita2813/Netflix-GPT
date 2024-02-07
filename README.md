# Netflix GPT

Features we need to build

1. Login/Sign-up
    - Login Form Design
    - Sign Up Form Design
2. Browse (if authenticated then only take to this page)

    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestion
            - Movie list (vertical scrollable) \* N

3. Netflix - GPT
    - Search Bar
    - Movie Suggestions

what we have built till now - - Header - Routing

-   Login Form
-   Sign up Form
-   Form Validation
-   useRef hook
-   Firebase setup
-   Deploying out application
-   Create a sign up user account
-   implemented sign in user account
-   created redux store with userSlice
-   Implemented sign out
-   Update profile
-   Register TMDB API & create an app & get access token
-   get data from TMDB now playing movies list API.
-   Custom hook for Now Playing Movies.
-   create MovieSlice
-   Update store with movies Data.
-   Planning for Main Container & secondary Container.
-   GPT Search Feature
-   Multi language feature (created config slice for that)

<!-- TMD API  -->

API-KEY = 7de87f47f8a75a47c4a9f2b105d6fa05

API-READ-ACCESS-TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGU4N2Y0N2Y4YTc1YTQ3YzRhOWYyYjEwNWQ2ZmEwNSIsInN1YiI6IjY1OWEzY2E1Yzk5NWVlMDA5NWNmMDVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRKeJ9xwT_vwkWDMSxOPj7UrBM-qAGnqasNmwFs4qEM

-   To do
-   movieSlice , API call to get data , then update the store
-   custom hook for nowPlayingMovies

mainContainer - videoBackground - video title

secondaryContainer - movielist*n - moviesCard*n

    videoBackground component
    videoTitle

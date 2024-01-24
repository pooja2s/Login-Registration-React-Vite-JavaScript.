# Build Basic Login Registration in React + Vite With JavaScript.
===========================================================================

This is a simple project to demonstrate how you can build a login and registration form using React,
JavaScript, and the Vite module bundler. The code includes comments explaining each method used.

===========================================================================

#Getting Started
To get started with this project, make sure you have Node.js installed on your computer. You
can download it from https://nodejs.org/en/. Once you've got Node.
installed, open up your terminal or command prompt and navigate to where you want to save the project.

Then use the following commands:
- npm create vite@latest
- npm i react-router-dom axios 
- npm i react-hot-toast


Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.
- [react-hot-toast](https://react-hot-toast.com/) used for Toaster.
- [axios](https://www.npmjs.com/package/axios) used for making HTTP requests from the frontend to the backend.
- [react-router-dom] used for routing between pages.</s>



After running these commands, you should have a new folder named "vite" (or whatever you chose for your project name). Navigate into that directory by typing `cd vite` in your terminal. Now you can start the development server by typing `npm run dev`. This will start up a local webserver at http://127.0.0.1:5173/. If everything worked correctly you should see a message saying "Running at http://127.0.0.1:5173/". Open up http://127.0.0.1:5173/ in your browser and you should see the application loaded.

===========================================================================

# Create Context

We have used CreateContext from 'react'; to handle state management in our app. In order to access the context outside of
the App component we need to wrap our components inside <AppContext.Provider> and pass in the
value prop as an object containing all the data needed by our components.</s>


# Node JS API
You will find the Login Registration API with the JWT token from the previous reprositry on Github.
You can find more information about it here : [Login Register API](https://github.com/pooja2s/nodejs-express-mongodb-joi-jwt-bcryptjs).




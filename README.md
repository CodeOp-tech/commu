# commu. the community app
"commu." is a webapp designed by and for neighbourhood-friendly people.
It is a social app for users to register by their city area of residence, so they can then post their needs and small jobs they would need to be done. This way, "commu." encourages its users to empower the local economy, contacting their neighbours when they are in need of anything, be it a plumber, a dog for adoption or even some tips and advice for newcomers!
Try it today!
"commu."


## User flow
It can be checked here:
`https://app.flowmapp.com/share/c867cf2446e3193ffe01537b8cd0a7e5/sitemap/`


## Available Scripts
In the project directory, you can run:

### Dependencies
Run `npm install` and `npm install pusher` on root folder to install dependencies related to Express and Pusher, respectively.
`cd client`, run `npm install` and `npm install pusher-js` to install dependencies related to React and Pusher.

### Run Your Development Servers
- Run `npm run start` in project directory to start the Express server on port 5000
- `cd client` and run `npm run start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience.
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/app`

### Import the database
- Run `npm run migrate` to build the database structure on your local SQL server.
- Run `npm run seed` to fill in the database with pre-created profiles and jobs for show and the "areas" table with the information needed for the app to run.
To visualize the database layout, see attached file in `model/database.png`.
NOTE: This image is just orientative and it might be not 100% accurate with the actual database.


## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
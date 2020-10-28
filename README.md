## Weather-api-fe

A simple React and Redux application that fetches weather data through Graphql client and redux-thunk

## Set up the project
```bash
git clone https://github.com/munjal83/weather-api-fe.git
cd weather-api-fe
npm run install
```

## Generating and using Google Api key

Since this project utilizes the `geolocation` and `reverse-geolocation` Apis, it will require a Google Api Key to detect the city. The key can be generated [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

Once the key has been generated, you will need to add it to the project. In the root of the project create a `.env` file and add:

`REACT_APP_GOOGLE_API_KEY=<YOUR_API_KEY>`

## Run the project

Run the [Graphql-weather-api](https://github.com/konstantinmuenster/graphql-weather-api) locally following the `README` in the project.

To run this application in development

`npm run start`

The application will be running on `http://localhost:3000`

To run the application in production

```bash
npm run build
npm install -g serve
serve -s build
```
The application will be running on `http://localhost:5000`

## Running the app for the first time

> When you run the application for the first time, the browser notification may ask permission for location services depending on your browser configurations. Please allow the permission to detect location else the data will not be fetched.

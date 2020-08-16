# Ecoleta
Application developed with nodeJS using typescript in the back end, ReactJS for web and react-native for mobile. In the web you should be able to create a point in the map and choose which recycling items this point can collect. In the mobile you can find places that collect items you want to recycle. This application was developed for educational purposes during the 1st NextLevelWeek.


## Requirements
To open and run this project you will need:
* [git](https://git-scm.com/download/win) *this link is for windows*
* [nodejs](https://nodejs.org/)
* [yarn](https://classic.yarnpkg.com/)
* [Expo-CLI](https://reactnative.dev/docs/0.61/getting-started)

In this project the mobile app was developed using expo CLI, 
you can check the details in how to install and start a react-native project using expo in the following link:
* [getting started with react-native](https://reactnative.dev/docs/0.61/getting-started)

## Getting Started

* Create or choose a folder where you gonna clone the project.
* Run the command `git clone https://github.com/djanlm/NextLEvelWeek01-Ecoleta.git`.

### Backend

To run the backend, go to the *server* folder and run the command `npm run dev`. It will run on port 3333.
In this project we use the sqlite database and we configured knexjs to connect to it. So you will need to create your own sqlite database ruuning the command: `npx knex --knexfile knexfile.ts migrate:latest`

### Web
To run the web application, developed using reactJS, go to the *web* folder and run `npm start`

### App 
To be able to run the app for cellphone, you'll need to have expo CLI installed. As mentioned before you might have to follow the react-native [getting started tutorial](https://reactnative.dev/docs/0.61/getting-started).

After installing expo, go to *mobile* folder and run the command `expo start`. 

To be able to open the app on your cellphone you have to install the expo app. After its instalation open it and read the QRcode. 

You'll also need to switch the code in the api.js file and insert your own ip address:

```
const api = axios.create({
  baseURL: 'http://put-your-ip-address-here:3333'
})
```

## Preview and Usage

### Web

This is just a presentation page, click on the button to move to the main page.

![login](https://github.com/djanlm/NextLEvelWeek01-Ecoleta/blob/master/inital_page.png?raw=true)

In the main page you can register a collect point and add it to the map.

![main](https://github.com/djanlm/NextLEvelWeek01-Ecoleta/blob/master/main_page.png?raw=true)


### Mobile App

In the firt page you must choose one city and one state where you want to find a collect point

<img src="https://github.com/djanlm/NextLEvelWeek01-Ecoleta/blob/master/login_page_mobile.png?raw=true" width="200">

In the main page you gonna see the map showing all collect points in your area based on which products you chose in the list under the map

<img src="https://github.com/djanlm/NextLEvelWeek01-Ecoleta/blob/master/map_list_page.png?raw=true" width="200">

In the details page you can see more about the place

<img src="https://github.com/djanlm/NextLEvelWeek01-Ecoleta/blob/master/details_page.png?raw=true" width="200">




Hope you enjoy it. :heart_eyes:

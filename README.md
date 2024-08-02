### Gmovies
Gmovies is a [React](https://reactjs.org/) project that provides a movie browsing experience with various features, including authentication and Firebase integration.

![localhost_3000_HighRated](https://github.com/user-attachments/assets/2a2d80ba-1e5a-4134-8422-bf011ccb3668)
![localhost_3000_movie_1022789](https://github.com/user-attachments/assets/68d43e86-4591-4509-8284-06fc57f7e22b)

## Installation

Follow these steps to get a local copy up and running:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node package manager) or [Yarn](https://yarnpkg.com/) (optional)

### Clone the Repository

```bash
git clone https://github.com/Cheroo30/Gmovies.git
cd Gmovies
```

### Install Dependencies
Install the required dependencies using npm or Yarn:

```
npm install
# or
yarn install
```

### Configure Environment Variables
Create a .env file in the root of the project directory and add the following environment variables:

```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```
Replace your_firebase_* values with the actual values from your Firebase project settings.

### Run the Application
Start the development server:

```
npm start
# or
yarn start
```

## License
This project is licensed under the [MIT License](LICENSE).



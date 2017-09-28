import firebase from 'firebase'
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const projectName = process.env.REACT_APP_FIREBASE_PROJECT_NAME;

const config = {
  apiKey: apiKey,
  authDomain: `${projectName}.firebaseapp.com`,
  databaseURL: `https://${projectName}.firebaseio.com`,
  storageBucket: `${projectName}.appspot.com`,
};
const fire = firebase.initializeApp(config);
export default fire;

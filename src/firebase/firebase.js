// Connect to Firebase v9 - modular
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  get,
  query,
  child,
  update,
  remove,
  set,
  onValue,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjHgo6-9N-JPSb0jpeDDRcu6ZclJDgPx8",
  authDomain: "expensifyappp.firebaseapp.com",
  databaseURL: "https://expensifyappp-default-rtdb.firebaseio.com",
  projectId: "expensifyappp",
  storageBucket: "expensifyappp.appspot.com",
  messagingSenderId: "255135107517",
  appId: "1:255135107517:web:05758a647718606d92ead4",
  measurementId: "G-E2YNWT1X8B",
};

// Initialize Firebase v9
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const dbRef = ref(db);
//const age=ref(db,"age");
//const database=firebase.database();

set(dbRef, {
  name: "Arpit",
  age: 21,
  job: {
    company: "amazon",
    title: "SDE",
  },
  location: {
    city: "Ghaziabad",
    country: "India",
  },
})
  .then(() => {
    console.log("Datat  is Saved");
  })
  .catch((e) => {
    console.log("This is failed ", e);
  });

//child_remove_Event
//child_Changed_Event
//child_Added_Event

//*****************/
//removing data  from database
//****************/

// remove(child(dbRef, ("name")))
//   .then(() => {
//     console.log('I fetched something ...');
//   })
//   .catch((e) => {
//   console.log('Data fetch failed', e);
//   });

//*****************/
//updating data in the  database
//****************/

//update(child(age,set(28)));

//*****************/
//fetching database
//****************/

// onValue(dbRef,(dataSnapshot)=>{
//   const val=dataSnapshot.val();
//   console.log(`${val.name} is  a  ${val.job.title} at ${val.job.company}`)
// })

// dbRef.on('value',(snapshot)=>{console.log(snapshot.val())});


// ===============================> SETUP FIREBASE ==================================
var admin = require('firebase-admin');
var serviceAccount = require('./env/dv-demo-villa-firebase-adminsdk-dc3nk-b4e6b37c96.json');
var fir = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dv-demo-villa.firebaseio.com"
});
// ==================================================================================
console.log('app_name->', admin.app().name);
var db = admin.firestore();
db.settings({timestampsInSnapshots: true})
db.collection("Users").get('users-01').then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log('----------------------------->')
        console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

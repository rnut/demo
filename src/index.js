
// ===============================> SETUP FIREBASE ==================================
var admin = require('firebase-admin');
var serviceAccount = require('/env/dv-demo-villa-firebase-adminsdk-dc3nk-b4e6b37c96.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dv-demo-villa.firebaseio.com"
});
// ==================================================================================

console.log(admin.app().name);
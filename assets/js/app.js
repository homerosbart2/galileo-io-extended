// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPq-PKMU70Nk34Iiq5XRLYQjjJh9Alccg",
    authDomain: "io-extended-galileo.firebaseapp.com",
    databaseURL: "https://io-extended-galileo.firebaseio.com",
    projectId: "io-extended-galileo",
    storageBucket: "",
    messagingSenderId: "602953969856",
    appId: "1:602953969856:web:026ecb303936deb8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

const docRef = firestore.doc("samples/childrenUpdate");

function getCookie(cookieName){
  // Get name followed by anything except a semicolon
  var cookiestring=RegExp(""+cookieName+"[^;]+").exec(document.cookie);
  // Return everything after the equal sign, or an empty string if the cookie name not found
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : '');
}

function setCookie(cookieName, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = cookieName + "=" + (value || "")  + expires + "; path=/";
}

if(getCookie('kioskUpdate') == '') setCookie('kioskUpdate', 'null', 1);
console.log(`Cookie actual: ${getCookie('kioskUpdate')}`);


// if(getCookie('kioskUpdate') == '')

// docRef.set({
//     updateKey: 'HOLA'
// }).then(()=>{
//     console.log('Se ha almacenado HOLA.');
// }).catch((error)=>{
//     console.log(`Got an error: ${error}`);
// });

// setInterval(()=>{
//     docRef.get().then((doc)=>{
//         if(doc && doc.exists){
//             const myData = doc.data();
//             console.log(`Información actual: ${myData.updateKey}`);
//         }
//     }).catch((error)=>{
//         console.log(`Got an error: ${error}`);
//     });
// }, 5000);

getRealtimeUpdates = ()=>{
    docRef.onSnapshot((doc)=>{
        if(doc && doc.exists){
            const myData = doc.data();
            const updateKey = myData.updateKey;
            console.log(`Llave actual: ${updateKey}`);
            if(getCookie('kioskUpdate') != updateKey){
                setCookie('kioskUpdate', updateKey, 1);
                document.location.reload(true);
            }
        }
    });
};

getRealtimeUpdates();
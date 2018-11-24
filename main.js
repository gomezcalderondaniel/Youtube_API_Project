//Options
const CLIENT_ID = "1037635597104-3onij1kaerr43diim6kfu579e5qtnod6.apps.googleusercontent.com";
 // Array of API discovery doc URLs for APIs used by the quickstart
 const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

 // Authorization scopes required by the API. If using multiple scopes,
 // separated them with spaces.
 const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

 const authorizeButton = document.getElementById('authorize-button');
 const signoutButton = document.getElementById('signout-button');
 const content = document.getElementById("content");
 const channelForm = document.getElementById("channel-form");
 const channelInput = document.getElementById("channel-input");
 const videoContainer = document.getElementById("video-container");
 const defaultChannel = "techguyweb";


 //Load auth2 Library
 function handleClientLoad(){
     gapi.load("client:auth2", initClient)
 }

 //Intitialize API Client Library and set up sing in listeners
 function initClient(){
     gapi.client.init({
         discoveryDocs: DISCOVERY_DOCS,   
         clientId: CLIENT_ID,
         scope: SCOPES
     }).then(() =>{
        //LIsten for sign in state changes
        gapi.auth2.getAuthInstant().isSignedIn.listen(updateSigninStatus);
        //Handle Initial Sign in State
        updateSigninStatus(gapi.auth2.getAuthInstant().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
     });
 }

 //Update UI Sign in State
 function updateSigninStatus(isSignedIn){
     if(isSignedIn){
        authorizeButton.style.display = "none";
        signoutButton.style.display = "block";
        content.style.display = "block";
        videoContainer.style.display = "block";
        getChannel(defaultChannel);
     } else{
        authorizeButton.style.display = "block";
        signoutButton.style.display = "none";
        content.style.display = "none";
        videoContainer.style.display = "none";
     }
     
 }

 //Handle Login
 function handleAuthClick(){
     gapi.auth2.getAuthInstant().signIn();

 }

 //Handle Sing out
 function handleSignoutClick(){
     gapi.auth2.getAuthInstant().signOut();
 }

 //Get channel from API
 function getChannel(channel){
     console.log(channel);
 }
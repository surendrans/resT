//////////////////////////
//
// News Feed
// See the "News Feed" section on https://developers.facebook.com/mobile
//
//////////////////////////

//publish page

function test(){
 var networkState = navigator.connection.type;

            var states = {};
           
            states[Connection.NONE]     = 'No network connection';
//alert(networkState);
if (states[networkState] == 'No network connection'){
    alert("Please check your network connection.")
} else {
            publishPage();
          }
}

function publishPage()
{
//alert("publishPage");
 FB.login(function(response) {
   // handle the response
   FB.api('/187230568116003/feed','POST',
  {
    access_token: response.accessToken,
    message:'This is a FB page post testing'
  },
  function(response) {alert("success response");
    // your code, the return value will be 'true' on success or an error 
     if (!response.error) {
     console.log('no error page post');
     publishStory();
     }
     else
     {
       console.log('page post error ='+JSON.stringify(response));
       }
  }
);
 }, {scope: 'publish_stream,manage_pages'});
}

//Publish a story to the user's own wall
function publishStory() {
  FB.ui({
    method: 'feed',
    name: 'Test',
    caption: 'Restaurant',
    description: 'Tasty restaurant',
    link: 'http://apps.facebook.com/mobile-start/',
    picture: 'http://www.facebookmobileweb.com/hackbook/img/facebook_icon_large.png',
    actions: [{ name: 'Get Started', link: 'http://apps.facebook.com/mobile-start/' }],
  }, 
  function(response) {
    alert('successfully posted to FB page and wall');
  });
}

{

}
//Publish a story to the user's friend's wall
function publishStoryFriend() {
  randNum = Math.floor ( Math.random() * friendIDs.length ); 

  var friendID = friendIDs[randNum];
  
  console.log('Opening a dialog for friendID: ', friendID);
  
  FB.ui({
    method: 'feed',
    to: friendID,
    name: 'I\'m using the Hackbook web app',
    caption: 'Hackbook for Mobile Web.',
    description: 'Check out Hackbook for Mobile Web to learn how you can make your web apps social using Facebook Platform.',
    link: 'http://apps.facebook.com/mobile-start/',
    picture: 'http://www.facebookmobileweb.com/hackbook/img/facebook_icon_large.png',
    actions: [{ name: 'Get Started', link: 'http://apps.facebook.com/mobile-start/' }],
    user_message_prompt: 'Tell your friends about building social web apps.'
  }
  , 
  function(response) {
    console.log('publishStoryFriend UI response: ', response);
    alert(response.accessToken);
  });
}
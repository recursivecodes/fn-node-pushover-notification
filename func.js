const fdk = require('@fnproject/fdk');
const Pushover = require('node-pushover');

fdk.handle(async function(input, b){
  const appKey = process.env.APP_KEY;
  const userKey = process.env.USER_KEY;
  
  const pushover = new Pushover({ token: appKey, user: userKey });

  return new Promise((resolve, reject) => {
      pushover.send("Push Notification from ONS via Oracle Functions", input, (err, res) => {
        if(err) {
          console.log(err);
          reject(err);
        }
        else {
          console.log(res);
          resolve(res);
        }
      })
  });
})

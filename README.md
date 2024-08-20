# teams-simple-download


## How to work?
 - run `yarn`
 - run `yarn start`
 - run `ngrok http --host-header=rewrite localhost:9083`, then got the https link of the URL, copy that
 - modify the app/manifest.json, paste the URL of the static tab content URL, save file (note you may also need to change the "version" of the manifest)
 - zip all files under the `app` folder to a `zip` file, upload to MS Teams app
  

## How to check issues
  - In the browser app, click the Download file button, it works to get a txt file
  - In new Teams desktop client, click the Download button, it is not able to download txt file
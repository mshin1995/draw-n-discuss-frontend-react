# Draw-n-Discuss
## A collaborative online drawing and chat app!

![demo of Draw-n-Discuss](https://github.com/isalevine/draw-n-discuss/blob/master/draw-n-discuss-demo.gif)

Draw-n-Discuss is a simple online web-app featuring a saveable canvas for drawing, and a chatroom for talking with other users. Draw-n-Discuss utilizes both React and Rails' ActionCable to provide real-time updates to drawings, conversations, and the gallery of saved art.

## Setup
Clone this repo into your local environment. You will need to set up both the Rails backend and the React frontend. **You will need PostgreSQL for the database!**

### Rails:
Move into the './backend-rails' directory, and use Bundler to install Ruby gems:
```
cd backend-rails
bundle install
```
Once complete, create the PostgreSQL database:
```
rails db:create
rails db:migrate
```
You can then start the Rails server:
```
rails s
```

### React:
From the root directory, move into the './frontend-react' directory, and use Node Package Manager to install Javascript packages:
```
cd frontend-react
npm install
```
Once complete, start npm to start the app:
```
npm start
```
**Note: if your Rails server is running on localhost:3000, your console will ask if you want to run the app on localhost:3001 instead. Enter 'y' or 'yes' to confirm.**

## Functionality
On the main page, enter a username to begin. Users do not need to create an account or password.

On the drawing page, there are two fields: the canvas on the left, and the chatroom on the right.

On the canvas, click and move to draw a line. You can change the line's color and thickness using the menu and slider underneath the canvas. Additionally, you can save your drawing to the gallery, clear the canvas, or view the gallery. **Note: once you view the gallery, your canvas will be automatically cleared!**

In the chatroom, you can post messages using the field at the bottom. Scroll to the bottom of the chatroom window to see the most recent messages.

## Known Bugs
Several bugs are known for this application--if you have suggested solutions, please feel free to message us, or fork this repo and build it better!

1. Canvas rendering -- there are occasional delays (or complete loss of functionality) in drawn lines rendering on all instances; cause is unknown, and debugging with Flatiron instructors did not yield any obvious causes; our best guess is that too many fetch requests are causing delays in ActionCable?

2. Chatroom messages rendering -- similar to the issue above, newly-posted messages do not always display on all instances; most common example is posting a new message which does not render until *another* message is posted; like above, we suspect the issue lies with fetch and delays in ActionCable

3. rails db:reset -- the issues above seem to appear more frequently after running "rails db:reset" in the console

4. Canvas cursor -- after viewing gallery and returning to the canvas, drawn lines do not always follow the cursor; we suspect the issue has to do with window-resizing affecting how the canvas detects drawing locations

## Credits
Created by Isa Levine and Matt Shin, May 2019.

Special thanks to the packages and tutorials we used to help us utilize ActionCable and Canvas with React:

[https://github.com/cpunion/react-actioncable-provider](https://github.com/cpunion/react-actioncable-provider)

[https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296](https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296)

[https://gist.github.com/srinidhiprabandham/91c56d8921b2c1293f92c24651a4c9a2](https://gist.github.com/srinidhiprabandham/91c56d8921b2c1293f92c24651a4c9a2)

[http://jameshuynh.com/rails/react%20js/chat/2017/07/30/build-chat-using-react-js-and-rails-action-cable/](http://jameshuynh.com/rails/react%20js/chat/2017/07/30/build-chat-using-react-js-and-rails-action-cable/)

[http://code-and.coffee/post/2015/collaborative-drawing-canvas-node-websocket/](http://code-and.coffee/post/2015/collaborative-drawing-canvas-node-websocket/)

[https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react/39082160#39082160](https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react/39082160#39082160)

Prerequisites
Make sure to have Node.js and MongoDB installed, or sign up for remote MongoDB hosting. I also suggest Ember-cli if you are just now starting a project with Ember.js.

In order to create a basic Node.js project install express-generator: 
npm install -g express-generator


express todo

Start Up The Server
At this point I like to use nodemon, this is a Node.js package that will automatically restart the server whenever files are changed, which will save you time and streamline your workflow. 
npm install -g nodemon

nodemon bin/www


Installing Mongoose
To talk to MongoDB we will be using Mongoose, so we will go ahead and install that now. Open up a new Terminal(or Console) window and navigate to the project directory and run the following command:

npm install mongoose --save 


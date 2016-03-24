# Overview
-------------------------

Pixels is an app based on 500px. It fetches 100 popular photos from 500px using their API and presents them in a gallery.
It also lets users log in using their 500px credentials and then like pictures that they view from the gallery.

# Dependencies
-------------------------

### Client-side

Dependencies on the client-side are managed using Bower and npm.
Run the following commands on Terminal to get NodeJS and npm set up (Linux) -
  1. sudo apt-get purge nodejs npm
  2. sudo apt-get install -y python-software-properties python g++ make software-properties-common
  3. sudo add-apt-repository ppa:chris-lea/node.js
  4. sudo apt-get update
  5. sudo apt-get install nodejs

If you are on a Mac, you can install NodeJS and npm from https://nodejs.org/en/
Once NodeJS is installed, open Terminal and run the following commands:
  1. cd {$ROOT}/client
  2. sudo npm install

### Server-side
To install the server-side code, you must install Ruby, Rails and Bundler first.
Links:
  1. Ruby: https://www.ruby-lang.org/en/documentation/installation/
  2. Rails: http://installrails.com/
  3. Bundler: http://bundler.io/bundle_install.html

Once you have installed those 3, you can run the following commands on your Terminal:
  1. cd {$ROOT}/server
  2. bundle install

# Configuring client and server
-------------------------
To configure the server, please edit {$ROOT}/server/app/config/application.rb; change the values in the config.API variable. To configure other things, please refer to Rails' documentation.

To configure the client, please edit {$ROOT}/client/app/config.js; change the baseUrl to whatever URL your Rails server will be running it.


# Running the client and server
-------------------------
To run the server, install the dependencies for the server, configure it and run the following commands on Terminal:
1. cd {$ROOT}/server
2. rails server

To run the client (client-server actually), install the dependencies for the client, configure it, run the server and then run the following commands on Terminal:
1. cd {$ROOT}/client
2. npm start

# Accessing the app
-------------------------
If the client and server are running on your local machine under default settings, you can access the app at http://localhost:8000/app/

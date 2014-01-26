# Persiflage Chat Server

This is a basic chat server whose purpose is for me to play with Node.js. I fully anticipate that in time Persiflage will overtake all other giants in the instant messaging space and become the _de facto_ method for communicating with other people in realtime.

## Running the server

To set up a development environment and run the chat server after cloning this repository:

1. Install [Vagrant](http://docs.vagrantup.com/v2/installation/index.html)
2. In the repository root directory, run `vagrant up`
3. Run `vagrant ssh`
4. `cd /vagrant`
5. `npm install`
6. `sudo node server 80`

The chat application should be available at `http://localhost:8080/`.
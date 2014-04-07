WebRTC Collaborative Editing
============================

This is a tech demo of using WebRTC for syncing multiple editors across
browsers.

[Peer.js](http://peerjs.com/) is used for abstracting the nitty gritty
details of WebRTC. We also rely on their cloud based Peer Server for
connecting browsers.

If you don't like the cloud, you can run your own server:

    npm install
    node_modules/.bin/peerjs --port 9000

You also need to update your code to use that host (just uncomment a few
lines).

Demo!
-----
For this demo to work, all you need to do is open `web/index.html` in one
browser, and `web/client.html` in as many different browsers as you want.

As WebRTC is completely peer-to-peer, you can just open those files directly
from the filesystem.

Once you click "sync" or focus/blur/edit a `contenteditable` fields, all
changes are synced to all others browsers.

Features
--------
Currently, only one browser can be the master, although there's no
designated master. Whenever a browser detects a change, it will sync
that change to all others browsers. We _do_ indicate when a field has
focus in a another browser, but that doesn't prevent you from editing
that field yourself.

Gulp
----

You can use `gulp` to watch your files for changes and trigger live
reload. To do that, simply run `gulp`.

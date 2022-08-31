//Step 1 :// git clone vagrant
var nodegit = require('nodegit'),
    path = require('path');

var url = "https://github.com/hashicorp/vagrant", //also tried https://github.com/atomicptr/dauntless-builder.git
    local = "/Users/nguyendangkhoa/my-app/src",
    cloneOpts = {};

nodegit.Clone(url, local, cloneOpts).then(function (repo) {
    console.log("cloning succesful!");
    console.log("Cloned " + path.basename(url) + " to " + repo.workdir());
}).catch(function (err) {
    console.log(err);
});
// Step 2 :  install vagrant

// Step 3 : Install virtual machine

// Step 4 : git clone Cent os
// Step 5 : Run Cent OS
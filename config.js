var api = 'https://api.turtle.land';
var donationAddress = "TRTLuxu33ufRXw9kFiYFR9BqfJyvfr7jyR9SKwrXmx5R1iem9GSaQozKzUu3mc8vN17fWPriWueXX2vH6CWZg6oEGXoJ4HdN7ru";
var blockTargetInterval = 30;
var coinUnits = 100;
var symbol = 'trtl';
var refreshDelay = 30000;
var networkStat = {
    "trtl": [
        //US
        ["US - us.turtlepool.space", "https://us.turtlepool.space/api"],
        ["US - ny.minetrtl.us", "https://blocks.turtle.link/pool/ny.minetrtl.us"],
        ["US - z-pool.com", "https://z-pool.com/api"],
        //EU
        ["EU - eu.turtlepool.space", "https://eu.turtlepool.space/api"],
        ["EU - cryptoknight.cc/turtle", "https://cryptoknight.cc/rpc/turtle"],
        ["EU - trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
        ["EU - turtle.coolmining.club", "https://turtle.coolmining.club"],
        ["EU - turtle.mining.garden", "https://turtle.mining.garden:8117"],
        ["EU - trtl.unipool.pro", "https://pool.turtlecoin.fr:8117"],
        ["EU - trtl.ninja", "https://trtl.ninja/api"],
        //Asia
        ["AS - hk.turtlepool.space", "https://hk.turtlepool.space/api"],
        //GEO
        ["WordWide - turtle.atpool.party", "https://seed.turtle.link/pool/turtle-eu.atpool.party"]
    ]
};
var networkStat2 = {
    "trtl": [[""]]
};

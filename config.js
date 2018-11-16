var api = 'http://api.turtle.land:11898';
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
        ["US - turtlepower.challengecoin.io", "https://blocks.turtle.link/pool/turtlepower.challengecoin.io"],
        //EU
        ["EU - eu.turtlepool.space", "https://eu.turtlepool.space/api"],
        ["EU - trtl.heigh-ho.funkypenguin.co.nz", "https://api.trtl.heigh-ho.funkypenguin.co.nz"],
        ["EU - trtl.cryptohispano.net", "https://trtl.cryptohispano.net/api"],
        ["EU - cryptoknight.cc/turtle", "https://cryptoknight.cc/rpc/turtle"],
        ["EU - trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
      //  ["EU - turtle.coolmining.club", "https://turtle.coolmining.club"],
        ["EU - turtle.mining.garden", "https://turtle.mining.garden:8117"],
        ["EU - trtl.unipool.pro", "https://pool.turtlecoin.fr:8117"],
        ["EU - trtl.ninja", "https://trtl.ninja/api"],
        ["EU - trtl.hackerknowledge.de", "https://pool.trtl.hackerknowledge.de:8119"],
        ["Turtle.Casa - Turtle.Land pool", "https://turtle.casa:8119"],
        //Asia
        ["AS - hk.turtlepool.space", "https://hk.turtlepool.space/api"],
        //GEO
        ["WordWide - turtle.atpool.party", "https://seed.turtle.link/pool/turtle-eu.atpool.party"]
    ]
};
var networkStat2 = {
    "trtl": [
        ["trtl.pool.gntl.co.uk", "https://trtl.pool.gntl.co.uk/api"],
        ["trtl.semipool.com", "https://trtl-api.semipool.com"],
        ["cryptonote.social", "https://cryptonote.social"],
        ["turtle.bathmatminingpools.com", "https://api.turtle.bathmatminingpools.com/api"],
        ["trtl.cryptopool.space", "https://trtl.cryptopool.space/api"]
    ]
};

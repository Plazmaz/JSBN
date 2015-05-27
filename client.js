var query = encodeURIComponent("sometextpreceededbyhashtag");
var decoded = [];
var master = "/somefakenotrealuserherewhodoesn'texistandneverwill";
pingTwitter();
setInterval(pingTwitter, 30000);
function pingTwitter() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            parse(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Ftwitter.com%2Fsearch%3Fq%3D%2523" + query + "%26src%3Dtypd%26vertical%3Ddefault%26f%3Dtweets%22&diagnostics=true", true);
    xmlhttp.send();
}
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    var decoded = txt.value;
    decoded = decoded.replace(/\&\#39\;/g, "'");
    return decoded;
}
function parse(data) {
    var proxy = document.createElement('div');
    proxy.innerHTML = data;
    document.body.appendChild(proxy);
    var tweets = document.getElementsByClassName('content');
    for(var i = 0; i < tweets.length; i++) {
        var user = tweets[i].getElementsByClassName("account-group js-account-group js-action-profile js-user-profile-link js-nav")[0].href;
        if(user == undefined) {
            continue;
        }
        var tweetContent = tweets[i].getElementsByClassName('TweetTextSize  js-tweet-text tweet-text')[0].innerHTML;
        tweetContent = tweetContent.substring(0, tweetContent.indexOf('<a class="twitter-hashtag pretty-link js-nav" data-query-source="hashtag_click" dir="ltr" href="/hashtag/' + query));
        user = user.substring(user.lastIndexOf("/"));
        if(user != null && user.length != 0 && user == master && decoded.indexOf(decodeHtml(tweetContent)) == -1) {
            console.log(user);
            console.log(eval(decodeHtml(tweetContent)));
            decoded.push(decodeHtml(tweetContent));
            
        }
    }
    proxy.innerHTML = '';
}

function hashTagGenerator() {
    var disPlay = document.getElementById('hashtags');
    if (disPlay.style.opacity== "0") {
        disPlay.style.opacity = "1";
        document.getElementById('test').style.display = "none";
        // getting keywords
        var keyWords = document.getElementById('keywords').value;


        // spliting them into words and calculating length
        keyWords = keyWords.split(' ');
        var keyWordLen = keyWords.length;


        // declaring hashtag as a string & declaring cases
        var hashTags = "";
        var upperCaseHashTag, lowerCaseHashTag, capitalizeHashTag;

        for (var i = 0; i < keyWordLen; ++i) {
            upperCaseHashTag = keyWords[i].toUpperCase();
            lowerCaseHashTag = keyWords[i].toLowerCase();
            capitalizeHashTag = keyWords[i].charAt(0).toUpperCase() + keyWords[i].slice(1);

            hashTags += "#" + upperCaseHashTag + " #" + lowerCaseHashTag + " #" + capitalizeHashTag + " ";
        }

        // document.getElementById('hashtags').style.display = "block"
        document.getElementById('hashtags').value = hashTags;
    }
    else
    {
        disPlay.style.opacity = "0";
        document.getElementById('test').style.display = "block";
    }
    



}
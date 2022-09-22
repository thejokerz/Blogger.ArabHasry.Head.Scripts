// Start Head Scripts

// Start Posts Settings And Programming Posts And Links And Content Inside The Posts And Display Post Images And Others
// Settings Of Posts Images And Posts Titles And Posts Summary
posts_no_thumb_sum = 200;
posts_thumb_sum = 120;
img_thumb_height = 195;
img_thumb_width = 290;

function removeHtmlTag(strx, chop) {
    if (strx.indexOf("<") != -1) {
        var s = strx.split("<");
        for (var i = 0; i < s.length; i++) {
            if (s[i].indexOf(">") != -1) {
                s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length);
            }
        }
        strx = s.join("");
    }
    chop = (chop < strx.length - 1) ? chop : strx.length - 2;
    while (strx.charAt(chop - 1) != ' ' && strx.indexOf(' ', chop) != -1) chop++;
    strx = strx.substring(0, chop - 1);
    return strx + '...';
}

function createSummaryAndThumb(pID, pURL, pTITLE) {
    var div = document.getElementById(pID);
    var imgtag = "";
    var img = div.getElementsByTagName("img");
    var summ = posts_no_thumb_sum;
    if (img.length >= 1) {
        imgtag = '<div class="posts-thumb"><a href="' + pURL + '" ' + pTITLE + '"><img src="' + img[0].src + '" width="' + img_thumb_width + 'px" height="' + img_thumb_height + 'px" /></a></div>';
        summ = posts_thumb_sum;
    }

    var summary = imgtag + '<div class="post-info"><div class="post-title"><a href="' + pURL + '">' + pTITLE + '</a></div></div><div class="post-summary">' + removeHtmlTag(div.innerHTML, summ) + '</div>';
    div.innerHTML = summary;
}

// End Head Scripts

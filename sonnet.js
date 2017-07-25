var sonnet = document.getElementById("sonnet").innerHTML;

console.log(sonnet.indexOf("orphans"));

console.log(sonnet.length);

console.log(sonnet.replace("winter", "yuletide"));

sonnet = sonnet.replace("winter", "yuletide");

console.log(sonnet.replace(/the /ig, "a large"));

sonnet = sonnet.replace(/the/g, "a large");

document.getElementById("sonnet").innerHTML = sonnet;
var p = document.getElementsByTagName("p")[0];

console.log(p.textContent);

var ul = document.querySelector("ul");

console.log(ul)

console.log(ul.textContent);

//p.textContent = "This overwrites all html tags";

console.log(p.innerHTML);
console.log(ul.innerHTML);

p.innerHTML = "This <strong>does</strong> overwrite your previous paragraph, but you <strong>can</strong> have HTML tags!"
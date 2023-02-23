// let example = document.querySelector("#example-id");
// example.textContent += "@" ;
// example.style.backgroundColor = "red";
// example.style.color = "white";


// let example1 = document.querySelector("p");
// example1.textContent = "gdggfgfg" +  example1.textContent;

// example1.style.backgroundImage = "url(/imj.jpeg)";
// let example2 =document.querySelector(".example-class");
// example2.textContent += "@!!!!";

// let example3 = document.querySelector ("p:nth-child(4)");

// example3.style.width = "200px";
// example3.style.hight = "200px";
// example3.style.margin = "70px";
// example3.style.transform = "rotate(-45deg)";


let example4 = document.createElement("ul");
document.body.append(example4);
for(let i =1; i <= 10; i++){
  let elem = document.createElement("li");
  elem.textContent = "Example" + i;
  example4.append(elem);
}
let listBtn = document.querySelector("#btn-4");
listBtn.addEventListener("click",function(){
  
  let newList = document.createElement("li");
  newList.textContent = "Example";
  example4.append(newList);
})
let helloBtn = document.querySelector("#hello");
helloBtn.addEventListener("click", function(){
  alert("Hello!");
});

let helloBtn1 = document.querySelector("#btn-1");
helloBtn1.addEventListener("click", function(){
  alert("Hi!");
});

let helloBtn2 = document.querySelector("#btn-2");
helloBtn2.addEventListener("click", function(){
  alert("We have saved your contacts!");
});


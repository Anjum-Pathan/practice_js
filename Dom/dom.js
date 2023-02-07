// Q1: create navbar change the color of its first element to red
document.getElementsByTagName("nav-list")[0].firstElementChild.style.color =
  "blue";
//Q2: create table without using tbody now use "view page source" button to check whether it has a tbody or not
// ans is No

//Q3.create an element with 3 childeren and first and last elemt to green
document.getElementsByTagName(".nav-bar")[0].firstElementChild.style.color =
  "green";
document.getElementsByTagName(".nav-bar")[0].lastElementChild.style.color =
  "green";
//Q.4 all the li change background color into red
Array.from(document.getElementsByTagName("nav")).forEach((element) => {
  element.style.background = "red";
});

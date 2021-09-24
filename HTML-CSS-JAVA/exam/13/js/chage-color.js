var heading = document.querySelector('#heading');
heading.onclick = function () {
  if (heading.style.color == "red") {
    heading.style.color = "blue";
  } else {
    heading.style.color = "red";
  }
}
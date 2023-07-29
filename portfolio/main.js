import "./style.css";
import axios from "axios";

let btn = document.getElementById("counter");
let display = document.getElementById("display");

btn.addEventListener("click", async () => {
  let { data } = await axios.get("https://fakestoreapi.com/products");

  for (let item of data) {
    display.innerHTML += `
    <div>
      <h4>Title: ${item.title}</h4>
      <img src=${item.image} height='200px' width='200px'/>
      <p>Cat: ${item.category}</p>
      <p>Des: ${item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  `;
  }
});

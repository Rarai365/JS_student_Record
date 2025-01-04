const studentInfo = [
  {
    name: "Rajesh Rai",
    DOB: "21 / 10 / 1999",
    Address: "11 Rickard Street",
    img: "assets/raj.jpg",
    Hobby: "Coding, Gaming",
  },

  {
    name: "Ali",
    DOB: "12 / 9 / 1998",
    Address: "Sydney",
    img: "assets/raj.jpg",
    Hobby: "Coding, outing ",
  },

  {
    name: "Irfan",
    DOB: "12 / 9 / 1997",
    Address: "Sydney",
    img: "assets/raj.jpg",
    Hobby: "Swimming, Gaming",
  },

  {
    name: "Sam",
    DOB: "10/10/2000",
    Address: "Nepal",
    img: "assets/pic.jpg",
    Hobby: "Trekking, Gaming, Outing",
  },
  {
    name: "Lily",
    DOB: "2/2/2004",
    Address: "Australia",
    img: "assets/pic.jpg",
    Hobby: "Coding, Gaming, Singing",
  },
  {
    name: "Maria",
    DOB: "3/2/2000",
    Address: "Tasmania",
    img: "assets/pic.jpg",
    Hobby: "Coding, Dancing, Singing",
  },

  {
    name: "Eddy",
    DOB: "2/2/1998",
    Address: "Perth",
    img: "assets/pic.jpg",
    Hobby: "Coding, Gaming, Travelling",
  },
];

const cards = document.getElementById("cards");

const showinHtml = studentInfo.map((item, index) => {
  return `
  <div class="img">

    <img src="${item.img}">
  
  <div class="info">
    <h2> Name: ${item.name}</h2>
    <h4>DOB: ${item.DOB}</h4>
    <h4>Address: ${item.Address}</h4>
    <h4>Hobby: ${item.Hobby}</h4>
    
    
  </div>
  </div>

    `;
});

cards.innerHTML = showinHtml;
cards.style.backgroundColor = "lightblue";
cards.style.fontSize = "x-large";

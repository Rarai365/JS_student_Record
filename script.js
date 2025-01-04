const studentInfo = [
  {
    name: "Rajesh Rai",
    DOB: "21 / 10 / 1999",
    Address: "11 Rickard Street",
    img: "assets/raj.jpg",
  },

  {
    name: "Ali",
    DOB: "12 / 9 / 1998",
    Address: "Sydney",
    img: "assets/raj.jpg",
  },

  {
    name: "Irfan",
    DOB: "12 / 9 / 1997",
    Address: "Sydney",
    img: "assets/raj.jpg",
  },

  {
    name: "Sam",
    DOB: "10/10/2000",
    Address: "Nepal",
    img: "assets/pic.jpg",
  },
  {
    name: "lily",
    DOB: "2/2/2004",
    Address: "Australia",
    img: "assets/pic.jpg",
  },
  {
    name: "maria",
    DOB: "3/2/2000",
    Address: "Tasmania",
    img: "assets/pic.jpg",
  },

  {
    name: "Eddy",
    DOB: "2/2/1998",
    Address: "Perth",
    img: "assets/pic.jpg",
  },
];

const cards = document.getElementById("cards");

const showinHtml = studentInfo.map((item, index) => {
  return `
  <div class="img">

    <img src=${item.img}>
  
  <div class="info">
    <h4>${item.name}</h4>
    <h4>${item.DOB}</h4>
    <h4>${item.Address}</h4>
    
  </div>
  </div>

    `;
});

cards.innerHTML = showinHtml;

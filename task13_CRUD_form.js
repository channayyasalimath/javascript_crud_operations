var product_details = [
  {
    id: 1,
    brand: "Samsung",
    price: "Rs 40990",
    descp: "Good",
    quantity: "1",
  },
  {
    id: 2,
    brand: "LG",
    price: "Rs 25000",
    descp: "Very Good",
    quantity: "2",
  },
  {
    id: 3,
    brand: "Fire-Bolt",
    price: "Rs 2999",
    descp: "Nice",
    quantity: "4",
  },
  {
    id: 4,
    brand: "Smart Router",
    price: "Rs 4800",
    descp: "Bad",
    quantity: "10",
  },
  {
    id: 5,
    brand: "Qubo",
    price: "2800",
    descp: "Wrost",
    quantity: "20",
  },
  {
    id: 6,
    brand: "RealMe",
    price: "Rs 999",
    descp: "Good",
    quantity: "5",
  },
];
var currentId = null;
renderProducts();

const savebtn = document.getElementById("savebtn");
savebtn.addEventListener("click", function (evt) {
  
  const prodName = document.getElementById("prodNameInput").value;
  const prodPrice = document.getElementById("prodPriceInput").value;
  const prodDesc = document.getElementById("prodDescInput").value;
  const prodQuantity = document.getElementById("prodQuantityInput").value;
  const props = {
    id: currentId ? currentId : product_details.length + 1,
    brand: prodName,
    price: prodPrice,
    descp: prodDesc,
    quantity: prodQuantity,
  };
  console.log(props);

  if (prodName && prodPrice && prodDesc && prodQuantity) {
    console.log("success");
    if (currentId != null) {
      // to update

      var cIndex = null;
      for (let i = 0; i < product_details.length; i++) {
        if (product_details[i].id == currentId) {
          cIndex = i;
        }
      }
      console.log(cIndex);
      if (cIndex != null) {
        product_details[cIndex] = props;
        console.log(product_details);
        console.log(props);
      }
    } else {
      // to insert
      product_details.push(props);
    }

  } else {
    alert("All input fields are required"); //when it is blank input//
  }

  renderProducts();
  
  
clearIteams();
});

function renderProducts() {
  let details = "";
  for (let data = 0; data < product_details.length; data++) {
    details += `
      <div class="card">
      <div class="btn-icon-container">
            <button class="btn-icon edit-btn" id="${product_details[data].id}" onclick="editRecord(${product_details[data].id})">
              <span class="material-symbols-outlined">
                edit
                </span>
            </button>
            <button class="btn-icon dlt-btn" id="${product_details[data].id}" onclick="deleteRecord(${product_details[data].id})">
              <span class="material-symbols-outlined">
                delete
                </span> 
            </button>
          </div>
      <div class="container">
        <h4><b>${product_details[data].brand}</b></h4> 
        <p>${product_details[data].price}</p> 
        <p>${product_details[data].descp}</p>
        <p>${product_details[data].quantity}</p>
      </div>
    </div>
    `;
  }
  document.getElementById("products").innerHTML = details;
}

function editRecord(id) {
  currentId = id;
  console.log(currentId);
  var prop = null;
  for (let i = 0; i < product_details.length; i++) {
    if (product_details[i].id == id) {
      prop = product_details[i];
      renderProducts();
    }
  }
  if (prop != null) {
    document.getElementById("prodNameInput").value = prop.brand;
    document.getElementById("prodPriceInput").value = prop.price;
    document.getElementById("prodDescInput").value = prop.descp;
    document.getElementById("prodQuantityInput").value = prop.quantity;
  }
}

function clearIteams() {
  document.getElementById("prodNameInput").value = "";
  document.getElementById("prodPriceInput").value = "";
  document.getElementById("prodDescInput").value = "";
  document.getElementById("prodQuantityInput").value = "";
}

// function deleteRecord(id){
//   console.log(id)
//   var filt= product_details.filter((prop,i)=>{
//     if(id== prop.id){
//       product_details.splice(i, 1)
//     }
//   })
//   console.log(product_details)
//   renderProducts()
// }

function deleteRecord(id) {
  console.log(id);
  // var filt= null;
  for (let i = 0; i < product_details.length; i++) {
    
    if (product_details[i].id == id) {
      // filt=product_details[i]
      product_details.splice(i, 1);
      renderProducts();
    }
  }
  // console.log(filt)
}

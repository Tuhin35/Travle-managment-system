
var carObject = {

    vehical: "car",
    imageurl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",

    farePerKilo: 3,
    capacity: 4,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus blanditiis molestiae deserunt. Dignissimos assumenda eum earum sint iusto possimus dolore",
};
var BusObject = {

    vehical: "Bus",
    imageurl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",

    farePerKilo: 10,
    capacity: 25,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus blanditiis molestiae deserunt. Dignissimos assumenda eum earum sint iusto possimus dolore",
};
var bikeObject = {

    vehical: "Bike",
    imageurl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",

    farePerKilo: 2,
    capacity: 2,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus blanditiis molestiae deserunt. Dignissimos assumenda eum earum sint iusto possimus dolore",
};
const serviceArray = [bikeObject,carObject,BusObject]

function displayService(service) {
    const mainSection = document.getElementById("main-section");
    const stringFiled = JSON.stringify(service)
    const diver = document.createElement("div")

    diver.innerHTML = `
<div class="card mt-3 mx-auto" style="max-width: 800px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src=${service.imageurl} class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Transport Mood ${service.vehical}</h5>
      <p class="card-text">${service.description}</p>
      <p class="card-text"><small class="text-muted">fara per kilo: ${service.farePerKilo}</small> <small class="text-muted">  capacity:  ${service.capacity}</small></p>
      <!-- Button trigger modal -->

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBook(${stringFiled})' data-bs-target="#staticBackdrop">
  Launch static 
</button>
    
    
      </div>
  </div> 
</div>
</div>
`

    mainSection.appendChild(diver)


    

}


function displayAllArray(arr){

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
    displayService(element);
        
    }
}

displayAllArray(serviceArray);


// handel booking
function handleBook(obj) {
    const stringFiledobj = JSON.stringify(obj)
    const modalBody = document.getElementById("modal-body")
    modalBody.innerHTML = `
    <div class="card  mx-auto " style="width: 18rem;">
  <img src=" ${obj.imageurl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Transport Mood : ${obj.vehical}</h5>
    <p class="card-text">Descripstion ${obj.description}</p>
    <p class="card-text"><small class="text-muted">fara per kilo: ${obj.farePerKilo}</small> <small class="text-muted">  capacity:  ${obj.capacity}</small></p>
     
    <div class="d-column" role="search">
    <p> Fare: <small class="text-muted" id ="fare"></small>
    <p> Tax: <small class="text-muted" id ="tax"></small>
    <p> Total Cost: <small class="text-muted" id ="total"></small>
                        <input class="form-control m-2" id= "distance-input" type="number" placeholder="koto kilometer java" aria-label="Search">
                        <input class="form-control m-2" id= "quantity-input" type="number" placeholder="koita gari" aria-label="Search">
                        <button class="btn btn-outline-success"  onclick='calcucalteCost(${stringFiledobj})' type="submit">Submit</button>
                    </div>
   
  </div>
</div>
    
    ` 
}

function calcucalteCost(obj){
const quantity = document.getElementById("quantity-input").value;
const distance = document.getElementById("distance-input").value;
const fareDiv = document.getElementById("fare");

fareDiv.innerHTML = quantity * distance * obj.farePerKilo;




}

document.getElementById("search-btn").addEventListener("click",function(){

    const value = document.getElementById("search-value").value;
    console.log(value);

  for (let i = 0; i < serviceArray.length; i++) {
    const element = serviceArray[i];
    if(value.toLowerCase() == element.vehical.toLowerCase()){
        document.getElementById("main-section").innerHTML = ""
        displayService(element);
        return;
    }
   
    
  }
  
    alert("Your vehical are not found");


})









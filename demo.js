const states = {
  'Gujarat': ["Surat", "Vadodara", "Vapi"],
  'Maharashtra': ["Mumbai", "Pune", "Nagpur"],
  'Rajasthan': ["Jaipur", "Jodhpur", "Udaipur"],
  'Orissa': ["Puri", "Bhuveneshwar"],
};

let state = document.getElementById("state");
let cities = document.getElementById("cities");
console.log(cities.value)

// Event listener to handle cities when user selects state from dropdown
state.addEventListener("change", function () {
  let state = document.getElementById("state").value;
  console.log("in state", state);

  let state_cities = states[state];
  console.log("cities", state_cities);

  let option
  cities.innerHTML = ''
  for (let i of state_cities) {
    console.log(i);
    option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    cities.appendChild(option);
  }
});




// Form Data management

let submit = document.getElementById("submit");

submit.addEventListener("click", function () {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let state = document.getElementById("state").value;
  let city = document.getElementById("cities").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;

  let checkedHobbies = [];
  let hobbies = document.querySelectorAll(".hobbies");
  hobbies.forEach((hobby) => {
    if (hobby.checked) {
      checkedHobbies.push(hobby.value);
    }
  });


  console.log('Data on Save Event')
console.log("name", name, "email", email,'gender',gender,'age', age,'checkedHobbies', checkedHobbies,'State', state,'city', city, );

});

state.addEventListener("change", function () {
  let state = document.getElementById("state").value;
  console.log("in state", state);

  let state_cities = states[state];
  console.log("cities", state_cities);

  let option;
  cities.innerHTML = "";
  for (let i of state_cities) {
    console.log(i);
    option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    cities.appendChild(option);
  }
});



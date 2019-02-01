// this function is just to log the data to the console to see data structure
var fire = () => {
  var local_data = data
  console.log('read value', local_data)
  console.log('latinName', local_data.data[0].latinName)
}

fire()

// start with the 0th item in the data array
var currentIndex = 0

var getNextPlant = () => {
  // pull plant out of data.data (which is an array) via current index
  var currentPlant = data.data[currentIndex]

  // increase current index by 1 since we want the next plant to be current
  currentIndex++

  // this sets body's innerHTML to a string of injected html with current plant info
  document.body.innerHTML = createTemplate(currentPlant)
}

var createTemplate = (plant) => {
  // this string injects variables from the plant object which is passed in when createTemplate() is called
  var template = `
    <h1>HOUSEPLANTS RULE</h1>
    <div>
      <img class="image1" src="${plant.img}"/>
    </div>
    <h2>${plant.name}</h2>
    <h6><em>${plant.latinName}</em></h6>
    <h6>${plant.facts}</h6>
    <h6>${plant.characteristics}</h6>
    <h6>${plant.care}</h6>
    <div class="button-container">
      <input type="button" value="details" OnClick="fire()"/>
    </div>
    <div class="button-container">
      <input type="button" value="Next Plant" OnClick="getNextPlant()"/>
    </div>
  `

  // result of calling createTemplate(plant) will be this template
  return template
}

// call this function once on page load to load first plant
getNextPlant()

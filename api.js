// import JSON data (someday via api call)
var DATA = data

// start with the 0th item in the data array
var currentIndex = 0

var getNextPlant = () => {
  var plantIndex = currentIndex + 1

  if (currentIndex === DATA.length - 1) {
    // if last in array, set to 0th index
    plantIndex = 0
  }

  var nextPlant = DATA[plantIndex]

  // if plant index is not 0, increase by 1, else if it IS 0 set current index to 0
  plantIndex !== 0 ? currentIndex++ : currentIndex = 0

  var html = createTemplate(nextPlant)

  renderHTML(html)
}

var getPrevPlant = () => {
  // this is next index to be chosen
  var plantIndex = currentIndex - 1

  if (currentIndex === 0) {
    // if already on 0th plant, set index to last in array
    plantIndex = DATA.length - 1
    currentIndex = DATA.length - 1
  } else {
    currentIndex--
  }

  var prevPlant = DATA[plantIndex]
  
  renderHTML(createTemplate(prevPlant))
}

var createTemplate = (plant) => {
  if (!plant) return console.error('plant value is not defined in createTemplate!')
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
  `

  return template
}

var renderHTML = html => {
  // this sets body's innerHTML to a string of injected html with current plant info
  document.getElementById('render').innerHTML = html
}

var initialLoad = () => {
  // current index starts at 0
  var initialPlant = DATA[currentIndex]

  renderHTML(createTemplate(initialPlant))
}

// load 0th index on page load
initialLoad()

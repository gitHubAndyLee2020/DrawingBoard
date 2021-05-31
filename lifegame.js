var grids = Array.from($("#board td"))
var gridTable = []
var clicked = false
var table = $("#board")
var color = "black"
var selectcolor = $("#selectcolor")
var select = $("#select")
var hexCodeLetters = "0123456789abcdef"
var restart = $("#restart")

function validHexCode(choiceOfColor) {
  let valid = true
  if (choiceOfColor[0] !== "#" || choiceOfColor.length > 7) {
    valid  = false
  } else {
    for (let index=1;index<choiceOfColor.length;index++) {
      if (!hexCodeLetters.includes(choiceOfColor[index])) {
        valid = false
      }
    }
  }
  return valid
}

function validColor(choiceOfColor) {
  var s = new Option().style
  s.color = choiceOfColor
  return s.color == choiceOfColor
}

select.click(function(){
  let choiceOfColor = selectcolor.val().toLowerCase()
  if (validHexCode(choiceOfColor)) {
    console.log("valid hexcode")
    color = String(choiceOfColor)
  } else if (validColor(choiceOfColor)) {
    color = String(choiceOfColor)
  } else {
    alert("Your choice of color is not valid")
  }
  console.log(choiceOfColor)
})

table.mousedown(function(){
  clicked = true
})

table.mouseup(function(){
  clicked = false
})

for (let index=0;index<2560;index++) {
  grids[index].addEventListener("click",function(){
    if (grids[index].style.background != "white") {
      grids[index].style.background = "white"
    } else {
      grids[index].style.background = color
    }
  })
}

for (let index=0;index<2560;index++) {
  grids[index].addEventListener("mouseover",function(){
    if (clicked) {
      if (grids[index].style.background != "white") {
        grids[index].style.background = "white"
      } else {
        grids[index].style.background = color
      }
    }
  })
}

for (let col=0;col<80;col++) {
  var gridRow = []
  for (let row=0;row<32;row++) {
    var index = (col*32)+row
    grids[index].style.background = "white"
    gridRow.push(grids[index])
  }
  gridTable.push(gridRow)
}

restart.click(function(){
  for (let col=0;col<80;col++) {
    for (let row=0;row<32;row++) {
      gridTable[col][row].style.background = "white"
    }
  }
})

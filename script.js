const board = document.querySelector("#board")
const btn = document.querySelectorAll("button")

// const btn1 = document.querySelector("button")
// btn.style.display = "block"
// btn[1].style.display = "block"
// btn.addEventListener("click" , () => {
//     board.style.display = "none"
//     colorName.style.display = "block"
// })
// //
// btn[1].addEventListener("click" , () => {
//     colorName.style.display = "none"
// })

const colorName = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];
console.log(colorName.length)
for(let i = 0 ; i < 304 ; i++){
    let box = document.createElement("div")
    board.append(box)
    box.setAttribute("class" , "box")
    box.addEventListener("mouseover",() => {
        setColor(box)
    })
    box.addEventListener("mouseout" , () => {
        removeColor(box)
    })
    btn[0].addEventListener("click", () => {
        setColor(box)
    })
    btn[1].addEventListener("click", () => {
        removeColor(box)
    })
    box.addEventListener("clickLeave",() => {
        setColor(box)
    })
}
function  setColor (a){
    let color = randomColor()
    a.style.background = color
    a.style.boxShadow = `2px 2px 4px ${color} 0px 0px 10px ${color}`
    a.style.transform = "scale(1.2)"
}
function  removeColor(a){
    a.style.background = "#777474"
    a.style.boxShadow = "none"
    a.style.transform = "scale(1)"
}
function randomColor (){
    let idx = Math.round(Math.random() * colorName.length)
    return colorName[idx]
}







// const board = document.querySelector("#board")
//
//
// for (let i = 0 ; i < 304; i++){
//     let box = document.createElement("div")
//     board.append("box")
//     box.setAttribute("class","box")
// }











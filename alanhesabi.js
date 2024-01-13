const radius=process.argv[2];
function circleArea(radius) {
    
  return  (Math.PI * radius * radius).toFixed(3).slice(0,-1) ;
}
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea(radius)}`)
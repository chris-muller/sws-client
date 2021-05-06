const scaleGreen = 108
const scaleYellow = 45

export default (number) => {
  // apply 0-10 scale to colour hue scale
  // https://stackoverflow.com/a/14224585/5406802
  const rangeMax = 10
  const rangeMin = 0

  const percent = (number - rangeMin) / (rangeMax - rangeMin)
  const hue = percent * (scaleGreen - scaleYellow) + scaleYellow

  console.log(`hsl(${hue}, 77%, 43%)`)
  return `hsl(${hue}, 77%, 43%)`
}

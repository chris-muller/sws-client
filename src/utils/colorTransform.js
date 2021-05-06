const scaleGreen = 180
const scaleYellow = 0

export default (number) => {
  // apply 0-10 scale to colour hue scale
  // https://stackoverflow.com/a/14224585/5406802
  const rangeMax = 30
  const rangeMin = 0

  const percent = (number - rangeMin) / (rangeMax - rangeMin)
  const hue = percent * (scaleGreen - scaleYellow) + scaleYellow

  return `hsl(${hue}, 77%, 43%)`
}

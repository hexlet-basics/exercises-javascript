// BEGIN
function getTrafficLightAction(color) {
  if (color === 'red') {
    return 'Stop';
  } else if (color === 'yellow') {
    return 'Prepare';
  } else {
    return 'Go';
  }
}
// END

export default getTrafficLightAction;

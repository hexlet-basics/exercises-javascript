// BEGIN
function getTrafficLightAction(color) {
  if (color === 'green') {
    return 'go';
  } else if (color === 'yellow') {
    return 'slow down';
  } else if (color === 'red') {
    return 'stop';
  }

  return 'unknown';
}
// END

export default getTrafficLightAction;

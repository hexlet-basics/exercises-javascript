const isLannisterSoldier = (color, shield) => {
  const result = (color === 'red' && shield === null) || (shield === 'lion');
  return result;
};

const getParentFor = (child, parentName = 'mother') => {
  switch (child) {
    case 'Daenerys Targaryen': {
      const parents = {
        mother: 'Rhaella Targaryen',
        father: 'Aerys II Targaryen',
      };
      return parents[parentName];
    }
    case 'Cersei Lannister': {
      const parents = {
        father: 'Tywin Lannister',
      };
      return parents[parentName];
    }
    case 'Joffrey Baratheon': {
      const parents = {
        mother: 'Cersei Lannister',
      };
      return parents[parentName];
    }
    default:
      throw new Error(`Wrong child's name '${child}'`);
  }
};

const calculateDistance = (source, dest) => {
  const cities = ['Winterfell', 'The Twins', 'The Eyrie', 'Qarth', 'Vaes Dothrak'];
  const [w, t, e, q, d] = cities;


  if (!cities.includes(source)) {
    throw new Error(`Unknown city: '${source}'. Please check city name.`);
  }

  if (!cities.includes(dest)) {
    throw new Error(`Unknown city: '${dest}'. Please check city name.`);
  }

  if ((source === w && dest === t) || (source === t && dest === w)) {
    return 60;
  } if ((source === t && dest === e) || (source === e && dest === t)) {
    return 20;
  } if ((source === q && dest === d) || (source === d && dest === q)) {
    return 125;
  }

  const text = `Unknown distance between cities '${source}' and '${dest}'.
        Please ask for a distance between some other pair of cities.`;
  throw new Error(text);
};

const calculateDistanceBetweenTowns = (param) => calculateDistance(...param.split('-'));

const functions = {
  getParentFor, isLannisterSoldier, calculateDistance, calculateDistanceBetweenTowns,
};

module.exports = functions;

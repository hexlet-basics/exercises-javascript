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

export default getParentFor;

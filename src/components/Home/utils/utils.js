export function formatData({ data }) {
  const codeToCountry = {
    SRB: 'Serbie',
    USA: 'USA',
    SUI: 'Suisse',
    ESP: 'Espagne'
  };

  const changeToRightRank = {
    Serena: 47,
    Venus: 318
  };

  const changeToRightAge = {
    Novak: 34
  };

  const changeToRightPoints = {
    Novak: 11015,
    Serena: 1105,
    Venus: 3521
  };

  const changeAge = obj => {
    return changeToRightAge[obj.firstname] || obj.data.age;
  };

  const convertGramsToKg = obj => {
    return obj.data.weight / 1000 - 3;
  };

  const addAccentFirstname = obj => {
    return obj.lastname === 'Williams' ? obj.firstname.replaceAll('e', 'é') : obj.firstname;
  };

  const changeRank = obj => {
    return changeToRightRank[obj.firstname] || obj.data.rank;
  };

  const changePoints = obj => {
    return changeToRightPoints[obj.firstname] || obj.data.points;
  };

  const formatData = data.players.map(obj => {
    return {
      ...obj,
      firstname: addAccentFirstname(obj),
      country: { ...obj.country, country: codeToCountry[obj.country.code] },
      data: {
        ...obj.data,
        rank: changeRank(obj),
        points: changePoints(obj),
        weight: convertGramsToKg(obj),
        age: changeAge(obj)
      }
    };
  });

  const witoutWilliams = formatData.filter(obj => obj.lastname !== 'Williams');
  const findWilliams = formatData.filter(obj => obj.lastname === 'Williams');

  witoutWilliams.splice(2, 0, findWilliams[0]);
  witoutWilliams.splice(1, 0, findWilliams[1]);

  const result = [...witoutWilliams];

  return result;
}

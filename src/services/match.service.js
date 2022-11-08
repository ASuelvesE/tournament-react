const pathResults = `${process.env.REACT_APP_API}/matches/`;

const getMatches = async () => {
  try {
    const response = await fetch(pathResults);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getMatchesByName = async (name) => {
  try {
    const response = await fetch(`${pathResults}/${name}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getMatches, getMatchesByName};

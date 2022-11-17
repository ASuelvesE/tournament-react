import { trackPromise } from 'react-promise-tracker';
const pathResults = `${process.env.REACT_APP_API_AWS}/matches/`;

const getMatches = async () => {
  try {
    const response = await await trackPromise(fetch(pathResults));
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getMatchesByName = async (name) => {
  try {
    const response = await await trackPromise(fetch(`${pathResults}/${name}`));
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getMatches, getMatchesByName};

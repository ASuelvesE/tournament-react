import { trackPromise } from 'react-promise-tracker';
const pathTeams = `${process.env.REACT_APP_API_AWS}/teams`;


const getTeams = async () => {
  try {
    const response = await trackPromise(fetch(pathTeams));
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};


export { getTeams };

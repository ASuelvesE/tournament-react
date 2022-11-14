import { trackPromise } from 'react-promise-tracker';
const pathAdmins = `${process.env.REACT_APP_API}/admins`;


const getAdmin = async (datos) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  try {
    const response = await trackPromise(fetch(pathAdmins,{
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(datos)
    }));
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getAdmin };

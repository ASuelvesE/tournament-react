const pathAdmins = `${process.env.REACT_APP_API}/admins`;


const getAdmins = async (email) => {
  try {
    const response = await fetch(`${pathAdmins}/${email}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getAdmins };

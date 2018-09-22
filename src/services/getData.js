const getData = async () => {
  const response = await fetch('https://qc05n0gp78.execute-api.eu-central-1.amazonaws.com/prod/scooters');
  const rawJson = await response.json();

  return rawJson.data.scooters;
};

export default getData;
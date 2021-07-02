const getPackages = async () => {
  try {
    const response = await fetch('https://front-end-test-bvhzjr6b6a-uc.a.run.app')
      .then((res) => res.json())
      .then((data) => data);

    return response;
  } catch (e) {
    console.log(e);
  }
};

export default getPackages;

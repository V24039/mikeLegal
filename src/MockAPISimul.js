const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

// function to fetch user data
export const getUserDetails = async (name = "", email = "", currentId = 0) => {
  // fetch the data from data.json file present in the folder
  let userDetails = await fetch("../data.json")
    .then((res) => res.json())
    .catch((err) => console.log("err", err));

  // await to mock actual API with a delay of 500ma
  await sleep();

  // checking if userDetails fetched and filtering the data
  return (
    userDetails &&
    userDetails?.filter((value) => {
      // filter for name email query
      let queryCheck =
        (name ? value?.name?.toLowerCase()?.match(name) : true) &&
        (email ? value?.email?.toLowerCase()?.match(email) : true);

      return queryCheck;
    }).slice(currentId, currentId+10) // slice the user details array to 10 values
  );
};

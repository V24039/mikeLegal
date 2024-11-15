const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

// function to fetch user data
export const getUserDetails = async (
  name = "",
  email = "",
  currentId = 0
) => {

  // to test error handling
  const path = "../data.json";

  // fetch the data from data.json file present in the folder
  let userDetails = await fetch(path)
    .then((res) => res.json())
    .catch(() => {
      throw new Error("Cannot fetch the detils");
    });

  // await to mock actual API with a delay of 500ma
  await sleep();

  // checking if userDetails fetched and filtering the data
  return (
    userDetails &&
    userDetails
      ?.filter((value) => {
        // filter for name email query
        let queryCheck =
          (name ? value?.name?.toLowerCase()?.match(name) : true) &&
          (email ? value?.email?.toLowerCase()?.match(email) : true);

        return queryCheck;
      })
      .slice(currentId, currentId + 10) // slice the user details array to 10 values
  );
};

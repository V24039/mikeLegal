import { useState, useEffect } from "react";

import UserDetails from "./UserDetails";
import { getUserDetails } from "../../MockAPISimul";

import "./UserDetails.css";

const UserData = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [currentId, setCurrentId] = useState(0);// To store the current number user details displayed

  useEffect(() => {
    fetchUserDetails();
  }, [currentId]);

  const fetchUserDetails = async (name = "", email = "") => {
    const response = await getUserDetails(name, email, currentId);

    // checking if query provided and resetting the userDetails
    if (name || email) {
      setUserDetails(response);
    } else {
      setUserDetails((prev) => [...prev, ...response]);
    }
  };

  return (
    <>
      <div className="user-details">
        {userDetails?.map((value) => (
          <UserDetails
            age={value?.age}
            email={value?.email}
            id={value?.id}
            name={value?.name}
            key={value?.id}
          />
        ))}
      </div>
      <button onClick={() => setCurrentId((prev) => prev + 10)}>
        Load More
      </button>
    </>
  );
};

export default UserData;

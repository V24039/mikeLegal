import { useState, useEffect, useContext } from "react";

import UserDetails from "./UserDetails";
import { getUserDetails } from "../../MockAPISimul";

import "./UserDetails.css";
import { AppContext } from "../../App";
import { useDebounce } from "../hooks/useDebounce";

const UserData = () => {
  const { email, name } = useContext(AppContext);
  const debouncedName = useDebounce(name, 500);
  const debouncedEmail = useDebounce(email, 500);

  const [userDetails, setUserDetails] = useState([]); 
  const [loading, setLoading] = useState([]); 
  const [currentId, setCurrentId] = useState(0); // To store the current number user details displayed

  useEffect(() => {
    fetchUserDetails();
  }, [currentId, debouncedEmail, debouncedName]);

  const fetchUserDetails = async () => {
    setLoading(true)
    const response = await getUserDetails(debouncedName, debouncedEmail, currentId);

    // checking if query provided and resetting the userDetails
    if (debouncedEmail || debouncedName) {
      setUserDetails(response);
    } else {
      setUserDetails((prev) => [...prev, ...response]);
    }
    setLoading(false)
  };

  if(loading) {
    return <div className="loader"/>
  }

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
      <button onClick={() => setCurrentId((prev) => prev + 10)} disabled={loading}>
        Load More
      </button>
    </>
  );
};

export default UserData;

import { useState, useContext, useEffect } from "react";

import UserDetails from "./UserDetails";

import "./UserDetails.css";
import { AppContext } from "../../App";
import { useDebounce } from "../hooks/useDebounce";
import { useFetchUserDetails } from "./useFetchUserDetails";

const UserData = () => {
  const { email, name } = useContext(AppContext);
  const debouncedName = useDebounce(name, 500);
  const debouncedEmail = useDebounce(email, 500);

  const [currentId, setCurrentId] = useState(0); // To store the current number user details displayed

  useEffect(() => {
    setCurrentId(0);
  }, [debouncedName, debouncedEmail]);

  const { userDetails, loading, error, hasMore } = useFetchUserDetails(
    debouncedName,
    debouncedEmail,
    currentId
  );

  if (error) {
    return <div className="error">Error</div>;
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
      {loading && <div className="loader" />}
      <button
        style={{
          visibility: hasMore && "hidden",
        }}
        onClick={() => setCurrentId((prev) => prev + 1)}
        disabled={loading}
      >
        Load More
      </button>
    </>
  );
};

export default UserData;

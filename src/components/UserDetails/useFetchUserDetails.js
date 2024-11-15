import { useEffect, useState } from "react";
import { getUserDetails } from "../../MockAPISimul";

export const useFetchUserDetails = (
  debouncedName,
  debouncedEmail,
  currentId
) => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchUserDetails();
  }, [currentId, debouncedEmail, debouncedName]);

  const fetchUserDetails = async () => {
    setLoading(true);
    setError("");
    try {
      const { hasMore, response } = await getUserDetails(
        debouncedName,
        debouncedEmail,
        (currentId = !debouncedName && !debouncedEmail && currentId)
      );
      setHasMore(hasMore);
      // checking if query provided and resetting the userDetails
      if (debouncedEmail || debouncedName || currentId === 0) {
        setUserDetails(response);
      } else {
        setUserDetails((prev) => [...prev, ...response]);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { userDetails, loading, error, hasMore };
};

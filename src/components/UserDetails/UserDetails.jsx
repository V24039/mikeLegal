import PropTypes from "prop-types";

const UserDetails = ({ name, email, age, id }) => {
  return (
    <div key={id} className="user-data">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default UserDetails;

import PropTypes from "prop-types";

const Dashboard = ({
  name,
  email,
  phone,
  plan,
  payment,
  onlineService,
  largeStorage,
  customizableProfile,
  total,
}) => {
  return (
    <div className="text-black bg-white px-10 py-5 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-2">
        <span className="font-bold me-3">Name:</span> {name}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Email:</span> {email}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Phone:</span> {phone}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Plan:</span> {plan}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Payment:</span> {payment}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Online Service:</span>{" "}
        {onlineService ? "Yes" : "No"}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Large Storage:</span>{" "}
        {largeStorage ? "Yes" : "No"}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Customizable Profile:</span>{" "}
        {customizableProfile ? "Yes" : "No"}
      </p>
      <p className="mb-2 text-lg">
        <span className="font-bold text-base me-3">Total:</span>{" "}
        {`$${total}/${plan === "monthly" ? "mo" : "yr"}`}
      </p>
    </div>
  );
};

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  plan: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  onlineService: PropTypes.bool.isRequired,
  largeStorage: PropTypes.bool.isRequired,
  customizableProfile: PropTypes.bool.isRequired,
  total: PropTypes.string.isRequired,
};

export default Dashboard;

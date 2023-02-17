const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{`${name} , Your currunt image count is....`}</div>
      <div className="white f3">{entries}</div>
    </div>
  );
};

export default Rank;

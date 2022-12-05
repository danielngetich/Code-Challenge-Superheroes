import "./Chef.css";
function Chef() {
  return (
    <div>
      <form className="form">
        <div>
          <label>Chef Name</label>
          <input type="text" placeholder="Enter chefs name"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter your password"></input>
          <br />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Chef;

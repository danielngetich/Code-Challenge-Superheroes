import "./Chef.css"
function Chef(){
    return(
        <div>
            <form className="form">
                <label>Chef Name</label>
                <input type="text" placeholder="Enter chefs name"></input><br/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password"></input><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Chef;
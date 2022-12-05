function Order(){
    return(
       <div>
        <form>
            <div>
                <label>Table no</label>
                <input type="integer"></input>
            </div>
            <div>
                <label>Food name</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Price</label>
                <input type="integer" ></input>
            </div>
        </form>
       </div> 
    )
}
export default Order;
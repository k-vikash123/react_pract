
import Restcard from "./RestCard";
import restList from "./Data.js"

const Body = () => {
    return <div id="body">
    {restList.map((x) => {
      return <Restcard key={x.id}  resData={x}/>
    })}
    </div>
  }

  export default Body;
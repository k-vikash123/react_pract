
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err= useRouteError();
    return <div id="error">
        <h1>OOPSS!!! There is some error.</h1>
        <h2>{err.data}</h2>
        <h3>{err.status}</h3>
    </div>
}

export default Error;
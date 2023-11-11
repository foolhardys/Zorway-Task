import { Outlet } from "react-router-dom";
import Navbar from "../SubRoutes/Navbar";
import TimeTable from "../SubRoutes/TimeTable";


const Account = () => {

    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}


export default Account
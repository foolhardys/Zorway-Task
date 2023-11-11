import { Outlet } from "react-router-dom";
import Navbar from "../SubRoutes/Navbar";
import TimeTable from "../SubRoutes/TimeTable";


const Account = () => {


    // Inside the Account component
    console.log('Rendering Account component');



    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}


export default Account
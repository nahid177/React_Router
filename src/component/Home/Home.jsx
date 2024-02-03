import { Outlet } from "react-router-dom";
import Header from "../HTML_Body/Header";
import Right_nav from "../HTML_Body/Right_nav";


const Home = () => {

    return (
        <div >


            <Header></Header>


            <Right_nav></Right_nav>

            <Outlet></Outlet>
            

        </div>
    );
};

export default Home;
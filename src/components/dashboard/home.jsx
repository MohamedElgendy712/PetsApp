import useLocalStorage from "../../services/utils/local-storage";
import LogoutButton from "./LogoutButton";
import Dashboard from "./dashboard";
import DashboardHeader from "./dashboardHeader";
import DashboardSideBar from "./dashboardSideBar";

const Home = (props) => {
    const [firstName] = useLocalStorage("user_first_name", "")

    return (
        <section className="d-flex flex-column vh-100 bg-lightgray">
            <DashboardHeader />
            <div className="d-flex flex-grow-1 flex-shrink-1">
                <DashboardSideBar />
                <Dashboard />
            </div>
        </section>
    )
}

export default Home;
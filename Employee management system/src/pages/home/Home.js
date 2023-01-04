import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Datatable from "../../components/datatable/Datatable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="listContainer">
         <Datatable/>
        </div>
      </div>
    </div>
  );
};

export default Home;

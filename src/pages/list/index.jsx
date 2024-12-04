import "./index.scss";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Datatable from "../../components/datatable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;

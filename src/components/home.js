import Carousal from "./carousal";
import Menu from "./menu";

function Home({ setitemCount, itemCount }) {
  return (
    <>
      <Carousal />
      <Menu setitemCount={setitemCount} itemCount={itemCount} />
  
    </>
  );
}
export default Home;

import { useState } from "react";
import "./_app.scss";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleToggleSideBar = () =>
    setToggleSideBar(value => !value);
  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container">
        <SideBar toggleSideBar={toggleSideBar} handleToggleSideBar={handleToggleSideBar} />
        <Container fluid className="app__main">
          {/*container comes with default padding so to remove that fluid is included */}
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;

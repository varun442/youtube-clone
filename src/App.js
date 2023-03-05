import { useState, useEffect } from "react";
import "./_app.scss";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { useSelector } from "react-redux";

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
      console.log({ loading, accessToken });
    }
  }, [accessToken, loading, navigate]);

  const location = useLocation();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const handleToggleSideBar = () => setToggleSideBar((value) => !value);
  return (
    <>
      {location.pathname === "/auth" ? (
        <Routes>
          <Route path="/auth" element={<LoginScreen />} />
        </Routes>
      ) : (
        <>
          <Header handleToggleSideBar={handleToggleSideBar} />
          <div className="app__container">
            <SideBar
              toggleSideBar={toggleSideBar}
              handleToggleSideBar={handleToggleSideBar}
            />
            <Container fluid className="app__main">
              {/*container comes with default padding so to remove that fluid is included */}
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/search" element={<h1>Search Results</h1>} />
              </Routes>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default App;

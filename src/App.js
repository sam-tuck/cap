import Title from "./Title";
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import Page from "./page";
import Post from "./post";
import NewUser from "./signup";
import { useAuth } from "./context/auth";

const ProtectedRoute = () => {
  const {auth} = useAuth();

  if (!auth) {
    return <Navigate to="/" replace/>;
  }
  return <Outlet/>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Title/>}/>
        <Route path="/user" element={<ProtectedRoute/>}>
          <Route path="page" element={<Page/>}/>
          <Route path="post" element={<Post/>}/>
        </Route>
        <Route path="/signup" element={<NewUser/>}/>
      </Routes>
    </div>
  );
}

export default App;

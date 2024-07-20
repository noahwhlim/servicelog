import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Cars from "./pages/Cars";
import CreateRecord from "./pages/CreateRecord";
import UpdateRecord from "./pages/UpdateRecord";
import { Header } from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:carId" element={<Cars />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-record" element={<CreateRecord />} />
          <Route path="/update-record/:recordId" element={<UpdateRecord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

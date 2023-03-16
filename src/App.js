import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Create from "./pages/CreatePage";
import Page404 from "./pages/404Page";
import NewPage from "./pages/NewPage";
import Login from "./pages/LoginPage";
import Progress from "./pages/ProgressPage";
import Canceled from "./pages/CanceledPage";
import Registration from "./pages/RegistrationPage";
import Forgetpassword from "./pages/ForgotPassPage";
import FullscreenLoader from "./components/MasterLayout/FullScreenLoader";

import Completed from "./pages/CompletedPage";
import { getToken } from "./helper/SessionHelper";
import ProfilePage from "./pages/ProfilePage";
import CreatePasswordPage from "./pages/Create-Password-Page";
import VerifyOTPPage from "./pages/Verify-Otp-Page";
import SendOTPPage from "./pages/Send-Otp-Page";

function App() {
  if (getToken()) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashboardPage />} />

          <Route exact path="/create" element={<Create />} />

          <Route exact path="/All" element={<NewPage />} />

          <Route exact path="/Progress" element={<Progress />} />

          <Route exact path="/Canceled" element={<Canceled />} />
          <Route exact path="/Completed" element={<Completed />} />

          {/* <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} /> */}
          {/* <Route exact path="/Forgetpassword" element={<Forgetpassword />} /> */}
          <Route exact path="/Profile" element={<ProfilePage />} />
          {/* <Route exact path="/SendOTP" element={<SendOTPPage />} />
          <Route exact path="/VerifyOTP" element={<VerifyOTPPage />} /> */}
          <Route
            exact
            path="/CreatePassword"
            element={<CreatePasswordPage />}
          />

          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </>
  );
  } else {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Login" replace />} />
         
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Forgetpassword" element={<Forgetpassword />} />
          <Route exact path="/SendOTP" element={<SendOTPPage />} />
          <Route exact path="/VerifyOTP" element={<VerifyOTPPage />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </>
  );
  }
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import Courses from "./pages/Courses";
import CourseInfoPage from "./pages/CourseInfoPage";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import NumberLogin from "./components/NumberLogin";
import EmailLogin from "./components/EmailLogin";
import { ToastProvider } from "./components/ToastContext";
import RigesterUser from "./components/RigesterUser";
// import DashboardBox from "./components/DashboardBox";
import DashboardPage from "./pages/DashboardPage";
import Pishkhan from "./components/DashpordPageComponents/Pishkhan";
import Walet from "./components/DashpordPageComponents/Walet";
import MyCourse from "./components/DashpordPageComponents/MyCourse";
import Tikeets from "./components/DashpordPageComponents/Tikeets";

function App() {


  return (
  <>

  <ToastProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/courses" element={<Courses />} />
        <Route path="courseinfo" element={<CourseInfoPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />}>
          <Route index element={<Navigate to='number' repace />} />
          <Route path="number" element={<NumberLogin />} />
          <Route path="email" element={<EmailLogin />} />
          <Route path="rigester" element={<RigesterUser />} />
        </Route>
          <Route path="/DashboardPage" element={<DashboardPage />}>
          <Route index element={<Navigate to='home' repace />} />
              <Route path="home" element={<Pishkhan />} />
              <Route path="myCourse" element={<MyCourse />} />
              <Route path="tiket" element={<Tikeets/>} />
              <Route path="profile" element={<Walet />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </ToastProvider>
  </>
);

}

export default App

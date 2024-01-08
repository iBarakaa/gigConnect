import {  Outlet, Navigate, Route, Routes, useLocation  } from "react-router-dom";
import {  Navbar, Footer  } from "./components";
import {  About, AuthPage, FindJobs, JobDetail, ListerProfile, Listers, SeekerProfile, UploadJob  } from "./pages";
import {  useSelector } from "react-redux";

// page movements
function Layout () {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();


  return user ? (
    <Outlet/>
    ) : (
      <Navigate to='user-auth' state={{ from: location  }} replace />
  );
  

}

function App() { 
  const { user } = useSelector((state) => state.user);


  return (
    <main>
      <Navbar />
      <Routes>
        {/* when authenticated */}
          <Route element={<Layout/>}>
            <Route path='/' 
            element={<Navigate to='/find-jobs' replace={true}/>}
            />

          <Route path='/find-jobs' element={<FindJobs />} />

          <Route path='/listers' element={<Listers />} />

          <Route 
            path={
              user?.user?.accountType === "seeker"
              ? "/seeker-profile"
              : "/seeker-profile/:id"
            }
            element={<SeekerProfile />}
            />

            <Route path={"/lister-profile"} element={<ListerProfile />} />
            <Route path={"/lister-profile/:id"} element={<ListerProfile />} />
            <Route path={"/upload-job"} element={<UploadJob />} />
            <Route path={"/job-detail/:id"} element={<JobDetail />} />
          </Route>
        {/* when unauthed */}
          <Route path="/about-us" element={<About />} />
          <Route path={"/user-auth"} element={<AuthPage />} />

      </Routes>
    {/* if user is not logged in show no footer */}
      {user && <Footer />}
    </main>

  );
}

export default App;

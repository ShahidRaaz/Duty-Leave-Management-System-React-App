import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Msg from "./pages/Messages";
import PFile from "./pages/Profile";
import About from "./pages/About";
import Help from "./pages/Help";
import SplashScreen from "./pages/SplashScreen";
import LPage from './pages/Loginpage';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import ADLPage from './pages/ADLPage';
import DLSPage from './pages/DLSPage ';
import CFMPage from './pages/CFMPage';
import AllS from './pages/AllS';
import PendingS from './pages/PendingS';
import ApprovedS from './pages/ApprovedS';
import RejectedS from './pages/RejectedS';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous initialization process
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }, []);

  return (
    <div>
      {!isReady ? (
        <SplashScreen />
      ) : (
          <LPage/>
      )}
    </div>
  );
};

export default App;

class Index extends React.Component{
  render(){
    return (
      <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="Loginpage" element={<LPage />}/>
            <Route path="Layout" element={<Layout />}>
            <Route path="Dashboard" element={<Dashboard />} />
              <Route path="DLSPage" element={<DLSPage />}>
                <Route path="AllS" element={<AllS/>} />
                <Route path="PendingS" element={<PendingS/>} />
                <Route path="ApprovedS" element={<ApprovedS/>} />
                <Route path="RejectedS" element={<RejectedS/>} />
            </Route>
            <Route path="ADLPage" element={<ADLPage />} />
            <Route path="CFMPage" element={<CFMPage/>} />
            <Route path="Profile" element={<PFile />} />
            <Route path="Messages" element={<Msg />} />
            <Route path="About" element={<About/>} />
            <Route path="Help" element={<Help/>} />
            </Route>
        </Routes>
      </BrowserRouter>
      </>
     
    );
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
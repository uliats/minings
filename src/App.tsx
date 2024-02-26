//




import "./styles/main.sass"
import "./styles/reset.sass"
import  { useState } from 'react'
import Header from "./components/Header/Header";
import {Substance} from "./utils/types";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SubstancePage from "./pages/SubstancePage/SubstancePage";
import SubstancesList from "./pages/SubstancesList/SubstancesList";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage.tsx";

function App() {

    const [selectedSubstance, setSelectedSubstance] = useState<Substance | undefined>(undefined)

    return (
        <BrowserRouter basename="/minings">

            <div className="App">

                <div className="wrapper">

                    <Header />

                    <div className="content-wrapper">

                        <Breadcrumbs selectedSubstance={selectedSubstance} setSelectedSubstance={setSelectedSubstance}/>

                        <Routes>
                            <Route path="/" element={<WelcomePage />} />

                            {/*<Route path="/substances" element={<Navigate to="/substances" replace />} />*/}

                            <Route path="/profile" element={<ProfilePage />} />

                            <Route path="/substances" element={<SubstancesList />} />

                            <Route path="/substances/:id" element={<SubstancePage selectedSubstance={selectedSubstance} setSelectedSubstance={setSelectedSubstance} />} />

                        </Routes>

                    </div>

                </div>

            </div>

        </BrowserRouter>
    )
}

export default App









// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header/Header';
// import SubstancesList from './pages/SubstancesList/SubstancesList';
// import SubstancePage from "./pages/SubstancePage/SubstancePage";
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import WelcomePage from './pages/WelcomePage/WelcomePage';
//
// function App() {
//   return (
//     <BrowserRouter basename="/minings">
//       <div className="App">
//         <div className="wrapper">
//           <Header />
//           <div className="content-wrapper">
//             <Routes>
//               <Route path="/" element={<WelcomePage />} />
//               <Route path="/profile" element={<ProfilePage />} />
//               <Route path="/substances" element={<SubstancesList />} />
//               {/*<Route path="/substances/:id" element={<SubstancePage selectedSubstance={selectedSubstance} setSelectedSubstance={setSelectedSubstance} />} />*/}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }
//
// export default App;



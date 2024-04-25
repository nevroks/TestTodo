import {Route, Routes} from "react-router-dom";
import {lazy} from "react";

import Layout from "./components/layout/Layout.tsx";
const HomePage = lazy(()=>import("./pages/homepage/HomePage.tsx"))

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

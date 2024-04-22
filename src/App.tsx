import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.tsx";
import Layout from "./components/layout/Layout.tsx";


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

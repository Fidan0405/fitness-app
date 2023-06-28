import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";



function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Layout />} />
      </Route>
    </Routes>
  );
}

export default App;

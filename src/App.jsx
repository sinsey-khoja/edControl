import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import FinancePage from "./pages/FinancePage/FinancePage";
import ClientsPage from "./pages/ClientsPage/ClientsPage";
import RoomsPage from "./pages/RoomsPage/RoomsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./components/Layout";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="finance" element={<FinancePage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

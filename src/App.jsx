import "./App.css";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/Calendar.jsx";
import HomePage from "./pages/HomePage.jsx";
import TodayPage from "./pages/TodayPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";

function App() {
  return (
    <Routes>
      <Route exec path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
    </Routes>
  );
}
export default App;

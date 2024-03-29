import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import { Dashboard } from "./components/main/Dashboard";
import { Sidebar } from "./components/main/Sidebar";
import { History } from "./components/layout/History";
import DashboardState from "./context/Dashboard/DashboardState";

function App() {
  return (
    <DashboardState>
      <ChakraProvider theme={theme}>
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </DashboardState>
  );
}

export default App;

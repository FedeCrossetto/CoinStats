import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import { TableInfo } from "./components/main/TableInfo";
import { Sidebar } from "./components/main/Sidebar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar />
      <Router>
        <Routes>
        <Route path="/table" element={<TableInfo />} />
        <Route path="/" element={<TableInfo />} />
        <Route path="*" element={<TableInfo />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

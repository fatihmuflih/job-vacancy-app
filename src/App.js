import React from "react";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/404";
import { Profile } from "./pages/Profile";
import { Vacancy } from "./pages/Vacancy";
import { LoginPage } from "./pages/Login";
import { ListJobs } from "./pages/ListJobs";
import { DataForm } from "./pages/DataForm";
import { Dashboard } from "./pages/Dashboard";
import { RegisterPage } from "./pages/Register";
import { DetailJobPage } from "./pages/DetailJob";
import { JobProvider } from "./context/JobContext";
import { ProtectedRoute } from "./components/Utils/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <JobProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-vacancy" element={<Vacancy />} />
            <Route path="/job/:id" element={<DetailJobPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute requiresAuth={true}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/list-job-vacancy" element={
              <ProtectedRoute requiresAuth={true}>
                <ListJobs />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/form" element={
              <ProtectedRoute requiresAuth={true}>
                <DataForm />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/profile" element={
              <ProtectedRoute requiresAuth={true}>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/register" element={
              <ProtectedRoute requiresAuth={false}>
                <RegisterPage />
              </ProtectedRoute>
            } />
            <Route path="/login" element={
              <ProtectedRoute requiresAuth={false}>
                <LoginPage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </JobProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
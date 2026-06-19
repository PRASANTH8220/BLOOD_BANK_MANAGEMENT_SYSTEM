import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import LandingPage from "./pages/Landing";
import ForgotPassword from "./pages/ForgotPassword";
import DonorDashboard from "./pages/donor/DonorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/layouts/DashboardLayout";
import DonorProfile from "./pages/donor/DonorProfile";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminFacilities from "./pages/admin/AdminFacilities";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import BloodCamps from "./pages/bloodlab/BloodCamps";
import BloodlabDashboard from "./pages/bloodlab/BloodlabDashboard";
import BloodStock from "./pages/bloodlab/BloodStock";
import LabProfile from "./pages/bloodlab/LabProfile";
import GetAllFacilities from "./pages/admin/GetAllFacilities";
import GetAllDonors from "./pages/admin/GetAllDonors";
import DonorCampsList from "./pages/donor/DonorCampsList";
import LabManageRequests from "./pages/bloodlab/LabManageRequests";
import HospitalRequestBlood from "./pages/hospital/HospitalRequestBlood";
import HospitalRequestHistory from "./pages/hospital/HospitalRequestHistory";
import HospitalBloodStock from "./pages/hospital/HospitalBloodStock";
import BloodLabDonor from "./pages/bloodlab/BloodLabDonor";
import DonorDirectory from "./pages/hospital/DonorDirectory";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import DonorDonationHistory from "./pages/donor/DonorDonationHistory";

function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        {/* Legacy deep links redirect into the unified, role-tabbed signup page */}
        <Route path="/register/donor" element={<Navigate to="/signup?role=donor" replace />} />
        <Route path="/register/facility" element={<Navigate to="/signup?role=hospital" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/donor" element={<ProtectedRoute><DashboardLayout userRole="donor" /></ProtectedRoute>}>
          <Route index element={<DonorDashboard />} />
          <Route path="profile" element={<DonorProfile />} />
          <Route path="camps" element={<DonorCampsList />} />
          <Route path="history" element={<DonorDonationHistory />} />
        </Route>
      
        <Route path="/hospital" element={<ProtectedRoute><DashboardLayout userRole="hospital" /></ProtectedRoute>}>
          <Route index element={<HospitalDashboard />} />
          <Route path="blood-request-create" element={<HospitalRequestBlood />} />
          <Route path="blood-request-history" element={<HospitalRequestHistory />} />
          <Route path="inventory" element={<HospitalBloodStock />} />
          <Route path="donors" element={<DonorDirectory />} />
       </Route>
      
        <Route path="/lab" element={<ProtectedRoute><DashboardLayout userRole="blood-lab" /></ProtectedRoute>}>
          <Route index element={<BloodlabDashboard />} />
          <Route path="inventory" element={<BloodStock />} />
          <Route path="camps" element={<BloodCamps />} />
          <Route path="profile" element={<LabProfile />} />
          <Route path="requests" element={<LabManageRequests />} />
          <Route path="donor" element={<BloodLabDonor />} />
        </Route>
        
        <Route path="/admin" element={<ProtectedRoute><DashboardLayout userRole="admin" /></ProtectedRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="verification" element={<AdminFacilities />} />
          <Route path="donors" element={<GetAllDonors />} />
          <Route path="facilities" element={<GetAllFacilities />} />
        </Route>
      </Routes>
  );
}

export default App;

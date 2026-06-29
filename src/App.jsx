import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import AdminDashboard from './components/AdminDashboard';
import './App.css'; 

function NavigationBar() {
  return (
    <header className="header">
      <h1>Transport Management System</h1>
      {/* The nav-tabs (Student/Admin buttons) have been completely removed */}
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <NavigationBar />

        <main>
          <Routes>
            {/* The Student Form remains the default home page */}
            <Route path="/" element={<StudentForm />} />
            
            {/* The Admin Dashboard is now a hidden route */}
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
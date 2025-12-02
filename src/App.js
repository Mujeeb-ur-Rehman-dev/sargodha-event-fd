import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormPage from './Pages/FormPage';
import DataPage from './Pages/DataPage';
import DonorReportPage from './Pages/DonorReportPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px', textDecoration:'none' }}>Form Page</Link>
        <Link to="/data" style={{marginRight: '10px', textDecoration:'none'}}>Data Page</Link>
        <Link to="/donor-report" style={{marginRight: '10px', textDecoration:'none'}}>Donor Report</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/donor-report" element={<DonorReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;

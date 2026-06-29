import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { saveRequest } from '../services/storageService';

export default function StudentForm() {
  const [formData, setFormData] = useState({ name: '', email: '', from: '', to: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); setSuccess('');

    if (!formData.name || !formData.email || !formData.from || !formData.to) {
      return setError('All fields are required.');
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return setError('Please enter a valid email address.');
    }

    saveRequest({ ...formData, id: uuidv4() });
    setSuccess('Pass application submitted successfully!');
    setFormData({ name: '', email: '', from: '', to: '' });
  };

  return (
    <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Apply for Transport Pass</h2>
      
      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="John Doe" />
        </div>
        
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="john@college.edu" />
        </div>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label>From Location</label>
            <input type="text" name="from" className="form-control" value={formData.from} onChange={handleChange} placeholder="City Center" />
          </div>
          
          <div className="form-group" style={{ flex: 1 }}>
            <label>To Location</label>
            <input type="text" name="to" className="form-control" value={formData.to} onChange={handleChange} placeholder="Campus" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
          Submit Application
        </button>
      </form>
    </div>
  );
}
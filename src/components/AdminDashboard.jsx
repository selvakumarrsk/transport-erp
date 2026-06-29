import { useState, useEffect } from 'react';
import { getRequests, updateRequestStatus, deleteRequest } from '../services/storageService';

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(getRequests());
  }, []);

  const handleAction = (id, action) => {
    if (action === 'Delete') deleteRequest(id);
    else updateRequestStatus(id, action);
    setRequests(getRequests());
  };

  const getStatusBadge = (status) => {
    const statusClass = `badge badge-${status.toLowerCase()}`;
    return <span className={statusClass}>{status}</span>;
  };

  return (
    <div className="card">
      <h2>Pass Requests Overview</h2>
      
      {requests.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No pass requests found in the system.</p>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Route</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>
                    <div style={{ fontWeight: 500 }}>{req.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{req.email}</div>
                  </td>
                  <td>{req.from} &rarr; {req.to}</td>
                  <td>{req.date}</td>
                  <td>{getStatusBadge(req.status)}</td>
                  <td style={{ textAlign: 'right' }}>
                    {req.status === 'Pending' && (
                      <>
                        <button className="btn btn-sm btn-success" onClick={() => handleAction(req.id, 'Approved')}>Approve</button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleAction(req.id, 'Rejected')}>Reject</button>
                      </>
                    )}
                    <button className="btn btn-sm btn-outline" style={{ marginLeft: '5px' }} onClick={() => handleAction(req.id, 'Delete')}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
const STORAGE_KEY = 'transportPassRequests';

export const getRequests = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveRequest = (requestData) => {
  const requests = getRequests();
  const newRequest = {
    ...requestData,
    date: new Date().toLocaleDateString(),
    status: 'Pending'
  };
  requests.push(newRequest);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
};

export const updateRequestStatus = (id, newStatus) => {
  const requests = getRequests();
  const updatedRequests = requests.map(req => 
    req.id === id ? { ...req, status: newStatus } : req
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRequests));
};

export const deleteRequest = (id) => {
  const requests = getRequests();
  const filteredRequests = requests.filter(req => req.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRequests));
};
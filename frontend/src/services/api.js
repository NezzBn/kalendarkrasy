import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Articles API
export const articlesAPI = {
  getAll: async () => {
    const response = await axios.get(`${API}/articles`);
    return response.data;
  },
  
  getById: async (id) => {
    const response = await axios.get(`${API}/articles/${id}`);
    return response.data;
  },
  
  create: async (articleData) => {
    const response = await axios.post(`${API}/articles`, articleData);
    return response.data;
  },
  
  update: async (id, articleData) => {
    const response = await axios.put(`${API}/articles/${id}`, articleData);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await axios.delete(`${API}/articles/${id}`);
    return response.data;
  }
};

// Moon Phases API
export const moonPhasesAPI = {
  getAll: async () => {
    const response = await axios.get(`${API}/moon-phases`);
    return response.data;
  },
  
  create: async (phaseData) => {
    const response = await axios.post(`${API}/moon-phases`, phaseData);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await axios.delete(`${API}/moon-phases/${id}`);
    return response.data;
  }
};

// Sidebar Links API
export const sidebarLinksAPI = {
  getAll: async () => {
    const response = await axios.get(`${API}/sidebar-links`);
    return response.data;
  }
};

export default {
  articles: articlesAPI,
  moonPhases: moonPhasesAPI,
  sidebarLinks: sidebarLinksAPI
};
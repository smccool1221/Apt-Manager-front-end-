import axios from 'axios';

const MAINTENANCE_BASE_API_URL = 'http://localhost:8080/api/v1/maintence-request';

export function getAllMaintenances(){
    return axios.get(MAINTENANCE_BASE_API_URL);
}

export function createMaintenance(maintenace){
    return axios.post(MAINTENANCE_BASE_API_URL,maintenace);
}

export function getById(id){
    return axios.get(`${MAINTENANCE_BASE_API_URL}/${id}`);
}

export function updateMaintenance(id, maintenace){
    return axios.put(`${MAINTENANCE_BASE_API_URL}/${id}`, maintenace);
}

export function deleteMaintenance(id){
    return axios.delete(`${MAINTENANCE_BASE_API_URL}/${id}`);
}



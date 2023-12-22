
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";
import { MaintenanceTable } from '../components/MaintenanceTable';

export const Maintenance  =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addUser()}>Add Request</Button>
            <MaintenanceTable />
        </>
    )
}




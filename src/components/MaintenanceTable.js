import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import * as aptService from '../services/AptService';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export const MaintenanceTable = () => {
  const [maintenances, setMaintenances] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    aptService.getAllMaintenances().then((res) => {
      setMaintenances(res.data);
    });
  }, []);

  const goToUpdate = (id) => {
    navigate(`/${id}`);
  };

  const deleteMaintenance = (id) => {
    aptService.deleteMaintenance(id).then(() => {
      requestDataFromApi();
    });
  };

  return (
    <div>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Apt Number</TableCell> {/* New field */}
            <TableCell>Description</TableCell> {/* New field */}
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {maintenances.map((maintenance) => (
            <TableRow hover key={maintenance.id}>
              <TableCell>{maintenance.id}</TableCell>
              <TableCell>{maintenance.firstName}</TableCell>
              <TableCell>{maintenance.lastName}</TableCell>
              <TableCell>{maintenance.email}</TableCell>
              <TableCell>{maintenance.aptNumber}</TableCell> {/* New field */}
              <TableCell>{maintenance.description}</TableCell> {/* New field */}
              <TableCell align="right">
                <IconButton component="a" onClick={() => goToUpdate(maintenance.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton component="a" onClick={() => deleteMaintenance(maintenance.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


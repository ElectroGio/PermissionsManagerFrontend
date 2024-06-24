import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import PermissionForm from "../permission-form/PermissionForm";
import { getPermissions } from "../../services/api";

interface Permission {
  id: number;
  name: string;
  description: string;
}

const PermissionsTable = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getPermissions();
      setPermissions(response.data);
    }

    fetchData();
  }, []);

  const handleEdit = (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleDelete = (id: number) => {
    // Logic to handle delete
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {permissions.map((perm) => (
              <TableRow key={perm.id}>
                <TableCell>{perm.name}</TableCell>
                <TableCell>{perm.description}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEdit(perm.id)}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(perm.id)}
                    startIcon={<DeleteIcon />}
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Permission</DialogTitle>
        <DialogContent>
          {selectedId !== null && (
            <PermissionForm type="modify" permissionId={selectedId} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PermissionsTable;

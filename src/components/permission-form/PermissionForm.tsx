import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

interface PermissionFormProps {
  type: 'request' | 'modify';
  permissionId?: number;
}

const PermissionForm: React.FC<PermissionFormProps> = ({ type, permissionId }) => {
  const [permission, setPermission] = useState({ name: '', description: '' });

  useEffect(() => {
    if (type === 'modify' && permissionId) {
      axios.get(`/api/permissions/${permissionId}`).then((response) => {
        setPermission(response.data);
      });
    }
  }, [type, permissionId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPermission({ ...permission, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = type === 'request' ? '/api/request-permission' : `/api/modify-permission/${permissionId}`;
    axios.post(url, permission).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={permission.name}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={permission.description}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {type === 'request' ? 'Request' : 'Modify'} Permission
      </Button>
    </form>
  );
};

export default PermissionForm;

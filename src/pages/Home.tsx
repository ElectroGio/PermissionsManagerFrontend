import { Container, Typography, Box } from '@mui/material';

const Home = () => (
  <Container>
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Permissions App
      </Typography>
      <Typography variant="body1">
        Use the menu to navigate between different functionalities.
      </Typography>
    </Box>
  </Container>
);

export default Home;

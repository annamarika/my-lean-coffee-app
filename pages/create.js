import { Container, Grid, Typography } from "@mui/material";
import CardCreateForm from "../src/components/CardCreateForm";

export default function Create() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h1">Create</Typography>
          </Grid>
        </Grid>
        <CardCreateForm />
      </Container>
    </>
  );
}

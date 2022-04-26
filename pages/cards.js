import { Container, Grid, Typography } from "@mui/material";
import CardGrid from "../src/components/CardGrid";
import { getCards } from "../src/services/get-cards";

export function getStaticProps() {
  const cards = getCards();

  return {
    props: {
      cards,
    },
  };
}

export default function Cards({ cards }) {
  console.log(cards);
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h1">Cards</Typography>
          </Grid>
        </Grid>
        <CardGrid cards={cards} />
      </Container>
    </>
  );
}

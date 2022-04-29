import { Container, Grid, Typography } from "@mui/material";
import { SWRConfig } from "swr";
import CardGrid from "../src/components/CardGrid";
import { getCards } from "../src/services/get-cards";
import { swrFetcher } from "../src/lib/swr-fetcher";

export async function getStaticProps() {
  const cards = await getCards();

  return {
    props: {
      /*cards,*/
      fallback: {
        "/api/cards": cards,
      },
    },
  };
}

export default function Cards({ fallback }) {
  console.log(fallback);
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h1">Cards</Typography>
          </Grid>
        </Grid>
        <CardGrid />
      </Container>
    </SWRConfig>
  );
}

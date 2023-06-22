import Grid from "@mui/material/Unstable_Grid2";
import Layout from "../Layout/Layout";
import { Box, createTheme } from "@mui/material";
import Content from "../Content/Content";
import Column from "../RightColumn/Column";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    customBlack: {
      main: "#000",
      contrastText: "#fff",
    },
    twitterBlue: {
      main: "#1D9BEF",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Layout>
          <Grid container sx={{ height: "100vh", width: "100%" }}>
            <Grid xs={7} sx={{ borderRight: "1px solid lightGrey" }}>
              <Content />
            </Grid>
            <Grid xs={5} sx={{ borderRight: "1px solid lightGrey" }}>
              <Column />
            </Grid>
          </Grid>
        </Layout>
      </Box>
    </ThemeProvider>
  );
};

export default App;

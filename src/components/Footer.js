import { AppBar, Container, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
export default function Footer() {
  return (
    <AppBar position="relative" color="success">
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="black"
            sx={{
              width: "100%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            © 2021 NiKa, All Rights Reserved
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

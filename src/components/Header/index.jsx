
import { Button, List, ListItem, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = ({ to, children }) => {
  return (
    <Button
      to={to}
      sx={{
        fontFamily: "Lato",
        color: "#000",
        fontSize: "1.5rem",
        fontWeight: "600",
        textTransform: 'none',

      }}
      component={Link}
    >
      {children}
    </Button>
  );
};

const Header = () => {
  return (
    <nav>
      <Stack sx={{
        backgroundColor: "rgba(221, 89, 157, 0.17)",
      }}>
        <List sx={{ display: 'flex', gap: '10px', marginLeft: "auto" }}>
          <ListItem>
            <CustomButton to="/">Home</CustomButton>
          </ListItem>
          <ListItem>
            <CustomButton to="/sobre">Sobre</CustomButton>
          </ListItem>
          <ListItem>
            <CustomButton to="/projetos">Projetos</CustomButton>
          </ListItem>
        </List>
      </Stack>
    </nav>
  );
};

export default Header;


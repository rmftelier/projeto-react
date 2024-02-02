
import { Button, List, ListItem, Stack } from "@mui/material";
import { Link } from "react-router-dom";
//import { useState } from "react";

/*
*/
/*
const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Stack
      sx={{
        padding: "10px",
        position: "fixed",
        width: "100%",
        top: 0,
        backgroundColor: "#dd599d3a",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <List sx={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
        <ListItem>
          <CustomButton to="/">Home</CustomButton>
        </ListItem>
        <ListItem>
          <CustomButton to="/sobre">Sobre</CustomButton>
        </ListItem>
        <ListItem>
          <Button
            sx={{
              fontFamily: "Lato",
              color: "#000",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
            onClick={handleMenuOpen}
          >
            Projetos
          </Button>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/projetos/projeto1" onClick={handleMenuClose}>
              Projeto 1
            </MenuItem>
            <MenuItem component={Link} to="/projetos/projeto2" onClick={handleMenuClose}>
              Projeto 2
            </MenuItem>
            
          </Menu>
        </ListItem>
      </List>
    </Stack>
  );
};
*/

const CustomButton = ({ to, children }) => {
  return (
    <Button
      to={to}
      sx={{
        fontFamily: "Lato",
        color: "#000",
        fontSize: "1.1rem",
        fontWeight: "600",
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
        backgroundColor: "#dd599d56",
      }}>
        <List sx={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
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


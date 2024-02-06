import { Button, AppBar, Menu, MenuItem, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

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
      component={RouterLink}
    >
      {children}
    </Button>
  );
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: "0", backgroundColor: "rgba(221, 89, 157, 0.17)" }}>
      <Toolbar sx={{ display: 'flex', marginLeft: "auto", gap: "20px", padding: "15px" }}>
        <CustomButton color="inherit" component={RouterLink} to="/">
          Home
        </CustomButton>
        <CustomButton to="/projetos">
          Projetos
        </CustomButton>
        <Button
          color="inherit"
          onClick={handleClick}
          sx={{
            fontFamily: "Lato",
            fontSize: "1.5rem",
            fontWeight: "600",
            textTransform: 'none',
            textShadow: "#000",
            color: "#991667",
            textDecoration: "fixed"
          }}
        >
          Sobre
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          MenuListProps={{
            sx: {
              borderRadius: "0",
              backgroundColor: 'rgba(163, 138, 187, 0.37)',
              boxShadow: "0",
              zIndex: 1, // Defina a cor de fundo desejada aqui
            },
          }}
        >
          <MenuItem onClick={handleClose} >
            <CustomButton to="/sobre/#sobremim">Sobre Mim</CustomButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomButton to="/sobre/pretalab">Sobre PretaLab</CustomButton>
          </MenuItem>
          {/* Adicione mais projetos conforme necessário */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;




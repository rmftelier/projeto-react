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
        <CustomButton>
          Sobre mim
        </CustomButton>
        <Button
          color="inherit"
          onClick={handleClick}
          sx={{
            fontFamily: "Lato",
            fontSize: "1.5rem",
            fontWeight: "600",
            textTransform: 'none',
            textShadow: ""
          }}
        >
          Projetos
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
          sx={{

            borderRadius: 0, // Configura a borda para tornar o menu quadrado
          }
          }
        >
          <MenuItem onClick={handleClose}>
            <CustomButton to="/projeto1">Projeto 1</CustomButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomButton to="/projeto2">Projeto 2</CustomButton>
          </MenuItem>
          {/* Adicione mais projetos conforme necessário */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

/*  return (
    <AppBar position="static" sx={{ boxShadow: "0", backgroundColor: "rgba(221, 89, 157, 0.17)", display: 'flex', marginLeft: "auto" }}>
      <Toolbar sx={{ marginLeft: "auto", gap: "20px", padding: "15px" }}>
        <CustomButton color="inherit" component={RouterLink} to="/">
          Home
        </CustomButton>
        <CustomButton>
          Sobre mim
        </CustomButton>
        <CustomButton color="inherit" onClick={handleClick}>
          Projetos
        </CustomButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <CustomButton to="/projeto1">Projeto 1</CustomButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomButton to="/projeto2">Projeto 2</CustomButton>
          </MenuItem>
          {/* Adicione mais projetos conforme necessário }
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

*/



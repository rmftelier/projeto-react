import { Box, List, ListItem } from "@mui/material";

const Caixa = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "5%",
        width: "120px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #000",
        fontWeight: "600",
        fontFamily: "Lato",
        fontSize: "1.1rem"
      }}
    >
      {children}
    </Box>
  );
};


const ListaTecnologias = () => {
  return (
    <List sx={{ display: 'flex', gap: '2px', }}>
      <ListItem sx={{ padding: "0px" }} >
        <Caixa>HTML</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }} >
        <Caixa>CSS</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }} >
        <Caixa>JavaScript</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Caixa>React</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Caixa>Chakra UI</Caixa>
      </ListItem>
      <ListItem sx={{ padding: "0px" }}>
        <Caixa>Material UI</Caixa>
      </ListItem>
    </List>
  );
}

export default ListaTecnologias;
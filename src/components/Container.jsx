import { Box, Stack } from "@mui/material";


export const Container = ({ children, boxProps, stackProps }) => (
  <section>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(163,138,187,0.37)",

        ...boxProps
      }}
    >
      <Stack sx={{
        maxWidth: "95%",
        ...stackProps
      }}>
        {children}
      </Stack>
    </Box>
  </section>
);
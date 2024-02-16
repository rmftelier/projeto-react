import { Link } from "@mui/material";

const LinkCustomizado = ({ href, label }) => {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        color: "#000",
        fontFamily: "Playfair Display",
        fontWeight: "700",
        borderBottom: "0.15rem solid #000",
        position: "relative",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
};

export default LinkCustomizado;
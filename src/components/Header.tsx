import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(() => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  top: 0,
  left: 0,
  right: 0,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: "70px",
  padding: theme.spacing(0, 3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2),
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export default function Header() {
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <LogoContainer sx={{ flexGrow: 1 }}>
          <Avatar
            sx={{
              width: 45,
              height: 45,
              background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
              color: "#667eea",
              fontWeight: "bold",
              fontSize: "1.2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            月影
          </Avatar>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                "@media (max-width: 600px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              けいちゃんの復縁コンサルティング
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{
                fontSize: "0.9rem",
                opacity: 0.8,
                fontWeight: 400,
                "@media (max-width: 600px)": {
                  display: "none",
                },
              }}
            >
              愛する人との再会をサポートぅするぅ
            </Typography>
          </Box>
        </LogoContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
}

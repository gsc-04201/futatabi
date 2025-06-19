"use client";

import Link from "next/link";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  styled,
} from "@mui/material";

interface LessonListProps {
  lessons: string[];
  id: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: 12,
  border: "1px solid #e9ecef",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    borderColor: "#667eea",
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  fontWeight: 600,
  fontSize: "0.75rem",
  height: 28,
  "&:hover": {
    background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
  },
}));

export default function LessonList({ lessons, id }: LessonListProps) {
  return (
    <Box>
      {lessons.map((lesson, index) => (
        <Link
          key={index}
          href={`/chapter/${id}/lesson/${index + 1}`}
          style={{ textDecoration: "none" }}
        >
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "#f8f9fa",
                    border: "2px solid #e9ecef",
                  }}
                >
                  <RadioButtonUncheckedIcon
                    sx={{ color: "#667eea", fontSize: 20 }}
                  />
                </Box>

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#2c3e50",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      lineHeight: 1.4,
                      mb: 0.5,
                    }}
                  >
                    {lesson}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#7f8c8d",
                      fontSize: "0.8rem",
                    }}
                  >
                    レッスン {index + 1}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <StyledChip
                    label="受講する"
                    icon={<PlayArrowIcon sx={{ fontSize: 16 }} />}
                  />
                </Box>
              </Box>
            </CardContent>
          </StyledCard>
        </Link>
      ))}
    </Box>
  );
}

import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";

interface ChapterProps {
  chapter: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    progress: number;
    imagePath: string;
  };
}

const ChapterCard: React.FC<ChapterProps> = ({ chapter }) => {
  const router = useRouter();

  const handleStartChapter = () => {
    router.push(`/chapter/${chapter.id}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ position: "relative", pt: "56.25%" /* 16:9 aspect ratio */ }}>
        <CardMedia
          component="img"
          image={chapter.imagePath}
          alt={chapter.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            background: "linear-gradient(45deg, #6b8cce, #a690e3)",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 2,
          "&:last-child": {
            pb: 2,
          },
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            mb: 2,
            minHeight: "2.5rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.25,
          }}
        >
          {chapter.title}
        </Typography>
        <Box sx={{ mt: "auto" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleStartChapter}
            sx={{
              backgroundColor: "#007AFF",
              color: "white",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
              textTransform: "none",
              borderRadius: 1,
              py: 1,
            }}
          >
            受講する
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={chapter.progress}
              sx={{
                flexGrow: 1,
                height: 6,
                borderRadius: 3,
                backgroundColor: "#E0E0E0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#007AFF",
                },
              }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ ml: 1, minWidth: "4.5rem", textAlign: "right" }}
            >
              {chapter.progress}% 完了
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;

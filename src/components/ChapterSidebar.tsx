import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

export default function ChapterSidebar({
  title,
  subtitle,
  progress,
}: {
  title: string;
  subtitle: string;
  progress: number;
}) {
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {subtitle}
      </Typography>
      <LinearProgress variant="determinate" value={progress} sx={{ my: 2 }} />
      <Typography variant="body2">{progress}% 完了</Typography>
    </div>
  );
}

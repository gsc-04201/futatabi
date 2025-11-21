import { notFound } from "next/navigation";
import ChapterSidebar from "@/components/ChapterSidebar";
import LessonList from "@/components/LessonList";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Container, Paper, Typography, Box } from "@mui/material";

// 仮データ
const chapterData: Record<
  string,
  { title: string; subtitle: string; progress: number; lessons: string[] }
> = {
  "1": {
    title: "序章【希望の灯火の術】愛する彼ともう一度結ばれる",
    subtitle: "～七つの灯火で照らし出す、彼との再縁と永遠の愛～",
    progress: 0,
    lessons: [
      "序章【希望の灯火の術】愛する彼と、もう一度結ばれる",
      "1.2 復縁のメソッドを学ぶ理由",
      "1.3 復縁成功に向けた心構え",
      "1.4 まとめ",
      "第1章のまとめ",
    ],
  },
  "2": {
    title: "第2章：復縁の基本的な心理学",
    subtitle: "～心の仕組みを理解して、効果的なアプローチを学ぶ～",
    progress: 0,
    lessons: [
      // ...第2章のレッスン...
    ],
  },
  // ...他の章...
};
console.log("testUpdate");

export default async function ChapterPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const chapter = chapterData[id];
  if (!chapter) return notFound();

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>
      {/* サイドバー */}
      <div
        style={{
          width: 320,
          background: "#fff",
          padding: 24,
          borderRight: "1px solid #eee",
          boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
        }}
      >
        <ChapterSidebar
          title={chapter.title}
          subtitle={chapter.subtitle}
          progress={chapter.progress}
        />
      </div>

      {/* メインコンテンツ */}
      <div style={{ flex: 1, padding: "40px 0" }}>
        {/* パンくずリスト */}
        <BreadcrumbNavigation
          items={[{ label: "Home", href: "/" }, { label: chapter.title }]}
        />

        <Container>
          {/* メインコンテンツ */}
          <Paper
            elevation={0}
            sx={{
              p: 6,
              borderRadius: 3,
              background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
              border: "1px solid #e9ecef",
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "#2c3e50",
                  mb: 1,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                メインレッスン
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                この章で学べる内容を順番に学習していきましょう
              </Typography>
            </Box>

            <Box>
              <LessonList lessons={chapter.lessons} id={id} />
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

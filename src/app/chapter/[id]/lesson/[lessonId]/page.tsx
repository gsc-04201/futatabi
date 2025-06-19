import Typography from "@mui/material/Typography";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container, Paper } from "@mui/material";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const lessons = [
  {
    id: "1",
    title: "序章【希望の灯火の術】愛する彼と、もう一度結ばれる",
    subtitle: "～七つの灯火で照らし出す、彼との再縁と永遠の愛～",
    content: `もしかしたら今、あなたはすごく辛い思いをしているかもしれませんね。

忘れられないあの人。もう一度、あの笑顔を見たい。あの温かさに触れたい。
心の中には、そんな強い願いがあるのに、「どうしたらいいんだろう…」と、途方に暮れていませんか？

✽ 「連絡したいけど、迷惑かな…」

✽ 「会いたいけど、何を話せばいいんだろう…」

✽ 「もう、私にはチャンスがないのかな…」

そんな風に、一人で胸が締め付けられるような思いを抱えて、眠れない夜を過ごしているかもしれません。

でも、大丈夫です。決して、一人で悩む必要はありません。あなたが今、このメッセージを読んでいること自体が、もう「奇跡」の始まりなんです。`,
  },
  {
    id: "2",
    title: "1.2 復縁のメソッドを学ぶ理由",
    content: "ここに1.2の本文が入ります。",
  },
  {
    id: "3",
    title: "1.3 復縁成功に向けた心構え",
    content: "ここに1.3の本文が入ります。",
  },
  {
    id: "4",
    title: "1.4 まとめ",
    content: "ここに1.4の本文が入ります。",
  },
  {
    id: "5",
    title: "第1章のまとめ",
    content: "ここに第1章のまとめ本文が入ります。",
  },
];

export default function LessonDetailPage({
  params,
}: {
  params: { id: string; lessonId: string };
}) {
  const lesson = lessons.find((l) => l.id === params.lessonId);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>
      {/* サイドバー */}
      <div
        style={{
          width: 320,
          background: "#fff",
          padding: 24,
          borderRight: "1px solid #eee",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          メインレッスン
        </Typography>
        <List>
          {lessons.map((l) => (
            <ListItem
              key={l.id}
              component={Link}
              href={`/chapter/${params.id}/lesson/${l.id}`}
              sx={{
                borderRadius: 1,
                bgcolor: l.id === params.lessonId ? "#e3f2fd" : undefined,
                mb: 1,
              }}
            >
              <ListItemText primary={l.title} />
            </ListItem>
          ))}
        </List>
      </div>

      {/* メインコンテンツ */}
      <div style={{ flex: 1, padding: "40px 0" }}>
        {/* パンくずリスト */}
        <BreadcrumbNavigation
          items={[
            { label: "Home", href: "/" },
            {
              label: "序章【希望の灯火の術】愛する彼ともう一度結ばれる",
              href: `/chapter/${params.id}`,
            },
            { label: "メインレッスン" },
          ]}
        />

        <Container maxWidth="md">
          {/* メインコンテンツ */}
          <Paper elevation={0} sx={{ p: 6, borderRadius: 2 }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                mb: 2,
                color: "#4a4a4a",
                fontWeight: "medium",
                textAlign: "center",
              }}
            >
              {lesson?.title}
            </Typography>
            {lesson?.subtitle && (
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 6,
                  color: "#666",
                  textAlign: "center",
                  fontSize: "1.1rem",
                }}
              >
                {lesson.subtitle}
              </Typography>
            )}
            <Typography
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 2,
                color: "#333",
                fontSize: "1rem",
              }}
            >
              {lesson?.content}
            </Typography>
          </Paper>
        </Container>
      </div>
    </div>
  );
}

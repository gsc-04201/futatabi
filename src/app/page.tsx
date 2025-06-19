"use client";
// import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import ChapterCard from "@/components/ChapterCard";
import {
  Box,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const chapters = [
    {
      id: "1",
      title: "序章【希望の灯火の術】愛する彼ともう一度結ばれる",
      subtitle: "希望の灯火の術",
      description: "愛する彼ともう一度結ばれる",
      progress: 0,
      imagePath: "/tukikage-1.png",
    },
    {
      id: "2",
      title: "第一章【導きの術】七つの光が照らす、復縁への扉",
      subtitle: "導きの術",
      description: "七つの光が照らす、復縁への扉",
      progress: 0,
      imagePath: "/tukikage-1.png",
    },
    {
      id: "3",
      title: "第二章【浄化の術】過去との訣別とまことの我",
      subtitle: "浄化の術",
      description: "過去との訣別とまことの我",
      progress: 0,
      imagePath: "/tukikage-1.png",
    },
    {
      id: "4",
      title: "第三章【魅力開花の術】彼を惹きつけるオーラの醸成",
      subtitle: "魅力開花の術",
      description: "彼を惹きつけるオーラの醸成",
      progress: 0,
      imagePath: "/tukikage-1.png",
    },
    {
      id: "5",
      title: "第四章【静寂の術】戦略的間合いの取り方",
      subtitle: "静寂の術",
      description: "戦略的間合いの取り方",
      progress: 0,
      imagePath: "/tukikage-1.png",
    },
    {
      id: "6",
      title: "第五章【見極めの術】彼の心を読み解く千里眼の修得",
      subtitle: "見極めの術",
      description: "彼の心を読み解く千里眼の修得",
      progress: 0,
      imagePath: "/tukikage-1.png",
    },
  ];

  return (
    <>
      <Header />
      <Box sx={{ p: 4, pt: 10, mx: 26 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Select
            defaultValue="all"
            size="small"
            sx={{
              minWidth: 120,
              "& .MuiSelect-select": {
                py: 1,
              },
            }}
          >
            <MenuItem value="all">全て</MenuItem>
          </Select>
          <TextField
            placeholder="検索"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            width: "100%",
            margin: "0 auto",
          }}
        >
          {chapters.map((chapter) => (
            <Box
              key={chapter.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                minWidth: 0,
              }}
            >
              <ChapterCard chapter={chapter} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

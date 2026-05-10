import { Navigate, Route, Routes } from "react-router-dom";
import { ChapterSelectionPage } from "../pages/ChapterSelectionPage";
import { LandingPage } from "../pages/LandingPage";
import { QuizPage } from "../pages/QuizPage";
import { ResultPage } from "../pages/ResultPage";
import { ReviewPage } from "../pages/ReviewPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<ChapterSelectionPage />} path="/chapters" />
      <Route element={<QuizPage />} path="/quiz/:chapterId" />
      <Route element={<ResultPage />} path="/result/:chapterId" />
      <Route element={<ReviewPage />} path="/review/:chapterId" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  );
}

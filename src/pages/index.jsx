import { Outlet, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// pages
import Home from "./home";
import About from "./about";
import Gallery from "../components/Gallery";

// components

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
});

//* Component app Layout
function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <div className="outlet-app">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

function router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Add a new route for the gallery page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* <Route path="/LoqueQuiera" element={<About />} /> */}

        {/* <Route path="about" element={<About />} />
        <Route path="class-attendance/:classId" element={<ClassAttendance />} />
        <Route
          path="class-attendance/:classId/student-attendance/:studentId"
          element={<StudentAttendance />}
        /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default router;

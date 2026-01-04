import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { ProfilePage } from "./components/ProfilePage";
import { BlogPage } from "./components/BlogPage";
import { Blogpost } from "./components/Blogpost";
import { LoginPage } from "./components/LoginPage";
import { LogOutPage } from "./components/Logout";
import { OutProvider, OutRoute } from "./components/out";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage"; 
import { NewPost } from "./components/NewPost";

function App() {
  return (
    <HashRouter>
      <OutProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={
            <OutRoute><ProfilePage /></OutRoute>
          } />
          <Route path="/blog" element={<BlogPage />}>
           <Route path="new" element={<NewPost />} />
            <Route path=":slug" element={
                <OutRoute>
                  <Blogpost />
                </OutRoute>
              }
            />
          </Route>
         

          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogOutPage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </OutProvider>
    </HashRouter>
  );
}

export default App;

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import JobPosting from "./components/JobPosting";
import NavBar from "./components/Navbar";
import CompanyInfo from "./components/CompanyInfo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex flex-1">
        <div className="flex-1 p-4">
          <NavBar />
          <JobPosting />
          <CompanyInfo />
        </div>

        <Sidebar />
      </main>
    </div>
  );
}

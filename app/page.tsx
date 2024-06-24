import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import JobPosting from "./components/JobPosting";
import NavBar from "./components/Navbar";
import CompanyInfo from "./components/CompanyInfo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex flex-1">
        <div className="flex-1 p-4">
          <NavBar />
          <div className="mt-4 bg-white p-4 shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Post a Job</h2>
            <JobPosting />
          </div>
          <div className="mt-4">
            <CompanyInfo />
          </div>
        </div>
        <Sidebar />
      </main>
    </div>
  );
}

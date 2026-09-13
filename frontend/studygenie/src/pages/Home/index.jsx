import { useState } from "react";
import DefaultCourse from "../../components/DefaultCourse";
import NavBar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { MainContentContainer } from "./index.styled";
import PageNotFound from "../NotFound";
import Dashboard from "../Dashboard";

const allowedPages = ["dashboard", "courses", "profile", "settings", "logout"];
function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState("dashboard");

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    function renderMainContent() {
        if(!allowedPages.includes(currentPage)) return <PageNotFound />

        switch (currentPage) {
            case "dashboard":
                return <Dashboard />;
            case "courses":
                return <DefaultCourse />;
            default:
                return null;
        }
    }

    return (  
        <>
            <NavBar onSidebarToggle={handleSidebarToggle}/>
            <Sidebar 
                isOpen={isSidebarOpen} 
                onClose={()=>{}} 
                onPageSelect={setCurrentPage} 
                selectedCourse={null} 
                courses={[]}
            />
            <MainContentContainer isSidebarOpen={isSidebarOpen}>
                {renderMainContent()}
            </MainContentContainer>
        </>
    );
}

export default Home;
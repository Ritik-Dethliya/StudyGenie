import { useState } from "react";
import { DashboardContainer, DashboardMainContent, DashboardSidebar, GreetingConatiner } from "./index.styled";
import CardCrausel from "../../components/CardsCrausle";
import ProgressSection from "../../components/ProgressSection";

function Dashboard() {
    const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
    return (
        <DashboardContainer>
            <DashboardMainContent>
                <GreetingConatiner>
                    <h5>Hello Ritik, Let Dive into Learning </h5>
                    <span>Ready to continue Learning</span>
                </GreetingConatiner>
                <CardCrausel />
                <ProgressSection />
            </DashboardMainContent>
            <DashboardSidebar isOpen={isLeftPanelOpen}> sidebar </DashboardSidebar>
        </DashboardContainer>
    );
}

export default Dashboard;
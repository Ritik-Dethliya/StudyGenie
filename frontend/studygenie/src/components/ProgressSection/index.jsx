import LineChartComp from "../ProgessChart/LineChart";
import { 
    ProgressSectionContainer, 
    ProgressSectionRight,
    ProgressSectionLeft,
} from "./index.styled";

function ProgressSection() {
    return (  
        <ProgressSectionContainer>
            <ProgressSectionLeft>
                <LineChartComp />
            </ProgressSectionLeft>
            <ProgressSectionRight>
                progress
            </ProgressSectionRight>
        </ProgressSectionContainer>
    );
}

export default ProgressSection;
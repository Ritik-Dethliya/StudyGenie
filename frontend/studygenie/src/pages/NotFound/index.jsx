import { PageNotFoundContainer } from "./index.styled";

function PageNotFound() {
    return (  
        <PageNotFoundContainer>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </PageNotFoundContainer>
    );
}

export default PageNotFound;
import { SidebarContainer, SidebarFooter, SidebarList } from "./index.styled";
import { FiSettings } from "react-icons/fi";
const sidebarItems = [
    { id: 1, name: "Dashboard", key: "dashboard" },
    { id: 2, name: "Courses", key: "courses", link: "/courses" },
    { id: 3, name: "Profile", key: "profile" },
];
const sidebarFooterItems = [
    { id: 4, name: "Settings", key: "settings", icon: <FiSettings /> },
    { id: 5, name: "Logout", key: "logout" },
]
function Sidebar({
    isOpen= false, 
    onClose= () => {}, 
    onCourseSelect= () => {},
    onPageSelect= () => {}, 
    selectedCourse= null, 
    courses= []
}) {
    return ( 
        <SidebarContainer isOpen={isOpen}>
            <SidebarList>
                {sidebarItems.map((item) => (
                    <li key={item.key} onClick={() => onPageSelect(item.key)}>
                        {item.name}
                    </li>
                ))}
            </SidebarList>
            <SidebarFooter>
                {sidebarFooterItems.map((item) => (
                    <li key={item.key} onClick={() => onPageSelect(item.key)}>
                        {item.name} {item.icon && item.icon}
                    </li>
                ))}
            </SidebarFooter>
        </SidebarContainer>
    );
}

export default Sidebar;
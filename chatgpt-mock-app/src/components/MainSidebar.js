import { FaBars, FaHome, FaComments, FaCog } from "react-icons/fa";

export default function MainSidebar({ collapsed, setCollapsed }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header" onClick={() => setCollapsed(!collapsed)}>
        <FaBars />
        {!collapsed && <span className="logo">K-GPT</span>}
      </div>
      <ul className="sidebar-menu">
        <li><FaHome /> {!collapsed && <span>Home</span>}</li>
        <li><FaComments /> {!collapsed && <span>Chat</span>}</li>
        <li><FaCog /> {!collapsed && <span>Settings</span>}</li>
      </ul>
    </aside>
  );
}

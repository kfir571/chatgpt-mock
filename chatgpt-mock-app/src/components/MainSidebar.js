import { FaBars, FaPlus } from "react-icons/fa";

export default function MainSidebar({ collapsed, setCollapsed, setHistoryChat }) {
  const changeChat = (e) => {
    setHistoryChat(Number(e.currentTarget.id));
  }

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header" onClick={() => setCollapsed(!collapsed)}>
        <FaBars size={16} />
        {!collapsed && <span className="logo">K-GPT</span>}
      </div>
      <ul className="sidebar-menu">
        <li id={0} onClick={changeChat}>{!collapsed && <span>Chat 1</span>}</li>
        <li id={1} onClick={changeChat}>{!collapsed && <span>Chat 2</span>}</li>
        <li id={2} onClick={changeChat}>{!collapsed && <span>Chat 3</span>}</li>
        <li><FaPlus/></li>
      </ul>
    </aside>
  );
}

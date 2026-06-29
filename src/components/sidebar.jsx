import { useState } from "react";

const NAV_ITEMS = [
  { icon: "⊞", label: "Dashboard" },
  { icon: "👥", label: "Users", active: true },
  { icon: "📊", label: "Reports" },
  { icon: "🏢", label: "Departments" },
  { icon: "⚙️", label: "Settings" },
];

function Sidebar() {
  const [active, setActive] = useState("Users");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar${collapsed ? " sidebar--collapsed" : ""}`}>

      <div className="sidebar__brand">
        {!collapsed && (
          <span className="sidebar__brand-name">UserBase</span>
        )}
        <button
          className="sidebar__toggle"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`sidebar__item${active === item.label ? " sidebar__item--active" : ""}`}
            onClick={() => setActive(item.label)}
            title={collapsed ? item.label : ""}
          >
            <span className="sidebar__icon">{item.icon}</span>
            {!collapsed && (
              <span className="sidebar__label">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__avatar">A</div>
        {!collapsed && (
          <div className="sidebar__user-info">
            <span className="sidebar__user-name">Admin</span>
            <span className="sidebar__user-role">Administrator</span>
          </div>
        )}
      </div>

    </aside>
  );
}

export default Sidebar;
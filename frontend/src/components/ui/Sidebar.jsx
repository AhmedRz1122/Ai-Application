export const Sidebar = ({ children, className }) => (
    <div className={`sidebar ${className}`}>{children}</div>
  );
  export const SidebarContent = ({ children, className }) => (
    <div className={`sidebar-content ${className}`}>{children}</div>
  );
  export const SidebarGroup = ({ children, className }) => (
    <div className={`sidebar-group ${className}`}>{children}</div>
  );
  export const SidebarGroupContent = ({ children, className }) => (
    <div className={`sidebar-group-content ${className}`}>{children}</div>
  );
  export const SidebarGroupLabel = ({ children, className }) => (
    <div className={`sidebar-group-label ${className}`}>{children}</div>
  );
  export const SidebarMenu = ({ children, className }) => (
    <ul className={`sidebar-menu ${className}`}>{children}</ul>
  );
  export const SidebarMenuItem = ({ children, className }) => (
    <li className={`sidebar-menu-item ${className}`}>{children}</li>
  );
  export const SidebarMenuButton = ({ children, asChild, className }) =>
    asChild ? (
      children
    ) : (
      <button className={`sidebar-menu-button ${className}`}>{children}</button>
    );
  
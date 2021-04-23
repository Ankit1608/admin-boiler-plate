import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Users",
    route: "/users",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Users Gist",
        to: "/users/gist",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Users Payments",
        to: "/users/payments",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Users Security",
        to: "/users/security",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Courses",
    route: "/courses",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Courses",
        to: "/courses/allcourses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Edit Course",
        to: "/courses/editcourses",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Course",
        to: "/courses/addcourse",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Paths",
    route: "/paths",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Paths",
        to: "/paths/allpaths",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Edit Paths",
        to: "/paths/editpath",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Path",
        to: "/paths/addpath",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Flashes",
    route: "/flashes",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Flash",
        to: "/flashes/allflashes",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Flash",
        to: "/flashes/addflash",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Footer",
        to: "/pages/footer",
      },
    ],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Settings",
    to: "/settings",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
];

export default _nav;

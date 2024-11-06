export const navbarData = [
  {
    id: 1,
    title: "Home",
    subMenu: false,
    link: "/",
  },
  {
    id: 2,
    title: "Product",
    subMenu: true,
    submenuList: [
      { name: "Stamps", link: "/product/stamps" },
      { name: "Covers", link: "/product/covers" },
      { name: "Folders", link: "/product/folders" },
      { name: "Post Card", link: "/product/post-card" },
      { name: "Envelope", link: "/product/envelope" },
    ],
  },
  {
    id: 3,
    title: "Services",
    subMenu: true,
    submenuList: [
      { name: "Cancellations", link: "/services/cancellations" },
      { name: "E-Posts", link: "/services/e-posts" },
      { name: "Forums", link: "/services/forums" },
      { name: "Wrappers", link: "/services/wrappers" },
      { name: "Mobile app", link: "/services/mobile-app" },
      { name: "Postal rates", link: "/services/postal-rates" },
    ],
  },
  {
    id: 4,
    title: "News",
    subMenu: true,
    submenuList: [
      { name: "Postal Notices and Circulars", link: "/news/postal-notices" },
      { name: "Errors", link: "/news/errors" },
      { name: "Philatelic events", link: "/news/philatelic-events" },
      { name: "Archives", link: "/news/archives" },
    ],
  },
  {
    id: 5,
    title: "About Us",
    subMenu: false,
    link: "/about-us",
  },
  {
    id: 6,
    title: "Quiz",
    subMenu: false,
    link: "/quiz",
  },
  {
    id: 7,
    title: "PDA",
    subMenu: true,
    submenuList: [
      { name: "Register", link: "/pda/register" },
      { name: "Recharge", link: "/pda/recharge" },
    ],
  },
];

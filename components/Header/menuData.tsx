import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "About Denflex",
        path: "/about",
        newTab: false,
      },
      {
        id: 12,
        title: "R&D",
        path: "/about/rd",
        newTab: false,
      },
      {
        id: 13,
        title: "Notice",
        path: "/about/notice",
        newTab: false,
      },
      {
        id: 14,
        title: "Location",
        path: "/about/location",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Spring Endo File",
        path: "/product/spring-endo-file",
        newTab: false,
      },
      {
        id: 22,
        title: "Combined Torque Wrench",
        path: "/product/combined-torque-wrench",
        newTab: false,
      },
      {
        id: 23,
        title: "One Touch Implant",
        path: "/product/one-touch-implant",
        newTab: false,
      },
      {
        id: 24,
        title: "Helical Attachment",
        path: "/product/helical-attachment",
        newTab: false,
      },
      {
        id: 25,
        title: "Smart Abutment",
        path: "/product/smart-abutment",
        newTab: false,
      },
      {
        id: 26,
        title: "NG Handpiece",
        path: "/product/ng-handpiece",
        newTab: false,
      },
      {
        id: 27,
        title: "Advanced Fixture",
        path: "/product/advanced-fixture",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Events",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Events",
        path: "/events",
        newTab: false,
      },
      {
        id: 32,
        title: "Seminars",
        path: "/seminars",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Support",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "PR Center",
        path: "/support/pr-center",
        newTab: false,
      },
      {
        id: 42,
        title: "Manuals",
        path: "/support/manuals",
        newTab: false,
      },
      {
        id: 43,
        title: "Catalogs",
        path: "/support/catalogs",
        newTab: false,
      },
      {
        id: 44,
        title: "Inquires",
        path: "/support/inquires",
        newTab: false,
      },
      {
        id: 45,
        title: "FAQ",
        path: "/support/faq",
        newTab: false,
      },
    ],
  },
];
export default menuData;

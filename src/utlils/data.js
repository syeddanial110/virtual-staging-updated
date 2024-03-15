// furniture images import
import accessoryImg from "../assets/images/furnitureGallery/accessories1.png";
import appliancesImg from "../assets/images/furnitureGallery/appliances1.png";
import artistImg from "../assets/images/furnitureGallery/artist1.png";
import artworkImg from "../assets/images/furnitureGallery/artwork1.png";
import barStoolsImg from "../assets/images/furnitureGallery/barStools1.png";
import basketsImg from "../assets/images/furnitureGallery/baskets1.png";
import bathImg from "../assets/images/furnitureGallery/bath1.png";
import bathroomImg from "../assets/images/furnitureGallery/bathroom1.png";
import accessories1Img from "../assets/images/furnitureGallery/Accessories/Accessories 01.jpg";
import accessories2Img from "../assets/images/furnitureGallery/Accessories/Accessories 02.jpg";
import accessories3Img from "../assets/images/furnitureGallery/Accessories/Accessories 03.jpg";
import accessories4Img from "../assets/images/furnitureGallery/Accessories/Accessories 04.jpg";
import accessories5Img from "../assets/images/furnitureGallery/Accessories/Accessories 05.jpg";
import accessories6Img from "../assets/images/furnitureGallery/Accessories/Accessories 06.jpg";
import accessories7Img from "../assets/images/furnitureGallery/Accessories/Accessories 07.jpg";
import accessories8Img from "../assets/images/furnitureGallery/Accessories/Accessories 08.jpg";
import { getToken } from "@/auth/Auth";

export const pages = [
  {
    link: "/",
    name: "Home",
  },
  {
    name: "About Us",
    subLinks: [
      {
        name: "About Us",
        link: "/about-us",
      },
      {
        name: "Blog",
        link: "/blogs",
      },
    ],
  },
  {
    name: "Furniture Gallery",
    subLinks: [
      {
        name: "Furniture Gallery",
        link: "/furniture-gallery",
      },
    ],
  },
  {
    name: "Curated Collections",
    subName: [
      {
        name: "Rooms – Preview photo grid of each room below",
        subLinks: [
          {
            name: "Living Rooms",
            link: "/",
          },
          {
            name: "Dining Rooms",
            link: "/",
          },
          {
            name: "Bedrooms",
            link: "/",
          },
          {
            name: "Office",
            link: "/",
          },
          {
            name: "Bathrooms – View All",
            link: "/",
          },
          {
            name: "Bonus Rooms – View All",
            link: "/",
          },
          {
            name: "Children’s Baths – View All",
            link: "/",
          },
          {
            name: "Children’s Bedrooms – View all",
            link: "/",
          },
          {
            name: "Children’s Closets – View All",
            link: "/",
          },
          {
            name: "Closets – View All",
            link: "/",
          },
          {
            name: "Kitchen – View All",
            link: "/",
          },
          {
            name: "Outside – View All",
            link: "/",
          },
        ],
      },
      {
        name: "Styles",
        subLinks: [
          {
            name: "Coastal",
            link: "/",
          },
          {
            name: "Farmhouse",
            link: "/",
          },
          {
            name: "Mid Century Modern",
            link: "/",
          },
          {
            name: "Scandinavian",
            link: "/",
          },
          {
            name: "Traditional",
            link: "/",
          },
          {
            name: "Urban Industrial",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    subLinks: [
      {
        name: "Virtual Staging",
        link: "/services/virtual-staging",
      },
      {
        name: "Virtual Renovation",
        link: "/services/virtual-renovation",
      },
      {
        name: "Virtual Twilights",
        link: "/services/virtual-twilights",
      },
      {
        name: "Commercial Virtual Staging",
        link: "/services/commercial-virtual-staging",
      },
      {
        name: "Commercial Virtual Renovation",
        link: "/services/commercial-virtual-renovation",
      },
    ],
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Contact",
    link: "/contact-us",
  },
];

const token = getToken();

export const menu = [
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Change Password",
    link: "/change-password",
  },
  {
    title: "Orders",
    link: "/order",
  },
  {
    title: "Logout",
    link: "/login",
  },
];

export const furnitureArr = [
  {
    id: 1,
    image: accessoryImg,
    title: "Accessories",
  },
  {
    id: 2,
    image: appliancesImg,
    title: "Appliances",
  },
  {
    id: 3,
    image: artistImg,
    title: "Artist",
  },
  {
    id: 4,
    image: artworkImg,
    title: "Artwork",
  },
  {
    id: 5,
    image: barStoolsImg,
    title: "Bar Stools",
  },
  {
    id: 6,
    image: basketsImg,
    title: "Baskets",
  },
  {
    id: 7,
    image: bathImg,
    title: "Bath",
  },
  {
    id: 8,
    image: bathroomImg,
    title: "Bathroom",
  },
];

export const accesoriesArr = [
  {
    id: 1,
    title: "Accessories 1",
    image: accessories1Img,
  },
  {
    id: 2,
    title: "Accessories 2",
    image: accessories2Img,
  },
  { id: 3, title: "Accessories 3", image: accessories3Img },
  {
    id: 4,
    title: "Accessories 4",
    image: accessories4Img,
  },
  {
    id: 5,
    title: "Accessories 5",
    image: accessories5Img,
  },
  {
    id: 6,
    title: "Accessories 6",
    image: accessories6Img,
  },
  {
    id: 7,
    title: "Accessories 7",
    image: accessories6Img,
  },
];

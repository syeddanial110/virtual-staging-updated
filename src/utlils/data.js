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

import reviewImg1 from "../assets/images/reviews/Ann Holtz.png";
import reviewImg2 from "../assets/images/reviews/Antoinette Young.png";
import reviewImg3 from "../assets/images/reviews/Bianca Reyes.png";
import reviewImg4 from "../assets/images/reviews/carlos f.png";
import reviewImg5 from "../assets/images/reviews/carmen murphy.png";
import reviewImg6 from "../assets/images/reviews/Chris Reeder.png";
import reviewImg7 from "../assets/images/reviews/christine dick.png";
import reviewImg8 from "../assets/images/reviews/David Alexander.png";
import reviewImg9 from "../assets/images/reviews/georgette c.png";
import reviewImg10 from "../assets/images/reviews/jenn clark.png";
import reviewImg11 from "../assets/images/reviews/john rawlings.png";
import reviewImg12 from "../assets/images/reviews/Kay Riddle.png";
import reviewImg13 from "../assets/images/reviews/kelly m.png";
import reviewImg14 from "../assets/images/reviews/ron wolfe.png";
import reviewImg15 from "../assets/images/reviews/seth shapiro.png";
import reviewImg16 from "../assets/images/reviews/Tim Campbell.png";

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
export const mobilePages = [
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
    link: "/furniture-gallery",
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

export const staticReviews = [
  {
    image: reviewImg4,
    name: "Carlos Fuentes",
    rating: 5,
    created_at: "One day ago",
    comments: `Outstanding service! I'll gladly suggest this company to my friends and family members.`,
  },
  {
    image: reviewImg11,
    name: "John Rawlings",
    rating: 5,
    created_at: "One day ago",
    comments: `I've used the virtual staging numerous times and I see an increase in my lead generation because of how well the homes look once the staging is added to the rooms. Virtual staging is a perfect complement to any marketing strategy`,
  },
  {
    image: reviewImg5,
    name: "Carmen Murphy",
    rating: 5,
    created_at: "2 days ago",
    comments: `A good alternative when real life staging doesn't work. Perfect for a condo building!`,
  },
  {
    image: reviewImg9,
    name: "Georgette Calomeris",
    rating: 5,
    created_at: "2 days ago",
    comments: `Picture Perfect always delivers the most professional services. We were happy with the drone photos as well as their virtual staging. They are our "go to" for all listing photos.`,
  },
  {
    image: reviewImg13,
    name: "Kelly Malagari",
    rating: 5,
    created_at: "2 days ago",
    comments: `Picture Perfect does an amazing job with virtual staging and I truly believe it helps sell the vacant homes quicker for top dollar! Highly recommend using this option for those vacant properties.`,
  },
  {
    image: reviewImg14,
    name: "Ron Wolfe",
    rating: 5,
    created_at: "2 days ago",
    comments: `We love the virtual staging option that Picture Perfect offers! We have used this service multiple times and are always thrilled with the virtual stages created for our listings.`,
  },
  {
    image: reviewImg15,
    name: "Seth Shapero",
    rating: 5,
    created_at: "2 days ago",
    comments: `Whenever I have needed virtual staging Picture Perfect is the one company that I trust. They do a great job and the turn around is fast!`,
  },
  {
    image: reviewImg10,
    name: "Jenn Clark",
    rating: 5,
    created_at: "7 months ago",
    comments: `I have to admit, I was a little skeptical about this service at first. I have a rental property that I wanted staged but didn't want to deal with people moving actual furniture in and out (that puts wear and tear on the house and takes a lot of time). I kind of held my breath until the photos came back and wow - it was amazing! The pictures speak for themselves. The customer service was great, their turn around time was exceptionally fast, and the quality of work was good. I highly recommend to everyone.`,
  },
  {
    image: reviewImg3,
    name: "Bianca Reyes",
    rating: 5,
    created_at: "9 months ago",
    comments: `I have used Chris for my listings and his virtual staging is top notch. He has great style, an eye for detail and even includes shadows on objects so it truly looks real. I've managed to sell quickly and for a higher price thanks to these visuals! Amazing work, highly recommended!`,
  },
  {
    image: reviewImg2,
    name: "Antoinette Young",
    rating: 5,
    created_at: "1 years ago",
    comments: `Picture Perfect Virtual Staging is truly perfect! Chris is beyond accommodating, extremely personable, and her passion for both photography and staging became quickly evident. What was most refreshing for me was how she let me design each detail. I never felt rushed. Her site selection is expansive and offers a wide array of options. I highly recommend using her services!`,
  },
  {
    image: reviewImg7,
    name: "Christine Dick",
    rating: 5,
    created_at: "2 years ago",
    comments: `Loved the ease of ordering and the fantastic virtual staging of my listing photos! Thank you Picture Perfect.`,
  },
  {
    image: reviewImg8,
    name: "David Alexander",
    rating: 5,
    created_at: "2 years ago",
    comments: `The property photos were high resolution and the virtual staging was amazing!`,
  },
  {
    image: reviewImg12,
    name: "Kay Riddle",
    rating: 5,
    created_at: "2 years ago",
    comments: `This service is a wonderful alternative to staging, my clients had beautiful furnishings and wanted to show with furniture but moving out of state and coordinating it all was daunting. Problem solved, Virtually staged. The flexibility to create rooms, spaces and show sizes to online shoppers without the frustrations. Clients happy, Realtor happy. Great service.`,
  },
  {
    image: reviewImg16,
    name: "Tim Campbell",
    rating: 5,
    created_at: "2 years ago",
    comments: `This is my new "go to" for staging. Chris is professional, helpful and my turn around was 24 hours which is so important. Most impressive though is the cost versus actual staging. My client was thrilled!`,
  },
  {
    image: reviewImg6,
    name: "Chris Reeder",
    rating: 5,
    created_at: "3 years ago",
    comments: `This service has been fantastic especially during the pandemic when sellers don't want used furnishings brought in and out of their homes. Virtual staging allows buyers to see what a room would look like if it had furnishings without all the work needed for regular staging. This company is superior to all others I have used and I don't know what I'd do without them!`,
  },
  {
    image: reviewImg1,
    name: "Ann Holtz",
    rating: 5,
    created_at: "5 years ago",
    comments: `This is my new "go to" for staging. Chris is professional, helpful and my turn around was 24 hours which is so important. Most impressive though is the cost versus actual staging. My client was thrilled!`,
  },
];

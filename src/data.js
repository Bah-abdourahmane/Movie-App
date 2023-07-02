import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaRegListAlt, FaUsers } from "react-icons/fa";
import { RiLockPasswordLine, RiMovie2Fill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiMail, FiMapPin, FiPhoneCall, FiSettings } from "react-icons/fi";

export const CategoriesData = [
  { id: 1, title: "Romantic" },
  { id: 2, title: "Action" },
  { id: 3, title: "Horror" },
  { id: 4, title: "Comedy" },
  { id: 5, title: "Adventure" },
  { id: 6, title: "Drama" },
  { id: 7, title: "Sports" },
  { id: 8, title: "Fantasy" },
  { id: 9, title: "Musicals" },
  { id: 10, title: "Thriller" },
  { id: 11, title: "Historical" },
  { id: 12, title: "Science" },
  { id: 13, title: "Mystery" },
  { id: 14, title: "Western" },
];
export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about-us" },
      { name: "Contact Us", link: "/contact" },
      { name: "Movies", link: "/movies" },
    ],
  },
  {
    title: "Top Categories",
    links: [
      { name: "Action", link: "#" },
      { name: "Romantic", link: "#" },
      { name: "Drama", link: "#" },
      { name: "Historical", link: "#" },
    ],
  },
  {
    title: "My Account",
    links: [
      { name: "Dashbord", link: "/dashboard" },
      { name: "My Favorites", link: "/favorites" },
      { name: "Profile", link: "/profile" },
      { name: "Change Password", link: "/password" },
    ],
  },
];

export const MovieData = [
  {
    name: "Army of The Dead",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "2.jpg",
    image: "2.jpg",
    category: "Western",
    video: "video-1.mp4",
    language: "English",
    year: "2022",
    time: "3 hr",
    video: "",
    rate: 2.4,
    reviews: 23,
  },
  {
    name: "The Conjuring",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "3.jpg",
    image: "3.jpg",
    category: "Thriller",
    video: "video-1.mp4",
    language: "Chinese",
    year: "1990",
    time: "4 hr",
    video: "",
    rate: 0,
    reviews: 100,
  },
  {
    name: "My Favorite Person",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "4.jpg",
    image: "4.jpg",
    category: "Adventure",
    video: "video-1.mp4",
    language: "Korean",
    year: "2000",
    time: "11 hr",
    video: "",
    rate: 2.5,
    reviews: 2,
  },
  {
    name: "Lets Be a Crops",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "12.jpg",
    image: "12.jpg",
    category: "Musicals",
    video: "video-1.mp4",
    language: "English",
    year: "2022",
    time: "10 hr",
    video: "",
    rate: 2.7,
    reviews: 4,
  },
  {
    name: "Jumanji",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "13.jpg",
    image: "13.jpg",
    category: "Thriller",
    video: "video-1.mp4",
    language: "English",
    year: "2022",
    time: "2 hr",
    video: "",
    rate: 8.7,
    reviews: 400,
  },
  {
    name: "Avatar",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "1.jpg",
    image: "1.jpg",
    category: "Musicals",
    video: "video-1.mp4",
    language: "English",
    year: "2022",
    time: "10 hr",
    video: "",
    rate: 2.7,
    reviews: 4,
  },
  {
    name: "My Favorite Person",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "4.jpg",
    image: "4.jpg",
    category: "Adventure",
    video: "video-1.mp4",
    language: "Korean",
    year: "2000",
    time: "11 hr",
    video: "",
    rate: 3.5,
    reviews: 2,
  },
  {
    name: "Lets Be a Crops",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores atque ullam praesentium fuga unde soluta consectetur inventore nisi pariatur dolorum sit magnam qui autem voluptas natus incidunt, nam suscipit?",
    titleImage: "12.jpg",
    image: "12.jpg",
    category: "Musicals",
    video: "video-1.mp4",
    language: "English",
    year: "2022",
    time: "10 hr",
    video: "",
    rate: 0.7,
    reviews: 4,
  },
];

export const UsersData = [
  {
    Fullname: "Tom Cruise",
    email: "tomcruise@gmail.com",
    image: "1.jpg",
    category: "Romance",
    message: "The majority have suffered alteration",
    rate: 1.3,
  },
  {
    Fullname: "John Doe",
    image: "2.jpg",
    email: "tomcruise@gmail.com",
    category: "Action",
    message:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus velit, minus labore laboriosam recusandae autem ",
    rate: 1.5,
  },
  {
    Fullname: "Minah Lee",
    image: "3.jpg",
    email: "tomcruise@gmail.com",
    category: "Horror",
    message: "The majority have suffered alteration",
    rate: 4,
  },
  {
    Fullname: "John Snow",
    image: "4.jpg",
    category: "Comedy",
    email: "tomcruise@gmail.com",
    message: "The majority have suffered alteration",
    rate: 3.3,
  },
  {
    Fullname: "Chloe Brayan",
    image: "5.jpg",
    email: "tomcruise@gmail.com",
    category: "Thriller",
    message: "The majority have suffered alteration",
    rate: 5,
  },
  {
    Fullname: "Beyonce",
    image: "6.jpg",
    category: "Drama",
    email: "tomcruise@gmail.com",
    message: "The majority have suffered alteration",
    rate: 3,
  },
];

export const ContactData = [
  {
    id: 1,
    title: "Email Us",
    contact: "Bahdev@gmail.com",
    icon: FiMail,
    info: "Interactively grow backend ideas for cross-platform models.",
  },
  {
    id: 2,
    title: "Call Us",
    contact: "+212 629 430 540",
    icon: FiPhoneCall,
    info: "Distinctively exploit optimal alignments for intuitive bandwidth",
  },
  {
    id: 3,
    title: "Location",
    icon: FiMapPin,
    info: "Agadir Maroc, Tilila Souss Massa",
  },
];
// Quickly conditionary catalysts for change. Continually size superior initiatives for wireless technologies. Dynamically optimize

export const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2020" },
  { title: "2020 - 2030" },
];
export const TimesData = [
  { title: "Sort By Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];
export const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Stars" },
  { title: "3 Stars" },
  { title: "4 Stars" },
  { title: "5 Stars" },
];

export const SideLinks = [
  { name: "Dashboard", link: "/dashboard", icon: BsFillGridFill },
  { name: "Movies List", link: "/movieslist", icon: FaListAlt },
  { name: "Add Movie", link: "/addmovie", icon: RiMovie2Fill },
  { name: "Categories", link: "/categories", icon: HiViewGridAdd },
  { name: "Users", link: "/users", icon: FaUsers },
  { name: "Update Profile", link: "/profile", icon: FiSettings },
  { name: "Favorites Movies", link: "/favorites", icon: FaHeart },
  { name: "Change Password", link: "/password", icon: RiLockPasswordLine },
];

export const DashboardData = [
  { bg: "bg-orange-600", icon: FaRegListAlt, title: "Total Movies", total: 50 },
  {
    bg: "bg-green-600",
    icon: HiViewGridAdd,
    title: "Total Categories",
    total: 40,
  },
  { bg: "bg-green-600", icon: FaUsers, title: "Total Users", total: 100 },
];

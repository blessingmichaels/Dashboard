import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import { IoIosStats, IoIosSettings, IoIosPerson, IoIosPersonAdd, IoIosEyeOff, IoIosLogIn, IoIosLogOut, } from "react-icons/io";
import { FaChartBar, FaCalendarAlt, FaFacebookMessenger, FaUserCog, FaListAlt, } from "react-icons/fa";


import user01 from "../assets/user-2.jfif";
import user02 from "../assets/user-4.jfif";
import user03 from "../assets/user-3.jfif";
import user04 from "../assets/user-1.jfif";

export const links = [
    {
        href: "#",
        icon: FaChartBar,
        text: "Dashboard",
    },
    {
        href: "#",
        icon: FaCalendarAlt,
        text: "Kanban",
        badge: {
            text: "Pro",
            color: "bg-gray-100 dark:text-gray-700",
        },
    },
    {
        href: "#",
        icon: FaFacebookMessenger,
        text: "Inbox",
        badge: {
            text: 4,
            color: "bg-blue-200 dark:text-blue-700",
        },
    },
    {
        href: "#",
        icon: FaChartBar,
        text: "Dashboard",
    },

    {
        href: "#",
        icon: FaListAlt,
        text: "Products",
    },
    {
        href: "#",
        icon: IoIosLogIn,
        text: "Sign In",
    },
    {
        href: "#",
        icon: IoIosLogOut,
        text: "Sign Up",
    },
];

export const employeesData = [
    {
        title: "Total Employees",
        icon: IoIosPerson,
        count: 200,
        bgColor: "bg-gray-100",
    },
    {
        title: "On Leave",
        icon: IoIosEyeOff,
        count: 15,
        bgColor: "bg-blue-200",
    },
    {
        title: "New Recruits",
        icon: IoIosPersonAdd,
        count: 35,
        bgColor: "bg-yellow-200",
    },
];

export const shortcutLink = [
    {
        title: "Goals",
        icon: GoGoal,
    },
    {
        title: "Plan",
        icon: GrPlan,
    },
    {
        title: "Stats",
        icon: IoIosStats,
    },
    {
        title: "Setting",
        icon: IoIosSettings,
    },
];

export const users = [
    {
        name: "Rosa Jakes",
        country: "UK",
        role: "Frontend Developer",
        image: user02,
        bgColor: "bg-yellow-500",
    },
    {
        name: "Zach Banes",
        country: "Canada",
        role: "Python Developer",
        image: user04,
        bgColor: "bg-blue-200",
    },
    {
        name: "Anne Mac",
        country: "USA",
        role: "Backend Developer",
        image: user03,
        bgColor: "bg-orange-200",
    },
    {
        name: "Jacob Moree",
        country: "Australia",
        role: "Full Stack Developer",
        image: user01,
        bgColor: "bg-green-200",
    },
   
];

export const events = [
    {   date: "17 Aug",
        title: "Upcoming Event",
        description: "Employees Welcome Party",
    },
    {
        date: "10 Sept",
        title: "Annual Conference",
        description: "Join us for our annual conference",
    },
    {
        date: "20 Sept",
        title: "Networking Meetup",
        description: "Connect with professionals in your field",
    },
];


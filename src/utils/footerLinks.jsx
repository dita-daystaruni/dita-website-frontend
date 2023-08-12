import React from "react";
import {HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram} from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const aboutCampus = [
];

export const relatedLinks = [
  {
    id: 0,
    name: "E-Learning",
    link: "https://elearning.daystar.ac.ke/login/index.php",
  },
  {
    id: 1,
    name: "Student Portal",
    link: "https://student.daystar.ac.ke/",
  },
];

export const contactUs = [
  {
    id: 0,
    name: "dita@daystar.com",
    icon: <HiOutlineMail size={22}/>,
    link: "#",
  },
  {
    id: 2,
    name: "Daystar University, ATHI RIVER, Kenya",
    icon: <HiOutlineLocationMarker size={22}/>,
    link: "#",
  },
];

export const socialMediaLinks = [
  {
    id: 2,
    icon: <AiFillLinkedin size={22} />,
    link: "https://www.linkedin.com/company/dita-daystar-university",
  },
  {
    id: 3,
    icon: <AiFillGithub size={22} />,
    link: "https://github.com/dita-daystaruni",
  },
  {
    id: 4,
    icon: <FaInstagram size={22} />,
    link: "https://instagram.com/dita.daystar?igshid=MzRlODBiNWFlZA==",
  },
];


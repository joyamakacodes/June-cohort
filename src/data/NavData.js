import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"
import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
export const NavData= [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: faHome
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
    icon: faAddressBook,
  },
  {
    id: 3,
    title: 'Contact',
    link: '/contact',
    icon: faIdCard
  },
  {
    id: 4,
    title: 'Services',
    link: '/services',
    icon: faBriefcase,
  }
]
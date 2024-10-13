import { CalendarCheck, HomeIcon, Settings2, Users } from "lucide-react"

interface iAppProps {
  id: number
  name: string
  href: string
  icon: any
}

export const dashboardLinks: iAppProps[] = [
  {
    id: 0,
    name: 'Event Types',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    id: 1,
    name: 'Meeting',
    href: '/dashboard/meetings',
    icon: Users,
  },
  {
    id: 2,
    name: 'Availability',
    href: '/dashboard/availability',
    icon: CalendarCheck,
  },
  {
    id: 3,
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings2,
  },
]

export function DashboardLinks() {

}
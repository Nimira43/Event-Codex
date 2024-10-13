import { CalendarCheck, HomeIcon, LucideProps, Settings2, Users } from "lucide-react"
import Link from "next/link"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface iAppProps {
  id: number
  name: string
  href: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> &RefAttributes<SVGSVGElement>>
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

  return (
    <>
      {dashboardLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          <link.icon className='size-4' />
          {link.name}
        </Link>
      ))}
    </>
  )
}
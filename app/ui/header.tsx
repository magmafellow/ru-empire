import Link from 'next/link'
import { GiEagleEmblem } from 'react-icons/gi'
import BurgerMenu from '@/app/ui/burger-menu'

export default function Header() {
  return (
    <header className="header flex justify-between items-center h-[100px] md:h-[132px]">
      <Link href="/">
        <GiEagleEmblem
          className="text-gr hover:text-wh transition"
          fontSize={72}
        />
      </Link>
      <nav>
        <ul className="items-center hidden sm:flex gap-6 text-xl expressive">
          <li>
            <Link className='hover:underline underline-offset-4' href="#">Факты</Link>
          </li>
          <li>
            <Link className='hover:underline underline-offset-4' href="#">Правители</Link>
          </li>
          <li>
            <Link className='hover:underline underline-offset-4' href="#">События</Link>
          </li>
          <li>
            <Link className='hover:underline underline-offset-4' href="#">Реформы</Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  )
}

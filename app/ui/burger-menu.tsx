'use client'

import Link from 'next/link'
import { act, useEffect, useState } from 'react'

export default function BurgerMenu() {
  const [activated, setActivated] = useState(false)

  const onBurgerClickHandler = () => {
    const burgerMenu = document.querySelector('#burger-menu')
    const burgerWrapper = document.querySelector('#burger-wrapper')

    document.documentElement.classList.toggle('lock')
    burgerMenu?.classList.toggle('activated-burger')
    burgerWrapper?.classList.toggle('activated-wrapper')
  }

  return (
    <>
      <div
        id="burger-menu"
        className="cursor-pointer relative right-2 z-40 w-10 h-10 flex items-center justify-center flex-col gap-1.5 sm:hidden"
        onClick={onBurgerClickHandler}
      >
        <span className="transition-all w-full h-[3px] bg-wh rounded-[3px]"></span>
        <span className="transition-all w-full h-[3px] bg-wh rounded-[3px]"></span>
        <span className="transition-all w-full h-[3px] bg-wh rounded-[3px]"></span>
      </div>
      <div
        id="burger-wrapper"
        className="absolute pt-20 pb-8 px-4 -right-full w-full h-full top-0 z-30 bg-bl bg-opacity-95 transition-all duration-300"
      >
        <div className="w-full h-full text-wh">
          <div className="pr-20 text-right expressive">
            <div className="mb-10">
              <Link className="text-2xl px-2 py-1" href="#">
                Факты
              </Link>
            </div>
            <div className="mb-10">
              <Link className="text-2xl px-2 py-1" href="#">
                Правители
              </Link>
            </div>
            <div className="mb-10">
              <Link className="text-2xl px-2 py-1" href="#">
                События
              </Link>
            </div>
            <div className="mb-10">
              <Link className="text-2xl px-2 py-1" href="#">
                Реформы
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

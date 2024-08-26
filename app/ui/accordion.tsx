'use client'

import { IoIosArrowDown } from 'react-icons/io'

import { bitter } from '@/app/lib/fonts'
import clsx from 'clsx'

function findAccordionPlate(elem: any, deep: number = 0) {
  if (deep > 100) {
    return null
  }
  // document.body.parentElement
  if (elem.classList.contains('accordion-plate')) {
    return elem
  } else {
    return findAccordionPlate(elem.parentElement, deep + 1)
  }
}

function findAccordionContainer(elem: any, deep: number = 0) {
  if (deep > 100) {
    return null
  }
  // document.body.parentElement
  if (elem.classList.contains('accordion-container')) {
    return elem
  } else {
    return findAccordionContainer(elem.parentElement, deep + 1)
  }
}

export default function Accordion() {
  return (
    <div className="border-r border-l border-bl">
      <AccordionItem
        firstItem={true}
        title="корона"
        imgPath="/images/skipetr-derjava.jpg"
        text="Императорский скипетр — одна из главных регалий монархов Российской империи. Скипетр был изготовлен в 1762 году дляимператрицы Екатерины Великой мастером Леопольдом Пфистерером, в1774-м — дополнен бриллиантом «Орлов»."
      />
      <AccordionItem
        title="корона"
        imgPath="/images/skipetr-derjava.jpg"
        text="Императорский скипетр — одна из главных регалий монархов Российской империи. Скипетр был изготовлен в 1762 году дляимператрицы Екатерины Великой мастером Леопольдом Пфистерером, в1774-м — дополнен бриллиантом «Орлов»."
      />
      <AccordionItem
        title="корона"
        imgPath="/images/skipetr-derjava.jpg"
        text="Императорский скипетр — одна из главных регалий монархов Российской империи. Скипетр был изготовлен в 1762 году дляимператрицы Екатерины Великой мастером Леопольдом Пфистерером, в1774-м — дополнен бриллиантом «Орлов»."
      />
    </div>
  )
}

function AccordionItem({
  firstItem,
  title,
  imgPath,
  text,
}: {
  firstItem?: boolean | undefined
  title: string
  imgPath: string
  text: string
}) {
  return (
    <div className="accordion-container relative">
      <AccordionPlate firstItem={firstItem} title={title} />
      <AccordionSecret imgPath={imgPath} text={text} />
    </div>
  )
}

function AccordionSecret({ text, imgPath }: { text: string; imgPath: string }) {
  return (
    <div className="accordion-secret border-b border-bl">
      <div className="accordion-inner py-4 px-2 flex flex-col gap-3 lg:gap-9 lg:flex-row lg:p-4 lg:pl-8">
        <div className="imgBox w-[80%] max-w-[404px] lg:w-[100%] lg:max-w-max lg:basis-2/6  mx-auto h-[190px] lg:h-[258px] ">
          <img
            className="w-full h-full object-cover"
            src={imgPath}
            alt="attribute - skipetr"
          />
        </div>
        <div className="textBox lg:basis-4/6">
          <p className={`${bitter.className} lg:px-8 lg:pt-6 text-light`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

function AccordionPlate({
  firstItem,
  title,
}: {
  firstItem: boolean | undefined
  title: string
}) {
  const onClickHandler = function (e: any) {
    const accordionPlate = findAccordionPlate(e.target)
    const accordionContainer = findAccordionContainer(e.target)

    if (!accordionContainer.classList.contains('active-initial')) {
      const allActives = document.querySelectorAll('.active-initial')
      if (allActives.length > 0) {
        allActives.forEach((elem) => [
          elem.classList.remove('active-initial'),
          elem.classList.remove('activated'),
        ])
      }
    }

    accordionContainer.classList.toggle('active-initial')
    setTimeout(() => accordionContainer.classList.toggle('activated'), 10)
  }

  return (
    <div
      className={clsx(
        'accordion-plate relative hover:bg-[#4f2121] border-b border-bl expressive text-[32px] flex items-center justify-center transition',
        {
          'border-t': Boolean(firstItem),
        }
      )}
    >
      <span>{title}</span>
      <IoIosArrowDown
        className="absolute cursor-pointer text-yel text-[52px] right-4 top-0"
        onClick={onClickHandler}
      />
    </div>
  )
}

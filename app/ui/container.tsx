export default function Container({ children }: { children: any }) {
  return (
    <div className='min-h-screen overflow-hidden w-full bg-dk relative'>
      <div className="container mx-auto px-1 sm:px-2 md:px-3 lg:px-4">
        {children}
      </div>
    </div>
  )
}

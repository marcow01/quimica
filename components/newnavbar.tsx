import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/modetoggle";

export function New() {
  return (

    <header className="flex w-full shrink-0 items-center px-4 md:px-6 py-2 fixed top-0 left-0 right-0 z-10 bg-white/50 dark:bg-red-500/80 backdrop-blur-md transition-colors duration-300">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">

          <Link href="#" className="mr-6 lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <p className="ml-2 font-semibold">robotech</p>
          </Link>

          <div className="grid gap-2 py-6">
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              home
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              about
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              services
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              contact
            </Link>

            <ModeToggle />

          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <p className="ml-2 font-semibold">robotech</p>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {["home", "about", "services", "contact"].map((item) => (
          <Link
            key={item}
            href="#"
            className="inline-flex items-center px-1 py-1 text-sm font-medium"
            prefetch={false}
          >
            {item}
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
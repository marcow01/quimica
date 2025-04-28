
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/modetoggle";

export function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-md px-6 py-4 mx-auto transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              robotech
            </Link>
            <nav className="hidden ml-6 space-x-4 md:flex">
              {["início", "sobre", "equipe", "serviços", "contato"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  )
}
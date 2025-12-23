import React, { useContext, useEffect, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu'
import { ThemeContext } from './context/ThemeContext'
import { Moon, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

function Header() {
  const { toggleTheme } = useContext(ThemeContext)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenu(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ]

  const handleDashboardButton = () => {
    if (!user) {
      navigate('/login', { replace: true })
      return
    }
    navigate('dashboard')
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled
            ? 'bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/70'
            : 'bg-background/60 backdrop-blur'}
      `}
      >
        <div className="h-16">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">

            {/* Logo */}
            <h1 className="text-xl font-bold text-foreground cursor-pointer" onClick={() => navigate('/')}>
              KingsBridge
            </h1>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex mx-auto">
              <NavigationMenuList className="flex gap-8">
                {navItems.map(item => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.path}
                      className="text-sm font-medium hover:text-primary transition cursor-pointer"
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Actions */}
            <div className="ml-auto flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-md hover:bg-muted transition"
              >
                <Moon className="w-4 h-4" />
              </button>

              <Button onClick={() => navigate('/login')} size="sm" className="hidden sm:inline-flex">
                Login
              </Button>

              <Button onClick={handleDashboardButton} size="sm" className="hidden sm:inline-flex">
                Dashboard
              </Button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenu(prev => !prev)}
                aria-label="Toggle menu"
                className="md:hidden p-2 rounded-md hover:bg-muted transition"
              >
                {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300
          ${mobileMenu ? 'max-h-64 border-t' : 'max-h-0'}
        `}
        >
          <nav className="flex flex-col px-6 py-4 gap-4 bg-background">
            {navItems.map(item => (
              <span
                key={item.name}
                className="text-sm font-medium hover:text-primary cursor-pointer"
                onClick={() => {
                  navigate(item.path)
                  setMobileMenu(false)
                }}
              >
                {item.name}
              </span>
            ))}

            <Button onClick={() => navigate('/login')} size="sm" className="mt-2">
              Login
            </Button>

            <Button>
              <span
                onClick={() => {
                  handleDashboardButton()
                  setMobileMenu(false)
                }}
                className="text-sm font-medium hover:text-primary cursor-pointer"
              >
                Dashboard
              </span>
            </Button>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header

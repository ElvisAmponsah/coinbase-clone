import { Link } from 'react-router-dom'
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    const footerSections = [
        {
            title: 'Products',
            links: [
                { name: 'Exchange', path: '/' },
                { name: 'Wallet', path: '/' },
                { name: 'USD Coin', path: '/' },
                { name: 'Coinbase One', path: '/' },
                { name: 'Coinbase Card', path: '/' },
                { name: 'Coinbase Commerce', path: '/' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { name: 'Learn', path: '/learn' },
                { name: 'Blog', path: '/' },
                { name: 'Prices', path: '/explore' },
                { name: 'Taxes', path: '/' },
                { name: 'Developer Platform', path: '/' },
                { name: 'Status', path: '/' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About', path: '/' },
                { name: 'Careers', path: '/' },
                { name: 'Affiliates', path: '/' },
                { name: 'Press', path: '/' },
                { name: 'Legal & Privacy', path: '/' },
                { name: 'Cookie Policy', path: '/' },
            ],
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', path: '/' },
                { name: 'Contact Us', path: '/' },
                { name: 'Create Account', path: '/signup' },
                { name: 'System Status', path: '/' },
                { name: 'Supported Countries', path: '/' },
            ],
        },
    ]

    const socialLinks = [
        { icon: FaXTwitter, href: '#', label: 'Twitter' },
        { icon: FaFacebookF, href: '#', label: 'Facebook' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
        { icon: FaYoutube, href: '#', label: 'YouTube' },
    ]

    return (
        <footer className="bg-cb-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Top Section: Logo */}
                <div className="mb-12">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-cb-blue rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-2.13c-1.62-.26-2.89-1.18-3.22-2.74l1.88-.38c.23 1.07 1.26 1.5 2.34 1.5 1.16 0 2-.5 2-1.38 0-.78-.62-1.12-2.12-1.5C10.18 9.5 8.5 8.88 8.5 7.25c0-1.5 1.25-2.5 2.5-2.75V2.5h2v2c1.38.25 2.38 1.12 2.62 2.5l-1.88.38C13.5 6.5 12.74 6 11.88 6c-1 0-1.88.5-1.88 1.25 0 .88.88 1.12 2.38 1.5 1.88.5 3.12 1.12 3.12 2.75 0 1.62-1.38 2.62-2.5 2.88V16.5h-2z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold">coinbase</span>
                    </Link>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-cb-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-cb-gray-400 hover:bg-cb-blue hover:text-white transition-all duration-200"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-cb-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Coinbase. All rights reserved. (Clone for educational purposes only)
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

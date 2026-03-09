import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock sign up - just show alert
        alert('This is a clone for educational purposes. Sign-up functionality is not implemented.')
    }

    return (
        <div className="min-h-screen bg-cb-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2">
                        <div className="w-10 h-10 bg-cb-blue rounded-full flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-2.13c-1.62-.26-2.89-1.18-3.22-2.74l1.88-.38c.23 1.07 1.26 1.5 2.34 1.5 1.16 0 2-.5 2-1.38 0-.78-.62-1.12-2.12-1.5C10.18 9.5 8.5 8.88 8.5 7.25c0-1.5 1.25-2.5 2.5-2.75V2.5h2v2c1.38.25 2.38 1.12 2.62 2.5l-1.88.38C13.5 6.5 12.74 6 11.88 6c-1 0-1.88.5-1.88 1.25 0 .88.88 1.12 2.38 1.5 1.88.5 3.12 1.12 3.12 2.75 0 1.62-1.38 2.62-2.5 2.88V16.5h-2z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-cb-dark">coinbase</span>
                    </Link>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl border border-cb-gray-200 shadow-sm p-8">
                    <h1 className="text-2xl font-bold text-cb-dark text-center mb-2">Create your account</h1>
                    <p className="text-cb-gray-500 text-center mb-8">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-cb-blue hover:underline font-medium">
                            Sign in
                        </Link>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-cb-gray-700 mb-1.5">
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    required
                                    className="w-full px-4 py-3 border border-cb-gray-200 rounded-xl text-cb-dark placeholder-cb-gray-400 focus:outline-none focus:ring-2 focus:ring-cb-blue focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-cb-gray-700 mb-1.5">
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    required
                                    className="w-full px-4 py-3 border border-cb-gray-200 rounded-xl text-cb-dark placeholder-cb-gray-400 focus:outline-none focus:ring-2 focus:ring-cb-blue focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-cb-gray-700 mb-1.5">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-3 border border-cb-gray-200 rounded-xl text-cb-dark placeholder-cb-gray-400 focus:outline-none focus:ring-2 focus:ring-cb-blue focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-cb-gray-700 mb-1.5">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                required
                                minLength={8}
                                className="w-full px-4 py-3 border border-cb-gray-200 rounded-xl text-cb-dark placeholder-cb-gray-400 focus:outline-none focus:ring-2 focus:ring-cb-blue focus:border-transparent transition-all"
                            />
                            <p className="text-xs text-cb-gray-400 mt-1.5">Must be at least 8 characters</p>
                        </div>

                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                required
                                className="mt-1 w-4 h-4 text-cb-blue border-cb-gray-300 rounded focus:ring-cb-blue"
                            />
                            <label htmlFor="terms" className="text-sm text-cb-gray-500">
                                I certify that I am 18 years of age or older, and agree to the{' '}
                                <a href="#" className="text-cb-blue hover:underline">User Agreement</a> and{' '}
                                <a href="#" className="text-cb-blue hover:underline">Privacy Policy</a>.
                            </label>
                        </div>

                        <Button type="submit" variant="primary" className="w-full">
                            Create free account
                        </Button>
                    </form>
                </div>

                <p className="text-xs text-cb-gray-400 text-center mt-6">
                    This is a clone for educational purposes only. No real accounts are created.
                </p>
            </div>
        </div>
    )
}

export default SignUp

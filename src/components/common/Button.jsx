import { Link } from 'react-router-dom'

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    to,
    onClick,
    className = '',
    type = 'button',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full cursor-pointer'

    const variants = {
        primary: 'bg-cb-blue text-white hover:bg-cb-blue-dark active:scale-95',
        secondary: 'bg-cb-dark text-white hover:bg-gray-800 active:scale-95',
        outline: 'border-2 border-cb-gray-300 text-cb-dark hover:border-cb-blue hover:text-cb-blue active:scale-95',
        ghost: 'text-cb-dark hover:bg-cb-gray-100 active:scale-95',
        white: 'bg-white text-cb-blue hover:bg-cb-gray-100 active:scale-95',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button

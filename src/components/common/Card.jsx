const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <div
            className={`bg-white rounded-2xl border border-cb-gray-200 ${hover ? 'hover:shadow-lg hover:border-cb-gray-300 transition-all duration-300' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default Card

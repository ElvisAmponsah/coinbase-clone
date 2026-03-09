import { Link } from 'react-router-dom'
import Card from '../common/Card'

const CryptoCard = ({ asset }) => {
    const isPositive = asset.change24h >= 0

    return (
        <Link to={`/asset/${asset.id}`}>
            <Card className="p-5 h-full">
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: asset.color }}
                    >
                        {asset.symbol.charAt(0)}
                    </div>
                    <div>
                        <h3 className="font-semibold text-cb-dark">{asset.name}</h3>
                        <p className="text-sm text-cb-gray-500">{asset.symbol}</p>
                    </div>
                </div>

                <div className="flex items-end justify-between">
                    <p className="text-xl font-bold text-cb-dark">
                        ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <span className={`text-sm font-semibold px-2 py-0.5 rounded-md ${isPositive
                            ? 'text-green-600 bg-green-50'
                            : 'text-red-600 bg-red-50'
                        }`}>
                        {isPositive ? '+' : ''}{asset.change24h}%
                    </span>
                </div>

                {/* Mini sparkline placeholder */}
                <div className="mt-4 h-12 rounded-lg overflow-hidden">
                    <svg viewBox="0 0 200 50" className="w-full h-full">
                        <polyline
                            fill="none"
                            stroke={isPositive ? '#22c55e' : '#ef4444'}
                            strokeWidth="2"
                            points={generateSparkline(isPositive)}
                        />
                        <linearGradient id={`grad-${asset.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: isPositive ? '#22c55e' : '#ef4444', stopOpacity: 0.2 }} />
                            <stop offset="100%" style={{ stopColor: isPositive ? '#22c55e' : '#ef4444', stopOpacity: 0 }} />
                        </linearGradient>
                        <polygon
                            fill={`url(#grad-${asset.id})`}
                            points={`${generateSparkline(isPositive)},200,50,0,50`}
                        />
                    </svg>
                </div>
            </Card>
        </Link>
    )
}

// Generate a simple sparkline based on trending direction
function generateSparkline(isPositive) {
    const points = []
    let y = isPositive ? 40 : 10
    for (let i = 0; i <= 20; i++) {
        const x = i * 10
        y += (Math.random() - (isPositive ? 0.35 : 0.65)) * 8
        y = Math.max(5, Math.min(45, y))
        points.push(`${x},${y}`)
    }
    return points.join(' ')
}

export default CryptoCard

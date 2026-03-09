import { Link } from 'react-router-dom'

const CryptoRow = ({ asset, index }) => {
    const isPositive = asset.change24h >= 0

    return (
        <Link
            to={`/asset/${asset.id}`}
            className="grid grid-cols-12 items-center py-4 px-4 hover:bg-cb-gray-50 transition-colors duration-200 border-b border-cb-gray-200 cursor-pointer group"
        >
            {/* Rank */}
            <div className="col-span-1 text-cb-gray-500 text-sm">
                {index + 1}
            </div>

            {/* Name & Symbol */}
            <div className="col-span-4 sm:col-span-3 flex items-center gap-3">
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: asset.color }}
                >
                    {asset.symbol.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-cb-dark group-hover:text-cb-blue transition-colors">{asset.name}</p>
                    <p className="text-sm text-cb-gray-500">{asset.symbol}</p>
                </div>
            </div>

            {/* Price */}
            <div className="col-span-3 sm:col-span-2 text-right font-medium text-cb-dark">
                ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>

            {/* 24h Change */}
            <div className={`col-span-3 sm:col-span-2 text-right font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? '+' : ''}{asset.change24h}%
            </div>

            {/* Market Cap - hidden on mobile */}
            <div className="hidden sm:block sm:col-span-2 text-right text-cb-gray-600">
                ${asset.marketCap}
            </div>

            {/* Trade button - hidden on mobile */}
            <div className="hidden sm:flex sm:col-span-2 justify-end">
                <span className="px-4 py-1.5 bg-cb-blue text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Trade
                </span>
            </div>
        </Link>
    )
}

export default CryptoRow

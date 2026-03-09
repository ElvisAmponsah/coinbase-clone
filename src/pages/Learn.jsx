import { useState } from 'react'
import Card from '../components/common/Card'
import { learnArticles, learnCategories } from '../data/learnData'

const Learn = () => {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredArticles = activeCategory === 'All'
        ? learnArticles
        : learnArticles.filter((article) => article.category === activeCategory)

    return (
        <div className="bg-cb-gray-50 min-h-screen">
            {/* Hero */}
            <section className="bg-cb-dark py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Learn about crypto
                    </h1>
                    <p className="text-lg text-cb-gray-400 max-w-2xl mx-auto">
                        Explore the world of cryptocurrency with guides and tutorials from beginner to advanced topics.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filters */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {learnCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${activeCategory === category
                                    ? 'bg-cb-blue text-white'
                                    : 'bg-white text-cb-gray-600 hover:bg-cb-gray-100 border border-cb-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                        <Card key={article.id} className="overflow-hidden cursor-pointer group">
                            {/* Color Banner */}
                            <div
                                className="h-40 flex items-center justify-center relative overflow-hidden"
                                style={{ backgroundColor: article.color }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                                <span className="text-white text-4xl font-bold opacity-30 select-none">
                                    {article.title.split(' ').slice(0, 2).join(' ')}
                                </span>
                            </div>

                            <div className="p-6">
                                <span className="inline-block text-xs font-semibold text-cb-blue bg-blue-50 px-3 py-1 rounded-full mb-3">
                                    {article.category}
                                </span>
                                <h3 className="text-lg font-bold text-cb-dark mb-2 group-hover:text-cb-blue transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-cb-gray-500 text-sm leading-relaxed mb-3">
                                    {article.description}
                                </p>
                                <span className="text-xs font-medium text-cb-gray-400">
                                    {article.readTime}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Learn

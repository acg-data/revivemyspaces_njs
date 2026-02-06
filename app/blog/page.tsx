import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 0,
    title: "5 Signs Your Closet Needs Professional Organization",
    excerpt: "Is your closet chaos affecting your daily routine? Here are the telltale signs it's time to call in the professionals.",
    image: "/blog-closet-organization.jpg",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Closets",
    slug: "signs-your-closet-needs-organization"
  },
  {
    id: 1,
    title: "The Psychology of an Organized Home",
    excerpt: "Discover how a well-organized space can reduce stress, improve focus, and enhance your overall well-being.",
    image: "/blog-psychology.jpg",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "Wellness",
    slug: "psychology-of-organized-home"
  },
  {
    id: 2,
    title: "Kitchen Organization: A Complete Guide",
    excerpt: "Transform your kitchen into an efficient, beautiful space with these professional organization tips.",
    image: "/blog-kitchen.jpg",
    date: "January 5, 2025",
    readTime: "8 min read",
    category: "Kitchen",
    slug: "kitchen-organization-guide"
  },
  {
    id: 3,
    title: "Maintaining Organization: Tips That Actually Work",
    excerpt: "Learn sustainable systems to keep your space organized long after the initial transformation.",
    image: "/blog-maintenance.jpg",
    date: "December 28, 2024",
    readTime: "6 min read",
    category: "Tips",
    slug: "maintaining-organization-tips"
  },
];

export default function Blog() {
  return (
    <div className="bg-white text-black antialiased min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Blog & Resources
            </h1>
            <p className="text-gray-600 text-lg">
              Tips, insights, and inspiration for an organized life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-sm font-medium">Blog Image</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

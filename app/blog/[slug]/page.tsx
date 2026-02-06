import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
}> = {
  "signs-your-closet-needs-organization": {
    title: "5 Signs Your Closet Needs Professional Organization",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Closets",
    image: "/blog-closet-organization.jpg",
    excerpt: "Is your closet chaos affecting your daily routine?"
  },
  "psychology-of-organized-home": {
    title: "The Psychology of an Organized Home",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "Wellness",
    image: "/blog-psychology.jpg",
    excerpt: "Discover how a well-organized space can reduce stress."
  },
  "kitchen-organization-guide": {
    title: "Kitchen Organization: A Complete Guide",
    date: "January 5, 2025",
    readTime: "8 min read",
    category: "Kitchen",
    image: "/blog-kitchen.jpg",
    excerpt: "Transform your kitchen into an efficient, beautiful space."
  },
  "maintaining-organization-tips": {
    title: "Maintaining Organization: Tips That Actually Work",
    date: "December 28, 2024",
    readTime: "6 min read",
    category: "Tips",
    image: "/blog-maintenance.jpg",
    excerpt: "Learn sustainable systems to keep your space organized."
  }
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white text-black antialiased min-h-screen">
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article>
            <div className="mb-8">
              <span className="bg-black text-white text-sm font-bold px-4 py-1.5 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-500 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-200 mb-12 flex items-center justify-center">
              <span className="text-gray-400 font-medium">Blog Post Image</span>
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {post.excerpt} This is a placeholder for the full blog post content.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                The complete article would go here with detailed information about {post.category.toLowerCase()}.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-10">
                <h3 className="text-xl font-bold text-black mb-2">Ready to get organized?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us to schedule your free consultation.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

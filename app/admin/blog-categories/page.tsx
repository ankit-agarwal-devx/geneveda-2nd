'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Plus } from 'lucide-react';

const BLOG_CATEGORIES = [
  'Trending News', 'Breaking News', 'Badi Khabre', 'Rajya Khabre', 'Desh Khabre',
  'Election Special', 'Exclusive Report', 'Ground Report', 'Fact Check',
  'Explainers', 'Analysis', 'Opinion / Editorial', 'Special Stories',
  'Viral News', 'Good News',
];

interface BlogCategoryStats {
  category: string;
  count: number;
}

export default function BlogCategoriesPage() {
  const [stats, setStats] = useState<BlogCategoryStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState<string[]>(BLOG_CATEGORIES);

  useEffect(() => {
    fetchCategoryStats();
  }, []);

  const fetchCategoryStats = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      
      if (data.success && data.blogs) {
        const categoryCounts: Record<string, number> = {};
        categories.forEach((cat) => { categoryCounts[cat] = 0; });

        data.blogs.forEach((blog: any) => {
          if (blog.tags && Array.isArray(blog.tags)) {
            blog.tags.forEach((tag: string) => {
              if (categories.includes(tag)) {
                categoryCounts[tag] = (categoryCounts[tag] || 0) + 1;
              }
            });
          }
        });

        const statsArray: BlogCategoryStats[] = categories.map((cat) => ({
          category: cat,
          count: categoryCounts[cat] || 0,
        }));

        setStats(statsArray);
      }
    } catch (error) {
      console.error('Error fetching category stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
      alert('Category added!');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[rgb(83,200,30)]"></div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header section with back button and breadcrumb-style text */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 pt-2">
        <Link
          href="/admin/blogs"
          className="p-2 rounded-full border border-gray-100 hover:border-[rgb(83,200,30)] text-black hover:text-[rgb(83,200,30)] transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Blog Categories
          </h1>
          <p className="text-xs sm:text-sm font-bold text-[rgb(83,200,30)] uppercase tracking-widest mt-1">
            Editorial Category Management
          </p>
        </div>
      </div>

      {/* Add New Category Section - Clean White Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-4 sm:p-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
            Add New Blog Category
          </h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
              placeholder="Enter new category name..."
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[rgb(83,200,30)] focus:border-transparent outline-none transition-all text-black font-medium"
            />
            <button
              onClick={handleAddCategory}
              className="w-full sm:w-auto bg-black hover:bg-[rgb(83,200,30)] text-white px-8 py-3 rounded-lg font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Category</span>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-3 font-medium italic">
            Note: Changes here should be persisted to your database in production.
          </p>
        </div>
      </div>

      {/* Categories List Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-sm font-black uppercase tracking-widest text-black">
            Available Blog Categories
          </h2>
          <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-2 py-1 rounded">
            {categories.length} TOTAL
          </span>
        </div>

        <div className="divide-y divide-gray-50">
          {categories.map((category) => {
            const stat = stats.find((s) => s.category === category);
            const count = stat?.count || 0;

            return (
              <div
                key={category}
                className="p-4 sm:p-6 hover:bg-gray-50/50 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Icon stays black, background turns green on hover */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 text-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(83,200,30)] group-hover:text-white transition-all duration-300">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-black truncate group-hover:text-[rgb(83,200,30)] transition-colors">
                        {category}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 w-full sm:w-auto">
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-black text-black">
                        {count}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {count === 1 ? 'entry' : 'entries'}
                      </div>
                    </div>
                    
                    <Link
                      href={`/admin/blogs/new?blogCategory=${encodeURIComponent(category)}`}
                      className="flex-1 sm:flex-initial border-2 border-black hover:border-[rgb(83,200,30)] hover:bg-[rgb(83,200,30)] text-black hover:text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Create Blog</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* System Note - Black background to ground the light theme */}
      <div className="mt-8 bg-black rounded-xl p-6 border-l-8 border-[rgb(83,200,30)]">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[rgb(83,200,30)] mb-2">
          Editorial Guidance
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
          These categories are independent of the site-wide navigation. They are strictly for 
          organizing internal NewsBlogs by editorial intent. Clicking &quot;Create Blog&quot; 
          will pre-configure the new post with the selected metadata.
        </p>
      </div>
    </div>
  );
}
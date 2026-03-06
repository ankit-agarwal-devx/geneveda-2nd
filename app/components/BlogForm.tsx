"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import ImageUpload from "./ImageUpload";
import MultipleImageUpload from "./MultipleImageUpload";
import RichTextEditor from "./RichTextEditor/page";

// Level 3 Editorial Categories (Blog Categories)
const EDITORIAL_CATEGORIES = [
  "Trending News",
  "Breaking News",
  "Badi Khabre",
  "Rajya Khabre",
  "Desh Khabre",
  "Election Special",
  "Exclusive Report",
  "Ground Report",
  "Fact Check",
  "Explainers",
  "Analysis",
  "Opinion / Editorial",
  "Special Stories",
  "Viral News",
  "Good News",
];

interface BlogFormProps {
  initialData?: {
    _id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    photos?: string[];
    category?: string | null;
    subcategory?: string | null;
    categoryId?: number | null;
    subcategoryId?: number | null;
    tags: string[];
    author: string;
    published: boolean;
    featured: boolean;
  };
}

interface Category {
  id: number;
  name: string;
  slug: string;
  subcategories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export default function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // Get blogCategory from URL params if present
  const urlBlogCategory = searchParams?.get("blogCategory") || "";

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    featuredImage: initialData?.featuredImage || "",
    photos: initialData?.photos || [],
    categoryId: initialData?.categoryId || null,
    subcategoryId: initialData?.subcategoryId || null,
    tags: initialData?.tags?.join(", ") || "",
    editorialCategory: initialData?.tags?.includes(urlBlogCategory)
      ? urlBlogCategory
      : urlBlogCategory || "", // Level 3 - Editorial category
    author: initialData?.author || "Admin",
    published: initialData?.published || false,
    featured: initialData?.featured || false,
  });

  useEffect(() => {
    // Fetch categories and subcategories
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories?active=true");
        const data = await response.json();
        if (data.success) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (formData.title && !initialData?.slug) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.title, initialData?.slug]);

  const selectedCategory = categories.find(
    (cat) => cat.id === formData.categoryId,
  );
  const availableSubcategories = selectedCategory?.subcategories || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      // Add editorial category to tags if selected
      if (formData.editorialCategory) {
        tagsArray.push(formData.editorialCategory);
      }

      const payload = {
        ...formData,
        tags: tagsArray,
        photos: formData.photos || [],
        // Clear subcategory if category is changed
        subcategoryId: formData.categoryId ? formData.subcategoryId : null,
      };

      const url = initialData?._id
        ? `/api/blogs/${initialData._id}`
        : "/api/blogs";
      const method = initialData?._id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/admin/blogs");
        router.refresh();
      } else {
        // Show detailed error message
        const errorMsg = data.error || "Failed to save blog. Please try again.";
        alert("Error: " + errorMsg);
        console.error("Blog save error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 space-y-4 sm:space-y-6"
    >
      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          Title *
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:secondary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          Slug *
        </label>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          Excerpt *
        </label>
        <textarea
          value={formData.excerpt}
          onChange={(e) =>
            setFormData({ ...formData, excerpt: e.target.value })
          }
          required
          maxLength={200}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
        <p className="text-sm text-gray-500 mt-1">
          {formData.excerpt.length}/200 characters
        </p>
      </div>

      <ImageUpload
        value={formData.featuredImage}
        onChange={(url) => setFormData({ ...formData, featuredImage: url })}
      />

      <MultipleImageUpload
        value={formData.photos || []}
        onChange={(urls) => setFormData({ ...formData, photos: urls })}
        maxImages={10}
        label="Blog Photos"
      />

      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          Content *
        </label>
        <RichTextEditor
          value={formData.content}
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-secondary ">
              Blog Category
            </label>
            <Link
              href="/admin/blog-categories"
              className="text-xs text-secondary hover:underline"
            >
              Manage Blog Categories
            </Link>
          </div>
          <select
            value={formData.editorialCategory}
            onChange={(e) =>
              setFormData({ ...formData, editorialCategory: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
          >
            <option value="">Select Blog Category (Optional)</option>
            {EDITORIAL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Blog Categories are independent from Header Categories and used for
            content organization
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">
            Author
          </label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          placeholder="e.g., breaking, trending, featured"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Additional tags for filtering and search
        </p>
      </div>

      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.published}
            onChange={(e) =>
              setFormData({ ...formData, published: e.target.checked })
            }
            className="w-5 h-5 text-secondary focus:ring-secondary"
          />
          <span className="text-sm font-semibold text-secondary">
            Published
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(e) =>
              setFormData({ ...formData, featured: e.target.checked })
            }
            className="w-5 h-5 text-secondary focus:ring-secondary"
          />
          <span className="text-sm font-semibold text-secondary">Featured</span>
        </label>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="relative group px-10 py-3.5 rounded-full font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all duration-500 z-10 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[rgb(83,200,30)]"
          style={{
            color: "#000000", // Default text color for light theme
          }}
        >
          {/* The Slider Overlay - Fills with Secondary Green */}
          {!loading && (
            <span
              className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out group-hover:w-full -z-10"
              style={{ backgroundColor: "rgb(83, 200, 30)" }}
            ></span>
          )}

          {/* The Glossy Shine Sweeper */}
          {!loading && (
            <span
              className="absolute inset-0 w-full h-full -z-10 transition-transform duration-1000 -translate-x-full group-hover:translate-x-full ease-in-out"
              style={{
                background:
                  "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
              }}
            ></span>
          )}

          {/* Button Content */}
          <span className="relative z-20 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300">
            {loading ? (
              <>
                <span className="animate-pulse">Saving...</span>
              </>
            ) : initialData?._id ? (
              "Update Blog"
            ) : (
              "Publish Blog"
            )}
          </span>
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blogs")}
          className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

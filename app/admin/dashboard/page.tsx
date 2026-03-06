"use client";

import { useEffect, useState } from "react";
import { FileText, Eye, Star, TrendingUp, FolderTree, Phone, XCircle } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [enquiry, setEnquiries] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchEnquiries();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/dashboard/stats");
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEnquiries = async () => {
    try {
      const response = await fetch("/api/enquiry/get-counts");
      const data = await response.json();
      if (data.success) {
        setEnquiries(data.counts);
      }
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        {/* Updated spinner to brand green */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(83,200,30)]"></div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Blogs",
      value: stats?.blogs?.total || 0,
      icon: FileText,
      color: "brand", // Updated mapping
      href: "/admin/blogs",
    },
    {
      title: "Published Blogs",
      value: stats?.blogs?.published || 0,
      icon: Eye,
      color: "brand",
      href: "/admin/blogs",
    },
    {
      title: "Featured Blogs",
      value: stats?.blogs?.featured || 0,
      icon: Star,
      color: "brand",
      href: "/admin/blogs",
    },
    {
      title: "Total Views",
      value: stats?.blogs?.totalViews || 0,
      icon: TrendingUp,
      color: "brand",
      href: "/admin/blogs",
    },
    {
      title: "Categories",
      value: stats?.categories?.total || 0,
      icon: FolderTree,
      color: "brand",
      href: "/admin/categories",
      subtitle: `${stats?.categories?.active || 0} active`,
    },
  ];

const enquiryCards = [
  {
    title: "Total Enquiries",
    value: enquiry.total || 0,
    icon: FileText,
    href: "/enquiry/get-counts", // Link to the list, not the API
  },
  {
    title: "New Enquiries",
    value: enquiry.new || 0,
    icon: Eye,
    href: "/admin/enquiries?status=new",
  },
  {
    title: "Contacted",
    value: enquiry.contacted || 0,
    icon: Phone,
    href: "/admin/enquiries?status=contacted",
  },
  {
    title: "In Progress",
    value: enquiry.inProgress || 0,
    icon: Star,
    href: "/admin/enquiries?status=in-progress",
  },
  {
    title: "Completed",
    value: enquiry.completed || 0,
    icon: TrendingUp,
    href: "/admin/enquiries?status=completed",
  },
  {
    title: "Cancelled",
    value: enquiry.cancelled || 0,
    icon: XCircle,
    href: "/admin/enquiries?status=cancelled",
  },
];

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-4 sm:mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          {/* Theme Color Mapping: Using Green-on-Black or Green-on-White */}
          const colorClasses = {
            brand: "bg-[rgb(83,200,30)]/10 text-[rgb(40,100,15)]",
          };

          return (
            <Link
              key={index}
              href={stat.href}
              className="group bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md hover:border-[rgb(83,200,30)] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg transition-colors group-hover:bg-[rgb(83,200,30)] group-hover:text-white ${colorClasses.brand}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-black">
                {stat.value}
              </p>
              {stat.subtitle && (
                <p className="text-xs font-medium text-[rgb(83,200,30)] mt-1">
                  {stat.subtitle}
                </p>
              )}
            </Link>
          );
        })}
      </div>

      {/* Blog Categories Section */}
      {stats?.blogs?.categoryCounts && stats.blogs.categoryCounts.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">
          <h2 className="text-lg font-black uppercase tracking-widest text-black mb-4">
            Blogs by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {stats.blogs.categoryCounts.map((cat: any, index: number) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border border-transparent hover:border-[rgb(83,200,30)] transition-colors">
                <p className="text-2xl font-black text-black">
                  {cat.count}
                </p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter mt-1">
                  {cat.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">
        <h2 className="text-lg font-black uppercase tracking-widest text-black mb-4">
          Enquiries Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {enquiryCards.map((stat, index) => {
          const Icon = stat.icon;
          {/* Theme Color Mapping: Using Green-on-Black or Green-on-White */}
          const colorClasses = {
            brand: "bg-[rgb(83,200,30)]/10 text-[rgb(40,100,15)]",
          };

          return (
            <Link
              key={index}
              href={stat.href}
              className="group bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md hover:border-[rgb(83,200,30)] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg transition-colors group-hover:bg-[rgb(83,200,30)] group-hover:text-white ${colorClasses.brand}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-black">
                {stat.value}
              </p>
            </Link>
          );
        })}
      </div>
      </div>

      {/* Quick Actions Section */}
      <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">
        <h2 className="text-lg font-black uppercase tracking-widest text-black mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <Link
            href="/admin/blogs/new"
            className="group p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-[rgb(83,200,30)] hover:bg-[rgb(83,200,30)]/5 transition-all text-center"
          >
            <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-[rgb(83,200,30)] transition-colors" />
            <p className="font-bold text-gray-700 group-hover:text-black">
              Create New Blog
            </p>
          </Link>
          <Link
            href="/admin/categories/new"
            className="group p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-[rgb(83,200,30)] hover:bg-[rgb(83,200,30)]/5 transition-all text-center"
          >
            <FolderTree className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-[rgb(83,200,30)] transition-colors" />
            <p className="font-bold text-gray-700 group-hover:text-black">
              Add New Category
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

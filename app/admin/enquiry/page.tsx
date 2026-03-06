/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";
import {
  MoreHorizontal,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Trash2,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import EnquiryDetailsModal from "./EnquiryDetailsModal";

const STATUS_COLORS = {
  new: "bg-yellow-100 text-yellow-800 border-yellow-200",
  contacted: "bg-blue-100 text-blue-800 border-blue-200",
  "in-progress": "bg-orange-100 text-orange-800 border-orange-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

export default function EnquiriesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [selectedEnquiry, setSelectedEnquiry] = useState<any | null>(null);

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    service: "",
    contact_number: "",
  });

  const [debouncedFilters, setDebouncedFilters] = useState({
    name: "",
    email: "",
    service: "",
    contact_number: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilters(inputValues);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [inputValues]);

  const fetchEnquiries = async () => {
    setLoading(true);
    const query = new URLSearchParams({
      page: page.toString(),
      ...debouncedFilters,
    }).toString();

    try {
      const res = await fetch(`/api/enquiry?${query}`);
      const json = await res.json();
      setData(json.data);
      setPageCount(json.meta.pageCount);
    } catch (err) {
      console.error("Failed to fetch", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      const res = await fetch(`/api/enquiry/${id}`, {
        method: "DELETE", // Using PATCH for soft delete
      });

      if (res.ok) {
        // Optimistically update UI by filtering out the deleted item
        setData((prev) => prev.filter((item: any) => item.id !== id));
        toast.success("Enquiry deleted successfully");
      } else {
        toast.error("Failed to delete enquiry");
      }
    } catch (error) {
      toast.error("An error occurred while deleting");
    }
  };

  const onUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/enquiry/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();
      if (result.success) {
        await fetchEnquiries();
        toast.success(`Status updated to ${newStatus}`);
      }
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [page, debouncedFilters]);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-black uppercase tracking-tighter">
        Enquiries Management
      </h1>

      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left min-w-[1000px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                {["Name", "Email", "Contact Number", "Status", "Service"].map(
                  (col) => (
                    <th
                      key={col}
                      className="px-6 py-4 font-bold text-black uppercase tracking-widest text-[10px]"
                    >
                      <div className="flex flex-col gap-2">
                        {col}
                        <div className="relative">
                          <Search
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400"
                            size={12}
                          />
                          <input
                            placeholder={`Search ${col}...`}
                            value={
                              inputValues[
                                col.toLowerCase() as keyof typeof inputValues
                              ]
                            }
                            className="pl-7 pr-2 py-1.5 w-full rounded-md border border-slate-200 font-medium focus:border-secondary focus:ring-1 focus:ring-secondary/10 outline-none transition-all"
                            onChange={(e) =>
                              setInputValues({
                                ...inputValues,
                                [col.toLowerCase()]: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </th>
                  ),
                )}
                <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-widest text-black">
                  Update Status
                </th>
                <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-widest text-black">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="p-10 text-center animate-pulse font-medium"
                  >
                    Loading enquiries...
                  </td>
                </tr>
              ) : (
                data.map((item: any) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-3 font-medium text-black">
                      {item.name || ""}
                    </td>
                    <td className="p-3 text-slate-600">{item.email || ""}</td>
                    <td className="p-3 text-slate-600">
                      {item.contact_number || ""}
                    </td>
                    <td className="p-3 text-slate-600">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${STATUS_COLORS[item.status]}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[item?.status]?.replace("bg-", "bg-").replace("100", "500")}`}
                        ></div>
                        <span className="capitalize">
                          {item.status.replace("-", " ")}
                        </span>
                      </span>
                    </td>
                    <td className="p-3">{item.service || ""}</td>
                    <td className="p-3">
                      <div className="relative group min-w-[140px]">
  {/* The Status Dot - pulling logic from your STATUS_COLORS categories */}
  <div className={`absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-10 
    ${item.status === 'new' ? 'bg-yellow-500' : 
      item.status === 'contacted' ? 'bg-blue-500' : 
      item.status === 'in-progress' ? 'bg-orange-500' : 
      item.status === 'completed' ? 'bg-green-500' : 
      item.status === 'cancelled' ? 'bg-red-500' : 'bg-slate-400'}`} 
  />
  
  <select
    defaultValue={item.status}
    onChange={(e) => onUpdateStatus(item.id, e.target.value)}
    className="appearance-none w-full pl-6 pr-8 py-1.5 text-xs font-semibold
               bg-white border border-slate-200 text-slate-900 rounded-md
               cursor-pointer transition-all duration-200
               hover:border-black hover:bg-slate-50
               focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
  >
    {Object.keys(STATUS_COLORS).map((statusKey) => (
      <option key={statusKey} value={statusKey}>
        {statusKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </option>
    ))}
  </select>

  {/* Custom Arrow */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400 group-hover:text-black">
    <ChevronDown size={14} />
  </div>
</div>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      <button
                        onClick={() => setSelectedEnquiry(item)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-black"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Page {page} of {pageCount}
          </p>
          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="p-2 border border-slate-300 rounded-lg hover:bg-white disabled:opacity-40 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              disabled={page === pageCount}
              onClick={() => setPage((p) => p + 1)}
              className="p-2 border border-slate-300 rounded-lg hover:bg-white disabled:opacity-40 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <EnquiryDetailsModal
        isOpen={!!selectedEnquiry}
        onClose={() => setSelectedEnquiry(null)}
        data={selectedEnquiry}
      />
    </div>
  );
}

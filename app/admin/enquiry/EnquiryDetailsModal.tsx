"use client";
import React from "react";
import { X, Mail, Phone, User, Calendar, MessageSquare } from "lucide-react";

interface EnquiryDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

export default function EnquiryDetailsModal({
  isOpen,
  onClose,
  data,
}: EnquiryDetailsModalProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-[0.5rem] bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
        {/* Header: Black & Secondary */}
        <div className="bg-white p-3 text-black relative">
          <div className="space-y-1">
            <h2 className="text-2xl font-black uppercase tracking-tighter">
              Enquiry Overview
            </h2>
            <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors text-black cursor-pointer"
          >
            <X size={20} strokeWidth={3} />
          </button>
          </div>          
        </div>

        {/* Content */}
        <div className="p-4 space-y-1">
          {/* Primary Info Grid */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-4">
            <InfoBlock
              icon={<User size={14} />}
              label="Full Name"
              value={data.name}
            />
            <InfoBlock
              icon={<Mail size={14} />}
              label="Email Address"
              value={data.email}
            />
            <InfoBlock
              icon={<Phone size={14} />}
              label="Contact Number"
              value={data.contact_number || "Not Provided"}
            />
            <InfoBlock
              icon={<Calendar size={14} />}
              label="Submitted On"
              value={new Date(data.createdAt).toLocaleDateString("en-GB")}
            />

            <div className="col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                Service Requested
              </label>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase">
                {data.service}
              </span>
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2 text-slate-400">
              <MessageSquare size={14} />
              <label className="text-[10px] font-black uppercase tracking-widest">
                Client Message
              </label>
            </div>

            {/* Added max-h-40 and overflow-y-auto with custom scrollbar styling */}
            <div
              className="rounded-2xl bg-slate-50 p-6 border border-slate-100 
                  max-h-40 overflow-y-auto 
                  text-black font-medium leading-relaxed italic
                  scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent
                  /* Custom Scrollbar for Chrome/Safari */
                  [&::-webkit-scrollbar]:w-1.5
                  [&::-webkit-scrollbar-track]:bg-transparent
                  [&::-webkit-scrollbar-thumb]:bg-slate-200
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  hover:[&::-webkit-scrollbar-thumb]:bg-secondary/50"
            >
              "
              {data.message ||
                data.description ||
                "No specific message provided."}
              "
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Sub-component for clean layout
function InfoBlock({ label, value, icon, className = "" }: any) {
  return (
    <div className={className}>
      <div className="flex items-center gap-1.5 mb-1 text-slate-400">
        {icon}
        <label className="text-[10px] font-black uppercase tracking-widest">
          {label}
        </label>
      </div>
      <p className="text-black font-bold text-sm truncate">{value}</p>
    </div>
  );
}

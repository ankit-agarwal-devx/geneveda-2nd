"use client";

import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

type Props = {
  value: string;
  onChange: (content: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start writing research details...",
      defaultActionForAttribute: "insertHTML",
      buttonSize: "middle",
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "superscript",
        "subscript",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "table",
        "link",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        "hr",
        "eraser",
        "copyformat",
        "|",
        "fullsize",
        "print",
        "source",
      ],
      style: {
        color: "#000000",
        fontFamily: "Inter, sans-serif",
      },
      toolbarAdaptive: false,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      // Ensure styles are applied correctly to the editable area
      iframe: false,
    }),
    [],
  );

  return (
    <div className="w-full border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm custom-jodit">
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={(newContent) => onChange(newContent)}
      />

      <style jsx global>{`
        /* GeneVeda Theme Customization */
        .jodit-toolbar__box {
          background-color: #fafafa !important;
          border-bottom: 1px solid #eeeeee !important;
        }

        /* --- LINK STYLING --- */
        /* This ensures that any link created inside the editor is blue and underlined */
        .jodit-wysiwyg a,
        .jodit-workplace a {
          color: #2563eb !important; /* Modern Blue */
          text-decoration: underline !important;
          font-weight: 500;
        }

        /* Active buttons use Secondary Green */
        .jodit-toolbar-button_active .jodit-toolbar-button__icon,
        .jodit-toolbar-button_active {
          background-color: rgba(83, 200, 30, 0.1) !important;
          fill: rgb(83, 200, 30) !important;
          color: rgb(83, 200, 30) !important;
        }

        .jodit-workplace {
          min-height: 400px !important;
          padding: 20px !important;
        }

        .jodit-status-bar {
          display: none !important;
        }

        /* Styling for the link popup/dialogue to keep it professional */
        .jodit-ui-button_variant_primary {
          background-color: #000000 !important;
        }
      `}</style>
    </div>
  );
}

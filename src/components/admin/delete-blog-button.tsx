"use client";

import { Trash2 } from "lucide-react";

type Props = {
  action: () => Promise<void>;
  title: string;
};

export function DeleteBlogButton({ action, title }: Props) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!confirm(`"${title}" silinsin mi?`)) event.preventDefault();
      }}
    >
      <button
        type="submit"
        title="Sil"
        className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </form>
  );
}

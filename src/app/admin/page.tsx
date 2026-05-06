"use client";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {createProject, ProjectFormState} from "@/app/actions";

// Define the exact initial state
const initialState: ProjectFormState = {
  error: null,
  success: false,
};

export default function AdminPage() {
  // 1. Hook up the action and state correctly
  const [state, formAction, isPending] = useActionState(createProject, initialState);

  return (
      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-zinc-400">
          This is a placeholder admin portal. In production, protect this route with Supabase Auth.
        </p>

        {/* 2. Use 'formAction' directly here */}
        <form action={formAction} className="mt-6 space-y-4 rounded-xl border border-zinc-800 bg-zinc-950/80 p-4">

          {/* Simple Feedback UI */}
          {state?.error && <p className="text-xs text-red-500 bg-red-500/10 p-2 rounded">{state.error}</p>}
          {state?.success && <p className="text-xs text-emerald-500 bg-emerald-500/10 p-2 rounded">Project saved!</p>}

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1 text-xs text-zinc-300">
              <span>Title</span>
              <input name="title" required className="mt-1 h-8 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 text-xs text-zinc-100 outline-none focus:border-cyan-500" />
            </label>
            <label className="space-y-1 text-xs text-zinc-300">
              <span>Slug</span>
              <input name="slug" required className="mt-1 h-8 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 text-xs text-zinc-100 outline-none focus:border-cyan-500" />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1 text-xs text-zinc-300">
              <span>Category</span>
              <select name="category" className="mt-1 h-8 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 text-xs text-zinc-100 outline-none focus:border-cyan-500" defaultValue="dev">
                <option value="dev">Dev</option>
                <option value="security">Security</option>
              </select>
            </label>
            <label className="space-y-1 text-xs text-zinc-300">
              <span>Tags (comma separated)</span>
              <input name="tags" className="mt-1 h-8 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 text-xs text-zinc-100 outline-none focus:border-cyan-500" />
            </label>
          </div>

          <label className="space-y-1 text-xs text-zinc-300">
            <span>Description</span>
            <textarea name="description" rows={3} className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 text-xs text-zinc-100 outline-none focus:border-cyan-500" />
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1 text-xs text-zinc-300">
              <span>Demo URL</span>
              <input name="demo_url" className="mt-1 h-8 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 text-xs text-zinc-100 outline-none focus:border-cyan-500" />
            </label>
            <label className="space-y-1 text-xs text-zinc-300">
              <span>GitHub URL</span>
              <input name="github_url" className="mt-1 h-8 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 text-xs text-zinc-100 outline-none focus:border-cyan-500" />
            </label>
          </div>

          <label className="space-y-1 text-xs text-zinc-300">
            <span>Image URL (optional)</span>
            <input name="image_url" className="mt-1 h-8 w-full rounded-md border border-zinc-800 bg-zinc-950 px-2 text-xs text-zinc-100 outline-none focus:border-cyan-500" />
          </label>

          <label className="flex items-center gap-2 text-xs text-zinc-300">
            <input type="checkbox" name="is_embedded" className="h-3 w-3 rounded border-zinc-700 bg-zinc-950" />
            <span>Demo is embedded (use iframe viewer)</span>
          </label>

          {/* 3. Use 'isPending' to prevent double-submits */}
          <Button
              type="submit"
              disabled={isPending}
              className="mt-2 h-8 rounded-full bg-cyan-500 px-4 text-xs font-semibold text-black hover:bg-cyan-400 disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Project"}
          </Button>
        </form>
      </main>
  );
}
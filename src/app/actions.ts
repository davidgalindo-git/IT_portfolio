"use server"
import {ProjectCategory} from "@/lib/data";

export type ProjectFormState = {
    error: string | null;
    success: boolean;
};

export async function createProject(
    prevState: ProjectFormState,
    formData: FormData
): Promise<ProjectFormState> {
    try {
        const payload = {
            title: formData.get("title") as string,
            category: formData.get("category") as ProjectCategory,
            tags: (formData.get("tags") as string)?.split(",").map((t) => t.trim()).filter(Boolean) ?? [],
            description: formData.get("description") as string,
            demo_url: formData.get("demo_url") as string,
            github_url: formData.get("github_url") as string,
            image_url: (formData.get("image_url") as string) || null,
            is_embedded: formData.get("is_embedded") === "on",
            slug: formData.get("slug") as string,
        };

        // Placeholder: in a real deployment, use a Supabase service role key via a separate server-only client.
        // This action exists to show how project data can flow from the UI into a backend.

        void payload;
    return { error: null, success: true };
} catch (e) {
    return { error: "Failed to create project", success: false };
}}
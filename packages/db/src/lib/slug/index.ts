import slug from "slug";

export function generateSlug(s: string) {
  return slug(s);
}

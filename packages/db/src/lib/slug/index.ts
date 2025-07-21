import slug from "slug";

export default function generateSlug(s: string) {
  return slug(s);
}

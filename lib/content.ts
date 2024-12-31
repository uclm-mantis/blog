// lib/content.ts
export interface ContentBase {
  id: string;
  title: string;
  section: string;
  slug: string;

  order?: number;
  content?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentHtml?: any;
}

export interface Project extends ContentBase {
  type: "project";

  date?: string;
  description?: string;
  tags?: string[];
}

export interface TeamMember extends ContentBase {
  type: "member";
  position?: string;
  email?: string;
  github?: string;
}

export interface Post extends ContentBase {
  type: "post";
  date?: string;
}

export interface Block extends ContentBase {
  type: "block";
  style?: string;
}

export type Content = Project | TeamMember | Post | Block;

export const slug2anchor = (slug: string): string => {
  return slug.replace(/[^a-zA-Z0-9-_\.]+/g, "").replace(/^\d/, "_")
}
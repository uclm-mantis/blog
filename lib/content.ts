// lib/content.ts
export interface ContentBase {
  id: string;
  title: string;
  section: string;
  slug: string;

  order?: number;
  content?: string;
  contentHtml?: string;
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
  date?: string;
}

export type Content = Project | TeamMember | Post | Block;
export const SITE_NAME = "MBlog";

export const featured = {
    Projects: [
        '3_projects/project1',
        '3_projects/project2',
        '3_projects/project3',
    ],
    Blog: [
        '6_blog/editar_contenido',
        '6_blog/editar_aspecto',
    ],
} satisfies Record<string, string[]>;


export interface ContentBase {
    id: string;
    title: string;
    section: string;
    slug: string;

    files?: string[];
    order?: number;
    content?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contentHtml?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fileTree?: any;
}

export interface Project extends ContentBase {
    type: "project";

    start?: string;
    end?: string;
    budget?: number;
    image?: string;
    description?: string;
    funding?: string;
    tags?: string[];
}

export interface TeamMember extends ContentBase {
    type: "member";
    position?: string;
    email?: string;
    github?: string;
    orcid?: string;
    image?: string;
    phone?: string;
    givenName?: string;
    sn?: string;
}

export interface Post extends ContentBase {
    type: "post";
    date?: string;
    author?: string;
    image?: string;
    description?: string;
}

export interface Block extends ContentBase {
    type: "block";
    style?: string;
}

export type Content = Project | TeamMember | Post | Block;

import CarouselRenderer from "@/components/sectionRenderers/CarouselRenderer";
import LinearRenderer from "@/components/sectionRenderers/LinearRenderer";
import ListRenderer from "@/components/sectionRenderers/ListRenderer";
import GridRenderer from "@/components/sectionRenderers/GridRenderer";

export const sectionRenderers = {
    About: { renderer: LinearRenderer, isSinglePage: true },
    Projects: { renderer: CarouselRenderer, isSinglePage: false },
    Team: { renderer: GridRenderer, isSinglePage: false },
    Blog: { renderer: ListRenderer, isSinglePage: false },
} as const;
export type SectionRenderers = typeof sectionRenderers;

export const SITE_NAME = "WeAdapta";

import CarouselRenderer from "@/components/sectionRenderers/CarouselRenderer";
import LinearRenderer from "@/components/sectionRenderers/LinearRenderer";
import GridRenderer from "@/components/sectionRenderers/GridRenderer";

export const sectionRenderers = {
    About: { renderer: LinearRenderer, isSinglePage: true },
    Projects: { renderer: CarouselRenderer, isSinglePage: false },
    Team: { renderer: GridRenderer, isSinglePage: false },
    Blog: { renderer: GridRenderer, isSinglePage: false },
} as const;

export type SectionRenderers = typeof sectionRenderers;

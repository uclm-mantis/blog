// components/sectionRenderers/index.ts
import CarouselRenderer from "./CarouselRenderer";
import LinearRenderer from "./LinearRenderer";
import GridRenderer from "./GridRenderer";

export const sectionRenderers = {
    About: LinearRenderer,
    Projects: CarouselRenderer,
    Team: GridRenderer,
    Blog: GridRenderer,
} as const;

export type SectionRenderers = typeof sectionRenderers;
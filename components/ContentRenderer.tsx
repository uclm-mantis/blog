// components/ContentRenderer.tsx
import React from "react";
import { Content } from "@/config";
import { renderers } from "./renderers";

type ContentType = keyof typeof renderers;

interface ContentRendererProps {
    content: Content;
    variant: "summary" | "article";
}

function isValidRenderer(type: string, variant: string): type is ContentType {
    return type in renderers && variant in renderers[type as ContentType];
}
  
export default function ContentRenderer({ content, variant }: ContentRendererProps) {
    if (!isValidRenderer(content.type, variant)) {
        console.error(`No renderer found for type "${content.type}" and variant "${variant}"`);
        return null;
    }
      
    const Renderer = renderers[content.type][variant];
      
    if (!Renderer) {
        console.error(`No renderer found for type "${content.type}" and variant "${variant}"`);
        return null;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <Renderer {...{ [content.type]: content }} />;
}
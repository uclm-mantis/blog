// components/renderers/MemberArticle.tsx
import React from "react";
import { TeamMember } from "@/lib/content";

interface MemberArticleProps {
  member: TeamMember;
}

export default function MemberArticle({ member }: MemberArticleProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
        <h1>{member.title}</h1>
        <div className="email">{member.email}</div>
        <div dangerouslySetInnerHTML={{ __html: member?.contentHtml || '' }} />
    </article>
  );
}


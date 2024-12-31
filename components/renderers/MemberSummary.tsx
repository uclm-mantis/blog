// components/renderers/MemberSummary.tsx
import React from "react";
import Link from 'next/link';
import { TeamMember } from "@/lib/content";

interface MemberSummaryProps {
    member: TeamMember;
}

export default function MemberSummary({ member }: MemberSummaryProps) {
  return (
    <Link href={`/content/${member.slug}`}>{member.title}</Link>
  );
}

import React from "react";
import { TeamMember } from "@/config";
import { FaGithub, FaOrcid, FaEnvelope, FaPhone } from "react-icons/fa";
import { MDXRemote } from "next-mdx-remote";
import FileTreeViewer from "../FileTreeViewer";
import Image from "next/image";

interface MemberArticleProps {
  member: TeamMember;
}

export default function MemberArticle({ member }: MemberArticleProps) {
  const renderPhone = (phone?: string) => {
    if (!phone) return null;
    const parts = phone.split("").map((char, index) => (
      <span key={index} className="select-none">
        {char}
      </span>
    ));
    return parts;
  };

  return (
    <article className="prose lg:prose-xl mx-auto flex flex-wrap">
      {member.image && (
        <div className="w-full lg:w-1/4 lg:pr-4">
          <Image
            src={member.image}
            alt={member.title}
            className="rounded-lg shadow-md w-full mb-4"
          />
        </div>
      )}
      <div className="w-full lg:w-3/4">
        <h2 className="mb-1 lg:mb-1">{member.title}</h2>
        {member.position && <p className="text-gray-500 text-lg mb-1 lg:mb-1">{member.position}</p>}
        <div className="flex flex-wrap gap-1">
          {member.email && (
            <div className="flex items-center gap-2 mr-4">
              <FaEnvelope className="text-gray-600" />
              <span>{member.email}</span>
            </div>
          )}
          {member.phone && (
            <div className="flex items-center gap-2 mr-4">
              <FaPhone className="text-gray-600" />
              <span>{renderPhone(member.phone)}</span>
            </div>
          )}
          {member.github && (
            <div className="flex items-center gap-2 mr-4">
              <FaGithub className="text-gray-600" />
              <a
                href={`https://github.com/${member.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                {member.github}
              </a>
            </div>
          )}
          {member.orcid && (
            <div className="flex items-center gap-2">
              <FaOrcid className="text-gray-600" />
              <a
                href={`https://orcid.org/${member.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline"
              >
                {member.orcid}
              </a>
            </div>
          )}
        </div>
      </div>
      {member.contentHtml && (
        <div className="w-full mt-6 mb-4">
          <MDXRemote {...member.contentHtml} />
          {member.fileTree && member.fileTree.length > 0 && (<FileTreeViewer title="Files" fileTree={member.fileTree} />)}
        </div>
      )}
    </article>
  );
}

import React from "react";
import Link from "next/link";
import { TeamMember } from "@/config";
import { FaGithub, FaOrcid, FaUserCircle } from "react-icons/fa";
import Image from 'next/image';

interface MemberSummaryProps {
  member: TeamMember;
}

export default function MemberSummary({ member }: MemberSummaryProps) {
  return (
    <Link href={`/content/${member.slug}`}>
    <div className="border p-4 rounded-md shadow-md flex items-start space-x-4">
      {/* Imagen o icono por defecto */}
      <div className="flex-shrink-0">
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.title}'s profile`}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle size={64} className="text-gray-400" />
        )}
      </div>

      {/* Información del perfil */}
      <div>
        {/* Título obligatorio */}
        <h2 className="text-lg font-bold mb-1">
          {member.title}
        </h2>

        {/* Posición */}
        {member.position && <p className="text-sm text-gray-600">{member.position}</p>}

        {/* Email */}
        {member.email && (
          <p className="text-sm">
            <a href={`mailto:${member.email}`} className="text-blue-500 underline">
              {member.email}
            </a>
          </p>
        )}

        {/* ORCID y GitHub */}
        <div className="flex space-x-4 mt-2">
          {member.orcid && (
            <a
              href={`https://orcid.org/${member.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
              aria-label="ORCID Profile"
            >
              <FaOrcid size={20} />
            </a>
          )}
          {member.github && (
            <a
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
}

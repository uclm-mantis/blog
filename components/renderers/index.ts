// components/renderers/index.ts
import ProjectSummary from "./ProjectSummary";
import ProjectArticle from "./ProjectArticle";
import BlockSummary from "./BlockSummary";
import BlockArticle from "./BlockArticle";
import MemberSummary from "./MemberSummary";
import MemberArticle from "./MemberArticle";
import PostSummary from "./PostSummary";
import PostArticle from "./PostArticle";

export const renderers = {
  project: {
    summary: ProjectSummary,
    article: ProjectArticle,
  },
  member: {
    summary: MemberSummary,
    article: MemberArticle,
  },
  post: {
    summary: PostSummary,
    article: PostArticle,
  },
  block: {
    summary: BlockSummary,
    article: BlockArticle,
  },
} as const;

// components/renderers/index.ts
import ProjectSummary from "./ProjectSummary";
import ProjectArticle from "./ProjectArticle";
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
    summary: BlockArticle,
    article: BlockArticle,
  },
} as const;

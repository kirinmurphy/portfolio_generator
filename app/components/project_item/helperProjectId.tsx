import { ProjectIdType } from "../types/project";

export const PROJECT_ID_PARAM = 'project';
const PROJECT_ID_PATH = `?${PROJECT_ID_PARAM}=`;
const PROJECT_ID_MARKDOWN_PREFIX = '#';

export function getProjectPath (projectId: ProjectIdType) :string {
  return PROJECT_ID_PATH+projectId;
}

export function triggeredLinkIncludesProjectId (fullPath: ProjectIdType) :boolean {
  const pathParts = fullPath?.split(PROJECT_ID_PATH);
  return !!pathParts && pathParts.length > 1;
}

export function returnMarkdownWithConvertedProjectLinks (source:string): string {
  const matcher = new RegExp(`]\\(${PROJECT_ID_MARKDOWN_PREFIX}`, "gi");
  const projectIdPathReplacement = `](${PROJECT_ID_PATH}`;
  return source.replace(matcher, projectIdPathReplacement);
}

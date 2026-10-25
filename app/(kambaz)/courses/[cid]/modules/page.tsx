import CourseModules from "./CourseModules";

export default async function ModulesPage({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return <CourseModules cid={cid} />;
}

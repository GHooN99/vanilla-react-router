import type { ReactNode } from "react";

interface RouterProps {
  path: string;
  component: ReactNode;
}

/* 지정한 path와 현재 경로가 같을 때 지정한 컴포넌트를 렌더링한다. */
const Route = ({ path, component }: RouterProps) => {
  if (window.location.pathname !== path) return null;

  return <>{component}</>;
};

export default Route;

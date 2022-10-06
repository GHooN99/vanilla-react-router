import { type ReactNode } from "react";
import { useRouter } from "@hooks/useRouter";

interface RouterProps {
  path: string;
  component: ReactNode;
}

/* 지정한 path와 현재 경로가 같을 때 컴포넌트를 렌더링한다. */
const Route = ({ path, component }: RouterProps) => {
  const router = useRouter();
  if (router.pathname !== path) return null;

  return <>{component}</>;
};

export default Route;

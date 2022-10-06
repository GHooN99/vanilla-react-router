import { type ReactNode, useContext } from "react";
import { RouterContext } from "@components/Router";

interface RouterProps {
  path: string;
  component: ReactNode;
}

/* 지정한 path와 현재 경로가 같을 때 지정한 컴포넌트를 렌더링한다. */
const Route = ({ path, component }: RouterProps) => {
  const value = useContext(RouterContext);
  if (value === null) throw new Error("Router컴포넌트 내부에서 사용해주세요!"); // 어? 공통?

  const { currentPath } = value;
  if (currentPath !== path) return null;

  return <>{component}</>;
};

export default Route;

import type { ReactNode } from "react";

export interface RouteProps {
  path: string;
  component: ReactNode;
}

/* 아무 로직도 없는 껍데기  */
const Route = ({ component }: RouteProps) => {
  return <>{component}</>;
};

export default Route;

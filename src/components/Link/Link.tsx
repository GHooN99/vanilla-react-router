import { useContext, type ReactNode, type MouseEvent } from "react";
import { RouterContext } from "@components/Router";

interface LinkProps {
  children: ReactNode;
  to: string;
}

/* a 태그의 기본동작을 막고 path 상태를 업데이트 시켜야함 */
const Link = ({ to, children }: LinkProps) => {
  const value = useContext(RouterContext);
  if (value === null) throw new Error("Router컴포넌트 내부에서 사용해주세요!");

  const { changePath } = value;
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // currentPath를 to 로 변경시겨야 함
    changePath(to);
  };

  return (
    <a onClick={handleLinkClick} href={to}>
      {children}
    </a>
  );
};

export default Link;

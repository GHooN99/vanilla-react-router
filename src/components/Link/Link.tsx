import type { ReactNode, MouseEvent } from "react";

interface LinkProps {
  children: ReactNode;
  to: string;
}

const Link = ({ to, children }: LinkProps) => {
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // TODO 서버로 요청을 보내는 기본동작은 막고 브라우저에 나타나는 주소만 바뀌게 해야함
    // ?
  };

  return (
    <a onClick={handleLinkClick} href={to}>
      {children}
    </a>
  );
};

export default Link;

import { type ReactNode, type MouseEvent } from "react";
import { useRouter } from "@hooks/useRouter";

interface LinkProps {
  children: ReactNode;
  to: string;
}

/* a 태그의 기본동작을 막고 path 상태를 업데이트 시켜야함 */
const Link = ({ to, children }: LinkProps) => {
  const router = useRouter();

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // currentPath를 to 로 변경시겨야 함
    router.push(to);
  };

  return (
    <a onClick={handleLinkClick} href={to}>
      {children}
    </a>
  );
};

export default Link;

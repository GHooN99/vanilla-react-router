import { useState, createContext, useEffect, type ReactNode } from "react";

interface RouterContextValue {
  currentPath: string;
  changePath: (to: string) => void;
}

export const RouterContext = createContext<RouterContextValue | null>(null);

interface RouterProps {
  children: ReactNode;
}

const Router = ({ children }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  // componentDidMount
  useEffect(() => {
    const handleCurrentPathChange = (event: PopStateEvent) => {
      setCurrentPath(event.state?.path ?? "/");
    };

    window.addEventListener("popstate", handleCurrentPathChange);

    // componentWillUnmount
    return () => {
      window.removeEventListener("popstate", handleCurrentPathChange);
    };
  }, []);

  const changePath = (to: string) => {
    /* 브라우저의 주소를 바꿈  첫번째 인자는 popState event 에서 state 를 꺼내갈 수 있게 */
    window.history.pushState({ path: to }, "", to);
    /* 리렌더링을 위한 path 상태 업데이트 */
    setCurrentPath(to);
  };

  const contextValue: RouterContextValue = {
    currentPath,
    changePath,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;

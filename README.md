## Vaniila React Router 구현해보기

> 원티드 프리온보딩 챌린지 10월 1회차 과제

### [생각 정리 블로그](https://ghoon99.tistory.com/91)

> 과제를 진행하는 동시에 기록을 남겨놓았습니다. 이런 사고 흐름을 거치며 과제를 진행했습니다.

### [데모 페이지](https://codesandbox.io/p/github/GHooN99/vanilla-react-router/draft/thirsty-leftpad)

### 로컬 실행

```bash
git clone https://github.com/GHooN99/vanilla-react-router.git
cd vanilla-react-router
npm install #(node v16 ~)
npm run dev #(localhost:5173)
```

### 요구사항

- [x] 1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.

- [x] 2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.

- [x] 3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

- [x] 4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.

```tsx
const { push } = useRouter();
```

### 주요 폴더 구조

```
src
├── index.tsx
├── components
│   ├── Link
│   ├── Route
│   ├── Routes
│   └── Router
├── hooks
│   └── useRouter.ts
├── pages
│   ├── About
│   └── Root

```

### TODO

> 생각 정리페이지에도 적어놓았습니다.

- path 상태를 단순한 문자열이 아닌 현재 접속 경로의 여러 정보를 가지고 있는 `window.location` ? 객체로 관리하기
- `context api` 의 단점(불필요한 리렌더링) 개선해보기
- 잘못된 경로의 요청 처리 추가해보기 (404 route page)
- `Route` 컴포넌트의 로직 개선해보기
- 서브라우팅 기능 추가해보기

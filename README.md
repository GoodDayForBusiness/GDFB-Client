# GDFB Client - React Application

이 프로젝트는 React와 TypeScript를 사용하여 개발된 클라이언트 애플리케이션입니다.

### 필수 요구사항
- **Node.js**: 18.0.0 이상
- **pnpm**: 8.0.0 이상 (권장) 또는 npm

### 설치 및 실행

1. **의존성 설치**
```bash
# pnpm 사용 (권장)
pnpm install

# 또는 npm 사용
npm install
```

2. **개발 서버 시작**
```bash
# pnpm 사용
pnpm dev

# 또는 npm 사용
npm run dev
```

3. **브라우저에서 확인**
```
http://localhost:5173
```

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── chat/           # 채팅 관련 컴포넌트
│   └── Landing.tsx     # 랜딩 페이지
├── provider/            # Context Provider
├── assets/              # 이미지 및 리소스
└── main.tsx            # 애플리케이션 진입점
```

## 사용 가능한 스크립트

```bash
# 개발 서버 시작
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 미리보기
pnpm preview

# 타입 체크
pnpm type-check
```

## 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수를 설정하세요:

```env
VITE_AGENTICA_WS_URL=ws://localhost:3001
```

## 주요 의존성

- **React 19**: 최신 React 버전
- **TypeScript**: 타입 안전성
- **Vite**: 빠른 개발 서버 및 빌드 도구
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Agentica**: AI 에이전트 통합



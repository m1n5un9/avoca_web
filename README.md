# Avoca Landing Page

## 법인 개발자 등록용 웹사이트
[221_Landing_Page_Strategy.md] 문서를 기반으로 제작된 랜딩 페이지입니다.

## 실행 방법

1. 의존성 설치 (이미 완료됨)
```bash
npm install
```

2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속하여 확인하세요.

## 주요 수정 사항
- **법인 정보**: 페이지 하단(`src/app/page.tsx`)의 `Corporate Information` 섹션에서 [Representative Name], [Address] 등을 실제 정보로 수정해주세요.
- **이미지/비디오**: `Battle Scene Video` 등은 현재 플레이스홀더로 되어 있습니다. 추후 실제 에셋으로 교체해주세요.

---
description: 웹 프로젝트(avoca_web) 프로덕션 배포
---

# 웹 프로덕션 배포

Vercel에 Git 연동된 웹 프로젝트를 프로덕션 배포합니다.
`master` 브랜치에 push하면 Vercel이 자동으로 빌드 및 배포합니다.

## 사전 조건
- 프로젝트 경로: `/Users/m1n5un9/work/avoca_web`
- 배포 도메인: `avoca.im`
- Vercel 연동 브랜치: `master`

## 배포 단계

1. 서브모듈을 최신으로 업데이트합니다.
// turbo
```bash
cd /Users/m1n5un9/work/avoca_web && git submodule update --remote --recursive
```

2. 로컬 빌드로 오류가 없는지 확인합니다.
// turbo
```bash
cd /Users/m1n5un9/work/avoca_web && npm install && npm run build
```

3. 빌드 결과에서 생성된 라우트를 확인합니다.
   - 모든 페이지가 정상적으로 빌드되었는지 출력을 확인합니다.
   - 오류가 있으면 수정 후 2번부터 다시 진행합니다.

4. 변경사항을 커밋합니다.
```bash
cd /Users/m1n5un9/work/avoca_web && git add -A && git status
```
   - 변경된 파일 목록을 확인하고, 적절한 커밋 메시지를 작성합니다.
```bash
cd /Users/m1n5un9/work/avoca_web && git commit -m "<커밋 메시지>"
```

5. master 브랜치에 push하여 Vercel 배포를 트리거합니다.
```bash
cd /Users/m1n5un9/work/avoca_web && git push origin master
```

6. 배포 완료 확인 (약 1~2분 소요)
   - https://avoca.im 에 접속하여 페이지가 정상적으로 표시되는지 확인합니다.
   - 주요 확인 URL:
     - https://avoca.im/privacy-policy
     - https://avoca.im/terms
     - https://avoca.im/delete-account

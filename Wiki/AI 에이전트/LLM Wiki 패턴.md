---
type: wiki
topic: AI 에이전트
sources:
  - https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
updated: 2026-07-14
---

# LLM Wiki 패턴

Andrej Karpathy가 정의한 개인 지식베이스 구축 패턴. 기존 RAG(검색 증강 생성)와 달리, **LLM이 원본 문서와 사용자 질의 사이에 지속적으로 유지·관리하는 마크다운 위키**를 둔다.

## 3계층 아키텍처

1. **Raw Source** — 불변 원본 문서 (이 볼트에서는 `Clippings/`)
2. **Wiki** — LLM이 생성·갱신하는 마크다운 페이지 (이 볼트에서는 `Wiki/`)
3. **Schema** — 위키 구조와 워크플로우를 정의하는 운영 규칙 문서. `CLAUDE.md` 또는 `AGENTS.md` 형태 → [[하네스 엔지니어링]]의 컨텍스트 파일과 같은 역할

## 주요 작업

- **수집(Ingest)**: 새 자료가 들어오면 LLM이 요약하고 색인·교차참조를 자동 갱신
- **질의(Query)**: 위키 페이지로 답변 — 매번 원본을 재분석하지 않음
- **검증(Verify)**: 정기적 품질 점검으로 모순과 오래된 정보를 감지

## RAG와의 차이

RAG는 질의할 때마다 원본에서 검색해 매번 처음부터 재합성한다. LLM Wiki는 **지식이 누적되는 인공물(artifact)** 을 유지하므로, 질의를 거듭할수록 위키 자체가 성장한다.

## 이 볼트와의 관계

이 Obsidian 볼트 자체가 LLM Wiki 패턴의 구현체다. 운영 규칙은 루트의 `CLAUDE.md`에 정의되어 있다.

## 원본

- 사용자 메모: [[LLM WIKI]]
- Karpathy gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

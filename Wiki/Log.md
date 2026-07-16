# Agent Log

수집·갱신·검증 작업 시 에이전트가 내린 결정을 기록한다.
형식: `## YYYY-MM-DD HH:MM` — 작업이 완료된 시각 기준.

---

## 2026-07-16 (뉴스 브리핑)

### [질의] 오늘의 뉴스 브리핑 생성
**처리한 원본**: 웹 검색 — (1) 주요 경제 지수 이슈, (2) 주요 기업 이슈·일정
**결정 사항**
- 사용자 요청은 위키 지식 페이지가 아니라 일자별 뉴스 브리핑이나, `Clippings/`는 읽기 전용이므로 편집 가능한 `Wiki/투자/`에 `news-2026-07-16.md`로 저장
- 경제 지수: 미국 CPI 둔화·연준 긴축 완화 / 3대 지수 상승 / 코스피 디커플링 / 반도체 차별화 4건
- 기업: 삼성전자 2Q 역대 실적(주가 급락) / 국내 어닝시즌(SK하이닉스·LG) / 미국 빅테크 실적 일정 / 엔비디아 8월 별도 4건
- 요청 3번 주제가 공란이어서 해당 섹션은 플레이스홀더로 남기고 사용자에게 분야 확인 요청
- 시황 수치는 자료 간 편차가 있어 실시간 재확인 필요 표기

---

## 2026-07-14 12:28

### [수집] MS-SOFC 내부 개질 논문
**처리한 원본**: `Improvement of the internal reforming of metal-supported SOFC at low temperatures.md`
**결정 사항**
- 기존 위키에 에너지·연료전지 관련 폴더 없음 → `Wiki/에너지·연료전지/` 신규 생성
- 주제(자동차용 고체산화물 연료전지)가 머신러닝·투자와 성격이 달라 독립 폴더 분리가 적절하다고 판단
- `MS-SOFC 내부 개질.md` 신규 생성. 실험 수치 표, 미래 과제 섹션 포함
- [[PINN (Physics-Informed Neural Networks)]] 페이지와 교차참조 추가 (동일 ScienceDirect 출처, 수치 모델링 연결점)

### [갱신] PINN 페이지 — 리뷰 논문 반영
**처리한 원본**: `Scientific Machine Learning Through Physics–Informed Neural Networks…(Springer, 2022).md`
**결정 사항**
- 기존 `Wiki/머신러닝/PINN.md`에 새 섹션 **추가**로 처리 (새 페이지 생성 대신 갱신 선택)
- 이유: 리뷰 논문은 Raissi et al.(2019) 원저에 대한 메타 분석이므로 독립 주제가 아닌 PINN 페이지 심화에 해당
- 추가 내용: 변형(Variants) 표, 확장 적용 영역, 미해결 이론 문제 섹션
- sources frontmatter에 리뷰 논문 추가

### [수집] 아시아 증시 동향 기사
**처리한 원본**: `아시아 증시 하락 지속, 유가 급등에 인플레 우려…미국 CPI 발표 대기 By Investing.com.md`
**결정 사항**
- 기존 투자 페이지([[한국 증시 밸류에이션]], [[SK하이닉스]])와 연관되나 **별도 페이지**로 분리
- 이유: 유가·Fed·CPI라는 새 변수가 등장해 기존 페이지(AI 반도체 중심)와 주제가 다름. 날짜를 제목에 포함해 시점을 명시 (`아시아 증시 동향 (2026-07-14).md`)
- [[AI 반도체 사이클]]과의 관계를 본문에 서술: 기존 AI 우려에 유가·금리 우려가 복합 작용하는 맥락으로 연결

## 2026-07-14 12:37

### [수정] Obsidian 링크 버그 근본 해결
**처리한 원본**: `Wiki/머신러닝/PINN.md`, `Clippings/Scientific Machine Learning…`
**결정 사항**
- 문제: `[[Clippings/파일명]]` 경로 명시 후에도 링크 미작동 지속
- 원인 확정 (바이트 분석): 파일명에 U+2013 en dash(`–`)와 U+2019 curly apostrophe(`'`)가 포함되어 있었음. 마크다운 편집 도구는 U+0027 straight apostrophe(`'`)를 사용하므로 문자 불일치로 Obsidian이 파일을 찾지 못함
- 해결: Clippings 파일명을 순수 ASCII로 변경
  - `Physics–Informed` (U+2013) → `Physics-Informed` (U+002D)
  - `What's` (U+2019) → `What's` (U+0027)
  - 새 파일명: `Scientific Machine Learning Through Physics-Informed Neural Networks Where we are and What's Next - Journal of Scientific Computing.md`
- PINN.md frontmatter sources + 원본 섹션을 새 파일명 기준 `[[Clippings/...]]` 형식으로 업데이트
- 동시에 PINN 원저 논문 링크도 `[[Clippings/...]]` 형식으로 통일 (일관성)

---

## 2026-07-14 (시각 미기록 — 초기 세션)

### [수집] Clippings 초기 일괄 수집
**처리한 원본**
- `하네스.md` (사용자 메모)
- `LLM WIKI.md` (사용자 메모)
- `SK하이닉스 목표가 185만~420만원… By EBN.md`
- `美 블룸버그 세계 최고 수준 한국 주식… By The Guru.md`
- `Physics-informed neural networks….md`

**결정 사항**
- `Wiki/AI 에이전트/` 폴더 신규 생성 → `LLM Wiki 패턴.md`, `하네스 엔지니어링.md` 생성
- `Wiki/투자/` 폴더 신규 생성 → `SK하이닉스.md`, `한국 증시 밸류에이션.md` 생성
- SK하이닉스 기사와 블룸버그 기사가 동일 주제(AI 투자 지속 여부)를 다루고 있어 종합 페이지 `AI 반도체 사이클.md` 추가 생성 후 두 페이지에서 교차참조
- `Wiki/머신러닝/` 폴더 신규 생성 → `PINN (Physics-Informed Neural Networks).md` 생성. 논문 광고·링크 제거, 수식·핵심 아이디어 추출
- `Wiki/Home.md` 색인 초기 생성
- `CLAUDE.md` (Schema) 신규 생성

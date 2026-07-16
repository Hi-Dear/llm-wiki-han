---
type: wiki
topic: 에너지·연료전지
sources:
  - "[[Improvement of the internal reforming of metal-supported SOFC at low temperatures]]"
updated: 2026-07-14
---

# MS-SOFC 내부 개질 (Metal-Supported SOFC Internal Reforming)

Taniguchi, Sasaki 등 (Nissan Research Center 협력). International Journal of Hydrogen Energy, 2023. DOI: [10.1016/j.ijhydene.2023.03.195](https://doi.org/10.1016/j.ijhydene.2023.03.195)

자동차용 SOFC(고체산화물 연료전지)에 촉매 침투(catalyst infiltration)를 적용해 **저온(600°C 이하)에서의 내부 개질 성능**을 크게 향상시킨 연구.

## 배경: 왜 MS-SOFC인가

자동차용 SOFC의 요구 조건:
- **소형화**: 차량 내 공간 제약
- **저온 작동**: 에너지 효율 향상을 위해 600°C 이하 목표 (기존 SOFC는 600~1000°C)
- **기계적 강건성**: 반복 진동·충격 내성 → 금속 지지체(metal support)가 유리

일반 양극 지지 SOFC는 Ni이 풍부해 개질 활성이 높으나, MS-SOFC는 스테인리스 스틸의 낮은 개질 활성이 약점 → **촉매 침투로 해결**.

## 핵심 실험 결과

### 촉매 종류별 성능 비교 (600°C, 0.7V 기준)

| 조건 | 수소 [Wcm⁻²] | 메탄 내부개질 [Wcm⁻²] |
|---|---|---|
| 침투 없음 | 기준 | 불충분 (전압 급락) |
| Ni/GDC 침투 | 1.15 | 0.85 |
| Ru/GDC 침투 | **1.37** | **1.00** |

- **Ru/GDC가 Ni/GDC보다 우수**: Ru는 전자를 잘 공여해 C-H 결합 분리를 촉진 → Ni-Ru 바이메탈 입자가 개질 활성 증가
- 600°C 이하 MS-SOFC 중 역대 최고 성능 달성 (기존 세라믹 지지 셀과 동등 수준)

### 저온 성능 (Ru/GDC 기준)

| 온도 | 수소 | 메탄 내부개질 |
|---|---|---|
| 650°C | 1.71 Wcm⁻² | 1.16 Wcm⁻² |
| 600°C | 1.37 Wcm⁻² | 1.00 Wcm⁻² |
| 550°C | 0.75 Wcm⁻² | 0.32 Wcm⁻² |

### 다양한 탄화수소 내부 개질 (600°C, Ni/GDC)

천연가스·프로판·이소옥탄 모두 OCV > 0.97V. 이소옥탄에서 0.64 Wcm⁻² 달성 → **가솔린 계열 연료 적용 가능성** 입증.

## 작동 원리: 촉매 침투

**습식 침투(wet infiltration)**: Ni, Ru, Gd, Ce 질산염 혼합 용액을 애노드에 침투 후 350°C 소성 → 10~30nm 나노입자가 애노드 스캐폴드 표면에 균일 증착 → 전기화학 반응과 수증기 개질 반응의 활성 부위를 동시에 증가.

수치 모델로 분석한 결과, 촉매 침투 후 빈도 인자(frequency factor)가 최대 23배(Ru/GDC) 증가하며 스팀 개질 반응 속도가 100°C 낮은 온도에서도 침투 전과 동등 수준을 달성함.

## 미래 과제

- **500°C 내부 개질**: 현재 600°C 이하에서는 개질 활성이 부족. 침투 조건 최적화와 나노입자 입경 축소 필요
- **장기 내구성**: 코킹(coking), 촉매 조대화(coarsening), 금속 지지체 산화 등 검토 필요 (5h 테스트에서는 열화 없었으나 장기 데이터 부족)

## 관련 페이지

- [[PINN (Physics-Informed Neural Networks)]] — 같은 ScienceDirect에서 수집한 수치 모델링 분야 논문

## 원본

- [[Improvement of the internal reforming of metal-supported SOFC at low temperatures]] (Int. J. Hydrogen Energy, 2023)

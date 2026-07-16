---
type: wiki
topic: 머신러닝
sources:
  - "[[Clippings/Physics-informed neural networks A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations]]"
  - "[[Clippings/Scientific Machine Learning Through Physics-Informed Neural Networks Where we are and What's Next - Journal of Scientific Computing]]"
updated: 2026-07-14
---

# PINN (Physics-Informed Neural Networks)

Raissi, Perdikaris, Karniadakis의 논문 (Journal of Computational Physics, 2019. DOI: [10.1016/j.jcp.2018.10.045](https://doi.org/10.1016/j.jcp.2018.10.045)). 물리 법칙(비선형 편미분방정식)을 학습 과정에 직접 내장한 신경망 프레임워크.

## 핵심 아이디어

- 데이터 수집 비용이 큰 물리·생물·공학 시스템에서는 **소량 데이터(small data)** 만으로 학습해야 하는데, 일반 딥러닝은 이 영역에서 강건하지 못함
- 해결책: 시스템을 지배하는 **물리 법칙(PDE)을 사전 지식(prior)으로 학습에 주입** → 허용 가능한 해 공간을 제약하는 정규화(regularization) 역할 → 적은 데이터로도 빠른 수렴과 일반화

## 작동 방식

일반형 PDE: $u_t + \mathcal{N}[u; \lambda] = 0$

1. 해 $u(t,x)$를 신경망으로 근사
2. **자동미분(automatic differentiation)** 으로 신경망을 입력 좌표(시간·공간)에 대해 미분하여 PDE 잔차 네트워크 $f := u_t + \mathcal{N}[u]$ 구성 — 이것이 "physics-informed" 신경망
3. 손실함수 = $MSE_u$ (초기·경계 조건 데이터 오차) + $MSE_f$ (콜로케이션 포인트에서의 PDE 잔차)
4. 최적화는 L-BFGS(소규모 데이터) 또는 SGD 계열(대규모)

핵심 통찰: 딥러닝 학계가 파라미터에 대해 쓰던 자동미분을 **입력 좌표에 대해** 적용해 물리 법칙을 인코딩한 것.

## 두 가지 문제 유형

1. **순문제 (data-driven solution)**: 파라미터 λ가 주어졌을 때 숨은 해 $u(t,x)$ 추론
2. **역문제 (data-driven discovery)**: 관측 데이터를 가장 잘 설명하는 파라미터 λ 식별 (시스템 동정)

## 기존 접근과의 차이

- 이전의 가우시안 프로세스 기반 방법(Raissi et al. 선행 연구)은 비선형 항을 시간에 대해 국소 선형화해야 했고, 베이지안 사전가정이 표현력을 제한함 → PINN은 신경망의 보편 근사 능력으로 이를 극복
- SVM·랜덤포레스트·일반 신경망을 블랙박스로 쓰는 기존 물리 ML과 달리, 미분연산자에 맞춘 맞춤형 손실함수로 **블랙박스를 연 것**

## 특징·한계

- 단순한 feed-forward 신경망 (tanh 활성화, L1/L2·dropout 등 추가 정규화 없음)으로도 동작 — 물리 제약 자체가 정규화 역할
- 전역 최솟값 수렴에 대한 이론적 보장은 없음. 다만 PDE가 well-posed이고 해가 유일하면 경험적으로 좋은 정확도
- 코드 공개: https://github.com/maziarraissi/PINNs

## PINN 변형(Variants) — 리뷰 논문 추가 내용

Cuomo et al. (2022) 리뷰 기준, vanilla PINN 외에 활발히 연구되는 변형들:

| 변형 | 특징 |
|---|---|
| **PCNN** (Physics-Constrained NN) | 경계 조건을 손실함수(soft)가 아닌 NN 구조(hard)로 강제 |
| **hp-VPINN** | Galerkin 방법 기반, 테스트 함수로 잔차를 가중 |
| **CPINN** (Conservative PINN) | 보존 법칙 강제 |
| **hPINN** | 역설계 맥락에서 PDE를 hard constraint로 적용 |

## 확장 적용 영역 (리뷰 기준)

PINN이 풀 수 있는 방정식 유형이 원래 논문 이후 크게 확장됨:
- 분수계 방정식 (fractional equations)
- 적분-미분 방정식 (IDE)
- 확률적 미분방정식 (SDE)
- Schrödinger, Burgers, Navier-Stokes, Allen-Cahn 등 다양한 물리 방정식

적용 분야도 유체역학, 열전달, 역문제(inverse problem), 의료 이미징 등으로 확산. Raissi et al.(2019) 피인용수가 2019→2021년 사이 지수적으로 증가.

## 미해결 이론 문제

- 전역 최솟값 수렴 보장 없음 (경험적으로는 좋은 성능)
- 활성화 함수, 최적화 기법, 손실함수 구조, NN 아키텍처 등 하이퍼파라미터 선택에 대한 이론적 지침 부족
- FEM 등 전통 수치해석 대비 정확도·수렴 비교 기준 미확립

## 원본

- [[Clippings/Physics-informed neural networks A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations]] (ScienceDirect, 원저 논문 2019)
- [[Clippings/Scientific Machine Learning Through Physics-Informed Neural Networks Where we are and What's Next - Journal of Scientific Computing]] (Springer, 리뷰 논문 2022)

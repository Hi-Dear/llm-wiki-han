---
type: wiki
topic: 전기기기
sources:
  - "[[AFPM 열 해석 (Thermal Analysis)]]"
  - "[[Clippings/Lumped-Parameter Thermal Model for Axial Flux Permanent Magnet Machines]]"
updated: 2026-07-27
---

# AFPM 열등가회로 — SSDR(TORUS) 모델 적용

[[AFPM 열 해석 (Thermal Analysis)]]에 정리된 Sahin(2013)의 T-등가회로 방법론을, 사용자가 현재 다루는 구체적 기기 구조에 적용해 축방향·반경방향 열등가회로를 유도한 페이지. **주의**: 이 페이지는 다섯 편의 원 논문 어디에도 정확히 등장하지 않는 조합(SSDR/TORUS, 사용자 정의 스택)에 일반 방법론을 적용한 것이므로, 수식의 형태(T-망 구조, $R_{1a},R_{2a},R_{3a}$ 등)는 원 논문에서 가져온 사실이고, 이를 이 특정 스택에 배치한 것은 이 위키의 종합·해석이다.

## 대상 모델 구성

사용자가 정의한 축방향 스택(대칭):

```
로터코어(gray) — PM(N/S) — 에어갭 — 고정자 치(철심) — 고정자 권선(동선)
  — 고정자 치(철심, 반대편) — 에어갭 — PM(반대편) — 로터코어(gray)
```

단일 고정자를 두 회전자가 사이에 두는 **SSDR(TORUS)** 토폴로지 — [[AFPM (축방향 자속 영구자석 전동기)]]의 토폴로지 분류 참조. 권선을 기준으로 좌우 기하·재질이 동일하다고 가정하면 **거울대칭**이 성립한다.

## 표기

| 기호 | 의미 |
|---|---|
| $l_i$ | $i$번째 층의 축방향 두께 |
| $r_{out,i}, r_{in,i}$ | $i$번째 층의 반경방향 외경·내경 |
| $k_{a,i}, k_{r,i}$ | $i$번째 층의 축방향·반경방향 열전도율 |
| $T_i$ | $i$번째 층의 평균온도 노드 |
| $P_i$ | $i$번째 층에 주입되는 손실 |
| $h_{agap}$ | 에어갭 대류계수 (Taylor수 상관식) |
| $h_{frame}$ | 프레임-외기 대류계수 |

## 축방향 열등가회로

각 고체층(로터코어·PM·고정자 치)은 [[AFPM 열 해석 (Thermal Analysis)]]의 T-등가회로 공식을 그대로 적용한다 (원 논문은 고정자 요크를 예시로 들었으나, 형태는 임의의 원통형 층에 일반적으로 적용 가능):

$$R_{1a,i}=R_{2a,i}=\frac{l_i}{2\pi k_{a,i}\left(r_{out,i}^2-r_{in,i}^2\right)},\qquad R_{3a,i}=\frac{-l_i}{6\pi k_{a,i}\left(r_{out,i}^2-r_{in,i}^2\right)}$$

에어갭은 고체가 아니므로 T-망이 아니라 단일 대류저항으로 대체:

$$R_{c,gap}=\frac{1}{h_{agap}\,S_{gap}},\qquad h_{agap}=\frac{Nu\,\lambda_{air}}{g},\qquad Nu=\begin{cases}2 & Ta<1700\\0.128\,Ta^{0.367} & 1700<Ta<10^4\\0.409\,Ta^{0.241} & 10^4<Ta<10^7\end{cases}$$

$$Ta=Re_\delta^2\frac{g}{r},\qquad Re_\delta=\frac{vg}{\nu_{air}}$$

**전체 축방향 회로** (양쪽 외기 경계 → 대칭면):

$$T_{amb,1} \;-\; R_{conv,rotor1} \;-\; [\text{로터코어}_1]\big(R_{1a},R_{2a},R_{3a}\big) \;-\; [\text{PM}_1] \;-\; R_{c,gap1} \;-\; [\text{치}_1] \;-\; T_{winding}$$

$$T_{winding} \;-\; [\text{치}_2] \;-\; R_{c,gap2} \;-\; [\text{PM}_2] \;-\; [\text{로터코어}_2]\big(R_{1a},R_{2a},R_{3a}\big) \;-\; R_{conv,rotor2} \;-\; T_{amb,2}$$

손실 주입: $P_{copper}$는 $T_{winding}$ 노드에, $P_{iron,tooth,1/2}$는 각 치의 내부노드에, $P_{pm,eddy,1/2}$는 각 PM 내부노드에 (저속기라면 0으로 둘 수 있음 — [[AFPM 열 해석 (Thermal Analysis)]]의 가정 참조), 로터코어는 통상 $P\approx0$.

**대칭 단순화**: 좌우 기하·손실이 동일하면 $T_{winding}$ 면을 단열(adiabatic) 경계로 두고 절반만 풀면 된다:

$$T_{winding}-T_{amb} = P_{half}\Big(R_{conv,rotor}+R_{1a,rotor}+R_{3a,rotor}+R_{1a,pm}+R_{3a,pm}+R_{c,gap}+R_{1a,tooth}+R_{3a,tooth}\Big)$$

(단, $P_{half}$는 절반 경로로 흐르는 유효 발열량이며 정확히는 각 노드에서 개별적으로 분배됨 — 위 식은 단일 등가경로로 근사한 것)

## 반경방향 열등가회로

반경방향은 축방향과 독립된 별도 망이다 (원주방향 무시와 동일한 "축·반경 독립" 가정). 각 층은 자신의 $r_{in,i}, r_{out,i}$를 갖는 T-망으로, **모든 층이 공통의 두 경계 노드 — 샤프트 $T_{shaft}$와 프레임 $T_{frame}$ — 사이에 병렬로 연결**된다:

$$R_{1r,i}=\frac{1}{4\pi k_{r,i} l_i}\left[1-\frac{2r_{in,i}^2\ln(r_{out,i}/r_{in,i})}{r_{out,i}^2-r_{in,i}^2}\right]$$

$$R_{2r,i}=\frac{1}{4\pi k_{r,i} l_i}\left[\frac{2r_{out,i}^2\ln(r_{out,i}/r_{in,i})}{r_{out,i}^2-r_{in,i}^2}-1\right]$$

$$R_{3r,i}=\frac{-1}{8\pi k_{r,i} l_i \left(r_{out,i}^2-r_{in,i}^2\right)}\left[r_{out,i}^2+r_{in,i}^2-\frac{4r_{out,i}^2 r_{in,i}^2\ln(r_{out,i}/r_{in,i})}{r_{out,i}^2-r_{in,i}^2}\right]$$

**전체 반경방향 회로** ($i \in \{$로터코어$_1$, PM$_1$, 치$_1$, 권선, 치$_2$, PM$_2$, 로터코어$_2\}$, 7개 층 병렬):

$$T_{shaft} \;=\!=\; \Big[R_{1r,i}\!-\!(P_i)\!-\!R_{2r,i}\Big]_{\,i=1..7 \text{ 병렬}} \;=\!=\; T_{frame} \;-\; R_{conv,frame} \;-\; T_{amb}$$

층별 유효저항 $R_{eff,i} = R_{1r,i}+R_{2r,i}$ (내부 발열 $P_i$는 $R_{3r,i}$ 경로로 분기)이라 하면, 병렬합성 전체 반경 컨덕턴스는

$$\frac{1}{R_{radial,total}} = \sum_{i=1}^{7} \frac{1}{R_{eff,i}}$$

$$R_{conv,frame}=\frac{1}{h_{frame}\,S_{frame}} \quad(\text{또는 } \alpha_{rad}\text{ 포함 등가계수로 대체 가능})$$

샤프트 쪽은 공랭·자연대류 기기라면 실질적으로 높은 저항(거의 단열)으로 두고, 대부분의 열류가 $T_{frame}$ 쪽으로 빠진다고 근사하는 경우가 많다 (중공축 수랭이 아닌 한).

## 두 회로의 결합

동일한 발열 노드(예: 권선의 $P_{copper}$)가 축방향·반경방향 두 회로 모두에 동시에 나타난다. "완전 독립" 가정 하에서는 각 회로를 따로 풀고, 실제 온도는 두 경로 중 지배적인 쪽(통상 저항이 작은 쪽)이 실효 방열 경로가 된다고 근사하거나, 두 회로를 열류 분배 비율로 합산해 근사한다.

## 원본

- [[AFPM 열 해석 (Thermal Analysis)]] — T-등가회로 상세 구조, 공극 대류계수 상관식, 가정사항 종합
- [[Clippings/Lumped-Parameter Thermal Model for Axial Flux Permanent Magnet Machines]] (Sahin, IEEE, 2013) — T-모델 원 공식(Table I, Eq. 1-11)

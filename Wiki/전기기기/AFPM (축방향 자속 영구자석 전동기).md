---
type: wiki
topic: 전기기기
sources:
  - "[[Clippings/A Comprehensive Review of Axial-Flux Permanent-Magnet Machines]]"
  - "[[Clippings/A Review of Axial Flux Permanent Magnet Machine Technology]]"
  - "[[Clippings/Design and Construction of Axial-Flux Permanent Magnet Motors for Electric Propulsion Applications—A Review]]"
updated: 2026-07-24
---

# AFPM (Axial-Flux Permanent-Magnet Machine, 축방향 자속 영구자석 전동기)

전통적인 RFPM(Radial-Flux PM, 반경방향 자속) 기기와 달리 회전자-고정자 사이의 자속이 축 방향으로 흐르는 전기기기. 축방향으로 얇고 지름이 큰 "팬케이크" 형상 덕분에 토크 밀도가 높고 축방향 길이가 짧아, 공간·중량 제약이 큰 응용(전기차 인휠 모터, 항공 추진, 풍력발전, 플라이휠 에너지 저장)에 적합하다.

## 역사와 근본 트레이드오프

축방향 자속 기기는 1831년 패러데이가 발명한 최초의 전기기기이며, 1837년 데이븐포트의 RFPM 특허보다 앞선다. 그럼에도 RFPM 대비 상용화가 더뎠던 이유는 고정자-회전자 사이의 강한 축방향 자기 흡인력이 회전자 원판을 휘게 하고, 슬롯 고정자의 적층(라미네이션) 가공이 어려워 제조 비용이 높기 때문이다. ([[Clippings/A Comprehensive Review of Axial-Flux Permanent-Magnet Machines]])

## 토폴로지 분류

구조는 크게 단일 고정자-단일 회전자(SSSR), 이중 고정자-단일 회전자(DSSR), 단일 고정자-이중 회전자(SSDR), 다단(MSMR)으로 나뉜다.

- **SSSR**: 가장 단순한 구조. 고정자-회전자 간 축방향 힘이 불균형해 구조가 뒤틀리기 쉬움 — 베어링 배치, 슬롯리스 고정자, 두꺼운 회전자 원판 등으로 완화
- **DSSR(AFIR, 외부 고정자-내부 회전자형)**: 회전자가 두 고정자 사이에 위치. 축방향 힘이 상쇄되어 기계적으로 더 튼튼함. 권선 한쪽 면만 사용해 동손이 큼
- **SSDR(TORUS, 외부 회전자-내부 고정자형)**: 고정자가 두 회전자 사이. 양면 권선 활용으로 권선 말단이 짧아 효율이 더 높음. 자석 배열에 따라 N-N형(고정자 백코어 필요, 원형/toroidal 권선)과 N-S형(백코어 제거 가능, 톱니형 권선만 가능, 축방향 길이·철손 감소)으로 세분
- **MSMR**: DSSR/SSDR을 다단 적층한 구조. N개 고정자 + N+1개 회전자. 지름 증가 없이 토크·출력밀도 향상

TORUS N-S형에서 고정자 백코어를 제거하고 톱니형 집중권선(concentrated winding)을 적용한 것이 **YASA(Yokeless And Segmented Armature)** 토폴로지이며, 페라리 SF-90·296 GTB, 쾨닉세그 레게라 등 고성능 하이브리드카에 실채택되었다. 서베이 대상 설계 중 YASA와 코어리스형이 각각 23%(합 46%)로 가장 흔했다. ([[Clippings/Design and Construction of Axial-Flux Permanent Magnet Motors for Electric Propulsion Applications—A Review]], [[Clippings/A Review of Axial Flux Permanent Magnet Machine Technology]])

## RFPM 대비 성능 비교

- 동일 출력에서 AFPM은 RFPM보다 작은 부피로 구현 가능하며, 회전자 관성모멘트가 작아 급가속/급감속이 필요한 응용(경주용차, 항공기)에 유리
- **종횡비(축방향 길이/외경)** < 0.3이면 AFPM이, > 1이면 RFPM이 유리 — 자세한 토크밀도-종횡비 관계는 극수에 따라 달라짐
- 다운홀(시추공) 등 외경 제한·긴 축 허용 응용에서는 오히려 RFPM이 토크밀도·역률·효율 모두 우세하고, 다단 AFPM은 각 단마다 발생하는 단부권선 손실 탓에 열세
- 서베이 논문의 정량 비교: 공극 전단응력(airgap shear)에서 λ(내외경비) 0.6~0.8인 일부 AFPM 설계가 공랭 RFPM 상한(148kPa)을 상회하는 최대 120kPa 달성. 토크밀도는 대부분 30 kNm/m³ 이상(액냉 RFPM 상한 수준)
- 반면 회전자 팁 속도(최대 140 m/s)와 속도-출력 성능지수(rpm×√kW)는 고속 RFPM(팁속도 최대 294 m/s, 100만 RPM급)에 크게 못 미쳐, **AFPM은 저·중속 고토크 영역에, RFPM은 고속 영역에 강점**이 있다는 결론으로 수렴 ([[Clippings/A Review of Axial Flux Permanent Magnet Machine Technology]])

## 설계 — 사이징 방정식

세 논문 모두 동일한 뼈대의 일반 사이징 방정식을 인용한다 (출력 $P_{out}$, 효율 $\eta$, 전기·자기 부하 $A$, $B_g$, 극쌍수 $p$, 내외경비 $\lambda=D_i/D_o$, 외경 $D_o$):

$$P_{out} \propto \eta\, B_g A \frac{f}{p}(1-\lambda^2)\left(\frac{1+\lambda}{2}\right) D_o^2 L_e$$

- RFPM 토크는 반지름 제곱에 비례($T \propto R_o^2 L$)하지만, **AFPM 토크는 외경의 세제곱**에 비례($T \propto R_{om}^3 \lambda(1-\lambda^2)$) — 이 때문에 지름을 키우는 설계 레버리지가 RFPM보다 훨씬 크다
- λ는 가장 중요한 설계 변수. 최대 출력을 위한 이론적 최적값은 $1/\sqrt3 \approx 0.58$이지만, 실제 파워덴스 설계들의 서베이 결과는 λ ∈ [0.6, 0.8] 구간에 집중 (이론값과 실측 분포가 다소 어긋남)
- PM 체적 대비 토크는 λ<1, PM 두께≪외경 조건에서 AFPM이 RFPM보다 항상 더 많은 PM을 요구함 — PM 공급망 이슈에 취약

## 전자기 해석 기법

3-D FEA가 가장 정확하지만 계산 시간·메모리 부담이 커, 다음과 같은 대안이 병행 발전 중:
- **Quasi-3D(Quasi-3D FEA)**: 기기를 반경 방향으로 여러 층(선형 기기)으로 나눠 각 층을 2D로 해석 후 합산
- **자기등가회로(MEC)**: 계산비용과 정확도의 절충안
- **대리모델(surrogate model, 예: 2L-SAMODE)**: 소수의 3D FEA만 수행하고 나머지는 크리깅 등으로 추정 — 기존 다목적 미분진화(MODE) 대비 FEA 호출을 886회→163회로 축소하면서 동일한 파레토 프론트 획득

## 코깅 토크 저감

원인은 PM이 최소 자기저항 경로로 정렬하려는 경향. 저감 기법으로 자극 스큐(직선/삼각/사다리꼴/원형 스큐), 슬롯 변위, PM 극호비 교대, PM 형상(곡면·타원면), 슬롯 개구부 변위 등이 보고됨. 대표적 저감률: 원형/삼각 스큐 약 77~84%, 슬롯 변위+스큐 조합 약 60%, 극호비 교대 약 73%. 스큐는 누설 인덕턴스와 동손을 늘리는 트레이드오프가 있음.

## 열/기계 해석

- 방법: 실험, 수치해석(FEA/CFD 결합), 집중정수(LP) 열회로 모델
- AFPM은 평면형 공극 구조 덕분에 냉각에 유리 — 동일 종횡비 조건에서 RFPM 대비 약 26% 낮은 온도 상승 보고
- 고정자 단부권선 냉각: 알루미늄 자켓(수랭) → 직접 오일냉각으로 발전, 오일냉각이 전류밀도를 수랭 자켓 대비 2배까지 허용
- 회전자 냉각은 문헌이 적음 — 중공 축+수랭 채널 방식이 있으나 고속에서 회전체 동역학에 영향을 줄 수 있음
- 열해석 기법(T-등가회로, 3D LP망, 자기-열/유동-열 결합, 공극 대류계수 상관식)과 냉각방식별 정량 비교는 → [[AFPM 열 해석 (Thermal Analysis)]] 참조

## 재료·제조

- **적층강판(라미네이션)**: RFPM은 축방향 적층이 쉽지만 AFPM은 반경방향 적층이 필요해 조립이 어려움. 테이프와인딩 코어에 EDM/기계가공으로 슬롯을 내는 방식이 흔함
- **연자성복합체(SMC)**: 3차원 등방 자기특성으로 AFPM에 적합하나 금형 초기비용이 높음. 저속에서는 적층강판이, 고주파(고속) 영역에서는 와전류손 증가로 SMC가 오히려 유리
- **PCB 고정자**: 저전압·저전류 용도에 유망하나 열적 한계로 고전류밀도 응용에는 아직 제약
- **적층제조(3D 프린팅)**: 다단 AFPM 비교 실험에서 저·고주파 전 영역에서 적층강판·SMC보다 낮은 철손 보고 — 신기술이나 유망

## 응용 사례 (성능 수치)

- **EV 인휠/직결 구동**: YASA 모터 정격 120 Nm, 첨두토크밀도 10 Nm/kg, 피크효율 96%+ (Woolmer & McCulloch); 상용 YASA/Magnax 등 피크출력 200kW+, 효율 95%+
- **TORUS in-wheel (연료전지/하이브리드용)**: 500 Nm, 25 kW, 효율 85%+
- **플라이휠 에너지저장용 코어리스 TORUS**: 50kW급, 첨두토크밀도 10.6 Nm/kg, 첨두출력밀도 11.3 kW/kg, 최대효율 97.4% @9000rpm — 서베이 전체에서 보고된 최고 회전자 팁속도(140 m/s)도 동일 계열 설계
- **직접구동 풍력발전용 다단 AFPM**: 50kW, 70rpm, 효율 92%
- **항공추진용 초전도(HTS) 축방향 자속 모터**: YBCO 초전도체로 최대 17T @ 29K, 토크밀도 약 18 Nm/kg, 효율 99% (Masson et al.)
- 서베이 전체 범위: 정격출력 0.2kW~300kW, 토크 0.2Nm~96kNm, 속도 23~32,000RPM, λ 0.2~0.9 ([[Clippings/A Review of Axial Flux Permanent Magnet Machine Technology]])

## 계자약화(Flux Weakening)

AFPM은 구조적으로 인덕턴스가 낮아 CPSR(정출력 속도비)이 대체로 2:1 수준으로 RFPM보다 열세. 기계적 방식(회전자 축방향 이동, 이중회전자 오프셋 — 최대 CPSR 5:1~16:1 보고)과 전기적 방식(d축 전류 주입, IPM 회전자 구조 개선)이 병행 연구되며, 기계적 방식은 성능은 좋으나 시스템 복잡도·비용·중량이 증가하는 트레이드오프가 있음.

## 최신 토폴로지 동향 (2023 리뷰 기준)

- **베어링리스 AFPM**: 모터 권선과 자기부상 기능을 결합해 무마모·무윤활 구현. 대부분 축방향 1자유도(1-DOF)만 능동 제어하고 나머지는 수동 PM 베어링/릴럭턴스력으로 안정화. 3~5자유도까지 능동 제어하는 구조도 연구 중
- **복합 반경-축방향 자속 기기**: RFPM·AFPM 각각에서 버려지던 단부권선 공간까지 토크 생산에 활용 — 동일 폼팩터 대비 최대 1.5~1.4배 토크 향상 보고
- **자기기어 AFPM(magnetically geared)**: 자기기어와 전기기기를 결합, 동일 체적·축길이에서 기존 YASA 대비 약 2배 토크밀도 달성 가능성 제시. 아직 실증 단계는 초기 수준

## 세 리뷰의 관점 차이

| 리뷰 | 발행 맥락 | 강조점 |
|---|---|---|
| A Comprehensive Review (2014) | 초기 종합 리뷰 | 토폴로지 분류·사이징·최적화·냉각·재료의 폭넓은 개괄 |
| A Review of AFPM Machine Technology (2023) | 10년 뒤 갱신판 | 상용/실증 설계 데이터 정량 서베이(λ, 토크밀도, 팁속도 분포), 신흥 토폴로지(베어링리스·자기기어·복합자속) 전망 |
| Design and Construction... for Electric Propulsion (2022) | EV/추진 응용 특화 | RFPM/TFPM과의 정량 비교, YASA/TORUS 구체 설계 사례와 수치, 계자약화·열관리 실용 기법 |

## 원본

- [[Clippings/A Comprehensive Review of Axial-Flux Permanent-Magnet Machines]] (IEEE, 2014)
- [[Clippings/A Review of Axial Flux Permanent Magnet Machine Technology]] (Gadiyar, Van Verdeghem, Severson — IEEE, 2023)
- [[Clippings/Design and Construction of Axial-Flux Permanent Magnet Motors for Electric Propulsion Applications—A Review]] (IEEE, 2022, CC BY 4.0)

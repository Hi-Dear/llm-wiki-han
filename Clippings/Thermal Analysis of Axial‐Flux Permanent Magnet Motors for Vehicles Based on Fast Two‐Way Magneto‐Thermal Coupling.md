---
title: "Thermal Analysis of Axial‐Flux Permanent Magnet Motors for Vehicles Based on Fast Two‐Way Magneto‐Thermal Coupling"
source: "https://onlinelibrary.wiley.com/doi/full/10.1155/2022/1880912"
author:
  - "[[Xiaoting Zhang]]"
  - "[[Bingyi Zhang]]"
  - "[[Xin Chen]]"
  - "[[Simeng Zhong]]"
published:
created: 2026-07-24
description: "Axial-flux permanent magnet motor (AFPMM) have small size and high power density. It has a good application prospect in the field of new energy vehicle driving. In this paper, based on a 56 kW AFPMM,..."
tags:
  - "clippings"
---
[PDF](https://onlinelibrary.wiley.com/doi/epdf/10.1155/2022/1880912 "ePDF")

## Abstract

Axial-flux permanent magnet motor (AFPMM) have small size and high power density. It has a good application prospect in the field of new energy vehicle driving. In this paper, based on a 56 kW AFPMM, the magnetic circuit characteristics are calculated by the split loop method, considering the influence of pulse width modulated (PWM) power supply. The loss is taken as the heat source, combined with the motor structure characteristics and cooling conditions, the lumped-parameter thermal network model of the motor is established to solve the steady-state and transient temperature distribution of each structure. By this way, fast and accurate thermal calculation of the motor is realized in design stage. The accuracy of the lumped-parameter thermal network model is verified by experiment. At the same time, the effects of spliting the permanent magnet (PM) into pieces, flow rate of cooling water, and loss distribution on temperature rise are analyzed. This research work provides an effective fast thermal calculation method for AFPMM and provides a reference basis for the design of similar motors. It has important value of theoretical significance and engineering practical.

## 1\. Introduction

Owing to the demand for light weight and miniaturization of new energy vehicles, drive motors need to have the characteristics of high speed, high frequency, and high power density. AFPMM have great superiority in terms of power density and material utilization because of their unique magnetic circuit structure. The loss of high-frequency motors increase under PWM-powered, and the thermal load of high-power-density motors increase with the decrease of relative heat dissipation area, make temperature rise higher, which will pose a certain challenge to the temperature resistance of insulating materials and PM \[[1](#bib-0001)\]; at the same time, changes in temperature rise have a greater impact on the electromagnetic parameters of main materials such as PM, copper wires, silicon steel sheets and so on, thereby affecting loss of motor, and then having an iterative effect on temperature rise. In order to solve the above problems, thermal analysis based on the two-way magneto-thermal coupling is very necessary for the research and application of AFPMM for vehicles.

The current analysis methods for motor temperature rise mainly include simplified analytical method, finite element method (FEM) and thermal network method. The simplified analytical method has poor calculation accuracy \[[2](#bib-0002)\]. The FEM can obtain the overall temperature distribution of the motor, and the calculation accuracy is high, but it is necessary to establish a finite element model, carry out corresponding meshing and parameter settings, especially for axial-flux motors often require the establishment of a three-dimensional finite element model, which takes a long time and requires high computer performance, it is not conducive to parameter adjustment and optimal design in the initial design stage of the motor. Kamiya et al. analyzed the loss of motor and temperature rise of PM in the hybrid electric vehicle used the three-dimensional FEM under the power supply condition of the PWM controller \[[3](#bib-0003)\]. Li et al. proposed a three-dimensional flow-thermal coupling model, using the FEM to solve the different flow velocity and temperature of the high-voltage linear motor \[[4](#bib-0004)\]. The thermal network method replaces the real heat source and thermal resistance with a small amount of concentrated heat source and equivalent thermal resistance, and converts the temperature field into a heat circuit with concentrated parameters for calculation. Wrobel et al. used the thermal network method to study the thermal characteristics of the outer rotor brushless permanent magnet motor, analyzed the advantages of modular windings in reducing temperature rise, and verified them through experiments \[[5](#bib-0005)\]. Camilleri et al. established a motor fluid network and an equivalent thermal network, and used the thermal network method to predict the overall temperature distribution of the segmented stator \[[6](#bib-0006)\]. Scholars from various countries have achieved certain results in the calculation of motor temperature rise \[[7](#bib-0007) – [11](#bib-0011)\], but they have not considered the two-way magnetic-thermal coupling of AFPMM and there are few studies on its transient thermal analysis.

Based on the idea of two-way coupling, this paper fully considers the interactions and influencing factors among multiple physical fields such as electricity, magnetism, fluid, and heat, conduct an in-depth study on the temperature rise of AFPMM for new energy vehicles; The method and the equivalent thermal network method respectively simplify the calculation models of motor loss and temperature rise, and fully consider different factors such as PWM power supply harmonics, permanent magnet block, cooling water flow rate, loss distribution and other factors to affect the steady-state and transient temperature of the motor. The influence of temperature rise; the magnetic-thermal coupling model was established, and the temperature rise calculation was corrected through coupling iterations, which achieved a small accuracy error; the temperature rise calculation results were verified and compared through experiments, and the test results proved the calculation method High accuracy, meeting the design calculation requirements, has important guiding significance for the subsequent design and development of AFPMM.

## 2\. Loss Analysis

### 2.1. Establishment of Magnetic Circuit Model Based on Split Loop Method

In this paper, the AFPMM adopt dual-stator and single-rotor structure as shown in Figure [1](#fig-0001), which can offset the unbalanced axial magnetic pull between stator and rotor, and has high structural stability, it is suitable for vehicles in the working conditions of frequent starting. The rotor has no core support structure with magnetic steel embedded on the surface, which has higher power density and higher efficiency.

![Details are in the caption following the image](https://onlinelibrary.wiley.com/cms/asset/d1938daf-07de-4d0d-b6bc-9df4b91b1758/mpe1880912-fig-0001-m.jpg)

Figure 1 Open in figure viewer PowerPoint Motor structure.

The magnetic flux starts from the N pole of the PM, passes through the air gap, the stator teeth, and the stator yoke back to the S pole, forming a closed loop. The magnetic circuit structure and equivalent magnetic circuit model are shown in Figure [2](#fig-0002). The relationship of magnetomotive force on a magnetic circuit is shown in formula.

(1)

where *F* <sub><i>m</i></sub>, *H* <sub><i>m</i></sub>, and *h* <sub><i>m</i></sub>, respectively, represent the magnetomotive force, magnetic field strength, and length of the PM; *F* <sub><i>δ</i></sub>, *F* <sub><i>j</i> 1</sub>, and *F* <sub><i>t</i> 1</sub> are magnetic potential drop of air gap, yoke, and the tooth.

![Details are in the caption following the image](https://onlinelibrary.wiley.com/cms/asset/c7c72866-de8e-47a7-be17-0f06b30ae475/mpe1880912-fig-0002a-m.jpg)

Figure 2 (a) Open in figure viewer PowerPoint Magnetic circuit model of AFPMM. (a) Magnetic circuit structure. (b) Equivalent magnetic circuit model.

![Details are in the caption following the image](https://onlinelibrary.wiley.com/cms/asset/0ecf7867-3f5e-47e2-b003-0721ad036a03/mpe1880912-fig-0002b-m.jpg)

Figure 2 (b) Open in figure viewer PowerPoint Magnetic circuit model of AFPMM. (a) Magnetic circuit structure. (b) Equivalent magnetic circuit model.

The magnetic field of AFPMM is distributed along the axial direction. As the increase of radius and tooth pitch, the magnetic circuit length, tooth width also increase gradually, and the saturability of magnetic circuit changed at the same time. The calculation method equivalent to a one-dimensional magnetic circuit is unreliable, and the use of the three-dimensional finite element method consumes a lot of time. In this paper, the split-loop method is proposed to calculate the magnetic circuit characteristics of the motor. Ignoring the edge effect, the AFPMM is cut into several small annular belts in the radial direction, and the magnetic circuit characteristics of each small annular belt are calculated separately.

### 2.2. The Calculation of Loss

Ignoring the additional copper consumption of winding, the basic copper consumption of motor is

(2)

where *m* is the number of phases of the winding; *I* is the effective value of phase current passing through the winding; and *R* is winding resistance.

The iron loss of stator core mainly includes hysteresis loss and eddy current loss. The magnetic circuit split-loop method is adopted to call the data of tooth magnetic density *B* <sub><i>tn</i></sub> and yoke magnetic density *B* <sub><i>jn</i></sub> in each split loop. According to Steinmetz iron loss model and standard sinusoidal power supply, the iron loss in each split loop is calculated to obtain the total iron loss of the motor:

(3)

where *k* represents the number of split loops; *P* <sub><i>h</i></sub> is hysteresis loss; *P* <sub><i>e</i></sub> is eddy current loss; is hysteresis loss coefficient; *B* <sub><i>m</i></sub> is the maximum magnetic induction intensity; *f* is frequency; and *α* Is the Steinmetz coefficient, generally in the range of 1.5–2.5.

### 2.3. The Loss Calculation under PWM Power Supply

The vehicle motor is controlled by the controller (inverter) taking power from the DC bus, and equivalent sine wave magnetic field in the form of PWM chopper. It will introduce a large number of high-order current harmonics, especially when the motor frequency is high, due to the limitation of the highest switching frequency of IGBT, the harmonic proportion will increase, resulting in the increase of harmonic loss, thus increasing the heating power. When under PWM power supply, the eddy current loss generated by each harmonic is

(4)

That is, the overall eddy current loss can be expressed as the sum of eddy current losses generated by each harmonic magnetic field.

The ratio of total harmonic eddy current loss to fundamental eddy current loss can be expressed as

(5)

where, *u* <sub><i>k</i></sub> is the inductive voltage of winding by the *k* -th harmonic magnetic field, when the resistance voltage drop is ignored, and THD is the total distortion rate of harmonic voltage.

Therefore, in the case of PWM power supply, the total eddy current loss caused by fundamental voltage and time harmonic voltage can be expressed as

(6)

where *κ* = (*χ* / *k* <sub><i>h</i> / <i>e</i></sub>) + 1 is the iron loss increase coefficient. As the carrier ratio increases, the loss decreases, but limited by the switching loss of power devices, the carrier ratio of inverter cannot be too large. The loss under different carrier ratios is shown in Figure [3](#fig-0003).

![](https://onlinelibrary.wiley.com/cms/asset/e1923461-e67b-4228-adf8-9857fd3b020b/mpe1880912-fig-0003-m.jpg)

Figure 3 Open in figure viewer PowerPoint Loss corresponding to different carrier wave ratios.

Considering the influence of PWM power supply, the loss of motor under 36 kW and 5600 rpm is calculated, and the results are shown in Table [^1].

| Location | Stator teeth | Stator yoke | Stator winding | PM | Rotor core | Bearing |
| --- | --- | --- | --- | --- | --- | --- |
| Loss/W | 402 | 564 | 430 | 139 | 10 | 34 |

### 2.4. Simulation Verification

In order to verify the accuracy of the calculated loss derived by the split loop method in this paper, the finite element model of the motor is established as shown in Figure [4](#fig-0004). The no-load loss of the motor at different speeds is obtained through calculation, and the simulation results are compared with the results calculated by the split loop method, as shown in Figure [5](#fig-0005). When the motor speed is higher than 4800 rpm, the calculation results of split loop method are very close to those of finite element method; When the motor speed is lower than 4800 rpm, there is a large error between the calculation results of analytical method and finite element method, the maximum error is 97.6 W. When the rotating speed is low, the hysteresis loss is dominant. Using the traditional iron loss calculation mathematical model, there is a problem that the selection of material hysteresis loss coefficient and Steinmetz coefficient is not accurate enough.

![](https://onlinelibrary.wiley.com/cms/asset/63dff21d-41fe-4b8f-a27b-13b8ee2b316c/mpe1880912-fig-0004-m.jpg)

Figure 4 Open in figure viewer PowerPoint Finite element analysis model.

![](https://onlinelibrary.wiley.com/cms/asset/8dfe69ac-4f42-4468-a072-8a2954c301d7/mpe1880912-fig-0005-m.jpg)

Figure 5 Open in figure viewer PowerPoint No-load iron loss comparison.

## 3\. Thermal Network Model

When the equivalent thermal network method is used to mesh and calculate the temperature field of AFPMM, the following assumptions are made:
- (1)
	The cooling conditions of the motor in the circumferential direction are the same, and the motor temperature is symmetrical along the circumferential direction
- (2)
	The temperature field of the motor is symmetrical along the axial centerline of the rotor
- (3)
	The temperature of each air node in the motor cavity is the same, that is, it is divided by the same node

The main structures of the motor include waterway, End cap, stator yoke, stator teeth, winding, PM, rotor, bearing and so on. The temperature nodes are divided according to the characteristics of each part, and the nodes are connected according to the heat flow direction to form a heat network, as shown in Table [^2].

| Location | Node | Location | Node |
| --- | --- | --- | --- |
| Chassis | 1–2 | PM | 15–17 |
| Stator yoke | 3–5 | Air of end part | 19–21 |
| Winding | 6–10, 33–37 | Shaft | 22–24 |
| Stator teeth | 11–13 | Bearing | 25 |
| Rotor core | 14, 18, 30–32 | End cap | 26–29 |

### 3.1. Steady State Thermal Analysis

The motor in this paper is a fully enclosed motor with water cooling and natural cooling outside the motor. The thermal resistance parameters of the equivalent thermal network model are mainly conduction thermal resistance and convection thermal resistance, and radiation thermal resistance can be ignored. Distribution of thermal network node is shown in Figure [6](#fig-0006).

![](https://onlinelibrary.wiley.com/cms/asset/b6dddfb1-41c0-4489-94e3-c639264d6919/mpe1880912-fig-0006-m.jpg)

Figure 6 Open in figure viewer PowerPoint Distribution of thermal network node.

#### 3.1.1. Thermal Conductivity and Thermal Resistance

*(1) Cylinder Structure*. The heat conduction between the main parts of the motor can be equivalent to a cylindrical structure. *R* <sub>1</sub>, *R* <sub>2</sub> are the inner and outer diameters of the cylinder, *T* <sub>1</sub>, *T* <sub>2</sub> are the temperatures on both sides of the cylinder, and *L* is the length of the cylinder. According to the basic theory of heat conduction, the radial heat conduction can be obtained. The resistance is

(7)

Axial heat conduction resistance:

(8)

*(2) Winding*. The position distribution of each conductor in the winding is random, and the equivalent thermal conductivity of the winding *K* <sub><i>s</i></sub> is introduced. Node 3 (stator yoke) and node 7 (slot winding) exchange heat through the slot bottom section. The thermal conductivity and thermal resistance between the stator yoke and the slot winding are

(9)

In the formula, *Q* <sub>1</sub> is the number of stator slots; *b* <sub>1</sub> is the width of the slot bottom; *K* <sub><i>s</i> 1</sub> is the equivalent thermal conductivity of the slot winding; *δ* <sub><i>i</i></sub> is the insulation thickness of the slot; *S* <sub><i>f</i></sub> is the slot full rate; *d* is the elongation of the straight part of the coil after exiting the slot; *d* <sub><i>w</i></sub> is the diameter of the parallel wire; *λ* <sub><i>i</i></sub> is the insulation thermal conductivity of the groove; *λ* <sub><i>L</i></sub> is the thermal conductivity of the dipping varnish; *λ* <sub><i>d</i></sub> is the thermal conductivity of the wire paint.

#### 3.1.2. Thermal Convection Thermal Resistance

*(1) Case and Air*. The casing is in direct contact with the outside air, where air flows slowly, the convective thermal resistance is

(10)

According to the definition of the heat transfer coefficient in the case of natural heat transfer between the casing wall and the surrounding space, the heat dissipation coefficient of the chassis surface is

(11)

In the formula, *α* is the heat transfer coefficient of the chassis surface, W/(m <sup>2</sup> ·K); *ω* <sub><i>w</i></sub> is the wind speed blowing on the inner wall of the chassis; *θ* is the temperature of the outer surface of the chassis, *K*.

*(2) The Space between Stator Teeth and Air Gap*. The node 11 and the node 15 exchange heat through an air gap. The heat dissipation coefficient of this part is related to the air gap fluid velocity. The key to calculating the air gap convective thermal resistance is the selection and calculation of the Nusselt number. For a smooth air gap, when the Taylor number is small, that is, Ta < 1700, the fluid is laminar, and the air gap is dominated by heat conduction; when 1700 < Ta < 10 <sup>4</sup>, the air gap fluid is not only laminar, but also accompanied by eddy currents; When 10 <sup>4</sup>  < Ta < 10 <sup>7</sup>, the fluid state of air gap is turbulent, the Nusselt coefficient and the corresponding convective heat dissipation coefficient under different fluid states are calculated as follows:

(12)

*(3) Waterway*. The convective heat transfer coefficient of the waterway is calculated as follows:

(13)

where *H* and *W* are the height and width of the waterway outlet; *D* <sub><i>h</i></sub> is the hydraulic diameter of the waterway; Re <sub><i>w</i></sub> is the Reynolds number of the waterway fluid; *C* <sub><i>w</i></sub>, *ρ* <sub><i>w</i></sub>, *v* <sub><i>w</i></sub> and *μ* <sub><i>w</i></sub> are the specific heat capacity, density, flow velocity and dynamic viscosity of the fluid;

When Re <sub><i>w</i></sub>  < 2300, the fluid in waterway is laminar, and its Nusselt number is calculated as

(14)

where *L* <sub><i>w</i></sub> is the length of the waterway.

When 2300 < Re <sub><i>w</i></sub>  < 10 <sup>6</sup>, the fluid in the waterway is turbulent, and its Nusselt number is calculated as

(15)

where *f* <sub><i>w</i></sub> is the friction factor of the smooth waterway.

The convective heat transfer coefficient of the waterway is

(16)

*(4) Rotor Core*. The Reynolds number, Nusselt heat number and heat dissipation coefficient of the rotor along the radial end face are

(17)

Through the heat transfer relationship of each node of the motor, the heat balance equations related to the nodes can be listed, and the heat balance equations of the motor can be obtained by combining these equations. The matrix form is

(18)

In the formula, \[*G*\] is the thermal conductivity matrix of each node; \[*T*\] is the temperature rise matrix of each node; \[*W*\] is the heat source matrix of each node. By solving this linear equation system, the temperature rise of each node can be obtained, as shown in Table [^3]. The thermal resistance of different parts of the motor obtains an *n*  ×  *n* thermal conductivity matrix related to the node:

(19)

| Location | Node | Temperature rise (K) | Node | Temperature rise (K) | Node | Temperature rise (K) |
| --- | --- | --- | --- | --- | --- | --- |
| Stator yoke | 3 | 12.5 | 4 | 12.8 | 5 | 12.0 |
| Stator teeth | 11 | 29.3 | 12 | 31.3 | 13 | 34.0 |
| Stator winding | 6 | 60.3 | 8 | 56.1 | 10 | 59.0 |
| PM | 15 | 77.9 | 16 | 84.4 | 17 | 85.6 |
| Shaft | 22 | 43.0 | 23 | 48.6 | 24 | 53.9 |
| Rotor core | 14 | 63.8 | 18 | 59.4 |  |  |

### 3.2. Transient Thermal Analysis

When the motor is in a short-term acceleration state, the output power exceeds the rated power. At this time, it is obviously unreasonable to use the steady-state thermal network equation to calculate the motor temperature rise. Therefore, it is effective to use the transient thermal network to calculate the temperature change of the motor during short-term overload. Evaluate the safety performance of the motor.

Under transient conditions, for any temperature node, the net heat flow into the node at all times is equal to the increase in the internal energy of the node’s relevant volume:

(20)

where *q* <sub><i>i</i></sub> is the net heat flow of the *i* -th node; *ρ* <sub><i>i</i></sub> is the density of the unit represented by the *i* -th node; *C* <sub><i>i</i></sub> is the specific heat capacity of the unit represented by the *i* -th node; *V* <sub><i>i</i></sub> is the volume of the unit represented by the *i* -th node; d *T* <sub><i>i</i></sub> /d *t* is the temperature rise rate of the *i* -th node. The initial condition of the first-order nonlinear differential equation is the initial temperature of each node. Solving the differential equation can obtain the characteristics of temperature change of each node with time.

If the temperature of node *i* at time *t* <sub><i>k</i> +1</sub> is (*i*  = 1, 2, 3, 4, …, *n*), then the temperature of node *i* at time *t* <sub><i>k</i></sub> can be used to recursively obtain :

(21)

In the formula, is the calorific value of the node at time *k*, which is an *m*  × 1 matrix; is the heat outflow of the node at time *k*, which is an *m*  × 1 matrix; *m* is the number of nodes divided by the thermal network. *V* <sub><i>i</i></sub> is a fixed value, and only , , *ρ* <sub><i>i</i></sub> and at time *t* <sub><i>k</i></sub> are calculated, can be obtained. Therefore, as long as the initial temperature of the node is obtained, the node temperature at each time can be obtained.

Taking nodes 3, 6, and 7 as examples, construct their transient thermal network solving equations:

(22)

It should be noted that, due to the presence of windings and dipping varnish in the stator slots, the calculation of the heat capacity of the windings is more complicated. The calculation method of the equivalent specific heat capacity of the winding nodes in reference \[[12](#bib-0012)\] in this article is as follows:

(23)

In the formula, *C* <sub>eff</sub> is the equivalent specific heat capacity; *S* <sub><i>f</i></sub> is the slot full rate; *ρ* <sub><i>w</i></sub> is the winding density; *ρ* <sub><i>in</i></sub> is the dipping varnish density; *C* <sub><i>w</i></sub> is the winding specific heat capacity; *C* <sub><i>in</i></sub> is specific heat capacity of dipping varnish.

The initial temperature is the ambient temperature, and the motor runs at rated power. The transient temperature changes of each node are shown in Figure [7](#fig-0007). The stable temperature reached by each node is the same as the calculation result of the steady-state thermal network. The temperature of each node is stable in about 2000 s, and the temperature of the PM rises fastest.

![](https://onlinelibrary.wiley.com/cms/asset/a8d0791d-a779-47c2-803a-a6b4b0c6062d/mpe1880912-fig-0007-m.jpg)

Figure 7 Open in figure viewer PowerPoint The temperature change curve of each part of the motor when running at rated power.

In order to fit the actual situation of the motor operation better, the motor operating state is given as shown in Figure [8](#fig-0008), the temperature changes of each node over time are shown in Figure [9](#fig-0009). It can be seen that when the output torque of the motor increased, the winding temperature increases rapidly with the increase of the winding current, and the permanent magnet temperature decreases with the decrease of the speed. The change trend of the rotor temperature is the same as that of the permanent magnet temperature. The transient temperature of the winding does not affect the transient temperature of the permanent magnet basically.

![](https://onlinelibrary.wiley.com/cms/asset/fc81e5f0-d64f-42be-9ed5-2b9c6206d411/mpe1880912-fig-0008-m.jpg)

Figure 8 Open in figure viewer PowerPoint Motor operating conditions.

![](https://onlinelibrary.wiley.com/cms/asset/2d02ef61-772a-426f-9046-4ebe6e11d055/mpe1880912-fig-0009-m.jpg)

Figure 9 Open in figure viewer PowerPoint The temperature change curve of each part of the motor under the working condition shown in Figure 8.

The temperature changes of the windings and permanent magnets at maximum power are shown in Figure [10](#fig-0010). The maximum temperature of the winding is 235°C, and the maximum temperature of the permanent magnet is 140°C. The temperature of the permanent magnet changes smoothly during short-term overload. Due to the short time, the heat in the winding is not enough to be taken away by the cooling medium, so the temperature of the winding basically rises linearly. According to the insulation specification, the maximum overload time can be solved.

![](https://onlinelibrary.wiley.com/cms/asset/7d284fb3-f7be-428f-b01a-1212d901be30/mpe1880912-fig-0010-m.jpg)

Figure 10 Open in figure viewer PowerPoint Temperature changes of windings and permanent magnets within 2 minutes at peak power.

### 3.3. The Effect of Permanent Magnet Segmentation on Eddy Current and Temperature Rise

The eddy current loss of the permanent magnet is related to the eddy current path, magnetic induction intensity, permanent magnet material and shape, and can be calculated by the following formula:

(24)

where *E* is eddy current intensity; *J* is eddy current density; *ρ* is permanent magnet resistivity; and *V* is permanent magnet volume.

The permanent magnet is divided into pieces along the axial and radial directions, and an insulating layer is added in the middle to block the eddy current loss path. The eddy current loss of the permanent magnet decreases with the increase of the number of segments, as shown in Figure [11](#fig-0011). The number of segments cannot be increased indefinitely due to factors such as the manufacturing process, changes in the effective size of the permanent magnet, and the utilization rate of the permanent magnet material. When the motors in this paper are divided into two pieces, the loss has a clear tendency to decrease. The distribution and size of the eddy current loss under different divide methods are shown in Figures [12](#fig-0012) and [13](#fig-0013). The radial blocking has a significant effect on reducing loss, so as to reduce the temperature rise of the permanent magnet. Because the AFPMM magnetic field is distributed in the three-dimensional space, there is an axial eddy current loss component, but the content is small, so the effect of spliting block loss in the axial direction is not obvious. Steady-state temperature rise of permanent magnets and windings with different block methods is shown in Figure [14](#fig-0014). Dividing the permanent magnet into four pieces can reduce the temperature rise by 23% compared with the permanent magnet not divided, and dividing the permanent magnet has little effect on the winding temperature.

![](https://onlinelibrary.wiley.com/cms/asset/bd315cb2-e4fa-4165-8b2a-6a1d516eeabb/mpe1880912-fig-0011-m.jpg)

Figure 11 Open in figure viewer PowerPoint The relationship between the eddy current loss and the pieces of permanent magnets.

![](https://onlinelibrary.wiley.com/cms/asset/f984dc05-552c-4f08-b2c1-e6f7209f78eb/mpe1880912-fig-0012a-m.jpg)

Figure 12 (a) Open in figure viewer PowerPoint Eddy current distribution when permanent magnet is divided into pieces. (a) Undivided. (b) Divided into two pieces in the circumferential direction. (c) Divided into two pieces in the radial direction. (d) Divided into four pieces.

![](https://onlinelibrary.wiley.com/cms/asset/cabede22-0e46-4ea2-8dc2-d4e84fce13de/mpe1880912-fig-0012b-m.jpg)

Figure 12 (b) Open in figure viewer PowerPoint Eddy current distribution when permanent magnet is divided into pieces. (a) Undivided. (b) Divided into two pieces in the circumferential direction. (c) Divided into two pieces in the radial direction. (d) Divided into four pieces.

![](https://onlinelibrary.wiley.com/cms/asset/c4f11305-8099-4ec8-804e-4cb455cbb753/mpe1880912-fig-0012c-m.jpg)

Figure 12 (c) Open in figure viewer PowerPoint Eddy current distribution when permanent magnet is divided into pieces. (a) Undivided. (b) Divided into two pieces in the circumferential direction. (c) Divided into two pieces in the radial direction. (d) Divided into four pieces.

![](https://onlinelibrary.wiley.com/cms/asset/ba42221f-e9f3-4dd9-9218-55e4552cd3b4/mpe1880912-fig-0012d-m.jpg)

Figure 12 (d) Open in figure viewer PowerPoint Eddy current distribution when permanent magnet is divided into pieces. (a) Undivided. (b) Divided into two pieces in the circumferential direction. (c) Divided into two pieces in the radial direction. (d) Divided into four pieces.

![](https://onlinelibrary.wiley.com/cms/asset/99b0999c-29eb-4678-a426-ea9107e9d202/mpe1880912-fig-0013-m.jpg)

Figure 13 Open in figure viewer PowerPoint Eddy current losses of permanent magnets in different block methods.

![](https://onlinelibrary.wiley.com/cms/asset/b2350a42-08be-496f-b4c3-a89eeadbf63a/mpe1880912-fig-0014-m.jpg)

Figure 14 Open in figure viewer PowerPoint Steady-state temperature rise of permanent magnets and windings with different block methods.

### 3.4. The Influence of Cooling Water Speed on the Temperature Rise of the Motor

Under steady-state conditions, the temperature rise curves of permanent magnets and winding with the change of cooling water flow rate are shown in Figure [15(a)](#fig-0015), the change curve of cooling coefficient in waterway is shown in Figure [15(b)](#fig-0015). With the flow rate increase of the cooling water, during the period of 0–1.5 m/s, the cooling coefficient of the waterway increases, and the temperature rise of windings and permanent magnets decreases. After 1.5 m/s, the cooling water enters the turbulent flow stage, the more flow rate increases, the more slowly speed decreases. the saturated water speed will eventually be reached, and then increasing the water speed has little effect on heat dissipation. Therefore, choosing a reasonable cooling water speed can not only ensure the safe operation of the motor, but also reduce the power of the water pump.

![](https://onlinelibrary.wiley.com/cms/asset/36631fd8-d453-4a49-97f7-3c340e7308cf/mpe1880912-fig-0015a-m.jpg)

Figure 15 (a) Open in figure viewer PowerPoint The influence of the cooling water flow rate at the rated power of the motor on the temperature rise of the permanent magnets and windings and the heat dissipation coefficient of the waterway. (a) Temperature rise of winding and permanent magnet. (b) Waterway heat dissipation coefficient.

![](https://onlinelibrary.wiley.com/cms/asset/31caa821-0215-4b20-bcff-63eabff59582/mpe1880912-fig-0015b-m.jpg)

Figure 15 (b) Open in figure viewer PowerPoint The influence of the cooling water flow rate at the rated power of the motor on the temperature rise of the permanent magnets and windings and the heat dissipation coefficient of the waterway. (a) Temperature rise of winding and permanent magnet. (b) Waterway heat dissipation coefficient.

Under transient conditions, the temperature of the permanent magnet and winding changes with the cooling water flow rate when the motor runs for 180 s at 56 kW and 3000 rpm. As shown in Figure [16](#fig-0016), the temperature of the winding and permanent magnet basically does not change, and the temperature of the permanent magnet does not change, it is about 77°C, and the winding is about 183°C. From the principle of the transient thermal network equation in section III(B) of this paper, it can be seen that the transient temperature rise speed is mainly affected by the heat of the input node and the heat capacity of the node itself. It is easy to know that in this working state, the short-term heating power of the winding is large, and the thermal resistance of the heat dissipation circuit is large, and the balance of the cooling power cannot be achieved before a large temperature difference occurs, and the heat capacity of the winding and insulating paint is limited, resulting in the winding temperature rise rapidly.

![](https://onlinelibrary.wiley.com/cms/asset/245faa7f-7e80-429a-97b0-f777ce8da827/mpe1880912-fig-0016-m.jpg)

Figure 16 Open in figure viewer PowerPoint Changes of temperature of permanent magnet and winding with cooling water flow rate when the motor is running for 180 s at peak power.

### 3.5. The Influence of Loss Distribution on Motor Temperature Rise

Assuming that the sum of copper loss and iron loss of the motor is constant, the ratio of copper loss to iron loss is changed, and the change curve of the steady temperature rise of permanent magnets and windings with the ratio is shown in Figure [17](#fig-0017). Under steady-state conditions, when the ratio of copper loss to iron loss increases, the copper loss increases, the temperature of winding rise rapidly, and the temperature rise of the permanent magnet slowly increases. When the sum of copper consumption and iron consumption of the motor is constant, other factors are ignored. Reducing the proportion of the copper consumption of the motor is beneficial to reduce the temperature rise of the motor, but a lower proportion of the copper consumption requires a larger amount of copper and a larger slot area, so that the material utilization rate and power density are reduced. Under transient conditions, the temperature rise speed of the permanent magnet is basically not affected by the change in the ratio of copper loss to iron loss, while the winding temperature rise speed decreases as the ratio of copper loss to iron loss decreases, reducing the copper loss of the motor. The proportion is conducive to reducing the temperature rise rate of the motor.

![](https://onlinelibrary.wiley.com/cms/asset/6fe217bb-dedf-4d35-8253-474358cc8b3f/mpe1880912-fig-0017a-m.jpg)

Figure 17 (a) Open in figure viewer PowerPoint The temperature rise of permanent magnets and windings varies with the ratio of copper loss to iron loss. (a) Steady-state temperature rise. (b) Transient temperature rise.

![](https://onlinelibrary.wiley.com/cms/asset/c041c556-dd3d-48de-a65d-c990f92f3cb2/mpe1880912-fig-0017b-m.jpg)

Figure 17 (b) Open in figure viewer PowerPoint The temperature rise of permanent magnets and windings varies with the ratio of copper loss to iron loss. (a) Steady-state temperature rise. (b) Transient temperature rise.

## 4\. Magneto-Thermal Coupling Analysis Model

The change of temperature in motor affect the characteristics of windings and permanent magnets, changes of resistance and magnetic field strength affect the loss of motor, and the changes in loss will be fed back to the temperature field calculation. Therefore, the two-way magneto-thermal coupling calculation of the motor can effectively improve the accuracy of the calculation.

The temperature change of the conductor causes the change of resistance value, and the copper loss of the stator also changes:

(25)

where *α* <sub><i>T</i></sub> is the temperature coefficient of the copper wire, *R* <sub>0</sub> is the resistance at the initial temperature, and *T* is the operating temperature. In addition, the remanence of permanent magnets decreases as the temperature of the motor rises:

(26)

where *B* <sub><i>r</i> <i>T</i></sub> and *B* <sub><i>r</i> 20</sub> are the residual magnetism at temperature *T* and 20°C, respectively, and *α* <sub><i>Br</i></sub> is the reversible temperature coefficient of the permanent magnet.

Considering the mutual influence between the electromagnetism and temperature rise of the motor, a magnetic-thermal coupling calculation model is established to iteratively correct the input temperature. The calculation process is shown in Figure [18](#fig-0018). In the figure, *m* % is the allowable error between the calculated temperature and the input temperature rise. When the input starting temperature of the permanent magnet and the winding is 95°C and 115°C, and the allowable error is 5% and 1%, the number of iterations are 4 and 7 respectively, and the allowable error is 1% in this paper.

![](https://onlinelibrary.wiley.com/cms/asset/ea64d7dd-e880-422e-811a-199b29e891d5/mpe1880912-fig-0018-m.jpg)

Figure 18 Open in figure viewer PowerPoint Flow chart of magnetic-thermal coupling calculation of motor characteristics.

Among them, the permanent magnet temperature rise *T* <sub><i>P</i></sub> is taken as the average temperature rise of each node:

(27)

The temperature rise of the stator winding *T* <sub><i>W</i></sub> is taken as the average temperature rise of each node:

(28)

In the formula, *V* <sub><i>P</i> <i>M</i></sub> is the volume of the permanent magnet, and *k* <sub>end</sub> is the ratio of the volume of the winding end to the total volume of the winding.

## 5\. Experimental Test

In order to verify the calculation accuracy of the thermal network method, the temperature rise test was conducted on the prototype. The prototype and experimental platform are shown as Figure [19](#fig-0019). The motor windings were embedded with thermal resistance, the bearing caps, shafts and other structural parts were measured with infrared thermometer, and the highest temperature of rotor was measured with temperature stickers. The rated conditions of the experimental test are: stator current is 75 A, rotor speed is 5600 r/min, and cooling water flow rate is 2 m/s. According to the characteristic that the no-load back electric potential of the motor is inversely proportional to the permanent magnet temperature, in the prototype experiment, the no-load back electric potential measured when the motor just runs at 5600 rpm at 20°C is 368 V. After the motor runs for a period of time, the temperature reaches stable. At this time, the hot no-load back electric potential is 335 V, and the temperature rise of the permanent magnet is 84.4°C calculated according to formulas ([^4])–([^5]). When the ambient temperature is 30°C, the temperature rise of the winding is 53°C by measuring the thermocouple. Tables [^6] and [^7] show the comparison of the temperature distribution of each component of motor. The maximum error appears on the winding, but the error is small, all within a reasonable range, which proves the accuracy of the calculation results in the article. Figure [20](#fig-0020) shows the efficiency map obtained by experimental testing and calculation, the accuracy of efficiency calculation is verified.

(29)

(30)

(31)

![](https://onlinelibrary.wiley.com/cms/asset/f7237b94-c00e-4a16-b44f-875bc73ba45d/mpe1880912-fig-0019a-m.jpg)

Figure 19 (a) Open in figure viewer PowerPoint The prototype and experimental platform. (a) The stator. (b) The rotor. (c) Experimental platform.

![](https://onlinelibrary.wiley.com/cms/asset/11d03170-ee90-4d21-bf51-0e156a6492ea/mpe1880912-fig-0019b-m.jpg)

Figure 19 (b) Open in figure viewer PowerPoint The prototype and experimental platform. (a) The stator. (b) The rotor. (c) Experimental platform.

![](https://onlinelibrary.wiley.com/cms/asset/4bfebf58-176c-48c9-86d5-9eea1191f362/mpe1880912-fig-0019c-m.jpg)

Figure 19 (c) Open in figure viewer PowerPoint The prototype and experimental platform. (a) The stator. (b) The rotor. (c) Experimental platform.

<table><thead><tr><th rowspan="2">Location</th><th colspan="3">Stator</th><th rowspan="2">Permanent magnets</th><th rowspan="2">Shaft</th><th rowspan="2">Rotor core</th></tr><tr><th>Yoke</th><th>Teeth</th><th>Winding</th></tr></thead><tbody><tr><td>Thermal network method (K)</td><td>12.8</td><td>31.3</td><td>56.1</td><td>84.4</td><td>48.6</td><td>59.4</td></tr><tr><td>Measurements (K)</td><td>12.5</td><td>30.3</td><td>53</td><td>81.3</td><td>47.9</td><td>56.7</td></tr><tr><td>Error rate</td><td>2.4%</td><td>3.3%</td><td>5.85%</td><td>3.81%</td><td>1.46%</td><td>4.76%</td></tr></tbody></table>

<table><thead><tr><th rowspan="2">Time (s)</th><th colspan="3">Stator winding</th><th colspan="3">Permanent magnets</th></tr><tr><th>Thermal network method</th><th>Measurements</th><th>Error rate (%)</th><th>Thermal network method</th><th>Measurements</th><th>Error rate (%)</th></tr></thead><tbody><tr><td>280</td><td>27.2</td><td>26.1</td><td>4.21</td><td>35.3</td><td>34.6</td><td>2.02</td></tr><tr><td>338</td><td>58.6</td><td>56.7</td><td>3.35</td><td>36.4</td><td>35.3</td><td>3.12</td></tr><tr><td>458</td><td>118.3</td><td>114.3</td><td>3.50</td><td>39.3</td><td>38.1</td><td>3.15</td></tr><tr><td>467</td><td>140.7</td><td>135.2</td><td>4.07</td><td>40.9</td><td>39.4</td><td>3.81</td></tr><tr><td>1500</td><td>56.0</td><td>53.0</td><td>5.66</td><td>80.9</td><td>78.5</td><td>3.06</td></tr></tbody></table>

![](https://onlinelibrary.wiley.com/cms/asset/e5d5c792-ccb6-4a16-b4f8-0224a97cdaf4/mpe1880912-fig-0020a-m.jpg)

Figure 20 (a) Open in figure viewer PowerPoint The efficiency map of prototype. (a) The test result. (b) The calculation result.

![](https://onlinelibrary.wiley.com/cms/asset/f640fa1d-f9f0-4d03-b035-4fdbb6909e22/mpe1880912-fig-0020b-m.jpg)

Figure 20 (b) Open in figure viewer PowerPoint The efficiency map of prototype. (a) The test result. (b) The calculation result.

In the formula, *B* <sub><i>r</i> 20</sub> is the residual magnetism of the permanent magnet at 20°C; *α* is the reversible temperature coefficient of the permanent magnet; *IL* is the irreversible loss rate of *B* <sub><i>r</i></sub>; *T* is the operating temperature; *b* <sub><i>m</i> 0</sub> is the operating point of the permanent magnet; *A* <sub><i>m</i></sub> is the cross-sectional area of pole of magnetism flux which is provided by permanent magnet; *σ* <sub>0</sub> is the magnetic leakage coefficient; *f* is the operating frequency; *N* is the number of series turns of each phase winding; *K* <sub><i>d</i> <i>p</i></sub> is the winding factor; *K* <sub>Φ</sub> is the air gap flux waveform coefficient; Φ <sub>0</sub> is the no-load main magnetic flux; *E* <sub>0</sub> is the no-load back electromotive force.

## 6\. Conclusion

In this paper, the split-loop method is proposed to analyse the loss considering the influence of the harmonics under PWM power. The thermal network method is embodied and applied to the steady-state and transient temperature rise of the AFPMM calculate. Get the following conclusions:
- (1)
	By establishing a mathematical model of magneto-thermal coupling, a fast iterative temperature rise calculation method for AFPMM is proposed, and the influence of PWM power supply on loss and temperature rise is analyzed. The calculation results are more accurate and can provide guidance on the design and calculation of similar motors.
- (2)
	The effects of dividing PM into pieces, cooling water flow rate, and loss distribution on the steady-state and transient temperature rise of the motor are analyzed. The results showed that within a certain range, the selection of different parameters will have a great impact on motor efficiency and temperature rise, which can provide a reference for the selection of motor parameters.
- (3)
	The loss and temperature rise models of the AFPMM are simplified by the split-loop method and the thermal network method, which can fully ensure the calculation accuracy and avoid heavy dependence on computer software and hardware And a serious waste of time by the finite element method.

The calculation results are verified by prototype test, and the results show that the calculation method used in this paper has high calculation accuracy. Based on the idea of two-way coupling, the interaction relations and influencing factors among electric, magnetic, fluid and thermal fields are fully considered in this paper, the rapid analysis of temperature rise is realized, and consumes less time, occupies little computer resources by the method proposed, it has extremely high application prospects for motor design and optimization.

## Conflicts of Interest

The authors declare no conflicts of interest.

## Data Availability

No data were used to support this study.

## References

## Citing Literature

[Download PDF](https://onlinelibrary.wiley.com/doi/pdf/10.1155/2022/1880912)

back

[^1]: | Location | Stator teeth | Stator yoke | Stator winding | PM | Rotor core | Bearing |
| --- | --- | --- | --- | --- | --- | --- |
| Loss/W | 402 | 564 | 430 | 139 | 10 | 34 |

[^2]: | Location | Node | Location | Node |
| --- | --- | --- | --- |
| Chassis | 1–2 | PM | 15–17 |
| Stator yoke | 3–5 | Air of end part | 19–21 |
| Winding | 6–10, 33–37 | Shaft | 22–24 |
| Stator teeth | 11–13 | Bearing | 25 |
| Rotor core | 14, 18, 30–32 | End cap | 26–29 |

[^3]: | Location | Node | Temperature rise (K) | Node | Temperature rise (K) | Node | Temperature rise (K) |
| --- | --- | --- | --- | --- | --- | --- |
| Stator yoke | 3 | 12.5 | 4 | 12.8 | 5 | 12.0 |
| Stator teeth | 11 | 29.3 | 12 | 31.3 | 13 | 34.0 |
| Stator winding | 6 | 60.3 | 8 | 56.1 | 10 | 59.0 |
| PM | 15 | 77.9 | 16 | 84.4 | 17 | 85.6 |
| Shaft | 22 | 43.0 | 23 | 48.6 | 24 | 53.9 |
| Rotor core | 14 | 63.8 | 18 | 59.4 |  |  |

[^4]: (29)

[^5]: (31)

[^6]: <table><thead><tr><th rowspan="2">Location</th><th colspan="3">Stator</th><th rowspan="2">Permanent magnets</th><th rowspan="2">Shaft</th><th rowspan="2">Rotor core</th></tr><tr><th>Yoke</th><th>Teeth</th><th>Winding</th></tr></thead><tbody><tr><td>Thermal network method (K)</td><td>12.8</td><td>31.3</td><td>56.1</td><td>84.4</td><td>48.6</td><td>59.4</td></tr><tr><td>Measurements (K)</td><td>12.5</td><td>30.3</td><td>53</td><td>81.3</td><td>47.9</td><td>56.7</td></tr><tr><td>Error rate</td><td>2.4%</td><td>3.3%</td><td>5.85%</td><td>3.81%</td><td>1.46%</td><td>4.76%</td></tr></tbody></table>

[^7]: <table><thead><tr><th rowspan="2">Time (s)</th><th colspan="3">Stator winding</th><th colspan="3">Permanent magnets</th></tr><tr><th>Thermal network method</th><th>Measurements</th><th>Error rate (%)</th><th>Thermal network method</th><th>Measurements</th><th>Error rate (%)</th></tr></thead><tbody><tr><td>280</td><td>27.2</td><td>26.1</td><td>4.21</td><td>35.3</td><td>34.6</td><td>2.02</td></tr><tr><td>338</td><td>58.6</td><td>56.7</td><td>3.35</td><td>36.4</td><td>35.3</td><td>3.12</td></tr><tr><td>458</td><td>118.3</td><td>114.3</td><td>3.50</td><td>39.3</td><td>38.1</td><td>3.15</td></tr><tr><td>467</td><td>140.7</td><td>135.2</td><td>4.07</td><td>40.9</td><td>39.4</td><td>3.81</td></tr><tr><td>1500</td><td>56.0</td><td>53.0</td><td>5.66</td><td>80.9</td><td>78.5</td><td>3.06</td></tr></tbody></table>

![](https://onlinelibrary.wiley.com/cms/asset/e5d5c792-ccb6-4a16-b4f8-0224a97cdaf4/mpe1880912-fig-0020a-m.jpg)

Figure 20 (a) Open in figure viewer PowerPoint The efficiency map of prototype. (a) The test result. (b) The calculation result.

![](https://onlinelibrary.wiley.com/cms/asset/f640fa1d-f9f0-4d03-b035-4fdbb6909e22/mpe1880912-fig-0020b-m.jpg)

Figure 20 (b) Open in figure viewer PowerPoint The efficiency map of prototype. (a) The test result. (b) The calculation result.

In the formula, *B* <sub><i>r</i> 20</sub> is the residual magnetism of the permanent magnet at 20°C; *α* is the reversible temperature coefficient of the permanent magnet; *IL* is the irreversible loss rate of *B* <sub><i>r</i></sub>; *T* is the operating temperature; *b* <sub><i>m</i> 0</sub> is the operating point of the permanent magnet; *A* <sub><i>m</i></sub> is the cross-sectional area of pole of magnetism flux which is provided by permanent magnet; *σ* <sub>0</sub> is the magnetic leakage coefficient; *f* is the operating frequency; *N* is the number of series turns of each phase winding; *K* <sub><i>d</i> <i>p</i></sub> is the winding factor; *K* <sub>Φ</sub> is the air gap flux waveform coefficient; Φ <sub>0</sub> is the no-load main magnetic flux; *E* <sub>0</sub> is the no-load back electromotive force.
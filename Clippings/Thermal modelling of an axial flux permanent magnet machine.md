---
title: "Thermal modelling of an axial flux permanent magnet machine"
source: "https://www.sciencedirect.com/science/article/pii/S1359431103002734"
author:
  - "[[R.T. Dobson]]"
published:
created: 2026-07-24
description: "The imperative for conserving energy highlights the need for considering the more widespread implementation of higher efficiency electric machines suc…"
tags:
  - "clippings"
---
## Published by: Elsevier

### Published by

[![Elsevier](https://www.sciencedirect.com/us-east-1/prod/0699cbe042dd17069501dbec21e11c867baa6885/image/elsevier-non-solus.svg)](https://www.sciencedirect.com/journal/applied-thermal-engineering "Go to Applied Thermal Engineering on ScienceDirect")

,,

[View **PDF**](https://www.sciencedirect.com/science/article/pii/S1359431103002734/pdfft?md5=458f0e7850828458cc4ee5d670dcd194&pid=1-s2.0-S1359431103002734-main.pdf)

[10.1016/j.applthermaleng.2003.09.001](https://doi.org/10.1016/j.applthermaleng.2003.09.001)

## Keywords

Axial flux permanent magnet

;

AFPM

;

Thermal modelling

;

Heat pipes

;

Electric motors/generators

- [Previous article in this issue](https://www.sciencedirect.com/science/article/pii/S1359431103002709)
- [Next article in this issue](https://www.sciencedirect.com/science/article/pii/S1359431103002722)

## Nomenclature

*A*

area, m <sup>2</sup>

*b*

outer radius, m

*C*

energy gain coefficient

*c*

specific heat, J/kg K

*d*

diameter, m

*F*

form factor

*f*

Darcy friction factor

*G*

gap ratio, *g* / *b*

*g*

gap width, m

*h*

heat transfer coefficient, W/m <sup>2</sup> K

*k*

energy loss coefficient

*k*

thermal conductivity, W/m K

*L*

length, m

$ṁ$

mass flow rate, kg/s

*N*

number

*p*

pressure, Pa

$Q̇$

heat transfer rate, W

*Re*

Reynolds number, *Re* = *ρVd* / *μ*

*Re* <sub><em>θ</em></sub>

peripheral Reynolds number *Re* <sub><em>θ</em></sub> = *ρωb* <sup>2</sup> / *μ*.

*r*

radius, m

*T*

temperature, °C or K

*t*

time, s

*t*

thickness, m

*u*

internal energy, J

*v*

velocity, m/s

*V*

volume, m <sup>3</sup>

$Ẇ$

work rate, W

*Z*

elevation, m

*z*

length, m
### Greek symbols

*α*

void fraction

*β*

magnet angle, deg

*η*

efficiency

*ε*

emissivity

*ω*

rotational velocity, rad/s

*μ*

dynamic viscosity, kg/m s

*ρ*

density, kg/m <sup>3</sup>

*σ*

Stefan–Boltzmann constant, W/m <sup>2</sup> K <sup>4</sup>
### Subscripts

a

air

m

magnets

s

stator or surface

*r*

radial-direction

*z*

axial-direction

*θ*

circumferential

## 1\. Introduction

Most electrical energy consumed is produced in fossil fuelled power stations. The drawback with such power stations is that fossil fuel reserves are limited and they produce environmentally harmful emissions. To alleviate the problem more renewable energy can be used or fossil fuel used more efficiently. This imperative for better energy utilisation highlights the need for considering the more widespread usage of higher efficiency electric machines such as the axial flux permanent magnet (AFPM) machine.

Compared with the cylindrical radial flux motor, the AFPM machine is an improvement in a number of aspects. Where a short frame, compact construction and high power density is desired, an AFPM machine is a necessity. The features of high efficiency, brushless construction and good starting torque are now possible because of the significant improvements in permanent magnets over the past decade and similar improvements in power electronic devices. The use of rare earth permanent magnet materials such as samarium cobalt (SmCo <sub>5</sub>) and the recently introduced neodymium–iron–boron (NdFeB) magnets provide higher levels of torque.

The applications of the AFPM machine include: water pumping systems, ceiling fans, electric vehicles, and electric bicycles. A 6 kW axial flux brushless DC machine was used as the drive motor for the Fuji Xerox Desert Rose solar racing car. The motor included an adjustable air gap and was capable of driving the car at speeds above 90 km/h. Another and particularly lightweight motor (8.3 kg compared to typically 12–16 kg) is that in the Aurora 101 solar car.

The higher efficiencies and power densities of AFPM machines can result in higher temperatures if adequate cooling has not been provided for. This is especially true at low rotational speeds such as the speeds of about 200 rpm experienced in wind energy turbines. A designer would thus need to know the impact of the different geometries and material thermal properties on the operating temperatures. To meet this need a thermo-fluid model of a machine has been developed. For a given machine at rated copper power loss and speed and basic geometry the model should be able to be used to investigate the effect of a number of machine construction variables. These variables include the gap ratio between the rotor plates and the stator, the effect of a shroud, the surrounding air temperature, the inlet air temperature, the surface optical properties (emissivity) of the components and the effect of placing a heat pipe in the stator.

The objective of the paper is to present the basic architecture of the machine being investigated, the fluid and thermal theoretical modelling and the features of the computer program used to predict the transient temperature response (from start-up to steady-state) for different design variables and operating conditions. Typical results are given and a sensitivity analysis is undertaken wherein the effect of changes to the different variables on the maximum temperature is investigated.

## 2\. AFPM machine architecture

An image of the prototype of the AFPM machine investigated is shown in. It has a diameter of 860 mm, an axial width of 105 mm and a power rating of 300 kW at 2300 rpm and operates at an efficiency of 95%. The detailed architecture of the AFPM machine is illustrated in. The machine consists of four main components: the stator, two rotor plates, the rotor hub and the shaft as shown in. The stator is ring shaped and consists of copper wires that are held together by an epoxy material. The rotor hub has radial blades to assist in pumping air through the machine to cool it; the blades are not curved, as the machine must operate in both rotational directions. The rotor plates are bolted to either side of the rotor hub with the stator located between the rotor plates. The rotor plates have 40 recessions each, in which the magnets (NeFeB) are bonded. shows the assembly of the AFPM machine, the rotor plates and the rotor hub are held together by 16 bolts that extend from the right rotor plate, through the rotor hub and into the left rotor plate. The stator is held in place by an external frame (not shown), the AFPM machine is secured to the floor by this frame.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr1.jpg)

Download: Download full-size image

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr2.gif)

Download: Download full-size image

## 3\. Theoretical modelling

### 3.1. Air flow rate

The steady-state energy equation for a one-dimensional control volume with one inlet and one outlet is given as(1) $Q̇+Ẇ=ṁ[(p2/ρ2−p1/ρ1)+(V22−V12)/2+g(Z2−Z1)+(u2−u1)]$ Eq. may be simplified by assuming incompressible flow and ignoring heat transfer and potential energy, and rearranged to give the pressure (static) difference across the control volume as(2) $Δp=p2−p1=ρV122+ρẆinṁ−k12ρV1222−ρV222$ where (*u* <sub>2</sub> − *u* <sub>1</sub>) has been replaced with *k* <sub>12</sub> (*ρV* <sub>12</sub> <sup>2</sup> /2) or the irreversible (frictional) conversion of energy in the control volume from potential and kinetic energy into internal energy. If the airflow path through the machine is divided into a number of control volumes the air mass flow rate of the air stream through the system is obtained by solving the equation(3) $0=∑i=1NρẆiṁ−∑i=1NkiρiVi22$ where $Ẇi=Ciṁ2ω2(ri+12−ri2)$ and $Vi=ṁ/ρiAi$.

The first term in Eq. represents the energy gained by the air stream due to *viscous pumping* (and fan-action in the rotating channels between the magnets) and the second term represents the frictional energy losses where *C* <sub><em>i</em></sub> and *k* <sub><em>i</em></sub> are the gain and loss coefficients for the various sections. Where possible these coefficients are calculated using fundamental fluid mechanics textbooks or specialised texts,, but where not possible, coefficients were experimentally determined using a geometrically similar half-size transparent model of the machine. An image of the transparent model is shown in whereas is a sectional view of the model indicating the pressure tapping points. The transparent model is constructed so that the effect of various stator–rotor clearances (6.5, 7.5. 8.5 and 9.5 mm) and permanent magnet thickness (0.0, 2.5, 5.5 and 7.5 mm) at different speeds (200–2300 rpm) could be investigated.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr3.jpg)

Download: Download full-size image

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr4.gif)

Download: Download full-size image

Typical pressures along the flow path are shown in. A *Betz* water manometer was used to measure the pressures at the different pressure-tapping points along the flow path. The mass flow rate was experimentally determined using the bell mouth inlet. These experimentally determined mass flow rates are compared with mass flow rates obtained by solving Eq. using the energy loss/gain coefficients described in. In it is seen that the theoretically predicted pressures in as well as the theoretically predicted mass flow rates in all compare to well within 10% of the experimental values.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr5.gif)

Download: Download full-size image

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr6.gif)

Download: Download full-size image

### 3.2. Temperature distribution

The AFPM machine is divided into a number of finite-sized axially symmetric control volumes. Applying the conservation of energy to the *m*, *n* th control volume the temperature after a time step Δ *t* may be expressed, using an explicit numerical formulation as(4) $Tm,nt+1=Tm,n+Δtρc(Δz·Δr·2πr)(Q̇W+Q̇S−Q̇N−Q̇E+Q̇int)$ where $Q̇int$ is the internal heat generation and $Q̇W,S,N,E$ are the heat transfer rates across the west, south, north and east boundaries of the control volume. Conduction is given by Fourier’s law as $Q̇=−krArΔT/Δr$ or $Q̇=−kzAzΔT/Δz$. For control volumes with a boundary in contact with air both convective and radiation heat transfer is considered.

For convection, Newton’s law of cooling $Q̇=hA(Ts−Ta)$ is used. Where possible convective heat transfer coefficients were obtained using correlations generally available in the literature. Although heat transfer in rotor–stator systems has been investigated,,,,, no suitable correlation for the convective heat transfer coefficient for heat transfer between the stator and the rotors and the air flowing in the relatively narrow air gaps between the rotors and the stator was found. However from experimental data given by it was possible to derive a suitable correlation for the local heat transfer coefficient as(5) $h=(k/g)0.00983G−0.28Reθ0.755$ The dimensionless gap ratio *G* = *g* / *b* where *g* is the gap between the two surfaces, *b* is the outer radius and the peripheral Reynolds number is given by *Re* <sub><em>θ</em></sub> = *ρωb* <sup>2</sup> / *μ*. At typical operating conditions (for a diameter of 720 mm and air flow rate of 0.5 kg/s) the average heat transfer coefficient varied from 150 to 290 for gap ratios decreasing from 0.0274 down to 0.0014.

Radiation between two surfaces is taken as(6) $Q̇12=σ(T1−T2)1−ε1ε1A1+1F12A1+1−ε2ε2A2$ If the surfaces are isothermal and close together the form factor *F* <sub>12</sub> =1. If the surfaces are non-isothermal *F* <sub>12</sub> becomes a complicated quadruple integral. Within the AFPM machine however surfaces are relatively large and close together and hence the form factor for radiation heat transfer across the air gap may be taken as unity. The total radiation heat transfer between the stator and the magnets on the rotor (and the relatively small area between the magnets on the rotor) is calculated at each time step as(7) $Q̇sm=Aσ(Ts−Tm)1−εsεs+1+1−εmεm$ In Eq. *T* <sub>s</sub> is the average temperature of control volumes on the surface of the stator facing the rotor plate and magnets and conversely *T* <sub>m</sub> is the average temperature of the surface control volumes of the rotor plate and magnets that face the stator. The number of the stator control volumes may differ from the number of rotor plate and magnet control volumes, hence the heat transferred from each stator control volume is $Q̇sm/Ns$, where *N* <sub>s</sub> is the number of stator control volumes and, similarly, for the heat transferred to each of the rotor plate and magnets control volumes is $Q̇sm/Nm$ where *N* <sub>m</sub> is the number of rotor plate and magnets control volumes facing the stator.

### 3.3. Heat pipe modelling

Cooling the AFPM machine purely by air may not be sufficient to keep critical components, such as the stator, from exceeding the limiting temperatures. The air-cooling ability is proportional to the rotating speed and for low speed applications, for example for a wind turbine insufficient air would be drawn through the machine. The limit on the maximum stator temperature was set at 373 K. At the rated speed of 2300 rpm sufficient air would be drawn into the machine and this limitation would be met. It is at low rotational speeds however that this limiting temperature is likely to be exceeded (as can be seen in the sensitivity analysis depicted in ).

A heat pipe could present an alternative means of removing the heat from the AFPM machine. In the thermal model of the AFPM machine the heat pipe is configured as shown in. Heat removed by the heat pipe is transferred into the atmosphere through the finned surface. The finned surface is cooled by air moving over the fins, which is kept at the same temperature as the air entering the AFPM machine. The heat removed by the heat pipe is given by(8) $Q̇heatpipe=Thot−Tcold1hhotAhot+1hcoldAcold+1ηfinhfinAfin$ where *T* <sub>hot</sub> is the average temperature of the elements that surround the heat pipe in the stator, *T* <sub>cold</sub> is the temperature of the average of the air cooling the finned surface, *h* <sub>hot</sub> is the convective heat transfer coefficient on the inside wall of the heat pipe in the stator, *A* <sub>hot</sub> is the exposed area of the heat pipe in the stator, *h* <sub>cold</sub> is the convective heat transfer coefficient on the inside wall of the heat pipe in the finned area, *A* <sub>cold</sub> is the exposed area of the heat pipe at the finned surface, *η* <sub>fin</sub> is the efficiency of the finned surface, *h* <sub>fin</sub> is the convective heat transfer coefficient on the surface of the fins and *A* <sub>fin</sub> is the total exposed area of the finned surface. Values in the order of *h* <sub>hot</sub> = *h* <sub>cold</sub> =1000 W/m <sup>2</sup> K and *h* <sub>fin</sub> =45 W/m <sup>2</sup> K were assumed.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr7.gif)

Download: Download full-size image

If a heat pipe were to be placed in the stator it would have to be of non-conducting material. Research on plastic heat pipes is being undertaken but it is unlikely that a suitable and reliable heat pipe would be as yet available for this specific application. The heat pipe could however be replaced by a pipe through which a single-phase fluid is circulated. In this case the basic geometry would still be the same as given in, and Eq. would still apply but with different heat transfer coefficients.

### 3.4. Thermal properties

Not all of the control volumes contain the same material. The stator for instance consists of a mixture of copper and epoxy. Defining a void fraction *α* <sub><em>i</em></sub> as the volume of the *i* th component divided by the total volume the thermal conductivity of the mixture can be approximated by *k* =∑ *α* <sub><em>i</em></sub> *k* <sub><em>i</em></sub>. Defining a mass fraction *x* <sub><em>i</em></sub> as the mass of the *i* th component divided by the total mass the specific heat of a mixture is approximated as *c* =∑ *x* <sub><em>i</em></sub> *c* <sub><em>i</em></sub>. When conduction occurs between two control volumes of dissimilar materials the thermal conductivity in the axial direction is approximated as $k=(k1Δz1+k2Δz2)/(Δz1+Δz2)$ where the subscripts 1 and 2 refer to the two control volumes and Δ *z* refers to the axial with of the control volumes. A similar expression for thermal conduction between two control volumes in the radial direction may also be derived.

### 3.5. Computer program

*Visual Basic* program routines were written to determine the air mass flow rate through the machine and the temperature distribution. The program to determine the temperature distribution is able to take into account air and construction material thermal properties, constructional sizes such as diameters, thickness, and number of magnets for the important components for different air mass flow rates, rotational speeds and internal heat generations. The size of the control volumes of the rotors, shroud, shaft, rotor hub, bearings, and stator and air channels could be varied. Monitoring a selection of important temperatures, as a function of time is possible. Temperatures that can be monitored include the maximum stator, right and left rotors and magnets, shroud, shaft, rotor hub and bearings.

## 4\. Results

The operating conditions of the AFPM machine were changed and comparisons were made to a base case. The operating conditions of the base case are shown in. A typical transient temperature response from start-up, to steady-state, switch-off and back to ambient conditions is given in. The indicated component temperatures are for those control volumes that experience the highest temperatures. It is seen that the stator experiences the highest temperatures while the other temperatures do not change much from each other and do not rise up much above the start-up temperature.

Table 1. Base-case values

| Rotational speed \[rpm\] | 2300 |
| --- | --- |
| Internal heat generation \[kW\] | 7 |
| Emissivity | 0.9 |
| Shroud | Yes |
| Heat pipe | No |
| Gap ratio, *G* | 0.0123 |
| Surrounding air temperature \[K\] | 293 |
| Inlet air temperature \[K\] | 293 |

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr8.gif)

Download: Download full-size image

The influence of a heat pipe on the maximum temperature can be investigated. For a heat pipe geometry (and for typical heat pipe and air-to-air finned surface heat transfer coefficients) as shown in the heat removed by the heat pipe and the maximum stator temperature as a function of its diameter is given in. It is seen that the use of a 10 mm diameter heat pipe is able to reduce the maximum stator temperature from 375 K () down to 345 K.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr9.gif)

Download: Download full-size image

The sensitivity of various design and operating conditions are given in. Maximum stator temperatures as a function of mass flow rate are given for different gap ratios (b), emissivities (d), surrounding and inlet air temperatures (e) and (f), and the effect of whether a shroud is used or not in (c). It is seen that by increasing the air mass flow rate (using an external fan) above about 0.5–1.0 kg/s the maximum stator temperature does not decrease significantly. It is seen in that decreasing the gap width between the stator and the rotors tends to reduce the maximum stator temperature slightly. Likewise in it is seen that the use of a shroud or not, and the surrounding air temperature and emissivity hardly influences the maximum stator temperature at all. Inlet temperature on the other hand as seen in however has a very significant effect.

Depending on the operating conditions the outlet temperature can differ from the inlet temperature by as much as 35 °C. The average temperature of the air between the different positions (shown in ) for the base case values of but for different rotational speeds is given in. A change in air temperature has an effect on the density and viscosity, which in turn has an effect on the velocities, loss coefficients and ultimately on the mass flow rate. shows the mass flow rate for three rotational speeds for no copper losses as well as for the base case value of 7 kW. If the air handling capacity of the machine is considered as a *fan* with no internal heat generation the mass flow rate would be over-estimated by some 11.1% compared with the machine operated at base case conditions.

Table 2. Average air temperatures of the different sections of the machine for different rotational speeds

| Section | 368 rpm | 1432 rpm | 2370 rpm |
| --- | --- | --- | --- |
| 0–1 | 293.0 | 293.0 | 293.0 |
| 1–2 | 293.0 | 293.0 | 293.0 |
| 2–3 | 295.5 | 293.8 | 293.4 |
| 3–4 | 306.2 | 301.6 | 297.8 |
| 4–5 | 315.3 | 305.7 | 304.2 |
| 5–6 | 321.7 | 311.4 | 307.8 |
| 6–7 | 320.2 | 310.8 | 306.6 |
| 7–8 | 320.2 | 310.8 | 306.6 |

Table 3. Mass flow rates (kg/s) through the machine for different speeds (column A is for no internal heat generation whereas column B is for the base case value of 7 kW)

| Rotational speed \[rpm\] | A | B | Difference \[%\] |
| --- | --- | --- | --- |
| 368 | 0.0664 | 0.0616 | 7.22 |
| 1432 | 0.264 | 0.238 | 9.69 |
| 2370 | 0.448 | 0.398 | 11.1 |

## 5\. Discussion and conclusions

Based on the results of the theoretical predictions a number of general conclusions for the AFPM machine can be made:  
- •
	Inlet air temperature has a significant effect on the maximum stator temperature. Care thus needs to be taken that heated outlet air be appropriately ducted away and not allowed to re-enter the machine.
- •
	Increasing the air mass flow rate through the machine to above 0.5 kg/s does not result in a significant decrease in temperature.
- •
	Gap ratio, emissivity, surrounding temperature and the use of a shroud have an insignificant effect on the temperatures. A shroud may however be necessary to prevent re-circulation of heated outlet air and also to channel cool fresh inlet air to the rotor hub.
- •
	Heat pipes have a significant potential in reducing the maximum stator temperature.
- •
	The increase in temperature of the air as it moves through the machine results in a decrease in the mass flow rate of the air.

The experimental tests showed that primarily the rotor hub determines the flow rate through the machine. The rotor hub blades (shown in ) result in relatively large energy losses. Future research could consider a more streamlined rotor hub for both the motor and the opposite direction generator modes of operation.

It is seen in that lowering the temperature of the inlet air significantly reduces the maximum stator temperature. Consideration could thus be given in future to cooling the inlet air directly using a refrigerator in situations where material temperature limits are exceeded.

## Appendix A.

The energy (frictional) loss coefficients *k* as used in Eq. are determined for the various sections indicated in. In the analysis that follows all friction factors were calculated as: *f* =64/ *Re* if *Re* <1180 or *f* =0.316 *Re* <sup>−0.25</sup> if *Re* ⩾1180. The energy gain coefficients were found to be well approximated by an equation suggested by Owen, as $C=0.491(log10Reθ)2.58$.

*Section 0 to 1*: The loss coefficients for the bell mouth inlet was taken as *k* =1. The bell mouth was used to determine the velocity at 1 using $V1=2(p0−p1)/ρ1$ from which the mass flow rate could be determined using $ṁ=ρ1V1A1$.

*Section 1 to 2*: The sudden expansion between 1 and 2 was experimentally determined as *k* =0.85 and is based on the velocity at 2, *V* <sub>2</sub>. The pipe loss between 1 and 2 is taken as $k12=f12L12d2$ where *L* <sub>12</sub> is its length and *d* <sub>2</sub> its diameter.

*Section 2 to 3*: An *entrance* loss coefficient from 2 through hub and into 3, *k* <sub>23</sub>, was experimentally determined. It could not be given as a single constant but varied as shown in and is based on an average velocity in one of the two flow channels between the stator and the two rotors at 3 and is thus $V3=(ṁ/2)ρA3$ where *A* <sub>3</sub> =2 *πr* <sub>3</sub> *g* <sub>3</sub> and *r* <sub>3</sub> is the radius at 3 and *g* <sub>3</sub> is the gap between the stator and a rotor plate at 3. The pipe loss from 2 to 3 is $k23=f23L23d23$ and is based on an average velocity $V23=ṁρ23A23$ where *A* <sub>23</sub> = *πd* <sub>23</sub> <sup>2</sup> /4 and *d* <sub>23</sub> is the *average diameter* of the flow path between 2 and 3. The energy gain between 2 and 3 is approximated by $Ẇ23=ṁω2r22∑i=0n(ri+14−ri4)$ The limit *n* was taken (arbitrarily) as 6.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr10.gif)

Download: Download full-size image

*Section 3 to 4*: The *bend* loss coefficient between 3 and 4 was experimentally determined as *k* =0.11 and is based on a velocity $V4=ṁ/ρ4A4$ where $A4=2πr4g4−iβ3602πr4t$ and where *i* is the number of magnets, *β* is the magnet angle, *t* is the magnet thickness and *g* <sub>4</sub> is the gap between the rotor plates and the stator. The pipe loss coefficient between 3 and 4 is $k34=f34L34d34$. The energy gain between 3 and 4 is $Ẇ34=Cṁ2ω2(r42−r32)$.

*Section 4 to 5*: The pipe loss is $k45=f45L45d45$ and is based on a velocity $V45=ṁ2ρ45A45$ where *A* <sub>45</sub> =(*A* <sub>4</sub> + *A* <sub>5</sub>)/2 and $A5=2πr5g5−iβ3602πr5t$. The work input by viscous pumping for section 4 to 5 is given by $Ẇviscous45=Cṁ2ω2(r52−r42)$

*Section 5 to 6*: The pipe loss is $k56=f56L56d56$ is based on *V* <sub>56</sub> =(*V* <sub>5</sub> + *V* <sub>6</sub>)/2 where $A6=2πr6g6−iβ3602πr6t$. The work input for section 5 to 6 is $Ẇ56=Cṁ2ω2(r62−r52)$.

*Section 6 to 7*: The exit loss was experimentally determined as *k* =0.29 and is based on the average velocity at 7. The pipe loss is $k67=f67L67d67$ where *d* <sub>67</sub> is the average flow area of the shroud and *L* <sub>67</sub> is the circumferential flow path in the shroud. The work input is $Ẇ67=Cṁ2ω2(rp2−r62)$ where *r* <sub>p</sub> is the outer radius of the rotor plates.

*Section 7 to 8*: The exit loss between 7 and 8 was experimentally determined as *k* =1.17.

## References

[View Abstract](https://www.sciencedirect.com/science/article/abs/pii/S1359431103002734)

[^1]: Compared with the cylindrical radial flux motor, the AFPM machine is an improvement in a number of aspects. Where a short frame, compact construction and high power density is desired, an AFPM machine is a necessity. The features of high efficiency, brushless construction and good starting torque are now possible because of the significant improvements in permanent magnets over the past decade and similar improvements in power electronic devices. The use of rare earth permanent magnet materials such as samarium cobalt (SmCo <sub>5</sub>) and the recently introduced neodymium–iron–boron (NdFeB) magnets provide higher levels of torque

[^2]: The steady-state energy equation for a one-dimensional control volume with one inlet and one outlet is given as(1) $Q̇+Ẇ=ṁ[(p2/ρ2−p1/ρ1)+(V22−V12)/2+g(Z2−Z1)+(u2−u1)]$ Eq. may be simplified by assuming incompressible flow and ignoring heat transfer and potential energy, and rearranged to give the pressure (static) difference across the control volume as(2) $Δp=p2−p1=ρV122+ρẆinṁ−k12ρV1222−ρV222$ where (*u* <sub>2</sub> − *u* <sub>1</sub>) has been replaced with *k* <sub>12</sub> (*ρV* <sub>12</sub> /2) or the irreversible (frictional) conversion of energy in the control volume from potential and kinetic energy into internal energy. If the airflow path through the machine is divided into a number of control volumes the air mass flow rate of the air stream through the system is obtained by solving the equation(3) $0=∑i=1NρẆiṁ−∑i=1NkiρiVi22$ where $Ẇi=Ciṁ2ω2(ri+12−ri2)$ and $Vi=ṁ/ρiAi$

The first term in Eq. represents the energy gained by the air stream due to *viscous pumping* (and fan-action in the rotating channels between the magnets) and the second term represents the frictional energy losses where *C* <sub><em>i</em></sub> and *k* <sub><em>i</em></sub> are the gain and loss coefficients for the various sections. Where possible these coefficients are calculated using fundamental fluid mechanics textbooks or specialised texts,, but where not possible, coefficients were experimentally determined using a geometrically similar half-size transparent model of the machine. An image of the transparent model is shown in whereas is a sectional view of the model indicating the pressure tapping points. The transparent model is constructed so that the effect of various stator–rotor clearances (6.5, 7.5. 8.5 and 9.5 mm) and permanent magnet thickness (0.0, 2.5, 5.5 and 7.5 mm) at different speeds (200–2300 rpm) could be investigated.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr3.jpg)

Download: Download full-size image

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr4.gif)

Download: Download full-size image

Typical pressures along the flow path are shown in. A *Betz* water manometer was used to measure the pressures at the different pressure-tapping points along the flow path. The mass flow rate was experimentally determined using the bell mouth inlet. These experimentally determined mass flow rates are compared with mass flow rates obtained by solving Eq. using the energy loss/gain coefficients described in. In it is seen that the theoretically predicted pressures in as well as the theoretically predicted mass flow rates in all compare to well within 10% of the experimental values.

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr5.gif)

Download: Download full-size image

![](https://ars.els-cdn.com/content/image/1-s2.0-S1359431103002734-gr6.gif)

Download: Download full-size image

[^3]: The AFPM machine is divided into a number of finite-sized axially symmetric control volumes. Applying the conservation of energy to the *m*, *n* th control volume the temperature after a time step Δ *t* may be expressed, using an explicit numerical formulation as(4) $Tm,nt+1=Tm,n+Δtρc(Δz·Δr·2πr)(Q̇W+Q̇S−Q̇N−Q̇E+Q̇int)$ where $Q̇int$ is the internal heat generation and $Q̇W,S,N,E$ are the heat transfer rates across the west, south, north and east boundaries of the control volume. Conduction is given by Fourier’s law as $Q̇=−krArΔT/Δr$ or $Q̇=−kzAzΔT/Δz$. For control volumes with a boundary in contact with air both convective and radiation heat transfer is considered.

[^4]: If a heat pipe were to be placed in the stator it would have to be of non-conducting material. Research on plastic heat pipes is being undertaken but it is unlikely that a suitable and reliable heat pipe would be as yet available for this specific application. The heat pipe could however be replaced by a pipe through which a single-phase fluid is circulated. In this case the basic geometry would still be the same as given in, and Eq. would still apply but with different heat transfer coefficients.
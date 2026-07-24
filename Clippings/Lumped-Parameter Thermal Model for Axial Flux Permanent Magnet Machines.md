---
title: "Lumped-Parameter Thermal Model for Axial Flux Permanent Magnet Machines"
source: "https://ieeexplore.ieee.org/abstract/document/6248223"
author:
published:
created: 2026-07-24
description: "A lumped-parameter thermal model is presented for axial flux permanent magnet (AFPM) machines. The model provides the steady-state thermal solution to derive th"
tags:
  - "clippings"
---
## Abstract:

A lumped-parameter thermal model is presented for axial flux permanent magnet (AFPM) machines. The model provides the steady-state thermal solution to derive the temperat...

---

Axial Flux Permanent Magnet (AFPM) machines are nowadays widely used due to their high torque density, modular and compact construction, high efficiency, reliability and easy integration with other mechanical components such as turbine rotors, especially as a generator in wind power applications \[1\]. Availability of modern high energy permanent magnet (PM) materials, such as NdFeB, has resulted in rapid development of these types of machines \[2\]–\[5\]. The problem, however is that magnets are continuously expensive. Chen et al. \[6\] have proposed a comprehensive comparison between various PM generator topologies both in low and high speed applications. The study shows that double sided AFPM configuration presents the highest level of torque density among various types of axial flux and radial flux PM machines.

With increasing material costs, especially permanent magnet materials, there has been a great tendency to achieve appropriate PM machines with improved geometry for a given output \[7\], \[8\]. However, in these studies, the design procedures have been reported without giving sufficient discussion on the thermal restrictions of the machine. As a result, the proposed design parameters may not be feasible and reliable in practice.

For PM machines, the remanent flux density of the permanent magnet material depends on the temperature. As a result, the amplitude of the induced back-EMF and thereby, the performance characteristics of the machine are affected by the magnet temperature. Also there exist some risks such as thermal demagnetization of the magnets and mechanical hazards for the glue joints between the magnets and the surface of the rotor disk, if the temperature exceeds the critical limit. Furthermore, precise value of the phase resistance, which is sensitive to temperature variation, is required to obtain the accurate value of the copper losses and efficiency. Thus, to ensure a successful machine design and a long operational lifetime for the machine, it is necessary to focus on the thermal analysis of the machine to be able to predict an accurate temperature distribution in the most sensitive parts of the machine.

Whereas extensive research has been focused on the thermal analysis of conventional electrical machines, especially induction machines \[9\]–\[11\], AFPM machines have not received enough attention \[12\], \[13\]. Gieras et al. \[1\] have discussed the thermal behavior of axial flux machines and have also presented a simplified thermal resistance network for an axial-flux PM machine. Some experimental temperature measurements for an AF machine with one stator-two rotors configuration has been reported by Scowby et al. \[14\]. In this study, the authors have considered an internal forced air-cooling. However, the study lacks sufficient theoretical information of thermal analysis of the machine in details. An improved cooling method with applying both water-cooling and air-cooling has been reported in \[15\].

Thermal analysis of electrical machines with applying of the lumped parameters has been the most common approach during the past few decades. In addition to the use of the thermal resistance network, numerical methods such as finite-element method (FEM) have been studied by many authors especially for coupled electromagnetic and thermal simulations \[16\], \[17\]. Despite the fact that the FEM is capable of accurately solving the temperature distribution in different parts of the machine, it is very time consuming and it is not appropriate to be a part of an optimization problem.

In this paper, a computer-aided design (CAD) procedure including both electromagnetic and thermal modelling of the machine is proposed. An accurate thermal resistance network is achieved for an axial flux permanent magnet machine. More detailed heat transfer mechanisms in both radial and axial directions of the machine for different parts of the machine as well as the joints and contact transition layers is taken into account and the distribution of the losses in different parts of the machine is carefully determined.

In this section, a lumped-parameter thermal model applicable to AFPM machines is presented. An accurate thermal resistance network using $T$ -equivalent lumped-parameter is defined. In this method, the machine is divided into several thermal elements which are modelled with equivalent lumped-parameter blocks, uniformly distributed thermal capacity and heat source generators. The lumped parameters derived from the material properties of the elements, such as heat transfer coefficients as well as their dimensional information. Adjacent elements are connected to each other directly or through additional thermal resistances.

In the following, the heat transfer mechanisms, which are generally classified as conduction, convection and radiation, are discussed in detail.

### A. General Cylindrical Component

A general cylindrical component and its $T$ -equivalent thermal circuit that is derived from the solution of the heat conduction equations are shown in Fig. 1. Completely independent heat flow in the axial and radial directions is assumed and the circumferential heat flow is not taken into account \[9\]. The corresponding expressions for the parameters are given in Table I, where $k_{\rm r}$ and $k_{\rm a}$ are the thermal conductivities in the radial ($r$) and axial ($a$) directions, respectively; $l$ is the length and $r_{1}$ and $r_{2}$ are the outer and inner radii of the cylindrical component; $T_{{\rm radial},{\rm in}}$ and $T_{{\rm radial},{\rm out}}$ are the unknown temperatures at inner and outer surfaces, and $T_{{\rm axial},{\rm left}}$ and $T_{{\rm axial},{\rm right}}$ are the unknown temperatures at two axial edges; $T_{\rm m}$ represents the average temperature of the component and $P$ and $C$ represent the corresponding internal thermal generation and thermal capacity. In steady-state analysis $C$ can be omitted.

[![Fig. 1. - (a) General cylindrical component. (b) Independent radial and axial thermal network.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-1-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-1-source-large.gif)

**Fig. 1.**

(a) General cylindrical component. (b) Independent radial and axial thermal network.

**Table I** Parameters of Thermal $T$ -Equivalent Model for Cylindrical Component

[![Table - Parameters of Thermal $T$-Equivalent Model for Cylindrical Component](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-1-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-1-source-large.gif)

Calculation of the values of the individual thermal resistances for electrical machines is described in detail in \[9\]. However, in order to show the application of the $T$ -equivalent thermal model to the considered AF machine, the calculation of the resistances in $T$ -model is provided as an example for the stator yoke.

For axial direction

$$
\begin{aligned}
\eqalignno{R_{1{\rm a}\_{\rm yoke}}=&\,R_{2{\rm a}\_{\rm yoke}}={l_{\rm yoke}\over 2\pi k_{{\rm core}\_{\rm a}}\left(r_{\rm out}^{2}-r_{\rm in}^{2}\right)}&\hbox{(1)}\cr R_{3{\rm a}\_{\rm yoke}}=&\,{-l_{\rm yoke}\over 6\pi k_{{\rm core}\_{\rm a}}\left(r_{\rm out}^{2}-r_{\rm in}^{2}\right)}.&\hbox{(2)}}
\end{aligned}
$$
 View Source

For radial direction

$$
\begin{aligned}
\eqalignno{R_{1{\rm r}\_{\rm yoke}}=&\,{1\over 4\pi k_{{\rm core}\_{\rm r}}l_{\rm yoke}}\left[1-{2r_{\rm in}^{2}\ln\left({r_{\rm out}\over r_{\rm in}}\right)\over\left(r_{\rm out}^{2}-r_{\rm in}^{2}\right)}\right]&\hbox{(3)}\cr R_{2{\rm r}\_{\rm yoke}}=&\,{1\over 4\pi k_{{\rm core}\_{\rm r}}l_{\rm yoke}}\left[{2r_{\rm out}^{2}\ln\left({r_{\rm out}\over r_{\rm in}}\right)\over\left(r_{\rm out}^{2}-r_{\rm in}^{2}\right)}-1\right]&\hbox{(4)}\cr R_{3{\rm r}\_{\rm yoke}}=&\,{-1\over 8\pi k_{{\rm core}\_{\rm r}}l_{\rm yoke}\left(r_{\rm out}^{2}-r_{\rm in}^{2}\right)}\cr&\times\left[r_{\rm out}^{2}+r_{\rm in}^{2}-{4r_{\rm out}^{2}r_{\rm in}^{2}\ln\left({r_{\rm out}\over r_{\rm in}}\right)\over\left(r_{\rm out}^{2}-r_{\rm in}^{2}\right)}\right]&\hbox{(5)}}
\end{aligned}
$$
 View Source

where $l_{\rm yoke}$ is the thickness of the stator yoke; $r_{\rm out}$ and $r_{\rm in}$ are the external and internal radii of the stator stack, respectively; $k_{{\rm core}\_{\rm a}}$ and $k_{{\rm core}\_{\rm r}}$ are the thermal conductivity of the laminated stacks in axial (in plane) and radial (perpendicular to plane) directions, respectively.

Table II gives some typical values for the thermal conductivities of solid materials used for electrical machines \[1\], \[18\].

**Table II** Thermal Conductivities of Materials Used in Machine Structure

[![Table - Thermal Conductivities of Materials Used in Machine Structure](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-2-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-2-source-large.gif)

As it is clear from Table II, the heat conductivity of the laminated stacks in the axial direction is very high compared with the corresponding value in the radial direction. This is due to the presence of a dielectric coating layer in the radial direction as well as the stator lamination stacking factor which is only 0.92 for the prototype machine used in this study. Besides, because of the presence of different insulation layers in the slot windings, the heat conductivity in the radial direction along the wires is far higher than its corresponding value in the axial direction \[9\], \[10\].

With a little negligence, a constant value of thermal conductivities with respect to the temperature may be introduced for the solids used in electrical machines. But, the thermal conductivity of air and water are strongly temperature-dependent values and must be found iteratively.

### B. Convective Heat Transfers

Convective heat transfer across the air paths within the machine is modelled with a single thermal conductive resistance $R_{\rm c}=1/hS$, where $h$ is the convection coefficient which can be obtained either experimentally or analytically, and $S$ is the surface area of convective heat transfer between two regions.

Exact evaluation of the heat transfer coefficients for the studied surface is the most problematic task in thermal modelling. For complex structures such as electrical machines, the most common method to find $h$ is based on experimental measurements or semi-empirical correlations. The most important convection coefficients to be evaluated are the heat transfer coefficient for the air-gap and the heat transfer coefficient between the frame surface and the ambient.

Since the permanent magnets are faced directly towards the air-gap, their temperatures are mainly depending on the heat transfer between the stator and the rotor in the air-gap region. Therefore, the air-gap heat transfer coefficient with reasonable accuracy is needed. There is an obvious lack of appropriate semi-empirical correlations to define the heat transfer coefficient for the air-gap region of an AF machine. But, the structure of an AF machine with an interior rotor may be considered to be comparable to a heat transfer problem with enclosed rotor-stator system \[15\], \[19\].

In this study, the heat transfer coefficient for the air-gap is evaluated based on the Reynolds number $Re_{\delta}$ and the corresponding Taylor $Ta$ and Nusselt $Nu$ numbers \[15\], \[19\]

$$
\begin{aligned}
\eqalignno{Re_{\delta}=&\,{vg\over v_{\delta}}&\hbox{(6)}\cr Ta=&\,Re_{\delta}^{2}{g\over r}&\hbox{(7)}\cr Nu=&\,\left\{\matrix{2,&{\hbox {if}}&Ta<1700\cr 0.128Ta^{0.367},&{\hbox {if}}&1700<Ta<10^{4}\cr 0.409Ta^{0.241},&{\hbox {if}}&10^{4}<Ta<10^{7}}\right.&\hbox{(8)}}
\end{aligned}
$$
 View Source

where $g$ is the air-gap physical length; $v$ is the circumferential speed of the rotor; $v_{\delta}$ is the kinematic viscosity of the air and $r$ is the outer radius of the rotor.

Finally, the heat transfer coefficient for the air-gap $h_{\rm agap}$ can be calculated as

$$
h_{\rm agap}={Nu\lambda_{\rm air}\over g}\eqno{\hbox{(9)}}
$$
 View Source

where $\lambda_{\rm air}$ is the thermal conductivity of air.

For axial-flux machines with two stators-one rotor configuration, the stator can be attached to the bearing shield by using bolt joints. This construction may be achieved by welding an additional steel plate to the stator yoke, as illustrated in Fig. 2. In low speed machines with no external air blow through the frame, the main heat flux flows from the stator winding through the stator iron into the stator fixing plates and finally through the bearing shields into the ambient.

[![Fig. 2. - (a) Schematic presentation of the main heat transfer path from the winding to the bearing shield in low-speed AFPM machines. (b) Stator of AF machine after winding.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-2-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-2-source-large.gif)

**Fig. 2.**

(a) Schematic presentation of the main heat transfer path from the winding to the bearing shield in low-speed AFPM machines. (b) Stator of AF machine after winding.

Consequently, the thermal resistances along this heat flux path most contribute to the operational temperature of the machine. Thus, in order to achieve a good heat transfer rate, the thermal resistances along this path should be minimized by using a proper insulation materials and suitable manufacturing technique for improving the contacts and joints to achieve proper heat transfer.

### C. Radiation

Heat transfer due to radiation from the internal surfaces of the machine can be neglected due to the low temperature gradient inside the machine structure. However, to account for the temperature gradient between the frame surface and ambient, radiation can be taken into account in terms of an additional thermal resistances in the same way as the convective heat transfer by replacing the convection coefficient with the equivalent radiation coefficient $\alpha_{\rm rad}$ defined as \[10\]

$$
\alpha_{\rm rad}={P_{\rm rad}\over T_{\rm sur}-T_{\rm amb}}\eqno{\hbox{(10)}}
$$
 View Source

where $P_{\rm rad}$ is the heat removal through radiation per unit area and can be describe as

$$
P_{\rm rad}=\varepsilon_{\rm sur}\sigma_{\rm SB}\left(T_{\rm sur}^{4}-T_{\rm amb}^{4}\right)\eqno{\hbox{(11)}}
$$
 View Source

where $\sigma_{\rm SB}$ is Stefan–Boltzmann constant and $T_{\rm sur}$ and $T_{\rm amb}$ are the surface and ambient temperatures in Kelvin, respectively; and $\varepsilon_{\rm sur}$ is the emissivity of the surface which depends on the material of the surface. For a black painted surface, the emissivity is typically nearly 0.9, but for a polished steel surface it may be below 0.3 \[1\], \[20\]. Radiation may be a significant cooling mechanism, especially for small power machines.

### D. Power Losses and Their Distribution

An appropriate thermal analysis requires accurate evaluation of the power losses and also their distribution inside the machine.

The copper losses which are the most significant part of the total losses in low and medium speed applications are separated into the copper losses in end-winding on the outer radius of the stator, the copper losses in windings inside the stator slots and the copper losses in end-winding on the inner radius of the stator. The copper losses are obtained analytically with calculation of the stator winding resistance and stator current. Since the copper losses are temperature-dependent, the exact amounts of the copper losses are iteratively calculated with temperature correction.

The iron losses are distributed in the stator yoke and teeth. Since the thickness of the stator teeth vary with radius in axial flux machines with rectangular slots, the iron losses are calculated with quasi-3D computation of the machine presented in \[21\].

The bearing losses may be calculated by using the calculation tools provided by the bearing manufacturer or analytical equations \[22\].

The eddy current losses in permanent magnets and rotor disk are usually neglected in low speed applications, but for high speed machines it must be included in the thermal model. In \[1\], analytical methods are presented to determine the eddy current losses in the permanent magnets or in the solid-iron disk under the permanent magnets.

Obtained power losses must be injected into the particular nodes in the lumped-parameter model.

The schematic drawing of axial flux machine and the corresponding equivalent lumped-parameter thermal network are presented in Fig. 3.

Because of the axial symmetry, only half of the machine structure is modelled, and the $T$ -equivalent modeling approach is used in the thermal analysis. The power losses defined in previous section are injected into the particular thermal nodes of the components. In the model, the geometry of the AFPM machine is subdivided into the following 13 components: 1) stator slot winding, 2) end-winding on the outer radius of the stator, 3) end-winding on the inner radius of the stator, 4) stator teeth, 5) stator yoke, 6) magnets, 7) rotor disk, 8) air-gap, 9) end-cap air, 10) fixing plate, 11) Bearing shield, 12) frame, and 13) shaft.

Some extra thermal resistances are defined to model the joint between stator yoke and the fixing plate, the contact between bearing shield and fixing plate and the glue materials used between the magnets and rotor disk \[18\].

[![Fig. 3. - Axial flux machine: (a) schematic drawing; (b) equivalent thermal resistance network.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-3-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-3-source-large.gif)

**Fig. 3.**

Axial flux machine: (a) schematic drawing; (b) equivalent thermal resistance network.

[![Fig. 4. - Design procedure of AFPM machines including thermal model.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-4-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-4-source-large.gif)

**Fig. 4.**

Design procedure of AFPM machines including thermal model.

For steady-state analysis, the temperature rise of each node of the thermal network is calculated as 
$$
\Delta{\bf T}={\bf G}^{-1}{\bf P}\eqno{\hbox{(12)}}
$$
 View Source where $\Delta{\bf T}$ is the temperature rise vector, ${\bf G}$ is the thermal conductance matrix and ${\bf P}$ is the power losses vector. The thermal conductance matrix is defined as 
$$
\begin{aligned}
{\bf G}=\left[\matrix{\sum\limits_{i=1}^{n}{1\over R_{1,i}}&-{1\over R_{1,2}}&\cdots&-{1\over R_{1,n}}\cr-{1\over R_{2,1}}&\sum\limits_{i = 1}^{n}{1\over R_{2,i}}&\cdots&-{1\over R_{2,n}}\cr\vdots&\vdots&\ddots&\vdots\cr-{1\over R_{n,1}}&-{1\over R_{n,2}}&\cdots&\sum\limits_{i=1}^{n}{1\over R_{n,i}}}\right]\eqno{\hbox{(13)}}
\end{aligned}
$$
 View Source where $n$ th diagonal element is the sum of the network conductances connected to node $n$ and $1/R_{i,j}$ is the thermal conductance between adjoining nodes $i$ and $j$.

Temperature-dependent thermal conductance matrix and loss matrix require temperature update in accurate design of the machine. Therefore, an iterative coupled electromagnetic and thermal design procedure must be used in this study.

An analytical computer-aided design program including electromagnetic and thermal design is utilized in order to improve the design accuracy of an AFPM machine. An accurate thermal resistance network is implemented as a part of the analytical design procedure. Design procedure is illustrated as a flowchart in Fig. 4.

As it can be seen in the flowchart, electromagnetic design for the machine is obtained using general sizing equation for AFPM machines and comprehensive machine theory, design knowledge and experience. How to design AFPM machines are described in detail in \[1\], \[18\]. When the required accuracy in electromagnetic design is reached, the proposed thermal model is implemented to calculate the temperatures of the various parts of the machine with an accurate iterative thermal modelling of the machine. Obtained temperatures from the thermal resistance network are iteratively updated for recalculation of the permanent magnet material properties, resistivity of the phase windings and the thermal resistivity of the temperature dependent components. While both of electromagnetic and thermal requirements with desired accuracy are not fulfilled, the design is renewed.

A 5 kW, 350 r/min AFPMSG with double stators and one rotor disk is designed using the proposed procedure. The characteristics of the machine are given in Table III. Furthermore, the value of the power losses calculated after the convergence of the electromagnetic-thermal coupling is defined in Table IV.

**Table III** Improved Design Results of AFPMSG Obtained from Developed Program

[![Table - Improved Design Results of AFPMSG Obtained from Developed Program](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-3-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-3-source-large.gif)

**Table IV** Power Losses or Heat Sources

[![Table - Power Losses or Heat Sources](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-4-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-4-source-large.gif)

In order to verify the thermal analysis of the machine, the temperature measurements were carried out for designed generator using small platinum resistance thermometers (Pt-100) and an infrared measurement device.

Temperature sensors were located into the frame, shaft, bearing shield and into the phase windings. Fig. 5 shows the locations of the temperature sensors within the frame of the machine. The rotor and magnet temperatures are measured on the surface of the rotor disk and magnets by using an infrared measurement device. The setup arranged for the test measurements is described in Fig. 6.

[![Fig. 5. - Experimental setup used for temperature measurements.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-5-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-5-source-large.gif)

**Fig. 5.**

Experimental setup used for temperature measurements.

[![Fig. 6. - Measurement setup.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-6-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-fig-6-source-large.gif)

**Fig. 6.**

Measurement setup.

These measured temperatures are compared with the simulations of the respective thermal resistance network which is calculated using the iterative procedure proposed in previous sections.

The results of the calculated and measured temperatures are given in Table V, where it can be seen that there is a good agreement between the calculated and measured temperatures. In addition, it can be seen that the temperature values calculated from the proposed thermal model are slightly higher than their corresponding measured values. This overestimation is desirable in thermal design of electrical machines.

**Table V** Calculated and Measured Temperatures for Designed AFPM Generator (5 kW, 350 r/min)

[![Table - Calculated and Measured Temperatures for Designed AFPM Generator (5 kW, 350 r/min)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-5-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-5-source-large.gif)

In this section, the robustness of the developed thermal resistance network to the correctness of the convection coefficients and the emissivity of the frame surface of the studied AF machine is evaluated by varying each parameter within their computed values. The computed convection coefficients for the AFPM machine modelled are listed in Table VI.

**Table VI** Convective Heat Transfer Coefficients Used in Thermal Model

[![Table - Convective Heat Transfer Coefficients Used in Thermal Model](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-6-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-6-source-large.gif)

Since the thermal resistances along the main heat transfer path, described in Section II, mainly contribute to the heat transfer inside the machine in low-speed applications, cooling through the convection is not as effective as in high-speed applications. The sensitivity analysis shows that even a large variation in the air-gap and end-cap air convection coefficients results in a change of only a few degrees in the estimated temperatures. For example, a 50% increase in the air-gap convection coefficient decreases the end-winding temperature by 1.6 °C and increase the magnet temperature by 0.9 °C. Similarly, a 50% increase in the end-cap air convection coefficient results in a drop of only 1.8 °C in the end winding temperature. The resistance network is most sensitive to the convection coefficient of the frame-ambient; however a 20% decrease in this parameter increases the end winding temperature approximately 6.5 °C which seems to be acceptable.

In low-speed small power electrical machines, the effect of the thermal radiation is not negligible compared with convection heat exchange. Therefore, radiation heat exchange is taken into account. The value of the emissivity of the frame surface has been fixed to the value of 0.7. Since the derivation of this parameter is often difficult, the sensitivity of the thermal model was tested by varying this parameter. It is observed that even a large variation in the emissivity of the frame surface has little effect on the estimated temperatures. When the emissivity of the frame surface is varied in the range of ±30%, the temperature of the end windings varies approximately $\mp 4.2\ ^{\circ}{\rm C}$, respectively.

Furthermore, in order to validate the thermal model, the studied AF machine has also been tested for another load and speed (3.5 kW and 250 r/min). The results are given in Table VII, where it can be seen that there is a good agreement between the calculated and measured temperatures.

**Table VII** Calculated and Measured Temperatures for Designed AFPM Generator (3.5 kW, 250 r/min)

[![Table - Calculated and Measured Temperatures for Designed AFPM Generator (3.5 kW, 250 r/min)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-7-source-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/20/6466463/6248223/6248223-table-7-source-large.gif)

As a result, it can be concluded that the proposed thermal model is highly insensitive to the parameter variations and can be used for low-speed AF machines with similar constructions.

A steady-state thermal analysis of AFPM machines was successfully performed. An accurate thermal resistance network was defined for an AFPM with double stator-one rotor configuration. The lumped parameters were derived from purely dimensional data and the material properties of the machine components.

A 5-kW AFPM generator was designed using the proposed program with regarding the thermal behavior of the machine.

Tests performed on the designed machine verified that the calculated temperatures at different parts of the machine structure were in close agreement with the measured ones obtained from the test machine by means of temperature sensors.

The described lumped-parameter thermal model can be used as a tool for improved design of AFPM machines with desirable performance and dimensions.

The proposed thermal model can also be easily extended to transient thermal analysis.
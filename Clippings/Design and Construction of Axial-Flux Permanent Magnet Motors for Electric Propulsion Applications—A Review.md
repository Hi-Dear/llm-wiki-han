---
title: "Design and Construction of Axial-Flux Permanent Magnet Motors for Electric Propulsion Applications—A Review"
source: "https://ieeexplore.ieee.org/abstract/document/9627679"
author:
published:
created: 2026-07-24
description: "Axial-flux (AF) permanent-magnet (PM) (AFPM) machine is a competent candidate for electric propulsion applications owing to its high power density, high efficie"
tags:
  - "clippings"
---
Lateral view of double-sided AFPM machines: (a) Slotted stator AFIR, (b) Slotless stator AFIR, (c) Slotted stator N-N PM TORUS, (d) Slotless stator N-S PM TORUS.

## Abstract:

Axial-flux (AF) permanent-magnet (PM) (AFPM) machine is a competent candidate for electric propulsion applications owing to its high power density, high efficiency and ef...

---

CCBY - IEEE is not the copyright holder of this material. Please follow the instructions via https://creativecommons.org/licenses/by/4.0/ to obtain full-text articles and stipulations in the API documentation.

Axial-flux (AF) permanent-magnet (PM) (AFPM) machines are attracting wide attention from academia and industry, due to high torque density, high efficiency and compact structure. It has become a very attractive choice for high-power density applications where space and weight are critical, including automotive, aerospace, marine and industrial applications.

A number of review papers have summarized the AFPM machine technologies with respect to the structure and performance, design and modeling, mechanical and thermal analysis as well as material and manufacturing aspects \[1\]–\[3\]. Due to the rapid development of electric drives in automotive, aircraft and marine ships where high torque density and high efficiency coupled with compact structure are necessary, new advances in AFPM machine technology have been achieved. This contribution reviews the key publications in this area, highlighting the most important results that have been achieved in recent years.

Firstly, to quickly understand the different features of AFPM machines from conventional radial-flux (RF) PM (RFPM) machines, key performance comparisons between AFPM and RFPM machines are provided in Section II.

At the beginning of Section III, a brief review of the possible AFPM machine structures and their features, advantages and disadvantages are introduced. Qualitative comparisons among different AFPM configurations are performed to give a good indication of the most promising structure for electric propulsion applications. The winding configurations including core-wound (toroidal) winding and tooth-wound winding are introduced. Then some widely investigated structures and novel AFPM machine topologies used for electric vehicles (EVs) are presented by summarizing the main design parameters and specifications.

The design methodology of AFPM machines is introduced in Section IV by highlighting the sizing equations used in the initial design stage and electromagnetic models for quick and accurate simulations. The most influential parameters of AFPM machines and the design considerations which are important for EV applications are emphasized, along with relevant techniques to reduce the losses, torque ripple, noise and vibration, and extend constant power speed range (CPSR).

The thermal and mechanical analyses are highlighted in AFPM machine design especially for high-power, high-speed applications with a compact structure to validate the effectiveness of the developed electromagnetic design. Section V addresses the key publications in this area.

Despite the technological advantages in AF machines, some serious manufacturing challenges still make them far more costly than their radial counterparts. A significant amount of research has addressed the manufacturing developments of AFPM machines in terms of the stacking and cutting of the stator core, stator teeth and magnets, construction and wind of coils and application of advanced materials to increase the performance and simplify the construction. Section VI covers these papers.

Finally, the conclusion is drawn in Section VII by highlighting several bullet points that are instructive to the AFPM machine design for electric propulsion applications.

Comprehensive comparisons have been made between the AFPM and RFPM machines in terms of torque/power density, active volume and weight, copper and iron losses, efficiency, moment of inertia, etc., to show their advantages and disadvantages for specific applications.

The traditional surface-mounted RFPM machine is compared with four AFPM configurations with single air gap, dual air gaps, slotted and slotless stators in \[4\], where the machines are designed under the assumption that the phase resistance, slot fill, air-gap and steel flux densities are nearly the same for each design. All AFPM structures require smaller volume than the RFPM machine for each given power rating, and the difference widens with increasing power. Besides, the moment of inertia of the rotor is significantly reduced in AFPM machines, which makes them suitable for applications where rapid acceleration and/or deceleration are required, e.g. racing cars and aircrafts.

Another comparison is made between a surface-mounted RFPM machine and an AFPM machine with double-sided stators, considering equal overall motor volume, losses per unit wasting surface, air-gap and steel flux densities \[5\]. The influence of different aspect ratios (axial length/outer diameter), pole numbers and end-winding encumbrances is taken into account. The torque density variation with aspect ratio for different pole numbers is shown in FIGURE 1. The considered AFPM machine with a high pole number is an attractive solution for applications which require high power density but have strict restrictions on motor axial length (aspect ratio < 0.3), whereas the RFPM counterpart is attractive for a long motor shaft with aspect ratio > 1.

**FIGURE 1.**

Torque density versus aspect ratio for different pole numbers: (a) RFPM, (b) AFPM (from \[5\]).

In \[6\], the full-pitch winding RFPM, multistage AFPM and transverse-flux (TF) PM (TFPM) machines are compared for downhole applications where the outer diameter is limited by well size, but the axial length can be relatively long. The three types of PM machines are optimized independently in terms of air-gap flux density and diameter ratio to achieve the maximum torque density considering small current density, small electric loading and high temperature without an external cooling system basing on sizing equations. The results indicate that 1) the RFPM machines have high torque density, power factor and efficiency, which makes them suitable for downhole applications; 2) the multistage AFPM machines have lower torque density and lower efficiency than the other two machines due to the end winding existing in each stage and the small radial space confining the active winding length; 3) the high-pole TFPM machines present the advantage of high torque density, but their low power factor limits the machines to low-speed applications.

In \[7\], a comparison between the dual-rotor toroidal-wound RFPM and AFPM machines is conducted at four power levels ranging from 3 to 50 hp at a rated speed of 1800 rpm. The effects of the machine pole number, the ratio of length to diameter for RFPMs, and the ratio of stator inner to outer diameter for AFPMs on torque density, torque to mass ratio and efficiency are investigated. Although no significant difference is observed between two machine types, the loss per air-gap area of the AFPMs is lower and its machine efficiency is less sensitive to increased poles than that of RFPMs. However, the total active material cost is higher for AFPMs than for RFPMs.

In \[8\], the static characteristics and torque-speed efficiency performances of a TFPM machine with flux concentration and claw pole structure, a dual-rotor AFPM machine with segmented winding and a RF interior-PM (IPM) machine are designed and compared under the same PM mass, motor outer dimension and current density. The efficiency maps indicate that the dual-rotor AFPM machine exhibits the highest torque in the field weakening area, the highest maximum efficiency and the largest area with high efficiency among all three machines.

### A. AFPM Machine Structure

Different AFPM motor structures have been proposed, including single- or double-sided, slotted or slotless stator, yoke or yokeless stator, cored or coreless, and multi-staged structures, etc. The main structures are classified as shown in FIGURE 2.

**FIGURE 2.**

AFPM machine structures.

The single-sided slotted AFPM structure exhibits both high power density and low total loss among the four structures with single-sided slotted/slotless stators and double-sided slotted/slotless stators, see FIGURE 3(a) and FIGURE 3(b) \[4\]. However, the major disadvantage is the imbalanced axial attraction force that arises between the stator and rotor, which may cause problems for the bearings and twist the structure easily, especially at a high rotor speed \[9\].

**FIGURE 3.**

Lateral view of double-sided AFPM machines: (a) Slotted stator AFIR, (b) Slotless stator AFIR, (c) Slotted stator N-N PM TORUS, (d) Slotless stator N-S PM TORUS (adapted from \[14\]).

The double-sided AFPM motor is mechanically stronger than the single-sided one due to the cancellation of axial magnetic force and has higher power density, which makes it the most promising and widely investigated AF motor type.

There are two types of double-sided AFPM machines, i.e., external-stator internal-rotor type (AFIR) and external-rotor internal-stator type (TORUS), as shown in FIGURE 3. Both AFIR and TORUS type AFPM machines have recently found a growing interest for high-performance drive applications, as they can be designed for higher torque-to-weight ratio (through coreless or yokeless structure) and higher efficiency \[10\]. It is shown in \[11\] that both AFPM machines have higher power density than the traditional induction machines, and the degree of improvement could reach a factor of two even with ferrite magnets. As opposed to the AFIR geometry that utilizes copper only from one surface, the TORUS-type geometry utilizes copper for torque production from both surfaces of the stator. As a result, the end windings in the TORUS machine have reduced length compared to the AFIR geometry, which substantially improves the machine efficiency \[12\]. Ref. \[13\] shows that TORUS topology has higher power-density in high current-density and low electric-loading conditions, whereas AFIR topology has higher power in low current-density and high electric-loading conditions.

The magnets in the two opposite rotor disks of a TORUS machine may be placed on N-N or N-S arrangements, as shown in FIGURE 3(c) and (d), respectively. The TORUS N-S arrangement makes it possible to eliminate the stator back core, which reduces the machine axial length and iron losses, hence implies increased power density and efficiency \[14\], whereas the TORUS N-N type machine has to keep the stator back core large enough to handle the main flux coming from both rotors. Only tooth-wound windings can be used in a TORUS N-S type structure to produce torque, whereas core-wound (toroidal) windings are generally used in a TORUS N-N type machine to reduce the length and the protrusion of the end windings.

By removing the stator yoke from the TORUS N-S type structure and adoption of the tooth-wound concentrated windings (CWs) for segmented stator construction, the Yokeless And Segmented Armature (YASA) AFPM machine topology is obtained, as shown in FIGURE 4. YASA motors are receiving more and more attention due to high torque density, compact structure and low weight, which makes them suitable for space-critical automotive, aerospace and marine applications. In \[15\], Woolmer and McCulloch designed and prototyped a YASA motor in which stator teeth are entirely made of soft magnetic composite (SMC) material, pressed to separately form the shoes and central part of the teeth, which can produce a nominal torque of 120 Nm, peak overload torque density of 10 Nm/kg and peak efficiency over 96% for high performance applications such as in-wheel direct drive light EVs. A number of electric motor manufacturers have developed mature YASA motor products with peak power higher than 200 kW and efficiency over 95%, for use in high-performance electric powertrains, e.g. Magnax AXF290 \[16\], YASA 750 \[17\] and Magelec propulsion motors \[18\], etc.

**FIGURE 4.**

YASA structure (from \[15\]).

The coreless geometry removes the iron from the stator or rotor, and thus shortens the axial length, reduces the weight, eliminates the core loss and the cogging torque, therefore contributing to a significant increase in torque density and efficiency. To realize a reliable structure, a strong supporter is needed to fix the windings or PMs of the coreless stator or rotor, while degrading the mechanical stress and working temperature. However, the coreless geometry causes the windings or PMs being placed in the air gap and directly exposed to the magnet flux, which results in high AC copper loss, high risk of PM irreversible demagnetization and an extremely low machine inductance (thereby narrow constant power range).

A huge number of research works have compared the performances of different AFPM machine topologies under specific application conditions. To give some direct evaluation on the RFPM and AFPM machines with slotted and slotless stators, their performances including power density, efficiency, weight, torque ripple, moment of inertia, heat dissipation and cost have been graded as ‘1’, ‘2’, and ‘3’ from low to high, as shown in TABLE 1. It can be learned that AFPM machines are characterized by high power density, low moment of inertia and good heat dissipation capability compared to the RFPM counterpart. Among the considered AFPM structures, the TORUS machine shows the potential for highest power density and efficiency, while the AFIR machine exhibits the best heat dissipation capability. Slotless structures are effective to reduce the torque ripple but have a larger air gap created to accommodate the windings, which leads to the increased usage of copper and PMs to compensate for the drop of the air-gap flux density.

**TABLE 1** Performance Comparison Among AFPM and RFPM Machines

### B. Winding Configuration

Winding configuration is designed to comply with the AFPM structure and stator-slot/rotor-pole combination to maximize the winding factor. For the N-N magnet arrangement TORUS machine, both core-wound winding (toroidal winding) and tooth-wound winding can be used. In addition, concentrated type is a good choice to shorten the end winding length. But for the N-S arrangement TORUS machine, only tooth-wound winding can be used, since the coils are parallel to the main flux path in the stator in the core-wound configuration, resulting in a very low flux-linkage in the windings.

Concentrated windings are applied to AFPM machines to reduce end-winding length and increase slot fill factor by segmented construction \[19\]. However, some aspects require particular consideration in the design stage because the CW is subject to increased rotor losses \[20\].

In \[21\], two different types of CWs are proposed and compared to a standard overlapping winding in a coreless TORUS machine. The authors derive analytical torque expressions and use these to compare the windings in terms of torque and copper mass. Three prototype stators are built and tested with the same PM rotor disks. The machines all have 1 kW rated power, 200 rpm rated speed, and 12 pole-pairs. Results show that the non-overlapping CWs have similar torque performance to normal overlapping windings and also allow a 15% mass reduction in copper.

In \[22\], different winding configurations including CW with neighbouring coils touching each other at the edge of the coils, CW with neighbouring coils touching each other at the inner radius, multilayer CWs and wave winding are comparatively investigated for air-cored TORUS AFPM machine in terms coil factors and torque characteristics. The analytical model is built to compare the coil factors and torque for the winding types, considering the width of coil band while neglecting the influence of inductance. The analytical comparison is verified by finite element (FE) analysis (FEA), showing that multilayer CWs and wave winding are inferior to single-layer CWs in terms torque production and assembly cost, and CW with a coil pitch of 240 electrical degrees and mutual-contact coils is the best choice for the selected 21-coil/28-pole air-cored AFPM machine.

Two 10-kW water-cooled TORUS type AFPM machines with fractional-slot (FS) CW (FSCW) (24-slot/20-pole) and integral-slot (IS) CW (ISCW) (60-slot/20-pole) are designed and prototyped in \[23\] and \[24\] respectively, as shown in FIGURE 5. Among all possible values to form FSCW, the slot number per pole per phase (SPP) has been selected as 2/5 in \[23\] because of the high fundamental winding factor (0.966) and inherently low cogging torque. The end-turn length of the core-wound and tooth-wound coil configurations is compared based on the average end-turn model of the proposed FSCW TORUS machine. Core-wound coils require 16% less copper for the end windings than tooth-wound coils for the selected SPP, although tooth-wound winding is claimed to be easy to manufacture. In \[24\], the core-wound FSCW TORUS machine is compared with its ISCW counterpart by no-load and on-load FEA and experimental tests, with identical rotors, stator outer and inner diameters, PMs, mechanical air gaps and magnetic and electric loadings. Key results show that the ISCW design has higher cogging torque and torque ripple as well as shorter CPSR than the FSCW counterpart, whereas additional losses are much higher in the FSCW machine due to the sub-harmonic MMF induced losses located in the rotor and PMs. This result is consistent with the well-known fact that FSCW machines possess an inherently larger inductance with respect to ISCW machines \[19\].

**FIGURE 5.**

TORUS type AFPM machines with core-wound (a) FSCW, and (b) ISCW (from \[24\]).

### C. Topologies for EV Applications

Due to favorable characteristics in terms of torque density, efficiency and compact structure, AFPM machines become a very attractive choice for electric propulsion applications, especially for in-wheel or near-wheel direct-drive EVs. With high pole numbers, AFPM machines can be an attractive solution for low-speed direct-drive applications, especially when the machine aspect ratio is a dominant consideration \[25\]. The main specifications and design parameters of the representative high-power AFPM motors are summarized in Table 2. By reviewing the published topologies, it is learned that TORUS type AFPM motors are used more than AFIR geometry in EV traction application.

**TABLE 2** Main Design Parameters and Specifications of Representative High-Power AFPM Motors

Ref. \[12\] presents a direct-drive TORUS AFPM in-wheel motor propulsion system for fuel cell and hybrid EVs. The in-wheel motor uses toroidal windings wound around the stator core and has 30 rotor poles. Magnet short pitching is used to reduce the cogging torque, and a magnetic wedge is added to the stator slot to improve the flux weakening capability and reduce open-circuit spin losses. A prototype is manufactured and tested, showing that it can generate 500 Nm and 25 kW under 250 Vdc DC bus voltage. Efficiencies above 85% are reported for the areas of the torque/speed plane where the vehicle is intended to operate most of the time.

In \[26\], two toroidally-wound 24-slot/20-pole TORUS AFPM motors using NdFeB and ferrite magnets are designed for EV applications. Both TORUS motors adopt SMC cores to achieve 3-D magnetic flux path and low core loss at high frequency and thus a more compact structure and higher efficiency, and are optimized separately for achieving the highest torque ability. The main electromagnetic performances of the two TORUS motors are compared with a commercial YASA motor (P400) with similar DC bus voltage. It shows that TORUS motors’ own merits of good flux concentrating ability which combines with NdFeB contributes to a very high torque density of 13.75 Nm/kg compared with YASA P400 (8.33 Nm/kg). With the adoption of SMC cores, both TORUS motors can achieve higher peak efficiency than YASA P400 due to the lower core loss of the SMC at high-frequency operation. However, no experimental validations are presented in this publication.

A 10 kW 18-slot/6-pole TORUS AFPM motor is designed and analyzed for direct-drive EV application in \[27\]. A simple model of vehicle dynamics that evaluates the vehicle performance is adopted to identify the design requirements for the motor. Then the torque against diameter ratio is extracted from AFPM machine’s fundamental equation to obtain maximum torque. The initial motor dimensions are obtained based on sizing equations considering both requirements and limits. Then, FEA is applied for PM skewing, accuracy enhancing and the desired motor parameters.

Ref. \[28\] introduces a low-cost 18-slot/16-pole AFIR type AFPM in-wheel motor for electric city commuters in which a reduction gearbox with a gear ratio of 5:1 is inserted into one end of the stator. The designed motor has a coreless rotor structure, SMC stator core and ferrite PMs to satisfy the target performance at a reduced cost. The torque-speed efficiency map, the irreversible demagnetization of PMs and the rotor stress of the designed motor are analysed by 3-D FEA. A constant power speed range of 3.125 times the base speed is achieved by field weakening control, and a maximum efficiency of 95.01% is obtained in the proposed motor.

In \[29\], a 24-slot/10-pole AFIR type AFPM machine is designed and prototyped targeting at a maximum output power 50 kW and power density 5.61 kW/L for third generation hybrid EVs. The proposed motor has a segmented rotor which consists of alternately arranged ferrite PM segments and SMC core segments (IPM structure), resulting in a certain amount of saliency. It is found with the 3-D FEA results that the segmented rotor structure is effective in generating the reluctance torque and restraining the irreversible demagnetization of the ferrite PM during the flux-weakening operation. Moreover, the proposed rotor suffers from smaller unbalanced magnetic force under rotor eccentricity in comparison with the conventional rotor structure with the rotor back yoke.

The spoke-type PM with circumferentially magnetization direction inset in the rotor is usually adopted by AFIR type AFPM machine for flux focusing to improve the air-gap flux density as well as the machine output torque. An 18-slot/16-pole AFIR machine with a spoke-type IPM rotor is designed for hybrid EVs in \[30\] and compared with those conventional IPM motors used in current commercialized EVs and hybrid EVs, e.g. Camry, LS 600h, Prius, Sonata (HEVs) and Leaf. The proposed AFPM motor is optimized by using a genetic algorithm and a simple analytical model to maximize the torque density. The 3-D FEA results show that the proposed machine presents higher torque and power densities than all the selected IPM conventional motors. The stators and rotor are manufactured by rolling a long flat steel sheet. Bridges are added on both magnet surfaces to connect the rotor segments as a whole body, and their thickness is optimized to guarantee the desired mechanical strength and electromagnetic performance. However, no experimental results have been presented because the prototype has not been assembled.

In \[31\], two 3.4 kW SMC-based YASA motors with similar slot and pole numbers (i.e. 9-slot/10-pole and 12-slot/10-pole) under same dimensions, magnetic and electric loading are compared for in-wheel electric drives. The simulation results at a certain speed show that both machines have nearly the same performance in cogging torque and static torque. However, the 9-slot/10-pole AFPM machine suffers from higher extra unbalanced torque exerted on bearing of about 15 Nm due to the asymmetric disposition of stator slots and coils, which reduces bearing lifetime.

In \[32\], a 6 kW 12-slot/10-pole YASA motor with laminated stator poles is proposed for in-wheel direct-drive traction applications. An efficient quasi-3-D analytical model is built for parametric studies and optimization of the proposed machine, based on a realistic approximation of the stator pole shoes. The performances derived from the analytical model are verified and validated by comprehensive 3-D FEA simulations and measurements. It is proved that the motor can develop up to 55Nm at 80V supply.

In \[33\], a 65 kW 18-slot/20-pole YASA motor with a novel water-cooling system is designed and fabricated for in-wheel traction applications. The stator and rotors are fabricated using SMCs to reduce the core loss at high frequency, and the PMs are divided into 3 segments to reduce the loss of magnets. A novel cooling system is proposed to reduce the total loss and increase the power density of the in-wheel motor. It adds fins inside the surface of the water-cooling casing close to the winding to conduct the heat generated from the winding, and U-shape water-cooling pipes inside the fins to take away the heat by the liquid coolant. The number and diameter of the water pipes for the cooling system can be designed to maximize the heat transfer efficiency with minimal pressure loss. A prototype is manufactured and tested in terms of efficiency map, power factor and torque versus current, and winding temperature, to validate the improvement of power density from 2.22 kW/kg to 3.07 kW/kg by using the novel cooling system.

AFPM machines are regarded as ideally suited for applications where space and weight are critical due to compact structure. Except for EVs, they are also attractive candidates for flywheel energy storage systems, wind power generation and aircraft propulsion.

The AFPM machines used for flywheel energy storage are required to have high power and efficiency at high speeds. However, accurate loss calculation and thermal analysis for effective cooling design as well as mechanical strength analysis at high-speed operations are essential problems to be solved. A 50 kW coreless-stator TORUS type AFPM machine is proposed for flywheel energy storage application in \[34\], where a novel oil-immersed cooling system, Litz-wire windings and Halbach-array PMs are adopted. The proposed machine is tested to produce a peak torque density of 10.6 Nm/kg, a peak power density of 11.3 kW/kg and a maximum efficiency of 97.4% at 9000 rpm.

Based on the above research, the same authors proposed a multi-staged AFPM motor solution which is composed of four coreless modular motors by stacking in axial direction for aircraft electric propulsion systems \[35\], which lays a good foundation for MW-level propulsion motor design. To achieve high power and high efficiency, the combination of AFPM structure and superconducting coils is also a research focus for aircraft propulsion \[36\].

The axial compactness of AFPM machines allows a large motor diameter to allocate high pole numbers for high torque production at low speeds. A 50 kW, 70 rpm multi-staged AFPM machine is designed and prototyped for direct-drive wind power generation \[37\], where the modular stator with concentrated coils and segmented PMs are adopted. Experimental tests show a good agreement with simulations and a 92% efficiency is obtained.

### D. Novel AF Topologies

Apart from the above structures, new emerging AF machine topologies which evolve from novel RF machine topologies, such as Vernier machine, doubly salient (DS) machine, switched flux PM (SFPM) machine and magnetic geared machine, are successively proposed and investigated for electric traction applications.

In \[38\], a 5 kW 18-slot/34-pole AFIR type Vernier machine with spoke-type IPM rotor is proposed for direct-drive applications. The Vernier machine makes use of the flux modulation effect to synchronize the space harmonics of the stator and rotor magnetomotive forces, so as to enhance the synchronous reaction torque. Besides, the interior spoke-type PM improves the air-gap flux density by the flux focusing effect, which allows a fewer ampere-turns in stator needed for the desired output power, and thus improves the power factor of the motor.

In \[39\], a 3.1 kW 4-phase 8-slot/10-pole axial-flux DS (AFDS) machine with DC winding is designed to achieve improved flux-weakening capability for in-wheel direct-drive applications. The flux-linkages can be adjusted through the control of dc-field current, according to the relative stator-rotor position. The proposed AFDS machine can produce satisfactory power and torque densities as well as strong flux-weakening capability.

A three-phase 12-slot/10-pole axial SFPM (ASFPM) machine with two stators and one rotor (as shown in FIGURE 6) is proposed in \[40\] for shorter axial length and higher power density, and its cogging torque is reduced by rotor tooth notching (dummy slot) \[41\] and adding magnetic bridge between the adjacent stator teeth \[42\], respectively. More advanced ASFPM variations are investigated, including the E-core stator structure for hybrid-excitation and fault tolerance \[43\], the rotor-PM consequent-pole structure for improved torque density \[44\], the TORUS structure with unit-displacement stator winding and unaligned rotors to enhance flux-focusing effect and suppress cogging torque \[45\] and its yokeless structure \[46\], with respect to the original ASFPM design, showing good prospects in direct-drive EV applications.

**FIGURE 6.**

Exploded view of the ASFPM motor (from \[40\]).

Based on YASA structure, a new magnetically geared machine is created in \[47\] by employing different pole pairs for the two rotor disks. The torque density is enhanced by the magnetic gear effect. An axial magnetic-field-modulated brushless double-rotor machine is investigated in \[48\], which can be connected with a traditional PMSM to replace the generator, planetary gear, and reduction gearbox in traditional hybrid EVs. The proposed machine is derived from an AFIR type AFPM machine by adding two modulating rings between the rotor and stators. The speed and torque differences between the ICE and reduction gear can be obtained based on the proposed system, so that the ICE can work in the optimum speed-torque region independent of the vehicle condition. However, the authors show that the proposed machine has a low power factor due to low no-load air-gap flux density and large armature flux leakage. Proper adjustment of winding turns, diameter ratio, modulating ring and PM dimensions, air-gap length, phase current, and internal power-factor angle is presented to improve the power factor, but the electromagnetic torque is sometimes sacrificed. Besides, the manufacture and assembly dissymmetry such as the offset, tilt, and PM position deviation of the PM rotor) are specific problems of it.

The design process of the AFPM machines follows the standard steps that are common for all brushless machines, starting from sizing estimation based on the design requirements and constraints, followed by the specific parametric design and optimization, to the final evaluation of thermal and mechanical performance. However, due to their 3-D geometry and electromagnetic problems, AFPM machines have their own unique sizing equations, modeling methods and analysis tools to be used in their design process. The most important design parameters and their influence on machine performance are introduced according to the publications with parameter analysis on AFPM machines. Besides, the design considerations and relevant techniques are emphasized for the electric propulsion applications. The most important publications in this area of research will be discussed in this section.

### A. Sizing Equation

The first step in the design process is to estimate the required motor outer dimensions (i.e., the outer dimeter and the active length of the machine) for the power/torque requirements under the given constraints (i.e., the inverter voltage and current limits, maximum allowable geometric dimensions, cooling conditions, etc.). To this end, the use of sizing equations is the standard approach.

In \[49\], the general sizing and power density equations are proposed for comparison of different types of electrical machines, by neglecting the stator leakage inductance and resistance. The output power for any electrical machine

P\_{R} $P_{R}$

is derived from

\\begin{equation\*}P\_{R}=\\eta \\frac {m}{T}\\int \_{0}^{T} {e\\left ({t }\\right)i\\left ({t }\\right)dt} =\\eta mK\_{p}E\_{pk}I\_{pk}\\tag{1}\\end{equation\*} 
$$
\begin{equation*}P_{R}=\eta \frac {m}{T}\int _{0}^{T} {e\left ({t }\right)i\left ({t }\right)dt} =\eta mK_{p}E_{pk}I_{pk}\tag{1}\end{equation*}
$$

where

\\eta $\eta$

is the machine efficiency,

m $m$

is the number of phases,

E\_{pk} $E_{pk}$

and

I\_{pk} $I_{pk}$

are peak values of phase back-electromotive force (back-EMF) and current,

K\_{p} $K_{p}$

is the electrical power waveform factor defined as

\\begin{equation\*}K\_{p}=\\frac {1}{T}\\int \_{0}^{T} {\\frac {e\\left ({t }\\right)i\\left ({t }\\right)}{E\_{pk}I\_{pk}}dt}\\tag{2}\\end{equation\*} 
$$
\begin{equation*}K_{p}=\frac {1}{T}\int _{0}^{T} {\frac {e\left ({t }\right)i\left ({t }\right)}{E_{pk}I_{pk}}dt}\tag{2}\end{equation*}
$$

which is determined by examining the back-EMF and current waveform for a particular machine type, with corresponding values of

K\_{p} $K_{p}$

for several typical waveforms as summarized in \[49\].

Finally, the general-purpose sizing equation for AFPM machines is expressed as \[11\]

\\begin{align\*}&\\hspace {-.5pc}P\_{out}=\\frac {1}{1+K\_{\\phi }}\\frac {m}{m\_{1}}\\frac {\\pi }{2}K\_{e}K\_{i}K\_{p}K\_{L}\\eta B\_{g}A\\frac {f}{p}\\left ({1-\\lambda ^{2} }\\right) \\\\&\\qquad \\qquad \\qquad \\qquad \\qquad \\qquad \\qquad \\times \\left ({\\frac {1+\\lambda }{2} }\\right)D\_{o}^{2}L\_{e}\\tag{3}\\end{align\*} 
$$
\begin{align*}&\hspace {-.5pc}P_{out}=\frac {1}{1+K_{\phi }}\frac {m}{m_{1}}\frac {\pi }{2}K_{e}K_{i}K_{p}K_{L}\eta B_{g}A\frac {f}{p}\left ({1-\lambda ^{2} }\right) \\&\qquad \qquad \qquad \qquad \qquad \qquad \qquad \times \left ({\frac {1+\lambda }{2} }\right)D_{o}^{2}L_{e}\tag{3}\end{align*}
$$

where

K\_{\\varnothing }=A\_{r}/A\_{s} $K_{\varnothing }=A_{r}/A_{s}$

is the ratio of electric loadings on rotor and stator,

m\_{1} $m_{1}$

is the number of phases of each stator (if there is more than one stator, each stator has the same

m\_{1} $m_{1}$

),

K\_{e} $K_{e}$

is the EMF winding factor which incorporates the winding distribution factor and the ratio between the area spanned by the salient poles and the total air-gap area,

K\_{i} $K_{i}$

is the current waveform factor,

B\_{g} $B_{g}$

is the air-gap flux density,

A=A\_{s}+A\_{r} $A=A_{s}+A_{r}$

is the total electric loading,

f $f$

is the electrical frequency,

p $p$

is the number of pole-pair,

K\_{L}=D\_{o}/L\_{e} $K_{L}=D_{o}/L_{e}$

is the ratio of outer surface diameter to the effective length of the AFPM machine, and

\\lambda =D\_{i}/D\_{o} $\lambda =D_{i}/D_{o}$

is the ratio of inner to outer surface diameters.

For the TORUS type AFPM machine, the average electromagnetic torque

T\_{e} $T_{e}$

can be expressed as [(4)](#deqn4), by assuming a sinusoidal waveform for the air-gap flux density and

K\_{e}= \\pi $K_{e}= \pi$

.

\\begin{equation\*}T\_{e}=\\frac {\\pi }{4}K\_{i}K\_{p}{B\_{g}A}\_{s}\\left ({1-\\lambda ^{2} }\\right)\\cdot \\left ({\\frac {1+\\lambda }{2} }\\right)\\cdot D\_{o}^{3}\\tag{4}\\end{equation\*} 
$$
\begin{equation*}T_{e}=\frac {\pi }{4}K_{i}K_{p}{B_{g}A}_{s}\left ({1-\lambda ^{2} }\right)\cdot \left ({\frac {1+\lambda }{2} }\right)\cdot D_{o}^{3}\tag{4}\end{equation*}
$$

This simplified [equation (4)](#deqn4) is used in \[27\] to optimize the diameter ratio for a maximum torque, under a given outer diameter and magnetic and electric loadings. In practice, the optimal value of

\\lambda $\lambda$

is different depending on the optimization goal. Moreover, although the optimization criterion is the same for given electric loading and flux densities, the optimal value also differs for different rated power, pole pairs, converter frequency and machine structure.

To assess the power density of an AFPM machine, the stator and rotor core axial length (

L\_{cs} $L_{cs}$

,

L\_{cr} $L_{cr}$

), the PM axial length (

L\_{PM} $L_{PM}$

) and the protrusion of the end winding from the iron stack in the radial direction

W\_{cu} $W_{cu}$

are estimated depending on the flux densities in the different parts, the electric loading, the current density and slot fill factor of the machine. The estimation equations have some minor differences for different structures of AFPM machines, and FEA-based or empirical correction factors are employed in some papers to modify the estimation result. The commonly used equations are presented as shown below.

The stator core axial length

L\_{cs} $L_{cs}$

is expressed as \[50\]

\\begin{equation\*}L\_{cs}=\\frac {B\_{g}\\pi \\alpha \_{p}D\_{o}(1+\\lambda)}{4pB\_{cs}}\\tag{5}\\end{equation\*} 
$$
\begin{equation*}L_{cs}=\frac {B_{g}\pi \alpha _{p}D_{o}(1+\lambda)}{4pB_{cs}}\tag{5}\end{equation*}
$$

where

B\_{cs} $B_{cs}$

is the stator-core flux density, and

\\alpha \_{p} $\alpha _{p}$

is the ratio of the average air-gap flux density to the peak air-gap flux density.

The rotor core axial length

L\_{cr} $L_{cr}$

is expressed as \[50\]

\\begin{equation\*}L\_{cr}=\\frac {B\_{u}\\pi D\_{o}(1+\\lambda)}{8pB\_{cr}}\\tag{6}\\end{equation\*} 
$$
\begin{equation*}L_{cr}=\frac {B_{u}\pi D_{o}(1+\lambda)}{8pB_{cr}}\tag{6}\end{equation*}
$$

where

B\_{cr} $B_{cr}$

is the rotor-core flux density, and

B\_{u} $B_{u}$

is the attainable flux density on the PM surface.

For the toroidal winding, the protrusion of the end winding

W\_{cu} $W_{cu}$

is estimated as \[50\].

\\begin{equation\*}W\_{cu}=\\frac {D\_{i}-\\sqrt {D\_{i}^{2}-\\frac {A(D\_{i}+D\_{o})}{k\_{cu}J\_{s}}}}{2}\\tag{7}\\end{equation\*} 
$$
\begin{equation*}W_{cu}=\frac {D_{i}-\sqrt {D_{i}^{2}-\frac {A(D_{i}+D_{o})}{k_{cu}J_{s}}}}{2}\tag{7}\end{equation*}
$$

where

k\_{cu} $k_{cu}$

is the copper-fill factor, and

J\_{s} $J_{s}$

is the current density.

The PM length

L\_{PM} $L_{PM}$

for the TORUS type AFPM machine is calculated as \[51\]

\\begin{align\*}L\_{PM}=\\begin{cases} \\dfrac {\\mu \_{r}B\_{g}}{B\_{r}-\\frac {B\_{g}K\_{f}}{K\_{d}}}\\left ({g+W\_{cu} }\\right),&\\text {for slotless type} \\\\ \\dfrac {\\mu \_{r}B\_{g}}{B\_{r}-\\frac {B\_{g}K\_{f}}{K\_{d}}}\\left ({K\_{c}g }\\right),&\\text {for slotted type} \\\\ \\end{cases}\\tag{8}\\end{align\*} 
$$
\begin{align*}L_{PM}=\begin{cases} \dfrac {\mu _{r}B_{g}}{B_{r}-\frac {B_{g}K_{f}}{K_{d}}}\left ({g+W_{cu} }\right),&\text {for slotless type} \\ \dfrac {\mu _{r}B_{g}}{B_{r}-\frac {B_{g}K_{f}}{K_{d}}}\left ({K_{c}g }\right),&\text {for slotted type} \\ \end{cases}\tag{8}\end{align*}
$$

where

\\mu \_{r} $\mu _{r}$

is the recoil relative permeability of the magnet,

g $g$

is the air-gap thickness,

B\_{r} $B_{r}$

is the residual flux density of the PMs,

K\_{d} $K_{d}$

is the leakage flux factor,

K\_{c} $K_{c}$

is the Carter factor and

K\_{f} $K_{f}$

is the peak value corrected factor of air-gap flux density in radial direction.

A reasonable definition of electric and magnetic loadings (i.e. flux densities in different motor parts, electric loadings, and current density, etc.) in sizing equation is essential for a good estimation of the main geometric dimensions of AFPM machine. The magnetic flux density of different motor parts and the armature currents depends on the power rating, the material property and motor geometry. The magnetic flux density of different motor parts at no-load condition are predicted by FEA and used to correct the parameters in sizing equation, as studied in \[11\], \[27\], \[50\]. Typical ranges for these parameters are summarized in \[3\].

### B. Electromagnetic Modeling

As AFPM machines have intrinsic 3-D structures and flux paths, the flux density distribution along radial and axial directions exhibits two separate 3-D effects, i.e. curvature effect and edge effect \[3\]. To take both effects into account, the use of 3-D FEA is necessary for accurate magnetic field analysis.

3-D FEA is the most accurate numerical tool which solves Maxwell equations for each volume element of the 3-D FE model within boundary conditions. With the availability of powerful FE software, numerical analysis of the complicated 3-D field has become common practice. However, 3-D FEA is time-consuming and requires large amounts of memory, it can hardly be used in the initial design stage with many design parameters changing in wide ranges \[50\]. As a consequence, new methods such as Quasi-3-D FEA and combined FEA analytical models become popular \[25\], \[52\]. From the point of Quasi-3-D model, the AFPM machine is “cut” into several layers along the concentric cylindrical surface, with each layer segment being “straightened” to a 2-D model of a linear machine, as shown in FIGURE 7. The overall performance of the AFPM machine is obtained by summing the performance of individual linear machines. This approach allows to consider the 3-D nature of the AFPM machines, and can be easily incorporated with FEA, analytical models or equivalent reluctance networks \[52\]–\[54\].

**FIGURE 7.**

Schematic of transformation the 3-D model of the AFPM machine to corresponding quasi-3-D model. (from \[25\]).

Analytical electromagnetic models and magnetic equivalent circuit (MEC) of AFPM machines are faster ways to compute the magnetic field.

In \[55\], the 2-D analytical model based on Poissons’s and Laplace’s equations via magnetic vector potential is built at the mean radius of a slotless TORUS AFPM generator. The model takes into account the symmetry conditions and assumes that the relative permeability of the stator and rotor iron is infinite. An “effective length ratio” is defined in the model to consider the fringing flux, as the actual flux density attenuates radially at the edges of the stator core. However, the radial variation of the magnetic field is not considered. In \[56\], the radial dependence of the magnetic field is considered in an exact 2-D solution of Maxwell equations, by multiplying the 2-D vector potential solution with a radial-dependence function. This function consists of the axial flux density versus the radial coordinate for multiple air-gap lengths which represents the actual flux density of each air-gap layer. 3-D analytical models are more precise solutions as both curvature and edge effects can be accounted. Ref. \[57\] proposes a 3-D analytical model for the computation of the no-load flux in AFPM machines, based on formal resolution of Maxwell equations in the cylindrical coordinate using the scalar magnetic potential. However, the analytical equations are solved under some specific assumptions, such as ignoring the slotting effect, real magnet shape, magnetic saturation or magnetic flux leakage, which decreases the accuracy of the analysis results.

The MEC method which uses time-dependent or position-dependent reluctances to model different machine parts is considered to be a good compromise between computation cost and accuracy. Ref. \[58\] uses the MEC method to calculate the static characteristics at the mean radius of a YASA motor by considering the magnetic saturation, armature reaction, leakage flux and the relative motion. A Quasi-3-D MEC model is proposed in \[54\] to predict the performance of AFIR type machines with FSCWs. By dividing the AFPM machine into several layers in the radial direction, the 3-D effect is considered. Besides, the transient magnetic field which is considered by the time varying connection of the air gap and the rotor is attainable, with the help of the coupled variable permeance elements to capture both axial and circumferential air-gap flux densities.

### C. Design Parameters

For parametric design and optimization, the main design parameters which have critical effects on the performance of AFPM machines should be identified firstly. Motor optimization on the selected design parameters will fasten the optimization process and contribute to an effective motor design.

A quick glance at the sizing equations shows a strong dependence of power and torque on the diameter ratio

\\lambda $\lambda$

, while the other terms either depend on

\\lambda $\lambda$

or have certain physical limitations. To optimize the AFPM machine performance, the value of

\\lambda $\lambda$

must be carefully chosen with respect to the machine geometry, electric and magnetic loadings. For a given outer diameter and magnetic and electric loadings, AFPM machine’s maximum torque is achievable when diameter ratio

\\lambda \\approx ~0.58 $\lambda \approx ~0.58$

\[27\]. However, the axial length is not accounted to assess the power density. In \[59\], the diameter ratio is optimized as

\\lambda \\approx ~0.63 $\lambda \approx ~0.63$

for a TORUS AFPM machine, to achieve a high value of both the torque and torque-to-weight ratio. However, the optimized value is only effective for the proposed AFPM machine with certain power rating and geometry. When the electric loading, flux density, frequency, material properties and machine topology changes, the optimal value of the diameter ratio differs, thus it cannot be designated as a simple numeric value. Delicate adjustment based on FEA is needed to refine the parameter value roughly obtained from the simplified sizing equations.

Stator-slot and rotor-pole numbers are generally selected according to the power rating and motor size before parametric design and optimization. Fractional slots SPP is preferred for a high fundamental winding factor and inherently low cogging torque \[23\]. Even numbers of both slots and poles are required for a symmetrical disposition of stator coils and rotor poles to avoid unbalanced magnetic force \[31\]. Besides, the research in \[5\] reveals that the compact, high-torque-density and high-efficiency AFPM machine designs are achievable by selecting a sufficiently high number of pole pairs. The typical stator-slot and rotor-pole combinations used in AFPM machines with different power ratings, dimensions and structures for electric propulsion applications are summarized in Table 2.

The effects of the design parameters including rotor pole pair to stator pole pair ratio, diameter ratio, slot opening, PM thickness and air-gap length on torque performance of the novel 24-slot/44-pole dual-rotor, toroidal-winding AFPM Vernier machine are investigated based on Quasi-3-D FEA in \[25\]. It shows that for a fixed pole ratio, the optimal diameter ratio for the maximum torque is almost the same when the stator-slot number changes, and the higher the stator slot number leads to a lower torque, as shown in FIGURE 8. Besides, for a fixed motor diameter and stator-pole pair, the optimal diameter ratio for the maximum torque increases with the pole ratio and a higher pole ratio seems to achieve larger average torque. In addition, the optimal slot opening ratio increases with the pole ratio, but it keeps constant when the diameter ratio changes for a fixed stator- and rotor-pole combination.

**FIGURE 8.**

Variation curves of torque versus (a) Slot opening ratio with different diameter ratios, and (b) Diameter ratio with different stator pole-pairs (from \[25\]).

Magnet pole-arc ratio which is defined as the PM arc angle to pole pitch affects not only the cogging torque but also the air-gap flux density. The stator shoe width determines the width of the stator slot, thereby affecting the variation of air-gap permeance, and thus the cogging torque and flux leakage. The two parameters of a SMC-based YASA motor are analysed in \[60\] with respect to the cogging torque and open-circuit back-EMF. A minimum cogging torque is achieved by a proper adjustment of the magnet pole-arc ratio and stator shoe width, with no penalty on the rated torque.

Magnet shapes have great influence on the electromagnetic performance of AFPM machines. In \[61\], different magnet shapes are investigated for a surface-mounted AFPM machine to reduce the harmonic components of the air-gap flux density. The sector-like magnet shape which is commonly used in AFPM machines due to simpler design and modeling as well as manufacturing is taken as a baseline design to be compared with the proposed sinusoidal shape and cylindrical shape with the same surface area. The results show that the magnets with sinusoidal outline offer the best performance in terms of lowest harmonics and cogging torque. An almost sinusoidal air-gap flux density and back-EMF waveform can be achieved first of all, with sinusoidal magnets and then with cylindrical magnets. However, the fundamental component of the induced voltage is slightly decreased, compared with the sector-like counterpart. Besides, the complex geometries of sinusoidal and cylindrical magnets puts challenges on manufacture and increases cost, which makes them hard to be widely used in practical prototyping.

### D. Design Considerations

The demand for EV traction machines with high power density, high efficiency, low weight and reduced cost has resulted in comprehensive studies on the design, construction and new material technologies for AFPM machines. Reduction of power loss, restriction of torque ripple and extension of constant power speed range are important design considerations for EV motors apart from the basic torque or power targets.

#### 1) Power Losses and Efficiency

Different techniques are developed to reduce the power losses and improve the efficiency of EV motors from motor design and control, material and manufacture aspects, as summarized in \[62\]. However, these techniques are applied to conventional RF machines, some of them are not applicable to AFPM machines due to different motor structures and construction manners. The main design methods for the reduction of power losses or increase of the power density in AFPM machines are summarized here.

For AFPM machines with different structures, the choice of TORUS type is a material, efficiency, and cost trade-off. With two rotors, the toroidally-wound stator has two working surfaces and small end-turn length, which brings the best utilization of copper to produce high torque while keeping a low copper loss. Therefore, TORUS type AFPM machines are considered as the best structure in terms of power/torque density and efficiency. Moreover, for the TORUS type machine with N-S magnet arrangements on opposite rotor disks, it is possible to remove the stator yoke between the stator slots at both sides to reduce the machine axial length and iron losses, which further increases the power density and efficiency. Since the AFIR structure uses a reduced amount of PMs, it becomes a cost-effective solution for certain applications. Rotor structure modification to improve the power density of AFIR machines are investigated, including the utilization of spoke-type IPM structure \[30\], sinusoidal rotor segments \[63\] and two-layer spoke-type rotor \[64\].

For any type of AFPM machine, adding magnetic wedges at the slot-opening, adoption of segmented PMs, and adding a laminated layer on the surface of PMs are effective ways to reduce the motor losses and improve motor efficiency.

The SMC wedges added at the slot opening of the AFPM machines (as shown in FIGURE 9) can reduce slotting effect, which is a major source of the no-load spin loss. Ref. \[23\] evaluates the PM losses of an AFPM machine by a simple loss index and FEA at rated speed (800 rpm). The evaluation based on the loss index shows that the PM losses for the semi-closed slot with wedges are about 10% of the losses for the open-slot geometry. However, the effect that the eddy-current path in PMs is greatly reduced for the semi-closed slot with respect to the open slot is not considered in the index, which causes the evaluation to be far too conservative. Finally, the FEA evaluation shows that the PM losses for the semi-closed slot geometry amounts to 3% of the losses for the open-slot geometry \[23\]. Ref. \[12\] presents some experimental test performances based on a 25 kW, 90-slot/30-pole direct in-wheel motor without and with magnetic wedges, showing that the machine with magnetic wedges has significantly less spin loss and about 3% better maximum efficiency than its counterpart. Besides, it has been experimentally validated in \[65\] that both SMC and fiberglass/iron wedges reduce rotor losses.

**FIGURE 9.**

(a) Open slot, (b) Closed slot with magnetic wedges (adapted from \[23\]).

It should be noted that the PM is generally mounted on the surface of the rotor yoke in AFPM machines so that a large amount of eddy current and heat are generated consequently. In order to reduce the eddy-current loss, the PMs are always segmented for motor designs. When the magnets are segmented into several pieces, the resistance of the eddy-current path increases, and the current density is more uniformly distributed with reduced magnitudes. In \[33\], the relationship between the magnet loss and the number of segments is investigated based on FEA, showing that the loss reduces with the increase of the number of segments. By dividing the magnets into 3 segments, the loss of magnet has decreased from 1.5 kW to 0.54 kW for a 50 kW YASA in-wheel motor. In \[66\], a steel-laminated layer inserted on top of the segmented magnets is used to reduce the eddy-current losses in the PMs of a 100 kW coreless-rotor AFIR machine. Since the lamination helps to reduce the air-gap flux density variation with effect on the iron and PM losses, the magnet losses decrease evidently when the lamination thickness increases.

Advanced materials have been studied and applied to AFPM machines to reduce the motor losses and increase efficiency, which include SMC, grain-oriented magnetic steel, amorphous iron, Litz-wire, thinner laminations, plastic-bonded magnets and high-temperature superconducting (HTS) coils, etc.

SMC cores are used in AFPM machines and compared with its silicon steel counterpart for EV applications in \[67\] and \[68\]. The utilization of SMC in AFPM machines conducts the 3-D magnetic flux in the rotor yoke and stator and makes the machine have better performance due to low eddy current loss and 3-D magnetic flux path \[67\]. The two single-sided AFPM machines with identical SMC stators but different rotors (one is solid steel rotor, while the second one is SMC rotor) are compared by experimental tests in \[68\], showing that the SMC rotor has 19% lower no-load losses and 12% higher efficiency due to the higher resistivity of the SMC.

In some AF topologies, such as the TORUS N-S type structure, the grains of the steel are oriented in the same direction as the flux paths, so a more efficient grain-oriented electrical steel can be used for the core. In \[69\], a detailed comparison is made between grain-oriented and non-oriented lamination materials based on a 3.6 kW 15-slot/16-pole TORUS N-S type AFPM machine. The results show that with grain-oriented material, the machine has about 7 times less no-load iron losses than that with non-oriented material at the same speed, and a 10% higher torque for the same current. The advantages in torque and loss performances definitely bring a significant increase of motor efficiency. However, it should be noted that for those AF structures whose flux in the stator teeth is perpendicular to the flux in the stator core, it is impossible to benefit from the grain-oriented material in both the stator core and the stator teeth.

Amorphous cut cores are applied to the stator of a TORUS type AFPM machine equipped with concentrated coils and ferrite magnets in \[70\]. A trial motor was manufactured and tested to achieve 92% efficiency due to the low iron losses produced by amorphous cores. However, variations of choosing the shape of the amorphous cores are limited due to the processing difficulty of amorphous metals.

In \[34\], the authors adopt Litz-wire to reduce the AC copper loss of the stator winding. An equivalent 3-D FEA model of one strand Litz-wire is proposed to calculate the eddy-current loss of the stator winding, considering the uneven magnetic field distribution in the stator region. The calculated stator winding losses and efficiencies of the coreless stator AFPM machine with different wire diameters of one stand in the Litz-wire under 9000 rpm show that the AC copper loss decreases with smaller wire diameter. Finally, 0.1 mm diameter, 1200 strands twisted Litz-wire is chosen for the coreless stator AFPM machine to reduce losses and improve efficiency. However, Litz-wire can reduce the filling factor of pure copper and increase DC copper losses. Thus, it is important to choose a proper Litz-wire size.

#### 2) Torque Ripple

AFPM machines are inherently suitable for high-performance applications, such as low-speed high-torque direct-drive propulsion systems, where low noise and smooth torque are imperative requirements. The main sources of torque ripple are cogging, current harmonics, nonideal back-EMF waveforms and control problems such as phase commutation events, dc-link voltage pulsation and inverter dead-time. A proper geometric design allows a strong reduction in pulsating torque and has been the subject of numerous papers \[71\]–\[73\].

The main design techniques can be classified into three groups: 1) proper winding arrangements, including short-pitched winding and pie-shaped toroidal winding; 2) magnet shape modification, including magnet pole arc optimization, magnet skewing, magnet short pitching, magnet or pole displacement and alternating magnet pole-arcs; 3) others, including adding magnetic wedges to close the slots, proper selection of stator-slot/rotor-pole numbers, circumferential displacement of rotor/stator, stator slot skewing and dummy slots in stator teeth, etc.

Magnets skewing (as shown in FIGURE 10(a)) is one of the most effective techniques used in PM machines to reduce the cogging torque, which is easier to implement than the others. Ref. \[10\] shows that skewing the rotor PMs reduces the cogging torque and torque ripple by nearly 79% and 51.3% respectively, for the slotted TORUS machine, whereas it leads to a torque ripple reduction of 78.8% for the slotted AFIR topology. However, this technique has some drawbacks such as giving rise to average loss and an increasing leakage inductance during flux weakening operation as well as reducing the machine torque. Meanwhile, the pie-shaped back-to-back connected windings are adopted in slotless AFPM machines in the same reference and claimed to be more effective in torque ripple reduction than the rectangular back-to-back connected windings. Apart from the conventional magnet skewing, there are various alternative magnet skewing techniques summarized in \[71\], including triangular skew, parallel-sided magnets, trapezoidal skew, circular magnets and dual skew magnets, as well as magnet displacement as shown in FIGURE 10(b).

**FIGURE 10.**

Cogging torque reduction techniques: (a) Magnets skewing, (b) Magnet displacement, (c) Alternating magnet pole-arcs (from \[10\], \[71\] and \[72\]).

A new technique based on alternating magnet pole-arcs is applied to a 3 kW, 24-slot/8-pole TORUS AFPM machine in \[72\] to minimize cogging torque without sacrificing the peak torque of the machine. The consequent magnets in each rotor are designed with two different magnet pole-arc ratios. The two magnet-pole-arc ratios are in reversed order of the two rotor disks (as shown in FIGURE 10(c)) to shift the cogging torque phase angle and simultaneously to reduce the amplitude of each portion so that the superposition of the cogging torque variation adds up to a very small value. Various magnet pole-arc ratio combinations have been investigated, showing that the cogging torque can be effectively reduced by optimizing the pole-arc ratio.

In \[73\], the influence of magnet shape on cogging torque and electromagnetic torque is investigated based on a 5 kW, 48-slot/8-pole AFPM machine. The proposed magnet shapes include the magnets with rounded borders and magnets with rounded faces, both concave and convex, with respect to the conventional trapezoidal magnet. A cogging torque reduction of 60% is achieved by the concave and convex shape modification of the magnet face, however, with a sacrifice on the electromagnetic torque by 5.5% and 7.6%, respectively. On the other hand, the magnets with rounded borders do not produce a high cogging torque reduction but keep a fine value of the electromagnetic torque.

Refs. \[12\] and \[23\] use the SMC wedges at the slot opening to close the stator slots of the TORUS AFPM machine, so as to reduce the slotting effect between the stator and rotor which is a major source of cogging torque and no-load spin loss. Ref. \[23\] shows that the SMC wedges increase the flux linkage fundamental component by about 4%, reduce the cogging torque by 30% and allow a significant reduction in PM losses, based on the analysis of a 10 kW 24-slot/20-pole TORUS AFPM machine. The full-scale prototype using SMC wedges at the stator slots is constructed and assembled in a wheel hub unit connected to a separately excited 11 kW DC machine as a prime mover. The rotor temperature is measured at no-load and rated load conditions, which indicates that the PM and rotor losses of the proposed machine are small in every load condition.

Among all the techniques, magnet skewing, magnet pole-arc design and magnet short pitching are easier to implement, hence are more widely used to reduce the cogging torque in AFPM machines.

#### 3) Vibration and Noise

To ensure driving comfort, vibration and noise characteristics deserve high attention in the design process of AFPM motors for EVs. The axial electromagnetic force acting on the surface of PMs is the main source of vibration and noise in AFPM machines. Researchers have revealed that the vibration and noise level is inversely proportional to the fourth power of the spatial order of the axial force \[74\]. For RFPM machines, the frequency of the zeroth mode of the stator or the outer rotor is relatively high, so the zeroth spatial order force is usually ignored. Different from RFPM motors, the disc-shaped cover is the main noise radiator in AFPM motors, whose zeroth mode has the lowest natural frequency, which makes it prone to resonate with the zeroth-order axial force \[75\]. Thus, zeroth-order axial force is crucial to the vibration and noise in AFPM motors. It is also noted that the zeroth-order tangential force is the main source of cogging torque and torque ripple. As the origin of tangential and axial force with the same spatial order is identical, techniques for torque ripple reduction are also useful for vibration and noise suppression in AFPM motors \[76\].

Recent progress of the electromagnetic vibration and noise of RFPM and AFPM motors for EVs has been summarized in \[77\], with emphasis on the calculation methods and suppression techniques. The prediction of vibration and noise of AFPM machines over a wide speed range by means of fast FEA or accurate analytical models is a research focus. Different suppression methods including stator and rotor skewing, chamfering, notching and tooth shape modification have been proposed by reducing the amplitude of the selected axial force that contributes most to the vibration and noise.

#### 4) CPSR

It is well known that a wide CPSR of 3–4 times the base speed is required for EV propulsion. However, the standard AFPM machines have very limited constant-power range (CPSR ≤ 2:1) as the EMF rises linearly with speed and the synchronous inductance is too low for voltage regulation by control of the flux-weakening current \[3\], \[12\]. Although the AF design and rotor-stator arrangements allow the varying air gap to optimize the flux-weakening performance by changing the torque-speed range, it requires precise control on position fixing and adjustment during motor operation. Alternative solutions to extend the CPSR of AFPM machines for electric drives have been of great interest to machine designers for years. A survey of PM machine topologies which are capable of flux weakening has been reviewed in earlier studies \[78\].

A particularly effective way to increase this value is to utilize a DC field winding located on the stator to magnetize the iron poles of the rotor, which allows flux control and weakening without the use of a negative

d $d$

\-axis current component. In \[79\], a field-controlled (FC) AFPM (FCAFPM) machine is introduced to provide both field weakening and strengthening via the air-gap flux control. The DC field winding is circumferentially wound in between the two stator rings as shown in FIGURE 11. Each rotor pole in both upper and lower rotor sections is formed by a half PM and a half iron piece. When the field winding is excited with a certain polarity, the flux in the consequent poles in both inner and outer portions of the rotor disk will decrease, thereby achieving field weakening. Besides, the flux component caused by DC excitation passes through the iron pieces and not through the PMs, which eliminates the detrimental effects of

d $d$

\-axis current injection, i.e. PM demagnetization risks. The 3-D FEA of the topology shows a reasonable CPSR of up to 3.75:1 with practical DC field currents. It is demonstrated that the idea allows an easy control of the FCAFPM machine and can be easily applied to any AF machine.

**FIGURE 11.**

The stator and one rotor of the FCAFPM machine (from \[79\]).

In \[39\], the DC winding is incorporated into a 3.1 kW 4-phase 8-slot/10-pole AF doubly salient (DS) (AFDS) machine to achieve improved flux-weakening capability for in-wheel direct-drive applications. The concentrated dc-field windings are arranged at both ends of the sandwiched stator in a way that the dc flux-linkages flow along the two sided-rotors via the stator segment. Thus, the flux-linkages vary according to the relative stator-rotor position. The results show that the AFDS machine can produce satisfactory power and torque densities and enjoys the flux-weakening capability for a CPSR equal to 5:1.

Ref. \[80\] proposes a technique consisting of replacing a fraction of the magnet material by a soft iron piece (as shown in FIGURE 12) to increase the

d $d$

\-axis inductance so as to improve the flux-weakening capability of the TORUS N-N type AFPM machine. The internal ring of the rotor disk is made of alternatively magnetized PMs, while the external ring is made of iron pieces. In this way, a low-reluctance (increased inductance) path for the flux is provided, which allows flux weakening with a reduced amount of

d $d$

\-axis current and thus, desired effect of increasing the machine’s FW capability. The principle is similar to that of an IPM rotor structure in \[29\]. However, the smaller amount of magnets causes reduction on the machine’s torque production. The simulation results show that the addition of the iron piece area by about 30% allows increasing the operating range to double, while reducing the maximum torque by 29%.

**FIGURE 12.**

Rotor poles with magnets and soft iron piece (from \[80\]).

Ref. \[81\] adopts slotted stator with magnetic wedges, single-layer FSCW and additional cores enclosing external end windings for increasing the inductance and then the flux-weakening capability of single-sided AFPM machines. This technique allows an easy adjustment of the synchronous inductance to be carried out by bringing near or dividing the two parts of the external coils, so that a proper CPSR about 3:1 is achieved.

A novel idea of mechanical flux weakening is applied to AFPM machines in \[82\], \[83\] by means of rotor shifting and stator shifting respectively. Since the flux linked by the winding varies when there is a phase displacement between the two rotor discs or two sets of stator windings corresponding to the aligned counterparts, the flux linkage can be regulated and an extended speed range can be obtained by controlling the phase displacement to keep a constant output voltage. In order to achieve this, suitable mechanical devices are utilized to control the mechanical phase displacement between the rotor disks or stator windings. A CPSR of 5:1 is achieved for a 4 kW TORUS N-N type AFPM starter/alternator in \[82\]. By using a purposely designed actuator to shift the two stator windings of a 2 kW coreless TORUS N-S type AFPM generator, flux weakening is achieved and a CPSR of 8.3:1 is obtained by experimental tests.

Apart from the above, there are some simple design solutions to increase the motor inductance which have fewer influences on the original motor design and are easier to implement, including the use of slotted stators instead of a slotless structure, and the cored design instead of coreless design (although the latter eliminates the cogging torque), the adoption of FSCW instead of distributed windings, the adoption of magnetic wedges or a combination of them. Adding the magnetic wedges in the stator slot to close the slot-opening is an effective way to improve the AFPM machine’s performance \[10\], \[12\], \[23\]. In \[12\], the material used for the magnetic wedges has much lower permeability than the lamination steel but higher than air (such as SMC 500), so that a path can be provided for leakage flux to improve the inductance, and hence, to extend the constant power range. A constant power range of two times or more has been reported in the same paper \[12\] by adding SMC wedges in the stator slots.

Thermal analysis and mechanical analysis are important in electric motor design, especially for high-power-density, high-speed electric propulsion applications, since the torque density and maximum speed are limited by the allowable working temperature and mechanical strength. Accurate thermal modelling and mechanical analysis are necessary for the validation of the developed electromagnetic design, reduction of prototype iterations and cost minimization.

### A. Thermal Analysis

The analysis of loss production and heat transfer effects in AFPM machines has been an active field of recent research. Considering the limited tolerance of continuous maximum temperatures for materials and the risk of PM demagnetization as well as motor performance dependency on the temperature, the internal temperature of the motor must be carefully investigated and predicted during design.

Coupled computational fluid dynamics (CFD) with FEA or finite volume analysis (FVA), experimental measurements by thermal couples, infrared temperature sensors or cameras, and lumped parameter (LP) networks are common ways to evaluate the thermal performance of electric machines. The surface convective heat transfer coefficients, crucial for accurate thermal modeling, are complex functions of geometry and fluid mechanics. For an easy application, Ref. \[84\] reviewed the measured convective heat transfer correlations for a wide variety of situations from laminar to turbulent flow at small and large gap sizes for both RF and AF electric machines. Besides, the diffusion of commercial software packages, such as ANSYS CFX, ANSYS Fluent, COMSOL Multiphysics, etc., that enable coupled CFD and FEA have given researchers a powerful tool to perform complex 3-D thermal simulations of AFPM machines.

In \[34\], the thermal-fluid simulation analysis is conducted on the coreless stator of a 50 kW 12-slot/10-pole coreless TORUS AFPM machine basing on the calculated stator winding losses from an equivalent 3-D FEA model of one strand Litz-wire. The inlet cooling oil flow rate is set to 1.2 m/s and the inlet cooling oil flow is set to 15 L/min. Because of the intensive winding arrangement, the flow velocity in the stator is about 0.5-1.0 m/s. Based on the loss analysis results and CFD simulation results of the cooling oil path, the temperature of the outer winding end is about 100 °C and the temperature of the other winding parts is about 70 °C under 9000 rpm, 50 kW output power. It should be noted that the temperature difference between the units of the heated parts will lead to thermal stress of the subunits, and therefore cause thermal deformation of the heated parts. In addition, the materials’ maximum strength generally reduces with high temperature, which can lead to fracturing or plastic deformation under high thermal stress.

In \[85\], the thermal behaviour of a 2.2 kW single-sided 24-slot/28-pole AFPM wind generator with SMC core is investigated via a coupled thermal and fluid-dynamical model based on FEA. A dc current flow solving module is used to define the circulation of currents and calculate the magnetic field so as to compute the thermal sources for thermal and fluid-dynamical analysis. Fluid-dynamical equations (Navier-Stokes equations) coupled with heat flow models are integrated in the air gap to account for convective heat exchange between the stator and rotor. The heat exchange coefficients and heat flux toward the environment are modelled based on Nusselt number by placing suitable boundary conditions on the stator and rotor outer surfaces. The disadvantage is that the results are very sensitive to possible inaccuracy, thus affecting boundary condition placement. By comparing with the measurements, a good agreement with the computations of stator temperatures can be noticed, however, the rotor core is remarkably hotter than anticipated due to the underestimate of rotor iron losses in the coupled thermal simulation model.

Experimental measurements of stator heat transfer versus rotational Reynolds number for various gap sizes using a thin-film electrical heating method are performed based on a single-sided air-cooled AFPM machine in \[86\]. Compared with CFD simulations using both 2-D axisymmetric and 3-D models, a good match between CFD and experiment is obtained in the region far away from the edge. The accuracy of heat transfer predictions by CFD modelling is relatively insensitive to the choice of turbulence model, but remarkably influenced by modelling of edge effects (i.e. geometry at the boundary) and transitional flow regime.

LP thermal networks are represented as a series of thermal nodes linked via thermal resistances, which is fast to compute temperature and therefore can handle transient calculations with complex load cycles. In this method, the machine is divided into several thermal elements which are modelled with equivalent LP blocks and heat source generators. LP models must be carefully “tuned” with empirical data, such as convective heat transfer correlations, to ensure adequate performance.

A 2-D LP thermal model with 13 thermal nodes which only considers heat flows in axial and radial directions is presented in \[87\] to evaluate the steady-state thermal behaviour of a 5 kW AFIR type AFPM generator. The proposed thermal model is highly insensitive to the parameter variations and can be used for low-speed AF machines with similar construction. Testing results show that the LP calculated temperatures are slightly higher than their corresponding measured values.

A 3-D LP thermal model based on the general cuboidal element is proposed in \[88\] which considers the 3-D heat transfer, material thermal anisotropy, and internal heat generation for more accurate temperature predictions. This new technique is validated with 3-D FEA showing a good agreement. It is indicated that a slower transient response and higher steady-state temperature will be predicted by LP model if neglecting the effect of the internal heat generation. However, this 3-D LP model is complicated with 250 nodes, and there is no experimental validation.

A computationally efficient LP thermal model which comprises of seven heat sources corresponding to the losses (i.e., bearing losses, magnet eddy-current loss, rotor iron loss, windage loss, copper loss and stator iron loss) of a 1.5 kW single-sided 24-slot/8-pole air-cooled AFPM motor is presented in \[89\]. A constant DC current is fed to the motor for 8 hours to achieve a steady state to measure the convective thermal coefficient of the housing which has a significant impact on the LP thermal prediction. By employing the measured convective heat coefficient in the LP thermal model, the error between the predicted temperatures and measurements by thermocouples is less than 4 °C. The transient thermal test validates the accuracy of transient temperature prediction by this approach with consideration of the heat flow to the test rig as two thermal RC elements in the LP network. The accurate temperature prediction and efficient computation make this LP model suitable for integration into the electric propulsion system simulation tools and predictive control strategies.

### B. Mechanical Analysis

Since the manufacturing and assembly tolerance are inevitable, a slight asymmetry of the air gaps may cause significant increase in the axial force between the stator and rotor, which may create problems for the bearings and twist the structure. The rotor suffers from a large centrifugal force, especially at high rotating speed, which may damage the rotor structure as well. Therefore, mechanical strength analysis is required to validate the safety and reliability of the current motor design under high temperature conditions. Proper mechanical design is made with the objective to sustain the electric and magnetic bodies being optimized to present a low mass with high axial rigidity. A suitable selection of bearings is the simplest way to handle the axial force, such as a fixed-floating bearing arrangement which has two spindle bearings to fix the shaft axially and one conventional deep groove ball bearing to provide radial support and enable the axial free displacement in \[90\].

In \[34\], the formulas for calculating the thermal stress and thermal deformation are presented which is related to the change in temperature, material’s thermal expansion coefficient, material’s Young’s modulus and the modulus of elasticity. The stress distribution of the coreless stator’s sealing plate and winding supporter with 170 °C winding temperature under max speed 9000 r/min, 200 kW peak power is analysed, showing that the thermal stress increases sharply with the winding temperature. However, the maximum stress of the stator is less than the maximum yield strength of the epoxy resin material FR4 which is used to encapsulate the stator winding to increase the structural strength of the coreless stator.

In \[90\], the stress and deformation on the stator caused by asymmetric air gaps (0.2 and 1.8 mm) of a YASA motor are analysed basing on 3-D FEA, showing that both the stress and the deformation increase rapidly when the air gaps become asymmetric. However, the resulting deformation is much lower than the air gap length due to a high yield strength of the stator material. The stress and deformation of the rotor, PM and shaft are also analysed at the maximum speed 4500 rpm and torque 240 Nm and the results are acceptable, showing safety and reliability of the motor design. The coupled thermal and CFD analysis is adopted to calculate the airflow and the temperature based on the calculated losses from the electromagnetic analysis. It is noted that the temperature of the PM rises very fast due to its low thermal capacity and high eddy current losses. In order to reduce the temperature and to improve the continuous power, the PM should be segmented for future designs.

For single-sided AFPM machines, there is an important structural problem caused by the imbalanced axial force between the stator and rotor. To alleviate this axial force, proper control actions have to be implemented to supply suitable winding currents at various rotor positions or using proper magnetic materials for stator and rotor cores \[91\].

Since the AFPM machine has a 3-D structure and complicated flux path, the stacking and cutting of the stator core, stator teeth and magnets, construction and wind of coils, and fabrication of structural integrated parts are more difficult than RFPM machines. Besides, electromagnetic interaction between the stator and PMs of the rotor is much larger than in RFPM machines, which requires strict manufacturing and assembly accuracy to avoid air-gap asymmetry. A significant amount of research has addressed the manufacturing and structural aspects of AFPM machines to increase the performance and simplify the construction.

Core losses in a cored AF geometry mostly happen in the stator core, while the rotor back iron only carries the DC flux, therefore, the stator needs to be laminated, while the rotor is generally a solid ferromagnetic disk \[12\]. As shown in FIGURE 13, the stator core of an AF machine is either laminated spirally (tape-wound lamination) or lamination stacked parallelly to keep the sheet thickness perpendicular to the magnetic field, hence, to guide the main flux and reduce the iron losses.

**FIGURE 13.**

AFPM stator core construction: (a) Spiral lamination, (b) Parallel lamination (from \[50\]).

In \[23\], the stator of the 10 kW TORUS machine is made of spirally wound non-oriented M250-35 electric steel lamination, while the stator slots are index-punched on both sides of the core. In \[50\], silicon-iron lamination with 0.5 mm thickness was used to fabricate the spiral lamination of the TORUS stator. The machine rotors are constructed using milled steel.

In \[92\], the stator teeth of the AFIR machine are manufactured from compacted insulated iron powder (SMC) and the core back is formed from a strip-punched lamination (formed into a circle to grip the teeth), within which purposely designed ligaments are obtained in order to firmly join the stator core with the teeth, as shown in FIGURE 14. This new method of construction overcomes the problems associated with punching and winding AF machines formed using index-punched spirally wound laminations. The construction is shown to be mechanically stable and rather simple to manufacture. As well as production advantages it offers very high fill factor due to segmented stator structure and pre-wound coils, which can significantly enhance the performance of this type of machine.

**FIGURE 14.**

AFPM stator construction: (a) Strip-punched core, SMC teeth and a coil, (b) Completed stator halves with laminated back iron (from \[92\]).

In \[93\], an AFIR type machine is fabricated of which stator teeth have been obtained by milling SMC core samples. The authors have found that the smearing on the SMC teeth introduced by this method leads to high superficial eddy current losses. In \[37\], experimental results show that the milling process causes an 11% core loss increase at 50 Hz. In order to limit the manufacturing cost of the teeth, the variable width punching process was substituted by the milling performed on parallelepiped stacks. Suitable preliminary tests on milled laminated cores with rectangular slots were performed by the classical Epstein’s yoke method and showed an acceptable and limited core loss increase due to the surface rags with respect to the corresponding punched cores.

In \[32\], the 6 kW 1200 r/min YASA motor’s stator teeth are made up of laminated insulated soft magnetic steel sheets. The teeth are tapered in the radial direction so that the stator hasparallel slots. To facilitate the fabrication of the laminated stator teeth, the stator pole shoe which is an annulus sector is converted to a trapezoid with the same area in practical fabrication. However, the design of the structural support of the stator parts requires some attention as well.

The individual stator teeth of AFPM machines are mostly made of laminations or SMC. Lamination sheets have the advantage of a higher permeability and higher saturation flux density compared to SMC, which allows the use of less PM material. However, different lamination profiles for each lamination layer are required to form the complex 3-D tooth geometry, which makes the production of lamination profiles complex and expensive. A simple lamination stacking method which uses two lamination profiles by stacking them in an alternating way with overlap is introduced in \[94\] to obtain the 3D-shape of a tooth in a YASA motor. Compared with the conventional lamination stacking method, the proposed method greatly eases and reduces the cost of construction with little influence on the machine performance.

However, it should be noted that the iron losses and relative permeability can be affected by the manufacturing processes of the steel laminations \[95\]. The welding used for the stacking process of the steel laminations creates a solid electrical connection between each sheet, where extra loss is produced due to the high-frequent alternation of the tangential flux component. The welding losses are investigated in \[66\] with the measured resistance of lamination welding lines, showing a considerable result and the necessity of an improved joining process for the laminations.

For the winding construction in AF machines, the tooth-wound CW allows a segmented stator structure and pre-wound coils, which reduces the manufacturing cost for a correspondingly high slot fill factor, compared to the overlapping winding and core-wound winding, hence are widely adopted in the prototypes as presented in the publications. Open-slot stator structure allows for the easy assembly of flat-ribbon or rectangular conductors, which also brings these manufacturing advantages. However, the eddy currents induced in the rotor structure by the slotting effect may produce excessive heat generation that can degrade the magnet’s properties. To this end, laminated rotor core and PM segmentation are necessary to reduce the rotor losses. An epoxy resin that provides the windings with characteristics such as stiffness in working temperature, original dimensions, and good thermal conductivity for heat release, is generally applied in the slots to prevent the windings from missing their position due to vibrations during motor operation and to increase insulation capability.

To ease the fabrication and mass production while keeping or increasing performances, application of non-traditional materials such as SMC \[67\], \[68\], grain-oriented steel \[69\], amorphous magnetic material \[70\], plastic-bonded magnets \[96\], superconducting coils \[36\], and for both active and structural parts in AFPM machines have been investigated by researchers, and the research is still ongoing.

As can be found from the publications above, SMC is the most frequently used new material to produce the cores or teeth of AFPM machines due to the advantages of 3-D isotropic magnetic properties, low eddy-current loss especially at high frequency, as well as convenient and cost-effective manufacturing with good tolerance and smooth surface. However, the mechanical strength and electromagnetic properties of SMC are lower than that of conventional electrical steels, which puts challenges on the motor design and fabrication. Different mass density cores can be considered to meet the electromagnetic performance and mechanical strength requirements, depending on the manufacturing condition. As explained in \[97\], the SMC core density is determined by the press size by using a molding technique. Bigger press force usually produces cores with higher mass density and better magnetic characteristics, but the cost of its required press is higher as well.

This literature review discussed the design, analysis and construction technologies of AFPM machines for electric propulsion applications, with a focus on the potential topologies, design and modeling methods, key design parameters, important design considerations, thermal and mechanical analysis as well as mechanical construction and advanced materials. The following points are highlighted:

- The AFPM machine is an attractive solution for high power density applications which have strict restrictions on motor axial length, whereas the RFPM counterpart is attractive for a long motor shaft.
- Among all AFPM machines, the double-sided AFPM structure including both TORUS and AFIR types is most promising for high-performance drive applications due to high power density and high efficiency.
- YASA motor is a premium AFPM structure which has been widely investigated for direct-drive EVs, due to high torque density, compact structure and low weight. However, the manufacturing and assembly are still challenging.
- The tooth-wound CWs are increasingly adopted in AFPM machines as it reduces end-winding length and allows a segmented stator structure and pre-wound coils to ease the manufacture process and achieve a high slot fill factor.
- Sizing equations are used in the initial design stage of an AFPM machine to estimate the required motor dimension, and the quasi-3-D model is adopted in the design process to reduce the computation cost of 3-D FEA.
- The diameter ratio is considered as the most important design parameter for AFPM machines which cannot be designated as a simple numeric value and should be optimized under specific geometry, electric and magnetic loadings.
- Power losses, torque ripple and CPSR are important design considerations for EV motors. Corresponding techniques are introduced, among which adding magnetic wedges at the slot opening is a global way to improve the motor performance.
- SMC material has been widely applied in AFPM machines for the production of cores or teeth due to the advantages of 3-D isotropic magnetic properties and low eddy-current loss.

AFPM machines have much larger electromagnetic interaction between the stator and PMs of the rotor than RFPM machines, which requires accurate thermal and mechanical analysis during the design process, as well as strict manufacturing and assembly to avoid eccentricity and asymmetry. Future research can be focused on the following aspects:

1. Efficient and accurate modeling of AFPM machines to minimize the gap between the predicted and actual performances.
2. Cost-effective manufacturing and assembly methods for AFPM machines with less side effect.
3. Relations between lamination properties (including thinner laminations) and motor performances, to develop motor design with tailored laminations.
4. New processing methods including stacking, cutting and stamping for laminations, to minimize the side effects by manufacturing.
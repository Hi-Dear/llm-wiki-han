---
title: "A Review of Axial Flux Permanent Magnet Machine Technology"
source: "https://ieeexplore.ieee.org/abstract/document/10076914"
author:
  - "[[Nishanth Gadiyar]]"
  - "[[Joachim Van Verdeghem]]"
  - "[[Eric L. Severson]]"
published:
created: 2026-07-24
description: "Axial flux permanent magnet machines (AFPM) are popular for applications that benefit from high torque density and an axially compact form factor, such as in-wh"
tags:
  - "clippings"
---
## Abstract:

Axial flux permanent magnet machines (AFPM) are popular for applications that benefit from high torque density and an axially compact form factor, such as in-wheel tracti...

---

Axial flux machines are a compelling alternative to conventional radial flux machines, particularly for applications that demand high torque densities and a short axial length relative to the outer diameter \[1\], \[2\], \[3\]. These machines are characterized by an axial flux path between the rotor and the stator. Several axial flux machine variants have been reported in literature. Although the axial flux PM machines (AFPM) are the most popular, variants such as axial flux induction and reluctance machines have also been studied e.g. \[4\], \[5\], \[6\]. Owing to the popularity of the AFPM compared to the other axial flux machines, the analysis presented in this paper focuses on the AFPM, but can be extended to other variants.

While AFPM have been previously reviewed in \[2\], \[7\], there has since been considerable advancement in the state of the art. For instance, new techniques have been developed for design optimization of AFPM e.g. \[8\], \[9\]. Innovation in additive manufacturing of metals has opened avenues to manufacture electric machine geometries that are otherwise difficult to fabricate with conventional techniques \[10\], \[11\], \[12\]. In addition, recent advancements such as bearingless and magnetically geared AFPM that combine the advantages of magnetic levitation and magnetic gears have positioned the AFPM technology to make a disruptive impact in the future of electric motor systems.

The main contribution of this paper is to provide a review of the state of the art in AFPM machines. This paper is organized into six main parts. The first part reviews analytical techniques to size axial flux machines. These techniques are compared and used to identify application scenarios where AFPM can be beneficial over RFPM. In the second part of this paper, design evaluation and optimization techniques for AFPMs are reviewed. These techniques are useful to efficiently evaluate candidate designs and explore the design space. The third part of this paper reviews the materials and manufacturing techniques reported in literature to fabricate axial flux machines. The relative merits of each of these techniques are identified. The fourth part of this paper extends the conference version \[15\] by reviewing commercial AFPM designs and prototype AFPM designs with experimental validation published in the last decade to extract different design trends for axial flux PM machines. These trends are compared with benchmarked RFPM designs to identify the design space of AFPM technology. The next part of this paper reviews the flux weakening and thermal management techniques proposed in literature for axial flux PM machines. Finally, this paper concludes by reviewing the emerging AFPM topologies, providing a research outlook for the AFPM technology, and identifying promising avenues for future development.

Several axial flux machine design variants have been reported in literature. This section presents analytical sizing equations for axial flux machines, highlights the physical significance of the AFPM design parameters, and compares the torque capability of axial flux and radial flux PM machines. A comprehensive classification of the AFPM design variants presented in \[2\] is shown in Fig. 1(a). Among the design variants presented in Fig. 1(a), the single sided and the torus type machines are popular for power dense applications. The torus type includes popular AFPM variants, such as the coreless machine, yokeless and segmented armature (YASA) machine, as well as the toroidal winding machine. More information about these variants can be found in \[13\], \[16\].

[![Fig. 1. - (a) Classification of AFPM topologies from [2]; (b) Main radial dimensions of an AFPM [13]. Note that the double stator single rotor structure in subfigure (a) can also include iron-less rotor machines, e.g. [14].](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/28/10185984/10076914/nisha1-3258933-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/28/10185984/10076914/nisha1-3258933-large.gif)

**Fig. 1.**

(a) Classification of AFPM topologies from \[2\]; (b) Main radial dimensions of an AFPM \[13\]. Note that the double stator single rotor structure in subfigure (a) can also include iron-less rotor machines, e.g. \[14\].

The different AFPM variants (e.g. kaman type, torus type with stator yoke, single sided) can have variant-specific modifications to the sizing equations based on factors such as the number of stators/rotors, presence or absence of a stator yoke. However, it was shown in \[13\], that the popular AFPM variants i.e, single-sided, YASA, toroidal winding, and coreless can be sized using the same sizing equation. The AFPM sizing equations are reviewed and compared in this section in the context of these four AFPM variants.

### A. Sizing Equations

Electric machine sizing equations relate the output of the machine to the design parameters of electric loading $\hat{A}$, magnetic loading $\hat{B_\delta }$, and the machine dimensions. In this section, the sizing equations for the axial and radial flux machines are presented. The physical significance of $\hat{A}$ and $\hat{B_\delta }$, and the nuances in their definition for AFPMs are highlighted in the conference version of this paper \[15\].

The Maxwell stress tensor can be used to integrate the airgap field quantities produced by the electric and magnetic loading to calculate the electromagnetic torque of electric machines, as presented in \[17\]. This results in the sizing [(1)](#deqn1) for radial flux PM machines. Here, $T$ is the electromagnetic torque, $R_\text{o}$ is the airgap radius and $L$ is the axial length.

$$
\begin{align*}
T&=\pi R_{o}^{2}L\hat{B}_\delta \hat{A} \tag{1}
\end{align*}
$$
 View Source

Unlike the RFPM, a single airgap radius cannot be defined for an AFPM. This presents nuances in identifying an appropriate radius $r$ to define the electric loading for an AFPM. Since the airgap extends in the radial direction, the electric loading will not be uniform at all radii. Therefore, the electric loading $\hat{A}$ must be considered as a function of the radius $r \in [R_\text{im}, R_\text{om}]$ (Fig. 1(b)).

A detailed derivation of the AFPM sizing equation, considering the electric loading as a function of the radius is presented in \[13, Section II\]. For the YASA, coreless, and single sided AFPM, this equation can be expressed in terms of the geometric ratio $\lambda = \frac{R_\text{im}}{R_\text{om}}$ as

$$
\begin{align*}
T &= \frac{\pi }{2}\hat{B}_{\delta }\hat{A} R_\text{om}^{3} \lambda (1-\lambda ^{2}) \tag{2}
\end{align*}
$$
 View Source

It is seen that the electromagnetic torque of the AFPM varies as the cube of its outer radius and the geometric ratio $\lambda$ is again an important design parameter. The range $\lambda \in [0.65, 0.75]$ has been reported for power dense designs in \[2\].

### B. Comparison of Design Variants

Several comparisons of AFPM and RFPM designs have been reported in literature. The power density of toroidal AFPM, two stator AFPM, and RFPM designs was compared in \[1\]. It was shown that both the AFPM design variants compared were more power dense than the RFPM. Taran et al. in \[18\], \[19\] and Nishanth et al. in \[13\] showed that the YASA and the single-sided AFPM have the same torque capability when the same PM volume is used. This implies approximately twice the torque per rotor volume, and lower active material cost for the single-sided AFPM.

The sizing equations can be used to compare the torque capability of single rotor-single stator AFPM and RFPM designs for different aspect ratios of the RFPM rotor. Using [(1)](#deqn1) and [(2)](#deqn2), the following equation can be derived:

$$
\begin{align*}
\frac{T_\text{afpm}}{T_\text{rfpm}} &= \frac{\frac{\pi }{2}\hat{B}_{\delta }\hat{A} R_\text{om}^{3} \lambda (1-\lambda ^{2})}{\pi R_\text{om}^{2}L\hat{B}_{\delta }\hat{A}}=\frac{D_\text{om}\lambda (1-\lambda ^{2})}{\text{4}\,L} \tag{3}
\end{align*}
$$
 View Source

where $D_\text{om} = 2R_\text{om}$ is the outer diameter of the AFPM and RFPM rotors, and $\frac{D_\text{om}}{{L}}$ is the aspect ratio of the RFPM rotor.

Fig. 2 compares the AFPM and RFPM designs using [(3)](#deqn3) for different values of $\lambda$. Each contour shows the torque ratio between AFPM and RFPM. At RFPM rotor aspect ratios less than 12, it can be seen that the AFPM with the same outer radius $R_\text{om}$ produces lower torque. However, at RFPM rotor aspect ratios greater than 12, the AFPM with the same $R_\text{om}$ can produce higher torque compared to the equivalent RFPM. This analysis assumes that the same value of electric loading is achievable in the AFPM and RFPM. In reality, the AFPM structure is more conducive to cooling \[18\] compared to the RFPM. This makes higher electric loading achievable and can further improve the AFPM torque capability.

**Fig. 2.**

Comparison of AFPM and RFPM torque capability. Each contour is the ratio of the torque capability of AFPM to the torque capability of RFPM.

The torque per rotor volume (TRV) can also be used to compare RFPM and AFPM designs. From [(1)](#deqn1), the TRV for RFPM designs is given by $\text{TRV}_\text{rfpm} = \hat{B}_{\delta }\hat{A}$, and the TRV for AFPM can be computed as $\text{TRV}_\text{afpm} = \frac{\lambda R_\text{om}}{2(t_\text{m}+t_\text{y})}\hat{B}_{\delta }\hat{A}$. For most practical designs, the combined thickness of the PM and rotor yoke are such that $t_\text{m} + t_\text{y} < \frac{\lambda R_\text{om}}{2}$, resulting in a higher TRV for AFPM compared to an equivalent RFPM.

Another parameter of interest for comparing axial and radial flux PM machines is the torque per PM volume $T_\text{PM}$. In most drive systems, it is desirable to minimize the PM volume to reduce the system cost and be immune to supply chain issues in sourcing the PMs. To compare the ratio of torque to PM volume for radial and axial flux topologies, [(4)](#deqn4) can be derived using [(3)](#deqn3). [(4)](#deqn4) assumes the same outer radius, airgap length, electric and magnetic loading between the RFPM and AFPM variants. For any physically realizable machine, $\lambda < 1$ and $t_\text{m}< < D_\text{om}$. This implies that to achieve the same torque output, AFPMs require higher PM volume than comparable RFPMs.

$$
\begin{align*}
\frac{T_\text{PM, afpm}}{T_\text{PM, rfpm}} &= \frac{D_\text{om}\lambda (1-\lambda ^{2})}{\text{4}\,L} \frac{\pi \left(R^{2}_\text{om}-(R_\text{om}-t_\text{m})^{2}\right)L}{\pi R^{2}_\text{om}\left(1-\lambda ^{2}\right)t_\text{m}} \\
&= \lambda \left(1-\frac{t_\text{m}}{D_\text{om}}\right) \tag{4}
\end{align*}
$$
 View Source

Electric machine designs have several variables that affect the design objectives. To identify designs that satisfactorily meet all design objectives, a design optimization study that couples electric machine analysis with an optimization algorithm is essential \[20\]. The flux paths in AFPM are three dimensional. In addition, there are two major 3D effects that occur in the AFPM \[2\]: i) radial dependency of the flux distribution due to variation in the slot, tooth, and pole dimensions in the radial direction, and ii) flux fringing at the inner and outer radii. Accurate performance analysis of AFPM designs requires taking these 3D effects into consideration. This has led to development of analytic and semi-analytic techniques that trade-off evaluation time for accuracy. Promising analytic techniques e.g. \[21\], \[22\], were comprehensively reviewed in \[2\]. Although the analytical techniques are computationally efficient, FEA is the most accurate technique to evaluate AFPM designs \[2\]. This makes an FEA-based design optimization desirable.

The design optimization of axial flux PM machines can be performed using different techniques such as genetic algorithms (GA), e.g. \[3\], \[24\], \[25\], differential evolution (DE), e.g. \[8\], \[26\], and particle swarm optimization (PSO), e.g. \[27\]. To evaluate the design performance within these optimization algorithms, two design evaluation approaches are popular to overcome the large computational requirements of 3D FEA (most accurate for AFPM evaluation): i) Reducing the number of 3D FEA solves using numerical techniques, and ii) Using 2D FEA evaluation. The choice of the suitable approach for a given problem depends upon the AFPM design variant being analyzed and the accuracy required for the application.

#### 1) Design evaluation With Reduced Number of 3D Solves

In this approach, only a few designs are evaluated using 3D FEA and the rest of the designs are evaluated using numerical techniques like surrogate models or artificial neural networks. A two-level surrogate-assisted optimization approach (2L-SAMODE) for AFPM was reported in \[8\]. In this method, kriging surrogate models are used to estimate performance parameters of the electric machine designs and 3D FEA is only used to evaluate pareto-optimal designs in each generation. The Pareto fronts obtained using the 2L-SAMODE and conventional multi-objective differential evolution (MODE) were approximately the same as seen from Fig. 3(a). The MODE required 886 FEA evaluations while the 2L-SAMODE required only 163 FEA evaluations to generate the same Pareto front. This technique was also adopted in \[28\].

**Fig. 3.**

(a) Comparison of Pareto fronts obtained using MODE and two level surrogate assisted MODE \[8\] for a commercial AFPM. Evl indicates the number of 3D FEA evaluations to reach the Pareto front.; (b) Schematic showing 2D modeling approaches for AFPM \[23\].

##### 2) 2D FEA Techniques for Design Evaluation

2D FEA techniques for AFPM design evaluation have been reported in \[3\], \[23\], \[26\], \[29\], \[30\]. These 2D FEA analysis techniques divide the AFPM into several 2D computation planes (Fig. 3(b)) and perform a series of FEA solves at each computation plane. A popular method is to consider each 2D computation plane as a linear machine as proposed in \[29\], \[30\]. Gulec et al. investigated three different approaches for 2D FEA analysis of AFPM in \[23\]. These approaches included considering the 2D computation planes as i) linear machine (LMMA), ii) inner rotor machine (IRMA), and iii) outer rotor machine (ORMA) as shown in Fig. 3(b). The LMMA approach was found to have the least computation time. The performance parameters computed with 2D FEA were in closer agreement with experimental values for coreless designs compared to iron cored designs. This was attributed to the non-linearity of iron (absent in the coreless design).

Performance parameters computed using 3D FEA and 2D FEA using the LMMA approach with 3 computation planes were compared in \[30\] for a coreless AFPM design rated for 20 kW and 15,000 RPM. It was shown that the 2D FEA significantly reduced computation time, with marginal reduction in accuracy, making it suitable for design optimization.

One of the reasons for lower commercial adoption of AFPMs is the difficulty in fabrication with conventional manufacturing techniques. This section reviews the recent trends in AFPM fabrication. The popular techniques reported in literature to manufacture the stator and the PM rotor are reviewed and their relative merits highlighted.

### A. Stator Design

The stator structure can significantly vary between AFPM design variants. They can be iron cored, coreless, or yokeless with segmented armature (YASA). Electric machine stator cores are nearly always fabricated using laminated electrical steel to reduce eddy current losses. Unlike RFPMs, where laminations can be axially stacked, AFPMs require radial laminations, which are difficult to assemble. Several manufacturing approaches for AFPM stators are now summarized.

#### 1) Laminated Steel

Tape-wound cores built using thin gauge electrical steel have been used to fabricate toroidal slotless AFPM stators, e.g. \[31\], \[32\]. This is a popular and relatively simple approach that does not require specialized manufacturing techniques or equipment. Slots can be cut into the tapewound cores to fabricate slotted stator AFPM variants. Sahin used wire EDM technique in \[33\] to cut slots into a tapewound core for a 30 kW, 16,000 RPM axial flux generator (Fig. 4(a)). A similar approach was adopted in \[34\], where the slots were machined instead. It was noted that the machining process to create slots can introduce short circuits between the lamination layers. Another variant is to wind stamped steel tape as shown in Fig. 4(b) \[35\]. This requires specialized equipment and is relatively expensive.

**Fig. 4.**

AFPM stator examples: (a) Tapewound core with slots cut using EDM \[33\]; (b) Slotted stator using stamped lamination \[35\]; (c) AFPM using SMC core \[38\]; (d) Efficiency comparison between SMC and laminated stator \[38\]; (e) PCB windings \[39\]; (f) Core loss v/s frequency for laminated, SMC, and additively manufactured (AMM) stators \[35\].

#### 2) Soft Magnetic Composites

Soft magnetic composites (SMC) have been reported in literature such as \[35\], \[36\], \[37\], \[38\] for AFPM stator fabrication. This method can have high initial cost for the SMC molds compared to using laminated steel. In \[38\], Kim et al. compared the performance of SMC and laminated stator cores for the 14-pole, 12-slot AFPM shown in Fig. 4(c). The results are shown in Fig. 4(d). It can be seen that the laminated core was more efficient at low operating speeds (lower frequency). However, at higher operating frequencies the SMC and the laminated cores had comparable efficiencies. This was attributed to the increased eddy current losses in the laminated steel at higher operating frequencies.

#### 3) PCB Stator

PCB stators have been studied and used for AFPM designs, e.g. \[28\], \[39\], \[40\], \[41\], \[42\], and comprehensively reviewed in \[43\]. A PCB stator with rhomboidal windings is presented in \[39\] for a miniature spindle motor shown in Fig. 4(e). It was shown in \[40\] that the trapezoidal winding better utilizes the board area and has a higher torque producing capability than the rhomboidal pattern. Wave winding schemes for PCB stators were compared in \[41\] and the non-overlapping radial wave winding was identified to have the highest fundamental back-EMF and torque capability. The performance of a laminated stator and a PCB stator was compared in \[42\]. For the same output power, the machine with the PCB stator was more efficient and compact. However, the PCB stator had significant thermal limitations on achieving higher current densities. It can be concluded that, although the PCB windings are promising for low voltage and current ratings, with the current state of the art, there will be challenges in using it successfully at elevated voltages and current densities.

#### 4) Additive Manufacturing

Additive manufacturing techniques are currently being investigated for AFPMs e.g. \[44\], \[45\]. Sun et al. compared laminated, SMC, and additively manufactured stators for a multi-stage AFPM in \[35\]. It was noted that the core losses for the additively manufactured stator were lower than the laminated and SMC stators in both the low and high frequency (over 1 kHz) operating regions, as shown in Fig. 4(f). In addition to stator core, additive manufacturing techniques can also be used to fabricate the windings.

#### 5) Stator Design for Cogging Torque Reduction

Stator design can be used as a handle to reduce the cogging torque by optimizing the slot openings, tooth pairing, teeth notching, displacing the slots and slot openings, skewing of stator teeth, dummy slots, filling slot openings, and displacement of dual stators \[46\]. Letelier et al. in \[47\] investigated cogging torque reduction in a single stator dual rotor AFPM by stator slot displacement and skewing. It was shown that stator slot displacement when used in conjunction with skewed rotor PM can offer upto 60% reduction in cogging torque. Wanjiku et al. in \[46\] studied the influence of stator slot openings and tooth profiles on the cogging torque of AFPM. Four different tooth shapes were evaluated to demonstrate that using a parallel tooth profile with a trapezoidal shaped slot profile offered 24% reduction in cogging torque without any modification to the rotor structure. The evaluation of different techniques to reduce AFPM cogging torque in \[48\] showed that displacing the slots and the slot openings can reduce cogging torque. It was shown that a 1/2 slot pitch displacement of the stator slot openings can decrease the cogging torque by approximately 25%. Although skewing stator slots can reduce cogging torque, this increases the leakage inductance and the copper loss due to the increase in winding length \[47\], \[48\]. In addition, depending on the manufacturing technique employed, fabricating stators with skewed slots can be challenging.

### B. Rotor Design

The AFPM rotors typically require non-standard shapes of PM, which can be expensive. However, high performance rotors have been adapted in literature to use conventional-shaped PMs and reduce cost, e.g. \[49\], \[51\]. In addition to being cost effective, having smaller PM segments per pole, also reduces losses due to induced eddy currents. Vansompel et al. compared a T-shaped pole structure with different number of magnet segments per pole for a 4 kW, 2,500 RPM YASA machine in \[49\]. The final pole structure shown in Fig. 5(a) has 14 cuboidal NdFeB segments per pole which reduced the eddy current losses by a factor of 8 compared to unsegmented poles. A coreless AFPM with circular pole shapes as shown in Fig. 5(c) was developed in \[51\].

**Fig. 5.**

(a) T-shaped PM with 14 cuboidal segments per pole \[49\]; (b) Torus machine with quasi-Halbach rotor \[50\]. The parts are 1 - stator core, 2 - toroidal winding, 3 - rotor core, and 4 - quasi Halbach array; (c) Circular pole shape using rectangular PM \[51\]; (d) Rotor skew techniques for AFPM \[52\].

Halbach array rotors for AFPM have been reported in \[50\], \[53\], \[54\], \[55\], \[56\]. These rotors are frequently used for ironless stator AFPM primarily due to the inherent sinusoidal air-gap field distribution and flux focusing capability \[53\]. Zhang et al. in \[53\] reported a detailed mechanical design of a Halbach array rotor for a 50 kW coreless AFPM. The prototype reached speeds of up to 9000 RPM while remaining mechanically stable. A quasi-Halbach array rotor shown in Fig. 5(b) was reported to provide a 12% increase in torque density of a torus machine compared to an axially magnetized PM array in \[50\].

PM shapes can also be used as a design handle to improve the machine performance. The effect of PM shape on AFPM performance has been analyzed in \[46\], \[48\], \[52\], \[57\], \[58\]. Different cost-effective PM skewing techniques shown in Fig. 5(d) were reviewed in \[52\] to reduce cogging torque of double rotor AFPM machines. It was found that triangular skew significantly reduced the cogging torque compared to the unskewed design, and offered performance similar to the classic skew. In \[57\], an interior permanent magnet (IPM) rotor design with sinusoidal shaped magnets was proposed for a coreless AFPM. This design was 35% more torque dense and had 60% lower THD compared to a reference conventional coreless AFPM. To reduce the cogging torque, \[46\] compared the following PM arrangements i) a pole arc ratio of 0.81, ii) alternating pole arc ratios of 0.61 and 0.81, and iii) skew by one pole pitch. Compared to a 0.81 pole arc rotor, alternating pole arcs effectively reduced cogging torque by 73%, whereas the skewed poles reduced the cogging torque by 48%.

Aydin et al. \[48\] investigated the utility of various cogging torque minimization techniques for AFPM machines using 3D FEA and showed that skewing either the stator slots or the rotor PM is effective in reducing the cogging torque. It was shown that for a $p=4$ pole pair machine, introducing an 18.75 $^{\circ }$ magnet skew reduced the peak to peak cogging torque from 16 Nm to approximately 3 Nm. In addition to conventional skewing, techniques such as triangular skew, trapezoidal skew, parallel magnets, circular skew, and dual skewed magnets have been evaluated in \[48\]. The results indicate that the circular skew and the triangular skew offer the cogging torque reduction of approximately 77.5% and 84.3% respectively, with relatively low additional cost for the custom PM shapes.

In addition to the skewed shapes with a flat PM face profile, novel PM geometries such as curved PM face profile and elliptical PM face profile have also been investigated, e.g. \[59\], \[60\] to reduce cogging torque in AFPM. Ali et al. in \[59\] investigated curved PM and curved PM with skew to show that they can achieve approximately 40% and 44% reduction in cogging torque compared to skewed PM with conventional flat PM face profile. In \[60\], the authors proposed an elliptical face profile and compared it with the curved and the flat PM face profiles to show that the proposed elliptical profile promises approximately 17% cogging torque reduction compared to the conventional flat PM face profile. However, it must be be noted that these studies are limited to FEA analysis. Realizing curved and elliptical face profiled PM can introduce manufacturing challenges and experimental validation is necessary to validate the cogging torque reduction by considering the manufacturing tolerances and process capabilities.

In this section commercial AFPM designs and prototype AFPM designs with experimental results reported in literature are reviewed to identify the trends in torque density, power density, and speed-power capability. Unlike RFPM machines, AFPM machines are not widely manufactured. Table I lists specifications of commercial AFPM designs from five different manufacturers. Most of these designs target applications with high torque density or high power density requirements such as electric vehicles. For example, high performance hybrid-electric cars SF-90 and 296 GTB from Ferrari \[69\], and the Koenigsegg Regera \[70\] use YASA axial flux PM machines.

**TABLE I** Commercial AFPM Designs

Several AFPM designs with experimental results have also been reported in literature across different application domains such as wind energy generation, e.g. \[71\], \[72\], energy storage, e.g. \[73\], \[74\], automotive (traction, electrified vehicles), e.g. \[3\], \[30\], \[75\], \[76\]. In addition, literature also reports proof of concept AFPM prototypes fabricated to validate new electromagnetic, thermal, and mechanical designs, e.g. \[77\], \[78\], \[79\], \[80\]. Publications in the last decade (since the publication of \[2\]) containing experimental results were reviewed to identify current research trends in the design space of axial flux PM machines. These designs are categorized based on their application in Fig. 6(a) and based on the AFPM topology in Fig. 6(b). It can be seen that most low-speed, high torque designs are intended for wind energy conversion, while high speed designs predominantly target automotive application or are proof of concept designs. The benchmarked automotive radial flux PM machines reported in \[68\] are also indicated in Fig. 7(d). It can be seen that these RFPM designs are typically rated for higher speeds than most reported AFPM designs.

**Fig. 6.**

Torque-speed range of published AFPM designs with experimental results: (a) Based on application; (b) Based on topology. The RFPM designs in subfigure (b) are traction motor designs from \[68\].

[$Fig. 7. - Performance parameters of the reviewed designs: (a) Average shear in the airgap. The dashed red line indiucates the upper limit of 148 kPa limit for radial flux PM machines reported in [17, Ch. 6]; (b) Torque density as a function of $\lambda$; (c) Rotor tip speed v/s power rating; (d) Speed-power capability. The RFPM designs in subfigure (d) are benchmarked traction motor designs from [68].$](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/28/10185984/10076914/nisha7-3258933-large.gif)

**Fig. 7.**

Performance parameters of the reviewed designs: (a) Average shear in the airgap. The dashed red line indiucates the upper limit of 148 kPa limit for radial flux PM machines reported in \[17, Ch. 6\]; (b) Torque density as a function of $\lambda$; (c) Rotor tip speed v/s power rating; (d) Speed-power capability. The RFPM designs in subfigure (d) are benchmarked traction motor designs from \[68\].

### A. Machine Topology and Construction

Among the surveyed designs in literature, the YASA and coreless variants accounted for 46% of the designs (23% each), the toroidal winding (Torus) machine accounted for 18% of the designs, while the single rotor-single stator machine accounted for 12% of the designs. The remaining designs were multi-stator topologies. Although interior PM axial flux machines have been reported in literature, e.g. \[81\], nearly all the surveyed designs were surface PM (SPM) machines. Approximately 13% of these designs used a Halbach array rotor while the remaining designs used conventional SPM structure. Using Halbach array can reduce the machine mass and rotor moment of inertia by eliminating the rotor yoke. A large number of these prototypes (approximately 60%) used electrical steel laminations for their stator construction while approximately 14% of the designs used SMC stators. The remaining designs had either coreless or PCB stators.

### B. Machine Ratings and Performance Parameters

The surveyed AFPM designs had a wide range of rated power (0.2 kW–300 kW), rated torque (0.2 Nm–96 kNm), speed (23 RPM–32000 RPM), and diameter ratio $\lambda$ (0.2–0.9). The performance parameters of these designs are compared with the range reported for RFPM designs in literature to show that the AFPM topology is more suitable to realize low-speed, high torque designs.

#### 1) Average Airgap Shear

The average airgap shear can be used to quantify electric machine performance and facilitate comparison of electric machine torque capability across different topologies. For radial flux machines, the average airgap shear can be computed using the electric and magnetic loading as $\sigma _\text{avg} = \frac{\hat{A} \hat{B}_\delta }{2}$ \[17, Ch. 6\]. Since the electric loading in axial flux machines is a function of radius \[15, Eq. 1\], the average airgap shear in each airgap for axial flux machines with a single stator and $n_{r} \in \lbrace 1, 2\rbrace$ rotors (e.g. single rotor and single stator, YASA, torus, coreless) is computed as [(5)](#deqn5), where $\hat{A}_\text{avg}$ is the electric loading defined at the average radius $R_\text{avg} = \frac{(R_\text{om} + R_\text{im})}{2}$

$$
\begin{align*}
\sigma _\text{avg} &= \frac{1}{\pi \left(R_\text{om}^{2} - R_\text{im}^{2}\right)n_{r}}\int _{0}^{2\pi }\int _{R_{\text{im}}}^{R_{\text{om}}} B_\delta (\alpha) A(\alpha) r dr d\alpha \\
&= \frac{1}{n_{r}} \frac{\hat{B}_\delta \hat{A}_\text{avg}}{\sqrt2} \tag{5}
\end{align*}
$$
 View Source

The average airgap shear for the AFPM designs reviewed is plotted in Fig. 7(a). The range of average airgap shear reported in \[17, Ch. 6\] for air cooled and direct water cooled radial flux machines is also indicated. It can be seen that several AFPM designs with $\lambda \in \lbrace 0.6, 0.8\rbrace$ achieve average airgap shear that significantly exceed the upper limit for air cooled RFPM designs. The highest shear among the reviewed designs is approximately 120 kPa for a torque-dense YASA machine with a direct oil cooled SMC stator reported in \[82\].

#### 2) Radius Ratio and Torque Density

The radius ratio ($\lambda = \frac{R_\text{om}}{R_\text{im}}$) is an important AFPM design parameter since it determines the active length of the machine and has a direct implication on the torque capability and torque density of the machine. It was previously shown in Section II-B of this paper that $\lambda$ influences the torque capability of axial flux machines. The torque density is plotted against the radius ratio for the surveyed designs in Fig. 7(b). It can be seen that the torque dense designs have $\lambda$ in the range $\lambda \in \lbrace 0.6, 0.8\rbrace$ which encompasses the range $\lambda \in [0.65, 0.75]$ reported for power dense designs in \[2\]. Furthermore, it can be seen from Table I and Fig. 7(b) that the torque density of most of the AFPM designs exceed 30 $\text{kNm/m}^{3}$, which is a widely accepted upper limit for liquid cooled radial flux PM machines \[83\], \[84\], \[85\], indicating the suitability of the AFPM technology to realize torque-dense designs.

#### 3) Rotor Tip Speed

The power rating of the published designs is plotted against the rotor tip speed in Fig. 7(c). It can be seen that the highest rotor tip speed designs occur in the 10 to 100 kW power rating, with the highest reported tip speed of 140 m/s for a 9000 RPM coreless machine designed for flywheel energy storage in \[53\]. This is significantly lower compared to the tip speed range (up to 294 m/s) reported for high-speed radial flux SPM machines in \[86\]. The relatively low values of tip speed for axial flux machine designs may be attributed to the unique magnet retention and structural integrity challenges inherent to AFPM machines, which are not present in RFPM machines.

#### 4) Speed-Power Capability

Electric machine power density depends on the torque density and the operating speed. From Table I and Fig. 6, it can be seen that nearly all AFPM designs have maximum operating speeds less than 15 kRPM. This is significantly lower than high speed radial flux PM machines which have been reported to operate at speeds up to 1000 kRPM \[87\]. High-speed radial flux PM machines generally tend to have low pole counts, with the highest speed machines reporting $p=1$ pole pairs. Although AFPM designs with $p=2$ pole pairs have been reported, e.g. \[88\], most of the surveyed AFPM designs are high pole count designs with $p \geq 5$ pole pairs. Among the reviewed designs, the dual stator AFPM developed in \[89\] with $p = 64$, had the highest pole count. Although the relatively high pole count of the AFPM designs improves their power density by reducing the yoke thickness, it also limits the operating speed range of these machines owing to increased frequency dependent losses and the drive control complexity at high operating speeds.

A popular metric used to characterize the capability of high-speed, high performance machines based on mechanical limitations (rotor dynamics, structural integrity, and bearing limitations) is rpm $\times \sqrt{\text{kW}}$ \[90\], called the speed-power capability. The capability curves for radial flux surface PM (SPM), induction, and interior PM (IPM) machines presented in \[86\] are plotted in Fig. 7(d) and compared against the commercial AFPM designs and benchmarked RFPM traction motor designs reported in \[68\]. It can be seen from Fig. 7(d), that the capability of AFPM machines are significantly lower than radial flux SPM machines and benchmarked commercial traction motors (most of which are IPM designs), indicating that the AFPM topology is relatively less-suited to realize high-speed designs. This can be attributed to their large rotor diameters relative to axial length, which can introduce mechanical challenges at high operating speeds. Based on the speed-power capability, rotor tip speed limits, and torque density trends of AFPM machines, it can be concluded that this technology is suitable to realize torque-dense and power-dense designs for low and moderate speed applications.

Flux weakening of PM machines is desirable in applications that benefit from extended-speed-range constant-power operation \[91\] such as traction motor. Although the high torque density of AFPM make them promising candidates for traction drive systems, the flux weakening capability of most AFPM variants is poor with low constant speed power ratio (CPSR) in the range of 2:1 \[2\] due to the low inductance of these machines \[92\]. The flux weakening techniques reported in literature for AFPM, e.g. \[93\], \[94\], \[95\], \[96\] can be broadly classified as i) mechanical and ii) electrical techniques. Literature focused on each of these techniques is reviewed in this section.

#### 1) Mechanical Techniques

The AFPM structure allows shifting the rotor/s and stator/s axially to vary the airgap of the machine. Most of the mechanical flux weakening techniques use this feature, e.g. \[93\], \[94\]. In addition, dual rotor AFPM also allow offsetting one rotor from the other to mechanically weaken the flux, e.g. \[94\]. Del Ferrao et al. in \[95\] developed a mechanical flux weakening device for a slotless Torus AFPM. This device weakens the flux linking the stator coils by displacing the two rotors with respect to each other. A CPSR of 5:1 was achieved on a slotless torus stator. Kasim and Fletcher in \[94\] compared the performance of the different mechanical flux weakening techniques for AFPM using FEA analysis and showed that while the variable airgap can offer a CPSR of 3:1, the offset magnet position technique can offer a CPSR up to 16:1. However, this needs to be experimentally validated. Radially sliding PMs have also been proposed to enable mechanical field weakening in AFPM, e.g. \[97\]. However, such designs require specialized mechanisms to shift the PM radially and increase the manufacturing complexity.

##### 2) Electrical Techniques

The electrical techniques to improve flux weakening operation of AFPM mainly encompass winding design techniques and rotor geometries that improve the flux weakening capability of the machine by injecting $d-$ axis currents. Kwon et al. in \[92\] developed an axial flux PM machine with laminated C-cores in the end-winding region and magnetic wedges in the slot openings to improve the flux weakening capability. This machine achieved a CPSR of 3:1. Hemeida et al. in \[98\] showed that show that high values of maximum speeds and low values of slots per poles can improve the flux weakening capability. A comparison of YASA machines with fractional slot concentrated winding and integer slot distributed winding with SPM and IPM rotor structures in in \[96\] showed that the distributed winding with IPM rotor structure offers the best performance under flux weakening.

##### 3) Summary

Although mechanical and electrical flux weakening techniques have been developed for axial flux machines, due to the inherently large effective airgap in these machines \[2\], \[92\], the flux weakening capability is low compared to radial flux machine variants such as the IPM machine. Although mechanical techniques promise significant improvements in flux weakening capabilities, they can significantly increase the system complexity, cost, mass, and limit manufacturability. A practical solution would be to use a relatively less complex mechanical flux weakening techniques in conjunction with techniques such as the ones developed in \[92\], \[99\] and winding design to improve the flux weakening capability using $d-$ axis currents.

Effective thermal management can improve the power density of electric machines \[100\] by allowing higher current density and electric loading. In addition, it can also reduce the risk of thermal demagnetization of the rotor PM. Since axial flux PM machines are generally favored to realize torque-dense and power-dense designs, thermal management is an important design consideration for these machines. In this section, the thermal management techniques used in AFPM are reviewed. Most of these techniques focus on cooling the stator windings and only limited literature reports rotor cooling techniques.

Several techniques to cool AFPM stators have been reported in literature, e.g. \[79\], \[101\], \[102\], \[103\], \[104\], \[105\]. A detailed review of AFPM thermal management techniques can be found in \[106\]. Lindh et al. in \[101\] used a specially modified Litz wire to directly cool the stator windings of a dual stator single rotor AFPM. The central conductor bunch is replaced by a coolant carrying tube and it was shown that this improved the continuous current density by 3.5 times. Rahman et al. in \[107\] used an aluminum jacket around the stator windings as shown in Fig. 8(a) to cool the stator end-windings of toroidally wound AFPM. An improvement to this technique is the direct oil cooling of the end-windings proposed in \[102\] and shown in Fig. 8(b). Experimental validation in \[102\] shows that the direct oil cooling technique can allow twice the current density in the stator windings compared to the water jacket cooling.

**Fig. 8.**

Cooling techniques for stator end-windings of torus machines \[102\]: (a) Water jacket; (b) Direct oil cooling.

Techniques to cool AFPM rotors have also been reported, e.g. \[108\], \[109\]. The use of forced air and a hollow rotor shaft with water channels was proposed in \[109\] and compared with forced air cooling and stator water jacket cooling. Although this technique can effectively cool the rotor, coolant flow through hollow rotor shaft can affect the rotor dynamics and be a concern at high speeds.

A comparison between thermal management requirements of AFPM and RFPM at different aspect ratios (ratio of outer diameter to axial length) was presented in \[110\]. Different aspect ratios of AFPM and RFPM were compared to show that the AFPM generally has lower cooling requirements than equivalent RFPM and at an aspect ratio of 0.38, the AFPM achieves approximately 26% lower temperature rise compared to an equivalent RFPM for the given application and machine ratings. Experimental results from a prototype coreless AFPM validated the analytical conclusions. These results demonstrate the relatively lower thermal management requirements for AFPM compared to identical RFPM.

Recently, new AFPM topologies such as bearingless AFPM, magnetically geared AFPM, and combined radial and axial flux machines have garnered significant research interest. These new topologies are now reviewed and opportunities are identified for further research in AFPM technology to disrupt the state of electric machinery.

### A. Bearingless AFPM

Bearingless machines integrate motor and magnetic suspension capabilities within a single structure. This integration combines the advantages of AFPM motors and those of levitation, namely no mechanical wear, no lubrication, and higher speed range, while still offering torque dense designs. Applications of these motors encompass centrifugal pumps, ventricular assist devices and artificial hearts, reaction wheels as well as flywheels \[90\]. These motors traditionally comprise separate coils for the motor and magnetic levitation, creating a trade-off in the winding space allocation. Gathering both of these functions within a combined winding (same coils used for motor and levitation) increases the torque density given that almost the entire slot space can be used for torque production during normal operation and for the suspension in emergency conditions \[111\]. Furthermore, double-sided structures are typically preferred as their axial symmetry allows the unstable attraction forces acting between the stator and the rotor in the centered position to compensate for each other \[112\].

Bearingless machines can be classified based on the number of rotor degrees of freedom (DOF) being actively regulated. Most examples of AFPM bearingless motors actively regulate axial forces (1-DOF) in addition to the motor torque, while the tilt and radial motions are stabilized with passive permanent magnet bearings or through reluctance forces. Various topologies of one-axis controlled machines have been proposed. They include double-sided slotted armature with non-salient \[112\], \[113\] and salient rotor \[114\] but also single-sided slotted \[115\] and coreless designs \[116\], \[117\]. Among them, several structures rely on a combined armature winding supplied by a single three-phase inverter to generate both the axial force and the torque \[113\], \[115\], \[116\], \[117\]. These so-called single-drive motors are therefore more compact, more energy-efficient and less expensive than classic one-axis bearingless machines.

Literature reports 2-DOF Lorentz-type bearingless motors that actively regulate the radial forces \[118\], \[119\], \[120\]. Their ironless stator structure eliminates slot harmonics as well as stator iron losses. In addition, no negative stiffness is created in the axial and tilt directions, preventing the underlying static instability. A 3-DOF single-sided slotted bearingless machine has also been proposed in \[121\] and further investigated in \[122\], \[123\]. The axial and tilt motions are regulated through currents supplied to a combined winding whereas passive reluctant forces provide radial stabilization, leading to a compact implementation. Additionally, axial-flux motors designed to actively regulate 5-DOF have been investigated. Each stator of these double-sided machines is constituted of either a single winding \[124\], \[125\] or two separate windings, one handling the axial force and drive torque production and the other one the radial and tilt forces \[126\], \[127\], \[128\].

Recent research introduced fully passively levitated bearingless machines based on an electrodynamic thrust bearing with additional coils for the torque creation \[129\]. This concept was further improved by integrating both motor function and passive axial levitation within a combined winding \[130\], \[131\]. The axial force production is achieved through electrodynamic phenomena resulting from currents induced in the windings. These machines can be operated by a three-phase inverter without any additional position sensor, power electronics or controller with respect to a conventional motor. The reliability and compactness are thus improved and the cost is reduced.

### B. Combined Radial-Axial Flux Machines

The end-windings of conventional electric machines do not contribute to the torque. The end-windings of RFPM require an axial flux path, while the end-windings of AFPM require a radial flux path for useful torque production. Combined radial-axial flux electric machine topologies are now being developed, e.g. as \[132\], \[133\], \[134\], \[135\], \[136\]. These machines use both the radial and axial flux paths for torque production, thereby improving the torque density. However, these machines are challenging to fabricate with the conventional AFPM and RFPM lamination techniques.

Jack et al. in \[132\] built and tested a combined radial-axial flux PM machine with an SMC stator. Zhou et al. in \[135\] built a combined radial-axial flux PM vernier machine shown in Fig. 9(a) for a low-speed high-torque direct-drive application. This machine showed potential to generate 1.5 times the torque of the baseline machine that it replaced.

**Fig. 9.**

Combined flux machines: (a) Cross-section of a combined flux PM vernier machine \[135\]; (b) Combined flux hysterisis machine stator \[136\].

Nasiri-Zarandi et al. built a combined radial-axial flux hysterisis machine in \[136\] using soft magnetic ferrite (Mn-Zn) for the stator core. Compared to axial flux machine of the same form factor, the combined machine had 40% higher torque capability.

### C. Magnetically Geared AFPM

Magnetically geared machines integrate the capabilities of a magnetic gear with that of an electric machine. This can result in a significant increase in torque density and multiple rotating shafts at different speeds, making this technology attractive for direct-drive and vehicle electrification applications \[84\], \[137\]. Magnetically geared axial flux machines are a new and active research space, e.g. \[9\], \[138\], \[139\]. A magnetically geared axial flux generator with a torque density of 7.8 kNm/m $^{3}$ was prototyped in \[140\] and simulation results showed that designs rated at up to 60 kNm/m $^{3}$ are realizable. Khatab et al. compared the performance of magnetically geared and conventional YASA machines in \[141\]. For the same machine volume and axial length, it was shown that the magnetically geared YASA machine achieves approximately twice the torque density of the conventional YASA machine.

### D. Research Outlook

All users of electric machines desire optimal power density, efficiency, reliability, lifetime, and cost. Research opportunity exists to alter the limits of electric machine technology in these areas by leveraging the advancements in AFPM machines reviewed in Sections III and IV in the three emerging technology variants reviewed in this section. Magnetic levitation can improve reliability, lifetime, and efficiency while enabling higher operating speeds to increase power density. The magnetically geared and the combined radial and axial flux machines show promise to significantly improve power density and cost per kW by pushing the limits of achievable torque density.

The literature reviewed in this paper reports proof of concept for these emerging technologies, but high performance and practical demonstrations at significant power scales have not yet been reported. To realize their disruptive potential, all three of the emerging variants require optimization of challenging 3D models and innovative, low-cost manufacturing techniques. Future research is needed to navigate the trade-off between torque density and force vector error and minimize drive cost in bearingless machines; enable higher rotational speeds and improve the power factor for magnetically geared machines; and develop practical and affordable geometry for efficient combined radial-axial machines.

This paper presented a review of the state of the art in modeling, analysis, and manufacturing of axial flux PM machines. Commercially available AFPM designs and prototype designs reported in research publications in the last decade (from 2013) were also reviewed. This review identified that the YASA topology is one of the most popular AFPM design variants. In addition, performance parameters were computed for the reviewed AFPM designs to show that the axial flux machine technology is more suitable to realize torque-dense designs for low to moderate speed operation compared to the radial flux machine technology. Emerging electric machine topologies that have recently garnered significant research interest were also reviewed, and a research outlook was presented. The analysis, optimization, and manufacturing techniques reviewed in this paper, along with the recent advances in manufacturing techniques such as use of improved SMCs and additive manufacturing of metals, have the potential to enable wide commercial adoption of AFPM machines. The paper further finds that if AFPM machines integrate features of magnetic levitation and magnetic gears, they can push the boundaries of reliability, rated speed, specific torque, and power density for electric machine technology.
---
title: "Modeling and Experimental Validation of Flow-Thermal-Coupled Lumped-Parameter Network for Axial-Flux Permanent-Magnet Motor With Oil-Immersed Cooling System"
source: "https://ieeexplore.ieee.org/abstract/document/11320574"
author:
published:
created: 2026-07-24
description: "With the increase of electrical load, the temperature rise in axial flux permanent magnet (AFPM) motor is gradually prominent. Excessive temperature rise direct"
tags:
  - "clippings"
---
## Abstract:

With the increase of electrical load, the temperature rise in axial flux permanent magnet (AFPM) motor is gradually prominent. Excessive temperature rise directly affects...

---

## Nomenclature

| $A$ | Cross-sectional area of the flow path. |
| --- | --- |
| $B$ | Incidence matrix. |
| ${{c}_i}$ | Specific heat capacity of motor components. |
| ${{C}_\mathbf{air}}$ | Specific heat capacity of air. |
| ${{C}_\mathbf{oil}}$ | Specific heat capacity of oil. |
| $C$ | Constant matrice. |
| $D$ | Coefficient matrice. |
| ${{D}_{\mathbf{h}}}$ | Hydraulic diameter. |
| $g$ | Gravity acceleration. |
| ${{h}_1}$ | Convective heat transfer coefficient of oil cooling. |
| ${{h}_2}$ | Convective heat transfer coefficient of the air-gap between the stator and rotor. |
| ${{h}_3}$ | Convective heat transfer coefficient of natural convection on the shell surface. |
| ${{h}_{\mathbf{w}}}$ | Energy loss between the two cross-sections of the oil. |
| $l$ | Characteristic length. |
| ${{L}_1}$ | Thickness of each layer of silicon. |
| ${{L}_2}$ | Thickness of each layer of steel. |
| ${{L}_\mathbf{motor}}$ | Axial length of the motor. |
| ${{p}_i}$ | Pressure of cooling oil at the cross-section. |
| ${{p}_\mathbf{circuit}}$ | Pressure in the circuit. |
| $Q$ | Cooling oil flow rate. |
| ${{R}_{\bm{rotor}}}$ | Average radius of the rotor. |
| ${{R}_{Air,i}}$ | Thermal resistance of air. |
| $R_{EW,i}^{x/y/z}$ | Thermal resistance of end winding in x/y/z direction. |
| ${{R}_{Oil,i}}$ | Thermal resistance of cooling oil. |
| $R_{PM,i}^{x/y/z}$ | Thermal resistance of permanent magnet in x/y/z direction. |
| $R_{RC,i}^{x/y/z}$ | Thermal resistance of rotor core in x/y/z direction. |
| $R_{S,i}^{x/y/z}$ | Thermal resistance of shell in x/y/z direction. |
| $R_{Sh,i}^{x/y/z}$ | Thermal resistance of shaft in x/y/z direction. |
| $R_{ST,i}^{x/y/z}$ | Thermal resistance of stator teeth in x/y/z direction. |
| $R_{SW,i}^{x/y.z}$ | Thermal resistance of slot winding in x/y/z direction. |
| $s$ | The contact area between the motor and fluid. |
| $S$ | Wetted perimeter. |
| ${{T}_\mathbf{Ambient}}$ | Ambient temperature. |
| ${{T}_\mathbf{Oil}}$ | Cooling oil temperature. |
| ${{u}_i}$ | Average oil velocity. |
| $U$ | External wind speed. |
| ${{v}_\mathbf{air}}$ | Air kinematic viscosity. |
| ${{v}_\mathbf{oil}}$ | Oil kinematic viscosity. |
| ${{v}_i}$ | Volume of the motor component. |
| $Z$ | Flow resistance. |
| $\xi$ | Energy loss coefficient. |
| ${{\lambda }_1}$ | Thermal conductivity of the silicon. |
| ${{\lambda }_2}$ | Thermal conductivity of the steel. |
| ${{\lambda }_\mathbf{air}}$ | Thermal conductivity of air. |
| ${{\lambda }_\mathbf{oil}}$ | Thermal conductivity of oil. |
| ${{\mu }_\mathbf{air}}$ | Air dynamic viscosity. |
| ${{\mu }_\mathbf{oil}}$ | Oil dynamic viscosity. |
| ${{\mu }_{\mathbf{w}}}$ | Surface kinetic viscosity. |
| ${{\rho }_i}$ | Density of motor components. |
| ${{\rho }_\mathbf{oil}}$ | Density of cooling oil. |
| $\omega$ | Rotational speed. |
| $\varepsilon$ | Roughness of pipe surface. |
| $Nu$ | Nusselt number. |
| $\Pr$ | Prandtl number. |
| $\text{Re}$ | Reynolds number. |

With the advantages of efficiency, intelligence, and environmental friendliness, electric vehicles have become the focus in the field of transportation \[1\]. Driven by the increasing user demand for electric vehicles, innovative drive motors are required to achieve longer endurance and higher payloads. Direct-drive axial flux permanent magnet (AFPM) motors provide an optimal solution to this problem, as they can generate higher output torque in the same volume, improving torque density and space utilization \[2\], \[3\].

The yokeless and segmented armature (YASA) motor is a special AFPM motor with single stator and dual rotors, which is characterized by high power density and compactness. In addition, concentrated flat-wire winding can effectively reduce copper consumption and improve efficiency \[4\]. However, the flat structure of YASA AFPM motor poses great challenges to heat dissipation. High temperatures will not only lead to demagnetization of PM and decrease of motor power output but also accelerate thermal aging and performance deterioration. Therefore, it is necessary to optimize the motor cooling structure to address overheating issues and extend power performance boundaries.

The cooling method of the motor can be categorized into air cooling and liquid cooling according to the working medium \[5\], \[6\], \[7\]. Despite the simple structure and low cost of air cooling, the cooling effect is far from satisfactory. Water cooling has better cooling performance than air cooling, but it has the risk of leakage. In general, oil cooling is more suitable for high power density motors due to its prominent cooling capacity. In fact, researchers have investigated various oil cooling methods for motors. In \[8\], the oil cooling channels inside the shell are designed based on the split-flow method, which reduces the channel pressure and enhances convective heat transfer efficiency. However, due to the high thermal resistance of cooling oil to motor heating components, the heat generated by the windings cannot be dissipated quickly. In \[9\], oil injection cooling is adopted to directly cool the end windings, and a method is provided to optimize the oil injection configuration. However, localized hot spots inevitably exist in the windings, resulting from the uneven spraying of cooling oil. In comparison, fully oil-immersed cooling is more advantageous in enhancing heat transfer and eliminating huge heat energy. In \[10\], oil-immersed cooling is used to directly cool the stator components. While affected by the irregular flow path inside the motor, it still has the problem of cooling oil unevenly distribution.

Thermal analysis methods of motors generally consist of computational fluid dynamics (CFD), lumped parameter model (LPM), and finite element analysis (FEA). CFD calculations can solve flow problems in complex regions with more accurate results. However, CFD solutions require huge computational resources and time. LPM has the advantages of model simplicity and computational efficiency, which are extremely useful for parametric studies and multi-objective optimization \[11\]. The function of LPM is to simulate the heat conduction between objects, which enables the prediction of the motor temperature after applying convective boundary conditions. Experts and scholars have conducted numerous studies on the application of LPM. In \[12\], based on a transverse flux permanent magnet generator for small turbines, an active component meshing model that considers localized losses is proposed. In \[13\], a three-dimensional ([3](#deqn3-deqn4) -D) lumped parameter thermal network method is proposed for an oil-cooled hairpin winding. However, these works mainly focus on the construction of thermal networks and pay less attention to convective heat transfer coefficient (CHTC) calculations, which will directly affect the accuracy of results. This problem can be solved by coupling the flow network with the thermal network. In \[14\], a direct coupling method for coupled field-circuit thermal modeling of motor is proposed. The lumped parameter thermal network and the finite element region are linked through the equivalent convection boundary and the equivalent temperature boundary. In \[15\], a coupled flow-thermal model is established for the turbine generator end region, which determines the distribution of the complex fluid velocity and temperature fields in the end region. However, in these studies, the modeling of thermal networks is severely simplified, which affects the accuracy of results. In this article, a high precision flow-thermal network is constructed with bidirectional coupling to achieve fast and accurate computation.

The contributions of this article are summarized as follows. An efficient oil-immersed cooling structure is developed. Oil baffle plates are set between the shell and the end windings, allowing cooling oil to flow through the narrow slot windings. The configuration of the oil baffle plate enhances the coverage of cooling oil and avoids localized overheating. Furthermore, flow channels are designed inside the sealing plate to enhance the cooling effect of the windings near the air-gap side. The proposed cooling system demonstrates a favorable cooling effect while ensuring the compact structure. Compared to the conventional oil-immersed cooling structure, the temperature of the stator core and windings is reduced by 15 °C and 22 °C, respectively. Under the temperature limitation of 180 °C, the motor achieves a sustainable current density of 30 A/mm <sup>2</sup>. In addition, a novel LPM is proposed. As the heat flow path of the AFPM motor is subdivided into three different directions. A 3-D lumped thermal network is modeled instead of the conventional 2-D thermal network. Besides, as the eddy current loss of the flat wire winding has a non-negligible effect on the temperature rise. Thus, for flat wire windings, thermal modeling is constructed in segments. Moreover, in order to overcome the limitations of simplified thermal or fluid analysis, a bidirectional flow-thermal coupling model is developed. Under the premise of ensuring computational accuracy, this model improves the efficiency by nearly a thousand times than CFD simulations, providing an efficient analysis tool for complex cooling systems.

The remainder of this article is organized as follows. In Section II, the electromagnetic structure of the proposed AFPM motor is described, and the electromagnetic losses are calculated and analyzed by FEA. In Section III, an efficient oil-immersed cooling structure is proposed for the AFPM motor. The oil baffle plates are utilized to plan the oil path, which increases the coverage of the cooling oil and eliminates the local hot spots, greatly improving the cooling capacity of the AFPM motor. In Section IV, coupled iterations of the flow and thermal networks are carried out to predict the temperature distribution. In Section V, the AFPM motor with a peak torque of 850 N·m is manufactured and tested. The experimental temperatures are compared and analyzed with the data from the two calculation methods mentioned above. Finally, conclusions are drawn in Section VI.

### A. Motor Topology

The topology of the AFPM motor with dual rotors and single stator is illustrated in Fig. 1. The stator core adopts YASA structure, which avoids yoke saturation and improves the motor torque density \[16\]. The fractional slot concentrated winding structure is employed in the stator, which can reduce copper consumption and effectively suppress the torque fluctuation. \[17\]. Moreover, a surface-mounted rotor structure is adopted, which is beneficial for mass-production manufacturing. The magnetic flux path of AFPM motor is presented in Fig. 2. Although a thinner yoke is added between the stator teeth, it mainly serves as mechanical support and does not participate in the magnetic circuit conduction. Therefore, the motor remains a single magnetic circuit structure. The design parameters of the AFPM motor are shown in Table I. In addition, the material of each motor component is presented in Table II.

[![Fig. 1. - AFPM motor topology.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng1-3649900-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng1-3649900-large.gif)

**Fig. 1.**

AFPM motor topology.

[![Fig. 2. - Magnetic flux path of AFPM motor.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng2-3649900-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng2-3649900-large.gif)

**Fig. 2.**

Magnetic flux path of AFPM motor.

**TABLE I** AFPM Motor Basic Parameters

[![Table I- AFPM Motor Basic Parameters](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng.t1-3649900-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng.t1-3649900-large.gif)

**TABLE II** Material of Each Component

[![Table II- Material of Each Component](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng.t2-3649900-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng.t2-3649900-large.gif)

### B. Loss Calculation

Electromagnetic loss mainly includes stator and rotor iron loss, winding copper loss, and PM eddy current loss. As the motor adopts flat-wire winding, it will not only generate direct current (DC) loss but also alternating current (AC) loss due to magnetic leakage in the slot. Therefore, the winding is internally and externally layered to reduce eddy current loss. As shown in Fig. 3, affected by the skin effect and proximity effect, the AC loss of the air-gap side slot winding is significantly larger. Thus, when designing the cooling system, emphasis should be placed on the cooling of the air-gap side winding.

[![Fig. 3. - Distribution of magnetic density and winding loss.](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng3-3649900-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng3-3649900-large.gif)

**Fig. 3.**

Distribution of magnetic density and winding loss.

There are numerous studies on motor losses, and the formulas for loss calculation are given in \[18\], \[19\]. The motor losses at rated and peak operating conditions are listed in Table III, as obtained by FEA. In general, winding losses account for a predominant proportion of motor losses. Moreover, the heat dissipation space of the windings is restricted, which inevitably leads to motor overheating and operation failures. Therefore, effective cooling structures are required to enhance heat dissipation and unlock the motor's full performance.

**TABLE III** Loss Under Rated and Peak Operating Conditions

[![Table III- Loss Under Rated and Peak Operating Conditions](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng.t3-3649900-small.gif)](https://ieeexplore.ieee.org/mediastore/IEEE/content/media/60/11534918/11320574/geng.t3-3649900-large.gif)

In this section, three different cooling methods are compared and analyzed. The most suitable cooling method is determined based on the performance of the motor under the same operating condition. On this basis, the cooling structure is further optimized to improve the heat dissipation effect.

### A. Thermal Conductivity Calculation

It is critical for temperature analysis to determine the thermal conductivity. For complex structures, thermal equivalence is required to save computational time and resources.

In order to reduce iron loss and improve material utilization, winding silicon steel is chosen for the iron core. The thermal equivalent of winding silicon steel in each direction is illustrated in Fig. 4. If the heat flow passes through the silicon and steel sequentially, it is equivalent in series. If the heat flow passes through the silicon and steel simultaneously, it is equivalent in parallel. The general formulas for thermal equivalence can be expressed respectively as

$$
\begin{align*}
&{{\lambda }_{\text{series}}} = \frac{{{{\lambda }_1}{{\lambda }_2}({{L}_1} + {{L}_2})}}{{{{\lambda }_1}{{L}_2} + {{\lambda }_1}{{L}_2}}}, \tag{1}\\
&{{\lambda }_{\text{parallel}}} = \frac{{{{\lambda }_1}{{L}_1} + {{\lambda }_2}{{L}_2}}}{{{{L}_1} + {{L}_2}}}. \tag{2}
\end{align*}
$$
 View Source

**Fig. 4.**

Equivalent principle of iron core.

The winding consists of copper and insulating varnish. It is difficult to model each turn of it sequentially. Therefore, the winding is always equivalent to a homogeneous material with anisotropic thermal conductivity. The equivalent thermal conductivity of the windings can be easily calculated from [(1)](#deqn1-deqn2) and [(2)](#deqn1-deqn2). The thermal conductivity of each component is listed in Table IV.

**TABLE IV** Thermal Conductivity of Each Component Material

### B. Different Cooling Methods Comparison

The exploded view of the motor structure is shown in Fig. 5. The stator assembly consists of the stator core, windings, and shell, while the rotor assembly includes permanent magnets, fixing, rotor core, back aluminum, shaft, and end cap. Since the electromagnetic losses of the rotor are low, it does not require dedicated cooling. In contrast, the stator needs enhanced cooling due to its high electromagnetic losses and constrained heat dissipation space.

**Fig. 5.**

Exploded view of motor structure.

The typical cooling methods of stator include forced air cooling, shell water cooling, and oil-immersed cooling. Table Ⅴ lists the typical values and characteristics of different cooling modes. Although oil cooling systems are more complex, they provide excellent cooling effect, particularly for high power density AFPM motors. To further verify the effectiveness of the oil cooling system, a comparative study on stator temperature rise under different cooling methods is carried out. Fig. 6 illustrates the structure and fluid boundary conditions for the three cooling methods. For forced air cooling, the front face of the motor serves as the air inlet with an air velocity of 12 m/s and a temperature of 35 °C. For shell water cooling, the shell is equipped with spiral waterway, and the cooling water inlet flow rate is 12 L/min, temperature is 35 °C. Similarly, for oil-immersed cooling, the velocity inlet and pressure outlet are set. The total flow rate of cooling oil at the inlet is 12 L/min, and the temperature is 35 °C.

**TABLE V** Performance of Different Cooling Modes

**Fig. 6.**

Different stator cooling methods.

To simplify the calculations, the following assumptions are made when simulating the fluid and temperature fields inside the motor:

1. To facilitate mesh generation and improve computational efficiency, the model is reasonably simplified. In the thermal model, the components such as bolts and bearings which have little influence on the temperature field are omitted.
2. Considering heat conduction and heat convection, and ignoring the effect of heat radiation on temperature.
3. Assuming that the material properties of each component are not affected by temperature and ignoring the dynamic change of material parameters with temperature.

Table VI lists the motor losses under low load condition at the current RMS value of 50 A and speed of 400 r/min. The performance of the three cooling methods is compared under this operating condition. As shown in Fig. 7 and Fig. 8, the maximum temperature of the stator core with forced air cooling is 185 °C, and the maximum temperature of the windings is 193 °C, which exceeds the thermal limit of motor. Compared to air cooling, water cooling demonstrates better heat dissipation ability. However, due to the physical isolation between the cooling water and the shell, the heat from the stator is difficult to be quickly absorbed by the cooling water. This problem can be successfully solved by oil-immersed cooling. The cooling oil can directly contact with the stator in a large area, thus promoting uniform heat conduction and enhancing the cooling effect. Therefore, from the perspective of the cooling effect, oil-immersed cooling is most suitable for the AFPM motor studied in this article.

**TABLE VI** Losses Under Low Load Operating Condition

**Fig. 7.**

Stator core temperature field distribution of different cooling methods.

**Fig. 8.**

Winding temperature field distributions of different cooling methods.

### C. Oil-immersed Cooling Structure Design

An exploded view of different stator cooling structures is displayed in Fig. 9. Scheme I is the traditional oil-immersed cooling structure. For feasibility consideration, the oil inlet and outlet are set at the same side, with oil baffle plates at the inlet and outlet to avoid oil short-circuited. Meanwhile, the stator is fully sealed by the shell and sealing plates. Nevertheless, with this scheme, the cooling oil cannot be evenly distributed. In scheme II, the problem is well solved by planning the oil circuit with the oil baffle plate. A further improvement is provided in Scheme Ⅲ, where channels are routed in the sealing plates, enhancing the heat dissipation of air-gap side winding.

**Fig. 9.**

Exploded view of different stator cooling structures.

As shown in Fig. 10, oil baffle plates are staggered between the end winding and the shell at 90 ° intervals externally and internally. These oil baffle plates block the circumferential flow of cooling oil along the shell and end winding, allowing the oil to flow through narrow slot gaps and improving the CHTC of the stator. Fig. 11 demonstrates the sealing plate structure and cooling oil flow path. As the supporting part of the stator, the sealing plate not only effectively blocks the penetration of cooling oil into the rotor side, but also integrates the cooling channels and significantly improves the heat dissipation of the windings near the air-gap side.

**Fig. 10.**

Stator cooling structure and oil circuit design.

**Fig. 11**

. Sealing plate model and oil circuit design.

### D. Fluid Field and Pressure Field Analysis

Meshing is the key to CFD simulation, and its quality directly affects the calculation speed and accuracy. As illustrated in Fig. 12, the mesh of the fluid-solid coupling model is established. Due to the high viscosity of the cooling oil, five boundary layers are applied to the fluid domain walls, inlet, and outlet to improve mesh accuracy \[8\]. Furthermore, the maximum cell length of the body mesh is limited to 10 mm, and the number of cells is about 6 million. The minimum orthogonal quality is greater than 0.15, and the maximum skewness is less than 0.85. In addition, the velocity inlet and pressure outlet are used to simulate the boundary conditions. The inlet flow rate is set to 12 L/min and the temperature is 35 °C for CFD simulation at rated operating conditions.

**Fig. 12**

. CFD analysis model with mesh elements.

The distribution of the fluid field, pressure field, and temperature field of the motor under the same operating conditions with different oil baffle plate arrangement schemes are compared in Fig. 13 ∼ Fig. 16. For clarity, the same scale is used for comparison and analysis. The cooling oil fluid field distribution of different schemes is shown in Fig. 13. After adopting the conventional cooling scheme I, it is found that most of the cooling oil flows through the gap between the end-winding and the shell. It leads to uneven distribution of cooling oil in the bottom slot, and even localized flow dead zones. In scheme II, the oil baffle plate redirects the oil path which increases the coverage of cooling oil in the slot. However, the cooling effect for the air-gap side slot winding is far from enough. Therefore, based on the above scheme, scheme III designs a novel sealing plate structure that effectively solves the problem. It is obvious that the cooling oil inside the stator is more uniform in scheme III.

**Fig. 13.**

Cooling oil fluid field distribution of different schemes.

The pressure field distribution of the cooling oil for different schemes is shown in Fig. 14. Scheme Ⅰ only uses oil baffle plates to isolate the inlet and outlet, so the pressure is relatively small. In scheme Ⅱ, oil baffle plates divide the cooling oil into eight circuits. With the increase of fluid bends, the pressure gradually increases. Similarly, the pressure in scheme Ⅲ is further increased, affected by the sealing plate oil circuit.

**Fig. 14.**

Cooling oil pressure field distribution of different schemes.

### E. Temperature Field Analysis

Temperature distributions of the stator core and winding for different schemes are presented in Figs. 15 and 16. Compared to the conventional cooling structure, the implementation of oil baffle plates and novel sealing plates has significantly reduced stator temperatures. The maximum temperature of stator core decreases from 67 °C to 52 °C. Similarly, the winding temperature decreases from 85 °C to 63 °C. Meanwhile, it is worth noting that the temperature of the air-gap side winding decreases significantly after using the novel sealing plate.

**Fig. 15.**

Stator core temperature field distribution of different schemes.

**Fig. 16.**

Winding temperature field distribution of different schemes.

CFD simulations impose high requirements on model setup and computer hardware, whereas building flow and thermal networks can quickly perform fluid field analysis and temperature prediction. Since the fluid flow and temperature distribution are mutually influenced, it is necessary to build the flow-thermal bidirectional coupling network for analysis, and the detailed flowchart is shown in Fig. 17. In addition, in view of the rapid and efficient characteristics of network calculation, the optimization of the motor cooling structure parameters is carried out.

**Fig. 17.**

Flowchart for constructing network models.

### A. Construction of Flow Network

In order to ease the difficulty of modeling the flow network, the following basic assumptions are given based on numerous studies of fluid flow in motors:

1. In the steady-state operating condition, the cooling oil in the motor flows steadily. Therefore, this flow state is regarded as constant flow, namely, the fluid flow at each position is not affected by time;
2. The cooling oil studied is considered as the one-dimensional pipe flow. Thus, the calculated flow rate is the mean value over the cross-section of each flow channel;
3. The flow rate of cooling oil is much less than the speed of sound. For this reason, it is regarded as the incompressible fluid, namely, the density is not affected by temperature and pressure, and also does not vary with changes in space and time;

Based on the above assumptions, the energy conservation equations for the cooling oil in the motor can be expressed as

$$
\begin{align*}
&\frac{1}{\rho }{{p}_1} + \frac{1}{2}u_1^2 = \frac{1}{\rho }{{p}_2} + \frac{1}{2}u_2^2 + g{{h}_{\mathrm{w}}}, \tag{3}\\
&{{h}_{\mathrm{w}}} = \xi \frac{{{{u}^2}}}{{2g}}. \tag{4}
\end{align*}
$$
 View Source

Table VII lists the formulas of several common energy loss coefficients, including frictional energy loss coefficients in straight pipe and local energy loss coefficients due to pipe changes. The frictional energy loss coefficient in straight pipes is primarily determined by the fluid flow regime and pipe roughness. While the local energy loss coefficient is mainly related to the pipe shape.

**TABLE VII** Calculation of Energy Loss Coefficient

Then, the pressure balance equations for the circuit can be expressed as

$$
\begin{align*}
{{p}_{{\text{circuit}}}} &= {{\rho }_{oil}}g{{h}_w}, \tag{5}\\
Q &= uA. \tag{6}
\end{align*}
$$
 View Source

According to [(4)](#deqn3-deqn4) ∼ [(6)](#deqn5-deqn6), it follows that

$$
\begin{equation*}
{{p}_{\text{circuit}}} = \xi \frac{{{{\rho }_{\text{oil}}}}}{{2{{A}^2}}}{{Q}^2}. \tag{7}
\end{equation*}
$$
 View Source

Defining the flow resistance as *Z*, then the pressure balance equation of the circuit can be expressed as

$$
\begin{align*}
Z &= \frac{{\xi {{\rho }_{\text{oil}}}}}{{2{{A}^2}}}, \tag{8}\\
\sum_{j = 1}^m {{{p}_{i,j}}} &= \sum_{k = 1}^n {{{Z}_{i,k}}} Q_{i,k}^2. \tag{9}
\end{align*}
$$
 View Source

Furthermore, the node flow conservation equation can be defined as

$$
\begin{equation*}
\sum_{k = 1}^n {{{Q}_k}} = 0. \tag{10}
\end{equation*}
$$
 View Source

As illustrated in Fig. 18, the equivalent flow network is modeled. Then, iterative solutions based on [(9)](#deqn8-deqn9) and [(10)](#deqn10) are performed by MATLAB to predict the flow distribution.

**Fig. 18.**

The whole motor flow network model.

To simplify the computation, the Taylor expansion of [(9)](#deqn8-deqn9) can be performed and the higher order terms can be neglected. The linear equation is expressed as

$$
\begin{equation*}
\Delta p = \Delta p\left| {_{Q = {{Q}_0}}} \right. + \frac{{\partial \left( {\Delta p} \right)}}{{\partial Q}}\left| {_{Q = {{Q}_0}}} \right.\left( {Q - {{Q}_0}} \right). \tag{11}
\end{equation*}
$$
 View Source

Therefore, the circuit pressure drop matrix generated by the whole flow network can be represented as

$$
\begin{equation*}
\Delta p = C + DQ. \tag{12}
\end{equation*}
$$
 View Source

Combining with [(10)](#deqn10), the linear matrix equation can be further formulated as

$$
\begin{equation*}
\left[ {\begin{array}{cc} B&0\\ { - D}&{{{B}^{\mathrm{T}}}} \end{array}} \right]\left[ {\begin{array}{c} Q\\ p \end{array}} \right] = \left[ {\begin{array}{c} 0\\ C \end{array}} \right]. \tag{13}
\end{equation*}
$$
 View Source

After calculating the flow velocity at each position, *h <sub>1</sub>* can be determined \[20\]. The specific calculation process can be expressed as

$$
\begin{align*}
&Re = \frac{{ul}}{{{{v}_{\text{oil}}}}}, \tag{14}\\
&Pr = \frac{{{{\mu }_{\text{oil}}}{{C}_{\text{oil}}}}}{{{{\lambda }_{\text{oil}}}}}, \tag{15}\\
&Nu = \frac{{{{h}_1}d}}{{{{\lambda }_{\text{oil}}}}} = 0.023R{{e}^{0.8}}P{{r}^{\frac{1}{3}}}{{\left(\frac{{{{\mu }_{\text{oil}}}}}{{{{\mu }_{\mathrm{w}}}}}\right)}^{0.14}}. \tag{16}
\end{align*}
$$
 View Source

For round pipes, the characteristic length is taken as the pipe diameter. For irregularly shaped pipes, we use the hydraulic diameter as the characteristic length. The calculation formula for hydraulic diameter can be defined as

$$
\begin{equation*}
{{D}_{\mathrm{h}}} = \frac{{4A}}{S}. \tag{17}
\end{equation*}
$$
 View Source

Since the ratio of air-gap length to rotor inner diameter is less than 0.02, *h <sub>2</sub>* can be calculated as 25.37 W/m <sup>2</sup> K. The specific calculation process can be expressed as

$$
\begin{align*}
&Re = \omega \frac{{R_{\text{rotor}}^{2}}}{{{{v}_{\text{air}}}}}, \tag{18}\\
&Nu = 7.46R{{e}^{0.32}}, \tag{19}\\
&{{h}_2} = Nu\frac{{{{\lambda }_{\text{air}}}}}{{{{R}_{\text{rotor}}}}}. \tag{20}
\end{align*}
$$
 View Source

Also, the *h <sub>3</sub>* is calculated as 5.39 W/m <sup>2</sup> K. The calculation process can be expressed as

$$
\begin{align*}
&Pr = \frac{{{{\mu }_{\text{air}}}{{C}_{\text{air}}}}}{{{{\lambda }_{\text{air}}}}}, \tag{21}\\
&{{h}_3} = 0.332\frac{{{{\lambda }_{\text{air}}}}}{{{{L}_{\text{motor}}}}}{{\left(\frac{{U{{L}_{\text{motor}}}}}{{{{v}_{air}}}}\right)}^{0.5}}P{{r}^{\frac{1}{3}}}. \tag{22}
\end{align*}
$$
 View Source

Furthermore, the convective heat transfer thermal resistance is defined as

$$
\begin{equation*}
R = \frac{1}{{hs}}. \tag{23}
\end{equation*}
$$
 View Source

### B. Construction of Thermal Network

The establishment of thermal network brings great convenience to the analysis of complex heat transfer processes. Thermal networks subdivide the study object into numerous nodes. The heat source, thermal resistance, and thermal capacity between nodes are respectively equivalent to current, resistance, and capacity. The thermal networks are usually categorized into 2-D thermal networks and 3-D thermal networks. The 2-D thermal network is characterized by simplicity and time-saving. However, due to the neglect of heat transfer in the axial direction, it is inevitable to occur greater errors. Therefore, it is essential to construct a 3-D thermal network model.

Fig. 19 illustrates the heat flow path and heat source distribution of the AFPM motor in different directions. In the radial direction, the heat generated by the stator teeth passes sequentially through the windings, the cooling oil, and finally to the shell. In the circumferential direction, the heat generated by the stator teeth passes through the windings and then transfers to the cooling oil. In the axial direction, the heat generated by the stator is transferred to the rotor through the air-gap and passed through the end cap to the outside. The calculation formulas of thermal resistance for basic geometries are listed in Table VIII \[21\]. The equivalent calculation of the thermal resistance for each motor component is based on these formulas. In addition, the thermal capacity is defined as

$$
\begin{equation*}
{{C}_i} = {{c}_i}{{\rho }_i}{{V}_i}. \tag{24}
\end{equation*}
$$
 View Source

**Fig. 19.**

Heat flow path and heat source distribution of motor.

**TABLE VIII** Calculation of Thermal Resistance

Assuming the heat source is uniformly distributed within the object, then the stator with double-layer windings can be modeled as illustrated in Fig. 20. As the eddy current loss in the air-gap side slot winding is much higher, the heat source is applied to slot winding in segments. It is worth noting that losses are expressed by current sources and temperatures are expressed by voltage sources. In addition, for clarity, the thermal resistance in different directions is represented by different colors in the thermal network.

**Fig. 20.**

Stator thermal network.

Previously, 2-D thermal networks with fewer and simpler components were constructed due to computational limitations. At present, thanks to the improvement in computing ability, the 3-D thermal network which is more complex and accurate can be built quickly. The detailed 3-D thermal network of the motor is shown in Fig. 21. Notably, in the 3-D thermal network, the heat flow path is constructed with XYZ coordinates based on the motor's geometric structure. Then, this 3-D thermal model is constructed in MATLAB/Simulink environment and analyzed on computer. Meanwhile, data interaction between the flow network and the thermal network is carried out to realize the bidirectional coupling of the fluid field and the temperature field.

**Fig. 21.**

The whole motor 3-D thermal network model.

### C. Calculation Results and Validation Analysis

Fig. 22 demonstrates the temperature rise curves of the windings at rated and peak operating conditions. It can be observed that the deviation between the LPM and the CFD analysis is within 5%, thus verifying the accuracy of the LPM. Furthermore, with the same computer computational power, it takes only 10 seconds to perform the calculation with the LPM, whereas CFD analysis requires about 5 hours. It demonstrates the remarkable advantages of LPM in improving computational efficiency.

**Fig. 22.**

Comparison of LPM and CFD results. (a) Rated operating condition (speed of 400 r/min, current RMS value of 70 A). (b) Peak operating condition (speed of 400 r/min, current RMS value of 140 A).

Generally, the current density of the motor with oil-cooled structure is 10 A/mm <sup>2</sup> ∼ 30 A/mm <sup>2</sup>. With the current density rise, the output torque and power of the motor increase. However, the current density is limited by the maximum temperature of the motor, which is 180 °C for windings with H-type insulation class. As presented in Fig. 23, the temperatures of the motor at different current densities are compared with the LPM. With the oil cooling structure proposed in this article, the current density can reach 30 A/mm <sup>2</sup>, which is the highest level in the range.

**Fig. 23.**

The maximum temperature by LPM at different loads.

In addition, the system parameters can be quickly analyzed with the LPM. As depicted in Fig. 24, the variation trend of winding temperature and CHTC with cooling oil parameters is easily obtained from LPM. As shown in Fig. 24(a), with a fixed inlet cross-section, the volume flow rate of the coolant increases proportionally with the increase in inlet flow rate, which enhances the convective heat transfer capability. As a result, the winding temperature decreases exponentially. When the flow rate increases from 6 L/min to 12 L/min, the motor temperature decreases significantly. However, when the flow rate is further increased from 12 L/min to 18 L/min, the rate of temperature reduction slows down. Based on the results of these analyses, we finally determine 12 L/min to be the optimal inlet flow rate. Moreover, the effect of cooling oil viscosity on the motor thermal performance is displayed in Fig. 24(b). As the viscosity increases, the fluidity of the cooling oil decreases. This reduces the contact duration between the cooling oil and the heat source, and consequently the cooling efficiency of the motor declines.

**Fig. 24.**

Effect of cooling oil parameters on winding temperature and CHTC (a) Cooling oil flow rate versus temperature and CHTC. (b) Cooling oil viscosity versus temperature and CHTC.

### A. Motor Prototype and Experimental Setup

Based on the above motor topology, a single-stator dual-rotor AFPM motor is manufactured to validate the previous analysis. It is worth noting that the installation of the oil baffle plate needs to be treated with caution, as it directly affects the cooling effect of the system. As shown in Fig. 25, oil baffle plates are stuck in the gap of the end winding and shell internally and externally in a staggered manner. Fixed adhesive is applied at the contact between the oil baffle plate and the winding to enhance the structural strength. The physical structure of the novel sealing plate is presented in Fig. 25. The surface of the sealing plate is ground and designed with sealing grooves to precisely match the shell parts, minimizing leakage risks. As illustrated in Fig. 25, thermocouples (TC) are arranged at the hot spot according to the previous thermal analysis.

**Fig. 25.**

Physical structure of stator.

The schematic diagram of the experimental platform is shown in Fig. 26. The oil cooling system includes oil tank, oil pump, heat exchanger, and flow meter. The oil in the tank is pumped out and flows into the heat exchanger. The cooled oil is regulated by the flow meter and finally enters the motor. Moreover, the temperature of the cooling oil is 35 °C, which is close to the ambient temperature. And comprehensively considering the cooling efficiency and oil pump energy consumption, the cooling oil inlet flow rate is 12 L/min. In addition to the oil cooling system, there are DC power supply, AFPM motor, prime mover, controllers, power/torque meter, and dual channel temperature monitor. The experimental test platform is displayed in Fig. 27. The AFPM motor is driven by a prime mover through the shaft to perform torque and power tests. A dual-channel temperature monitor is employed to process the TC output signal, facilitating continuous temperature monitoring and recording for the motor. The details of the motor experimental instruments are shown in Table Ⅸ.

**Fig. 26.**

Schematic representation of the experimental setup.

**Fig. 27.**

Experimental test platform.

**TABLE IX** Detail of The Experimental Instrument

### B. Experimental Results Analysis

The no-load line back electromotive force (EMF) waveform at the speed of 500 r/min is shown in Fig. 28(a). The experimental line back EMF is 215 V, and the simulated line back EMF is 221 V, which is caused by assembly error. The relationship between torque and current is depicted in Fig. 28(b). The torque increases linearly with the increase of current, and the simulation data are almost consistent with the experimental data. Moreover, the AFPM motor has a maximum torque density of 47.2 N·m/kg, which remarkably improves the traction capacity of the wheel.

**Fig. 28.**

Comparison of electromagnetic performance. (a) Line back EMF waveform. (b) Torque-current characteristic.

As presented in Fig. 29(a), the winding temperature calculated by LPM is compared with the test results when the current RMS value is 35 A and the speed is 400 r/min. The LPM and experimental results agree well with each other in terms of temperature rise trends. Fig. 29(b) shows the temperature comparison at the current RMS value of 70 A and speed of 400 r/min. It is observed that the temperature increases approximately 20 °C when the current is doubled. Furthermore, the motor takes longer time to reach thermal equilibrium. Besides, as the contact thermal resistance is neglected in the modeling of LPM, its temperature is slightly lower than the experimental temperature.

**Fig. 29.**

Comparison of temperature at rated operating conditions. (a) Speed of 400 r/min, current RMS value of 35 A. (b) Speed of 400 r/min, current RMS value of 70 A.

The temperature rise curve of the motor at high current densities is illustrated in Fig. 30. During the temperature test, the current is temporarily increased, resulting in a sudden increase in copper loss, leading to higher winding temperatures. However, the temperature rise of the AFPM motor is within 40 °C. This indicates the excellent heat dissipation performance of the oil-immersed cooling system. As listed in Table X, the errors between the experimental data and the two calculation methods are compared. The maximum error between LPM and test is within 5%, which is within the acceptable range for engineering, and verifies the accuracy of LPM calculation.

**Fig. 30.**

Comparison of temperature at peak operating conditions. (a) Speed of 400 r/min, current RMS value of 120 A. (b) Speed of 400 r/min, current RMS value of 140 A.

**TABLE X** Comparison of Winding Temperature

This article develops an in-wheel AFPM motor with an enhanced oil-immersed cooling design for electric vehicles. The temperature and fluid fields under different schemes are compared and analyzed. Moreover, a quick temperature prediction method is proposed by combining the flow network with the thermal network. Then, a 850 N·m AFPM in-wheel motor is manufactured and tested to validate the previous analysis. Research indicates that the designed cooling system provides a favorable cooling effect. Adopting oil baffle plates ensures even distribution of cooling oil and enhances the heat dissipation ability of the motor. In addition, owing to the flow channel routed in the sealing plate, the thermal performance of the air-gap side slot winding is effectively improved. The stator core temperature drops by 15 °C, and the winding temperature declines by 22 °C. For temperature field prediction and multi-objective optimization, the flow and thermal network are bidirectionally coupled. The prediction results are consistent with CFD analysis and experimental data, and the difference is within 5%. In addition, compared with CFD analysis, the LPM improves computation efficiency by one thousand times in guaranteeing the accuracy of results. However, our research mainly focuses on the design of cooling structures for AFPM motors. If it is extended to other traction motors, key parameters such as the relative positions of the stator and rotor, the layout of the cooling paths, and the distribution of heat sources need to be further adjusted. Meanwhile, its calculation and analysis process is rather complex. This is the limitation of the proposed method and also the key direction of our future research.
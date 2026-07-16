---
title: "Improvement of the internal reforming of metal-supported SOFC at low temperatures"
source: "https://www.sciencedirect.com/science/article/pii/S0360319923012661"
author:
  - "[[oxide]]"
  - "[[Shunsuke Taniguchi]]"
  - "[[Kazunari Sasaki]]"
published:
created: 2026-07-14
description: "Automotive Solid oxide fuel cells (SOFCs) require improvements in mechanical robustness, power generation at low temperatures, and system compactness.…"
tags:
  - "clippings"
---
[![Elsevier](https://www.sciencedirect.com/us-east-1/prod/21531b317eb1c8eefd555238ff6b701d209b19a9/image/elsevier-non-solus.svg)](https://www.sciencedirect.com/journal/international-journal-of-hydrogen-energy "Go to International Journal of Hydrogen Energy on ScienceDirect")

## International Journal of Hydrogen Energy

[https://doi.org/10.1016/j.ijhydene.2023.03.195](https://doi.org/10.1016/j.ijhydene.2023.03.195 "Persistent link using digital object identifier")

Full text access

## Highlights

- •
	Ru/GDC or Ni/GDC catalyst has been infiltrated to metal-supported SOFCs.
- •
	Catalyst infiltration improves hydrogen reduction reaction and internal methane reforming.
- •
	The highest performance in previous studies on metal-supported SOFCs is obtained.
- •
	Infiltrated Ni/GDC enables internal reformation using natural gas, propane and iso-octane.
- •
	Increase of the number of active sites for steam reforming is found using numerical model.

- [Next article in issue](https://www.sciencedirect.com/science/article/pii/S0360319923012892)

## Keywords

Metal-supported SOFC

Internal methane reforming

Catalyst infiltration

Iso-octane

## Introduction

Solid [oxide](https://www.sciencedirect.com/topics/materials-science/oxide-compound) fuel cells (SOFCs) are power sources that can efficiently convert the [chemical energy](https://www.sciencedirect.com/topics/engineering/chemical-energy) of hydrocarbon fuels into electricity. Over the past few decades, SOFCs have been utilized as generators in power plants and household [cogeneration systems](https://www.sciencedirect.com/topics/engineering/cogeneration-system). To reduce [carbon dioxide](https://www.sciencedirect.com/topics/chemical-engineering/carbon-dioxide) emissions, [SOFC systems](https://www.sciencedirect.com/topics/engineering/solid-oxide-fuel-cell-systems) for mobile applications such as automotives, drones, and airplanes have recently been investigated \[,,, \]. Especially for [automotive applications](https://www.sciencedirect.com/topics/engineering/automotive-application), [auxiliary](https://www.sciencedirect.com/topics/chemical-engineering/auxiliaries) power units for heavy duty trucks \[,\], range [extenders](https://www.sciencedirect.com/topics/engineering/extender) (REXs) for [battery electric vehicles](https://www.sciencedirect.com/topics/engineering/battery-electric-vehicle) (BEVs) \[,\] or electric buses \[\] have been proposed. In recent years, the electrification of automotives has been accelerated and demanded. To meet the diverse needs of users, various types of electric vehicles have been developed, including BEVs, REXs, plug-in hybrid EVs and hybrid EVs. SOFC-REXs can be one of the main options for vehicle electrification. According to AVL group \[\], development goals for SOFC-REX systems, stacks, and cells have been proposed as follows: i) system [power output](https://www.sciencedirect.com/topics/engineering/power-output) higher than 15 kW, ii) current density of cell higher than 2.0 Acm <sup>−2</sup>, iii) current density of stack higher than 0.8 Acm <sup>−2</sup> and iv) start-up periods less than 15 min.

For [driveline](https://www.sciencedirect.com/topics/engineering/driveline) system, shortening the start-up and shut-down periods and accepting load variation during rapid acceleration and braking is required. Hence, they should be resistant to thermal stress in the cell under a large [temperature distribution](https://www.sciencedirect.com/topics/chemical-engineering/temperature-distribution) or sharp temperature variation. In addition, they must be mechanically robust enough to tolerate repetitive vibrations and shock from the outside. Metal-supported SOFCs (MS-SOFCs) are preferable for addressing these requirements for dynamic operations \[\].

The general issue with automotive SOFCs is compactness. Because of the limited space in a vehicle, it should have a higher power density than that used in stationary applications. In addition, to enhance the fuel efficiency of automotives, the energy required to raise the temperature from room temperature to the operating temperature should be lowered; thus, the vehicles prefer to operate at low temperatures. Specifically, better performance is required at temperatures below 600 °C.

With recent advancements in [powder metallurgy](https://www.sciencedirect.com/topics/engineering/powder-metallurgy) and [metal fabrication](https://www.sciencedirect.com/topics/engineering/metal-fabrication) technology, new materials and [fabrication techniques](https://www.sciencedirect.com/topics/engineering/fabrication-technique) have been proposed for MS-SOFCs \[\]. Plansee developed the MS-SOFC with [cathode and anode](https://www.sciencedirect.com/topics/engineering/anodes-and-cathode) layers coated via screen printing, making it easier to control the materials and microstructure that directly affect electrochemical performance. In the previous study, a GDC anode scaffold, which has superior conductivity compared to YSZ, is introduced and the enhancement of the specific surface area and optimization of the anode thickness and microstructure have been investigated \[,, \]. In addition, efforts have been made to improve the cell performance, such as the use of LSCs with mixed electron conductivity in the cathode, which results in enhanced performance at 650 °C \[\].

SOFC-reforming techniques can be categorized into [steam reforming](https://www.sciencedirect.com/topics/engineering/steam-reforming), partial reforming, and autothermal reactions. Because of the absence of nitrogen in the anode, steam reforming is preferable for achieving a high [energy conversion efficiency](https://www.sciencedirect.com/topics/engineering/energy-conversion-efficiency). In a typical SOFC system, an external reformer converts fuel into hydrogen and [carbon monoxide](https://www.sciencedirect.com/topics/materials-science/carbon-monoxide), which are required for [power generation](https://www.sciencedirect.com/topics/engineering/power-generation). However, the reformer tends to be large because it provides sufficient active surface area for the reforming reaction. To address this issue, internal reforming technology, which integrates the reforming function into the SOFC or stack, effectively reduces the overall system volume. Conventional anode-supported SOFCs exhibit effective reformation activity for fuels with low carbon content, such as methane, because the anode substrate is rich in Ni. However, MS-SOFCs have lower reforming activity than anode-supported SOFCs because the reforming activity of [stainless steel](https://www.sciencedirect.com/topics/engineering/stainless-steel) is lower than that of Ni. Consequently, the internal reforming activity of MS-SOFCs can be improved by adding a reforming catalyst on the [anode side](https://www.sciencedirect.com/topics/engineering/anode-side). There are two methods to promote [fuel reforming](https://www.sciencedirect.com/topics/engineering/fuel-reforming) using catalysts. One process is to coat the surface of the metal support with a powder that contains the catalyst metal infiltrated or deposited on the oxide support material \[,\]. The other method is wet infiltration, which enables the catalyst metal to be deposited on the anode functional layer \[,\]. The infiltration is expected to improve the reforming performance if more active metal can be inserted near the anode functional layer, as there is more generated water near the catalyst from the power-generating reaction.

Over the last couple of decades, [internal reforming SOFCs](https://www.sciencedirect.com/topics/engineering/solid-oxide-fuel-cells-internal-reforming) have been investigated using various fuels, such as natural gas \[\], propane \[\], ethanol \[,, \], diesel \[\], gasoline, and octane \[,, \]. Because these fuels have C–C bonds, sufficient reforming activity is required. Automotive applications require significant [catalytic activity](https://www.sciencedirect.com/topics/engineering/enzymatic-activity) at low temperatures.

However, few prior MS-SOFC studies have examined their performance at temperatures below 600 °C \[,,, \]. In addition, no studies have addressed sufficient reforming conversion under large current densities at low temperatures or examined the materials and catalyst support methods required for such reactions.

In this study, we attempt to improve the internal methane reforming of MS-SOFCs loaded with active metals via wet infiltration. Plansee cells are used in this study because the cell performance is relatively high, which enables power generation at low temperatures. Furthermore, the feasibility of internal reforming at 600 °C for various fuels with higher carbon numbers is demonstrated. A numerical model is proposed, and the reaction rate of [methane steam reforming](https://www.sciencedirect.com/topics/engineering/methane-steam-reforming) is investigated to investigate the phenomena of [electrochemical reactions](https://www.sciencedirect.com/topics/materials-science/electrochemical-reaction) and reforming reactions separately.

## Experimental

### Cell fabrication

The MS-SOFCs are obtained from Plansee. The cells are fabricated using a combination of [powder metallurgy](https://www.sciencedirect.com/topics/engineering/powder-metallurgy), [ceramic processing](https://www.sciencedirect.com/topics/materials-science/ceramics-processing), and sputtering \[,,,, \]. The diameter of the MS-SOFC is 29.5 mm. The reforming catalyst is loaded onto the anode via wet infiltration. Infiltration solutions are prepared by mixing nitrates of Ni, Ru, Gd, and Ce with Triton-X 100 (Sigma Aldrich) and ultrapure water. The concentration of each solution is 1.0 × 10 <sup>−3</sup> mol m <sup>−3</sup>. After mixing these solutions via stirring, the Ni/Gd/Ce and Ru/Gd/Ce ratios are 50/10/40 mol%. The mixed solution is infiltrated into the metal support and anodes and calcined in air at 350 °C for 30 min. After repeating this infiltration process four times, the weight of infiltrated Ni/GDC and Ru/GDC are 74.0 mg and 77.7 mg, respectively. LSC (DOWA Holdings, Japan) cathode is deposited on the GDC barrier layer by screen printing and dried at 80 °C. The cathode is 50 μm thick and 9 mm in diameter.

### Characterization

The test setup is shown in. The cell is then placed in an [alumina](https://www.sciencedirect.com/topics/materials-science/aluminum-oxide) tube. The edges of the cells are sealed using Pyrex glass. A gold mesh with Pt wires is placed on the [cathode and anode](https://www.sciencedirect.com/topics/engineering/anodes-and-cathode) electrodes as the current collector. After the cell is set in the alumina tube, the temperature is ramped up from room temperature to 850 °C and dwelled for 2 h at 850 °C to sinter LSC for the cathode electrode, stabilize the infiltrated catalyst on the anode, and cure glass seal. During this heat treatment, 10% hydrogen and air are supplied to the anode and cathode, respectively. Electrochemical tests are carried out after heat treatment and hydrogen, methane, natural gas, propane, and iso-octane (Kanto Chemical, Japan) are used as fuels in this study. Natural gas, propane, and iso-octane are supplied to the anodes under the following conditions.
- (1)
	Natural gas: Commercial city gas in [Japan](https://www.sciencedirect.com/topics/engineering/japan) is desulfurized and supplied to the anode. The gas composition is as follows: 90% methane, 5% ethane, 4% propane, and 1% butane. The flow rate of the natural gas is 13 sccm, which is controlled by a mass flow controller. For [humidification](https://www.sciencedirect.com/topics/engineering/humidification), 15 sccm nitrogen passes through a bubbling tank set at 82 °C and is mixed with natural gas. Eventually, the fuel [inlet composition](https://www.sciencedirect.com/topics/engineering/inlet-composition) is 27.2% methane + 1.5% ethane + 1.2% propane + 0.3% butane + 34.9% water + 34.9% nitrogen. The steam to carbon ratio (S/C) is 1.0.
- (2)
	Propane: The flow rate of propane is 5.2 sccm. 16 sccm nitrogen is supplied to bubbling tanks at 82 °C and mixed with propane. The composition of the fuel inlet is 14% propane + 43% water + 43% nitrogen. S/C is 1.0.
- (3)
	Iso-octane: Two bubbling tanks are set to supply iso-octane and water. Nitrogen controlled at 43 sccm is bubbled into the tank filled with iso-octane at 45 °C \[\]. Simultaneously, 65 sccm of nitrogen is bubbled at 82 °C with water. By mixing the bubbled iso-octane and water with N <sub>2</sub> gas, the final inlet fuel composition is 4.5% iso-octane + 35.9% nitrogen + 59.6% water. S/C is set to 1.0 to prevent coking \[\].

![Fig. 1](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr1.jpg)

Download: Download high-res image (306KB)

I–V measurements are conducted using a potentio-galvanostat at different temperatures, fuels, gas compositions, and fuel flow rates. In the electrochemical test, voltage is swept from open circuit voltage (OCV) to 0.6 V. Electrochemical impedance is measured with a frequency response analyzer (VERSASTAT4-400, Princeton Applied Research) at OCV and [ohmic resistance](https://www.sciencedirect.com/topics/engineering/ohmic-resistance) is defined by the intersection with the real axis of the Cole-Cole plot. After the performance test, the microstructure of the infiltrated cells is observed by [field emission scanning electron microscope](https://www.sciencedirect.com/topics/engineering/field-emission-scanning-electron-microscope) (FE-SEM) using SU-8230 (HITACHI). [Scanning transmission electron microscopy](https://www.sciencedirect.com/topics/materials-science/scanning-transmission-electron-microscopy) (STEM) with energy-dispersive X-ray spectroscopy (EDX) is performed using ARM200F and JED-2300T (JEOL) to analyze the [catalyst particle](https://www.sciencedirect.com/topics/engineering/catalyst-particle) size and distribution in the anode functional layer.

## Results and discussion

### Impact on the cell performance by catalyst infiltration

(a) shows the cell performances without catalyst and with Ni/GDC, and Ru/GDC infiltration evaluated at 600 °C with hydrogen. Catalyst infiltration improves cell performance. Power densities of 1.15 Wcm <sup>−2</sup> (with Ni/GDC infiltration) and 1.37 Wcm <sup>−2</sup> (with Ru/GDC infiltration) are obtained at 0.7 V. The slope of the I–V curve in the [low current density](https://www.sciencedirect.com/topics/engineering/low-current-density) region decreases with infiltration, suggesting that the [hydrogen oxidation reaction](https://www.sciencedirect.com/topics/engineering/hydrogen-oxidation-reaction) (HOR) resistance in the anode is lowered. In addition, the cell with Ru/GDC infiltration exhibits better performance than that with Ni/GDC.

![Fig. 2](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr2.jpg)

Download: Download high-res image (411KB)

The internal reforming performance is evaluated using methane fuel ( (b)). Methane is fed at an S/C ratio of 1.0. No obvious carbon is found on the surface of the cells after the test, suggesting that infiltrated Ce might suppress carbon formation. For cells with Ni/GDC and Ru/GDC infiltration, the OCV is close to 1.0 V, whose value is close to the OCV calculated with equilibrium gas composition at 600 °C, S/C = 1.0. However, it is only 0.95 V for cells without infiltration, suggesting that the reforming activity is low. In addition, the absence of infiltration resulted in a steep voltage drop in the 0.4–0.5 Acm <sup>−2</sup> region, indicating insufficient H <sub>2</sub> and CO production by the reforming reaction. In contrast, cells with Ni/GDC or Ru/GDC infiltration demonstrate high performance, with power densities of 0.85 Wcm <sup>−2</sup> (for Ni/GDC infiltration) and 1.00 Wcm <sup>−2</sup> (for Ru/GDC infiltration) at 0.7 V. Similar to the performance with hydrogen, the performance improvement of Ru/GDC is superior to that of Ni/GDC. shows impedance spectra obtained at 600 °C with methane. Catalyst infiltration decreases reaction resistance significantly, while maintaining the [ohmic resistance](https://www.sciencedirect.com/topics/engineering/ohmic-resistance) the same value.

![Fig. 3](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr3.jpg)

Download: Download high-res image (168KB)

To investigate the performance difference between the cell with Ni/GDC infiltration and that with Ru/GDC infiltration, microstructural observation using FE-SEM and STEM-EDX is conducted. shows the cross-sections of the cells. As the microstructure is finer and has the largest surface area among the multilayer structures of the metal support and anode, the catalyst is highly concentrated in the anode functional layer, while the surface of metal support is slightly coated by the infiltrated catalyst. The [nanostructures](https://www.sciencedirect.com/topics/materials-science/nanocrystalline-material) of the anode functional layers with Ni/GDC infiltration and Ru/GDC infiltration are shown in (a) and (b). Ni, Ce, and Gd particles with a single particle size of at least 100 nm are originally used as anode Ni/GDC scaffolds. Ni particles of 10–30 nm and Ru particles with diameters of approximately 20 nm or less are deposited on the GDC scaffold. In addition, the infiltrated Ru/GDC reacted with the nickel particles that initially formed the anode scaffold of the Plansee cell to form Ni–Ru bimetallic particles. From STEM-EDX observations, the catalyst solution infiltrated the anode functional layer and [nanoparticles](https://www.sciencedirect.com/topics/chemical-engineering/nanoparticle) are deposited uniformly on the surface of the anode scaffold, which has a large specific surface area.

![Fig. 4](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr4.jpg)

Download: Download high-res image (770KB)

![Fig. 5](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr5.jpg)

Download: Download high-res image (806KB)

Regarding the relationship between cell performance and microstructure, according to Babaei et al. metal infiltration of the anode increases H <sub>2</sub> adsorption and [surface diffusion](https://www.sciencedirect.com/topics/materials-science/surface-diffusion) on the anode \[\]. Bischof reported that the effective thickness of the Ni/GDC anode functional layer of the Plansee cell is 11 μm \[\]. Because the anode functional layer has a thickness of 8 μm, the deposited catalysts should play a role in the hydrogen [oxidation](https://www.sciencedirect.com/topics/materials-science/oxidation-reaction) reaction (HOR). Therefore, electrochemical oxidation of hydrogen can be significantly enhanced by supporting an electrochemically active catalyst with a large specific surface area in the region where the anode reaction is effective. Compared to Ni/GDC infiltration, Ru/GDC infiltration significantly improves cell performance. Price reported that when the anode functional metal is Ru, the anode [charge transfer resistance](https://www.sciencedirect.com/topics/engineering/charge-transfer-resistance) is lower and more electrochemically active than when Ni is used \[\]. A similar performance enhancement is observed in the present study. In terms of correlations between cell performance and microstructure, the anode layer contains 55 μm of Ni [cermet](https://www.sciencedirect.com/topics/materials-science/cermet) before infiltration, but reformation activity at 600 °C is insufficient. [Steam reforming](https://www.sciencedirect.com/topics/engineering/steam-reforming) near the anode functional layer, where sufficient water is produced by electrochemical oxidation, might improve the internal reforming performance owing to increased metal loading and specific surface area. The presence of Ru, which readily donates electrons, facilitates the breaking of C–H bonds; hence, the reforming activity of the Ni–Ru bimetallic catalyst can be enhanced \[\].

### Internal reformation at low temperature

(a) and (b) show that the I–V and I–P performances of Ni/GDC and Ru/GDC infiltration are evaluated with hydrogen at 550–650 °C. The flow rate of hydrogen is 100 sccm. Current density with Ru/GDC infiltration at 0.7 V achieves 1.0 Acm <sup>−2</sup> at 550 °C. In this study, the cathode is composed of LSC, which has high mixed conductivity at low temperatures, and its average particle size is 0.3 μm, resulting in a high [oxygen reduction reaction](https://www.sciencedirect.com/topics/engineering/oxygen-reduction-reaction) (ORR) activity. In addition, the increased HOR active field of Ni [nanoparticles](https://www.sciencedirect.com/topics/materials-science/nanoparticle) introduced into the anode electrode by catalyst infiltration resulted in high cell performance below 600 °C. The I–V and I–P performances of Ni/GDC and Ru/GDC infiltration are evaluated using methane ((c), (d)). The power densities with Ni/GDC and Ru/GDC infiltration are higher than 0.3 Wcm <sup>−2</sup>, suggesting that catalyst infiltration can boost internal methane reformation at lower temperatures. shows the power densities of hydrogen and internal methane reforming (S/C = 1.0) at 0.7 V. Power densities with Ru/GDC infiltration at 550, 600, and 650 °C are higher than those with Ni/GDC infiltration.

Table 1. Power density of Ni/GDC and Ru/GDC infiltrated cell at 0.7 V.

<table><thead><tr><td rowspan="2" colspan="2">Empty Cell</td><th>Power density at 0.7 V [Wcm <sup>−2</sup>]</th></tr><tr><th>650 °C 600 °C 550 °C</th></tr></thead><tbody><tr><td rowspan="2">Ni/GDC infiltration</td><td>Hydrogen (3 %H <sub>2</sub> O)</td><td>1.58 1.16 0.60</td></tr><tr><td>Methane (S/C = 1.0)</td><td>1.04 0.58 0.30</td></tr><tr><td rowspan="2">Ru/GDC infiltration</td><td>Hydrogen (3 %H <sub>2</sub> O)</td><td>1.71 1.37 0.75</td></tr><tr><td>Methane (S/C = 1.0)</td><td>1.16 0.63 0.32</td></tr></tbody></table>

Udomsilp reviewed the recently reported performances of [SOFCs](https://www.sciencedirect.com/topics/materials-science/oxide-compound) and proton-conducting ceramic-electrolyte fuel cells (PCFCs), including MS-SOFCs, in terms of [power generation](https://www.sciencedirect.com/topics/engineering/power-generation) \[\]. Compared to these benchmarks, the cell performance with hydrogen in this study is the highest among MS-SOFCs reported at temperatures below 600 °C. The performance is comparable to that of ceramic-supported cells. In the evaluation of internal methane reforming (S/C = 1.0, (b)), there is no significant drop in [cell voltage](https://www.sciencedirect.com/topics/engineering/cell-voltage) even at low temperatures, where the reforming activity decreased, indicating that the reforming reaction produced sufficient H <sub>2</sub> for its consumption at the anode.

Although Takagi achieved direct methane reforming at 500 °C with a thin-film electrolyte and Ru anode \[\], cell performance in this study is comparable to their work. At 0.7 V, power densities of 0.60 (600 °C) Wcm <sup>−2</sup> and 0.32 (550 °C) Wcm <sup>−2</sup> are achieved under methane internal reforming conditions (). Therefore, even at temperatures below 600 °C, both Ni/GDC and Ru/GDC infiltrations demonstrates high cell performance and internal methane reforming.

### Internal reformation with various hydrocarbons

shows the internal reforming cell performance of the Ni/GDC infiltrated MS-SOFC with natural gas, propane, and iso-octane at a temperature of 600 °C. For all gas compositions, the OCV is greater than 0.97 V and adequate [catalytic activity](https://www.sciencedirect.com/topics/engineering/enzymatic-activity) is obtained. At a current density of approximately 0.9 Acm <sup>−2</sup>, the propane cell voltage drops significantly. Instead, natural gas and iso-octane fuels enable current sweeps of up to 1.2 Acm <sup>−2</sup>. Particularly for iso-octane, a high output of 0.64 Wcm <sup>−2</sup> is obtained at 0.7 V. As a result, MS-SOFC with catalyst nanoparticles shows sufficient reforming activity and is anticipated to be utilized in future automobile applications utilizing gasoline-based fuels.

### Validation of electrochemical reaction and steam methane reformation with numerical model

#### Numerical model

In internal reforming operations, the reforming and electrochemical reactions occur simultaneously in the cell. The numerical model is effective for analyzing these two reactions separately. Various research groups have developed [kinetic models](https://www.sciencedirect.com/topics/engineering/kinetic-model) for internal reforming \[,,,,,, \]. In recent years, several models have been proposed that consider the gas composition and energy balance in the [gas flow](https://www.sciencedirect.com/topics/engineering/gas-flow) or electrode thickness direction of the cell in addition to the conductivity and microstructural parameters of the electrode material. Our study aims to determine which parameters are affected by the presence or absence of catalyst infiltration in Sections 3.1 and 3.2. In this study, excess fuel is supplied compared with the amount required for power generation. In addition, the [temperature distribution](https://www.sciencedirect.com/topics/engineering/temperature-distribution) is controlled uniformly by an [electric furnace](https://www.sciencedirect.com/topics/engineering/electric-furnace), which is much larger than that of the button cell. Therefore, we construct a numerical model that neglects the in-plane temperature, fuel distribution, and heat exchange between the endothermic and [exothermic reactions](https://www.sciencedirect.com/topics/engineering/exothermic-reaction), which is an [isothermal](https://www.sciencedirect.com/topics/engineering/isothermal) one-dimensional model. Using this model, we investigate the effects of catalyst infiltration on the [activation energy](https://www.sciencedirect.com/topics/engineering/activation-energy) and frequency factors of the HOR reaction and the reaction rate of steam reforming.

An electrochemical model is developed to determine the [electromotive force](https://www.sciencedirect.com/topics/engineering/electromotive-force), ohmic resistance, gas diffusion resistance, ORR and HOR reaction resistance, and composition of the reformed gas obtained by steam reforming and water-gas shift.

In the numerical model, EMF is described by the Nernst equation.(1) $E M F = E_{0} + \frac{R T}{2 F} \mathit{ln} \left(\frac{p_{H 2} p_{O_{2}}^{1 / 2}}{p_{H 2 O}}\right)$

The concentration of the reactant is calculated using [Fick's law](https://www.sciencedirect.com/topics/engineering/ficks-law), considering the bulk concentration of the reactant and the [concentration gradient](https://www.sciencedirect.com/topics/engineering/concentration-gradient), which is defined by the current density. The gas diffusion resistances of the cathode and anode are expressed by Eqs.,, respectively. In this study, the gas diffusion resistances are measured by evaluating the [limiting current density](https://www.sciencedirect.com/topics/engineering/limiting-current-density) \[\].(2) $C_{O_{2}} = C_{O_{2}}^{b u l k} - \frac{i}{4 F} R_{O_{2}}^{d i f}$ (3) $C_{H_{2}} = C_{H_{2}}^{b u l k} - \frac{i}{2 F} R_{H_{2}}^{d i f}$

The HOR in the anode and ORR in the cathode are described by Butler–Volmer equations, as shown in Eqs.,,,.(4) $i = i_{0 \underline c} \frac{C_{O_{2}}}{C_{O_{2}}^{r e f}} \left[\mathit{exp} \left(\frac{\alpha_{c \underline a} n_{c} F \eta_{O R R}}{R T}\right) - \mathit{exp} \left(\frac{- \alpha_{c \underline c} n_{c} F \eta_{O R R}}{R T}\right)\right]$ (5) $i_{0 \underline c} = A_{c} p_{O_{2}}^{a \underline c} \mathit{exp} \left(\frac{- E_{i \underline c}}{R T}\right)$ (6) $i = i_{0 \underline a} \frac{C_{H_{2}}}{C_{H_{2}}^{r e f}} \left[\mathit{exp} \left(\frac{\alpha_{a \underline a} n_{a} F \eta_{H O R}}{R T}\right) - \mathit{exp} \left(\frac{- \alpha_{a \underline c} n_{a} F \eta_{H O R}}{R T}\right)\right]$ (7) $i_{0 \underline a} = A_{a} p_{H_{2}}^{a \underline a} p_{H_{2} O}^{b \underline a} \mathit{exp} \left(\frac{- E_{i \underline a}}{R T}\right)$

The ohmic resistance is calculated using Eq.. *σ* <sub><em>0</em></sub> and the [activation energy](https://www.sciencedirect.com/topics/materials-science/activation-energy) *E* are determined by impedance measurements at different temperatures.(8) $\frac{1}{R} = \sigma_{0} \mathit{exp} \left(\frac{- E}{k T}\right)$

The steam methane reformation involves multiple elementary reactions. In this study, steam reforming and the water-gas shift are considered in Eqs.,.(9)CH <sub>4</sub> + H <sub>2</sub> O = CO + H <sub>2</sub> (10)CO + H <sub>2</sub> O = CO <sub>2</sub> + H <sub>2</sub>

The methane reforming reaction rate *r* <sub><em>sr</em></sub> is defined by Eq. and the reaction rate constant, *k* <sub><em>sr</em></sub>, is expressed by Eq..(11) $r_{s r} = k_{s r} \left[C H_{4}\right]^{a} \left[H_{2} O\right]^{b}$ (12) $k_{s r} = A_{s r} \mathit{exp} \left(\frac{- E_{s r}}{R T}\right)$

The reaction rate of the water-gas shift is much higher than that of steam reforming. There is no significant difference in the results calculated in terms of [equilibrium composition](https://www.sciencedirect.com/topics/engineering/equilibrium-composition) or reaction rate \[,\]. Therefore, the water-gas shift reaction should achieve an equilibrium composition.

The [equilibrium constants](https://www.sciencedirect.com/topics/engineering/equilibrium-constant) of the water-gas shift reaction reported by Moe \[\], as shown in Eq. which is used in the numerical model.(13) $K_{w g s} = \mathit{exp} \left(\frac{4577.8}{T} - 4.33\right)$

The gas compositions obtained from steam reforming and the water-gas shift are input into an [electrochemical reaction](https://www.sciencedirect.com/topics/materials-science/electrochemical-reaction) model to determine the OCV and HOR resistance.

summarizes the calculation flowchart and equations used in the numerical model. The cathode and anode gas diffusion resistance, ORR resistance, and ohmic resistance are determined using I–V and impedance measurements with hydrogen. Then, the OCV and HOR resistances are calculated with the [reformate](https://www.sciencedirect.com/topics/engineering/reformates) gas composition. Calculations are repeated to adjust the parameters until the values from the experiment and the numerical model are equivalent. The above-mentioned calculation steps are performed on all the experimental results under different conditions to determine the parameters.

![Fig. 6](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr6.jpg)

Download: Download high-res image (561KB)

A comparison between the model and the performance testing is shown in. Parameter fitting are performed based on experimental results at temperatures of 550, 600, and 650 °C. The I–V curves correspond well with the cell performance predicted by the model at various gas compositions, flow rates, and temperatures. As the performance is correctly explained, it is concluded that the numerical model is valid.

![Fig. 7](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr7.jpg)

Download: Download high-res image (317KB)

#### Analysis of I–V performance

lists the activation energies and frequency factors of the anode electrode reactions predicted in Section 3.4.1. The activation energy and frequency factor are correlated with the ease of the HOR reaction and the number of electrode reaction sites, respectively. By infiltrating Ni/GDC and Ru/GDC, the frequency factors are greatly improved, suggesting that the deposition of nanoparticles on GDC increases the number of active sites for electrochemical reactions and hence contributes to the improvement of cell performance. Additionally, when the effect on the catalyst material is compared, Ru/GDC shows a higher frequency factor and lower activation energy, resulting in enhanced Ru performance.

Table 2. Parameter of HOR reaction defined from model fitting.

| Empty Cell | Without infiltration | Ni/GDC infiltration | Ru/GDC infiltration |
| --- | --- | --- | --- |
| A <sub>a</sub> \[x10 <sup>−5</sup>\] | 3 | 38 | 71 |
| E <sub>a</sub> \[x10 <sup>−4</sup> Jmol <sup>−1</sup>\] | 1.76 | 1.05 | 0.99 |

displays an [Arrhenius plot](https://www.sciencedirect.com/topics/engineering/arrhenius-plot) of the steam reforming reaction rate obtained by model fitting. The reaction rates with infiltration are much higher than those without infiltration because the frequency factors increase significantly. As a result, the temperature at which steam reforming occurs at the same reaction rate with Ni/GDC or Ru/GDC infiltration has decreased by 100 °C compared with the cell without infiltration. Therefore, introducing a highly dispersed catalyst increases the effective reaction area for steam reforming, which enhances internal reforming at low temperatures. As the catalytic activity is further enhanced, the cell with Ru/GDC infiltration has a lower activation energy resulting in a higher reaction rate at a low temperature. We observe that the steam reforming reaction rate of Ru/GDC at between 550 and 650 °C is higher than that of Ni/GDC, which agrees with Nielsen's work \[\].

![Fig. 8](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr8.jpg)

Download: Download high-res image (546KB)

![Fig. 9](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr9.jpg)

Download: Download high-res image (435KB)

![Fig. 10](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr10.jpg)

Download: Download high-res image (225KB)

Internal reforming of MS-SOFC at low temperatures can be achieved if active metals with a high specific surface area, such as Ni or Ru, are infiltrated on the anode scaffold. Considering the compactness and short start-up periods required for [automotive applications](https://www.sciencedirect.com/topics/engineering/automotive-application), an internal reforming operation at approximately 500 °C is a future challenge. To solve this issue, further improvement of both the reforming activity and cell performance is necessary. Regarding the reforming activity, the Arrhenius plot in shows that even when Ni/GDC or Ru/GDC is infiltrated the methane reforming reaction rate at 500 °C should be almost equivalent to that at 600 °C for cells without infiltration. Therefore, sufficient hydrogen for HOR cannot be obtained at [high current densities](https://www.sciencedirect.com/topics/engineering/high-current-density). Because increasing the specific surface area of the infiltrated catalyst contributes to the improvement of reforming activity, optimization of the heat-treatment conditions during infiltration and reduction of the diameter of the deposited [catalyst particles](https://www.sciencedirect.com/topics/engineering/catalyst-particle) is desirable. Increasing the surface area of the anode scaffold and the thickness of the active anode layer may also contribute to the improvement in the reforming activity. For cell performance, further improvement is expected by applying a [cathode material](https://www.sciencedirect.com/topics/materials-science/cathode-material) with an even higher ORR activity than that of LSC.

Long-term durability of internal reformation using MS-SOFC should be investigated in the future. Although no significant degradation is observed for the test duration of about 5 h in this study, carbon formation, catalyst coarsening or stainless oxidation in metal support may become possible degradation factors in a long-term operation. Since automotive SOFCs are operated at low temperatures, coking due to [Boudouard reaction](https://www.sciencedirect.com/topics/engineering/boudouard-reaction) is likely to occur \[\]. Application of alkali or alkaline earth elements in the anode, which could reduce surface acidity, or Ce with high oxygen storage capacity is effective to suppress coking reaction \[\]. According to Shah, catalyst particles coarsen following the power law, therefore the degradation becomes less when the temperatures get lower \[\]. Catalyst infiltration allows higher performance and power generation at lower temperatures, which would suppress increase in reaction resistance even if coarsening may occur. Since the metal support is exposed to a highly humidified fuel atmosphere during internal reforming operations, oxidation behavior of the metal support must be investigated. Pirou showed that the oxidation of Fe22Cr at 650 °C under 80%H <sub>2</sub> O/20%H <sub>2</sub> was inhibited by infiltrating GDC on the metal particle surface \[\]. Future works are needed to optimize the infiltration conditions, or to apply other [coating processes](https://www.sciencedirect.com/topics/materials-science/coating-process) such as [atomic layer deposition](https://www.sciencedirect.com/topics/engineering/atomic-layer-deposition) \[\] or Al <sub>2</sub> O <sub>3</sub> layer \[\], which can form homogeneous protection layer on the surface of metal support.

## Conclusions

Recently, automotive SOFCs have become one of the candidates to reduce [carbon dioxide](https://www.sciencedirect.com/topics/chemical-engineering/carbon-dioxide) emissions. Considering the requirements for automotive applications, such as compactness and mechanical reliability, the internal reformation of MS-SOFCs with various hydrocarbons is one of the best solutions. In this study, we develop internal reformation method for MS-SOFCs at low temperatures by catalyst infiltration. After introducing Ni/GDC [nanoparticles](https://www.sciencedirect.com/topics/chemical-engineering/nanoparticle) to the anode functional layer, power density improves to 1.16 Wcm <sup>−2</sup> (hydrogen) and 0.85 Wcm <sup>−2</sup> (methane, S/C = 1.0) at 600 °C, 0.7 V. These cell performances are the highest of all MS-SOFC studied so far. From the STEM-EDX observations, infiltrated Ni/GDC or Ru/GDC [nanoparticles](https://www.sciencedirect.com/topics/materials-science/nanoparticle) are deposited on the anode scaffold, which significantly increased the catalytic surface area. In addition, internal reforming with natural gas, propane, and iso-octane are demonstrated. Cell performance of 0.64 Wcm <sup>−2</sup> is obtained at 600 °C, 0.7 V with iso-octane. Validation using a numerical model is conducted to analyze the reforming and electrochemical reactions separately. From validation with the numerical model, catalyst infiltration should dramatically increase the number of catalytically active sites. Ru/GDC is found to be the preferred catalyst in terms of reaction rate for internally reforming SOFCs operating below 600 °C. We conclude that highly dispersed Ru/GDC will enable future automotive SOFCs.

## Declaration of competing interest

The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.

## Acknowledgements

The authors express their appreciation to Yoshinori Tanaka and Tadahiko Tokuda in Nissan Research Center for fabricating button cell. We would also like to thank Isao Yamashita and Shihomi Okabe in Sumika Chemical Analysis Service for their microstructure analysis using FE-SEM and STEM-EDX.

## Nomenclature

*A*

Frequency factor, mol s <sup>−1</sup>

*C*

Concentration, mol m <sup>−3</sup>

*E*

Activation energy, J mol <sup>−1</sup>

*F*

Faraday constant, 96,485C mol <sup>−1</sup>

*i*

Current density, A cm <sup>−2</sup>

*i* <sub><em>0</em></sub>

Exchange current density, A cm <sup>−2</sup>

*k*

Boltzmann constant, 1.380649 × 10 <sup>−23</sup> J K <sup>−1</sup>

*n*

Number of electron involved in the reaction

*p*

Pressure, Pa

*R*

Universal gas constant, 8.3145 J mol <sup>−1</sup> K <sup>−1</sup>

*R* <sub><em>dif</em></sub>

Gas transport resistance, s m <sup>−1</sup>

*T*

Temperature, K

### Greek symbols

*α*

Charge transfer coefficient in Butler–Volmer equation

*η*

Overpotential, V

*σ*

Electrical conductivity, S cm <sup>−1</sup>

### Superscripts

*bulk*

bulk

*dif*

diffusion

### Subscripts

*sr*

steam reformation

*wgs*

Water-gas shift

*a*

anode

*c*

cathode

### Abbreviations

BEV

Battery Electric Vehicle

EMF

Electro Motive Force

FE-SEM

Field Emission Scanning Electron Microscope

GDC

Gadolinium Doped Ceria

HOR

Hydrogen Oxidation Reaction

LSC

Lanthanum Strontium Cobalt oxide

MS-SOFC

Metal-Supported Solid Oxide Fuel Cell

OCV

Open-Circuit Voltage

ORR

Oxygen Reduction Reaction

PCFC

Proton-conducting Ceramic-electrolyte Fuel Cell

REX

Range EXtender

SOFC

Solid Oxide Fuel Cell

STEM-EDX

Scanning Transmission Electron Energy Dispersive X-ray Spectroscopy

YSZ

Yttria-Stabilized Zirconia

## References

- ### A review of advanced SOFCs and SOECs: Materials, innovative synthesis, functional mechanisms, and system integration
	2026, Escience
	Show abstract
- ### Reviewing metal supported solid oxide fuel cells for efficient electricity generation with biofuels for mobility
	2025, Journal of Energy Chemistry
	Show abstract
- ### Optimization of solid oxide fuel cell system integrated with biomass gasification, solar-assisted carbon capture and methane production
	2024, Journal of Cleaner Production
	Show abstract
- ### Analysis on temperature uniformity in methane-rich internal reforming solid oxide fuel cells (SOFCs)
	2024, International Journal of Hydrogen Energy
	Citation Excerpt:
	Owing to many irreplaceable advances, such as high efficiency, wide fuel adaptability and no demand for precious metal catalyst, a solid oxide fuel cell (SOFC) has a promising and competitive potential in the application of greenhouse gas reduction and green power supply, which also attracts substantial global funds and researchers for in-depth study \[1–4\]. Based on electrochemical transformation at high temperature (600–1000 °C), the efficiency of the SOFC can reach a maximum of 70 % without considering heat recovery \[5,6\]. Similar to proton exchange membrane fuel cells (PEMFCs), the core region of a SOFC has a multi-layer structure.
	Show abstract
- ### A novel model of a hydrogen production in micro reactor: Conversion reaction of methane with water vapor and catalytic
	2023, International Journal of Thermofluids
	Show abstract
- ### Effect of molybdenum addition on oxidation behavior and secondary protection mechanism of FeCrAl coatings
	2023, Materials Characterization
	Citation Excerpt:
	The metallic-based spinel oxides were synthesized by oxidation method, similar to this study. Some studies treated the Co/Mn-based spinel oxide as protective coating in metallic interconnect of SOFCs, and the thickness of which was limited to about 12.5 μm \[75–78\]. When the thickness was below the value, the spinel oxides exhibited stable thermal behavior with compatible thermal stress and expansion coefficient.
	Show abstract

[View Abstract](https://www.sciencedirect.com/science/article/abs/pii/S0360319923012661)

[^1]: ## Introduction

Solid [oxide](https://www.sciencedirect.com/topics/materials-science/oxide-compound) fuel cells (SOFCs) are power sources that can efficiently convert the [chemical energy](https://www.sciencedirect.com/topics/engineering/chemical-energy) of hydrocarbon fuels into electricity. Over the past few decades, SOFCs have been utilized as generators in power plants and household [cogeneration systems](https://www.sciencedirect.com/topics/engineering/cogeneration-system). To reduce [carbon dioxide](https://www.sciencedirect.com/topics/chemical-engineering/carbon-dioxide) emissions, [SOFC systems](https://www.sciencedirect.com/topics/engineering/solid-oxide-fuel-cell-systems) for mobile applications such as automotives, drones, and airplanes have recently been investigated \[,,, \]. Especially for [automotive applications](https://www.sciencedirect.com/topics/engineering/automotive-application), [auxiliary](https://www.sciencedirect.com/topics/chemical-engineering/auxiliaries) power units for heavy duty trucks \[,\], range [extenders](https://www.sciencedirect.com/topics/engineering/extender) (REXs) for [battery electric vehicles](https://www.sciencedirect.com/topics/engineering/battery-electric-vehicle) (BEVs) \[,\] or electric buses \[\] have been proposed. In recent years, the electrification of automotives has been accelerated and demanded. To meet the diverse needs of users, various types of electric vehicles have been developed, including BEVs, REXs, plug-in hybrid EVs and hybrid EVs. SOFC-REXs can be one of the main options for vehicle electrification. According to AVL group \[\], development goals for SOFC-REX systems, stacks, and cells have been proposed as follows: i) system [power output](https://www.sciencedirect.com/topics/engineering/power-output) higher than 15 kW, ii) current density of cell higher than 2.0 Acm <sup>−2</sup>, iii) current density of stack higher than 0.8 Acm <sup>−2</sup> and iv) start-up periods less than 15 min.

For [driveline](https://www.sciencedirect.com/topics/engineering/driveline) system, shortening the start-up and shut-down periods and accepting load variation during rapid acceleration and braking is required. Hence, they should be resistant to thermal stress in the cell under a large [temperature distribution](https://www.sciencedirect.com/topics/chemical-engineering/temperature-distribution) or sharp temperature variation. In addition, they must be mechanically robust enough to tolerate repetitive vibrations and shock from the outside. Metal-supported SOFCs (MS-SOFCs) are preferable for addressing these requirements for dynamic operations \[\].

The general issue with automotive SOFCs is compactness. Because of the limited space in a vehicle, it should have a higher power density than that used in stationary applications. In addition, to enhance the fuel efficiency of automotives, the energy required to raise the temperature from room temperature to the operating temperature should be lowered; thus, the vehicles prefer to operate at low temperatures. Specifically, better performance is required at temperatures below 600 °C.

With recent advancements in [powder metallurgy](https://www.sciencedirect.com/topics/engineering/powder-metallurgy) and [metal fabrication](https://www.sciencedirect.com/topics/engineering/metal-fabrication) technology, new materials and [fabrication techniques](https://www.sciencedirect.com/topics/engineering/fabrication-technique) have been proposed for MS-SOFCs \[\]. Plansee developed the MS-SOFC with [cathode and anode](https://www.sciencedirect.com/topics/engineering/anodes-and-cathode) layers coated via screen printing, making it easier to control the materials and microstructure that directly affect electrochemical performance. In the previous study, a GDC anode scaffold, which has superior conductivity compared to YSZ, is introduced and the enhancement of the specific surface area and optimization of the anode thickness and microstructure have been investigated \[,, \]. In addition, efforts have been made to improve the cell performance, such as the use of LSCs with mixed electron conductivity in the cathode, which results in enhanced performance at 650 °C \[\].

SOFC-reforming techniques can be categorized into [steam reforming](https://www.sciencedirect.com/topics/engineering/steam-reforming), partial reforming, and autothermal reactions. Because of the absence of nitrogen in the anode, steam reforming is preferable for achieving a high [energy conversion efficiency](https://www.sciencedirect.com/topics/engineering/energy-conversion-efficiency). In a typical SOFC system, an external reformer converts fuel into hydrogen and [carbon monoxide](https://www.sciencedirect.com/topics/materials-science/carbon-monoxide), which are required for [power generation](https://www.sciencedirect.com/topics/engineering/power-generation). However, the reformer tends to be large because it provides sufficient active surface area for the reforming reaction. To address this issue, internal reforming technology, which integrates the reforming function into the SOFC or stack, effectively reduces the overall system volume. Conventional anode-supported SOFCs exhibit effective reformation activity for fuels with low carbon content, such as methane, because the anode substrate is rich in Ni. However, MS-SOFCs have lower reforming activity than anode-supported SOFCs because the reforming activity of [stainless steel](https://www.sciencedirect.com/topics/engineering/stainless-steel) is lower than that of Ni. Consequently, the internal reforming activity of MS-SOFCs can be improved by adding a reforming catalyst on the [anode side](https://www.sciencedirect.com/topics/engineering/anode-side). There are two methods to promote [fuel reforming](https://www.sciencedirect.com/topics/engineering/fuel-reforming) using catalysts. One process is to coat the surface of the metal support with a powder that contains the catalyst metal infiltrated or deposited on the oxide support material \[,\]. The other method is wet infiltration, which enables the catalyst metal to be deposited on the anode functional layer \[,\]. The infiltration is expected to improve the reforming performance if more active metal can be inserted near the anode functional layer, as there is more generated water near the catalyst from the power-generating reaction.

Over the last couple of decades, [internal reforming SOFCs](https://www.sciencedirect.com/topics/engineering/solid-oxide-fuel-cells-internal-reforming) have been investigated using various fuels, such as natural gas \[\], propane \[\], ethanol \[,, \], diesel \[\], gasoline, and octane \[,, \]. Because these fuels have C–C bonds, sufficient reforming activity is required. Automotive applications require significant [catalytic activity](https://www.sciencedirect.com/topics/engineering/enzymatic-activity) at low temperatures.

However, few prior MS-SOFC studies have examined their performance at temperatures below 600 °C \[,,, \]. In addition, no studies have addressed sufficient reforming conversion under large current densities at low temperatures or examined the materials and catalyst support methods required for such reactions.

In this study, we attempt to improve the internal methane reforming of MS-SOFCs loaded with active metals via wet infiltration. Plansee cells are used in this study because the cell performance is relatively high, which enables power generation at low temperatures. Furthermore, the feasibility of internal reforming at 600 °C for various fuels with higher carbon numbers is demonstrated. A numerical model is proposed, and the reaction rate of [methane steam reforming](https://www.sciencedirect.com/topics/engineering/methane-steam-reforming) is investigated to investigate the phenomena of [electrochemical reactions](https://www.sciencedirect.com/topics/materials-science/electrochemical-reaction) and reforming reactions separately.

## Experimental

### Cell fabrication

The MS-SOFCs are obtained from Plansee. The cells are fabricated using a combination of [powder metallurgy](https://www.sciencedirect.com/topics/engineering/powder-metallurgy), [ceramic processing](https://www.sciencedirect.com/topics/materials-science/ceramics-processing), and sputtering \[,,,, \]. The diameter of the MS-SOFC is 29.5 mm. The reforming catalyst is loaded onto the anode via wet infiltration. Infiltration solutions are prepared by mixing nitrates of Ni, Ru, Gd, and Ce with Triton-X 100 (Sigma Aldrich) and ultrapure water. The concentration of each solution is 1.0 × 10 <sup>−3</sup> mol m <sup>−3</sup>. After mixing these solutions via stirring, the Ni/Gd/Ce and Ru/Gd/Ce ratios are 50/10/40 mol%. The mixed solution is infiltrated into the metal support and anodes and calcined in air at 350 °C for 30 min. After repeating this infiltration process four times, the weight of infiltrated Ni/GDC and Ru/GDC are 74.0 mg and 77.7 mg, respectively. LSC (DOWA Holdings, Japan) cathode is deposited on the GDC barrier layer by screen printing and dried at 80 °C. The cathode is 50 μm thick and 9 mm in diameter.

### Characterization

The test setup is shown in. The cell is then placed in an [alumina](https://www.sciencedirect.com/topics/materials-science/aluminum-oxide) tube. The edges of the cells are sealed using Pyrex glass. A gold mesh with Pt wires is placed on the [cathode and anode](https://www.sciencedirect.com/topics/engineering/anodes-and-cathode) electrodes as the current collector. After the cell is set in the alumina tube, the temperature is ramped up from room temperature to 850 °C and dwelled for 2 h at 850 °C to sinter LSC for the cathode electrode, stabilize the infiltrated catalyst on the anode, and cure glass seal. During this heat treatment, 10% hydrogen and air are supplied to the anode and cathode, respectively. Electrochemical tests are carried out after heat treatment and hydrogen, methane, natural gas, propane, and iso-octane (Kanto Chemical, Japan) are used as fuels in this study. Natural gas, propane, and iso-octane are supplied to the anodes under the following conditions.
- (1)
	Natural gas: Commercial city gas in [Japan](https://www.sciencedirect.com/topics/engineering/japan) is desulfurized and supplied to the anode. The gas composition is as follows: 90% methane, 5% ethane, 4% propane, and 1% butane. The flow rate of the natural gas is 13 sccm, which is controlled by a mass flow controller. For [humidification](https://www.sciencedirect.com/topics/engineering/humidification), 15 sccm nitrogen passes through a bubbling tank set at 82 °C and is mixed with natural gas. Eventually, the fuel [inlet composition](https://www.sciencedirect.com/topics/engineering/inlet-composition) is 27.2% methane + 1.5% ethane + 1.2% propane + 0.3% butane + 34.9% water + 34.9% nitrogen. The steam to carbon ratio (S/C) is 1.0.
- (2)
	Propane: The flow rate of propane is 5.2 sccm. 16 sccm nitrogen is supplied to bubbling tanks at 82 °C and mixed with propane. The composition of the fuel inlet is 14% propane + 43% water + 43% nitrogen. S/C is 1.0.
- (3)
	Iso-octane: Two bubbling tanks are set to supply iso-octane and water. Nitrogen controlled at 43 sccm is bubbled into the tank filled with iso-octane at 45 °C \[\]. Simultaneously, 65 sccm of nitrogen is bubbled at 82 °C with water. By mixing the bubbled iso-octane and water with N <sub>2</sub> gas, the final inlet fuel composition is 4.5% iso-octane + 35.9% nitrogen + 59.6% water. S/C is set to 1.0 to prevent coking \[\].

![Fig. 1](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr1.jpg)

Download: Download high-res image (306KB)

I–V measurements are conducted using a potentio-galvanostat at different temperatures, fuels, gas compositions, and fuel flow rates. In the electrochemical test, voltage is swept from open circuit voltage (OCV) to 0.6 V. Electrochemical impedance is measured with a frequency response analyzer (VERSASTAT4-400, Princeton Applied Research) at OCV and [ohmic resistance](https://www.sciencedirect.com/topics/engineering/ohmic-resistance) is defined by the intersection with the real axis of the Cole-Cole plot. After the performance test, the microstructure of the infiltrated cells is observed by [field emission scanning electron microscope](https://www.sciencedirect.com/topics/engineering/field-emission-scanning-electron-microscope) (FE-SEM) using SU-8230 (HITACHI). [Scanning transmission electron microscopy](https://www.sciencedirect.com/topics/materials-science/scanning-transmission-electron-microscopy) (STEM) with energy-dispersive X-ray spectroscopy (EDX) is performed using ARM200F and JED-2300T (JEOL) to analyze the [catalyst particle](https://www.sciencedirect.com/topics/engineering/catalyst-particle) size and distribution in the anode functional layer.

## Results and discussion

### Impact on the cell performance by catalyst infiltration

(a) shows the cell performances without catalyst and with Ni/GDC, and Ru/GDC infiltration evaluated at 600 °C with hydrogen. Catalyst infiltration improves cell performance. Power densities of 1.15 Wcm <sup>−2</sup> (with Ni/GDC infiltration) and 1.37 Wcm <sup>−2</sup> (with Ru/GDC infiltration) are obtained at 0.7 V. The slope of the I–V curve in the [low current density](https://www.sciencedirect.com/topics/engineering/low-current-density) region decreases with infiltration, suggesting that the [hydrogen oxidation reaction](https://www.sciencedirect.com/topics/engineering/hydrogen-oxidation-reaction) (HOR) resistance in the anode is lowered. In addition, the cell with Ru/GDC infiltration exhibits better performance than that with Ni/GDC.

![Fig. 2](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr2.jpg)

Download: Download high-res image (411KB)

The internal reforming performance is evaluated using methane fuel ( (b)). Methane is fed at an S/C ratio of 1.0. No obvious carbon is found on the surface of the cells after the test, suggesting that infiltrated Ce might suppress carbon formation. For cells with Ni/GDC and Ru/GDC infiltration, the OCV is close to 1.0 V, whose value is close to the OCV calculated with equilibrium gas composition at 600 °C, S/C = 1.0. However, it is only 0.95 V for cells without infiltration, suggesting that the reforming activity is low. In addition, the absence of infiltration resulted in a steep voltage drop in the 0.4–0.5 Acm <sup>−2</sup> region, indicating insufficient H <sub>2</sub> and CO production by the reforming reaction. In contrast, cells with Ni/GDC or Ru/GDC infiltration demonstrate high performance, with power densities of 0.85 Wcm <sup>−2</sup> (for Ni/GDC infiltration) and 1.00 Wcm <sup>−2</sup> (for Ru/GDC infiltration) at 0.7 V. Similar to the performance with hydrogen, the performance improvement of Ru/GDC is superior to that of Ni/GDC. shows impedance spectra obtained at 600 °C with methane. Catalyst infiltration decreases reaction resistance significantly, while maintaining the [ohmic resistance](https://www.sciencedirect.com/topics/engineering/ohmic-resistance) the same value.

![Fig. 3](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr3.jpg)

Download: Download high-res image (168KB)

To investigate the performance difference between the cell with Ni/GDC infiltration and that with Ru/GDC infiltration, microstructural observation using FE-SEM and STEM-EDX is conducted. shows the cross-sections of the cells. As the microstructure is finer and has the largest surface area among the multilayer structures of the metal support and anode, the catalyst is highly concentrated in the anode functional layer, while the surface of metal support is slightly coated by the infiltrated catalyst. The [nanostructures](https://www.sciencedirect.com/topics/materials-science/nanocrystalline-material) of the anode functional layers with Ni/GDC infiltration and Ru/GDC infiltration are shown in (a) and (b). Ni, Ce, and Gd particles with a single particle size of at least 100 nm are originally used as anode Ni/GDC scaffolds. Ni particles of 10–30 nm and Ru particles with diameters of approximately 20 nm or less are deposited on the GDC scaffold. In addition, the infiltrated Ru/GDC reacted with the nickel particles that initially formed the anode scaffold of the Plansee cell to form Ni–Ru bimetallic particles. From STEM-EDX observations, the catalyst solution infiltrated the anode functional layer and [nanoparticles](https://www.sciencedirect.com/topics/chemical-engineering/nanoparticle) are deposited uniformly on the surface of the anode scaffold, which has a large specific surface area.

![Fig. 4](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr4.jpg)

Download: Download high-res image (770KB)

![Fig. 5](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr5.jpg)

Download: Download high-res image (806KB)

Regarding the relationship between cell performance and microstructure, according to Babaei et al. metal infiltration of the anode increases H <sub>2</sub> adsorption and [surface diffusion](https://www.sciencedirect.com/topics/materials-science/surface-diffusion) on the anode \[\]. Bischof reported that the effective thickness of the Ni/GDC anode functional layer of the Plansee cell is 11 μm \[\]. Because the anode functional layer has a thickness of 8 μm, the deposited catalysts should play a role in the hydrogen [oxidation](https://www.sciencedirect.com/topics/materials-science/oxidation-reaction) reaction (HOR). Therefore, electrochemical oxidation of hydrogen can be significantly enhanced by supporting an electrochemically active catalyst with a large specific surface area in the region where the anode reaction is effective. Compared to Ni/GDC infiltration, Ru/GDC infiltration significantly improves cell performance. Price reported that when the anode functional metal is Ru, the anode [charge transfer resistance](https://www.sciencedirect.com/topics/engineering/charge-transfer-resistance) is lower and more electrochemically active than when Ni is used \[\]. A similar performance enhancement is observed in the present study. In terms of correlations between cell performance and microstructure, the anode layer contains 55 μm of Ni [cermet](https://www.sciencedirect.com/topics/materials-science/cermet) before infiltration, but reformation activity at 600 °C is insufficient. [Steam reforming](https://www.sciencedirect.com/topics/engineering/steam-reforming) near the anode functional layer, where sufficient water is produced by electrochemical oxidation, might improve the internal reforming performance owing to increased metal loading and specific surface area. The presence of Ru, which readily donates electrons, facilitates the breaking of C–H bonds; hence, the reforming activity of the Ni–Ru bimetallic catalyst can be enhanced \[\].

### Internal reformation at low temperature

(a) and (b) show that the I–V and I–P performances of Ni/GDC and Ru/GDC infiltration are evaluated with hydrogen at 550–650 °C. The flow rate of hydrogen is 100 sccm. Current density with Ru/GDC infiltration at 0.7 V achieves 1.0 Acm <sup>−2</sup> at 550 °C. In this study, the cathode is composed of LSC, which has high mixed conductivity at low temperatures, and its average particle size is 0.3 μm, resulting in a high [oxygen reduction reaction](https://www.sciencedirect.com/topics/engineering/oxygen-reduction-reaction) (ORR) activity. In addition, the increased HOR active field of Ni [nanoparticles](https://www.sciencedirect.com/topics/materials-science/nanoparticle) introduced into the anode electrode by catalyst infiltration resulted in high cell performance below 600 °C. The I–V and I–P performances of Ni/GDC and Ru/GDC infiltration are evaluated using methane ((c), (d)). The power densities with Ni/GDC and Ru/GDC infiltration are higher than 0.3 Wcm <sup>−2</sup>, suggesting that catalyst infiltration can boost internal methane reformation at lower temperatures. shows the power densities of hydrogen and internal methane reforming (S/C = 1.0) at 0.7 V. Power densities with Ru/GDC infiltration at 550, 600, and 650 °C are higher than those with Ni/GDC infiltration.

Table 1. Power density of Ni/GDC and Ru/GDC infiltrated cell at 0.7 V.

<table><thead><tr><td rowspan="2" colspan="2">Empty Cell</td><th>Power density at 0.7 V [Wcm <sup>−2</sup>]</th></tr><tr><th>650 °C 600 °C 550 °C</th></tr></thead><tbody><tr><td rowspan="2">Ni/GDC infiltration</td><td>Hydrogen (3 %H <sub>2</sub> O)</td><td>1.58 1.16 0.60</td></tr><tr><td>Methane (S/C = 1.0)</td><td>1.04 0.58 0.30</td></tr><tr><td rowspan="2">Ru/GDC infiltration</td><td>Hydrogen (3 %H <sub>2</sub> O)</td><td>1.71 1.37 0.75</td></tr><tr><td>Methane (S/C = 1.0)</td><td>1.16 0.63 0.32</td></tr></tbody></table>

Udomsilp reviewed the recently reported performances of [SOFCs](https://www.sciencedirect.com/topics/materials-science/oxide-compound) and proton-conducting ceramic-electrolyte fuel cells (PCFCs), including MS-SOFCs, in terms of [power generation](https://www.sciencedirect.com/topics/engineering/power-generation) \[\]. Compared to these benchmarks, the cell performance with hydrogen in this study is the highest among MS-SOFCs reported at temperatures below 600 °C. The performance is comparable to that of ceramic-supported cells. In the evaluation of internal methane reforming (S/C = 1.0, (b)), there is no significant drop in [cell voltage](https://www.sciencedirect.com/topics/engineering/cell-voltage) even at low temperatures, where the reforming activity decreased, indicating that the reforming reaction produced sufficient H <sub>2</sub> for its consumption at the anode.

Although Takagi achieved direct methane reforming at 500 °C with a thin-film electrolyte and Ru anode \[\], cell performance in this study is comparable to their work. At 0.7 V, power densities of 0.60 (600 °C) Wcm <sup>−2</sup> and 0.32 (550 °C) Wcm <sup>−2</sup> are achieved under methane internal reforming conditions (). Therefore, even at temperatures below 600 °C, both Ni/GDC and Ru/GDC infiltrations demonstrates high cell performance and internal methane reforming.

### Internal reformation with various hydrocarbons

shows the internal reforming cell performance of the Ni/GDC infiltrated MS-SOFC with natural gas, propane, and iso-octane at a temperature of 600 °C. For all gas compositions, the OCV is greater than 0.97 V and adequate [catalytic activity](https://www.sciencedirect.com/topics/engineering/enzymatic-activity) is obtained. At a current density of approximately 0.9 Acm <sup>−2</sup>, the propane cell voltage drops significantly. Instead, natural gas and iso-octane fuels enable current sweeps of up to 1.2 Acm <sup>−2</sup>. Particularly for iso-octane, a high output of 0.64 Wcm <sup>−2</sup> is obtained at 0.7 V. As a result, MS-SOFC with catalyst nanoparticles shows sufficient reforming activity and is anticipated to be utilized in future automobile applications utilizing gasoline-based fuels.

### Validation of electrochemical reaction and steam methane reformation with numerical model

#### Numerical model

In internal reforming operations, the reforming and electrochemical reactions occur simultaneously in the cell. The numerical model is effective for analyzing these two reactions separately. Various research groups have developed [kinetic models](https://www.sciencedirect.com/topics/engineering/kinetic-model) for internal reforming \[,,,,,, \]. In recent years, several models have been proposed that consider the gas composition and energy balance in the [gas flow](https://www.sciencedirect.com/topics/engineering/gas-flow) or electrode thickness direction of the cell in addition to the conductivity and microstructural parameters of the electrode material. Our study aims to determine which parameters are affected by the presence or absence of catalyst infiltration in Sections 3.1 and 3.2. In this study, excess fuel is supplied compared with the amount required for power generation. In addition, the [temperature distribution](https://www.sciencedirect.com/topics/engineering/temperature-distribution) is controlled uniformly by an [electric furnace](https://www.sciencedirect.com/topics/engineering/electric-furnace), which is much larger than that of the button cell. Therefore, we construct a numerical model that neglects the in-plane temperature, fuel distribution, and heat exchange between the endothermic and [exothermic reactions](https://www.sciencedirect.com/topics/engineering/exothermic-reaction), which is an [isothermal](https://www.sciencedirect.com/topics/engineering/isothermal) one-dimensional model. Using this model, we investigate the effects of catalyst infiltration on the [activation energy](https://www.sciencedirect.com/topics/engineering/activation-energy) and frequency factors of the HOR reaction and the reaction rate of steam reforming.

An electrochemical model is developed to determine the [electromotive force](https://www.sciencedirect.com/topics/engineering/electromotive-force), ohmic resistance, gas diffusion resistance, ORR and HOR reaction resistance, and composition of the reformed gas obtained by steam reforming and water-gas shift.

In the numerical model, EMF is described by the Nernst equation.(1) $E M F = E_{0} + \frac{R T}{2 F} \mathit{ln} \left(\frac{p_{H 2} p_{O_{2}}^{1 / 2}}{p_{H 2 O}}\right)$

The concentration of the reactant is calculated using [Fick's law](https://www.sciencedirect.com/topics/engineering/ficks-law), considering the bulk concentration of the reactant and the [concentration gradient](https://www.sciencedirect.com/topics/engineering/concentration-gradient), which is defined by the current density. The gas diffusion resistances of the cathode and anode are expressed by Eqs.,, respectively. In this study, the gas diffusion resistances are measured by evaluating the [limiting current density](https://www.sciencedirect.com/topics/engineering/limiting-current-density) \[\].(2) $C_{O_{2}} = C_{O_{2}}^{b u l k} - \frac{i}{4 F} R_{O_{2}}^{d i f}$ (3) $C_{H_{2}} = C_{H_{2}}^{b u l k} - \frac{i}{2 F} R_{H_{2}}^{d i f}$

The HOR in the anode and ORR in the cathode are described by Butler–Volmer equations, as shown in Eqs.,,,.(4) $i = i_{0 \underline c} \frac{C_{O_{2}}}{C_{O_{2}}^{r e f}} \left[\mathit{exp} \left(\frac{\alpha_{c \underline a} n_{c} F \eta_{O R R}}{R T}\right) - \mathit{exp} \left(\frac{- \alpha_{c \underline c} n_{c} F \eta_{O R R}}{R T}\right)\right]$ (5) $i_{0 \underline c} = A_{c} p_{O_{2}}^{a \underline c} \mathit{exp} \left(\frac{- E_{i \underline c}}{R T}\right)$ (6) $i = i_{0 \underline a} \frac{C_{H_{2}}}{C_{H_{2}}^{r e f}} \left[\mathit{exp} \left(\frac{\alpha_{a \underline a} n_{a} F \eta_{H O R}}{R T}\right) - \mathit{exp} \left(\frac{- \alpha_{a \underline c} n_{a} F \eta_{H O R}}{R T}\right)\right]$ (7) $i_{0 \underline a} = A_{a} p_{H_{2}}^{a \underline a} p_{H_{2} O}^{b \underline a} \mathit{exp} \left(\frac{- E_{i \underline a}}{R T}\right)$

The ohmic resistance is calculated using Eq.. *σ* <sub><em>0</em></sub> and the [activation energy](https://www.sciencedirect.com/topics/materials-science/activation-energy) *E* are determined by impedance measurements at different temperatures.(8) $\frac{1}{R} = \sigma_{0} \mathit{exp} \left(\frac{- E}{k T}\right)$

The steam methane reformation involves multiple elementary reactions. In this study, steam reforming and the water-gas shift are considered in Eqs.,.(9)CH <sub>4</sub> + H <sub>2</sub> O = CO + H <sub>2</sub> (10)CO + H <sub>2</sub> O = CO <sub>2</sub> + H <sub>2</sub>

The methane reforming reaction rate *r* <sub><em>sr</em></sub> is defined by Eq. and the reaction rate constant, *k* <sub><em>sr</em></sub>, is expressed by Eq..(11) $r_{s r} = k_{s r} \left[C H_{4}\right]^{a} \left[H_{2} O\right]^{b}$ (12) $k_{s r} = A_{s r} \mathit{exp} \left(\frac{- E_{s r}}{R T}\right)$

The reaction rate of the water-gas shift is much higher than that of steam reforming. There is no significant difference in the results calculated in terms of [equilibrium composition](https://www.sciencedirect.com/topics/engineering/equilibrium-composition) or reaction rate \[,\]. Therefore, the water-gas shift reaction should achieve an equilibrium composition.

The [equilibrium constants](https://www.sciencedirect.com/topics/engineering/equilibrium-constant) of the water-gas shift reaction reported by Moe \[\], as shown in Eq. which is used in the numerical model.(13) $K_{w g s} = \mathit{exp} \left(\frac{4577.8}{T} - 4.33\right)$

The gas compositions obtained from steam reforming and the water-gas shift are input into an [electrochemical reaction](https://www.sciencedirect.com/topics/materials-science/electrochemical-reaction) model to determine the OCV and HOR resistance.

summarizes the calculation flowchart and equations used in the numerical model. The cathode and anode gas diffusion resistance, ORR resistance, and ohmic resistance are determined using I–V and impedance measurements with hydrogen. Then, the OCV and HOR resistances are calculated with the [reformate](https://www.sciencedirect.com/topics/engineering/reformates) gas composition. Calculations are repeated to adjust the parameters until the values from the experiment and the numerical model are equivalent. The above-mentioned calculation steps are performed on all the experimental results under different conditions to determine the parameters.

![Fig. 6](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr6.jpg)

Download: Download high-res image (561KB)

A comparison between the model and the performance testing is shown in. Parameter fitting are performed based on experimental results at temperatures of 550, 600, and 650 °C. The I–V curves correspond well with the cell performance predicted by the model at various gas compositions, flow rates, and temperatures. As the performance is correctly explained, it is concluded that the numerical model is valid.

![Fig. 7](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr7.jpg)

Download: Download high-res image (317KB)

#### Analysis of I–V performance

lists the activation energies and frequency factors of the anode electrode reactions predicted in Section 3.4.1. The activation energy and frequency factor are correlated with the ease of the HOR reaction and the number of electrode reaction sites, respectively. By infiltrating Ni/GDC and Ru/GDC, the frequency factors are greatly improved, suggesting that the deposition of nanoparticles on GDC increases the number of active sites for electrochemical reactions and hence contributes to the improvement of cell performance. Additionally, when the effect on the catalyst material is compared, Ru/GDC shows a higher frequency factor and lower activation energy, resulting in enhanced Ru performance.

Table 2. Parameter of HOR reaction defined from model fitting.

| Empty Cell | Without infiltration | Ni/GDC infiltration | Ru/GDC infiltration |
| --- | --- | --- | --- |
| A <sub>a</sub> \[x10 <sup>−5</sup>\] | 3 | 38 | 71 |
| E <sub>a</sub> \[x10 <sup>−4</sup> Jmol <sup>−1</sup>\] | 1.76 | 1.05 | 0.99 |

displays an [Arrhenius plot](https://www.sciencedirect.com/topics/engineering/arrhenius-plot) of the steam reforming reaction rate obtained by model fitting. The reaction rates with infiltration are much higher than those without infiltration because the frequency factors increase significantly. As a result, the temperature at which steam reforming occurs at the same reaction rate with Ni/GDC or Ru/GDC infiltration has decreased by 100 °C compared with the cell without infiltration. Therefore, introducing a highly dispersed catalyst increases the effective reaction area for steam reforming, which enhances internal reforming at low temperatures. As the catalytic activity is further enhanced, the cell with Ru/GDC infiltration has a lower activation energy resulting in a higher reaction rate at a low temperature. We observe that the steam reforming reaction rate of Ru/GDC at between 550 and 650 °C is higher than that of Ni/GDC, which agrees with Nielsen's work \[\].

![Fig. 8](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr8.jpg)

Download: Download high-res image (546KB)

![Fig. 9](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr9.jpg)

Download: Download high-res image (435KB)

![Fig. 10](https://ars.els-cdn.com/content/image/1-s2.0-S0360319923012661-gr10.jpg)

Download: Download high-res image (225KB)

Internal reforming of MS-SOFC at low temperatures can be achieved if active metals with a high specific surface area, such as Ni or Ru, are infiltrated on the anode scaffold. Considering the compactness and short start-up periods required for [automotive applications](https://www.sciencedirect.com/topics/engineering/automotive-application), an internal reforming operation at approximately 500 °C is a future challenge. To solve this issue, further improvement of both the reforming activity and cell performance is necessary. Regarding the reforming activity, the Arrhenius plot in shows that even when Ni/GDC or Ru/GDC is infiltrated the methane reforming reaction rate at 500 °C should be almost equivalent to that at 600 °C for cells without infiltration. Therefore, sufficient hydrogen for HOR cannot be obtained at [high current densities](https://www.sciencedirect.com/topics/engineering/high-current-density). Because increasing the specific surface area of the infiltrated catalyst contributes to the improvement of reforming activity, optimization of the heat-treatment conditions during infiltration and reduction of the diameter of the deposited [catalyst particles](https://www.sciencedirect.com/topics/engineering/catalyst-particle) is desirable. Increasing the surface area of the anode scaffold and the thickness of the active anode layer may also contribute to the improvement in the reforming activity. For cell performance, further improvement is expected by applying a [cathode material](https://www.sciencedirect.com/topics/materials-science/cathode-material) with an even higher ORR activity than that of LSC.

Long-term durability of internal reformation using MS-SOFC should be investigated in the future. Although no significant degradation is observed for the test duration of about 5 h in this study, carbon formation, catalyst coarsening or stainless oxidation in metal support may become possible degradation factors in a long-term operation. Since automotive SOFCs are operated at low temperatures, coking due to [Boudouard reaction](https://www.sciencedirect.com/topics/engineering/boudouard-reaction) is likely to occur \[\]. Application of alkali or alkaline earth elements in the anode, which could reduce surface acidity, or Ce with high oxygen storage capacity is effective to suppress coking reaction \[\]. According to Shah, catalyst particles coarsen following the power law, therefore the degradation becomes less when the temperatures get lower \[\]. Catalyst infiltration allows higher performance and power generation at lower temperatures, which would suppress increase in reaction resistance even if coarsening may occur. Since the metal support is exposed to a highly humidified fuel atmosphere during internal reforming operations, oxidation behavior of the metal support must be investigated. Pirou showed that the oxidation of Fe22Cr at 650 °C under 80%H <sub>2</sub> O/20%H <sub>2</sub> was inhibited by infiltrating GDC on the metal particle surface \[\]. Future works are needed to optimize the infiltration conditions, or to apply other [coating processes](https://www.sciencedirect.com/topics/materials-science/coating-process) such as [atomic layer deposition](https://www.sciencedirect.com/topics/engineering/atomic-layer-deposition) \[\] or Al <sub>2</sub> O <sub>3</sub> layer \[\], which can form homogeneous protection layer on the surface of metal support.

## Conclusions

Recently, automotive SOFCs have become one of the candidates to reduce [carbon dioxide](https://www.sciencedirect.com/topics/chemical-engineering/carbon-dioxide) emissions. Considering the requirements for automotive applications, such as compactness and mechanical reliability, the internal reformation of MS-SOFCs with various hydrocarbons is one of the best solutions. In this study, we develop internal reformation method for MS-SOFCs at low temperatures by catalyst infiltration. After introducing Ni/GDC [nanoparticles](https://www.sciencedirect.com/topics/chemical-engineering/nanoparticle) to the anode functional layer, power density improves to 1.16 Wcm <sup>−2</sup> (hydrogen) and 0.85 Wcm <sup>−2</sup> (methane, S/C = 1.0) at 600 °C, 0.7 V. These cell performances are the highest of all MS-SOFC studied so far. From the STEM-EDX observations, infiltrated Ni/GDC or Ru/GDC [nanoparticles](https://www.sciencedirect.com/topics/materials-science/nanoparticle) are deposited on the anode scaffold, which significantly increased the catalytic surface area. In addition, internal reforming with natural gas, propane, and iso-octane are demonstrated. Cell performance of 0.64 Wcm <sup>−2</sup> is obtained at 600 °C, 0.7 V with iso-octane. Validation using a numerical model is conducted to analyze the reforming and electrochemical reactions separately. From validation with the numerical model, catalyst infiltration should dramatically increase the number of catalytically active sites. Ru/GDC is found to be the preferred catalyst in terms of reaction rate for internally reforming SOFCs operating below 600 °C. We conclude that highly dispersed Ru/GDC will enable future automotive SOFCs.

[^2]: (3)

Iso-octane: Two bubbling tanks are set to supply iso-octane and water. Nitrogen controlled at 43 sccm is bubbled into the tank filled with iso-octane at 45 °C \[\]. Simultaneously, 65 sccm of nitrogen is bubbled at 82 °C with water. By mixing the bubbled iso-octane and water with N <sub>2</sub> gas, the final inlet fuel composition is 4.5% iso-octane + 35.9% nitrogen + 59.6% water. S/C is set to 1.0 to prevent coking \[\].
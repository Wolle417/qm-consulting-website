# ANALYTICAL METHOD VALIDATION PROTOCOL
## HPLC Method for Assay and Impurities
## Fampridin (4-Aminopyridine)

---

**Document Number:** AMV-HPLC-001  
**Version:** 1.0  
**Effective Date:** 04. Dezember 2025  
**Protocol Status:** Draft for Approval  

---

**Product:** Fampridin (4-Aminopyridine)  
**CAS Number:** 504-24-5  
**Method:** HPLC (High-Performance Liquid Chromatography)  
**Purpose:** Assay (Purity) and Related Substances (Impurities)  

---

**Prepared by:** QC Manager  
**Reviewed by:** QA Manager, Validation Manager  
**Approved by:** Management Representative  

---

## DOCUMENT CONTROL

| Version | Date | Author | Description of Changes |
|---------|------|--------|------------------------|
| 1.0 | 04.12.2025 | QC Department | Initial Protocol |

---

## TABLE OF CONTENTS

1. Objective
2. Scope
3. Responsibilities
4. Product Description
5. Analytical Method Description
6. Validation Parameters (ICH Q2(R1))
7. Equipment and Materials
8. Validation Procedures
9. Acceptance Criteria
10. Data Recording and Evaluation
11. Conclusion and Approval
12. Appendices
13. References

---

## 1. OBJECTIVE

The objective of this Analytical Method Validation Protocol is to demonstrate that the **HPLC method for determination of Assay (purity) and Related Substances (impurities)** in Fampridin API is **suitable for its intended purpose** and provides reliable, accurate, and reproducible results.

**Regulatory Basis:**
- ICH Q2(R1): Validation of Analytical Procedures: Text and Methodology
- ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients
- EU GMP Annex 15: Qualification and Validation

---

## 2. SCOPE

### 2.1 INCLUDED IN SCOPE

**This protocol covers validation of the HPLC method for:**
1. **Assay (Content):** Quantitative determination of Fampridin content (%)
2. **Related Substances (Impurities):** Identification and quantification of impurities (%)

**Validation Parameters (per ICH Q2(R1)):**
- Specificity
- Linearity
- Accuracy
- Precision (Repeatability and Intermediate Precision)
- Range
- Detection Limit (LOD)
- Quantitation Limit (LOQ)
- Robustness

### 2.2 EXCLUDED FROM SCOPE

- HPLC instrument qualification (covered separately: IQ/OQ/PQ-HPLC-01)
- System suitability tests (defined but not validated here)
- Method transfer to other laboratories

**Prerequisite:** HPLC instrument must be qualified (IQ/OQ/PQ completed) before method validation begins.

---

## 3. RESPONSIBILITIES

### 3.1 QC MANAGER
- Prepare and finalize this protocol
- Ensure HPLC instrument is qualified and calibrated
- Coordinate validation activities
- Compile and analyze validation data
- Prepare Analytical Method Validation Report (AMVR-HPLC-001)

### 3.2 QC ANALYSTS
- Prepare samples and standards
- Execute validation experiments per protocol
- Record all data accurately (ALCOA+ principles)
- Report any deviations immediately

### 3.3 QA MANAGER
- Review and approve this protocol
- Review validation data and report
- Approve method for routine use

### 3.4 VALIDATION MANAGER
- Review protocol and report
- Ensure compliance with validation master plan (MVP-001)

---

## 4. PRODUCT DESCRIPTION

**Product Name:** Fampridin (INN)  
**Chemical Name:** 4-Aminopyridine  
**Molecular Formula:** C₅H₆N₂  
**Molecular Weight:** 94.11 g/mol  
**CAS Number:** 504-24-5  

**Chemical Structure:**
```
        NH₂
         |
    N — C — C
    |       |
    C — C — C
        |
        H
```
(Pyridine ring with amino group at position 4)

**Appearance:** White to off-white crystalline powder  
**Solubility:** Freely soluble in water, soluble in ethanol  

**Specification (Relevant to this Method):**
- **Assay:** 99.0 - 101.0% (on anhydrous basis)
- **Impurities:** Any single impurity ≤0.10%, Total impurities ≤0.50%

---

## 5. ANALYTICAL METHOD DESCRIPTION

### 5.1 PRINCIPLE

**Method:** Reversed-Phase High-Performance Liquid Chromatography (RP-HPLC)  
**Detection:** UV detection at 254 nm  

**Assay (Content):**
- Quantitative determination of Fampridin by comparing peak area of sample to reference standard

**Related Substances (Impurities):**
- Detection and quantification of impurities by peak area relative to Fampridin main peak

### 5.2 CHROMATOGRAPHIC CONDITIONS

| Parameter | Specification |
|-----------|---------------|
| **Column** | C18, 250 mm × 4.6 mm, 5 µm particle size (e.g., Waters Symmetry C18) |
| **Mobile Phase** | **A:** 0.1% Phosphoric acid in water<br>**B:** Acetonitrile<br>**Gradient:** (see Table 5.2.1) |
| **Flow Rate** | 1.0 mL/min |
| **Column Temperature** | 25°C |
| **Injection Volume** | 10 µL |
| **Detection** | UV at 254 nm |
| **Run Time** | 30 minutes |

**Table 5.2.1: Gradient Profile**

| Time (min) | % Mobile Phase A | % Mobile Phase B |
|------------|------------------|------------------|
| 0 | 95 | 5 |
| 5 | 95 | 5 |
| 20 | 60 | 40 |
| 25 | 60 | 40 |
| 26 | 95 | 5 |
| 30 | 95 | 5 |

### 5.3 SAMPLE PREPARATION

**Assay:**
- Accurately weigh approximately 25 mg of Fampridin API
- Transfer to 50 mL volumetric flask
- Dissolve in mobile phase A, dilute to volume
- **Sample Concentration:** 0.5 mg/mL

**Related Substances:**
- Accurately weigh approximately 50 mg of Fampridin API
- Transfer to 50 mL volumetric flask
- Dissolve in mobile phase A, dilute to volume
- **Sample Concentration:** 1.0 mg/mL

**Standard Preparation:**
- Fampridin Reference Standard (≥99.5% purity)
- Prepare at same concentration as sample

### 5.4 SYSTEM SUITABILITY REQUIREMENTS

**Before each analytical run, the system must meet the following criteria:**

| Parameter | Acceptance Criteria |
|-----------|---------------------|
| **Tailing Factor** | ≤2.0 for Fampridin peak |
| **Theoretical Plates (N)** | ≥2000 for Fampridin peak |
| **Repeatability (RSD)** | ≤2.0% for 5 replicate injections of standard |
| **Resolution** | ≥2.0 between Fampridin and closest impurity (if present) |

**If system suitability fails:** Investigate and correct before proceeding with sample analysis.

---

## 6. VALIDATION PARAMETERS (ICH Q2(R1))

### 6.1 SPECIFICITY

**Definition:** Ability to assess unequivocally the analyte in the presence of components that may be expected to be present (e.g., impurities, degradation products, matrix components).

**Objective:** Demonstrate that the method can separate Fampridin from impurities, degradation products, and excipients (if applicable).

**Procedure:**
1. **Blank:** Inject mobile phase (no peak at Fampridin retention time)
2. **Placebo:** (If applicable for formulation; for API: not applicable)
3. **Reference Standard:** Inject Fampridin reference standard (main peak identified)
4. **Sample:** Inject Fampridin API sample
5. **Stressed Samples (Forced Degradation):**
   - **Acid stress:** 1N HCl, 80°C, 2 hours
   - **Base stress:** 1N NaOH, 80°C, 2 hours
   - **Oxidative stress:** 3% H₂O₂, room temperature, 24 hours
   - **Thermal stress:** 80°C, 24 hours (solid state)
   - **Photolytic stress:** UV light, 24 hours

**Acceptance Criteria:**
- Fampridin peak is well-separated from impurities and degradation products (Resolution ≥2.0)
- No interference at Fampridin retention time in blank
- Stressed samples show degradation products separated from main peak

---

### 6.2 LINEARITY

**Definition:** Ability of the method to obtain test results directly proportional to concentration of analyte.

**Objective:** Demonstrate linear relationship between peak area and concentration over the specified range.

**Procedure:**
1. Prepare **6 concentration levels** of Fampridin reference standard:
   - **Level 1:** 50% of target concentration (0.25 mg/mL for Assay)
   - **Level 2:** 70%
   - **Level 3:** 80%
   - **Level 4:** 100% (target: 0.5 mg/mL)
   - **Level 5:** 120%
   - **Level 6:** 150%

2. Inject each level in duplicate
3. Plot peak area (Y-axis) vs. concentration (X-axis)
4. Calculate linear regression:
   - Slope
   - Y-intercept
   - Correlation coefficient (R²)

**Acceptance Criteria:**
- **Correlation coefficient (R²):** ≥0.999
- **Y-intercept:** Should be close to zero (within ±2% of response at 100%)
- Visual inspection: Data points fit the regression line

---

### 6.3 ACCURACY (RECOVERY)

**Definition:** Closeness of test result to the true value.

**Objective:** Demonstrate that the method can accurately determine the known amount of Fampridin.

**Procedure:**
1. **Spiking:** Add known amounts of Fampridin reference standard to placebo or pre-analyzed sample
2. Prepare **3 concentration levels** (in triplicate each = 9 determinations):
   - **Level 1:** 80% of specification (e.g., 0.4 mg/mL)
   - **Level 2:** 100% (0.5 mg/mL)
   - **Level 3:** 120% (0.6 mg/mL)

3. Analyze each sample
4. Calculate % Recovery:
   ```
   % Recovery = (Amount Found / Amount Added) × 100
   ```

**Acceptance Criteria:**
- **Mean Recovery:** 98.0 - 102.0% at each level
- **RSD:** ≤2.0% at each level

---

### 6.4 PRECISION

**Definition:** Degree of agreement among individual test results when the method is applied repeatedly.

#### 6.4.1 REPEATABILITY (INTRA-DAY PRECISION)

**Objective:** Demonstrate precision under the same operating conditions over a short time interval.

**Procedure:**
1. Prepare **6 independent sample preparations** at 100% target concentration (0.5 mg/mL)
2. Analyze all samples on the **same day, same instrument, same analyst**
3. Calculate:
   - Mean
   - Standard Deviation (SD)
   - Relative Standard Deviation (RSD%)

**Acceptance Criteria:**
- **RSD:** ≤2.0%

---

#### 6.4.2 INTERMEDIATE PRECISION (INTER-DAY PRECISION)

**Objective:** Demonstrate precision under varied conditions (different days, analysts, equipment).

**Procedure:**
1. Prepare **6 independent sample preparations** at 100% target concentration
2. Analyze samples on:
   - **Day 2** (different day)
   - **Different analyst** (if possible)
   - **Same or different HPLC instrument** (if available)
3. Calculate RSD for combined data (Day 1 + Day 2 = 12 determinations)

**Acceptance Criteria:**
- **RSD (combined):** ≤2.5%

---

### 6.5 RANGE

**Definition:** Interval between upper and lower concentration levels for which the method has been demonstrated to have suitable precision, accuracy, and linearity.

**Objective:** Establish the concentration range over which the method is validated.

**Range:**
- **For Assay:** 80-120% of target concentration (0.4 - 0.6 mg/mL)
- **For Impurities:** LOQ to 150% of specification limit (e.g., LOQ to 0.15% if specification is 0.10%)

**Verification:**
Range is verified through:
- Linearity (Section 6.2): 50-150%
- Accuracy (Section 6.3): 80-120%
- Precision (Section 6.4): 100%

**Acceptance Criteria:**
- Linearity, Accuracy, Precision meet acceptance criteria across the defined range

---

### 6.6 DETECTION LIMIT (LOD)

**Definition:** Lowest concentration of analyte that can be detected, but not necessarily quantified.

**Objective:** Determine LOD for impurities.

**Procedure:**

**Method 1: Signal-to-Noise Ratio (Preferred)**
1. Prepare dilute solutions of Fampridin (e.g., 0.01, 0.005, 0.001 mg/mL)
2. Inject and measure signal-to-noise (S/N) ratio
3. LOD = concentration where S/N ≥ 3:1

**Method 2: Based on Standard Deviation of Response and Slope**
```
LOD = 3.3 × (SD / Slope)
```
Where:
- SD = Standard deviation of Y-intercept from linearity study
- Slope = Slope of linearity curve

**Acceptance Criteria:**
- **LOD:** Typically 0.02-0.05% (relative to sample concentration of 1.0 mg/mL)

---

### 6.7 QUANTITATION LIMIT (LOQ)

**Definition:** Lowest concentration of analyte that can be quantitatively determined with suitable precision and accuracy.

**Objective:** Determine LOQ for impurities.

**Procedure:**

**Method 1: Signal-to-Noise Ratio (Preferred)**
1. Prepare dilute solutions of Fampridin
2. Inject and measure S/N ratio
3. LOQ = concentration where S/N ≥ 10:1

**Method 2: Based on Standard Deviation of Response and Slope**
```
LOQ = 10 × (SD / Slope)
```

**Verification:**
- Prepare 6 replicates at LOQ concentration
- Calculate RSD
- **RSD should be ≤10%**

**Acceptance Criteria:**
- **LOQ:** Typically 0.05-0.10% (relative to sample concentration of 1.0 mg/mL)
- **RSD at LOQ:** ≤10%

---

### 6.8 ROBUSTNESS

**Definition:** Capacity of the method to remain unaffected by small but deliberate variations in method parameters.

**Objective:** Demonstrate method is robust to minor variations in operating conditions.

**Procedure:**

Test the following parameter variations:

| Parameter | Normal Condition | Variation 1 | Variation 2 |
|-----------|------------------|-------------|-------------|
| **Flow Rate** | 1.0 mL/min | 0.9 mL/min | 1.1 mL/min |
| **Column Temperature** | 25°C | 23°C | 27°C |
| **pH of Mobile Phase A** | pH 2.5 (0.1% H₃PO₄) | pH 2.3 | pH 2.7 |
| **Detector Wavelength** | 254 nm | 252 nm | 256 nm |

**Procedure:**
1. Prepare Fampridin sample at 100% concentration (0.5 mg/mL)
2. Analyze under normal conditions (reference)
3. Analyze with one parameter varied (keep others constant)
4. Compare results (Assay %, Resolution, Tailing Factor)

**Acceptance Criteria:**
- **Assay difference:** ≤2.0% from reference
- **Resolution:** ≥2.0 maintained
- **Tailing Factor:** ≤2.0 maintained
- System suitability criteria still met

---

## 7. EQUIPMENT AND MATERIALS

### 7.1 EQUIPMENT

| Equipment | Model/Specification | Qualification Status |
|-----------|---------------------|----------------------|
| **HPLC System** | [e.g., Agilent 1260 Infinity II] | Qualified (IQ/OQ/PQ-HPLC-01) |
| **Detector** | UV-Vis, variable wavelength | Part of HPLC qualification |
| **Column** | C18, 250 × 4.6 mm, 5 µm | Performance verified (System Suitability) |
| **Analytical Balance** | Readability 0.01 mg | Calibrated (CAL-BAL-001) |
| **Volumetric Flasks** | Class A, 50 mL, 100 mL | Calibrated/verified |
| **Micropipettes** | 10-100 µL, 100-1000 µL | Calibrated |

### 7.2 MATERIALS

**Reference Standards:**
- **Fampridin Reference Standard:** CAS 504-24-5, Purity ≥99.5% (Certificate of Analysis on file)
- Supplier: [e.g., European Pharmacopoeia Reference Standard]

**Reagents:**
- Acetonitrile (HPLC grade, ≥99.9%)
- Phosphoric Acid (≥85%, analytical grade)
- Purified Water (Ph. Eur., Conductivity ≤1.3 µS/cm)

**Stressed Sample Preparation:**
- Hydrochloric Acid (1N)
- Sodium Hydroxide (1N)
- Hydrogen Peroxide (3%)

---

## 8. VALIDATION PROCEDURES

### 8.1 SPECIFICITY (Section 6.1)

**Step 1: Blank Injection**
- Prepare mobile phase (no sample)
- Inject
- **Record:** No peak at Fampridin retention time (~12 min)

**Step 2: Reference Standard**
- Prepare Fampridin reference standard (0.5 mg/mL)
- Inject
- **Record:** Retention time, peak area

**Step 3: Sample**
- Prepare Fampridin API sample (0.5 mg/mL)
- Inject
- **Record:** Retention time, peak area, impurity peaks (if any)

**Step 4: Forced Degradation Studies**
- Prepare stressed samples:
  - **Acid:** Fampridin + 1N HCl, 80°C, 2h → neutralize, dilute
  - **Base:** Fampridin + 1N NaOH, 80°C, 2h → neutralize, dilute
  - **Oxidative:** Fampridin + 3% H₂O₂, RT, 24h → dilute
  - **Thermal:** Fampridin solid, 80°C, 24h → dissolve, dilute
  - **Photolytic:** Fampridin solid, UV light, 24h → dissolve, dilute
- Inject each stressed sample
- **Record:** Chromatograms, degradation peaks, resolution

**Data Recording:** Appendix A, Table A1

---

### 8.2 LINEARITY (Section 6.2)

**Step 1: Prepare Linearity Standards**
- Prepare 6 concentrations (50%, 70%, 80%, 100%, 120%, 150% of 0.5 mg/mL)
- Inject each in duplicate

**Step 2: Plot and Calculate**
- Plot Peak Area (Y) vs. Concentration (X)
- Calculate linear regression (R², slope, Y-intercept)

**Data Recording:** Appendix A, Table A2

---

### 8.3 ACCURACY (Section 6.3)

**Step 1: Spiking**
- Prepare spiked samples at 80%, 100%, 120% (triplicate each)
- Known amount added, measure amount found

**Step 2: Calculate Recovery**
```
% Recovery = (Amount Found / Amount Added) × 100
```

**Data Recording:** Appendix A, Table A3

---

### 8.4 REPEATABILITY (Section 6.4.1)

**Step 1: Prepare 6 Independent Samples**
- Weigh 6 separate samples (~25 mg each)
- Dilute to 50 mL (0.5 mg/mL)

**Step 2: Analyze on Same Day**
- Inject all 6 samples
- Calculate Assay (%) for each

**Step 3: Calculate Statistics**
- Mean, SD, RSD%

**Data Recording:** Appendix A, Table A4

---

### 8.5 INTERMEDIATE PRECISION (Section 6.4.2)

**Step 1: Repeat Repeatability on Different Day**
- Different day, different analyst (if possible)
- Prepare 6 new samples

**Step 2: Combine Data**
- Combine Day 1 + Day 2 (12 determinations total)
- Calculate combined RSD%

**Data Recording:** Appendix A, Table A5

---

### 8.6 LOD / LOQ (Sections 6.6 & 6.7)

**Step 1: Prepare Dilute Solutions**
- Dilute Fampridin to 0.01, 0.005, 0.002, 0.001 mg/mL

**Step 2: Inject and Measure S/N**
- Identify LOD (S/N ≥ 3) and LOQ (S/N ≥ 10)

**Step 3: Verify LOQ Precision**
- Prepare 6 replicates at LOQ
- Calculate RSD (should be ≤10%)

**Data Recording:** Appendix A, Table A6

---

### 8.7 ROBUSTNESS (Section 6.8)

**Step 1: Establish Reference Conditions**
- Analyze sample under normal conditions
- Record Assay, Resolution, Tailing Factor

**Step 2: Vary Parameters One at a Time**
- Flow Rate: 0.9 and 1.1 mL/min
- Temperature: 23°C and 27°C
- pH: 2.3 and 2.7
- Wavelength: 252 and 256 nm

**Step 3: Compare Results**
- Calculate % difference from reference

**Data Recording:** Appendix A, Table A7

---

## 9. ACCEPTANCE CRITERIA

**Summary of Acceptance Criteria (per ICH Q2(R1)):**

| Validation Parameter | Acceptance Criteria |
|----------------------|---------------------|
| **Specificity** | Fampridin peak separated from impurities (Resolution ≥2.0)<br>No interference at Fampridin RT in blank |
| **Linearity** | R² ≥0.999 over range 50-150% |
| **Accuracy** | Mean Recovery: 98.0-102.0% at each level (80%, 100%, 120%)<br>RSD ≤2.0% |
| **Repeatability** | RSD ≤2.0% (n=6) |
| **Intermediate Precision** | RSD ≤2.5% (n=12) |
| **Range** | 80-120% of target concentration validated |
| **LOD** | S/N ≥ 3 (typically 0.02-0.05%) |
| **LOQ** | S/N ≥ 10 (typically 0.05-0.10%)<br>RSD at LOQ ≤10% |
| **Robustness** | Assay difference ≤2.0% from reference<br>Resolution ≥2.0, Tailing ≤2.0 maintained |

---

## 10. DATA RECORDING AND EVALUATION

### 10.1 DATA RECORDING

**All validation data must be recorded in:**
- Appendix A: Data Tables (completed during validation execution)
- Raw chromatograms (printed or saved electronically)
- HPLC system audit trail (21 CFR Part 11 compliant, if applicable)

**Data Integrity (ALCOA+):**
- **Attributable:** Analyst signature and date
- **Legible:** Clear, readable entries
- **Contemporaneous:** Recorded at time of activity
- **Original:** First recording (or certified true copy)
- **Accurate:** Error-free, verified

### 10.2 DATA EVALUATION

**After all validation experiments are completed:**
1. Validation Manager and QC Manager review all data
2. Verify all acceptance criteria are met
3. Investigate any Out-of-Specification (OOS) results
4. Prepare Analytical Method Validation Report (AMVR-HPLC-001)

---

## 11. CONCLUSION AND APPROVAL

### 11.1 VALIDATION REPORT

**After validation is complete, the Analytical Method Validation Report (AMVR-HPLC-001) will include:**
- Summary of results for each validation parameter
- Statistical evaluation
- Deviations (if any) and impact assessment
- Conclusion: **Method is validated** or **Additional testing required**
- Recommendations (e.g., method improvements, revalidation triggers)

### 11.2 APPROVAL

**The method is validated when:**
- All acceptance criteria met (Section 9)
- Validation report approved by:
  - QC Manager
  - QA Manager
  - Validation Manager

**After approval:**
- Method can be used for routine testing of Fampridin API
- Method documented in SOP (e.g., SOP-HPLC-FAM-001)
- Included in API specification (SPEC-FAM-001)

---

## 12. APPENDICES

### APPENDIX A: DATA RECORDING TABLES

**(To be completed during validation execution)**

#### TABLE A1: SPECIFICITY

| Sample | Retention Time (min) | Peak Area | Resolution (from nearest peak) | Comments |
|--------|----------------------|-----------|--------------------------------|----------|
| Blank | N/A | 0 | N/A | No peak at Fampridin RT |
| Reference Standard | | | N/A | |
| Sample (Unstressed) | | | | |
| Acid Stressed | | | | Degradation peaks: |
| Base Stressed | | | | Degradation peaks: |
| Oxidative Stressed | | | | Degradation peaks: |
| Thermal Stressed | | | | Degradation peaks: |
| Photolytic Stressed | | | | Degradation peaks: |

**Conclusion:** Specificity Pass/Fail: ________

---

#### TABLE A2: LINEARITY

| Level | Concentration (mg/mL) | Injection 1 (Peak Area) | Injection 2 (Peak Area) | Mean Peak Area |
|-------|----------------------|------------------------|------------------------|----------------|
| 1 (50%) | 0.25 | | | |
| 2 (70%) | 0.35 | | | |
| 3 (80%) | 0.40 | | | |
| 4 (100%) | 0.50 | | | |
| 5 (120%) | 0.60 | | | |
| 6 (150%) | 0.75 | | | |

**Linear Regression:**
- Slope: __________
- Y-intercept: __________
- Correlation Coefficient (R²): __________

**Conclusion:** Linearity Pass/Fail: ________

---

#### TABLE A3: ACCURACY (RECOVERY)

| Level | Amount Added (mg) | Amount Found (mg) | % Recovery | Mean Recovery (%) | RSD (%) |
|-------|-------------------|-------------------|------------|-------------------|---------|
| 80% - Rep 1 | | | | | |
| 80% - Rep 2 | | | | | |
| 80% - Rep 3 | | | | [Mean] | [RSD] |
| 100% - Rep 1 | | | | | |
| 100% - Rep 2 | | | | | |
| 100% - Rep 3 | | | | [Mean] | [RSD] |
| 120% - Rep 1 | | | | | |
| 120% - Rep 2 | | | | | |
| 120% - Rep 3 | | | | [Mean] | [RSD] |

**Conclusion:** Accuracy Pass/Fail: ________

---

#### TABLE A4: REPEATABILITY (PRECISION)

| Sample | Assay (%) |
|--------|-----------|
| Rep 1 | |
| Rep 2 | |
| Rep 3 | |
| Rep 4 | |
| Rep 5 | |
| Rep 6 | |
| **Mean** | |
| **SD** | |
| **RSD (%)** | |

**Conclusion:** Repeatability Pass/Fail: ________

---

#### TABLE A5: INTERMEDIATE PRECISION

| Sample | Day 1 Assay (%) | Day 2 Assay (%) |
|--------|-----------------|-----------------|
| Rep 1 | | |
| Rep 2 | | |
| Rep 3 | | |
| Rep 4 | | |
| Rep 5 | | |
| Rep 6 | | |

**Combined Statistics (n=12):**
- Mean: __________
- SD: __________
- RSD (%): __________

**Conclusion:** Intermediate Precision Pass/Fail: ________

---

#### TABLE A6: LOD / LOQ

| Concentration (mg/mL) | Signal-to-Noise (S/N) | LOD or LOQ? |
|----------------------|------------------------|-------------|
| 0.001 | | |
| 0.002 | | |
| 0.005 | | |
| 0.01 | | |

**LOD (S/N ≥ 3):** __________ mg/mL (__________ %)

**LOQ (S/N ≥ 10):** __________ mg/mL (__________ %)

**LOQ Precision Verification (6 replicates at LOQ):**
- Mean: __________
- RSD: __________ % (Acceptance: ≤10%)

**Conclusion:** LOD/LOQ Pass/Fail: ________

---

#### TABLE A7: ROBUSTNESS

| Parameter Varied | Condition | Assay (%) | Resolution | Tailing Factor | Pass/Fail |
|------------------|-----------|-----------|------------|----------------|-----------|
| **Reference** | Normal | | | | Reference |
| Flow Rate | 0.9 mL/min | | | | |
| Flow Rate | 1.1 mL/min | | | | |
| Temperature | 23°C | | | | |
| Temperature | 27°C | | | | |
| pH | 2.3 | | | | |
| pH | 2.7 | | | | |
| Wavelength | 252 nm | | | | |
| Wavelength | 256 nm | | | | |

**Conclusion:** Robustness Pass/Fail: ________

---

### APPENDIX B: EXAMPLE CHROMATOGRAM

**(To be attached after validation execution)**
- Representative chromatogram of Fampridin reference standard
- Representative chromatogram of Fampridin sample
- Chromatograms of stressed samples (forced degradation)

---

### APPENDIX C: ABBREVIATIONS

- ALCOA: Attributable, Legible, Contemporaneous, Original, Accurate
- HPLC: High-Performance Liquid Chromatography
- ICH: International Council for Harmonisation
- IQ: Installation Qualification
- LOD: Limit of Detection
- LOQ: Limit of Quantitation
- OOS: Out-of-Specification
- OQ: Operational Qualification
- PQ: Performance Qualification
- QA: Quality Assurance
- QC: Quality Control
- RSD: Relative Standard Deviation
- RT: Retention Time
- SD: Standard Deviation
- S/N: Signal-to-Noise Ratio
- SOP: Standard Operating Procedure
- UV: Ultraviolet

---

## 13. REFERENCES

**Regulatory Guidelines:**
- ICH Q2(R1): Validation of Analytical Procedures: Text and Methodology
- ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients
- EU GMP Annex 15: Qualification and Validation
- USP General Chapter <1225>: Validation of Compendial Procedures
- Ph. Eur. General Chapter 2.2.46: Chromatographic Separation Techniques

**Internal Documents:**
- QM-001: Quality Manual
- MVP-001: Master Validation Plan
- SPEC-FAM-001: Specification – Fampridin API
- IQ/OQ/PQ-HPLC-01: HPLC Instrument Qualification

---

## REVISION HISTORY

| Version | Date | Author | Description of Changes | Approved By |
|---------|------|--------|------------------------|-------------|
| 1.0 | 04.12.2025 | QC Department | Initial Protocol | [Pending Approval] |

---

## APPROVAL SIGNATURES

**Prepared by:**  
[Name, Title: QC Manager]  
Signature: ________________  
Date: __________

**Reviewed by:**  
[Name, Title: QA Manager]  
Signature: ________________  
Date: __________

**Reviewed by:**  
[Name, Title: Validation Manager]  
Signature: ________________  
Date: __________

**Approved by:**  
[Name, Title: Management Representative]  
Signature: ________________  
Date: __________

---

**END OF ANALYTICAL METHOD VALIDATION PROTOCOL**

**Protocol Status:** Draft – Pending Approval  
**Effective Date:** Upon approval and signature  
**Supersedes:** N/A (New document)

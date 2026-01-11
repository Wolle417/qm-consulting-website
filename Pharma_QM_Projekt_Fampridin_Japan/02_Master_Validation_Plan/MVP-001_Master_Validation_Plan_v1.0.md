# MASTER VALIDATION PLAN
## API Production Facility

**Beispiel-Implementierung für Fampridin-Produktion und Japan-Export**

---

**Document Number:** MVP-001  
**Version:** 1.0  
**Effective Date:** 04. Dezember 2025  
**Review Date:** 04. Dezember 2026  

---

**Prepared by:** Validation Manager  
**Reviewed by:** QA Manager, Production Manager, QC Manager  
**Approved by:** Management Representative  

---

## DOCUMENT CONTROL

| Version | Date | Author | Description of Changes |
|---------|------|--------|------------------------|
| 1.0 | 04.12.2025 | Validation Department | Initial Release |

---

## TABLE OF CONTENTS

1. Introduction and Scope
2. Validation Policy
3. Regulatory Basis
4. Organizational Responsibilities
5. Validation Strategy and Approach
6. Validation Life Cycle
7. Equipment and Utilities Qualification
8. Process Validation
9. Cleaning Validation
10. Analytical Method Validation
11. Computer System Validation
12. Validation Documentation
13. Revalidation and Change Control
14. Training
15. Validation Schedule
16. Appendices

---

## 1. INTRODUCTION AND SCOPE

### 1.1 PURPOSE

This Master Validation Plan (MVP) provides a comprehensive overview of the validation strategy and activities for the API manufacturing facility. The plan ensures that all critical systems, equipment, processes, and methods are validated in accordance with:

- ICH Q7: Good Manufacturing Practice for Active Pharmaceutical Ingredients
- EU GMP Annex 15: Qualification and Validation
- ICH Q11: Development and Manufacture of Drug Substances
- ICH Q9: Quality Risk Management
- ISPE Baseline Guides

### 1.2 SCOPE

**This plan covers validation activities for:**

**Facility and Utilities:**
- HVAC system (Heating, Ventilation, Air Conditioning)
- Water system (Purified Water)
- Compressed air system
- Clean steam system (if applicable)
- Cleanroom classification

**Equipment:**
- Production reactors and vessels
- Filtration equipment
- Drying equipment
- Milling equipment
- Packaging equipment

**Analytical Instruments:**
- HPLC systems
- GC systems
- Spectroscopy equipment (IR, UV, NMR, MS)
- Karl Fischer titrators
- Balances
- pH meters

**Processes:**
- Manufacturing process for API (example: Fampridin synthesis)
- Packaging process

**Cleaning:**
- Cleaning procedures for equipment

**Analytical Methods:**
- Identity, assay, impurity methods
- Dissolution, content uniformity (if applicable)
- Microbiological methods

**Computer Systems:**
- Laboratory Information Management System (LIMS)
- Manufacturing Execution System (MES) (if applicable)
- Electronic Batch Records (if applicable)
- Instrument control software

### 1.3 SITE INFORMATION

**Facility:** [Manufacturing Site Name]  
**Address:** [Site Address]  
**GMP License:** [License Number]  
**Scope of Operations:** Manufacture of Active Pharmaceutical Ingredients (APIs) for pharmaceutical use

**Example Product Scope:**
This validation plan is demonstrated using **Fampridin (4-Aminopyridine)** as a representative API. The validation principles and approach are applicable to all APIs manufactured at this site.

---

## 2. VALIDATION POLICY

### 2.1 POLICY STATEMENT

**"All critical equipment, systems, processes, and analytical methods used in the manufacture, testing, and release of Active Pharmaceutical Ingredients will be validated to demonstrate that they consistently perform as intended and produce products meeting predetermined specifications and quality attributes."**

**Key Principles:**
- Validation is a GMP requirement, not optional
- Validation is performed before routine production (prospective validation)
- All validation activities are documented and approved by QA
- Revalidation is performed when changes occur or periodically as defined
- Quality Risk Management (ICH Q9) guides validation efforts

**Signed:**  
[Management Representative]  
Date: 04.12.2025

---

## 3. REGULATORY BASIS

This Master Validation Plan is aligned with the following regulatory guidelines:

**International (ICH):**
- ICH Q7: Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients
- ICH Q11: Development and Manufacture of Drug Substances
- ICH Q9: Quality Risk Management
- ICH Q2(R1): Validation of Analytical Procedures

**Regional:**
- EU GMP Annex 15: Qualification and Validation
- US FDA Guidance: Process Validation (2011)
- PMDA Guidelines (Japan)

**Standards:**
- ISPE Baseline Guide Volume 5: Commissioning and Qualification
- PDA Technical Reports (as applicable)

---

## 4. ORGANIZATIONAL RESPONSIBILITIES

### 4.1 VALIDATION STEERING COMMITTEE

**Composition:**
- Validation Manager (Chair)
- QA Manager
- Production Manager
- QC Manager
- Engineering Manager
- Regulatory Affairs Manager (as needed)

**Responsibilities:**
- Approve Master Validation Plan
- Review validation strategies and priorities
- Approve validation protocols and reports
- Resolve validation-related issues
- Ensure resources are available

**Meeting Frequency:** Quarterly (or as needed)

---

### 4.2 VALIDATION MANAGER

**Responsibilities:**
- Develop and maintain Master Validation Plan
- Prepare validation protocols and reports
- Coordinate validation activities across departments
- Ensure compliance with GMP and validation guidelines
- Maintain validation documentation
- Train personnel on validation requirements
- Interface with vendors and contractors for qualification support

**Authority:**
- Recommend approval/rejection of validation results
- Stop production if validation status is compromised

---

### 4.3 QUALITY ASSURANCE (QA) MANAGER

**Responsibilities:**
- Review and approve Master Validation Plan
- Review and approve all validation protocols and reports
- Ensure validation activities comply with GMP
- Approve equipment/system for use after successful qualification
- Oversight of validation program

**Authority:**
- Final approval of validation documentation
- Authority to reject equipment/systems that are not adequately validated

---

### 4.4 PRODUCTION MANAGER

**Responsibilities:**
- Participate in validation planning
- Provide personnel and resources for validation execution
- Execute validation protocols (as applicable)
- Ensure validated state is maintained during routine operations

---

### 4.5 QC MANAGER

**Responsibilities:**
- Perform analytical method validation
- Support process validation (testing of samples)
- Review and approve analytical method validation protocols and reports

---

### 4.6 ENGINEERING MANAGER

**Responsibilities:**
- Support equipment and utility qualification activities
- Provide technical expertise during IQ/OQ/PQ
- Ensure equipment design meets User Requirements Specifications (URS)

---

## 5. VALIDATION STRATEGY AND APPROACH

### 5.1 VALIDATION PHILOSOPHY

**Risk-Based Approach (ICH Q9):**
Validation efforts are prioritized based on risk to product quality and patient safety. High-risk systems and processes receive more rigorous validation.

**Risk Categories:**
- **High Risk:** Direct contact with API, critical quality attributes affected
  - Examples: Reactors, filtration, drying, analytical methods for release testing
- **Medium Risk:** Indirect impact on product quality
  - Examples: HVAC system, water system, cleaning
- **Low Risk:** Minimal impact on product quality
  - Examples: Administrative systems, non-GMP areas

### 5.2 VALIDATION TYPES

**1. Prospective Validation** (Preferred)
- Validation performed before routine commercial production
- Minimum 3 consecutive batches at commercial scale
- All critical parameters monitored

**2. Concurrent Validation** (Exceptional)
- Validation performed during routine production
- Justified when:
  - Small number of batches produced (e.g., orphan drugs, limited market)
  - Risk assessment supports approach
- Requires thorough documentation and QA approval

**3. Retrospective Validation** (Not Preferred)
- Based on historical data
- Only acceptable for established products with:
  - Extensive production history
  - Consistent quality records
  - No significant changes
- Not used for new products

**For this site: Prospective validation is the standard approach.**

---

### 5.3 VALIDATION STAGES

**Stage 1: Development and Risk Assessment**
- Define user requirements (URS)
- Identify critical quality attributes (CQAs)
- Identify critical process parameters (CPPs)
- Risk assessment (FMEA, HAZOP, etc.)

**Stage 2: Design Qualification (DQ)**
- Verify that equipment/system design meets URS
- Review vendor documentation

**Stage 3: Installation Qualification (IQ)**
- Verify correct installation
- Document all components, utilities, instrumentation

**Stage 4: Operational Qualification (OQ)**
- Verify equipment operates within specified parameters
- Test all functions, alarms, interlocks

**Stage 5: Performance Qualification (PQ)**
- Verify equipment/system consistently performs under actual production conditions
- Process simulation with representative materials

**Stage 6: Process Validation**
- Demonstrate manufacturing process consistently produces API meeting specifications
- Minimum 3 consecutive batches at commercial scale

**Stage 7: Ongoing Verification**
- Continuous monitoring during routine production
- Periodic review of process performance

---

### 5.4 VALIDATION PROTOCOL STRUCTURE

All validation protocols follow a standardized format:

1. **Title and Identification**
   - Protocol number, version, product/equipment name

2. **Objective**
   - Purpose of validation

3. **Scope**
   - What is being validated

4. **Responsibilities**
   - Who executes, reviews, approves

5. **Equipment/System Description**
   - Technical specifications

6. **Acceptance Criteria**
   - Predetermined criteria for success

7. **Test Procedures**
   - Step-by-step test instructions

8. **Data Recording**
   - Forms for recording results

9. **Deviations**
   - Process for handling unexpected results

10. **Conclusion**
    - Summary of results, recommendation for approval

---

## 6. VALIDATION LIFE CYCLE

```
┌─────────────────────┐
│  Development &      │
│  Risk Assessment    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  User Requirements  │
│  Specification (URS)│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Design             │
│  Qualification (DQ) │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Installation       │
│  Qualification (IQ) │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Operational        │
│  Qualification (OQ) │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Performance        │
│  Qualification (PQ) │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Process Validation │
│  (for processes)    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Routine Production │
│  & Monitoring       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Revalidation       │
│  (if triggered)     │
└─────────────────────┘
```

---

## 7. EQUIPMENT AND UTILITIES QUALIFICATION

### 7.1 HVAC SYSTEM

**Purpose:** Control air quality, temperature, humidity, and prevent cross-contamination

**Qualification Scope:**
- Supply and exhaust air handling units
- HEPA filtration systems
- Pressure control systems
- Temperature and humidity control
- Monitoring and alarm systems

**Key Parameters:**
- Air changes per hour (ACH): Target (example: 20 ACH for production areas)
- Pressure differentials: (example: cleanest area at highest pressure)
- HEPA filter integrity: (example: H14 filters, 99.995% efficiency at 0.3 µm)
- Temperature: (example: 18-25°C)
- Humidity: (example: 30-60% RH)

**Qualification Documents:**
- URS-HVAC-001: User Requirement Specification
- DS-HVAC-001: Design Specification
- DQ-HVAC-001: Design Qualification
- IQ-HVAC-001: Installation Qualification
- OQ-HVAC-001: Operational Qualification
- PQ-HVAC-001: Performance Qualification
- VR-HVAC-001: Validation Report (Summary)

**Timeline:** Months 1-6 (see Section 15)

---

### 7.2 WATER SYSTEM

**Purpose:** Supply purified water for manufacturing, cleaning, and analytical use

**Qualification Scope:**
- Water generation system (RO, distillation, or other)
- Storage and distribution loop
- Sanitization system (hot water or chemical)
- Sampling points
- Monitoring systems

**Key Parameters:**
- Conductivity: ≤1.3 µS/cm at 25°C (Purified Water per Ph. Eur.)
- Total Organic Carbon (TOC): ≤500 ppb
- Microbial limits: ≤100 CFU/mL (Purified Water)
- Endotoxins: ≤0.25 EU/mL (if applicable)

**Qualification Documents:**
- URS-WATER-001
- DS-WATER-001
- DQ-WATER-001
- IQ-WATER-001
- OQ-WATER-001
- PQ-WATER-001 (including microbial monitoring over 4 weeks)
- VR-WATER-001

**Timeline:** Months 1-6

---

### 7.3 COMPRESSED AIR SYSTEM

**Purpose:** Supply compressed air for equipment operation, instrumentation

**Qualification Scope:**
- Air compressors
- Filtration (particulate, oil, water removal)
- Distribution piping
- Point-of-use testing

**Key Parameters:**
- Pressure: (example: 6-8 bar)
- Oil content: <0.1 mg/m³ (if used in product contact)
- Dew point: (example: -40°C for dry air)
- Particulate: <0.5 µm (for critical use)
- Microbial: (if product contact)

**Qualification Documents:**
- URS-CA-001
- IQ-CA-001
- OQ-CA-001
- PQ-CA-001
- VR-CA-001

**Timeline:** Months 2-4

---

### 7.4 PRODUCTION REACTORS

**Purpose:** Perform chemical synthesis for API production

**Example Equipment:**
- Reactor R-101 (Synthesis Reactor, 500 L)
- Reactor R-102 (Workup Reactor, 300 L)

**Qualification Scope:**
- Vessel construction and materials
- Agitator and motor
- Heating/cooling system
- Temperature control and monitoring
- Pressure control (if applicable)
- Sampling ports
- Cleaning procedure validation

**Key Parameters:**
- Temperature control: ±2°C of setpoint
- Heating/cooling rate: (define acceptable range)
- Agitation speed: (define range)

**Qualification Documents:**
- URS-REACTOR-001
- IQ-REACTOR-001 (per reactor)
- OQ-REACTOR-001
- PQ-REACTOR-001 (process simulation or actual batches)
- VR-REACTOR-001

**Timeline:** Months 3-7

---

### 7.5 FILTRATION EQUIPMENT

**Purpose:** Remove solids from liquids during synthesis

**Qualification Scope:**
- Filter housing
- Filter integrity test
- Filtration performance

**Qualification Documents:**
- IQ-FILTER-001
- OQ-FILTER-001
- Included in Process Validation

**Timeline:** Months 4-6

---

### 7.6 DRYING EQUIPMENT

**Purpose:** Remove solvents/moisture from API

**Example Equipment:**
- Vacuum dryer VD-101

**Qualification Scope:**
- Temperature control
- Vacuum level control
- Drying time
- Solvent removal efficiency

**Key Parameters:**
- Temperature: ±5°C of setpoint (example: 60°C ±5°C)
- Vacuum: (example: <50 mbar)

**Qualification Documents:**
- URS-DRYER-001
- IQ-DRYER-001
- OQ-DRYER-001
- PQ-DRYER-001
- VR-DRYER-001

**Timeline:** Months 4-6

---

### 7.7 MILLING EQUIPMENT

**Purpose:** Control particle size of API

**Qualification Scope:**
- Mill operation
- Particle size distribution
- Reproducibility

**Qualification Documents:**
- IQ-MILL-001
- OQ-MILL-001
- Included in Process Validation

**Timeline:** Months 5-7

---

### 7.8 ANALYTICAL INSTRUMENTS

**HPLC Systems:**
- HPLC-01 (for assay, impurities)
- HPLC-02 (backup)

**GC Systems:**
- GC-01 (residual solvents)

**Other:**
- IR Spectrometer (identity)
- Karl Fischer Titrator (water content)
- Balances (weighing)
- pH meters

**Qualification Scope:**
- Installation Qualification (IQ)
- Operational Qualification (OQ)
- Performance Qualification (PQ) using system suitability tests

**Analytical Method Validation:**
- Separate from instrument qualification
- Validates the analytical method per ICH Q2(R1)

**Qualification Documents (per instrument):**
- IQ-[INSTRUMENT]-001
- OQ-[INSTRUMENT]-001
- PQ-[INSTRUMENT]-001

**Timeline:** Months 2-5

---

### 7.9 CLEANROOM CLASSIFICATION

**Purpose:** Verify cleanrooms meet ISO 14644-1 classification

**Scope:**
- Production areas (example: ISO 7 or ISO 8)
- Warehousing areas (as applicable)

**Tests:**
- Particle counting (at-rest and in-operation)
- Air velocity
- Pressure differentials
- Recovery time (for cleanrooms)

**Qualification Documents:**
- Cleanroom Classification Report (CCR-001)

**Timeline:** Month 3-4

**Requalification:** Annually or after significant changes

---

## 8. PROCESS VALIDATION

### 8.1 OBJECTIVE

Demonstrate that the manufacturing process consistently produces API meeting predetermined specifications and quality attributes.

### 8.2 SCOPE

**Example Product: Fampridin (4-Aminopyridine)**

> **Note:** Fampridin is used as an illustrative example to demonstrate the validation approach. Actual products manufactured at this site will follow the same validation principles.

**Manufacturing Process Steps:**
1. Reaction (Synthesis)
2. Workup (Neutralization, Extraction)
3. Purification (Crystallization)
4. Drying
5. Milling
6. Packaging

### 8.3 CRITICAL QUALITY ATTRIBUTES (CQAs)

**For API (Fampridin Example):**
- Identity
- Assay (purity): 99.0-101.0%
- Impurities: Each ≤0.10%, Total ≤0.50%
- Residual solvents: Per ICH Q3C
- Water content: ≤0.50%
- Particle size distribution: D50 20-80 µm

### 8.4 CRITICAL PROCESS PARAMETERS (CPPs)

**Example CPPs (Fampridin Synthesis):**
- Reaction temperature: 80 ± 2°C
- Reaction time: 4 ± 0.5 hours
- pH during workup: 6.5-7.5
- Drying temperature: 60 ± 5°C
- Drying time: Until LOD ≤0.50%

### 8.5 PROCESS VALIDATION APPROACH

**Prospective Validation:**
- Minimum **3 consecutive commercial-scale batches**
- All CPPs controlled within validated ranges
- All CQAs tested and meet specifications
- Statistical evaluation of results

**Validation Batches:**
- Batch 1: [Batch Number to be assigned]
- Batch 2: [Batch Number to be assigned]
- Batch 3: [Batch Number to be assigned]

**Batch Size:** (example: 100 kg per batch)

### 8.6 IN-PROCESS CONTROLS (IPCs)

- pH after neutralization
- Purity by HPLC before drying (≥98%)
- Loss on drying (LOD) after drying (≤0.50%)
- Particle size after milling

### 8.7 SAMPLING PLAN

- Raw materials: Per specification
- In-process samples: At defined steps (post-reaction, post-crystallization, post-drying)
- Final API: Full specification testing

### 8.8 ACCEPTANCE CRITERIA

**Per Batch:**
- All CPPs within validated ranges
- All IPCs meet acceptance criteria
- Final API meets specification

**Overall (3 Batches):**
- All 3 batches meet specification
- No significant deviations
- Statistical analysis shows consistency (mean, standard deviation, range)

### 8.9 VALIDATION DOCUMENTS

- **PVP-FAM-001:** Process Validation Protocol – Fampridin Synthesis
- **Batch Records:** 3 complete batch records
- **PVR-FAM-001:** Process Validation Report – Fampridin Synthesis

**Timeline:** Months 7-9

---

## 9. CLEANING VALIDATION

### 9.1 OBJECTIVE

Demonstrate that cleaning procedures effectively remove product residues, cleaning agents, and microorganisms from equipment surfaces.

### 9.2 SCOPE

**Equipment to be Validated:**
- Production reactors (R-101, R-102)
- Filters
- Dryers
- Mills

**Worst-Case Approach:**
- Hardest-to-clean product (if multiple products)
- Longest production campaign
- Most difficult-to-clean equipment surfaces

### 9.3 ACCEPTANCE CRITERIA

**Product Residue:**
- ≤10 ppm of previous product (or health-based limit, whichever is lower)
- Calculation based on surface area and subsequent batch size

**Cleaning Agent Residue:**
- ≤10 ppm (or specific limit for cleaning agent used)

**Microbial Limits:**
- ≤100 CFU per swab (for non-sterile products)

**Visual Cleanliness:**
- No visible residue

### 9.4 SAMPLING METHODS

**Swab Sampling:**
- Swab defined surface area (e.g., 25 cm²)
- Worst-case locations (hard-to-clean areas)

**Rinse Sampling:**
- Final rinse water collected
- Analyzed for residues

### 9.5 ANALYTICAL METHODS

- HPLC for product and cleaning agent residues
- Total Organic Carbon (TOC) as alternative
- Bioburden testing for microbial limits

**Methods must be validated** to detect residues at acceptance criteria levels.

### 9.6 VALIDATION BATCHES

- Minimum **3 consecutive successful cleaning cycles**
- After worst-case production scenario

### 9.7 VALIDATION DOCUMENTS

- **CVP-REACTOR-001:** Cleaning Validation Protocol – Reactors
- **CVP-DRYER-001:** Cleaning Validation Protocol – Dryer
- **CVR-001:** Cleaning Validation Report (Summary)

**Timeline:** Months 8-10

---

## 10. ANALYTICAL METHOD VALIDATION

### 10.1 OBJECTIVE

Demonstrate that analytical methods are suitable for their intended purpose and provide reliable, accurate, and reproducible results.

### 10.2 REGULATORY BASIS

**ICH Q2(R1):** Validation of Analytical Procedures

### 10.3 METHODS TO BE VALIDATED

**For API (Example: Fampridin):**

**Identity Methods:**
- Infrared Spectroscopy (IR)
- HPLC (Retention Time)

**Quantitative Methods:**
- Assay by HPLC
- Impurities by HPLC
- Water content by Karl Fischer
- Residual solvents by GC

**Physical Tests:**
- Particle size by laser diffraction

**Microbiological Methods:**
- Total aerobic microbial count
- Yeast and mold count

### 10.4 VALIDATION PARAMETERS (ICH Q2(R1))

**For Identity Tests:**
- Specificity

**For Quantitative Tests (Assay, Impurities):**
- **Specificity:** Method detects analyte in presence of impurities, excipients
- **Linearity:** Response proportional to concentration (5-6 levels, R² ≥0.999)
- **Accuracy:** Recovery 98-102% (3 levels, triplicate)
- **Precision:**
  - Repeatability: RSD ≤2.0% (6 replicates)
  - Intermediate precision: Different days, analysts, equipment
- **Range:** 80-120% of specification (or wider if justified)
- **Detection Limit (LOD):** Lowest detectable concentration
- **Quantitation Limit (LOQ):** Lowest quantifiable concentration
- **Robustness:** Method stability to small variations (pH, temperature, flow rate)

**For Limit Tests (Impurities):**
- Specificity, LOD, LOQ

### 10.5 VALIDATION DOCUMENTS

**Per Method:**
- **AMV-HPLC-001:** Analytical Method Validation – Fampridin Assay and Impurities by HPLC
- **AMV-GC-001:** Analytical Method Validation – Residual Solvents by GC
- **AMV-KF-001:** Analytical Method Validation – Water Content by Karl Fischer

**Timeline:** Months 4-6

---

## 11. COMPUTER SYSTEM VALIDATION

### 11.1 SCOPE

**Systems to be Validated:**

**Laboratory Systems:**
- Laboratory Information Management System (LIMS) – if implemented
- Chromatography Data Systems (CDS) on HPLC, GC

**Manufacturing Systems:**
- Manufacturing Execution System (MES) – if implemented
- Batch record system (if electronic)

**Utilities:**
- HVAC control system (BMS – Building Management System)
- Water system monitoring

### 11.2 VALIDATION APPROACH

**Based on GAMP 5 (Good Automated Manufacturing Practice):**

**Category 3 (Non-configured products):**
- Standard software (e.g., Microsoft Excel, standard CDS)
- Validation: Installation check, operational testing

**Category 4 (Configured products):**
- Configurable systems (e.g., LIMS)
- Validation: IQ, OQ, PQ equivalent for software

**Category 5 (Custom applications):**
- Bespoke software
- Validation: Full life cycle (URS, FS, design, coding, testing)

### 11.3 VALIDATION ACTIVITIES

**User Requirements Specification (URS):**
- What should the system do?

**Functional Specification (FS):**
- How will the system meet requirements?

**Installation Qualification (IQ):**
- Software installed correctly
- Hardware verified
- Network connections

**Operational Qualification (OQ):**
- Functions tested (login, data entry, calculations, reports)
- Security tested (user access levels)

**Performance Qualification (PQ):**
- End-to-end testing with actual workflows

**Data Integrity:**
- Audit trails enabled and tested
- Electronic signatures (21 CFR Part 11 compliance, if applicable)

### 11.4 VALIDATION DOCUMENTS

**Per System:**
- **CSV-LIMS-001:** Computer System Validation – LIMS (if applicable)
- **CSV-CDS-001:** Computer System Validation – Chromatography Data System

**Timeline:** Months 3-6

---

## 12. VALIDATION DOCUMENTATION

### 12.1 DOCUMENT HIERARCHY

**Level 1: Master Validation Plan (this document)**
- Overview, strategy, responsibilities

**Level 2: Validation Protocols**
- Detailed test procedures, acceptance criteria
- Examples: IQ-HVAC-001, PVP-FAM-001, AMV-HPLC-001

**Level 3: Executed Documents**
- Completed protocols with results, signatures

**Level 4: Validation Reports**
- Summary of results, conclusion, approval
- Examples: VR-HVAC-001, PVR-FAM-001

**Level 5: Supporting Documents**
- Calibration certificates, test records, vendor documentation

### 12.2 DOCUMENT CONTROL

**All validation documents must:**
- Be approved before execution (protocols)
- Be executed with original signatures and dates
- Include deviations (if any) with justification
- Be reviewed and approved by QA
- Be archived per GMP requirements (life of product + 1 year minimum)

### 12.3 VALIDATION REPORT CONTENT

**Each validation activity must be summarized in a Validation Report:**

1. **Introduction:** Objective, scope
2. **Summary of Results:** Key tests performed, results
3. **Deviations:** Any deviations from protocol, with impact assessment
4. **Conclusion:** System/process/method is validated (or not)
5. **Recommendation:** Approve for use / Retest / Reject
6. **Approval Signatures:** Validation Manager, QA Manager

---

## 13. REVALIDATION AND CHANGE CONTROL

### 13.1 REVALIDATION TRIGGERS

**Revalidation is required when:**

**Equipment/Systems:**
- Major repair or replacement of critical components
- Relocation of equipment
- Significant change to operating parameters
- Preventive maintenance identifies recurring issues

**Processes:**
- Change to manufacturing process (e.g., scale, equipment, critical parameters)
- Change to raw material supplier (if impacts quality)
- Transfer to new facility
- Trend of declining process performance

**Analytical Methods:**
- Change to method (e.g., column, reagents, conditions)
- Transfer to different laboratory

**Computer Systems:**
- Software upgrades or patches
- Hardware changes
- Configuration changes

### 13.2 PERIODIC REVALIDATION

**Even without changes, periodic revalidation may be needed:**

**Equipment/Utilities:**
- HVAC: Recertification annually (particle count, airflow)
- Water system: Periodic sanitization validation (annually)
- Analytical instruments: Annual PQ (system suitability)

**Processes:**
- Not routinely revalidated unless triggered by changes or poor performance
- Ongoing verification through process monitoring

**Cleaning:**
- Periodic recleaning validation (e.g., every 3 years or after significant change)

### 13.3 CHANGE CONTROL INTEGRATION

**All changes impacting validated state must go through Change Control (per Quality Manual Section 13).**

**Change Control will assess:**
- Does the change impact validation status?
- What level of requalification/revalidation is needed? (partial vs. full)
- Risk to product quality (ICH Q9)

**After change implementation:**
- Requalification/revalidation performed per approved plan
- Validation documentation updated

---

## 14. TRAINING

### 14.1 TRAINING REQUIREMENTS

**All personnel involved in validation activities must be trained on:**
- GMP and validation principles
- This Master Validation Plan
- Specific validation protocols they will execute
- Documentation requirements (data integrity, signatures)

### 14.2 TRAINING RECORDS

- Training documented in personnel training files
- Competency assessed (e.g., practical demonstration, written test)
- Retraining when procedures change

---

## 15. VALIDATION SCHEDULE

**Overall Timeline: 12 Months from Facility Commissioning**

### 15.1 PHASE 1: UTILITIES AND EQUIPMENT (Months 1-6)

| Activity | Month | Responsible | Status |
|----------|-------|-------------|--------|
| HVAC IQ/OQ/PQ | 1-4 | Validation, Engineering | Planned |
| Water System IQ/OQ/PQ | 1-4 | Validation, Engineering | Planned |
| Compressed Air IQ/OQ | 2-4 | Validation, Engineering | Planned |
| Cleanroom Classification | 3-4 | Validation | Planned |
| Analytical Instruments IQ/OQ/PQ | 2-5 | Validation, QC | Planned |
| Production Reactors IQ/OQ | 3-5 | Validation, Production | Planned |
| Dryer IQ/OQ/PQ | 4-6 | Validation, Production | Planned |
| Mill IQ/OQ | 5-6 | Validation, Production | Planned |

### 15.2 PHASE 2: ANALYTICAL METHODS (Months 4-6)

| Activity | Month | Responsible | Status |
|----------|-------|-------------|--------|
| HPLC Method Validation (Assay/Impurities) | 4-6 | QC | Planned |
| GC Method Validation (Residual Solvents) | 5-6 | QC | Planned |
| Karl Fischer Method Validation | 5-6 | QC | Planned |
| Microbiological Methods | 5-6 | QC | Planned |

### 15.3 PHASE 3: PROCESS VALIDATION (Months 7-9)

| Activity | Month | Responsible | Status |
|----------|-------|-------------|--------|
| Process Validation Protocol Approval | 6 | Validation, QA | Planned |
| Validation Batch 1 | 7 | Production, QC | Planned |
| Validation Batch 2 | 8 | Production, QC | Planned |
| Validation Batch 3 | 9 | Production, QC | Planned |
| Process Validation Report | 9 | Validation, QA | Planned |

### 15.4 PHASE 4: CLEANING VALIDATION (Months 8-10)

| Activity | Month | Responsible | Status |
|----------|-------|-------------|--------|
| Cleaning Validation Protocol Approval | 7 | Validation, QA | Planned |
| Cleaning Validation Execution (3 cycles) | 8-10 | Production, QC | Planned |
| Cleaning Validation Report | 10 | Validation, QA | Planned |

### 15.5 PHASE 5: COMPUTER SYSTEMS (Months 3-6)

| Activity | Month | Responsible | Status |
|----------|-------|-------------|--------|
| LIMS Validation (if applicable) | 3-6 | Validation, IT, QC | Planned |
| CDS Validation (HPLC/GC) | 4-5 | Validation, QC | Planned |
| BMS Validation (HVAC control) | 3-4 | Validation, Engineering | Planned |

### 15.6 FINAL REVIEW (Month 12)

| Activity | Month | Responsible | Status |
|----------|-------|-------------|--------|
| Review all validation documentation | 12 | Validation, QA | Planned |
| Master Validation Plan update (if needed) | 12 | Validation | Planned |
| Validation Steering Committee Review | 12 | Committee | Planned |

---

## 16. APPENDICES

### APPENDIX A: LIST OF VALIDATION DOCUMENTS

**Utilities:**
- URS-HVAC-001, DQ/IQ/OQ/PQ/VR-HVAC-001
- URS-WATER-001, DQ/IQ/OQ/PQ/VR-WATER-001
- URS-CA-001, IQ/OQ/PQ/VR-CA-001

**Equipment:**
- URS-REACTOR-001, IQ/OQ/PQ/VR-REACTOR-001
- URS-DRYER-001, IQ/OQ/PQ/VR-DRYER-001
- IQ/OQ-MILL-001
- IQ/OQ/PQ per analytical instrument

**Process:**
- PVP-FAM-001: Process Validation Protocol – Fampridin
- PVR-FAM-001: Process Validation Report – Fampridin

**Cleaning:**
- CVP-REACTOR-001, CVP-DRYER-001
- CVR-001: Cleaning Validation Report

**Analytical Methods:**
- AMV-HPLC-001, AMV-GC-001, AMV-KF-001

**Computer Systems:**
- CSV-LIMS-001 (if applicable)
- CSV-CDS-001

**Cleanroom:**
- CCR-001: Cleanroom Classification Report

### APPENDIX B: RISK ASSESSMENT MATRIX (ICH Q9)

**Risk = Severity × Probability**

| Severity | Probability | Risk Level | Action |
|----------|-------------|------------|--------|
| High | High | **Critical** | Full validation required |
| High | Medium | **High** | Extensive validation |
| High | Low | **Medium** | Standard validation |
| Medium | High | **High** | Extensive validation |
| Medium | Medium | **Medium** | Standard validation |
| Medium | Low | **Low** | Reduced validation acceptable |
| Low | High | **Medium** | Standard validation |
| Low | Medium | **Low** | Reduced validation acceptable |
| Low | Low | **Minimal** | Verification acceptable |

---

### APPENDIX C: ABBREVIATIONS

- ACH: Air Changes per Hour
- API: Active Pharmaceutical Ingredient
- BMS: Building Management System
- CAPA: Corrective and Preventive Action
- CDS: Chromatography Data System
- CEP: Certificate of Suitability
- CFU: Colony Forming Units
- CQA: Critical Quality Attribute
- CPP: Critical Process Parameter
- CSV: Computer System Validation
- DQ: Design Qualification
- EU: Endotoxin Units
- FMEA: Failure Mode and Effects Analysis
- FS: Functional Specification
- GAMP: Good Automated Manufacturing Practice
- GC: Gas Chromatography
- GDP: Good Distribution Practice
- GMP: Good Manufacturing Practice
- HAZOP: Hazard and Operability Study
- HEPA: High-Efficiency Particulate Air (filter)
- HPLC: High-Performance Liquid Chromatography
- ICH: International Council for Harmonisation
- IPC: In-Process Control
- IQ: Installation Qualification
- IR: Infrared Spectroscopy
- ISPE: International Society for Pharmaceutical Engineering
- LIMS: Laboratory Information Management System
- LOD: Loss on Drying / Limit of Detection
- LOQ: Limit of Quantitation
- MES: Manufacturing Execution System
- MS: Mass Spectrometry
- MVP: Master Validation Plan
- NMR: Nuclear Magnetic Resonance
- OOS: Out-of-Specification
- OQ: Operational Qualification
- PQ: Performance Qualification
- QA: Quality Assurance
- QC: Quality Control
- RH: Relative Humidity
- RO: Reverse Osmosis
- RSD: Relative Standard Deviation
- SOP: Standard Operating Procedure
- TOC: Total Organic Carbon
- URS: User Requirement Specification
- UV: Ultraviolet Spectroscopy

---

## REVISION HISTORY

| Version | Date | Author | Description of Changes | Approved By |
|---------|------|--------|------------------------|-------------|
| 1.0 | 04.12.2025 | Validation Department | Initial release | Management Representative |

---

## APPROVAL SIGNATURES

**Prepared by:**  
[Name, Title: Validation Manager]  
Signature: ________________  
Date: 04.12.2025

**Reviewed by:**  
[Name, Title: QA Manager]  
Signature: ________________  
Date: 04.12.2025

**Reviewed by:**  
[Name, Title: Production Manager]  
Signature: ________________  
Date: 04.12.2025

**Reviewed by:**  
[Name, Title: QC Manager]  
Signature: ________________  
Date: 04.12.2025

**Approved by:**  
[Name, Title: Management Representative / General Manager]  
Signature: ________________  
Date: 04.12.2025

---

**END OF MASTER VALIDATION PLAN**

**Distribution:**
- Management Representative (Controlled Copy #1)
- Validation Manager (Controlled Copy #2)
- QA Manager (Controlled Copy #3)
- Production Manager (Controlled Copy #4)
- QC Manager (Controlled Copy #5)
- Engineering Manager (Controlled Copy #6)

**Document Control:**
- Total Controlled Copies: 6
- Uncontrolled copies are for reference only

---

**Next Scheduled Review Date:** 04. Dezember 2026

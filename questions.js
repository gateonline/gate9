
const questions = [

    // =====================================================
    // Q1 — MCQ — 1 MARK
    // =====================================================
    {
        question: "The stress-strain profiles in the figure were obtained following longitudinal tensile loading for a brittle polymer, glass fibre, and a composite lamina consisting of unidirectional continuous glass fibres and the polymer matrix. Assume that the matrix is free of voids, there is perfect bonding between glass fibres and the matrix, and there are no residual stresses in the composite lamina. (G-26)\n\nIdentify P, Q and R.",
        image: "q1.png",
        options: [
            "P – Matrix ; Q – Glass fibre ; R – Composite",
            "P – Glass fibre ; Q – Composite ; R – Matrix",
            "P – Glass fibre ; Q – Matrix ; R – Composite",
            "P – Composite ; Q – Glass fibre ; R – Matrix"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q2 — MCQ — 1 MARK
    // =====================================================
    {
        question: "Consider two unidirectional glass-fibre composites with identical fibre volume fractions.\n\nComposite A is tested parallel to the fibre direction.\n\nComposite B is tested perpendicular to the fibre direction.\n\nWhich statement is generally correct?",
        options: [
            "ET > EL",
            "EL > ET",
            "EL = ET",
            "Both have zero modulus in the transverse direction"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q3 — MSQ — 1 MARK
    // =====================================================
    {
        question: "Which of the following statements are generally true when voids are present in a fibre-reinforced polymer composite? [MSQ]",
        options: [
            "They can reduce tensile strength",
            "They can act as stress concentration sites",
            "They always improve interfacial bonding",
            "They can promote crack initiation and propagation"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 1
    },

    // =====================================================
    // Q4 — MCQ — 1 MARK
    // =====================================================
    {
        question: "A unidirectional continuous glass-fibre-reinforced polymer composite contains 40% glass fibres by volume. The Young's modulus of glass fibre is 70 GPa, while that of the polymer matrix is 3 GPa. Assuming perfect bonding and longitudinal loading, calculate the longitudinal modulus of the composite.",
        options: [
            "20.5 GPa",
            "29.8 GPa",
            "35.0 GPa",
            "42.5 GPa"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q5 — MCQ — 1 MARK
    // =====================================================
    {
        question: "A unidirectional composite contains 30% glass fibres by volume. The modulus of glass fibre is 70 GPa and that of the polymer matrix is 3 GPa. Assuming ideal bonding, estimate the transverse modulus using the inverse rule of mixtures.",
        options: [
            "3.0 GPa",
            "4.21 GPa",
            "10.5 GPa",
            "21.9 GPa"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q6 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A composite contains 60 wt% glass fibre and 40 wt% polymer matrix.\n\nThe densities are:\n\nGlass fibre = 2.5 g/cm³\nPolymer matrix = 1.2 g/cm³\n\nCalculate the fibre volume fraction.",
        options: [
            "0.365",
            "0.419",
            "0.500",
            "0.625"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q7 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A glass fibre has a diameter of 10 micrometres and tensile strength of 2000 MPa. The interfacial shear strength between the fibre and matrix is 25 MPa. Calculate the critical fibre length.",
        options: [
            "100 micrometres",
            "200 micrometres",
            "400 micrometres",
            "800 micrometres"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q8 — MSQ — 2 MARKS
    // =====================================================
    {
        question: "Which of the following statements are correct for a continuous unidirectional fibre-reinforced polymer composite? [MSQ]",
        options: [
            "Longitudinal modulus generally increases with fibre volume fraction",
            "Transverse modulus is always equal to longitudinal modulus",
            "Perfect interfacial bonding is important for effective load transfer",
            "Fibre orientation has no effect on composite properties"
        ],
        correctAnswers: [0, 2],
        type: "MSQ",
        marks: 2
    },

    // =====================================================
    // Q9 — MSQ — 2 MARKS
    // =====================================================
    {
        question: "For a polymer blend, the Flory-Huggins interaction parameter chi is positive and relatively large. What does this generally indicate? [MSQ]",
        options: [
            "Strongly favourable interactions between unlike polymer segments",
            "Unfavourable interactions between unlike polymer segments",
            "Guaranteed complete miscibility",
            "Zero enthalpy of mixing"
        ],
        correctAnswers: [1],
        type: "MSQ",
        marks: 2
    },

    // =====================================================
    // Q10 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "Which statement is generally correct?",
        options: [
            "Miscible blends always exhibit two separate glass transitions",
            "Immiscible blends always exhibit exactly one glass transition",
            "Miscible blends commonly exhibit one composition-dependent glass transition",
            "Glass transition temperature is independent of blend composition"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q11 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "What is the main function of a compatibilizer in an immiscible polymer blend?",
        options: [
            "Increase the molecular weight of both polymers by default",
            "Reduce interfacial tension and improve interfacial adhesion",
            "Eliminate the need for mixing",
            "Convert all thermoplastics into thermosets"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q12 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A short-fibre composite contains fibres whose length is much smaller than the critical fibre length. Which statement is most appropriate?",
        options: [
            "Fibres can reach their full tensile strength throughout their length",
            "Stress transfer from matrix to fibre is less efficient",
            "Fibre length has no influence on reinforcement",
            "The composite must have the same modulus as the continuous-fibre composite"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q13 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A unidirectional glass-fibre composite is manufactured with increasing fibre volume fraction while maintaining good dispersion and bonding. Which property is generally expected to increase under longitudinal tensile loading?",
        options: [
            "Longitudinal elastic modulus",
            "Matrix volume fraction",
            "Polymer content by volume",
            "Density must decrease in all cases"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q14 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "A binary polymer blend is heated above its upper critical solution temperature (UCST). Assuming the blend exhibits UCST behaviour, what happens?",
        options: [
            "The polymers become more miscible",
            "The polymers always undergo cross-linking",
            "The blend necessarily becomes crystalline",
            "The polymers undergo vulcanization"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q15 — MSQ — 2 MARKS
    // =====================================================
    {
        question: "Select all correct statements about polymer composites. [MSQ]",
        options: [
            "A unidirectional fibre composite is generally anisotropic",
            "The longitudinal modulus can be estimated using the direct rule of mixtures",
            "The transverse modulus is generally higher than the longitudinal modulus for stiff fibres",
            "Fibre-matrix adhesion influences stress transfer"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 2
    },

    // =====================================================
    // Q16 — NAT — 2 MARKS
    // =====================================================
    {
        question: "A unidirectional composite of a resin is prepared with continuous fibers, wherein the volume fraction of the fiber in the composite is 0.7. Assume that the resin has a modulus of 9 GPa and the fiber has a modulus of 90 GPa. A sample of this composite, possessing a breadth of 4 mm and a thickness of 1 mm, is subjected to a uniaxial tensile test along the direction of the fiber. Corresponding to a strain of 0.5%, calculate the force applied on the sample in N. Round off to the nearest integer.",
        type: "NAT",
        answer: 1314,
        marks: 2
    },

    // =====================================================
    // Q17 — NAT — 2 MARKS
    // =====================================================
    {
        question: "A unidirectional composite has 60% fibre by volume. Fibre modulus is 120 GPa and matrix modulus is 3 GPa. Calculate the percentage of the total tensile load carried by fibres. Round off to two decimal places.",
        type: "NAT",
        answer: 98.36,
        marks: 2
    },

    // =====================================================
    // Q18 — NAT — 2 MARKS
    // =====================================================
    {
        question: "A hybrid composite contains two types of continuous fibres in a common polymer matrix. Their volume fractions and elastic moduli are given below:\n\nFibre A:\nVolume fraction = 0.30\nYoung's modulus = 200 GPa\n\nFibre B:\nVolume fraction = 0.20\nYoung's modulus = 100 GPa\n\nMatrix:\nVolume fraction = 0.50\nYoung's modulus = 4 GPa\n\nCalculate the longitudinal modulus of the hybrid composite in GPa.",
        type: "NAT",
        answer: 82,
        marks: 2
    },

    // =====================================================
    // Q19 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "For an ideal unidirectional composite under transverse loading, which condition is assumed in the inverse rule of mixtures?",
        options: [
            "Equal strain in fibre and matrix",
            "Equal stress in fibre and matrix",
            "Zero stress in the matrix",
            "Zero strain in the fibre"
        ],
        answer: 1,
        type: "MCQ",
        marks: 2
    }

];

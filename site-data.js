// Curated from public research references. Technical requirements and ADOPT roles require scientific review.
window.ADOPT_PROJECTS = [
  {
    "id": "shark",
    "name": "SHARK-NIR",
    "category": "High-contrast imaging",
    "telescope": "Large Binocular Telescope (LBT)",
    "accent": "green",
    "icon": "✧",
    "overline": "LBT · Near-infrared high-contrast imaging",
    "blurb": "Direct imaging and spectroscopy close to bright stars in the near-infrared.",
    "description": "SHARK-NIR is a high-contrast near-infrared camera and spectrograph at the Large Binocular Telescope. It works with adaptive optics to separate faint structures and companions from the glare of a bright object, using coronagraphs to suppress starlight.",
    "science": [
      "Discovering and studying giant exoplanets and faint companions.",
      "Imaging circumstellar discs, young stars and jets.",
      "Investigating selected Solar System targets, evolved stars and active galactic nuclei."
    ],
    "technical": "The instrument supports conventional and coronagraphic imaging, dual-band differential imaging, and long-slit spectroscopy. Available coronagraph designs include Gaussian Lyot, shaped-pupil and four-quadrant phase masks.",
    "specs": [
      [
        "Wavelength",
        "0.96–1.70 µm"
      ],
      [
        "Field of view",
        "18 × 18 arcsec"
      ],
      [
        "Pixel scale",
        "14.5 mas/pixel"
      ],
      [
        "Spectroscopy",
        "R ≈ 100 or 700"
      ]
    ],
    "contribution": "ADOPT-related interests include high-contrast optical alignment, instrument commissioning, and preparation and analysis of observations. Specific personnel and work packages should be confirmed by the group.",
    "refs": [
      [
        "SHARK-NIR project site",
        "https://sites.google.com/inaf.it/shark-nir/home"
      ],
      [
        "LBT instruments and observing modes",
        "https://www.lbt.inaf.it/instruments.html"
      ]
    ],
    "status": "current",
    "source": "https://sites.google.com/inaf.it/shark-nir/home",
    "pending": false
  },
  {
    "id": "mavis",
    "name": "MAVIS",
    "category": "Adaptive optics",
    "telescope": "ESO VLT Unit Telescope 4",
    "accent": "blue",
    "icon": "◉",
    "overline": "VLT · Visible-wavelength MCAO",
    "blurb": "Very sharp visible-light imaging and spatially resolved spectroscopy over a corrected field.",
    "description": "MAVIS (MCAO-Assisted Visible Imager and Spectrograph) is being developed for the Very Large Telescope. It combines multi-conjugate adaptive optics with a visible imager and an integral-field spectrograph to overcome atmospheric image blur over a useful field of view.",
    "science": [
      "Resolving crowded star clusters and studying stellar populations.",
      "Tracing star formation and the assembly of distant galaxies.",
      "Investigating stellar evolution, black holes and Solar System atmospheres."
    ],
    "technical": "MAVIS combines wavefront sensing using laser and natural guide stars, adaptive correction, a wide-field visible imager and an integral-field spectrograph. Performance numbers are design/baseline specifications, not guaranteed observing results.",
    "specs": [
      [
        "Wavelength coverage",
        "Approximately 380–935 nm"
      ],
      [
        "Imager field",
        "30 × 30 arcsec"
      ],
      [
        "Imager sampling",
        "7.36 mas/pixel"
      ],
      [
        "IFU spectral resolution",
        "Modes up to R ≈ 14,700"
      ]
    ],
    "contribution": "Areas of interest in Padova include adaptive-optics calibration, wavefront-sensor diagnostics, alignment, system verification and instrument integration. Group-specific deliverables should be reviewed.",
    "refs": [
      [
        "ESO MAVIS instrument and baseline specifications",
        "https://www.hq.eso.org/sci/facilities/develop/instruments/MAVIS.html"
      ],
      [
        "MAVIS instrument project",
        "https://mavis-ao.org/"
      ]
    ],
    "status": "current",
    "source": "https://www.hq.eso.org/sci/facilities/develop/instruments/MAVIS.html",
    "pending": false
  },
  {
    "id": "morfeo",
    "name": "MORFEO",
    "category": "Adaptive optics",
    "telescope": "ESO Extremely Large Telescope (ELT)",
    "accent": "teal",
    "icon": "◎",
    "overline": "ELT · Multi-conjugate adaptive-optics relay",
    "blurb": "An adaptive-optics relay enabling diffraction-limited imaging with MICADO.",
    "description": "MORFEO is a first-generation multi-conjugate adaptive-optics system for ESO’s Extremely Large Telescope. Instead of recording science images itself, it corrects distorted incoming light and passes it to scientific instruments, initially MICADO.",
    "science": [
      "Resolving individual stars and star-forming regions in distant galaxies.",
      "Accurate astrometry near the Galactic Centre’s black hole.",
      "Providing stable, high-resolution imaging for other science programmes."
    ],
    "technical": "Six laser guide stars and three natural guide stars help sense turbulence at different atmospheric heights. Up to two deformable mirrors in MORFEO work with the ELT adaptive mirror M4; an optical relay feeds MICADO and a future instrument port.",
    "specs": [
      [
        "Reference stars",
        "6 laser + 3 natural guide stars"
      ],
      [
        "Adaptive correction",
        "Up to 2 DMs plus ELT M4"
      ],
      [
        "Client instruments",
        "MICADO, with second port for future use"
      ],
      [
        "Design K-band Strehl",
        "30% in median conditions (ESO requirement)"
      ]
    ],
    "contribution": "Relevant work includes laser-guide-star wavefront-sensor integration, alignment, AIV, optical modelling and telescope-interface verification. Exact ADOPT responsibilities need approval.",
    "refs": [
      [
        "ESO MORFEO project page",
        "https://elt.eso.org/instrument/MORFEO/"
      ]
    ],
    "status": "current",
    "source": "https://elt.eso.org/instrument/MORFEO/",
    "pending": false
  },
  {
    "id": "ekarus",
    "name": "EKARUS",
    "category": "Adaptive optics",
    "telescope": "Copernico 1.82-m telescope, Asiago",
    "accent": "coral",
    "icon": "⌁",
    "overline": "Asiago · Adaptive-optics experimentation",
    "blurb": "A modular on-sky platform for testing new adaptive-optics technologies.",
    "description": "EKARUS is an experimental adaptive-optics research platform under development for the 1.82-m Copernico Telescope at Asiago. Building on experience from the PAPYRUS demonstrator, it is conceived as an accessible, flexible optical bench for testing new ideas on the sky.",
    "science": [
      "Validating new wavefront-sensing and adaptive-optics approaches in real observing conditions.",
      "Testing advanced real-time control, including machine-learning methods.",
      "Training students and enabling collaborations in astronomical instrumentation."
    ],
    "technical": "The design emphasises modular opto-mechanics and reconfigurable AO subsystems rather than a fixed science-instrument specification. Published material describes the preliminary design and development roadmap.",
    "specs": [
      [
        "Host telescope",
        "Copernico 1.82 m"
      ],
      [
        "Location",
        "Asiago, Mount Ekar"
      ],
      [
        "Status",
        "Research platform under development"
      ]
    ],
    "contribution": "The project is associated with INAF Padova’s adaptive-optics laboratory and on-sky technology-development activities.",
    "refs": [
      [
        "INAF Padova EKARUS seminar and concept",
        "https://indico.dfa.unipd.it/event/1719/?view=event"
      ],
      [
        "Asiago facilities",
        "https://www.oapd.inaf.it/sede-di-asiago/telescopes-and-instrumentations"
      ]
    ],
    "status": "current",
    "source": "https://indico.dfa.unipd.it/event/1719/?view=event",
    "pending": false
  },
  {
    "id": "mezzocielo",
    "name": "Mezzocielo",
    "category": "Instrumentation",
    "telescope": "Proposed wide-field survey telescope",
    "accent": "violet",
    "icon": "✧",
    "overline": "Instrumentation · Very wide field",
    "blurb": "A novel monocentric telescope concept designed to survey an enormous area of the sky.",
    "description": "MezzoCielo is a proposed wide-field optical system built around a spherical, monocentric design. An envelope of meniscus lenses surrounds a transparent, low-index liquid; multiple corrected cameras and detectors sample different viewing directions.",
    "science": [
      "Searching large sky areas for time-variable sources and fast transients.",
      "Wide-area surveillance for space objects and space-traffic management.",
      "Supporting rapid follow-up and multi-messenger astronomy."
    ],
    "technical": "The research explores a spherical common-centre optical system rather than a conventional narrow-field reflector. Published engineering studies consider a 0.2–2 m aperture family with many cameras and fields extending to many thousands of square degrees; these are concepts and design targets, not established instrument performance.",
    "specs": [
      [
        "Design approach",
        "Monocentric refractive telescope"
      ],
      [
        "Explored aperture class",
        "About 0.2–2 m"
      ],
      [
        "Studied wide-field range",
        "About 5,000–20,000 deg²"
      ],
      [
        "Project stage",
        "Concept and demonstrator development"
      ]
    ],
    "contribution": "The design is strongly associated with the Padova optical-instrumentation community; specific ADOPT work packages require verification.",
    "refs": [
      [
        "INAF project description",
        "https://schede.inaf.it/consulta/mostra?archdb=2022&selezione=608808d8a699e4108c87121a"
      ],
      [
        "ASTRASud / MezzoCielo work programme",
        "https://info.ira.inaf.it/en/research/projects/astrasud-en/"
      ]
    ],
    "status": "current",
    "source": "https://schede.inaf.it/consulta/mostra?archdb=2022&selezione=608808d8a699e4108c87121a",
    "pending": false
  },
  {
    "id": "matto",
    "name": "MATTO",
    "category": "Adaptive optics",
    "telescope": "INAF Padova laboratory",
    "accent": "green",
    "icon": "⊙",
    "overline": "Laboratory · Multi-conjugate AO testbed",
    "blurb": "A configurable laboratory bench for developing and comparing MCAO technologies.",
    "description": "MATTO (Multi-conjugate Adaptive Techniques Test Optics) is a laboratory facility developed at INAF Padova under the STILES programme. It reproduces important optical and control aspects of multi-conjugate adaptive optics for large telescopes, allowing repeatable experiments before taking ideas on sky.",
    "science": [
      "Validating wavefront-sensor concepts and control algorithms.",
      "Comparing different corrections for turbulence distributed in altitude.",
      "Testing optical alignment, reconstruction, calibration and real-time computation."
    ],
    "technical": "The modular bench includes natural and elongated laser-like reference sources, atmospheric perturbation simulators, multiple wavefront-sensor configurations, and deformable mirrors. A Durham Adaptive Optics toolkit contributes to the real-time control architecture.",
    "specs": [
      [
        "Correction optics",
        "3 deformable mirrors (~1,500 actuators total)"
      ],
      [
        "Wavefront sensing",
        "Up to 6 WFS channels"
      ],
      [
        "Source simulation",
        "Up to 3 natural- and 3 laser-guide-star channels"
      ],
      [
        "Programme",
        "PNRR / STILES"
      ]
    ],
    "contribution": "MATTO is a laboratory R&D activity at INAF Padova; exact team responsibilities and ongoing test results should be confirmed.",
    "refs": [
      [
        "MATTO design poster (INAF STILES)",
        "https://indico.ict.inaf.it/event/3498/attachments/11754/24322/Poster_STILES.pdf"
      ],
      [
        "DAO4MATTO real-time control presentation",
        "https://indico.ict.inaf.it/event/2870/contributions/20135/"
      ]
    ],
    "status": "current",
    "source": "https://indico.ict.inaf.it/event/3498/attachments/11754/24322/Poster_STILES.pdf",
    "pending": false
  },
  {
    "id": "nirvana",
    "name": "NIRVANA-VIS",
    "category": "Instrumentation",
    "telescope": "Large Binocular Telescope / development laboratory",
    "accent": "violet",
    "icon": "⊙",
    "overline": "LBT · Optical-instrument development",
    "blurb": "A visible-light instrumentation development linked to the LINC-NIRVANA programme.",
    "description": "NIRVANA-VIS is a visible-light instrumentation development activity associated with the LINC-NIRVANA technical ecosystem at the Large Binocular Telescope. A verified public technical description specific to the upgrade was not located; the available reference below describes the parent LINC-NIRVANA programme.",
    "science": [
      "Exploring possible visible-light uses of the instrument concept; the detailed observing programme is still to be confirmed by the team."
    ],
    "technical": "Optical design, mechanical integration, verification and commissioning planning are relevant development activities. No verified NIRVANA-VIS-specific spectral coverage, field of view or detector specification is quoted here.",
    "specs": [
      [
        "Technical baseline",
        "Awaiting project documentation"
      ],
      [
        "Related facility",
        "Large Binocular Telescope"
      ]
    ],
    "contribution": "ADOPT-specific project responsibilities, technical configuration and intended observations should be supplied or approved by the project team.",
    "refs": [
      [
        "LINC-NIRVANA parent instrument (MPIA)",
        "https://www.mpia.de/en/institute/technical-depts/eng-design/examples/LINC-NIRVANA"
      ]
    ],
    "partial": true,
    "status": "current",
    "source": "https://www.mpia.de/en/institute/technical-depts/eng-design/examples/LINC-NIRVANA",
    "pending": false
  },
  {
    "id": "plato",
    "name": "PLATO",
    "category": "More projects",
    "telescope": "ESA space mission",
    "accent": "blue",
    "icon": "◇",
    "overline": "ESA · Exoplanet space photometry",
    "blurb": "Finding and characterising Earth-sized planets around bright stars.",
    "description": "PLATO (PLAnetary Transits and Oscillations of stars) is an ESA space mission designed to monitor the brightness of many stars with high precision. Periodic dimmings can reveal transiting planets, while stellar oscillations help determine the host stars’ ages and other properties.",
    "science": [
      "Finding terrestrial exoplanets, including candidates near habitable zones.",
      "Measuring planet radii and characterising host stars by asteroseismology.",
      "Combining space photometry with ground-based follow-up to infer planetary densities."
    ],
    "technical": "PLATO uses an array of 26 small telescopic cameras, including two high-cadence cameras, to monitor a very large sky area. It is designed to observe from the Sun–Earth L2 region; launch is planned for 2027 as of the cited ESA overview.",
    "specs": [
      [
        "Cameras",
        "24 normal + 2 fast cameras"
      ],
      [
        "Normal / fast cadence",
        "25 s / 2.5 s"
      ],
      [
        "Combined field",
        "About 2,232 deg²"
      ],
      [
        "Launch",
        "Planned 2027 (check ESA for updates)"
      ]
    ],
    "contribution": "INAF researchers have contributed to PLATO telescope optical units and integration-related work; ADOPT-specific contributions must be confirmed.",
    "refs": [
      [
        "ESA PLATO mission",
        "https://www.esa.int/Science_Exploration/Space_Science/Plato"
      ],
      [
        "ESA camera design",
        "https://www.esa.int/Science_Exploration/Space_Science/Plato/Plato_s_cameras"
      ]
    ],
    "status": "current",
    "source": "https://www.esa.int/Science_Exploration/Space_Science/Plato",
    "pending": false
  },
  {
    "id": "vstpol",
    "name": "VSTPol",
    "category": "Instrumentation",
    "telescope": "VLT Survey Telescope (VST), Paranal",
    "accent": "sand",
    "icon": "◉",
    "overline": "VST · Wide-field optical polarimetry",
    "blurb": "Mapping the polarisation of optical light across a wide sky field.",
    "description": "VSTPol is a new polarimetric capability being developed for the INAF-operated VLT Survey Telescope. It adds measurements of the orientation and degree of light polarisation to wide-field imaging, providing information that ordinary brightness images cannot reveal.",
    "science": [
      "Investigating magnetic fields, scattering and emission processes.",
      "Surveying large areas and following variable objects.",
      "Studying optical polarisation associated with energetic Galactic and extragalactic sources."
    ],
    "technical": "The project introduces a polarimetric mode into the wide-field VST/OmegaCAM system and requires coordinated optical, mechanical, detector, software and telescope-interface work.",
    "specs": [
      [
        "Primary mirror",
        "2.6 m"
      ],
      [
        "Survey field",
        "Approximately 1 square degree"
      ],
      [
        "Science mode",
        "Optical polarimetry"
      ],
      [
        "Deployment",
        "Installation/testing programme in 2026"
      ]
    ],
    "contribution": "Technical research relevant to ADOPT includes opto-mechanical interfaces, alignment, calibration and instrument validation; local ownership of work packages needs review.",
    "refs": [
      [
        "INAF VSTPol observing and installation notice",
        "https://vst.inaf.it/observingvst"
      ],
      [
        "VSTPol technical and engineering overview",
        "https://cris.unibo.it/handle/11585/995761"
      ]
    ],
    "status": "current",
    "source": "https://vst.inaf.it/observingvst",
    "pending": false
  },
  {
    "id": "ingot",
    "name": "INGOT",
    "category": "Wavefront sensing",
    "telescope": "INAF Padova laboratory / on-sky demonstrator",
    "accent": "coral",
    "icon": "◇",
    "overline": "Technology · Sodium laser-guide-star wavefront sensing",
    "blurb": "Wavefront sensing tailored to elongated artificial guide stars.",
    "description": "The Ingot wavefront sensor is a novel concept from the adaptive-optics group in Padova for measuring wavefront distortions using elongated sodium laser-guide-star images. Its prism-like sensing geometry is shaped to match the three-dimensional appearance of the beacon.",
    "science": [
      "Improving the quality and sky coverage of adaptive-optics correction.",
      "Reducing sensing limitations introduced by laser-guide-star elongation on giant telescopes.",
      "Validating new measurement techniques by simulation, laboratory tests and on-sky experiments."
    ],
    "technical": "Unlike a conventional wavefront sensor optimized for a point source, the ingot-prism geometry is designed around the extended laser beacon. Research includes optical design, alignment sensitivity, detector signals and reconstruction algorithms.",
    "specs": [
      [
        "Guide-star type",
        "Sodium-layer laser guide stars"
      ],
      [
        "Sensor principle",
        "Ingot/prism-shaped optical sensing"
      ],
      [
        "Development",
        "Simulation, laboratory prototype, on-sky tests"
      ]
    ],
    "contribution": "The concept is associated with the Padova AO laboratory; current prototype and on-sky status should be confirmed with the project team.",
    "refs": [
      [
        "INAF Padova INGOT description",
        "https://www.oapd.inaf.it/attivit%C3%A0-di-ricerca/ricerca-tecnologica/ingot-wavefront-sensor"
      ]
    ],
    "status": "current",
    "source": "https://www.oapd.inaf.it/attivit%C3%A0-di-ricerca/ricerca-tecnologica/ingot-wavefront-sensor",
    "pending": false
  },
  {
    "id": "soxs",
    "name": "SOXS",
    "category": "Instrumentation",
    "telescope": "ESO 3.58-m New Technology Telescope, La Silla",
    "accent": "sand",
    "icon": "⌁",
    "overline": "NTT · Optical and near-infrared spectroscopy",
    "blurb": "Spectroscopic follow-up of supernovae and other rapidly changing objects.",
    "description": "SOXS (Son Of X-Shooter) is a spectrograph on the New Technology Telescope at La Silla, built to rapidly classify and study astronomical transients. It obtains ultraviolet/visible and near-infrared spectra over a broad wavelength range.",
    "science": [
      "Classifying supernovae, tidal disruption events and other transient sources.",
      "Measuring properties of gamma-ray bursts and variable astronomical objects.",
      "Providing follow-up spectroscopy for wide-field time-domain surveys."
    ],
    "technical": "Two spectrograph arms work together to cover 350–2000 nm, supported by acquisition/guiding, calibration, environmental control and a tightly coordinated observation pipeline.",
    "specs": [
      [
        "Telescope",
        "NTT, 3.58 m"
      ],
      [
        "Simultaneous coverage",
        "350–2000 nm"
      ],
      [
        "Mean resolving power",
        "R ≈ 4,500"
      ],
      [
        "Spectrograph arms",
        "UV–VIS and near-infrared"
      ]
    ],
    "contribution": "Research links include assembly, integration, verification and commissioning, with systems engineering and instrument operations. Team roles must be approved for public presentation.",
    "refs": [
      [
        "ESO SOXS instrument overview",
        "https://www.eso.org/public/teles-instr/lasilla/ntt/soxs/"
      ],
      [
        "ESO SOXS science operations",
        "https://www.eso.org/sci/facilities/lasilla/instruments/soxs.html"
      ]
    ],
    "status": "current",
    "source": "https://www.eso.org/public/teles-instr/lasilla/ntt/soxs/",
    "pending": false
  },
  {
    "id": "space-debris",
    "name": "Space Debris",
    "category": "More projects",
    "telescope": "Ground-based optical surveillance / tracking",
    "accent": "green",
    "icon": "⊙",
    "overline": "Space safety · Optical tracking",
    "blurb": "Optical detection and characterisation of human-made objects in orbit.",
    "description": "Space-debris monitoring uses telescopes and tracking techniques to detect and measure the positions of human-made objects orbiting Earth. This public page describes the general technical area; the exact ADOPT project configuration and instruments still need confirmation.",
    "science": [
      "Contributing to safer satellite operations and assessments of collision risk.",
      "Measuring orbital positions and brightness variations of tracked objects.",
      "Developing wide-field observation and rapid detection methods."
    ],
    "technical": "Relevant technologies include wide-field survey optics, precise pointing and timing, imaging detectors, astrometry and automated processing. INAF Padova has published work relating telescope alignment and space-debris monitoring, but no dedicated project specifications were verified for this directory entry.",
    "specs": [
      [
        "Specific facility",
        "To be confirmed"
      ],
      [
        "Primary methods",
        "Optical detection, astrometry and tracking"
      ]
    ],
    "contribution": "The ADOPT scope and any connection to Flyeye or MezzoCielo require confirmation rather than being assumed.",
    "refs": [
      [
        "INAF Padova wide-field alignment and debris work",
        "https://www.inpa.gov.it/bandi-e-avvisi/dettaglio-bando-avviso/?concorso_id=b74719bd4967452484bfb58e07522ce4"
      ]
    ],
    "partial": true,
    "status": "current",
    "source": "https://www.inpa.gov.it/bandi-e-avvisi/dettaglio-bando-avviso/?concorso_id=b74719bd4967452484bfb58e07522ce4",
    "pending": false
  },
  {
    "id": "trace-ao",
    "name": "TRACE-AO",
    "category": "Adaptive optics",
    "telescope": "",
    "accent": "teal",
    "icon": "◎",
    "overline": "Research project · Public profile under review",
    "blurb": "A project listed by the ADOPT group; publicly verifiable scope is still being identified.",
    "description": "TRACE-AO is included in the ADOPT research directory. No unambiguous public source for this specific project name was located, so its purpose and science cases are not being inferred from similarly named projects.",
    "science": [
      "Science applications require confirmation from the TRACE-AO project team."
    ],
    "technical": "Technical concept, telescope/facility, performance figures and responsible institutions are awaiting verified project documentation.",
    "specs": [],
    "contribution": "A short approved abstract, project URL or publication would allow this entry to be completed.",
    "refs": [],
    "pending": true,
    "status": "current",
    "source": ""
  },
  {
    "id": "oscar",
    "name": "OSCAR",
    "category": "More projects",
    "telescope": "",
    "accent": "blue",
    "icon": "◇",
    "overline": "Research project · Public profile under review",
    "blurb": "Project listed by the group; a unique astronomical source has not yet been verified.",
    "description": "OSCAR is listed as part of the ADOPT project directory. The acronym is used by unrelated initiatives, and available results did not establish which OSCAR belongs here.",
    "science": [
      "Science objectives will be added after the specific project is confirmed."
    ],
    "technical": "Instrument configuration and specifications have not been verified for this OSCAR project.",
    "specs": [],
    "contribution": "An official reference or short technical note from the project team is needed.",
    "refs": [],
    "pending": true,
    "status": "current",
    "source": ""
  },
  {
    "id": "tdt",
    "name": "TDT",
    "category": "More projects",
    "telescope": "Candidate: Time Domain Telescope concept",
    "accent": "sand",
    "icon": "◉",
    "overline": "Time-domain astronomy · Identity to confirm",
    "blurb": "A possible match is the Time Domain Telescope concept for rapid optical spectroscopy.",
    "description": "A publicly documented project called the Time Domain Telescope (TDT) proposes a coordinated array of robotic telescopes dedicated to rapid, repeated observations. It is a plausible match for this directory entry, but the ADOPT team should confirm that it is the intended TDT before treating this identification as definitive.",
    "science": [
      "If this is the Time Domain Telescope: fast transient follow-up, accretion variability, compact-object binaries and short-timescale spectroscopy."
    ],
    "technical": "The published concept describes multiple 1–2 m class robotic unit telescopes feeding fibre-coupled spectrographs, with time-resolved photon-counting detection as a major technology goal. These are conceptual specifications for the candidate project, not verified ADOPT commitments.",
    "specs": [
      [
        "Possible expansion",
        "Time Domain Telescope (unconfirmed)"
      ],
      [
        "Conceptual unit size",
        "Approximately 1–2 m"
      ],
      [
        "Observing concept",
        "Coordinated robotic array; high-cadence spectroscopy"
      ]
    ],
    "contribution": "Please confirm whether the ADOPT TDT entry refers to this international concept.",
    "refs": [
      [
        "Potential match: Time Domain Telescope",
        "https://www.astro.dur.ac.uk/~simo/TDTelescope/"
      ]
    ],
    "partial": true,
    "status": "current",
    "source": "https://www.astro.dur.ac.uk/~simo/TDTelescope/",
    "pending": false
  },
  {
    "id": "micado-science",
    "name": "MICADO Science",
    "category": "More projects",
    "telescope": "ESO Extremely Large Telescope",
    "accent": "coral",
    "icon": "⌁",
    "overline": "ELT · High-resolution infrared science",
    "blurb": "Scientific opportunities enabled by the MICADO infrared imager and MORFEO.",
    "description": "MICADO is the high-resolution near-infrared camera and spectrograph planned for the ELT. Working with adaptive-optics correction from MORFEO, it is designed for exceptionally sharp imaging, accurate astrometry, coronagraphy and spectroscopy.",
    "science": [
      "Measuring precise motions of stars near the Galactic Centre.",
      "Resolving stellar populations and star formation in nearby and distant galaxies.",
      "Characterising exoplanets, disks and compact environments through high-resolution imaging."
    ],
    "technical": "MICADO includes high- and low-resolution imaging, near-infrared filters, coronagraphic capabilities and slit spectroscopy. The system uses a cryogenic opto-mechanical assembly and a nine-detector array.",
    "specs": [
      [
        "Wavelength",
        "0.8–2.4 µm"
      ],
      [
        "Imager field",
        "50.5 × 50.5 arcsec (wide); 19 × 19 arcsec (narrow)"
      ],
      [
        "Pixel scales",
        "4 mas and 1.5 mas/pixel"
      ],
      [
        "Astrometric requirement",
        "50 µas relative precision"
      ]
    ],
    "contribution": "This page covers scientific cases connected to the MICADO instrument. Any direct ADOPT scientific programme or participation must be verified.",
    "refs": [
      [
        "ESO MICADO specifications and science",
        "https://elt.eso.org/instrument/MICADO/"
      ]
    ],
    "status": "current",
    "source": "https://elt.eso.org/instrument/MICADO/",
    "pending": false
  },
  {
    "id": "einstein-telescope",
    "name": "Einstein Telescope",
    "category": "More projects",
    "telescope": "Proposed underground gravitational-wave observatory",
    "accent": "violet",
    "icon": "✧",
    "overline": "Gravitational-wave astronomy · Future infrastructure",
    "blurb": "A next-generation underground observatory for signals from cosmic mergers.",
    "description": "The Einstein Telescope is a proposed European, third-generation gravitational-wave observatory. Its extremely sensitive laser interferometers are designed to detect the tiny changes in distance caused by passing gravitational waves, extending observations much farther into the Universe.",
    "science": [
      "Investigating collisions of black holes and neutron stars.",
      "Testing gravity and the behaviour of matter under extreme conditions.",
      "Studying cosmic history and triggering multi-messenger follow-up."
    ],
    "technical": "Design studies investigate underground interferometers, ultra-stable laser optics, cryogenic mirrors, advanced quantum-noise suppression and vibration isolation. In 2026 both a 10-km triangular design and a pair of 15-km L-shaped detectors remain under consideration.",
    "specs": [
      [
        "Configuration",
        "10-km triangle or 2 × 15-km L shapes under study"
      ],
      [
        "Environment",
        "Underground low-vibration infrastructure"
      ],
      [
        "Optics",
        "Laser interferometry; cryogenic technologies"
      ]
    ],
    "contribution": "Any ADOPT activity related to Einstein Telescope optics, site testing or technology development needs project-lead verification.",
    "refs": [
      [
        "Einstein Telescope organisation",
        "https://einsteintelescope.eu/"
      ],
      [
        "2026 detector geometry comparison",
        "https://einsteintelescope.eu/news/over-200-contributors-deliver-einstein-telescope-geometry-comparison-report/"
      ]
    ],
    "status": "current",
    "source": "https://einsteintelescope.eu/",
    "pending": false
  },
  {
    "id": "haydin",
    "name": "HAYDIN",
    "category": "More projects",
    "telescope": "Possible match: proposed HAYDN space mission",
    "accent": "green",
    "icon": "⊙",
    "overline": "Project name · Verification needed",
    "blurb": "Possible link to an asteroseismology mission concept called HAYDN; spelling needs confirmation.",
    "description": "The public scientific literature describes HAYDN (High-precision AsteroseismologY of DeNse stellar fields), a proposed space-photometry mission, including researchers from Padova. The ADOPT directory currently lists HAYDIN; whether these names refer to the same effort has not been confirmed.",
    "science": [
      "If HAYDN is intended: precise measurements of stellar oscillations in dense clusters.",
      "Studying metal-poor stellar evolution and the Milky Way bulge.",
      "Deriving stellar ages and tracing Galactic formation history."
    ],
    "technical": "The published HAYDN concept argues for long-duration, high-cadence photometry of dense stellar fields. No approved mission hardware baseline or ADOPT-specific optical contribution has been confirmed for the entry labelled HAYDIN.",
    "specs": [
      [
        "Possible published name",
        "HAYDN — identity unconfirmed"
      ],
      [
        "Observational method",
        "High-precision space photometry (concept)"
      ]
    ],
    "contribution": "Before treating this as verified, the group should confirm whether the intended project name is HAYDN or HAYDIN.",
    "refs": [
      [
        "Potential match: HAYDN scientific paper",
        "https://doi.org/10.1007/s10686-021-09711-1"
      ]
    ],
    "partial": true,
    "status": "current",
    "source": "https://doi.org/10.1007/s10686-021-09711-1",
    "pending": false
  },
  {
    "id": "lbcmos",
    "name": "LBCmos",
    "category": "Instrumentation",
    "telescope": "Large Binocular Telescope",
    "accent": "teal",
    "icon": "◎",
    "overline": "LBT · Wide-field camera detector upgrade",
    "blurb": "Modernising wide-field imaging and photometry using CMOS detector technology.",
    "description": "LBCmos is an instrumentation upgrade study for the Large Binocular Cameras at the Large Binocular Telescope. The aim is to extend the cameras’ scientific utility by considering modern CMOS detectors and associated camera/electronics upgrades.",
    "science": [
      "Wide-field deep imaging and precise photometry.",
      "Improving detector capabilities for future LBT surveys and transient follow-up."
    ],
    "technical": "The publicly indexed 2026 conference contribution describes an LBC CMOS upgrade, but the complete final detector geometry, pixel scale and readout performance were not independently verified and are therefore not quoted as fixed specifications.",
    "specs": [
      [
        "Telescope",
        "LBT, two 8.4-m apertures"
      ],
      [
        "Instrument",
        "Large Binocular Cameras (LBC)"
      ],
      [
        "Technology",
        "CMOS focal-plane upgrade under study"
      ]
    ],
    "contribution": "Relevant activities may include detector engineering, optics, control systems and camera performance verification; exact institutional responsibilities need confirmation.",
    "refs": [
      [
        "LBCmos instrumentation conference paper",
        "https://doi.org/10.1117/12.3100633"
      ],
      [
        "LBT camera overview",
        "https://www.lbt.inaf.it/instruments.html"
      ]
    ],
    "status": "current",
    "source": "https://doi.org/10.1117/12.3100633",
    "pending": false
  },
  {
    "id": "linc-nirvana",
    "name": "LINC-NIRVANA",
    "status": "past",
    "category": "Past projects",
    "telescope": "Large Binocular Telescope",
    "accent": "teal",
    "icon": "◎",
    "overline": "Past project · Multi-conjugate AO and interferometry",
    "blurb": "A near-infrared interferometric camera combining the light from the LBT’s two mirrors.",
    "description": "LINC-NIRVANA was developed to combine near-infrared light from the two 8.4-m LBT mirrors and achieve the resolution possible from their much larger interferometric baseline. It pioneered layer-oriented, multi-conjugate adaptive optics using natural guide stars and pyramid wavefront sensing.",
    "science": [
      "Resolving the structure of star-forming environments and circumstellar discs.",
      "Observing stellar populations, interacting galaxies and compact structures.",
      "Studying interferometric imaging and the correction of atmospheric turbulence."
    ],
    "technical": "Its design combined beams in Fizeau mode, employed separate ground/high-layer adaptive optics and fringe/flexure tracking. Published design goals describe J/H/K imaging at roughly 1–2.4 µm with a maximum 23-m baseline.",
    "specs": [
      [
        "Telescope",
        "2 × 8.4-m LBT primary mirrors"
      ],
      [
        "Interferometric baseline",
        "Up to 23 m"
      ],
      [
        "Design wavelength",
        "Approximately 1–2.4 µm"
      ],
      [
        "Design field",
        "Around 10 × 10 arcsec"
      ]
    ],
    "contribution": "A historic collaboration involving INAF and Max Planck institutes, with optical alignment, instrumentation and on-sky commissioning activities.",
    "refs": [
      [
        "Max Planck LINC-NIRVANA instrument description",
        "https://www.mpifr-bonn.mpg.de/393074/lincnirvana"
      ],
      [
        "MPIA LINC-NIRVANA instrument example",
        "https://www.mpia.de/en/institute/technical-depts/eng-design/examples/LINC-NIRVANA"
      ]
    ],
    "source": "https://www.mpifr-bonn.mpg.de/393074/lincnirvana",
    "pending": false
  },
  {
    "id": "waterfall",
    "name": "WaterFall",
    "status": "past",
    "category": "Past projects",
    "telescope": "Ophthalmic optical metrology",
    "accent": "blue",
    "icon": "◇",
    "overline": "Past project · Pyramid sensing beyond astronomy",
    "blurb": "An optical metrology prototype applying pyramid wavefront sensing to ophthalmology.",
    "description": "WaterFall is described in a University of Padova doctoral thesis as an application of pyramid wavefront-sensing principles to optical measurements in the human eye. The prototype was developed to measure the dioptric power of intraocular lenses.",
    "science": [
      "Transferring astronomical wavefront-sensor methods to ophthalmic measurements.",
      "Measuring the optical properties of intraocular lenses.",
      "Validating compact precision-sensing and calibration methods."
    ],
    "technical": "The published description identifies an optical prototype involving pyramid wavefront sensors at an approximately 8-mm pupil scale. Further commercial or performance claims are not made without an authoritative project specification.",
    "specs": [
      [
        "Application",
        "Ophthalmology / lens measurement"
      ],
      [
        "Optical scale",
        "Around 8-mm pupil"
      ],
      [
        "Technique",
        "Pyramid wavefront sensing"
      ]
    ],
    "contribution": "A cross-disciplinary technology-development example involving optical concepts used in astronomy.",
    "refs": [
      [
        "University of Padova thesis describing WaterFall",
        "https://www.research.unipd.it/handle/11577/3426297"
      ]
    ],
    "source": "https://www.research.unipd.it/handle/11577/3426297",
    "pending": false
  },
  {
    "id": "cheops",
    "name": "CHEOPS",
    "status": "past",
    "category": "Past projects",
    "telescope": "ESA exoplanet space mission",
    "accent": "sand",
    "icon": "◉",
    "overline": "Past project involvement · Exoplanet photometry",
    "blurb": "Precise measurements of known exoplanets passing in front of bright stars.",
    "description": "CHEOPS (CHaracterising ExOPlanet Satellite) is an ESA space telescope that observes bright stars already known to host exoplanets. By measuring small decreases in starlight during transits, CHEOPS determines planet radii with high precision, helping researchers infer densities and compositions when masses are known.",
    "science": [
      "Characterising super-Earth and Neptune-sized exoplanets.",
      "Understanding planetary structures, formation and orbital properties.",
      "Supporting follow-up studies of known planetary systems."
    ],
    "technical": "The spacecraft carries a single stable, high-precision photometer with a 30-cm effective-aperture telescope and a CCD detector. Launched in 2019, CHEOPS orbits at an altitude around 700 km. Its status as an ADOPT past project refers to historical group involvement, not the operating status of the ESA mission.",
    "specs": [
      [
        "Telescope effective aperture",
        "30 cm"
      ],
      [
        "Science field",
        "About 19 × 19 arcmin"
      ],
      [
        "Orbit",
        "Sun-synchronous, ~700 km"
      ],
      [
        "Launch",
        "18 December 2019"
      ]
    ],
    "contribution": "Historical contributions from Padova include space-camera optical work; precise ADOPT involvement and dates should be verified.",
    "refs": [
      [
        "ESA CHEOPS mission",
        "https://www.esa.int/Science_Exploration/Space_Science/Cheops"
      ],
      [
        "ESA CHEOPS technical overview",
        "https://www.esa.int/Science_Exploration/Space_Science/Cheops/Cheops_overview2"
      ]
    ],
    "source": "https://www.esa.int/Science_Exploration/Space_Science/Cheops",
    "pending": false
  },
  {
    "id": "plato-2-0",
    "name": "PLATO 2.0",
    "status": "past",
    "category": "Past projects",
    "telescope": "Earlier ESA PLATO mission design phase",
    "accent": "coral",
    "icon": "⌁",
    "overline": "Past project · Historical mission concept",
    "blurb": "The earlier PLATO 2.0 development concept preceding today’s ESA PLATO configuration.",
    "description": "PLATO 2.0 was an earlier programme name and design phase within the development of ESA’s exoplanet photometry mission. Historic presentations discussed optical camera architectures that were subsequently revised; it is not a separate contemporary space mission alongside PLATO.",
    "science": [
      "Planning wide-field transit searches for Earth-like planets around bright stars.",
      "Defining stellar-oscillation science to measure host-star properties.",
      "Developing camera optical systems and early instrument requirements."
    ],
    "technical": "Earlier PLATO 2.0 literature included studies with more cameras than the present 26-camera PLATO baseline. Historical figures must not be mistaken for the current design: the active PLATO project page provides today’s ESA specifications.",
    "specs": [
      [
        "Project type",
        "Historical PLATO design/programme phase"
      ],
      [
        "Current successor",
        "ESA PLATO mission (26-camera baseline)"
      ]
    ],
    "contribution": "This archive records earlier optical-development and mission-preparation work; specific group tasks and dates need verification.",
    "refs": [
      [
        "Historical INAF article on PLATO 2.0",
        "https://www.media.inaf.it/2014/12/02/a-taormina-va-in-scena-plato/"
      ],
      [
        "ESA current PLATO mission",
        "https://www.esa.int/Science_Exploration/Space_Science/Plato"
      ]
    ],
    "source": "https://www.media.inaf.it/2014/12/02/a-taormina-va-in-scena-plato/",
    "pending": false
  }
];
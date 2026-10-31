// Public project descriptions. Unresolved entries are preserved in PROJECT_DRAFTS.json.
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
    "contribution": "Group members contribute to project management, assembly, integration and verification, commissioning, and the preparation and analysis of observations within the SHARK-NIR collaboration.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Instrument in operation",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "mavis",
    "name": "MAVIS",
    "category": "Adaptive optics",
    "telescope": "ESO VLT Unit Telescope 4",
    "accent": "blue",
    "icon": "◉",
    "overline": "VLT · Visible-light adaptive optics",
    "blurb": "Adaptive-optics-assisted visible-light imaging and spatially resolved spectroscopy.",
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
    "contribution": "Our work includes optical design, the adaptive-optics calibration strategy, system engineering and verification of the adaptive-optics module, in collaboration with the international MAVIS team.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Instrument development",
    "reviewed": "31 October 2026",
    "partial": false
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
    "contribution": "Our activities include optical design, adaptive-optics modelling and preparation for assembly, integration, verification and testing at the telescope Nasmyth platform, including coordination with the laser-guide-star wavefront-sensor team.",
    "refs": [
      [
        "ESO MORFEO project page",
        "https://elt.eso.org/instrument/MORFEO/"
      ]
    ],
    "status": "current",
    "source": "https://elt.eso.org/instrument/MORFEO/",
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Instrument development",
    "reviewed": "31 October 2026",
    "partial": false
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
    "contribution": "Doctoral research in the group contributes to the development of this adaptive-optics experimentation platform at Asiago.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Experimental platform",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "mezzocielo",
    "name": "Mezzocielo",
    "category": "Instrumentation",
    "telescope": "Proposed wide-field survey telescope",
    "accent": "violet",
    "icon": "✧",
    "overline": "Instrumentation · Very wide field",
    "blurb": "A telescope concept designed to observe a very wide area of the sky.",
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
    "contribution": "Group members study the optical configuration, corrector design, optomechanics and performance of the wide-field telescope demonstrator.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Telescope demonstrator",
    "reviewed": "31 October 2026",
    "partial": false
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
    "contribution": "Our laboratory work includes the multi-conjugate adaptive-optics test bench, wavefront sensing, real-time control and experimental validation.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Laboratory research",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "nirvana",
    "name": "NIRVANA-VIS",
    "category": "Instrumentation",
    "telescope": "Large Binocular Telescope / development laboratory",
    "accent": "violet",
    "icon": "⊙",
    "overline": "LBT · Optical-instrument development",
    "blurb": "A visible-light upgrade of LINC-NIRVANA, combining adaptive optics and speckle holography.",
    "description": "NIRVANA-VIS develops a visible-light channel for LINC-NIRVANA at the Large Binocular Telescope. It combines ground-layer adaptive optics with speckle holography, a method for reconstructing images from short exposures.",
    "science": [
      "Studying astronomical targets at visible wavelengths with improved angular resolution.",
      "Combining adaptive-optics correction with short-exposure image reconstruction."
    ],
    "technical": "The development combines optical integration, calibration and characterisation of non-common-path aberrations: optical errors that affect the science camera differently from the wavefront sensor.",
    "specs": [
      [
        "Facility",
        "Large Binocular Telescope"
      ],
      [
        "Approach",
        "Visible-light imaging with adaptive optics and speckle holography"
      ]
    ],
    "contribution": "Our contributions include systems engineering, calibration and optical-aberration characterisation, laboratory integration and commissioning planning, including doctoral research.",
    "refs": [
      [
        "NIRVANA-VIS instrument concept (AO4ELT7)",
        "https://doi.org/10.13009/ao4elt7-2023-067"
      ],
      [
        "LINC-NIRVANA parent instrument (MPIA)",
        "https://www.mpia.de/en/institute/technical-depts/eng-design/examples/LINC-NIRVANA"
      ]
    ],
    "partial": false,
    "status": "current",
    "source": "https://www.mpia.de/en/institute/technical-depts/eng-design/examples/LINC-NIRVANA",
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Integration and commissioning preparation",
    "reviewed": "31 October 2026"
  },
  {
    "id": "plato",
    "name": "PLATO",
    "category": "Space & observatories",
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
    "contribution": "Group members contribute to telescope optical design, systems engineering, technical assurance and integration within the wider PLATO collaboration.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Space instrumentation",
    "reviewed": "31 October 2026",
    "partial": false
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
    "contribution": "The polarimetric mode brings together optical and mechanical interfaces, calibration and instrument validation. The linked project references describe the wider collaboration.",
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
    "pending": false,
    "contributionHeading": "Research context",
    "phase": "Polarimetric instrument development",
    "reviewed": "31 October 2026",
    "partial": false
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
    "contribution": "Our work includes wavefront-sensor development, simulations, laboratory assembly, integration and testing, and preparation for on-sky experiments.",
    "refs": [
      [
        "INAF Padova INGOT description",
        "https://www.oapd.inaf.it/attivit%C3%A0-di-ricerca/ricerca-tecnologica/ingot-wavefront-sensor"
      ]
    ],
    "status": "current",
    "source": "https://www.oapd.inaf.it/attivit%C3%A0-di-ricerca/ricerca-tecnologica/ingot-wavefront-sensor",
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Laboratory research and on-sky preparation",
    "reviewed": "31 October 2026",
    "partial": false
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
    "contribution": "Our contributions include leadership of assembly, integration and verification (AIV), deputy systems engineering, instrument installation and commissioning at La Silla, and preparation for operations within the SOXS consortium.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Commissioning and operations preparation",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "space-debris",
    "name": "Space Debris",
    "category": "Space & observatories",
    "telescope": "Ground-based optical surveillance / tracking",
    "accent": "green",
    "icon": "⊙",
    "overline": "Space safety · Optical tracking",
    "blurb": "Optical detection and characterisation of human-made objects in orbit.",
    "description": "Optical observations help detect, track and characterise artificial objects orbiting Earth. Our research includes measurements of their positions, brightness variations and polarisation.",
    "science": [
      "Contributing to safer satellite operations and assessments of collision risk.",
      "Measuring orbital positions and brightness variations of tracked objects.",
      "Developing wide-field observation and rapid detection methods."
    ],
    "technical": "The work draws on telescope optics, pointing and timing, imaging detectors, astrometry and polarimetry to measure and interpret light reflected by objects in orbit.",
    "specs": [
      [
        "Methods",
        "Optical tracking, astrometry and polarimetry"
      ]
    ],
    "contribution": "Group members study optical tracking and the characterisation of artificial objects in orbit, including polarimetry and the analysis of brightness variations.",
    "refs": [
      [
        "INAF Padova wide-field alignment and debris work",
        "https://www.inpa.gov.it/bandi-e-avvisi/dettaglio-bando-avviso/?concorso_id=b74719bd4967452484bfb58e07522ce4"
      ]
    ],
    "partial": false,
    "status": "current",
    "source": "https://www.inpa.gov.it/bandi-e-avvisi/dettaglio-bando-avviso/?concorso_id=b74719bd4967452484bfb58e07522ce4",
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Optical surveillance research",
    "reviewed": "31 October 2026"
  },
  {
    "id": "micado-science",
    "name": "MICADO Science",
    "category": "Space & observatories",
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
    "contribution": "Research interests include reconstruction of the point-spread function: the way a point source appears in an image. This supports the interpretation of observations corrected by adaptive optics.",
    "refs": [
      [
        "ESO MICADO specifications and science",
        "https://elt.eso.org/instrument/MICADO/"
      ]
    ],
    "status": "current",
    "source": "https://elt.eso.org/instrument/MICADO/",
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Science preparation",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "einstein-telescope",
    "name": "Einstein Telescope",
    "category": "Space & observatories",
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
    "contribution": "Optical measurement and precision instrumentation connect this research area with the group’s interests. The official project website describes the observatory and its collaboration.",
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
    "pending": false,
    "contributionHeading": "Research context",
    "phase": "Observatory development",
    "reviewed": "31 October 2026",
    "partial": false
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
    "technical": "The upgrade study considers modern CMOS detectors and associated electronics for the Large Binocular Cameras. The linked instrumentation paper describes the proposed detector and readout approach.",
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
    "contribution": "The upgrade study concerns detector technology, camera electronics and imaging performance. The linked conference paper describes the instrument concept.",
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
    "pending": false,
    "contributionHeading": "Research context",
    "phase": "Detector upgrade study",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "linc-nirvana",
    "name": "LINC-NIRVANA",
    "status": "past",
    "category": "Past projects",
    "telescope": "Large Binocular Telescope",
    "accent": "teal",
    "icon": "◎",
    "overline": "Previous involvement · Multi-conjugate AO and interferometry",
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
    "contribution": "Group members contributed to optical alignment, wavefront sensing, integration and on-sky commissioning through the international LINC-NIRVANA collaboration.",
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
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Previous group involvement",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "waterfall",
    "name": "WaterFall",
    "status": "past",
    "category": "Past projects",
    "telescope": "Ophthalmic optical metrology",
    "accent": "blue",
    "icon": "◇",
    "overline": "Previous involvement · Pyramid sensing beyond astronomy",
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
    "contribution": "This work applies pyramid wavefront-sensing methods from astronomical optics to measurements of the human eye.",
    "refs": [
      [
        "University of Padova thesis describing WaterFall",
        "https://www.research.unipd.it/handle/11577/3426297"
      ]
    ],
    "source": "https://www.research.unipd.it/handle/11577/3426297",
    "pending": false,
    "contributionHeading": "Our contribution",
    "phase": "Previous group involvement",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "cheops",
    "name": "CHEOPS",
    "status": "past",
    "category": "Past projects",
    "telescope": "ESA exoplanet space mission",
    "accent": "sand",
    "icon": "◉",
    "overline": "Previous involvement · Exoplanet photometry",
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
    "contribution": "This archive provides context for earlier involvement in space-camera optical development. Mission operations and scientific results are documented by ESA and the CHEOPS collaboration.",
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
    "pending": false,
    "contributionHeading": "Research context",
    "phase": "Previous group involvement",
    "reviewed": "31 October 2026",
    "partial": false
  },
  {
    "id": "plato-2-0",
    "name": "PLATO 2.0",
    "status": "past",
    "category": "Past projects",
    "telescope": "Earlier ESA PLATO mission design phase",
    "accent": "coral",
    "icon": "⌁",
    "overline": "Previous involvement · Historical mission concept",
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
    "contribution": "This entry documents the earlier optical-development and mission-preparation context. See PLATO for the current instrument design.",
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
    "pending": false,
    "contributionHeading": "Research context",
    "phase": "Previous group involvement",
    "reviewed": "31 October 2026",
    "partial": false
  }
];

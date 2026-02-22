
#import "@preview/fontawesome:0.5.0": fa-icon

#let name = "Axole Maranjana"
#let locale-catalog-page-numbering-style = context { "Axole Maranjana - Page " + str(here().page()) + " of " + str(counter(page).final().first()) + "" }
#let locale-catalog-last-updated-date-style = "Last updated in Feb 2025"
#let locale-catalog-language = "en"
#let design-page-size = "us-letter"
#let design-colors-text = rgb(0, 0, 0)
#let design-colors-section-titles = rgb(0, 0, 0)
#let design-colors-last-updated-date-and-page-numbering = rgb(128, 128, 128)
#let design-colors-name = rgb(0, 0, 0)
#let design-colors-connections = rgb(0, 0, 0)
#let design-colors-links = rgb(0, 79, 144)
#let design-section-titles-font-family = "New Computer Modern"
#let design-section-titles-bold = true
#let design-section-titles-line-thickness = 0.5pt
#let design-section-titles-font-size = 1.4em
#let design-section-titles-type = "with-full-line"
#let design-section-titles-vertical-space-above = 0.5cm
#let design-section-titles-vertical-space-below = 0.3cm
#let design-section-titles-small-caps = false
#let design-links-use-external-link-icon = false
#let design-text-font-size = 10pt
#let design-text-leading = 0.6em
#let design-text-font-family = "New Computer Modern"
#let design-text-alignment = "justified"
#let design-text-date-and-location-column-alignment = right
#let design-header-photo-width = 3.5cm
#let design-header-use-icons-for-connections = true
#let design-header-name-font-family = "New Computer Modern"
#let design-header-name-font-size = 30pt
#let design-header-name-bold = true
#let design-header-small-caps-for-name = false
#let design-header-connections-font-family = "New Computer Modern"
#let design-header-vertical-space-between-name-and-connections = 0.7cm
#let design-header-vertical-space-between-connections-and-first-section = 0.7cm
#let design-header-use-icons-for-connections = true
#let design-header-horizontal-space-between-connections = 0.5cm
#let design-header-separator-between-connections = ""
#let design-header-alignment = center
#let design-highlights-summary-left-margin = 0cm
#let design-highlights-bullet = "◦"
#let design-highlights-nested-bullet = "-"
#let design-highlights-top-margin = 0.25cm
#let design-highlights-left-margin = 0.4cm
#let design-highlights-vertical-space-between-highlights = 0.25cm
#let design-highlights-horizontal-space-between-bullet-and-highlights = 0.5em
#let design-entries-vertical-space-between-entries = 1.2em
#let design-entries-date-and-location-width = 4.15cm
#let design-entries-allow-page-break-in-entries = true
#let design-entries-horizontal-space-between-columns = 0.1cm
#let design-entries-left-and-right-margin = 0.2cm
#let design-page-top-margin = 2cm
#let design-page-bottom-margin = 2cm
#let design-page-left-margin = 2cm
#let design-page-right-margin = 2cm
#let design-page-show-last-updated-date = true
#let design-page-show-page-numbering = true
#let design-links-underline = true
#let design-entry-types-education-entry-degree-column-width = 1cm
#let date = datetime.today()

// Metadata:
#set document(author: name, title: name + "'s CV", date: date)

// Page settings:
#set page(
  margin: (
    top: design-page-top-margin,
    bottom: design-page-bottom-margin,
    left: design-page-left-margin,
    right: design-page-right-margin,
  ),
  paper: design-page-size,
  footer: if design-page-show-page-numbering {
    text(
      fill: design-colors-last-updated-date-and-page-numbering,
      align(center, [_#locale-catalog-page-numbering-style _]),
      size: 0.9em,
    )
  } else {
    none
  },
  footer-descent: 0% - 0.3em + design-page-bottom-margin / 2,
)
// Text settings:
#let justify
#let hyphenate
#if design-text-alignment == "justified" {
  justify = true
  hyphenate = true
} else if design-text-alignment == "left" {
  justify = false
  hyphenate = false
} else if design-text-alignment == "justified-with-no-hyphenation" {
  justify = true
  hyphenate = false
}
#set text(
  font: design-text-font-family,
  size: design-text-font-size,
  lang: locale-catalog-language,
  hyphenate: hyphenate,
  fill: design-colors-text,
  // Disable ligatures for better ATS compatibility:
  ligatures: true,
)
#set par(
  spacing: 0pt,
  leading: design-text-leading,
  justify: justify,
)
#set enum(
  spacing: design-entries-vertical-space-between-entries,
)

// Highlights settings:
#let highlights(..content) = {
  list(
    ..content,
    marker: design-highlights-bullet,
    spacing: design-highlights-vertical-space-between-highlights,
    indent: design-highlights-left-margin,
    body-indent: design-highlights-horizontal-space-between-bullet-and-highlights,
  )
}
#show list: set list(
  marker: design-highlights-nested-bullet,
  spacing: design-highlights-vertical-space-between-highlights,
  indent: 0pt,
  body-indent: design-highlights-horizontal-space-between-bullet-and-highlights,
)

// Entry utilities:
#let bullet-entry(..content) = {
  list(
    ..content,
    marker: design-highlights-bullet,
    spacing: 0pt,
    indent: 0pt,
    body-indent: design-highlights-horizontal-space-between-bullet-and-highlights,
  )
}
#let three-col(
  left-column-width: 1fr,
  middle-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  middle-content: "",
  right-content: "",
  alignments: (auto, auto, auto),
) = [
  #block(
    grid(
      columns: (left-column-width, middle-column-width, right-column-width),
      column-gutter: design-entries-horizontal-space-between-columns,
      align: alignments,
      ([#set par(spacing: design-text-leading); #left-content]),
      ([#set par(spacing: design-text-leading); #middle-content]),
      ([#set par(spacing: design-text-leading); #right-content]),
    ),
    breakable: true,
    width: 100%,
  )
]

#let two-col(
  left-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  right-content: "",
  alignments: (auto, auto),
  column-gutter: design-entries-horizontal-space-between-columns,
) = [
  #block(
    grid(
      columns: (left-column-width, right-column-width),
      column-gutter: column-gutter,
      align: alignments,
      ([#set par(spacing: design-text-leading); #left-content]),
      ([#set par(spacing: design-text-leading); #right-content]),
    ),
    breakable: true,
    width: 100%,
  )
]

// Main heading settings:
#let header-font-weight
#if design-header-name-bold {
  header-font-weight = 700
} else {
  header-font-weight = 400
}
#show heading.where(level: 1): it => [
  #set par(spacing: 0pt)
  #set align(design-header-alignment)
  #set text(
    font: design-header-name-font-family,
    weight: header-font-weight,
    size: design-header-name-font-size,
    fill: design-colors-name,
  )
  #if design-header-small-caps-for-name [
    #smallcaps(it.body)
  ] else [
    #it.body
  ]
  // Vertical space after the name
  #v(design-header-vertical-space-between-name-and-connections)
]

#let section-title-font-weight
#if design-section-titles-bold {
  section-title-font-weight = 700
} else {
  section-title-font-weight = 400
}

#show heading.where(level: 2): it => [
  #set align(left)
  #set text(size: (1em / 1.2)) // reset
  #set text(
    font: design-section-titles-font-family,
    size: (design-section-titles-font-size),
    weight: section-title-font-weight,
    fill: design-colors-section-titles,
  )
  #let section-title = (
    if design-section-titles-small-caps [
      #smallcaps(it.body)
    ] else [
      #it.body
    ]
  )
  // Vertical space above the section title
  #v(design-section-titles-vertical-space-above, weak: true)
  #block(
    breakable: false,
    width: 100%,
    [
      #if design-section-titles-type == "moderncv" [
        #two-col(
          alignments: (right, left),
          left-column-width: design-entries-date-and-location-width,
          right-column-width: 1fr,
          left-content: [
            #align(horizon, box(width: 1fr, height: design-section-titles-line-thickness, fill: design-colors-section-titles))
          ],
          right-content: [
            #section-title
          ]
        )

      ] else [
        #box(
          [
            #section-title
            #if design-section-titles-type == "with-partial-line" [
              #box(width: 1fr, height: design-section-titles-line-thickness, fill: design-colors-section-titles)
            ] else if design-section-titles-type == "with-full-line" [

              #v(design-text-font-size * 0.4)
              #box(width: 1fr, height: design-section-titles-line-thickness, fill: design-colors-section-titles)
            ]
          ]
        )
      ]
     ] + v(1em),
  )
  #v(-1em)
  // Vertical space after the section title
  #v(design-section-titles-vertical-space-below - 0.5em)
]

// Links:
#let original-link = link
#let link(url, body) = {
  body = [#if design-links-underline [#underline(body)] else [#body]]
  body = [#if design-links-use-external-link-icon [#body#h(design-text-font-size/4)#box(
        fa-icon("external-link", size: 0.7em),
        baseline: -10%,
      )] else [#body]]
  body = [#set text(fill: design-colors-links);#body]
  original-link(url, body)
}

// Last updated date text:
#if design-page-show-last-updated-date {
  let dx
  if design-section-titles-type == "moderncv" {
    dx = 0cm
  } else {
    dx = -design-entries-left-and-right-margin
  }
  place(
    top + right,
    dy: -design-page-top-margin / 2,
    dx: dx,
    text(
      [_#locale-catalog-last-updated-date-style _],
      fill: design-colors-last-updated-date-and-page-numbering,
      size: 0.9em,
    ),
  )
}

#let connections(connections-list) = context {
  set text(fill: design-colors-connections, font: design-header-connections-font-family)
  set par(leading: design-text-leading*1.7, justify: false)
  let list-of-connections = ()
  let separator = (
    h(design-header-horizontal-space-between-connections / 2, weak: true)
      + design-header-separator-between-connections
      + h(design-header-horizontal-space-between-connections / 2, weak: true)
  )
  let starting-index = 0
  while (starting-index < connections-list.len()) {
    let left-sum-right-margin
    if type(page.margin) == "dictionary" {
      left-sum-right-margin = page.margin.left + page.margin.right
    } else {
      left-sum-right-margin = page.margin * 4
    }

    let ending-index = starting-index + 1
    while (
      measure(connections-list.slice(starting-index, ending-index).join(separator)).width
        < page.width - left-sum-right-margin
    ) {
      ending-index = ending-index + 1
      if ending-index > connections-list.len() {
        break
      }
    }
    if ending-index > connections-list.len() {
      ending-index = connections-list.len()
    }
    list-of-connections.push(connections-list.slice(starting-index, ending-index).join(separator))
    starting-index = ending-index
  }
  align(list-of-connections.join(linebreak()), design-header-alignment)
  v(design-header-vertical-space-between-connections-and-first-section - design-section-titles-vertical-space-above)
}

#let three-col-entry(
  left-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  middle-content: "",
  right-content: "",
  alignments: (left, auto, right),
) = (
  if design-section-titles-type == "moderncv" [
    #three-col(
      left-column-width: right-column-width,
      middle-column-width: left-column-width,
      right-column-width: 1fr,
      left-content: right-content,
      middle-content: [
        #block(
          [
            #left-content
          ],
          inset: (
            left: design-entries-left-and-right-margin,
            right: design-entries-left-and-right-margin,
          ),
          breakable: design-entries-allow-page-break-in-entries,
          width: 100%,
        )
      ],
      right-content: middle-content,
      alignments: (design-text-date-and-location-column-alignment, left, auto),
    )
  ] else [
    #block(
      [
        #three-col(
          left-column-width: left-column-width,
          right-column-width: right-column-width,
          left-content: left-content,
          middle-content: middle-content,
          right-content: right-content,
          alignments: alignments,
        )
      ],
      inset: (
        left: design-entries-left-and-right-margin,
        right: design-entries-left-and-right-margin,
      ),
      breakable: design-entries-allow-page-break-in-entries,
      width: 100%,
    )
  ]
)

#let two-col-entry(
  left-column-width: 1fr,
  right-column-width: design-entries-date-and-location-width,
  left-content: "",
  right-content: "",
  alignments: (auto, design-text-date-and-location-column-alignment),
  column-gutter: design-entries-horizontal-space-between-columns,
) = (
  if design-section-titles-type == "moderncv" [
    #two-col(
      left-column-width: right-column-width,
      right-column-width: left-column-width,
      left-content: right-content,
      right-content: [
        #block(
          [
            #left-content
          ],
          inset: (
            left: design-entries-left-and-right-margin,
            right: design-entries-left-and-right-margin,
          ),
          breakable: design-entries-allow-page-break-in-entries,
          width: 100%,
        )
      ],
      alignments: (design-text-date-and-location-column-alignment, auto),
    )
  ] else [
    #block(
      [
        #two-col(
          left-column-width: left-column-width,
          right-column-width: right-column-width,
          left-content: left-content,
          right-content: right-content,
          alignments: alignments,
        )
      ],
      inset: (
        left: design-entries-left-and-right-margin,
        right: design-entries-left-and-right-margin,
      ),
      breakable: design-entries-allow-page-break-in-entries,
      width: 100%,
    )
  ]
)

#let one-col-entry(content: "") = [
  #let left-space = design-entries-left-and-right-margin
  #if design-section-titles-type == "moderncv" [
    #(left-space = left-space + design-entries-date-and-location-width + design-entries-horizontal-space-between-columns)
  ]
  #block(
    [#set par(spacing: design-text-leading); #content],
    breakable: design-entries-allow-page-break-in-entries,
    inset: (
      left: left-space,
      right: design-entries-left-and-right-margin,
    ),
    width: 100%,
  )
]

= Axole Maranjana

// Print connections:
#let connections-list = (
  [#fa-icon("location-dot", size: 0.9em) #h(0.05cm)Johannesburg, ZA],
  [#box(original-link("mailto:axolemar@gmail.com")[#fa-icon("envelope", size: 0.9em) #h(0.05cm)axolemar\@gmail.com])],
  [#box(original-link("tel:+27-68-172-1606")[#fa-icon("phone", size: 0.9em) #h(0.05cm)068 172 1606])],
  [#box(original-link("https://axole.dotenv.co.za/")[#fa-icon("link", size: 0.9em) #h(0.05cm)axole.dotenv.co.za])],
  [#box(original-link("https://linkedin.com/in/axolemaranjana")[#fa-icon("linkedin", size: 0.9em) #h(0.05cm)axolemaranjana])],
  [#box(original-link("https://github.com/axolem")[#fa-icon("github", size: 0.9em) #h(0.05cm)axolem])],
)
#connections(connections-list)



== Summary


#one-col-entry(
  content: [Full-stack engineer and fintech developer transitioning into software architecture. Proven track record of designing scalable, high-availability solutions within core banking systems and high-throughput environments. Specialized in bridging robust backend architectures \(Java, Spring Boot, C\#\) with modern, type-safe frontends \(Next.js, TypeScript\). Passionate about system design, optimizing microservices, and driving technical strategy for mission-critical applications.]
)


== Experience


#two-col-entry(
  left-content: [
    #strong[Java Developer]

#emph[FirstRand Limited \(FNB\)]
  ],
  right-content: [
    #emph[Johannesburg, ZA]

#emph[May 2025 – present]
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Secured the Emerging Star Award within two months of joining by rapidly architecting and delivering core functionality for two new bank subsidiaries.],[Engineered and maintained mission-critical Java applications within the forex core banking system, ensuring high availability and seamless transaction processing.],[Analyzed technical requirements during grooming sessions and presented system impact findings to align stakeholders, while executing high-stakes production support to resolve critical blockers.],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[Full Stack Developer \(C\# & Angular\)]

#emph[Kilig Software]
  ],
  right-content: [
    #emph[Johannesburg South, ZA]

#emph[Mar 2025 – June 2025]
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Architected and deployed a C\# ASP.NET Core backend, building RESTful APIs that optimized processing speed and system reliability.],[Drove a complete overhaul of unit testing for the legacy C\# monolith, significantly increasing code coverage and heavily reducing production bug leakage.],[Delivered complex UI\/UX features on an Angular frontend, streamlining data management workflows and improving end-user functionality.],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[Software Quality Engineer Trainee]

#emph[Nedbank Group]
  ],
  right-content: [
    #emph[Johannesburg, ZA]

#emph[Dec 2024 – Feb 2025]
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Executed rigorous manual and automated testing protocols, directly contributing to a 15\% reduction in post-release software defects.],[Analyzed test data and tracked defect lifecycles, collaborating with cross-functional development teams to streamline release processes.],[Enforced strict compliance and software quality assurance standards to ensure defect-free product rollouts.],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[Development Software Tutor & Technopreneurship Ambassador]

#emph[University of Johannesburg]
  ],
  right-content: [
    #emph[Johannesburg, ZA]

#emph[Jan 2022 – Nov 2024]
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Facilitated strategic partnerships by connecting students with industry leaders from Microsoft, SAP, and Huawei.],[Mentored students in advanced software development, debugging, and testing, tangibly improving cohort pass rates.],[Directed student groups in building data-focused technical projects, bridging the gap between theoretical concepts and practical application.],)
  ],
)



== Technologies & Core Competencies


#one-col-entry(
  content: [#strong[Backend & Core Engineering:] Java \(8, 17, 21, 25\), Spring Boot, C\# \/ .NET Core, Node.js, Python, Go]
)
#v(design-entries-vertical-space-between-entries)
#one-col-entry(
  content: [#strong[Frontend & Client Architecture:] TypeScript, JavaScript, Next.js, Angular, React Native]
)
#v(design-entries-vertical-space-between-entries)
#one-col-entry(
  content: [#strong[Data Architecture & Storage:] PostgreSQL, Microsoft SQL Server, Firebase, Supabase, Data Governance]
)
#v(design-entries-vertical-space-between-entries)
#one-col-entry(
  content: [#strong[DevOps, CI\/CD & Automation:] Docker, Jenkins, GitHub Actions, Git, n8n, Selenium]
)
#v(design-entries-vertical-space-between-entries)
#one-col-entry(
  content: [#strong[Architectural Focus:] System Architecture & Design, Microservices Integration, Technical Strategy, Stakeholder Management, Agile\/Scrum]
)


== Projects


#two-col-entry(
  left-content: [
    #strong[RescueRadar]
  ],
  right-content: [
    #emph[github.com\/Catalyst-Crew]
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Architected a real-time safety and geospatial tracking system for underground mining operations, utilizing WebSockets to ensure low-latency data transmission.],[Engineered the end-to-end system architecture, integrating a cross-platform React\/Electron client with an Express.js backend and persistent MySQL storage, deployed on GCP.],[Directed technical strategy and established engineering standards, enforcing strict code review protocols and system design patterns.],[Secured 1st Place for Overall Project Implementation and Innovation by successfully demonstrating high-availability tracking in constrained network environments.],)
  ],
)

#v(design-entries-vertical-space-between-entries)
#two-col-entry(
  left-content: [
    #strong[Codee & PipAlert Applications]
  ],
  right-content: [
    #emph[2024 - 2025]
  ],
)
#one-col-entry(
  content: [
    #v(design-highlights-top-margin);#highlights([Engineered core backend systems and API integrations for two competitive hackathon applications \(notJust Hack\), prioritizing rapid deployment and scalable architecture under strict deadlines.],[Designed robust database schemas and streamlined frontend-to-backend data flows to ensure application stability during high-volume demonstration periods.],)
  ],
)



== Education


// YES DATE, NO DEGREE
#two-col-entry(
  left-content: [
    #strong[University of Johannesburg]

#emph[Advanced Diploma in Business Information Technology]
  ],
  right-content: [
    #emph[Feb 2024 – Nov 2024]
  ],
)
#block(
  [
    #set par(spacing: 0pt)
    #v(design-highlights-top-margin);#highlights([GPA: 80.75],[Coursework: Human Computer Interaction, Software Testing, Business Analysis, Databases],)
  ],
  inset: (
    left: design-entries-left-and-right-margin,
    right: design-entries-left-and-right-margin,
  ),
)

#v(design-entries-vertical-space-between-entries)
// YES DATE, NO DEGREE
#two-col-entry(
  left-content: [
    #strong[University of Johannesburg]

#emph[Diploma in Business Information Technology]
  ],
  right-content: [
    #emph[Feb 2021 – Nov 2023]
  ],
)
#block(
  [
    #set par(spacing: 0pt)
    #v(design-highlights-top-margin);#highlights([GPA: 76.2],[Awarded \#1 for overall project implementation and innovation.],)
  ],
  inset: (
    left: design-entries-left-and-right-margin,
    right: design-entries-left-and-right-margin,
  ),
)




import { config, collection, singleton, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "cruz-felipe",
      name: "ux-portfolio",
    },
  },

  ui: {
    brand: { name: "Portfolio CMS" },
    navigation: {
      Content: ["homepage", "work"],
    },
  },

  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "content/homepage",
      format: { data: "json" },
      schema: {
        // ── Hero ──────────────────────────────────────────────
        heroHeadline: fields.text({
          label: "Hero headline",
          description: "Full headline text. Mark red words below.",
          multiline: false,
        }),
        heroRedWords: fields.text({
          label: "Red words (comma-separated)",
          description: "Words from the headline that render in red. e.g. make,it,work",
        }),
        heroBio: fields.text({
          label: "Hero bio paragraph",
          multiline: true,
        }),
        heroCurrentLabel: fields.text({
          label: "Currently label",
          defaultValue: "Currently",
        }),
        heroCurrentRole: fields.text({
          label: "Current role",
          defaultValue: "Senior UI Designer · Team Lead, Brazil",
        }),
        heroCurrentCompany: fields.text({
          label: "Current company",
          defaultValue: "@ Netcracker Technology",
        }),

        // ── About ─────────────────────────────────────────────
        aboutBio1: fields.text({ label: "About — paragraph 1", multiline: true }),
        aboutBio2: fields.text({ label: "About — paragraph 2", multiline: true }),
        aboutBio3: fields.text({ label: "About — paragraph 3", multiline: true }),
        aboutBeyondLabel: fields.text({ label: "Beyond the work label", defaultValue: "Beyond the work" }),
        aboutBeyond1: fields.text({ label: "Beyond the work — paragraph 1", multiline: true }),
        aboutBeyond2: fields.text({ label: "Beyond the work — paragraph 2", multiline: true }),
        aboutBeyond3: fields.text({ label: "Beyond the work — paragraph 3", multiline: true }),
        aboutBeyond4: fields.text({ label: "Beyond the work — paragraph 4", multiline: true }),

        // ── Skills ────────────────────────────────────────────
        skills: fields.array(
          fields.text({ label: "Skill" }),
          { label: "Skills / expertise tags", itemLabel: (props) => props.value }
        ),

        // ── Experience ────────────────────────────────────────
        experience: fields.array(
          fields.object({
            role: fields.text({ label: "Role" }),
            company: fields.text({ label: "Company" }),
            period: fields.text({ label: "Period" }),
            note: fields.text({ label: "Description", multiline: true }),
          }),
          { label: "Experience entries", itemLabel: (props) => props.fields.role.value }
        ),

        // ── Education ─────────────────────────────────────────
        education: fields.array(
          fields.object({
            degree: fields.text({ label: "Degree / programme" }),
            school: fields.text({ label: "School" }),
          }),
          { label: "Education entries", itemLabel: (props) => props.fields.degree.value }
        ),

        // ── Contact ───────────────────────────────────────────
        contactHeadline: fields.text({ label: "Contact headline", defaultValue: "Get in touch." }),
        contactEmail: fields.text({ label: "Email address" }),
        contactLinkedIn: fields.url({ label: "LinkedIn URL" }),
        contactIllustration: fields.url({ label: "Illustration portfolio URL" }),
        footerTagline: fields.text({ label: "Footer tagline", defaultValue: "Senior UI Designer · Team Lead · São Paulo, Brazil" }),

        // ── Work cards (home grid) ─────────────────────────────
        workCards: fields.array(
          fields.object({
            id: fields.text({ label: "ID (slug, no spaces)" }),
            index: fields.text({ label: "Index (01, 02…)" }),
            title: fields.text({ label: "Title" }),
            blurb: fields.text({ label: "Card blurb", multiline: true }),
            metric1: fields.text({ label: "Metric 1" }),
            metric2: fields.text({ label: "Metric 2" }),
            tag: fields.text({ label: "Tag line" }),
            weight: fields.select({
              label: "Card tier",
              options: [
                { label: "Featured", value: "featured" },
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
              ],
              defaultValue: "primary",
            }),
            personal: fields.checkbox({ label: "Personal project", defaultValue: false }),
            image: fields.text({ label: "Image path (e.g. /hub/workspace.png)" }),
          }),
          { label: "Work cards", itemLabel: (props) => `${props.fields.index.value} ${props.fields.title.value}` }
        ),
      },
    }),
  },

  collections: {
    work: collection({
      label: "Case studies",
      path: "content/work/*",
      format: { data: "json" },
      slugField: "slug",
      schema: {
        slug: fields.slug({ name: { label: "Slug" } }),
        index: fields.text({ label: "Case index (01–05)" }),
        title: fields.text({ label: "Title" }),
        tagline: fields.text({ label: "Tagline", multiline: true }),
        role: fields.text({ label: "Role label" }),
        location: fields.text({ label: "Location" }),
        year: fields.text({ label: "Year" }),
        roleDetail: fields.text({ label: "My role (full)", multiline: true }),
        impactSummary: fields.text({ label: "Business impact (full)", multiline: true }),

        metrics: fields.array(
          fields.object({
            value: fields.text({ label: "Value (e.g. 75%)" }),
            label: fields.text({ label: "Description", multiline: true }),
          }),
          { label: "Metrics", itemLabel: (props) => props.fields.value.value }
        ),

        context: fields.text({ label: "Context paragraph", multiline: true }),

        sections: fields.array(
          fields.object({
            title: fields.text({ label: "Section title" }),
            pullquote: fields.text({ label: "Pull quote (optional)", multiline: true }),
            body: fields.array(
              fields.text({ label: "Paragraph", multiline: true }),
              { label: "Body paragraphs" }
            ),
            screens: fields.array(
              fields.object({
                src: fields.text({ label: "Image path" }),
                caption: fields.text({ label: "Caption", multiline: true }),
              }),
              { label: "Screen images", itemLabel: (props) => props.fields.src.value }
            ),
          }),
          { label: "Sections", itemLabel: (props) => props.fields.title.value }
        ),

        metaTitle: fields.text({ label: "Meta title" }),
        metaDescription: fields.text({ label: "Meta description", multiline: true }),
      },
    }),
  },
});

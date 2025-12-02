import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "berkanuze.github.io/p",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
    fontOrigin: "googleFonts",
    cdnCaching: true,
    typography: {
      // "Space Grotesk" has that futuristic/technical feel
      header: "Space Grotesk",
      // "JetBrains Mono" for reading text creates that raw data look
      body: "JetBrains Mono",
      code: "JetBrains Mono",
    },
    colors: {
      lightMode: {
        // We invert the "Light" mode to be a Stark/Industrial Light
        light: "#f0f0f0",
        lightgray: "#d4d4d4",
        gray: "#888888",
        darkgray: "#1a1a1a",
        dark: "#000000",
        secondary: "#008f11", // Dimmer matrix green for contrast
        tertiary: "#00ff41",  // Bright neon green
        highlight: "rgba(0, 255, 65, 0.15)",
      },
      darkMode: {
        // The "Main" Theme: Deep Void Black & Neon
        light: "#050505",     // Almost pure black background
        lightgray: "#1f1f1f", // Borders
        gray: "#666666",      // Muted text
        darkgray: "#cccccc",  // Main text
        dark: "#ffffff",      // Headers
        secondary: "#00ff41", // The classic Terminal Green
        tertiary: "#ccff00",  // A radioactive yellow-green for hover
        highlight: "rgba(0, 255, 65, 0.15)",
      },
    },
  },
},

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
},

export default config

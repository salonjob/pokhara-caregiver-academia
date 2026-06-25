import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers
      { userAgent: '*', allow: '/' },
      // Google — AI Overviews, Gemini
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      // Microsoft — Copilot, Bing AI
      { userAgent: 'bingbot', allow: '/' },
      { userAgent: 'msnbot', allow: '/' },
      // OpenAI — ChatGPT, SearchGPT
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      // Anthropic — Claude AI
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      // Perplexity AI
      { userAgent: 'PerplexityBot', allow: '/' },
      // Meta AI
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      // Apple Intelligence
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Brave Search / Leo AI
      { userAgent: 'Brave-Search', allow: '/' },
      // You.com AI
      { userAgent: 'YouBot', allow: '/' },
      // Cohere AI
      { userAgent: 'cohere-ai', allow: '/' },
      // xAI / Grok
      { userAgent: 'xAI-Crawl', allow: '/' },
      // Mistral AI
      { userAgent: 'MistralAI-User', allow: '/' },
      // Bytedance / TikTok AI
      { userAgent: 'Bytespider', allow: '/' },
      // Diffbot (used by many AI knowledge bases)
      { userAgent: 'Diffbot', allow: '/' },
      // Common Crawl (used to train most LLMs)
      { userAgent: 'CCBot', allow: '/' },
      // Mojeek (independent AI search)
      { userAgent: 'MojeekBot', allow: '/' },
      // Neeva / Snowflake AI
      { userAgent: 'Neevabot', allow: '/' },
      // Semrush / Ahrefs (used by AI tools for data)
      { userAgent: 'SemrushBot', allow: '/' },
      { userAgent: 'AhrefsBot', allow: '/' },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

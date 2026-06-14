import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptRouter — Route prompts to cheapest AI model',
  description: 'Automatically routes AI prompts to the most cost-effective model based on complexity analysis. Save up to 80% on AI API costs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ca93e29f-314f-4c55-a66a-a8ea171bb4aa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}

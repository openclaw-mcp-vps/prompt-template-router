export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Optimization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route Prompts to the{' '}
          <span className="text-[#58a6ff]">Cheapest AI Model</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze prompt complexity automatically and send each request to the most cost-effective model — GPT-3.5, GPT-4, Claude, and more — through one unified API.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No lock-in.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: 'Complexity Analysis', desc: 'NLP scoring routes simple tasks to cheaper models automatically.' },
          { title: 'Cost Dashboard', desc: 'Track spend per model, per day, and per project in real time.' },
          { title: 'Custom Rules', desc: 'Override routing with your own rules for sensitive or critical prompts.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt routing',
              'All supported models (GPT-3.5, GPT-4, Claude)',
              'Real-time cost analytics dashboard',
              'Custom routing rules',
              'REST API + SDK access',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does prompt complexity analysis work?',
              a: 'We score each prompt using token count, vocabulary richness, and task-type classification. Simple Q&A goes to GPT-3.5; multi-step reasoning goes to GPT-4 or Claude Opus.'
            },
            {
              q: 'Which AI models are supported?',
              a: 'GPT-3.5 Turbo, GPT-4o, Claude 3 Haiku, Claude 3 Sonnet, and Claude 3 Opus. More models are added regularly.'
            },
            {
              q: 'Can I bring my own API keys?',
              a: 'Yes. You supply your own OpenAI and Anthropic keys. We never store your keys — they are used only at request time.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} PromptRouter. All rights reserved.
      </footer>
    </main>
  )
}

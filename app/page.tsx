'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Laptop,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Quote,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Users,
  X,
} from 'lucide-react'

const steps = [
  { number: '01', title: 'Post your repair', body: 'Tell us what needs fixing, where you are, and when you need it.', icon: Plus },
  { number: '02', title: 'Join a local group', body: 'We match similar repairs nearby so everyone has more buying power.', icon: Users },
  { number: '03', title: 'Compare clear quotes', body: 'See parts, labour, warranty and timing from local repair shops.', icon: Quote },
  { number: '04', title: 'Approve your choice', body: 'Every customer decides for themselves. No automatic commitments.', icon: Check },
]

const faqs = [
  ['Is RepairCircle a repair shop?', 'No. RepairCircle helps customers coordinate local groups and compare quotes from independent providers. You choose who to work with and approve your own repair.'],
  ['How do group discounts work?', 'A provider can offer a group rate when enough customers confirm interest. The threshold and deadline are always shown clearly, and the deal is never applied without your approval.'],
  ['Do I have to share my exact address?', 'No. Groups use your locality or an approximate area. We do not show exact addresses, phone numbers or device serial numbers to other members.'],
  ['Are providers verified?', 'Verification status is shown on each provider profile. We never claim a provider is verified, rated or insured unless that information has been checked and configured.'],
]

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="RepairCircle home">
      <span className="flex size-9 items-center justify-center rounded-xl bg-[#0f5f62] text-white shadow-sm">
        <span className="text-[19px] font-bold tracking-[-0.08em]">r<span className="text-[#f8c56b]">c</span></span>
      </span>
      <span className="text-[17px] font-bold tracking-[-0.04em] text-[#123b46]">Repair<span className="text-[#0f7777]">Circle</span></span>
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0f7777]">{children}</p>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeForm, setActiveForm] = useState<'repair' | 'provider' | 'signin' | null>(null)
  const [selectedStep, setSelectedStep] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const openForm = (form: 'repair' | 'provider' | 'signin', step?: string) => {
    setSubmitted(false)
    setSelectedStep(step ?? null)
    setActiveForm(form)
    setMenuOpen(false)
  }

  const closeForm = () => {
    setActiveForm(null)
    setSubmitted(false)
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f8fbfa] text-[#123b46]">
      <header className="sticky top-0 z-50 border-b border-[#dbe9e6]/80 bg-[#f8fbfa]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#45636a] lg:flex" aria-label="Main navigation">
            <a href="#how-it-works" className="transition hover:text-[#0f7777]">How it works</a>
            <a href="#for-providers" className="transition hover:text-[#0f7777]">For providers</a>
            <a href="#faq" className="transition hover:text-[#0f7777]">FAQ</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <button onClick={() => openForm('signin')} className="rounded-full px-4 py-2 text-sm font-semibold text-[#35616a] transition hover:bg-[#e7f2ef]">Sign in</button>
            <button onClick={() => openForm('repair')} className="rounded-full bg-[#0f5f62] px-5 py-2.5 text-sm font-bold text-white shadow-[0_7px_18px_rgba(15,95,98,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0a4e51]">Get started <ArrowRight className="ml-1 inline size-4" /></button>
          </div>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#dbe9e6] bg-[#f8fbfa] px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4 text-sm font-semibold"><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#for-providers" onClick={() => setMenuOpen(false)}>For providers</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="#get-started" onClick={() => setMenuOpen(false)} className="w-fit rounded-full bg-[#0f5f62] px-5 py-2.5 text-white">Get started <ArrowRight className="ml-1 inline size-4" /></a></div></nav>}
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-28">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b8ded8] bg-white px-3.5 py-2 text-xs font-bold text-[#0f7777] shadow-sm"><Sparkles className="size-3.5" /> Repair together. Save together.</div>
          <h1 className="max-w-2xl text-[clamp(3.2rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[#123b46]">Better repairs start <span className="text-[#0f7777]">together.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#587078]">Join neighbours with similar device problems, compare transparent quotes from local shops, and choose the repair that works for you.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button id="get-started" onClick={() => openForm('repair')} className="inline-flex items-center justify-center rounded-full bg-[#f0b955] px-6 py-3.5 text-sm font-bold text-[#123b46] shadow-[0_8px_20px_rgba(214,157,55,0.2)] transition hover:-translate-y-0.5 hover:bg-[#f5c66d]">Find my repair group <ArrowRight className="ml-2 size-4" /></button><button onClick={() => openForm('provider')} className="inline-flex items-center justify-center rounded-full border border-[#b9d5d1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f5f62] transition hover:bg-[#edf7f4]">I’m a repair provider</button></div>
          <div className="mt-9 flex items-center gap-5 text-xs font-medium text-[#678188]"><span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-[#0f7777]" /> Your choice, always</span><span className="flex items-center gap-1.5"><MapPin className="size-4 text-[#0f7777]" /> Local by design</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[530px] lg:ml-auto">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-[#d9f0ea] blur-2xl" /><div className="absolute -bottom-10 -left-10 size-56 rounded-full bg-[#fff0cd] blur-2xl" />
          <div className="relative rounded-[2rem] border border-[#c7dfda] bg-white p-4 shadow-[0_25px_70px_rgba(18,59,70,0.12)] sm:p-6">
            <div className="flex items-center justify-between border-b border-[#e4efed] pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7b9599]">Your local circle</p><h2 className="mt-1 text-xl font-bold">Phone screen repairs</h2></div><span className="rounded-full bg-[#e8f6ee] px-3 py-1.5 text-xs font-bold text-[#19704e]">4 of 6 joined</span></div>
            <div className="mt-5 rounded-2xl bg-[#f1f8f6] p-4"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold text-[#648086]">Group progress</p><p className="mt-1 text-2xl font-bold text-[#123b46]">Unlocking at 6</p></div><div className="flex -space-x-2" aria-label="Four group members"><span className="avatar bg-[#e9bd81]">AM</span><span className="avatar bg-[#a6d2c4]">RK</span><span className="avatar bg-[#cad1eb]">SP</span><span className="avatar bg-[#f0c8c0]">JD</span></div></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-[#d8e9e4]"><div className="h-full w-2/3 rounded-full bg-[#0f7777]" /></div><p className="mt-2 text-xs font-medium text-[#6c858a]"><Clock3 className="mr-1 inline size-3.5" /> 3 days left to join</p></div>
            <p className="mb-3 mt-6 text-sm font-bold">Quotes from local providers</p>
            <div className="space-y-3"><div className="quote-card border-[#83c4b8] bg-[#f4fbf8]"><div className="flex items-center gap-3"><span className="icon-box bg-[#d8f0e9] text-[#0f7777]"><Store className="size-4" /></span><div><p className="font-bold">FixPoint Electronics <span className="ml-1 text-[10px] font-bold text-[#0f7777]">VERIFIED</span></p><p className="text-xs text-[#6c858a]">Parts + labour · 6 mo warranty</p></div></div><p className="text-lg font-bold">₹2,450</p></div><div className="quote-card"><div className="flex items-center gap-3"><span className="icon-box bg-[#f1eee5] text-[#9a7a36]"><Store className="size-4" /></span><div><p className="font-bold">Circuit Care</p><p className="text-xs text-[#6c858a]">Parts + labour · 3 mo warranty</p></div></div><p className="text-lg font-bold">₹2,700</p></div></div><button onClick={() => openForm('repair')} className="mt-5 w-full rounded-xl border border-[#c1ddd8] py-3 text-sm font-bold text-[#0f7777] transition hover:bg-[#eaf6f2]">View all quote details <ArrowRight className="ml-1 inline size-4" /></button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#dbe9e6] bg-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10"><div className="max-w-xl"><SectionLabel>Simple by design</SectionLabel><h2 className="section-title">A clearer way to get things fixed.</h2><p className="section-copy">RepairCircle gives you the context and control to make a repair decision with confidence.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(({ number, title, body, icon: Icon }) => <button key={number} type="button" onClick={() => openForm('repair', title)} className="group rounded-2xl border border-[#dbe9e6] bg-[#f8fbfa] p-6 text-left transition hover:-translate-y-1 hover:border-[#9ccdc4] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f7777] focus:ring-offset-2"><div className="flex items-start justify-between"><span className="text-sm font-bold text-[#a0b8b8]">{number}</span><span className="flex size-10 items-center justify-center rounded-xl bg-[#e5f3ef] text-[#0f7777]"><Icon className="size-5" /></span></div><h3 className="mt-12 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#688187]">{body}</p><span className="mt-5 inline-flex items-center text-xs font-bold text-[#0f7777]">Continue <ArrowRight className="ml-1 size-3.5" /></span></button>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28"><div><SectionLabel>Built around trust</SectionLabel><h2 className="section-title">Your repair. Your decision.</h2><p className="section-copy">We make the group process collaborative without taking away your independence. You see your own quote, and you decide what happens next.</p><div className="mt-8 space-y-4"><div className="flex gap-4"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0f7777]"><Check className="size-4" /></span><div><p className="font-bold">Itemised, comparable quotes</p><p className="mt-1 text-sm leading-6 text-[#688187]">Parts, labour, fees, warranty and estimated timing in one view.</p></div></div><div className="flex gap-4"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0f7777]"><Check className="size-4" /></span><div><p className="font-bold">Privacy-safe group matching</p><p className="mt-1 text-sm leading-6 text-[#688187]">We match by device, fault and locality — not by sharing your personal details.</p></div></div><div className="flex gap-4"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0f7777]"><Check className="size-4" /></span><div><p className="font-bold">No hidden commitments</p><p className="mt-1 text-sm leading-6 text-[#688187]">A group threshold does not approve a repair for you. Only your explicit choice does.</p></div></div></div></div><div className="rounded-[2rem] bg-[#123b46] p-8 text-white sm:p-10"><div className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-xl bg-[#f0b955] text-[#123b46]"><ShieldCheck /></span><span className="text-sm font-bold uppercase tracking-[0.16em] text-[#b3dfd6]">The RepairCircle promise</span></div><blockquote className="mt-10 text-3xl font-medium leading-tight tracking-[-0.04em]">“More information. More options. Never less control.”</blockquote><div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/15 pt-6 text-sm"><div><p className="text-2xl font-bold text-[#f0c56f]">01</p><p className="mt-1 text-white/60">choice per customer</p></div><div><p className="text-2xl font-bold text-[#f0c56f]">0</p><p className="mt-1 text-white/60">automatic approvals</p></div></div></div></section>

      <section id="for-providers" className="bg-[#e7f3ef]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10"><div><SectionLabel>For local repair providers</SectionLabel><h2 className="section-title">Good work deserves a better pipeline.</h2><p className="section-copy">Reach a group of customers with one clear quote. Plan your workload, explain your pricing, and build trust before the first visit.</p><button onClick={() => openForm('provider')} className="mt-8 inline-flex items-center rounded-full bg-[#0f5f62] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0a4e51]">Join as a provider <ArrowRight className="ml-2 size-4" /></button></div><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-white p-6"><Laptop className="size-6 text-[#0f7777]" /><h3 className="mt-8 font-bold">Show your expertise</h3><p className="mt-2 text-sm leading-6 text-[#688187]">Share your profile, warranty terms and itemised quote.</p></div><div className="rounded-2xl bg-white p-6"><Users className="size-6 text-[#0f7777]" /><h3 className="mt-8 font-bold">Plan group jobs</h3><p className="mt-2 text-sm leading-6 text-[#688187]">See demand by locality and schedule work more efficiently.</p></div></div></div></section>

      <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28"><div className="text-center"><SectionLabel>Questions, answered</SectionLabel><h2 className="section-title">Good to know.</h2></div><div className="mt-10 divide-y divide-[#dbe9e6] border-y border-[#dbe9e6]">{faqs.map(([question, answer], index) => <div key={question}><button className="flex w-full items-center justify-between gap-5 py-5 text-left font-bold" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}{openFaq === index ? <Minus className="size-5 shrink-0 text-[#0f7777]" /> : <Plus className="size-5 shrink-0 text-[#0f7777]" />}</button>{openFaq === index && <p className="-mt-2 max-w-2xl pb-5 pr-8 text-sm leading-7 text-[#688187]">{answer}</p>}</div>)}</div></section>

      <section className="mx-5 mb-10 overflow-hidden rounded-[2rem] bg-[#f4c86e] sm:mx-8 lg:mx-auto lg:max-w-7xl"><div className="flex flex-col items-start justify-between gap-8 px-7 py-12 sm:px-12 lg:flex-row lg:items-center lg:py-14"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#806324]">Ready when you are</p><h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-[#123b46] sm:text-4xl">Your next repair could be a group effort.</h2></div><a href="#top" className="inline-flex shrink-0 items-center rounded-full bg-[#123b46] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0a2c35]">Start a repair request <ArrowRight className="ml-2 size-4" /></a></div></section>

      <footer className="border-t border-[#dbe9e6] bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"><Logo /><div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#6b8389]"><a href="#faq" className="hover:text-[#0f7777]">Privacy (draft)</a><a href="#faq" className="hover:text-[#0f7777]">Terms (draft)</a><a href="#faq" className="hover:text-[#0f7777]">Support</a><span>© 2026 RepairCircle</span></div></div></footer>

      {activeForm && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#123b46]/45 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="form-title" onClick={(event) => { if (event.target === event.currentTarget) closeForm() }}>
        <div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f7777]">RepairCircle</p><h2 id="form-title" className="mt-2 text-2xl font-bold">{activeForm === 'repair' ? selectedStep ?? 'Find your repair group' : activeForm === 'provider' ? 'Join as a provider' : 'Welcome back'}</h2><p className="mt-2 text-sm leading-6 text-[#688187]">{activeForm === 'signin' ? 'Sign in to manage your repair requests.' : selectedStep ? 'Tell us a little more so we can move this step forward.' : 'Enter your details and we’ll help you take the next step.'}</p></div><button onClick={closeForm} className="rounded-full p-2 text-[#688187] hover:bg-[#edf7f4]" aria-label="Close form"><X className="size-5" /></button></div>
          {submitted ? <div className="mt-8 rounded-2xl bg-[#e8f6ee] p-5 text-center"><Check className="mx-auto size-8 text-[#19704e]" /><p className="mt-3 font-bold text-[#19704e]">Thanks — we received your information.</p><p className="mt-1 text-sm text-[#477467]">We’ll be in touch with the next steps.</p><button onClick={closeForm} className="mt-5 rounded-full bg-[#0f5f62] px-5 py-2.5 text-sm font-bold text-white">Done</button></div> : <form className="mt-7 space-y-4" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><label className="block text-sm font-bold">Full name<input required name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-[#c7dfda] px-4 py-3 font-normal outline-none focus:border-[#0f7777] focus:ring-2 focus:ring-[#b8ded8]" placeholder="Your name" /></label><label className="block text-sm font-bold">Email address<input required type="email" name="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-[#c7dfda] px-4 py-3 font-normal outline-none focus:border-[#0f7777] focus:ring-2 focus:ring-[#b8ded8]" placeholder="you@example.com" /></label>{activeForm !== 'signin' && <label className="block text-sm font-bold">{activeForm === 'repair' ? 'What needs repairing?' : 'Business name'}<input required name="details" className="mt-2 w-full rounded-xl border border-[#c7dfda] px-4 py-3 font-normal outline-none focus:border-[#0f7777] focus:ring-2 focus:ring-[#b8ded8]" placeholder={activeForm === 'repair' ? 'e.g. iPhone screen' : 'Your repair shop'} /></label>}{activeForm === 'repair' && <label className="block text-sm font-bold">Area or postcode<input required name="area" className="mt-2 w-full rounded-xl border border-[#c7dfda] px-4 py-3 font-normal outline-none focus:border-[#0f7777] focus:ring-2 focus:ring-[#b8ded8]" placeholder="e.g. Bandra West" /></label>}<button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#0f5f62] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0a4e51]">{activeForm === 'signin' ? 'Sign in' : 'Submit request'}<ArrowRight className="ml-2 size-4" /></button></form>}
        </div>
      </div>}
    </main>
  )
}

---
title: Above and Below the Code
keywords: ai, agentic coding, software engineering, requirements, product, infrastructure, data, security, compilers, no silver bullet
description: |
  Writing code line by line is becoming the smallest part of building software. What's left is the work above it — knowing what to build and why — and the work beneath it: infrastructure, data and security.
tags: ai, software engineering, opinion
image: /og/above-and-below-the-code.png
---

For most of my career, the thing I was paid for was typing.

Not literally, of course. Nobody hired me for my words per minute. But if you looked at where my hours actually went, the biggest share was spent turning an idea that already existed — in a ticket, in a conversation, in my own head — into lines of code a machine could run. Find the right file. Remember the right API. Write the loop. Fix the off-by-one. Write the test. Fix the test.

That share is shrinking fast. Most of the code I've shipped this year, I didn't type. I described it, read it, argued with it, and sent it back. And I don't think I'm unusual anymore.

So it's worth asking, honestly: if the typing goes away, what's left?

### A Very Old Story

The first thing to say is that this has happened before. Several times.

The earliest programmers wrote raw machine code — numbers, flipped in by hand. Assembly language replaced the numbers with mnemonics, so a person could write `ADD` instead of remembering an opcode. In the early 1950s, Grace Hopper built one of the first compilers and was told, more or less, that computers couldn't write programs; they could only do arithmetic. When John Backus's team at IBM shipped FORTRAN in 1957, a large part of the effort went into proving that compiled code could run nearly as fast as code written by hand, because nobody serious believed it would. COBOL was designed to read so much like English that managers could, in theory, read the programs themselves.

Every one of these steps did the same thing: it took a layer of translation that people did by hand and handed it to the machine. And every time, someone predicted the end of programming as a profession. What actually happened was that the job moved up a level, and there turned out to be far more of it than before.

Frameworks did it again. Nobody writes their own HTTP parser to build a website anymore. Cloud platforms did it again — nobody racks a server to launch a side project. Each layer swallowed a whole category of work, and the people who used to do that work went and did the next thing up.

What's being swallowed now is the last layer between human language and executable code. In [Say the Magic Word](/articles/say-the-magic-word) I wrote about how computers asked us to type what we want in English back in 1977, and then spent forty years building interfaces that made sure we didn't have to. The parser finally works. You can tell the machine what you want in plain language, and much of the time, it builds it.

### The Middle Is Getting Thinner

I find it useful to think of building software as three layers.

| Layer      | The question it answers          | Who does it, increasingly |
| ---------- | -------------------------------- | ------------------------- |
| Above      | What should exist, and why?      | People                    |
| The middle | How do we express it as code?    | Machines, with review     |
| Below      | What does it run on, and touch?  | People, with machines     |

For the last few decades, the middle was where most engineers lived. It was the bulk of the job, the bulk of the hiring interview, and the bulk of what we called "skill". Knowing a language deeply. Knowing a framework's quirks. Being able to hold a large codebase in your head and write the next function in it without breaking anything else.

That middle layer isn't disappearing. Someone still has to read the code, understand it, and be accountable for it. But it's getting thinner, and it's getting thinner from both sides. The layers above and below it are not.

### The Hardest Single Part

In 1986, Fred Brooks wrote an essay called _No Silver Bullet_. Its central argument was that software has two kinds of difficulty. _Accidental_ complexity is the difficulty that comes from our tools — the syntax, the compilers, the build systems, the boilerplate. _Essential_ complexity is the difficulty that comes from the problem itself — the messy, contradictory, constantly shifting thing the software is supposed to do.

Brooks predicted that no single tool would ever deliver an order-of-magnitude improvement, because tools only attack the accidental part, and the essential part was already the bulk of the work. And he put the hardest piece of it in one sentence:

> The hardest single part of building a software system is deciding precisely what to build.

Forty years later, I think AI is the most powerful attack on accidental complexity we have ever had. And in doing so, it has made Brooks more right than ever. When the cost of writing code collapses, everything left on the bill is essential complexity. The question stops being "can we build this?" and becomes "_should_ we, and what exactly is _this_?"

This is harder than it sounds, and I suspect it's harder than a lot of engineers are ready for. When you write every line yourself, vagueness gets caught along the way. You hit the edge case at the keyboard, realise you don't know what should happen when the order is cancelled after it shipped, and you go and ask someone. The act of typing forced the thinking.

When the machine writes the code, it doesn't stop to ask. It makes a reasonable-looking choice and moves on. A vague description doesn't produce an error anymore. It produces a working program that does something slightly different from what you meant — and does it confidently, at scale, in a hundred places at once.

The text adventures had it backwards. The player always knew exactly what they wanted and the parser couldn't understand them. Now the parser understands almost anything, and the bottleneck is whether we know what we want.

### What, and Why

Describing _what_ to build is only half of it. The other half is _why_.

The why is what lets you make the thousand small decisions that no specification ever covers. If you know that a feature exists because lab technicians are re-entering the same numbers into three different systems and making mistakes, you know that the screen should prefill aggressively, that it should never silently round a value, and that it doesn't need a dashboard. If all you know is the ticket — "add a form for measurements" — you'll get a form. It'll be a perfectly fine form. It'll miss the point.

This used to be someone else's job, at least on paper. Product managers figured out the what and the why. Engineers figured out the how. In practice, the good engineers I've worked with never respected that line. They asked why, they pushed back on requirements that didn't make sense, and they understood the domain well enough to notice when the ticket was solving the wrong problem.

That used to be what separated good engineers from merely competent ones. I think it's about to become the job itself.

The skills that matter here aren't new, but they've been undervalued for a long time:

- **Understanding a domain** well enough to know what the people in it actually need, as opposed to what they asked for.
- **Writing clearly**, because a precise description is now, quite literally, the source code.
- **Holding a model of the system** in your head — not every line, but the shape of it, the boundaries, and the reasons things are the way they are.
- **Judging the output.** Recognising when something that works is still wrong.

None of these show up on a typing speed test. None of them were ever about typing.

### Below the Line

Then there's the layer underneath, and it's the one I think gets forgotten most in the excitement.

All that generated code has to run somewhere. It reads and writes real data. It sits on a network that real attackers are probing. And none of that got easier just because the code got cheaper to write. In some ways, it got harder.

**Infrastructure.** A server still fails at three in the morning. A queue still backs up. A dependency still has an outage on the one day you can't afford it. Distributed systems are still distributed — the network is still unreliable, clocks still drift, and the bill at the end of the month is still real. An agent can write a Terraform file in seconds. Whether that file describes a system that stays up under load, recovers gracefully, and doesn't quietly cost ten times what it should, is a question about the world, not about syntax. Physics doesn't read the prompt.

**Data.** Code is rewritten all the time. Data isn't. The database schema you design this year will very likely outlive every line of application code that touches it. The meaning of a column, the history of a record, the guarantee that a measurement taken two years ago is still exactly what was measured — that is the actual asset most businesses have. If generating code becomes nearly free, rewriting the application on top becomes almost routine. Migrating the data underneath never will be. Getting the model of the data right, and keeping it trustworthy, matters more when everything above it becomes disposable.

**Security.** More code, written faster, by something that has read every insecure example on the internet, is a larger attack surface, not a smaller one. Generated code will happily reach for a package name that sounds plausible but doesn't exist, and attackers have already noticed they can register those names. Agents that can read your email and run commands on your machine introduce entirely new ways for an instruction to sneak in from somewhere it shouldn't. The fundamentals haven't changed — least privilege, defence in depth, never trusting input — but the volume of things that need those fundamentals applied to them is growing much faster than the number of people who understand them.

These three have something in common: they're where mistakes are expensive and hard to undo. A bad UI can be regenerated by lunchtime. A corrupted dataset, a leaked credential, or an architecture that falls over under real load cannot. The cheaper the middle gets, the more of the risk concentrates at the bottom.

### The Squeeze

So the middle layer gets squeezed from both directions, and the people in it have a choice about which way to move.

Up, toward the problem: understanding the people and the domain, deciding what's worth building, describing it precisely enough that the machine builds the right thing, and judging whether it did.

Down, toward the foundation: making sure that whatever gets built runs reliably, keeps its data honest, and doesn't hand the keys to the first person who asks nicely.

The best engineers I know were already doing both. They were never really paid for typing. The typing was just the visible part, the part you could point to at the end of the day — and it hid the fact that most of the value was in the decisions around it.

I don't think engineering is going away. I think it's being clarified. The machines are taking the part that was always the most mechanical, and leaving us with the parts that were always the most human: knowing what's worth building and why, and making sure it stands on something solid.

That was always the job. It's just that now, there's nothing left to hide behind.

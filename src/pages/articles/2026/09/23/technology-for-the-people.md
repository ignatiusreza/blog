---
title: Technology for the People
keywords: ux, product, a/b testing, metrics, game development, prototyping, ai, agentic coding, software design
description: |
  Nobody has ever been forced to play Tetris. Most software doesn't have that luxury, and the industry has spent twenty years getting very good at not noticing. Cheap prototypes might finally make us notice.
tags: ux, product, ai, opinion
image: /og/technology-for-the-people.png
---

Nobody has ever been forced to play Tetris.

Nobody was told by their manager that the team is migrating to Tetris next quarter. Nobody sat through a mandatory Tetris onboarding. Nobody plays Tetris because the bank stopped supporting the old way of doing things. People play it because they want to, and the moment they stop wanting to, they stop playing.

That single fact is why, when I first learned to program, I wanted to make games.

### The Kid Who Wanted to Make Games

I was lucky enough to have a computer at home when I was about ten, which was not something to take for granted at the time. And like a lot of people who ended up in this industry, what I did with it was play games.

Old text adventures, where you typed what you wanted and hoped the parser agreed — the kind I wrote about [last week](/articles/say-the-magic-word). _Krusty's Fun House_, herding rats into traps. _Day of the Tentacle_, which is still one of the funniest things I've ever played. Activision's _Ghostbusters_, frantically hammering a button to haul the team up flight after flight of stairs with ghosts closing in. Sitting with the game manual open on my lap, hunting for the password it wanted before it would let me in.

Somewhere in there I decided that the computer was where I wanted to be. I didn't know yet what that meant. I just knew that this box could make worlds, and I wanted to be on the side that made them.

The "how" arrived by accident in middle school. The school was trialling a computer class as an extracurricular, and I signed up without really knowing what it was about. It turned out to be QBasic. At some point the teacher handed out copies of two games: _Nibbles_, the snake game, and _Gorillas_, where two gorillas stand on a city skyline and lob exploding bananas at each other.

I didn't play them so much as take them apart. I found the number that controlled how big the explosions were and made them enormous. I made the snake impossibly fast. I changed the gravity and watched the bananas sail off the top of the screen and never come back. Change a number, run it, see what happens, change it again. Nobody told me to. It was the most fun I'd ever had with a computer, and it was the first time I understood that software was something a person made — and so could be made _differently_.

I didn't end up making games. Life went the way it usually goes, and I ended up building web and mobile applications instead — the kind of software people use because they need to get something done, not because it's Saturday and they're bored. But I carried a question from those early years that never really left: **would anyone use this if they didn't have to?**

Because games had taught me something the rest of software mostly hadn't. Everything else on a computer was something that happened _to_ people. The system at the office that everybody complained about. The form on a website that clearly hated you. The accounting package someone had bought years ago that everyone now worked around. These programs had users the way a tax office has visitors: not by choice, and not happily.

Games were different in a way that felt almost moral to me. A game had to earn its place. There was no procurement department, no mandate from above, no "this is the system we use here". If it wasn't fun, it simply didn't get played. The feedback was brutal, immediate, and completely honest.

### Chosen and Imposed

It took me a while to put a name on the difference, but it comes down to who does the choosing.

|                          | A game                     | Most applications                  |
| ------------------------ | -------------------------- | ---------------------------------- |
| Who chooses it           | The person playing         | Someone else, usually              |
| Who pays for it          | The person playing         | Often not the person using it      |
| What happens if it's bad | People leave               | People complain, and keep using it |
| What "success" means     | People come back _happily_ | People come back                   |

The second row is the one that does the damage. Enterprise software has a well-known version of this: the buyer is not the user. The person signing the contract is looking at a feature matrix, a compliance checklist and a price. The person clicking through it eight hours a day is not in the room. So the product gets optimised for the room.

But it isn't only enterprise software. School portals, government services, insurance claims, the app your gym switched to, the parking app a city has decided is now the only way to pay for parking. In every case the relationship is the same: the software sits between a person and something they need, and the person has no say in which software it is.

A game can never be in that position. The moment a game is something you _have_ to play, it has stopped being a game.

### Then Everyone Discovered UX

For a while, it looked like this was going to get fixed.

Somewhere around the late 2000s, the industry had a collective awakening about design. Smartphones put software in everyone's pocket and made bad interfaces physically uncomfortable to use. App stores introduced something close to the game market's honesty — star ratings, reviews, a competitor one tap away. "User experience" went from a niche concern to a job title, then a department, then a discipline with its own conferences, certifications and dogma.

And the vocabulary that came with it sounded exactly like what I'd wanted from software all along. _User-centred design._ _Empathy._ _Delight._ _Jobs to be done._ Talk to your users. Watch them struggle. Design for the person, not the org chart. Enterprise vendors started talking about "consumer-grade experience" as though it were a feature, because suddenly their users had an iPhone in the other hand and could see the difference.

I remember genuinely believing that the gap between chosen and imposed software was closing. That the rest of the industry was, finally, learning what game designers had always known.

### The Irony

Here's the thing I didn't see coming: **the most successful applications of the last fifteen years are still imposed on their users.** The imposition just got more sophisticated.

Think about the software you use most. How much of it did you really choose?

You are on a particular messaging app because your family is on it. You are on a particular work chat tool because your company is. You use that document editor because that's where the shared files live, that photo service because that's where ten years of photos live, that marketplace because that's where the sellers are. Every one of these _could_ in principle be swapped out. In practice, the cost of leaving isn't paid in money — it's paid in people, history and habit, which is far more expensive.

This is network effects and lock-in, and it is a completely different kind of force from "my employer bought it". But from the user's side of the screen, it feels much the same. You didn't choose it because it was the best. You're there because everyone else is, and everyone else is there because you are.

And the consumer apps that genuinely _do_ compete for voluntary attention did something even more ironic: they borrowed the tools of games without the contract of games. Streaks. Badges. Progress bars. Variable rewards on pull-to-refresh. The endless feed as a slot machine you hold in your hand. All the machinery game designers built to make play compelling, now bolted onto products whose goal isn't your enjoyment but your time.

A game uses those mechanics in service of fun, and fun is the product. An engagement-optimised app uses the same mechanics as bait, and _you_ are the product. Same tools, opposite relationship.

### The Loop

If you've worked on a product team in the last decade, you know the cycle by heart.

1. Ship a feature.
2. Instrument everything.
3. Run an A/B test.
4. Pick the variant that moved the number.
5. Repeat.

There is nothing wrong with any individual step. Measuring what you build is good. Testing assumptions is good. Evidence beats opinions. The trouble is entirely in step four: _which number?_

In practice, the numbers that get picked are the ones that are easy to measure and easy to tie to revenue. Daily active users. Retention. Conversion. Session length. Click-through rate. Every one of these measures _what people do_. None of them measure _how people feel about it_.

And those two things are not the same. A cancellation flow buried five screens deep will win an A/B test on retention. A notification engineered to trigger anxiety will win on re-engagement. A checkout that pre-ticks the add-ons will win on average order value. The designer Harry Brignull coined the term _dark patterns_ for exactly this kind of interface back in 2010, and the uncomfortable truth is that most of them were never really designed. They were _discovered_ — found by an optimisation loop pointed at the wrong target, one statistically significant improvement at a time.

Goodhart's law puts it plainly: when a measure becomes a target, it ceases to be a good measure. "Time spent in app" was meant to be a stand-in for "people find this valuable". Then it became the goal, and now it can't tell the difference between a person who is engrossed and a person who is lost.

The famous story of Google testing forty-one shades of blue for its link colour is usually told as either a triumph of data or a parable about designers being overruled by spreadsheets. I think it's interesting for a different reason: _it's a very small question._ Forty-one variations of one colour. That is what an optimisation loop is good at. What it is terrible at is the big question — should this page exist at all, is this the right way to help this person, would a completely different approach serve them better?

### Why Only Small Ideas Got Tested

The reason product teams obsess over small, measurable tweaks isn't that everyone in tech is cynical. It's economics.

Changing a button colour costs an afternoon. Testing a genuinely different approach to a problem — a new flow, a new mental model, a different way of structuring the whole thing — costs a team several weeks. Design it, build it, integrate it with the real backend, get it through review, ship it behind a flag. And after all that, it might lose.

So organisations behave rationally. They do lots of cheap experiments and very few expensive ones. The cheap experiments are, almost by definition, local — tweaks to what already exists. And local optimisation, pointed at an engagement metric, walks you steadily uphill toward a product that is extremely good at holding onto people and not necessarily good at anything else.

The big ideas, the ones that might have made people's lives meaningfully better, mostly lived and died in slide decks and Figma files. Too expensive to build just to find out.

### Prototypes Got Cheap

This is the part that has changed, and changed fast.

With agentic coding tools, the cost of turning an idea into something that _works_ has collapsed. Not a mockup. Not a clickable storyboard. A working prototype — real data, real interactions, running in a browser — built in an afternoon by describing what you want and iterating on it in conversation. I've been working this way for a while now, and the thing that surprised me most was not the speed of any single prototype. It was how it changed which ideas I bothered to try. It felt a lot like fiddling with the numbers in _Gorillas_ again: change something, run it, see what happens.

When a prototype costs three weeks, you build the one you're most confident in and defend it. When it costs an hour, you build three different approaches before lunch and put all of them in front of someone after. You try the weird one. You try the one your colleague suggested that you privately thought was wrong. Sometimes it _is_ wrong, and you find out in an hour instead of arguing about it for a month. Sometimes it isn't.

That changes where testing happens in the life of a product. The expensive question — _is this the right approach at all?_ — can now be asked early, with real users and something real in their hands, instead of being settled by whoever was most persuasive in the planning meeting. The A/B test at the end of the pipeline stops being the only place evidence enters the process.

And it changes who can take part. A designer can build the thing they've been describing. A domain expert who knows exactly what their workflow should look like can sketch it into existence rather than filing a requirements document and waiting a quarter. The people closest to the problem get to show, not just tell.

I should admit where this essay came from, because I did the thing I'm describing. [Voice Runner](/projects/voice-runner) is an endless runner whose stages are generated from whatever music is playing in the room, and that you steer by shouting at it. It needs beat detection, a level generator locked to the tempo so the obstacles land on the beat rather than near it, and a microphone that has to pick your voice out of the same music it is listening to. That is an idea I would once have sketched, estimated at a season of evenings, and never started. Turning an idea into something _playable_ is now an afternoon away — so it exists, and you can play it in the browser.

### The Floor Is Rising

There's a second-order effect here that I think matters even more.

When anyone can generate a clean, consistent, responsive, reasonably accessible interface in minutes, that level of polish stops being an achievement. It becomes the default. The baseline for "decent UI" is rising, fast, because the tools producing interfaces have absorbed decades of accumulated convention — sensible spacing, readable type, keyboard navigation, loading states, empty states, proper error messages. Things that used to require a dedicated design team and a design system now come along almost for free.

Which means the old excuses are running out. "We didn't have the resources to do the UX properly." "The redesign is on the roadmap for next year." "It's internal tooling, it doesn't need to be nice." When a competent interface costs almost nothing, a bad one is no longer a resource constraint. It's a choice.

It goes further than that. For the first time, users themselves can build software. Not everyone, and not for everything — but the person stuck with a miserable internal tool can now, quite plausibly, build a small thing that wraps it, or replaces the part they use, or just does the job better for them and their team. The most _chosen_ software there is, is software you wrote for yourself.

That shifts leverage. If your product is imposed, clumsy, and hostile, the people forced to use it have more options than they used to. Maybe not to leave — the lock-in is still real — but to route around you, and to notice exactly how much better things could be.

### The Onus Is Back on Us

I want to be careful not to oversell this. The same tools that make it cheap to prototype a kinder interface make it just as cheap to prototype a more manipulative one, and to test a thousand variants of a dark pattern instead of forty-one shades of blue. An optimisation loop running faster is still an optimisation loop. The tool doesn't pick the metric. People do.

But I think something important moves when the craft of building an interface stops being the hard part. For a long time, it was possible to hide behind the difficulty. Good UX was expensive, so compromises were understandable. Big ideas were risky, so small tweaks were prudent. The metric was the only feedback we could afford, so we followed the metric.

When building becomes cheap, what's left is judgement. Who is this for? What does it actually help them do? Did they leave happier than they arrived? Would they use it if they had a choice?

Those were always the questions that mattered. They just used to be buried under the cost of finding out.

### Would You Come Back?

Game designers have a test that I think every piece of software should have to pass. Raph Koster, in _A Theory of Fun for Game Design_, argues that fun is what learning feels like — the pleasure of getting better at something, of a problem opening up in your hands. A game that stops giving you that gets abandoned, and the designer knows it, because nothing forces you to keep playing.

Most software will never be fun, and it doesn't need to be. Nobody needs their tax return to be delightful. But the underlying question transfers perfectly: _if nobody was making you use this, would you come back?_ Not because your family is there, not because your manager mandated it, not because the cancel button is hidden — but because it genuinely made the thing you were trying to do easier, and you walked away a little better off than you started.

I never did become a game developer. But I think the thing I wanted as a kid, making bananas explode in QBasic, wasn't really about games. It was about software that people would choose — technology that exists for the people using it, rather than the people selling it.

For a long time, building that kind of software was hard, and we had good excuses. We're about to run out of them. I think that's a very good thing.

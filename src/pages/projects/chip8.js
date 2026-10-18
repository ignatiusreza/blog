import { useEffect, useState } from 'react'

import Author from '../../components/author'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const GAME_URL = 'https://chip8.erauqssidlroweht.com'
const REPO_URL = 'https://github.com/ignatiusreza/chip8'

// The game reports how tall it is, so the frame fits it without scrolling; until then
// the frame is square. Only messages from the game itself count.
const useGameHeight = () => {
  const [height, setHeight] = useState(null)
  useEffect(() => {
    const origin = new URL(GAME_URL).origin
    const onMessage = event => {
      const { type, height } = event.data ?? {}
      if (event.origin !== origin || type !== 'chip8-height') return
      if (Number.isFinite(height))
        setHeight(Math.min(Math.max(height, 200), 3000))
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])
  return height
}

const Chip8 = () => {
  const height = useGameHeight()
  return (
    <Layout>
      <section className="article flex-wrap">
        <h1 className="article-title text-3xl md:text-4xl">CHIP-8</h1>

        <div className="article-content">
          <p>
            A CHIP-8 and SUPER-CHIP emulator, with two dozen freely licensed
            games from the community archive to play.{' '}
            <strong>
              Pick a game, click the screen, and play with the keys around W A S
              D.
            </strong>
          </p>

          {/* clipboard-write lets "Copy" put the share link on the clipboard
            from inside the frame; autoplay lets the beeper sound once the
            game has been clicked. */}
          <div
            className="embed embed-square"
            style={height ? { aspectRatio: 'auto', height } : undefined}
          >
            <iframe
              src={GAME_URL}
              title="CHIP-8"
              allow="autoplay; clipboard-write; fullscreen"
              loading="lazy"
            />
          </div>

          <p className="embed-note">
            Press <em>Share live</em> for a link anyone can open to watch you
            play, as it happens. The keyboard only reaches the game once it has
            been clicked; if it doesn&rsquo;t,{' '}
            <a href={GAME_URL} target="_blank" rel="noopener noreferrer">
              open it on its own
            </a>
            .
          </p>

          <h3>How it works</h3>

          <p>
            The emulator started as a C++ program for relearning C++, and was
            later ported to Rust and Go, all three sharing the same tests. What
            runs here is the Rust one, compiled to WebAssembly: the game runs in
            your browser, so it reacts to the keys as quickly as the native
            versions do. The page around it only draws the screen, reads the
            keys and plays the beeper.
          </p>

          <p>
            Sharing goes through a small Rust server. While you share, your page
            sends it each new picture of the screen — a kilobyte, and only when
            something changed — and the server passes it on to everyone watching
            your link, keeping the latest one for anyone who joins late. It
            never runs a game itself.
          </p>

          <p>
            CHIP-8 interpreters never quite agreed on what a few instructions
            do, so each game comes with the quirks and speed it was made for.
            The source, the games and notes on all of that are{' '}
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              on GitHub
            </a>
            .
          </p>
        </div>
      </section>

      <Author />
    </Layout>
  )
}

export default Chip8

export const Head = ({ location }) => (
  <Seo
    title="CHIP-8"
    description="A CHIP-8 and SUPER-CHIP emulator in Rust, compiled to WebAssembly and playable in the browser, with live sharing so others can watch you play."
    keywords="chip8, chip-8, emulator, rust, webassembly, game"
    pathname={location.pathname}
  />
)

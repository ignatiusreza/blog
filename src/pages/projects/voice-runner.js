import Author from '../../components/author'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const GAME_URL = 'https://voice-runner.erauqssidlroweht.com'
const REPO_URL = 'https://github.com/ignatiusreza/voice-runner'

const VoiceRunner = () => (
  <Layout>
    <section className="article flex-wrap">
      <h1 className="article-title text-3xl md:text-4xl">Voice Runner</h1>

      <div className="article-content">
        <p>
          A side-scrolling endless runner whose stages are generated from
          whatever audio is playing around you — a song, a podcast, or just the
          room.{' '}
          <strong>
            Shout to jump. Hold the note to glide. Growl low to slide.
          </strong>
        </p>

        {/* Permissions are not inherited across origins, so each one the game
            needs has to be named here. display-capture is what lets it offer
            "Tab or system audio" at all: without it the source registry finds
            no getDisplayMedia, skips that source silently, and drops to the
            microphone without ever asking to share audio. */}
        <div className="embed">
          <iframe
            src={GAME_URL}
            title="Voice Runner"
            allow="microphone; display-capture; autoplay; fullscreen"
            loading="lazy"
          />
        </div>

        <p className="embed-note">
          Pick <em>Tab or system audio</em> and tick “share tab audio” to build
          the stage out of whatever you are playing, then shout at it. Keyboard
          works too — space to jump, down to slide. Some browsers refuse to
          share audio from inside a frame at all, so if it drops to the
          microphone,{' '}
          <a href={GAME_URL} target="_blank" rel="noopener noreferrer">
            open it on its own
          </a>
          .
        </p>

        <h3>How it works</h3>

        <p>
          Two audio chains run side by side off one <code>AudioContext</code>.
          The stage chain listens to the music, tracks its tempo, and lays the
          level down a beat at a time — a beat landing at audio time <em>t</em>{' '}
          is placed where the player will be at <em>t</em>, so obstacles arrive
          under your feet on the beat rather than merely near it.
        </p>

        <p>
          The control chain solves the awkward part: the microphone hears the
          music as well as you. Rather than separating the two, it tracks the
          background level asymmetrically — rising slowly, falling fast — and
          reacts to how far a sound rises <em>above</em> that background. Music
          raises the floor over seconds; a shout spikes over it in milliseconds.
          Pitch then decides between jumping and sliding.
        </p>

        <p>
          The same codebase runs on the web, Android and iOS. Source, notes and
          architecture decisions are{' '}
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

export default VoiceRunner

export const Head = ({ location }) => (
  <Seo
    title="Voice Runner"
    description="A voice-controlled endless runner whose stages are generated from whatever audio is playing around you. Playable in the browser."
    keywords="voice runner, game, web audio, agentic coding, prototype"
    pathname={location.pathname}
  />
)

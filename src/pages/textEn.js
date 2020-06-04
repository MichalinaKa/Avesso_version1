// Gatsby supports TypeScript natively!
import React from "react"
import GlobalStyle from "../styles/globalStyle"

import Layout from "../components/Layout/Layout"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { TextWithBorder } from "../components/pageElements/textWithBorder"
import { TextNoBorder } from "../components/pageElements/textNoBorder"
import styled from "styled-components"
import { Link } from "gatsby"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"
// import { goHme } from "../components/topNavElements/goHome"
import { ListWrapper } from "../components/topNavElements/listWrapper"
import { colors } from "../styles/colors"
import { media } from "../styles/media"

const PBorder = styled.p`
  text-align: left;
  font-size: 20px;
  line-height: 250%;
  ${media.tablet} {
    line-height: 200%;
    font-size: 16px;
  }
  ${media.phone} {
    line-height: 200%;
    font-size: 15px;
  }
`

const PNoBorder = styled.p`
  font-size: 16px;
  text-align: left;
  width: 100%;
  line-height: 250%;
  ${media.phone} {
    line-height: 200%;
  }
`

const H1 = styled.h1`
  font-family: "Bebas Neue";
  font-size: 50px;
  position: relative;
  :before {
    content: "";
    background-color: ${colors.yellow};
    width: 150px;
    height: 3px;
    position: absolute;
    top: 26px;
    ${media.phone} {
      font-size: 80%;
    }
  }
`

const TextPage = () => (
  <Layout>
    <MainWrapper>
      {" "}
      <GlobalStyle />
      <NavMainWrapper>
        <ListWrapper>
          <goHome></goHome>
          <goHome>
            <Link to="/">home</Link>
          </goHome>
          <goHome></goHome>
        </ListWrapper>
      </NavMainWrapper>
      <H1>
        text ENG /<Link to="/textPt"> PT</Link>
      </H1>
      <TextWrapper>
        <TextWithBorder alignLeft>
          <PBorder>
            <i>The Reversal of the inside-out reversal [reversal]</i> is the
            title of an exhibition that began a few months ago in the context of
            the PhD in Visual Arts program at the Faculty of Fine Arts of the
            University of Porto. In Virose´ times, it took on a digital form and
            grew into an expanded collective body, bringing together the voices
            of artists who are re-thinking their own work in view of the
            restrictions imposed on social interaction and its’ encounter with
            art. Many of the artists gathered here usually work with some kind
            of materiality but at this moment, were predisposed and ready to
            clash with the immaterial<sup>1</sup> - which highlights the
            experimental
            <sup>2</sup> character of this project.
            <br></br>
            <i>O avesso do avesso do avesso do avesso</i> is also a verse by
            Caetano Veloso, a musician from Bahia who, in the seventies of the
            last century, had recently arrived in São Paulo. An immigrant in his
            own country, Caetano goes from the initial strangeness of the tough
            concrete poetry<sup>3</sup> found in São Paulo's corners to the
            recognition of the place<sup>4</sup> Sampa dissolving himself itself
            in each verse<sup>5</sup>. After all, the mind panics with that
            which is not even really old yet. And for us who are used to
            museums, to call an exhibition this foreign space [at least for some
            of us] into which we enter because of the virus, bears the look of
            strangeness.
            <br></br>
            <i>The Reversal of the inside-out reversal</i> relates also to this
            condition that was placed upon us in these in pandemic times
            <sup>6</sup>. The violent, scavenging forces that ripple through the
            air affect us with a gruesome intensity. Life turned inside out, the
            city inside the house, inside the body, the fear of the other, of
            itself, of death. A time of seismic shocks that tells us that the
            inside is outside and the outside is inside, that the before is the
            after<sup>7</sup>, that there is no thinking subject isolated from
            the collective body. We are learning to sustain this malaise, to
            resist painkillers, to deal with aches in the chest, in the throat,
            shortness of breath, in a resumption of the power and potential of
            creation, of this relational web that weaves metamorphoses in the
            times to come.
            <br></br>
            <i>The Reversal of the inside-out reversal</i> is all this and
            nothing too. It's a (fake) Aleph<sup>8</sup> hidden in the middle of
            Pandora's white screens. It is a place and a non-place. It is also
            all the places contained in the screen-time suspended in your hands
            at this moment, dear sailor9.<br></br>
            <br></br> May 2020 <br></br>Gabriela Carvalho<sup>10</sup>
          </PBorder>
        </TextWithBorder>
        <TextNoBorder alignLeft>
          <PNoBorder>
            1. Le saut dans le vide, photo-performance by Yves Klein, 1960:{" "}
            <a href="http://www.yvesklein.com/en/oeuvres/view/6/immateriel/643/le-saut-dans-le-vide/? of = 0">
              http://www.yvesklein.com/<wbr></wbr>en/oeuvres/view/6/<wrb></wrb>
              immateriel
              <wbr></wbr>/643/le-saut-dans-le-vide/? of = 0{" "}
            </a>
            2. “DA ADVERSIDADE VIVEMOS!” [From adversity we live!]. Hélio
            Oiticica, 1967.<br></br>
            3. Poesia é risco (poetry is risk), performance by Augusto de
            Campos, Cid Campos and Walter Silveira, 1996:{" "}
            <a href="http://site.videobrasil.org.br/en/canalvb/video/1713108/">
              http://site.videobrasil<wbr></wbr>
              .org.br/en/canalvb/video<wbr></wbr>/1713108/
            </a>
            <br></br>
            Poesia_e_risco_Augusto<wbr></wbr>_de_Campo_Cid_Campos<wbr></wbr>
            _e_Walter_Silveira_11o_Festival
            <br></br>
            4. Place is space permeated by memory, by crossings, the voices of
            those who opened the trails, “a portion of land / city / landscape
            seen from within”. To enter foreign territory requires temporality,
            the senses active and creating connections with what is still
            strange. Listening is radicalized in an attempt to absorb the
            recognizable sounds in the body-place that lives inside us. In the
            inner resonance of these voices, the possibility of speech
            germinates. Allocated in a nest-throat11, the words grow, take shape
            and take on a soul with the vibrating sound that protrudes from the
            mouth through the air. Being a foreigner in a algo-rithm place means
            wondering about the habitat, casting a suspicious look at what is
            unknown, unfamiliar. Being an ex-otic, looking through a strangeness
            lense, through the discomfort that reverberates in the body-skin and
            germinates, creating beings, words, larvae that now slide in this
            inhospitable numerical field. 5. Vertere, the same origin of the
            verse, the reverse, the adverse. The Latin translation would be
            something like turning or bending. It refers to the language
            practiced among farmers in a comparison with the act of plowing the
            land in stretches that, at the end of the land, turned and started
            over on a new line. It is said that in classical times, the Greeks
            wrote to the end of the line and then passed downwards, calling it a
            vertere, a verse. We can think that the Reversal of the inside-out
            reversal is a poem, a plowed field, a Möbius strip, "a topological
            surface where the end of one side restarts on the reverse of the
            other, which makes them indiscernible". (Rolnik, 2018)<br></br>
            6. “Convulsing times are always the most difficult to live in , but
            it is also in them that life screams the loudest and awakens those
            who have not yet succumbed to the condition of zombies - a condition
            that we are all destined for because of the pimp of the vital
            drive”. (Rolnik, 2018)<br></br>
            7. Caminhando (walking), by Lygia Clark, 1963:
            <a href="https://www.moma.org/audio/playlist/181/2392">
              https://www.moma.org/<wbr></wbr>audio/playlist/181/2392
            </a>
            <br></br>
            8. “On the back part of the step, toward the right, I saw a small
            iridescent sphere of almost unbearable brilliance. At first I
            thought it was revolving; then I realized that this movement was an
            illusion created by the dizzying world it bounded. The Aleph’s
            diameter was probably little more than an inch, but all space was
            there, actual and undiminished. Each thing (a mirror’s face, let us
            say) was infinite things, since I distinctly saw it from every angle
            of the universe. I saw the teeming sea; I saw daybreak and
            nightfall; I saw the multitudes of America; I saw a silvery cobweb
            in the center of a black pyramid; I saw a splintered labyrinth (it
            was London); I saw, close up, unending eyes watching themselves in
            me as in a mirror; I saw all the mirrors on earth and none of them
            reflected me; I saw in a backyard of Soler Street the same tiles
            that thirty years before I’d seen in the entrance of a house in Fray
            Bentos; I saw bunches of grapes, snow, tobacco, lodes of metal,
            steam; I saw convex equatorial deserts and each one of their grains
            of sand; I saw a woman in Inverness whom I shall never forget; I saw
            her tangled hair, her tall figure, I saw the cancer in her breast; I
            saw a ring of baked mud in a sidewalk, where before there had been a
            tree; I saw a summer house in Adrogué and a copy of the first
            English translation of Pliny — Philemon Holland’s — and all at the
            same time saw each letter on each page (as a boy, I used to marvel
            that the letters in a closed book did not get scrambled and lost
            overnight); I saw a sunset in Querétaro that seemed to reflect the
            colour of a rose in Bengal; I saw my empty bedroom; I saw in a
            closet in Alkmaar a terrestrial globe between two mirrors that
            multiplied it endlessly; I saw horses with flowing manes on a shore
            of the Caspian Sea at dawn; I saw the delicate bone structure of a
            hand; I saw the survivors of a battle sending out picture postcards;
            I saw in a showcase in Mirzapur a pack of Spanish playing cards; I
            saw the slanting shadows of ferns on a greenhouse floor; I saw
            tigers, pistons, bison, tides, and armies; I saw all the ants on the
            planet; I saw a Persian astrolabe; I saw in the drawer of a writing
            table (and the handwriting made me tremble) unbelievable, obscene,
            detailed letters, which Beatriz had written to Carlos Argentino; I
            saw a monument I worshipped in the Chacarita cemetery; I saw the
            rotted dust and bones that had once deliciously been Beatriz
            Viterbo; I saw the circulation of my own dark blood; I saw the
            coupling of love and the modification of death; I saw the Aleph from
            every point and angle, and in the Aleph I saw the earth and in the
            earth the Aleph and in the Aleph the earth; I saw my own face and my
            own bowels; I saw your face; and I felt dizzy and wept, for my eyes
            had seen that secret and conjectured object whose name is common to
            all men but which no man has looked upon — the unimaginable
            universe. (in Aleph – Borges, 1949)
          </PNoBorder>
        </TextNoBorder>
      </TextWrapper>
    </MainWrapper>
  </Layout>
)

export default TextPage

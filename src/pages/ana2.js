// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"
import { H1 } from "../components/pageElements/H1"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import { GalleryWrapper } from "../components/pageElements/galleryWrapper"
import { ImageWrapper } from "../components/pageElements/imageWrapper"
import { StyledImage } from "../components/pageElements/styledImage"
import { ImageTitle } from "../components/pageElements/imageTitle"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { TextWithBorder } from "../components/pageElements/textWithBorder"
import { TextNoBorder } from "../components/pageElements/textNoBorder"
import { TitleOfWork } from "../components/pageElements/titleOfWork"
import { Website } from "../components/pageElements/website"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const Ana2Page = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[4].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[3].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[5].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/ana2img1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[4].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/ana2img2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[4].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/ana2img3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[4].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/ana2img4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[4].node.img4Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage bigScale src="/artists/ana2img5.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[4].node.img5Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/ana2img6.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[4].node.img6Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[4].node.title}</TitleOfWork>
        <Website as="a" href="http://anaalmeidapinto.com">
          {data.allDataJson.edges[4].node.website}
        </Website>
        <TextWithBorder>
          <p>
            Como materializar objetos e propostas artísticas na era dos suportes
            digitais? Como encontrar formatos disruptivos para discursos em
            ambientes virtuais? Como converter o observador em comissário,
            exaltando a sua participação na criação e interpretação? Como
            investigar a apropriação nos processos escultóricos contemporâneos
            de forma activa e consciente, cedendo ao processo do fazer toda a
            significação e partindo de um pressuposto de partilha e diálogo
            entre autor, objecto e público? Onde se esbate a linha de
            apropriação, na forma, na linguagem, no espaço? Quem é realmente o
            autor se a interpretação é múltipla? Como incorporar a noção de
            território neste contexto de confinamento? Será o nosso território
            pessoal um símbolo global? Poderá o processo de fazer constituir um
            espelho desse território? Quais as suas margens? E de que forma
            podemos ainda acrescentar uma crítica social que espelhe o passado,
            presente e futuro que vivemos? Prec(ç)ário é uma escultura que
            acontece no campo expandido entre o mundo digital e o ambiente
            doméstico de todos os que participam, apropriando espaços e objectos
            domésticos para interpretar a relação desigual entre o cidadão e o
            sistema financeiro. Cada interpretação terá a sua leitura e a sua
            narrativa, e todas as partes compões o todo, sempre em crescimento e
            sempre em evolução.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            How to materialize objects and artistic proposals in the era of
            digital media? How to find disruptive formats for speeches in
            virtual environments? How to convert the observer into a
            commissioner, extolling his participation into creation and
            interpretation? How to investigate appropriation in contemporary
            sculptural processes in an active and conscious way, yielding all
            meaning to the process of making and starting from an assumption of
            sharing and dialogue between author, object and audience? Where does
            the appropriation line fade, in form, in language, in space? Who is
            really the author if the interpretation is multiple? How to
            incorporate the notion of territory in this context of confinement?
            Is our personal territory a global symbol? Can the process of making
            be a mirror of that territory? What are its margins? And how can we
            add a social critique that reflects the past, present and future we
            live in? Prec(ç)ário is a sculpture that takes place in the expanded
            field between the digital world and the home environment of all who
            participate, appropriating spaces and domestic objects to interpret
            the unequal relationship between the citizen and the financial
            system. Each interpretation will have its reading and its narrative,
            as all parts make up the whole, always growing and always evolving.
          </p>
        </TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[4].node.url} className="scrollTopButton">
      {" "}
      <span> &larr;</span>
      to the top
    </Link>
  </Layout>
)
export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          name
          title
          website
          url
          img1Description
          img2Description
          img3Description
          img4Description
          img5Description
          img6Description
        }
      }
    }
  }
`
export default Ana2Page

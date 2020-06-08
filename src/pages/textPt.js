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
import { goHome } from "../components/topNavElements/goHome"
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
  font-family: "Montserrat";
  font-size: 40px;
  position: relative;
  :before {
    content: "";
    background-color: ${colors.yellow};
    width: 140px;
    height: 3px;
    position: absolute;
    top: 20px;
    ${media.phone} {
      width: 120px;
    }
  }
  ${media.phone} {
    font-size: 200%;
  }
`

const TextPage = () => (
  <Layout>
    <MainWrapper>
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
        text PT / <Link to="/textEn"> ENG</Link>
      </H1>
      <TextWrapper>
        <TextWithBorder alignLeft>
          <PBorder>
            O avesso do avesso do avesso [do avesso] é o título de uma exposição
            que começou há alguns meses no contexto do programa doutoral em
            Artes Plásticas da Faculdade de Belas Artes da Universidade do
            Porto. Em tempos de Virose, assumiu a forma digital e caminhou até
            aqui com um corpo coletivo ampliado, reunindo vozes de artistas que
            estão a re-pensar o próprio trabalho diante das restrições impostas
            ao convívio social no encontro com a arte. Muitos dos artistas aqui
            reunidos, trabalham comumente com outras materialidades e se
            dispuseram nesse momento ao embate com o imaterial<sup>1</sup> – o
            que ressalta o caráter experimental<sup>2</sup> deste projeto.
            <br></br> O avesso do avesso do avesso do avesso é também verso de
            Caetano Veloso, um novo baiano recém-chegado à São Paulo na década
            de setenta do século passado. Imigrante em seu próprio país, Caetano
            passa do estranhamento inicial da dura poesia concreta<sup>3</sup>
            das esquinas paulistanas ao reconhecimento do lugar<sup>4</sup>{" "}
            “Sampa” em que se dissolve a cada verso<sup>5</sup>. Afinal, a mente
            apavora o que ainda não é mesmo velho. E habituados que estamos aos
            museus, chamarmos de exposição esse espaço estrangeiro [para alguns]
            em que adentramos pelo acaso do vírus, chega a carregar o olhar de
            estranheza.
            <br></br>O avesso do avesso do avesso é também essa condição que nos
            foi colocada em tempos pandêmicos<sup>6</sup>. As forças violentas,
            necrófagas que se propagam em ondas pelos ares afeta-nos em uma
            intensidade escabrosa. A vida virada ao avesso, a urbe dentro de
            casa, dentro do corpo, o medo do outro, de si, da morte. Um tempo de
            abalos sísmicos a nos dizer que o dentro é fora e o fora é dentro,
            que o antes é o depois<sup>7</sup>, que não há sujeito pensante
            isolado de corpo coletivo. Estamos aprendendo a sustentar esse
            mal-estar, resistir ao analgésico, lidar com os nós no peito, na
            garganta, a falta de ar, em uma retomada da potência de criação, da
            trama relacional que tece metamorfoses no tempo porvir. <br></br>O
            avesso do avesso do avesso [...] é tudo isso e nada também. É um
            (falso) Aleph<sup>8</sup> escondido em meio a pandora das telas
            brancas. É um lugar e um não-lugar. É também todos os lugares
            contidos na tela-tempo suspenso nas suas mãos nesse momento, caro
            navegante.<sup>9</sup> <br></br>
            <br></br> Maio de 2020 <br></br>
            Gabriela Carvalho<sup>10</sup>{" "}
          </PBorder>
        </TextWithBorder>
        <TextNoBorder alignLeft>
          <PNoBorder>
            1. Le saut dans le vide, foto-performance de Yves Klein, 1960:
            <a
              href="http://www.yvesklein.com/en/oeuvres/
            view/6/immateriel/643/le-saut-dans-le-vide/?of=0"
            >
              http://www.yvesklein.com/en/oeuvres/<wbr></wbr>
              view/6/immateriel/643/le-saut-dans-le-vide/?of=0
            </a>
            <br></br>2. “DA ADVERSIDADE VIVEMOS!” (Oiticica, 1967)<br></br> 3
            Poesia é risco, performance de Augusto de Campos, Cid Campos e
            Walter Silveira, 1996:
            <a href="http://site.videobrasil.org.br/en/canalvb/video/1713108/">
              http://site.videobrasil.<wbr></wbr>
              org.br/en/canalvb/video/1713108/
            </a>
            <wbr></wbr>
            Poesia_e_risco_Augusto_de<wbr></wbr>_Campo_Cid_Campos_e_Walter
            <wbr></wbr>_Silveira_11o_Festival <br></br>4. Lugar é espaço
            permeado por memória, por travessias, vozes daqueles que abriram as
            trilhas, “uma porção de terra/cidade/paisagem vista de dentro”.
            Adentrar terreno estrangeiro pede temporalidade, os sentidos atentos
            a criar conexões com o que é ainda estranho. A escuta se radicaliza
            na tentativa de absorver os sons reconhecíveis no lugar-corpo que
            trazemos dentro. Na ressonância interior dessas vozes, germina-se a
            possibilidade da fala. Alocadas em ninho-garganta11, as palavras
            crescem, tomam forma e ganham alma na sonoridade vibratória que se
            projeta da boca pelo ar. Ser estrangeiro em lugar algo-rítmico é
            estranhar o habitat, lançar um olhar desconfiado pelo que é
            desconhecido, não-familiar. Ser ex-ótico, olhar pela via do
            estranhamento, do incômodo que reverbera no corpo-pele e germina,
            cria seres, palavras, larvas que agora deslizam nesse campo numérico
            inóspito.<br></br> 5. Vertere, origem do verso, do avesso, do
            adverso. Em tradução do latim seria algo como virar ou dobrar.
            Remete a língua praticada entre os agricultores em uma comparação
            com o ato de arar a terra em faixas que ao fim do terreno, viravam e
            recomeçavam em uma nova linha. Diz-se que na época clássica, os
            gregos escreviam até o fim da linha e então passavam para baixo,
            chamando-a de um vertere, verso. Podemos pensar que o avesso do
            avesso do avesso do avesso seja um poema, um campo arado, uma fita
            de Moebius, “uma superfície topológica na qual o extremo de um dos
            lados continua no avesso do outro, o que os torna indiscerníveis”.
            (Rolnik, 2018)<br></br> 6. “Períodos de convulsão são sempre os mais
            difíceis de viver, mas é neles também que a vida grita mais alto e
            desperta aqueles que ainda não sucumbiram à condição de zumbis – uma
            condição a que estamos todos destinados pela cafetinagem da pulsão
            vital” (Rolnik, 2018)
            <br></br> 7. Caminhando, obra de Lygia Clark, 1963:
            <a href="https://www.moma.org/audio/playlist/181/2392">
              https://www.moma.org/<wbr></wbr>audio/playlist/181/2392
            </a>
            <br></br> 8. “Na parte inferior do degrau, à direita, vi uma pequena
            esfera furta-cor, dequase intolerável fulgor. A princípio, julguei-a
            giratória; depois, compreendi que esse movimentera uma ilusão
            produzida pelos vertiginosos espetáculos que encerrava. O diâmetro
            do Aleph seria de dois ou três centímetros, mas o espaço cósmico
            estava aí, sem diminuição de tamanho. Cada coisa (o cristal do
            espelho, digamos) era infinitas coisas, porque eu a via claramente
            de todos os pontos do universo. Vi o populoso mar, vi a aurora e a
            tarde, vi as multidões da América, vi uma prateada teia de aranha no
            centro de uma negra pirâmide, vi um labirinto roto (era Londres), vi
            intermináveis olhos próximos perscrutando-me como num espelho, vi
            todos os espelhos do planeta e nenhum me refletiu, vi num pátio da
            rua Soler as mesmas lajotas que, há trinta anos, vi no vestíbulo de
            uma casa em Fray Bentos, vi cachos de uva, neve, tabaco, veios de
            metal, vapor de água, vi convexos desertos equatoriais e cada um de
            seus grãos de areia, vi em Inverness uma mulher que não esquecerei,
            vi a violenta cabeleira, o altivo corpo, vi um câncer no peito, vi
            um círculo de terra seca numa calçada onde antes existira uma
            árvore, vi uma chácara de Adrogué, um exemplar da primeira versão
            inglesa de Plínio, a de Philemon Holland, vi, ao mesmo tempo, cada
            letra de cada página (em pequeno, eu costumava maravilhar-me com o
            fato de que as letras de um livro fechado não se misturassem e se
            perdessem no decorrer da noite), vi a noite e o dia contemporâneo,
            vi um poente em Querétaro que parecia refletir a cor de uma rosa em
            Bengala, vi meu dormitório sem ninguém, vi num gabinete de Alkmaar
            um globo terrestre entre dois espelhos que o multiplicam
            indefinidamente, vi cavalos de crinas redemoinhadas numa praia do
            mar Cáspio, na aurora, vi a delicada ossatura de uma mão, vi os
            sobreviventes de uma batalha enviando cartões-postais, vi numa
            vitrina de Mirzapur um baralho espanhol, vi as sombras oblíquas de
            algumas samambaias no chão de uma estufa, vi tigres, êmbolos,
            bisões, marulhos e exércitos, vi todas as formigas que existem na
            terra, vi um astrolábio persa, vi numa gaveta da escrivaninha (e a
            letra me fez tremer) cartas obscenas, inacreditáveis, precisas, que
            Beatriz dirigira a Carlos Argentino, vi um adorado monumento em La
            Chacarita, vi a relíquia atroz do que deliciosamente fora Beatriz
            Viterbo, vi a circulação de meu escuro sangue, vi a engrenagem do
            amor e a modificação da morte, vi o Aleph, de todos os pontos, vi no
            Aleph a terra, e na terra outra vez o Aleph, e no Aleph a terra, vi
            meu rosto e minhas vísceras, vi teu rosto e senti vertigem e chorei,
            porque meus olhos haviam visto esse objeto secreto e conjetura) cujo
            nome usurpam os homens, mas que nenhum homem olhou: o inconcebível
            universo.” (Borges, 1949)<br></br> 9. Agora, video-poema de Arnaldo
            Antunes, 1993:
            <a href="http://www.youtube.com/watch?v=9FROBNBoTgQ">
              http://www.youtube.com/watch?v=9FROBNBoTgQ{" "}
            </a>
            <br></br> 10. Gabriela Carvalho (Brasil, 1988) costuma ser curadora,
            escritora (seria artista?), produtora, professora, cozinheira,
            dançarina e, atualmente, desenvolve um projeto de investigação no
            doutoramento em Artes Plásticas da FBAUP no campo da linguagem
            curatorial. Parte da noção de escritura como aquela que inscreve
            algo no tempo, que marca a ruína da história, para pensar a dimensão
            catalógica (do grego kata+logos) da prática curatorial. Sobre este
            logos, lança-se então um movimento endógeno de desconstrução com o
            intuito de desarticular o eixo falogocêntrico das exposições em uma
            perspectiva descolonializadora das artes e, consequentemente, das
            práticas curatoriais. O que por si só consiste em um necessário ato
            de fracasso. Como podem ver, continuo tentando.<br></br> 11. Receita
            para aquecer um ninho-garganta Você vai precisar de: - um pedaço
            pequeno de gengibre; - um pedaço pequeno de cúrcuma; - um dente de
            alho; - um limão (de casca verde); - um pau de canela; - uma colher
            de mel; - meio litro de água. Pique em pedaços menores o gengibre, a
            cúrcuma e o alho. Em uma panela aqueça esses ingredientes junto com
            a água e o pau de canela. Após levantar fervura deixe ainda por
            cinco minutos. Ao final, espremer o limão e misturar a canela. Beber
            ainda quente. Mantenha o corpo aquecido. É tiro e queda para o
            ninho-garganta, tem gente que brota até canto. A vó dizia que também
            é bom pra reforçar a imunidade. (A vó, 1996)
          </PNoBorder>
        </TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to="/textPt" className="scrollTopButton">
      {" "}
      <span> &larr;</span>
      to the top
    </Link>
  </Layout>
)

export default TextPage

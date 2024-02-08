import { List, ListItem } from "@mui/material";
import ListaTecnologias from "./Lista";
import { Paragrafo, SubSubTitulo, SubTitulo } from "../../../components";
import { Container } from "../../../components";

const SobreMim = () => {
  return (
    <Container
      boxProps={{
        backgroundColor: "rgba(163,138,187,0.37)",
        padding: "60px",
        borderTop: "1px solid #000"
      }}

      stackProps={{
        maxWidth: "70rem"
      }}
    >
      <SubTitulo>
        Sobre Mim
      </SubTitulo>
      <Paragrafo>
        Olá! Eu sou Roberta Meyrelles França (pronomes: ela/dela), e
        atualmente sou Bacharelanda em Ciência da Computação pela Universidade
        Vila Velha (UVV) e Estagiária em Desenvolvimento de Sistemas no
        Ministério Público Do Estado Do Espírito Santo.
      </Paragrafo>
      <Paragrafo>
        Particularmente sou interessada em Desenvolvimento Front-End, área
        que estudo e pratico no estágio e paralelamente aos estudos da graduação.
        Principalmente sobre acessibilidade na web e a construção de protótipos e websites user-friendly.
        E tecnologias e abordagens que tratem sobre tecnologia ética, questões raciais e diversidade na área
        tecnológica.
      </Paragrafo>
      <Paragrafo>
        Durante o estágio tenho a oportunidade de exercer as seguintes
        atividades:
        <List>
          <ListItem>• Desenvolvimento de protótipos utilizando Figma e validação junto aos usuários;</ListItem>
          <ListItem>• Implementação e manutenção de novas funcionalidades com React.js, Chakra UI para a criação
            das interfaces gráficas e C# para a integração com o banco de dados. </ListItem>
        </List>
      </Paragrafo>
      <SubSubTitulo> Tecnologias </SubSubTitulo>
      <ListaTecnologias />
    </Container>
  );
}

export default SobreMim;

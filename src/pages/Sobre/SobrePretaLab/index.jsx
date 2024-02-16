import { Divider, Box, Stack, Avatar } from "@mui/material";
import { Paragrafo, SubTitulo, Container, SubSubTitulo, LinkCustomizado } from "../../../components";
import logoPretaLab from "../../../img/logoPretaLab.jpg";

const SobrePretaLab = () => {
  return (
    <Container
      boxProps={{
        padding: "60px",
        borderTop: "1px solid #000"
      }}

      stackProps={{
        maxWidth: "70rem"
      }}
    >
      <SubTitulo>
        Sobre PretaLab
      </SubTitulo>
      <Divider />

      <Box paddingTop={5}>
        <SubSubTitulo>O que é o PretaLab?</SubSubTitulo>
        <Stack paddingTop={1}>
          <Box marginBottom={5} height="325px" width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Avatar
              alt="Logo da PretaLab"
              src={logoPretaLab}
              sx={{ width: 400, height: 250, marginRight: "1rem" }}
              variant="rounded"
            />
            <Box flexDirection="column">
              <Paragrafo  >
                A PretaLab é uma iniciativa do Olabi, organização social que trabalha para trazer diversidade para a tecnologia e inovação.
                Possui como proposta a criação de uma plataforma que conecta mulheres negras que são ou que gostariam de ser da tecnologia,
                por meio de ciclos formativos, rede de profissionais, mercado de trabalho, consultorias e estudos.
              </Paragrafo>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={12}
                sx={{
                  fontSize: "1.35rem"
                }}
              >
                <LinkCustomizado href="https://www.pretalab.com/" label="PretaLab" />
                <LinkCustomizado href="https://www.olabi.org.br/" label="Olabi" />
              </Stack>
            </Box>
          </Box>
          <Stack marginBottom={2}>
            <SubSubTitulo>Ciclo Formativo 9</SubSubTitulo>
            <Paragrafo>
              O Ciclo Formativo Básico em Tecnologia do PretaLab é uma jornada de aprendizagem de 16 semanas, com mais de 124 horas, dedicada a mulheres negras que desejam ingressar na área da tecnologia.
            </Paragrafo>
            <Paragrafo>
              Durante esse período, são explorados conceitos e práticas em HTML5, CSS3, JavaScript e React, além de encontros com a psicóloga da equipe para desenvolvimento de habilidades sutis em um ambiente seguro e acolhedor.
            </Paragrafo>
            <Paragrafo>
              A metodologia da PretaLab, baseada em Autoconhecimento, Desenvolvimento Técnico e Autogestão, é aplicada para potencializar a aprendizagem das novas tecnologistas.
            </Paragrafo>
          </Stack>
          <SubSubTitulo>Minha Experiência como Aluna</SubSubTitulo>
          <Paragrafo>
            Conheci o PretaLab através da minha colega de empresa, onde atuo como estagiária. Vi nessa indicação de curso o reconhecimento de uma mulher negra para com outra mulher negra e, apesar de ter muitas dúvidas sobre o meu caminho na área da tecnologia, decidi me inscrever no ciclo de formação 9 e fui escolhida para integrar a turma 2.
          </Paragrafo>
          <Paragrafo>
            Como estudante de graduação no curso de Ciência da Computação e pelo estágio na área, alguns assuntos da formação eu já conhecia, seja por nome ou por ter tido alguma experiência anterior, mas sinto que pude fixar mais e me dedicar melhor nos assuntos conhecidos e desconhecidos pelo ambiente tão acolhedor que foi construído.
          </Paragrafo>
          <Paragrafo>Ter tido essa experiência de poder estudar e tirar dúvidas com outras mulheres negras fez o que eu imaginava ser praticamente impossível: ver que tem um lugarzinho sim para mim na área de tecnologia. É algo que nunca esquecerei.
          </Paragrafo>
        </Stack>
      </Box>
    </Container >

  );
}

export default SobrePretaLab;

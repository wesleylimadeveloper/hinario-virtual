import React from "react";

import {
  Container,
  Scroll,
  Title,
  TitleMessage,
  Text,
  Subtitle,
  Quotation,
} from "./styles";

export function Orientations() {
  return (
    <Container>
      <Scroll>
        <Title>Orientações</Title>
        <TitleMessage>
          O CANTO E A MÚSICA LITÚRGIA NA CELEBRAÇÃO EUCARÍSTICA
        </TitleMessage>

        <Text>
          O canto e a música litúrgica são partes necessárias e integrantes da
          Liturgia; por exigência de autenticidade, deve ser a expressão da fé e
          da vida cristã de cada assembleia. Não é apenas para embelezar ou para
          quebrar a monotonia das orações. Dê-se grande valor ao uso do canto
          nas celebrações.{"\n"}
          {"\n"}Os atos litúrgicos revestem-se de forma mais nobre quando são
          solenemente celebrados com o canto, com a participação ativa dos fiéis
          e dos ministros ordenados.{"\n"}
          {"\n"}O canto é importante na liturgia, pois ajuda tanto a expressar
          os sentimentos humanos a Deus, como a descrever e vivenciar melhor o
          mistério celebrado.
        </Text>

        <Subtitle>
          1 - O canto litúrgico a serviço da Palavra de Deus e dos gestos
          sagrados da celebração
        </Subtitle>
        <Text>
          Na celebração, Deus se revela para a assembleia litúrgica numa
          “passagem” (Páscoa) libertadora em nossas vidas. Os discípulos de hoje
          recobram e reavivam a chama da fé, da esperança e do amor na medida em
          que percebem a ação do Espírito do Ressuscitado e descobrem o sentido
          dos acontecimentos.{"\n"}
          {"\n"}Os corações dos fiéis ardem à medida que a mente se ilumina com
          a proclamação da Palavra Divina (Lc 24,13-35).{"\n"}
        </Text>

        <Quotation>
          “O canto, por natureza, está intimamente vinculado à Palavra de Deus.
          O canto é Palavra que desabrocha em sonoridade, melodia e ritmo”. “O
          canto será, assim, a expressão mais suave ou mais forte da Palavra.
          Por essa vinculação de raiz da Palavra, no culto cristão, o canto é a
          expressão musical mais importante”.
        </Quotation>
      </Scroll>
    </Container>
  );
}

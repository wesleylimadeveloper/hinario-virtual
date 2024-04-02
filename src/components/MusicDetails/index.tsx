import React, { Fragment } from "react";

import { MusicLyrics } from "../MusicLyrics";

import { MusicDetailsProps } from "./types";
import { Title } from "./styles";

export function MusicDetails({
  celebrationPartMusic,
  part,
}: MusicDetailsProps) {
  return (
    <Fragment>
      <Title>{part.description}</Title>

      {celebrationPartMusic.map((item) => (
        <MusicLyrics key={item.id} {...item} />
      ))}
    </Fragment>
  );
}

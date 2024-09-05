import { useEffect, useState } from "react";
import "./App.css";

const drumpadArray = [
  {
    keyName: "Q",
    clipName: "Sample-1",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    keyName: "W",
    clipName: "Sample-2",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    keyName: "E",
    clipName: "Sample-3",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    keyName: "A",
    clipName: "Sample-4",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    keyName: "S",
    clipName: "Clap",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    keyName: "D",
    clipName: "Open-HH",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    keyName: "Z",
    clipName: "Kick-n-Hat",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    keyName: "X",
    clipName: "Kick",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    keyName: "C",
    clipName: "Closed-HH",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function DrumPadSection({ children }) {
  return <div id="drum-pad-container">{children}</div>;
}

function DrumPad({ clipName, keyName, sampleSource, onDrumpadClick }) {
  return (
    <div className="drum-pad" id={clipName} onClick={onDrumpadClick}>
      <p>{keyName}</p>
      <audio id={keyName} className="clip" src={sampleSource}></audio>
    </div>
  );
}

function Display({ clipName }) {
  return (
    <div id="display">
      <span id="clip-name">{clipName}</span>
    </div>
  );
}

function DrumMachine() {
  async function handleDrumpadClick(event) {
    const audioElement = event.target.childNodes[1];
    audioElement.load();
    audioElement
      .play()
      .then()
      .catch((error) => console.log(error));
  }

  return (
    <div id="drum-machine">
      <Display clipName={"test"}></Display>
      <DrumPadSection>
        {drumpadArray.map((item, index) => (
          <DrumPad
            key={index}
            clipName={item.clipName}
            keyName={item.keyName}
            sampleSource={item.sampleSource}
            onDrumpadClick={handleDrumpadClick}
          />
        ))}
      </DrumPadSection>
    </div>
  );
}

export default DrumMachine;

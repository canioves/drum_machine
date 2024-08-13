import { useState } from "react";
import "./App.css";

const drumpadButtonsArray = [
  {
    keyName: "Q",
    sampleID: "Sample-1",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    keyName: "W",
    sampleID: "Sample-2",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    keyName: "E",
    sampleID: "Sample-3",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    keyName: "A",
    sampleID: "Sample-4",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    keyName: "S",
    sampleID: "Clap",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    keyName: "D",
    sampleID: "Open-HH",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    keyName: "Z",
    sampleID: "Kick-n-Hat",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    keyName: "X",
    sampleID: "Kick",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    keyName: "C",
    sampleID: "Closed-HH",
    sampleSource:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function SampleScreen() {
  return (
    <div id="sample-screen" className="display-item">
      <span>Current sample:</span>
      <div id="screen"></div>
    </div>
  );
}

function VolumeSlider() {
  return (
    <div id="volume-slider" className="display-item">
      <label htmlFor="volume-slider">Volume: </label>
      <input
        id="volume-slider"
        type="range"
        min="1"
        max="100"
        defaultValue="50"
      ></input>
    </div>
  );
}

function Display({ children }) {
  return <div id="display">{children}</div>;
}

function DrumpadButton({ keyName, sampleID, sampleSource }) {
  return (
    <div className="drum-pad" id={sampleID}>
      <audio className="clip" id={keyName} src={sampleSource}></audio>
      <p>{keyName}</p>
    </div>
  );
}

function Drumpad({ children }) {
  return <div id="drum-pad-container">{children}</div>;
}

function DrumMachine() {
  function handleDrumpadButton(audioURL) {
    const audio = new Audio(audioURL);
    audio.play();
  }
  return (
    <div id="drum-machine">
      <Display>
        <SampleScreen />
        <VolumeSlider />
      </Display>
      <Drumpad>
        {drumpadButtonsArray.map((button) => (
          <DrumpadButton
            key={button.keyName}
            keyName={button.keyName}
            sampleID={button.sampleID}
            sampleSource={button.sampleSource}
          />
        ))}
      </Drumpad>
    </div>
  );
}

export default DrumMachine;

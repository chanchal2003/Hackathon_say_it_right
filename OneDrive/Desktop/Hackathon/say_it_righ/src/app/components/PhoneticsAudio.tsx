import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { IoIosPlay } from "react-icons/io";


const PhoneticsAudio = ({ item }: { item: { phonetics?: { text: string; audio: string }[] } }) => {

    const findFirstValidPhonetic = (): { text: string; audio: string } | undefined => {
        return item.phonetics?.find((phonetic) => phonetic.text && phonetic.audio);
    }

    const firstPhonetic = findFirstValidPhonetic();

    const playAudio = () => {
        // Play audio using react-audio-player
        console.log("Audio")
        console.log(firstPhonetic?.audio)
        if (firstPhonetic) {
            <AudioPlayer src={firstPhonetic.audio}
                autoPlay
                onPlay={e => console.log("onPlay")}></AudioPlayer>
        }

    };

    return (
        <>
            <button onClick={playAudio} className="h-16 w-16 bg-purple-300 opacity-70 rounded-full flex justify-center flex-wrap items-center text-4xl transition-all text-purple-700 hover:text-white hover:bg-purple-700">
                <IoIosPlay />
            </button>
        </>
    );
};

// export default PhoneticsAudio;

// import React from 'react';

// type Props = {};

// const PhoneticsAudio = (props: Props) => {
//     return (
//         <div>
//             {/* <audio controls>
//                 <source src="./Audio/song.mp3" type="audio/mp3" />
//                 Your browser does not support the audio tag.
//             </audio> */}
//         </div>
//     );
// }

// export default PhoneticsAudio;

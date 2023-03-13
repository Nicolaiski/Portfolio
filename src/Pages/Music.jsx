import { useState, useEffect, useRef } from "react";

import { PageTemplate } from "../Components/PageTemplate";
import { TagsTemplate } from "../Components/TagsTemplate";
import { TagItem } from "../Components/TagItem";
import { Search } from "../Components/Search";
import { PlayerTemplate } from "../Components/PlayerTemplate";
import { TitleAndTimeBox } from "../Components/TitleAndTimeBox";
import { Title } from "../Components/Title";
import { Time } from "../Components/Time";
import { Progress } from "../Components/Progress";
import { ButtonsAndVolumeBox } from "../Components/ButtonsAndVolumeBox";
import { ButtonsBox } from "../Components/ButtonsBox";
import { Loop } from "../Components/Loop";
import { Previous } from "../Components/Previous";
import  Play  from "../Components/Play";
import { Pause } from "../Components/Pause";
import { Next } from "../Components/Next";
import { Shuffle } from "../Components/Shuffle";
import { Volume } from "../Components/Volume";
import { PlaylistTemplate } from "../Components/PlaylistTemplate";
import { PlaylistItem } from "../Components/PlaylistItem";

import loopCurrentBtn from "../assets/icons/loop_current.png";
import loopNoneBtn from "../assets/icons/loop_none.png";
import previousBtn from "../assets/icons/previous.png";
import playBtn from "../assets/icons/play.png";
import pauseBtn from "../assets/icons/pause.png";
import nextBtn from "../assets/icons/next.png";
import shuffleAllBtn from "../assets/icons/shuffle_all.png";
import shuffleNoneBtn from "../assets/icons/shuffle_none.png";

import SIGN from "../assets/Songs/SIGN.mp3";
import waild from "../assets/Songs/Why_am_i_like_dis.mp3";
import SF from "../assets/Songs/STICKY_FINGERS .wav";
import SCUQ from "../assets/Songs/7514.wav";
import H from "../assets/Songs/HILL.mp3";
import LIT from "../assets/Songs/LOST_IN_THOUGHTS.mp3";
import Arduino1 from "../assets/Songs/Arduino1.mp3";
import Arduino2 from "../assets/Songs/Arduino2.mp3";



/////////////////////////////////////


const tracks = [
  {
     url: SF,
    
    title: "Sticky Fingerz - Jeune Premier",
    tags: ["future bass"],
  },
  {
    url: SIGN,
    title: "SIGN - Jeune Premier",
    tags: ["beat"],
  },
  {
    url: SCUQ,
    title: "7514 - Jeune Premier",
    tags: ["liquid dnb"],
  },

  {
    url: H,
    title: "Hill - Jeune Premier",
    tags: ["texture"],
  },

  {
    url: LIT,
    title: "Lost In Thoughts - Jeune Premier",
    tags: ["liquid dnb"],
  },

  {
    url: waild,
    title: "Why Am I Like Dis - Jeune Premier",
    tags: ["liquid dnb"],
  },

  {
    url: Arduino1,
    title: "Arduino 1 - Jeune Premier",
    tags: ["liquid dnb"],
  },


  {
    url: Arduino2,
    title: "Arduino 2 - Jeune Premier",
    tags: ["liquid dnb"],
  },

];



const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);

  const Player = ({ trackList }) => {
       
    <>
      <h1>Hello there user </h1>
      <p>This is your awesome User Profile page</p>
    </>


  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [shuffled, setShuffled] = useState(false);
  const [looped, setLooped] = useState(false);

  let playlist = [];
  const [filter, setFilter] = useState([]);
  let [curTrack, setCurTrack] = useState(0);
  const [query, updateQuery] = useState("");

  const tags = [];
  trackList.forEach((track) => {
    track.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  useEffect(() => {
    const audio = new Audio(trackList[curTrack].url);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);

    const setAudioEnd = () => setHasEnded(!hasEnded);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("volumechange", setAudioVolume);
    audio.addEventListener("ended", setAudioEnd);

    setAudio(audio);
    setTitle(trackList[curTrack].title);

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (audio != null) {
      audio.src = trackList[curTrack].url;
      setTitle(trackList[curTrack].title);
      play();
    }
  }, [curTrack]);

  useEffect(() => {
    if (audio != null) {
      if (shuffled) {
        playlist = shufflePlaylist(playlist);
      }
      !looped ? next() : play();
    }
  }, [hasEnded]);

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audio != null) {
      pause();
      const val = Math.round((drag * audio.duration) / 100);
      audio.currentTime = val;
    }
  }, [drag]);

  useEffect(() => {
    if (!playlist.includes(curTrack)) {
      setCurTrack((curTrack = playlist[0]));
    }
  }, [filter]);

  const loop = () => {
    setLooped(!looped);
  };

  const previous = () => {
    const index = playlist.indexOf(curTrack);
    index !== 0
      ? setCurTrack((curTrack = playlist[index - 1]))
      : setCurTrack((curTrack = playlist[playlist.length - 1]));
  };

  const play = () => {
    setIsPlaying(true);
    audio.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  const next = () => {
    const index = playlist.indexOf(curTrack);
    index !== playlist.length - 1
      ? setCurTrack((curTrack = playlist[index + 1]))
      : setCurTrack((curTrack = playlist[0]));
  };

  const shuffle = () => {
    setShuffled(!shuffled);
  };

  const shufflePlaylist = (arr) => {
    if (arr.length === 1) return arr;
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i !== rand))];
  };

  const tagClickHandler = (e) => {
    const tag = e.currentTarget.innerHTML;
    if (!filter.includes(tag)) {
      setFilter([...filter, tag]);
    } else {
      const filteredArray = filter.filter((item) => item !== tag);
      setFilter([...filteredArray]);
    }
  };

  const playlistItemClickHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute("data-key"));
    const index = playlist.indexOf(num);
    setCurTrack((curTrack = playlist[index]));
    play();
  };

  return (

    <PageTemplate>
      <TagsTemplate>
        {tags.map((tag, index) => {
          return (
            <TagItem
              key={index}
              status={
                filter.length !== 0 && filter.includes(tag) ? "active" : ""
              }
              tag={tag}
              onClick={tagClickHandler}
            />
          );
        })}
      </TagsTemplate>
      <Search
        value={query}
        onChange={(e) => updateQuery(e.target.value.toLowerCase())}
        placeholder={`Search ${trackList.length} tracks...`}
      />
      <PlayerTemplate>
        <TitleAndTimeBox>
          <Title title={title} />
          <Time
            time={`${!time ? "0:00" : fmtMSS(time)}/${
              !length ? "0:00" : fmtMSS(length)
            }`}
          />
        </TitleAndTimeBox>
        <Progress
          value={slider}
          onChange={(e) => {
            setSlider(e.target.value);
            setDrag(e.target.value);
          }}
          onMouseUp={play}
          onTouchEnd={play}
        />
        <ButtonsAndVolumeBox>
          <ButtonsBox>
            <Loop src={looped ? loopCurrentBtn : loopNoneBtn} onClick={loop} />
            <Previous src={previousBtn} onClick={previous} />
            {isPlaying ? (
              <Pause src={pauseBtn} onClick={pause} />
            ) : (
              <Play src={playBtn} onClick={play} />
            )}
            <Next src={nextBtn} onClick={next} />
            <Shuffle
              src={shuffled ? shuffleAllBtn : shuffleNoneBtn}
              onClick={shuffle}
            />
          </ButtonsBox>
          <Volume
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value / 100);
            }}
          />
        </ButtonsAndVolumeBox>
      </PlayerTemplate>
      <PlaylistTemplate>
        {trackList
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((el, index) => {
            if (
              filter.length === 0 ||
              filter.some((filter) => el.tags.includes(filter))
            ) {
              if (el.title.toLowerCase().includes(query.toLowerCase())) {
                playlist.push(index);
                return (
                  <PlaylistItem
                    status={curTrack === index ? "active" : ""}
                    key={index}
                    data_key={index}
                    title={el.title}
                    src={el.url}
                    onClick={playlistItemClickHandler}
                  />
                );
              }
            }
          })}
      </PlaylistTemplate>
    </PageTemplate>
  );
};

const Music = () => {
  return (

  
  <div>
    <Player trackList={tracks}/> 
  </div>
  );
};

export default Music;









const DEFAULT_STATIONS = [
  {
    "name": "Qmusic",
    "url": "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live_96.mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio 538",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538.mp3",
    "country": "Nederland"
  },
  {
    "name": "Sky Radio",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SKYRADIO.mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio 10",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO10.mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Radio 1",
    "url": "https://icecast.omroep.nl/radio1-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Radio 2",
    "url": "https://icecast.omroep.nl/radio2-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO 3FM",
    "url": "https://icecast.omroep.nl/3fm-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Radio 4 Klassiek",
    "url": "https://icecast.omroep.nl/radio4-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Radio 5",
    "url": "https://icecast.omroep.nl/radio5-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX",
    "url": "https://icecast.omroep.nl/funx-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Radio 2 Soul & Jazz",
    "url": "https://icecast.omroep.nl/radio6-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio Veronica",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/VERONICA.mp3",
    "country": "Nederland"
  },
  {
    "name": "SLAM!",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SLAM_MP3.mp3",
    "country": "Nederland"
  },
  {
    "name": "SLAM! Non Stop",
    "url": "https://stream.slam.nl/nonstop/mp3",
    "country": "Nederland"
  },
  {
    "name": "SLAM! Mixmarathon",
    "url": "https://stream.slam.nl/mixmarathon/mp3",
    "country": "Nederland"
  },
  {
    "name": "Sublime",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SUBLIME.mp3",
    "country": "Nederland"
  },
  {
    "name": "BNR Nieuwsradio",
    "url": "https://stream.bnr.nl/bnr_mp3_128_20",
    "country": "Nederland"
  },
  {
    "name": "100% NL",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/100PNL_MP3.mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio 10 60s & 70s Hits",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR18.mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio 10 80s Hits",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR20.mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio 10 90s Hits",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR22.mp3",
    "country": "Nederland"
  },
  {
    "name": "538 Non Stop",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR09.mp3",
    "country": "Nederland"
  },
  {
    "name": "538 Hitzone",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR11.mp3",
    "country": "Nederland"
  },
  {
    "name": "538 Dance Department",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR01.mp3",
    "country": "Nederland"
  },
  {
    "name": "538 Ibiza",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR19.mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio 538 Classics",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR08.mp3",
    "country": "Nederland"
  },
  {
    "name": "Sky Radio Hits",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR01.mp3",
    "country": "Nederland"
  },
  {
    "name": "Sky Radio 80s Hits",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR04.mp3",
    "country": "Nederland"
  },
  {
    "name": "Sky Radio Christmas",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR08.mp3",
    "country": "Nederland"
  },
  {
    "name": "Veronica Rock Radio",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR11.mp3",
    "country": "Nederland"
  },
  {
    "name": "KINK",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KINK.mp3",
    "country": "Nederland"
  },
  {
    "name": "KINK 80s",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KINK_DNA.mp3",
    "country": "Nederland"
  },
  {
    "name": "Arrow Classic Rock",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/ARROW_CLASSIC_ROCK.mp3",
    "country": "Nederland"
  },
  {
    "name": "Classicnl",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/CLASSICNL.mp3",
    "country": "Nederland"
  },
  {
    "name": "Joe Nederland",
    "url": "https://icecast-qmusicnl-cdp.triple-it.nl/Joe_nl_live_96.mp3",
    "country": "Nederland"
  },
  {
    "name": "Efteling Kids Radio",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/EFTELINGRADIO.mp3",
    "country": "Nederland"
  }
];
const COUNTRY_CODES = {
  "Nederland": "NL",
  "België": "BE",
  "Duitsland": "DE",
  "Frankrijk": "FR",
  "Verenigd Koninkrijk": "GB",
  "Spanje": "ES",
  "Italië": "IT",
  "Verenigde Staten": "US",
  "Canada": "CA",
  "Australië": "AU",
  "Oostenrijk": "AT",
  "Zwitserland": "CH",
  "Denemarken": "DK",
  "Zweden": "SE",
  "Noorwegen": "NO",
  "Finland": "FI",
  "Polen": "PL",
  "Portugal": "PT",
  "Ierland": "IE",
  "Luxemburg": "LU"
};
let STATIONS = [...DEFAULT_STATIONS];

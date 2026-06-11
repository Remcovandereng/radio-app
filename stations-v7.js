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
  },
  {
    "name": "Qmusic Het Foute Uur",
    "url": "https://stream.qmusic.nl/fouteuur/mp3",
    "country": "Nederland"
  },
  {
    "name": "Qmusic Nonstop",
    "url": "https://stream.qmusic.nl/nonstop/mp3",
    "country": "Nederland"
  },
  {
    "name": "Qmusic Top 40",
    "url": "https://stream.qmusic.nl/top40/mp3",
    "country": "Nederland"
  },
  {
    "name": "Qmusic Nederlandstalig",
    "url": "https://stream.qmusic.nl/nederlandstalig/mp3",
    "country": "Nederland"
  },
  {
    "name": "Qmusic 90s & 00s",
    "url": "https://stream.qmusic.nl/90s-00s/mp3",
    "country": "Nederland"
  },
  {
    "name": "Qmusic Thema",
    "url": "https://stream.qmusic.nl/thema/mp3",
    "country": "Nederland"
  },
  {
    "name": "Joe 70s & 80s",
    "url": "https://icecast-qmusicnl-cdp.triple-it.nl/Joe_nl_70s_80s.mp3",
    "country": "Nederland"
  },
  {
    "name": "Joe 80s & 90s",
    "url": "https://icecast-qmusicnl-cdp.triple-it.nl/Joe_nl_80s_90s.mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Radio 2 Top 2000",
    "url": "https://icecast.omroep.nl/radio2-top2000-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Sterren NL",
    "url": "https://icecast.omroep.nl/radio2-sterrennl-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Amsterdam",
    "url": "https://icecast.omroep.nl/funx-amsterdam-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Rotterdam",
    "url": "https://icecast.omroep.nl/funx-rotterdam-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Utrecht",
    "url": "https://icecast.omroep.nl/funx-utrecht-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Den Haag",
    "url": "https://icecast.omroep.nl/funx-denhaag-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Dance",
    "url": "https://icecast.omroep.nl/funx-dance-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Hip Hop",
    "url": "https://icecast.omroep.nl/funx-hiphop-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Latin",
    "url": "https://icecast.omroep.nl/funx-latin-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO FunX Slow Jamz",
    "url": "https://icecast.omroep.nl/funx-slowjamz-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "NPO Blend",
    "url": "https://icecast.omroep.nl/radio6-bb-mp3",
    "country": "Nederland"
  },
  {
    "name": "Sublime Smooth",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SUBLIME_SMOOTH.mp3",
    "country": "Nederland"
  },
  {
    "name": "Sublime Classics",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SUBLIME_CLASSICS.mp3",
    "country": "Nederland"
  },
  {
    "name": "KINK Distortion",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KINK_DISTORTION.mp3",
    "country": "Nederland"
  },
  {
    "name": "KINK Indie",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KINK_INDIE.mp3",
    "country": "Nederland"
  },
  {
    "name": "KINK Classics",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KINK_CLASSICS.mp3",
    "country": "Nederland"
  },
  {
    "name": "Pinguin Radio",
    "url": "https://samcloud.spacial.com/api/listen?sid=98574&m=sc&rid=174423",
    "country": "Nederland"
  },
  {
    "name": "Pinguin Classics",
    "url": "https://samcloud.spacial.com/api/listen?sid=98576&m=sc&rid=174427",
    "country": "Nederland"
  },
  {
    "name": "Pinguin On The Rocks",
    "url": "https://samcloud.spacial.com/api/listen?sid=98575&m=sc&rid=174425",
    "country": "Nederland"
  },
  {
    "name": "Pinguin Pluche",
    "url": "https://samcloud.spacial.com/api/listen?sid=98577&m=sc&rid=174429",
    "country": "Nederland"
  },
  {
    "name": "Radio Decibel",
    "url": "https://stream.decibel.nl/decibel.mp3",
    "country": "Nederland"
  },
  {
    "name": "Radio Continu",
    "url": "https://stream.radiocontinu.nl/radiocontinu",
    "country": "Nederland"
  },
  {
    "name": "Radio NL",
    "url": "https://stream.radionl.fm/radionl",
    "country": "Nederland"
  },
  {
    "name": "Candlelight Radio",
    "url": "https://stream.candlelight.nl/candlelight.mp3",
    "country": "Nederland"
  },
  {
    "name": "Jazz de Ville",
    "url": "https://onair22.xdevel.com/proxy/xautocloud_td3e_421?mp=/stream",
    "country": "Nederland"
  }
];
let COUNTRY_CODES = {"Nederland":"NL"};
let STATIONS = [...DEFAULT_STATIONS];

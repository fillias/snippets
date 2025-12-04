const streams = [
  {
    id: 1,
    title: 'ČRo Plus',
    genre: 'News and talks',
    website: 'https://plus.rozhlas.cz/program',
    codec: [
      {
        url: 'https://amp.cesnet.cz:8443/cro-plus.ogg',
        name: 'ogg 128',
      },
      {
        url: 'https://rozhlas.stream/plus_mp3_128.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 2,
    title: 'ČRo 1 Radiožurnál',
    genre: 'News and talks',
    website: 'https://radiozurnal.rozhlas.cz/program',
    codec: [
      {
        url: 'https://amp.cesnet.cz:8443/z-cro1.ogg',
        name: 'ogg 128',
      },
      {
        url: 'https://ice-cro1.play.cz/radiozurnal.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 218,
    title: 'ČRo Dvojka',
    genre: 'News and talks',
    website: 'https://dvojka.rozhlas.cz/program',
    codec: [
      {
        url: 'https://amp.cesnet.cz:8443/z-cro2.ogg',
        name: 'ogg 128',
      },
      {
        url: 'https://ice-cro1.play.cz/dvojka.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 219,
    title: 'ČRo Wave',
    genre: 'News and talks',
    website: 'https://wave.rozhlas.cz/program',
    codec: [
      {
        url: 'https://amp.cesnet.cz:8443/cro-radio-wave.flac',
        name: 'flac',
      },
      {
        url: 'https://ice-cro1.play.cz/radio_wave.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 220,
    title: 'ČRo Radiožurnál Sport',
    genre: 'News and talks',
    website: 'https://sport.rozhlas.cz/program',
    codec: [
      {
        url: 'https://ice-cro1.play.cz/radiozurnal_sport.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 3,
    title: 'ČRo Jazz',
    genre: 'Jazz',
    website: 'https://jazz.rozhlas.cz/program',
    codec: [
      {
        url: 'https://amp.cesnet.cz:8443/cro-jazz.flac',
        name: 'flac',
      },
      {
        url: 'https://ice-cro1.play.cz/jazz.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 4,
    title: 'ČRo D-dur',
    genre: 'Classical',
    website: 'https://d-dur.rozhlas.cz/program',
    codec: [
      {
        url: 'https://amp.cesnet.cz:8443/cro-d-dur.flac',
        name: 'flac',
      },
      {
        url: 'https://ice-cro1.play.cz/ddur.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 5,
    title: 'Radio 1',
    genre: 'Alternative',
    website: 'https://www.radio1.cz/program/',
    codec: [
      {
        url: 'https://icecast2.play.cz/radio1-192.mp3',
        name: 'mp3 192',
      },
      {
        url: 'https://icecast2.play.cz/radio1-64.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 6,
    title: 'Radio Spin',
    genre: 'Rap',
    website: 'https://www.radiospin.cz/program/',
    codec: [
      {
        url: 'https://n12a-eu.rcs.revma.com/xcvkqtvb938uv?rj-ttl=5&rj-tok=AAABmebv4xMAxhAw2Iw1GZJP5A',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 7,
    title: 'Radio Prostor',
    genre: 'News and talks',
    website: 'https://www.radioprostor.cz/program',
    codec: [
      {
        url: 'https://bcast.spmmedia.cz/prostor-mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 8,
    title: 'Rádio Humor',
    genre: 'News and talks',
    website: 'https://radia.cz/radia/radio-humor/program',
    codec: [
      {
        url: 'https://29083.live.streamtheworld.com/RADIO_HUMOR_128_SC',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 9,
    title: 'Avalon',
    genre: 'Electronic music',
    website:
      'https://mytuner-radio.com/radio/avalon-radio-network-trance-503090/',
    codec: [
      {
        url: 'https://altair.streamerr.co/stream/match3d',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 10,
    title: 'Radio Punctum',
    genre: 'Electronic music',
    website: 'https://radiopunctum.cz/calendar',
    codec: [
      {
        url: 'https://radiopunctum.cz:8001/radio',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 11,
    title: 'Clubradio.cz',
    genre: 'Dance',
    website: 'https://www.clubradio.cz/',
    codec: [
      {
        url: 'https://icecast2.play.cz/Clubradio.mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 12,
    title: 'Slow Down Radio',
    genre: 'Mix',
    website: 'https://www.slowdownradio.cz/program/',
    codec: [
      {
        url: 'https://icecast9.play.cz/slowdown.mp3',
        name: 'mp3 160',
      },
    ],
  },
  {
    id: 13,
    title: 'Laut.FM - Future Garage',
    genre: 'Future Garage',
    website: 'https://laut.fm/stations/genre/Future%20Garage',
    codec: [
      {
        url: 'https://edendeeply.stream.laut.fm/edendeeply',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 14,
    title: 'BBC World Service',
    genre: 'News and talks',
    website: '',
    codec: [
      {
        url: 'https://ice.audionow.com/485BBCWorld.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 15,
    title: 'CNN International',
    genre: 'News and talks',
    website: 'https://edition.cnn.com/audio',
    codec: [
      {
        url: 'https://tunein.cdnstream1.com/3519_96.aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 16,
    title: 'Bloomberg Radio',
    genre: 'News and talks',
    website: '',
    codec: [
      {
        url: 'https://26433.live.streamtheworld.com/WBBRAMAAC.aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 17,
    title: 'Refuge Worldwide',
    genre: 'Mix',
    website: 'https://refugeworldwide.com/radio',
    codec: [
      {
        url: 'https://streaming.radio.co/s3699c5e49/listen',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 18,
    title: 'Hotmix - Classic US Rap',
    genre: 'Rap',
    website: 'https://hotmixradio.com/en/radios',
    codec: [
      {
        url: 'https://streaming.hotmixradio.fr/hotmix-rap_us-en-pre',
        name: 'mp3 320',
      },
      {
        url: 'https://streaming.hotmixradio.fr/hotmix-rap_us-en-mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 19,
    title: 'Flux FM - Boom FM Classics',
    genre: 'Rap',
    website: 'https://www.fluxfm.de/musik',
    codec: [
      {
        url: 'https://fluxfm.streamabc.net/flx-boomfmclassics-mp3-320-4725180',
        name: 'mp3 320',
      },
      {
        url: 'https://fluxfm.streamabc.net/flx-boomfmclassics-mp3-128-9062018',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 20,
    title: 'Flux FM - B Funk',
    genre: 'Funk',
    website: 'https://www.fluxfm.de/musik',
    codec: [
      {
        url: 'https://streams.fluxfm.de/event01/mp3-320',
        name: 'mp3 320',
      },
      {
        url: 'https://streams.fluxfm.de/event01/mp3-128',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 21,
    title: 'Flux FM - Techno Underground',
    genre: 'Techno',
    website: 'https://www.fluxfm.de/musik',
    codec: [
      {
        url: 'https://streams.fluxfm.de/technoug/mp3-320',
        name: 'mp3 320',
      },
      {
        url: 'https://streams.fluxfm.de/technoug/mp3-128',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 22,
    title: 'Flux FM - John Reed Radio',
    genre: 'Dance',
    website: 'https://www.fluxfm.de/musik',
    codec: [
      {
        url: 'https://fluxfm.streamabc.net/flx-johnreedradio-mp3-320-7051829',
        name: 'mp3 320',
      },
      {
        url: 'https://fluxfm.streamabc.net/flx-johnreedradio-mp3-128-5108296',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 23,
    title: 'Flux FM - Chill Hop',
    genre: 'Chillout',
    website: 'https://www.fluxfm.de/musik',
    codec: [
      {
        url: 'https://fluxfm.streamabc.net/flx-chillhop-mp3-320-1595440',
        name: 'mp3 320',
      },
      {
        url: 'https://fluxfm.streamabc.net/flx-chillhop-mp3-128-8581707',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 24,
    title: 'Flux FM - Clubsandwich',
    genre: 'Electronic music',
    website: 'https://www.fluxfm.de/musik',
    codec: [
      {
        url: 'https://streams.fluxfm.de/clubsandwich/mp3-320',
        name: 'mp3 320',
      },
      {
        url: 'https://fluxfm.streamabc.net/flx-clubsandwich-mp3-128-6001945',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 25,
    title: 'Flux FM - Metal FM',
    genre: 'Metal',
    website: 'https://www.fluxfm.de/musik',
    codec: [
      {
        url: 'https://streams.fluxfm.de/metalfm/mp3-320',
        name: 'mp3 320',
      },
      {
        url: 'https://streams.fluxfm.de/metalfm/mp3-128',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 26,
    title: 'Fréquence 3 Dance',
    genre: 'Dance',
    website: 'https://www.frequence3.com/les-radios-frequence-3/dance/',
    codec: [
      {
        url: 'https://frequence3.net-radio.fr/frequence3dance.flac',
        name: 'flac',
      },
      {
        url: 'https://frequence3.net-radio.fr/frequence3dance.mp3',
        name: 'mp3 160',
      },
    ],
  },
  {
    id: 27,
    title: 'Fréquence 3 Urban',
    genre: 'Rap',
    website: 'https://www.frequence3.com/les-radios-frequence-3/urban/',
    codec: [
      {
        url: 'https://frequence3.net-radio.fr/frequence3urban.flac',
        name: 'flac',
      },
      {
        url: 'https://frequence3.net-radio.fr/frequence3urban-128.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 28,
    title: 'TechnoRadio.eu',
    genre: 'Techno',
    website: 'https://technoradio.eu/blog/',
    codec: [
      {
        url: 'https://technoradioeuhq.radioca.st/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 29,
    title: 'DnB Radio',
    genre: 'Drum and Bass',
    website: 'https://dnbradio.com/',
    codec: [
      {
        url: 'https://azura.drmnbss.org:8000/radio.mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://azura.drmnbss.org:8000/radio.aac',
        name: 'aac 128',
      },
    ],
  },
  {
    id: 30,
    title: 'Trance Pulse',
    genre: 'Trance',
    website: 'https://trancepulsefm.ie/',
    codec: [
      {
        url: 'https://stream.trance.ie/tpmixes',
        name: 'flac',
      },
    ],
  },
  {
    id: 31,
    title: 'Intense Radio',
    genre: 'Electronic music',
    website: 'https://www.intenseradio.net/',
    codec: [
      {
        url: 'https://secure.live-streams.nl/flac.ogg',
        name: 'flac',
      },
    ],
  },
  {
    id: 32,
    title: 'Deep Radio',
    genre: 'Electronic music',
    website: 'https://d3ep.com/',
    codec: [
      {
        url: 'https://cast.d3ep.com:8008/192',
        name: 'mp3 192',
      },
      {
        url: 'https://cast.d3ep.com:8008/128',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 33,
    title: 'Radio Monster - Dance',
    genre: 'Dance',
    website: 'https://www.radiomonster.fm/',
    codec: [
      {
        url: 'https://ic5.radiomonster.fm/dance.ultra',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 35,
    title: 'Ambient FM',
    genre: 'Ambient',
    website: 'https://ambient.fm/',
    codec: [
      {
        url: 'https://phoebe.streamerr.co:4140/ambient.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 36,
    title: 'Lo-Fi Girl',
    genre: 'Lo-Fi',
    website: 'https://lofigirl.com/',
    codec: [
      {
        url: 'https://boxradio-edge-10.streamafrica.net/lofi',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 37,
    title: 'Mother Earth Radio - Klassik',
    genre: 'Classical',
    website: 'https://motherearthradio.de/mother-earth-klassik-on-air/',
    codec: [
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth_klassik/motherearth.klassik',
        name: 'flac',
      },
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth_klassik/motherearth.klassik.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 38,
    title: 'Mother Earth Radio - Instrumental',
    genre: 'Instrumental',
    website: 'https://motherearthradio.de/en/mother-earth-instrumental-on-air/',
    codec: [
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth_instrumental/motherearth.instrumental',
        name: 'flac',
      },
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth_instrumental/motherearth.instrumental.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 39,
    title: 'Mother Earth Radio - Jazz',
    genre: 'Jazz',
    website: 'https://motherearthradio.de/en/mother-earth-jazz-on-air/',
    codec: [
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth_jazz/motherearth.jazz',
        name: 'flac',
      },
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth_jazz/motherearth.jazz.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 40,
    title: 'Mother Earth Radio - On Air',
    genre: 'Jazz',
    website: 'https://motherearthradio.de/en/mother-earth-radio-on-air/',
    codec: [
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth/motherearth',
        name: 'flac',
      },
      {
        url: 'https://motherearth.streamserver24.com/listen/motherearth/motherearth.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 41,
    title: 'Radio Calico',
    genre: 'Mix',
    website: 'https://www.radio-calico.com/',
    codec: [
      {
        url: 'https://radio3.radio-calico.com:8443/calico.mp3',
        name: 'mp3 160',
      },
    ],
  },
  {
    id: 42,
    title: 'TEKnival Radio',
    genre: 'Electronic music',
    website: 'https://teknivalradio.com/',
    codec: [
      {
        url: 'https://listen.teknivalradio.com/listen/teknivalradio/radio.flac',
        name: 'flac',
      },
      {
        url: 'https://listen.teknivalradio.com/hls/teknivalradio/aac_hifi.m3u8',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 43,
    title: 'DanceAttack.FM',
    genre: 'Electronic music',
    website: 'https://www.danceattack.fm/',
    codec: [
      {
        url: 'https://streaming04.liveboxstream.uk/proxy/danceattackfm128?mp=//1',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 44,
    title: '1.FM - Deep House',
    genre: 'House',
    website: 'https://www.1.fm/stations',
    codec: [
      {
        url: 'https://strm112.1.fm/deeptech_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 45,
    title: '1.FM - Costa Del Mar',
    genre: 'Chillout',
    website: 'https://www.1.fm/stations',
    codec: [
      {
        url: 'https://strm112.1.fm/costadelmarchillout_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 46,
    title: '1.FM - Chillout Lounge',
    genre: 'Lounge',
    website: 'https://www.1.fm/stations',
    codec: [
      {
        url: 'https://strm112.1.fm/chilloutlounge_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 47,
    title: '1.FM - Lo-Fi',
    genre: 'Lo-Fi',
    website: 'https://www.1.fm/stations',
    codec: [
      {
        url: 'https://strm112.1.fm/kidsfm_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 48,
    title: '1.FM - Top Rap',
    genre: 'Rap',
    website: 'https://www.1.fm/stations',
    codec: [
      {
        url: 'https://strm112.1.fm/jamz_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 49,
    title: '1.FM - 90s Hip Hop',
    genre: 'Rap',
    website: 'https://www.1.fm/stations',
    codec: [
      {
        url: 'https://strm112.1.fm/spanishtophits_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 50,
    title: '1.FM - 00s Hip Hop',
    genre: 'Rap',
    website: 'https://www.1.fm/stations',
    codec: [
      {
        url: 'https://strm112.1.fm/club_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 51,
    title: 'Lounge Radio Ibiza',
    genre: 'Lounge',
    website: 'https://lounge-radio-ibiza.com/',
    codec: [
      {
        url: 'https://lounge-radio-ibiza.stream.laut.fm/lounge-radio-ibiza',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 52,
    title: 'ZenoFM - Lo-Fi Afrobeats',
    genre: 'Lo-Fi',
    website: 'https://zeno.fm/radio/lofi-afrobeats/',
    codec: [
      {
        url: 'https://stream.zeno.fm/34vsiqt1kaktv',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 53,
    title: 'Zeno FM - Lo-Fi Hip Hop',
    genre: 'Lo-Fi',
    website: 'https://zeno.fm/radio/lofi-hip-hop-radio/',
    codec: [
      {
        url: 'https://stream.zeno.fm/0r0xa792kwzuv',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 54,
    title: 'Luxury Lounge Radio - Level 1',
    genre: 'Lounge',
    website: 'https://lounge.luxury/',
    codec: [
      {
        url: 'https://clubvid.xyz/level1',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 55,
    title: 'Luxury Lounge Radio - Level 2',
    genre: 'Lounge',
    website: 'https://lounge.luxury/',
    codec: [
      {
        url: 'https://clubvid.xyz/level2',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 56,
    title: 'Luxury Lounge Radio - Chillwave & Retrowave',
    genre: 'Chillout',
    website: 'https://lounge.luxury/',
    codec: [
      {
        url: 'https://clubvid.xyz/level3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 57,
    title: 'Luxury Lounge Radio - Meditation',
    genre: 'Meditation',
    website: 'https://lounge.luxury/',
    codec: [
      {
        url: 'https://clubvid.xyz/level4',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 58,
    title: '1 Radio Space',
    genre: 'Electronic music',
    website: 'https://1radio.space/timetable',
    codec: [
      {
        url: 'https://c22.radioboss.fm:8118/1RADIO.SPACE',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 59,
    title: 'Minimal Mix Radio',
    genre: 'Minimal',
    website: 'https://minimalmix.com/',
    codec: [
      {
        url: 'https://minimalmix.radioca.st/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 60,
    title: 'House Tech Radio',
    genre: 'House',
    website: 'https://www.housetechradio.com/shows-schedule/',
    codec: [
      {
        url: 'https://listen.radioking.com/radio/546866/stream/609416',
        name: 'mp3 192',
      },
      {
        url: 'https://listen.radioking.com/radio/546866/stream/606029',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 61,
    title: 'Mabu Beatz - Tech House',
    genre: 'House',
    website: 'https://mabu-beatz-radio.com/streams/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/techhouse',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 62,
    title: 'Mabu Beatz - Techno',
    genre: 'Techno',
    website: 'https://mabu-beatz-radio.com/streams/techno/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/techno',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 63,
    title: 'Mabu Beatz - House',
    genre: 'House',
    website: 'https://mabu-beatz-radio.com/streams/house/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/house',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 64,
    title: 'Mabu Beatz - Deep Mix',
    genre: 'Electronic music',
    website: 'https://mabu-beatz-radio.com/streams/deep-mix/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/deepmix',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 65,
    title: 'Radio Spinner - Latin House',
    genre: 'House',
    website: 'https://radiospinner.com/es/latin-house-102853/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/lathouse-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 66,
    title: 'Radio Spinner - Tech House',
    genre: 'House',
    website: 'https://radiospinner.com/es/tech-house-102741/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/tech-house-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 67,
    title: 'Radio Spinner - Atmospehric Breaks',
    genre: 'Breaks',
    website: 'https://radiospinner.com/es/atmospheric-breaks-102756/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/tmsphrcbrks-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 68,
    title: 'Radio Spinner - Oriental Deep House',
    genre: 'House',
    website: 'https://radiospinner.com/es/oriental-deep-house-102800/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/rntldphs-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 69,
    title: 'Radio Spinner - Latin House',
    genre: 'House',
    website: 'https://radiospinner.com/es/latin-house-102853/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/lathouse-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 70,
    title: 'Radio Spinner - DnB',
    genre: 'Drum and Bass',
    website: 'https://radiospinner.com/es/drum-and-bass-102831/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/drubas-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 71,
    title: 'Radio Spinner - Smooth Lounge',
    genre: 'Lounge',
    website: 'https://radiospinner.com/es/smooth-lounge-102822/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/smthlng-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 72,
    title: 'Radio Spinner - Progressive House',
    genre: 'House',
    website: 'https://radiospinner.com/es/progressive-house-102823/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/prgrssvhs-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 73,
    title: 'Radio Spinner - Best Classical',
    genre: 'Classical',
    website: 'https://radiospinner.com/es/best-classical-102805/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/bstclsscl-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 74,
    title: 'Radio Spinner - Buddha Bar',
    genre: 'Chillout',
    website: 'https://radiospinner.com/es/buddha-bar-chill-102799/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/bddhbrchll-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 75,
    title: 'Radio Spinner - Techno',
    genre: 'Techno',
    website: 'https://radiospinner.com/es/techno-102803/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/techno-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 76,
    title: 'Radio Spinner - Cafe Del Mar',
    genre: 'Chillout',
    website: 'https://radiospinner.com/es/cafe-del-mar-102767/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/cdmr-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 77,
    title: 'Radio Spinner - Enigmatic Chill',
    genre: 'Chillout',
    website: 'https://radiospinner.com/es/enigmatic-chill-102764/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/enigmatic-chill-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 78,
    title: 'Radio Spinner - Chill Hop',
    genre: 'Chillout',
    website: 'https://radiospinner.com/es/chillhop-102761/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/chill-hop-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 79,
    title: 'Radio Spinner -  Minimal Techno',
    genre: 'Minimal',
    website: 'https://radiospinner.com/es/minimal-techno-102754/',
    codec: [
      {
        url: 'https://spn.liveradiofree.com/minimal-techno-96',
        name: 'aac 96',
      },
    ],
  },
  {
    id: 80,
    title: 'Raute Musik.FM - Rock',
    genre: 'Rock',
    website: 'https://www.rm.fm/rock',
    codec: [
      {
        url: 'https://rautemusik.stream39.radiohost.de/rock',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 81,
    title: 'Raute Musik.FM - Trance',
    genre: 'Trance',
    website: 'https://www.rm.fm/trance',
    codec: [
      {
        url: 'https://rautemusik.stream39.radiohost.de/trance',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 82,
    title: 'Raute Musik.FM - Metal',
    genre: 'Metal',
    website: 'https://www.rm.fm/metal',
    codec: [
      {
        url: 'https://rautemusik.stream25.radiohost.de/metal_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 83,
    title: 'Raute Musik.FM - 12Punks',
    genre: 'Punk',
    website: 'https://www.rm.fm/12punks',
    codec: [
      {
        url: 'https://rautemusik.stream17.radiohost.de/12punks',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 84,
    title: 'Raute Musik.FM - Deutsch Rap Charts',
    genre: 'Rap',
    website: 'https://www.rm.fm/deutschrap-charts',
    codec: [
      {
        url: 'https://rautemusik.stream25.radiohost.de/rm-deutschrap-charts_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 85,
    title: 'Raute Musik.FM - Deutsch Rap Classic',
    genre: 'Rap',
    website: 'https://www.rm.fm/deutschrap-classic',
    codec: [
      {
        url: 'https://rautemusik.stream17.radiohost.de/rm-deutschrap-classic_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 86,
    title: 'Raute Musik.FM - Rap',
    genre: 'Rap',
    website: 'https://www.rm.fm/jam',
    codec: [
      {
        url: 'https://rautemusik.stream39.radiohost.de/jam',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 87,
    title: 'Raute Musik.FM - Lo-Fi & Chillout',
    genre: 'Lo-Fi',
    website: 'https://www.rm.fm/study',
    codec: [
      {
        url: 'https://rautemusik.stream25.radiohost.de/study',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 88,
    title: 'Raute Musik.FM - TechHouse',
    genre: 'House',
    website: 'https://www.rm.fm/techhouse',
    codec: [
      {
        url: 'https://rautemusik.stream39.radiohost.de/techhouse',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 89,
    title: 'Raute Musik.FM - Salsa',
    genre: 'Latino',
    website: 'https://www.rm.fm/salsa',
    codec: [
      {
        url: 'https://rautemusik.stream37.radiohost.de/salsa',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 90,
    title: 'Raute Musik.FM - Caribbean Wave',
    genre: 'Other',
    website: 'https://www.rm.fm/caribbean-wave',
    codec: [
      {
        url: 'https://rautemusik.stream39.radiohost.de/caribbean-wave_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 91,
    title: 'Raute Musik.FM - Techno',
    genre: 'Techno',
    website: 'https://www.rm.fm/techno',
    codec: [
      {
        url: 'https://rautemusik.stream17.radiohost.de/rautemusik-techno_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 92,
    title: 'House Nation UK',
    genre: 'House',
    website: 'https://www.radio-uk.co.uk/house-nation-uk',
    codec: [
      {
        url: 'https://streaming.radio.co/s06bd9d805/listen',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 94,
    title: 'HearMe.FM - Atmospheric Breaks',
    genre: 'Breaks',
    website: 'https://hearme.fm/radio/atmospheric-breaks/',
    codec: [
      {
        url: 'https://radio.hearme.fm:9830/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 95,
    title: 'HearMe.FM - Chill Step',
    genre: 'Chillout',
    website: 'https://hearme.fm/radio/chillstep/',
    codec: [
      {
        url: 'https://radio.hearme.fm:9780/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 96,
    title: 'HearMe.FM - Breaks',
    genre: 'Breaks',
    website: 'https://hearme.fm/radio/breaks/',
    codec: [
      {
        url: 'https://radio.hearme.fm:9770/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 97,
    title: 'HearMe.FM - Fusion Lounge',
    genre: 'Lounge',
    website: 'https://hearme.fm/radio/fusion-lounge/',
    codec: [
      {
        url: 'https://radio.hearme.fm:9680/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 100,
    title: 'HearMe.FM - Bach',
    genre: 'Classical',
    website: 'https://hearme.fm/radio/bach/',
    codec: [
      {
        url: 'https://radio.hearme.fm:9040/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 101,
    title: 'HearMe.FM - Beethoven',
    genre: 'Classical',
    website: 'https://hearme.fm/radio/beethoven/',
    codec: [
      {
        url: 'https://radio.hearme.fm:9050/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 102,
    title: 'HearMe.FM - Meditation',
    genre: 'Meditation',
    website: 'https://hearme.fm/radio/meditation/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8940/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 103,
    title: 'HearMe.FM - Dreamscapes',
    genre: 'Ambient',
    website: 'https://hearme.fm/radio/dreamscapes/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8910/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 104,
    title: 'HearMe.FM - Power Metal',
    genre: 'Metal',
    website: 'https://hearme.fm/radio/power-metal/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8600/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 105,
    title: 'HearMe.FM - Nu-Metal',
    genre: 'Metal',
    website: 'https://hearme.fm/radio/nu-metal/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8570/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 106,
    title: 'HearMe.FM - Melodic Progressive',
    genre: 'Electronic music',
    website: 'https://hearme.fm/radio/melodic-progressive/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8450/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 107,
    title: 'HearMe.FM - Liquid DnB',
    genre: 'Drum and Bass',
    website: 'https://hearme.fm/radio/liquid-dnb/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8430/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 108,
    title: 'HearMe.FM - Deep Progressive House',
    genre: 'House',
    website: 'https://hearme.fm/radio/deep-progressive-house/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8420/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 109,
    title: 'HearMe.FM - Techno',
    genre: 'Techno',
    website: 'https://hearme.fm/radio/techno/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8070/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 110,
    title: 'HearMe.FM - House',
    genre: 'House',
    website: 'https://hearme.fm/radio/house-music/',
    codec: [
      {
        url: 'https://radio.hearme.fm:8060/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 111,
    title: 'Techno.FM',
    genre: 'Techno',
    website: 'https://techno.fm/',
    codec: [
      {
        url: 'https://stream.techno.fm/radio1-320k.mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://stream.techno.fm/radio1-192k.mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 112,
    title: 'Sub.FM',
    genre: 'Alternative',
    website: 'https://www.sub.fm/timetable/',
    codec: [
      {
        url: 'https://subfm.radioca.st/SubFMMount',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 113,
    title: 'DubLab.com',
    genre: 'Electronic music',
    website: 'https://www.dublab.com/schedule',
    codec: [
      {
        url: 'https://dublab.out.airtime.pro/dublab_a',
        name: 'mp3 192',
      },
      {
        url: 'https://dublab.out.airtime.pro:8000/dublab_b',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 114,
    title: 'NTS.Live - Rap',
    genre: 'Rap',
    website: 'https://www.nts.live/infinite-mixtapes',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape22',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 115,
    title: 'Modular Radio Station',
    genre: 'Ambient',
    website: 'https://modular-station.com/',
    codec: [
      {
        url: 'https://broadcast.modular-station.com/radio/8000/radio.aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 116,
    title: 'Dinamo FM',
    genre: 'Electronic music',
    website: 'https://www.dinamo.fm/content/4/channels',
    codec: [
      {
        url: 'https://channels.dinamo.fm/legacy-mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://channels.dinamo.fm/legacy-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 117,
    title: 'Dinamo FM - Fluent',
    genre: 'Drum and Bass',
    website: 'https://www.dinamo.fm/content/4/channels',
    codec: [
      {
        url: 'https://channels.dinamo.fm/fluent-mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://channels.dinamo.fm/fluent-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 118,
    title: 'Dinamo FM - Smog',
    genre: 'Alternative',
    website: 'https://www.dinamo.fm/content/4/channels',
    codec: [
      {
        url: 'https://channels.dinamo.fm/smog-mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://channels.dinamo.fm/smog-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 119,
    title: 'Dinamo FM - Caffe',
    genre: 'Chillout',
    website: 'https://www.dinamo.fm/content/4/channels',
    codec: [
      {
        url: 'https://channels.dinamo.fm/caffe-mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://channels.dinamo.fm/caffe-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 120,
    title: 'Dinamo FM - Locodyno (DJ Sets)',
    genre: 'Electronic music',
    website: 'https://www.dinamo.fm/content/4/channels',
    codec: [
      {
        url: 'https://channels.dinamo.fm/locodyno-mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://channels.dinamo.fm/locodyno-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 121,
    title: 'Dinamo FM - Sleep',
    genre: 'Meditation',
    website: 'https://www.dinamo.fm/content/4/channels',
    codec: [
      {
        url: 'https://channels.dinamo.fm/sleep-mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://channels.dinamo.fm/sleep-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 122,
    title: 'Dinamo FM - Smog',
    genre: 'Electronic music',
    website: 'https://www.dinamo.fm/content/4/channels',
    codec: [
      {
        url: 'https://channels.dinamo.fm/smog-mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://channels.dinamo.fm/smog-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 123,
    title: 'DeepHouse.FM',
    genre: 'House',
    website: 'https://deephouse.fm/radio-schedule/',
    codec: [
      {
        url: 'https://altair.streamerr.co:8124/stream',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 124,
    title: 'DoggLounge.com',
    genre: 'House',
    website: 'https://dogglounge.com/schedule/',
    codec: [
      {
        url: 'https://securestreams4.autopo.st:1853/stream',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 125,
    title: 'BeachGrooves.com',
    genre: 'Electronic music',
    website: 'https://beachgrooves.com/',
    codec: [
      {
        url: 'https://stream.beachgrooves.com:9000/stream',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 126,
    title: '320.FM',
    genre: 'Electronic music',
    website: 'https://320.fm/programm/',
    codec: [
      {
        url: 'https://stream.weblygo.de:8020/stream',
        name: 'mp3 320',
      },
      {
        url: 'https://stream.weblygo.de:8030/',
        name: 'mp3 64',
      },
    ],
  },
  {
    id: 127,
    title: 'Ambient sleeping pill',
    genre: 'Meditation',
    website: 'https://ambientsleepingpill.com/',
    codec: [
      {
        url: 'https://go-audio.toya.net.pl/49',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 128,
    title: '1.FM - Ambient Psychill',
    genre: 'Ambient',
    website: 'https://www.1.fm/station/ambientpsy',
    codec: [
      {
        url: 'https://strm112.1.fm/ambientpsy_mobile_mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 129,
    title: 'Moon Phase Radio',
    genre: 'Ambient',
    website: 'https://www.moonphaseradio.com/ambient',
    codec: [
      {
        url: 'https://cp12.serverse.com/proxy/moonphase/stream',
        name: 'mp3 192',
      },
      {
        url: 'https://cp12.serverse.com/proxy/moonphase/stream2',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 130,
    title: 'Moon Phase Radio',
    genre: 'Chillout',
    website: 'https://www.moonphaseradio.com/chill',
    codec: [
      {
        url: 'https://dc1.serverse.com/proxy/dnutqhxl/stream',
        name: 'mp3 192',
      },
      {
        url: 'https://dc1.serverse.com/proxy/dnutqhxl/stream2',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 131,
    title: '9128.live',
    genre: 'Ambient',
    website: 'https://9128.live/',
    codec: [
      {
        url: 'https://streams.radio.co/s0aa1e6f4a/listen',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 132,
    title: 'Soma FM - The Dark Zone',
    genre: 'Ambient',
    website: 'https://somafm.com/darkzone/',
    codec: [
      {
        url: 'https://ice2.somafm.com/darkzone-256-mp3',
        name: 'mp3 256',
      },
      {
        url: 'https://ice5.somafm.com/darkzone-128-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 133,
    title: 'Soma FM - Defcon',
    genre: 'Ambient',
    website: 'https://somafm.com/defcon/',
    codec: [
      {
        url: 'https://ice1.somafm.com/defcon-256-mp3',
        name: 'mp3 256',
      },
      {
        url: 'https://ice2.somafm.com/defcon-128-mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 134,
    title: 'Soma FM - Synphaera',
    genre: 'Ambient',
    website: 'https://somafm.com/synphaera/',
    codec: [
      {
        url: 'https://ice2.somafm.com/synphaera-256-mp3',
        name: 'mp3 256',
      },
      {
        url: 'https://ice5.somafm.com/synphaera-128-aac',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 135,
    title: 'Soma FM - Groove Salad',
    genre: 'Alternative',
    website: 'https://somafm.com/groovesalad/',
    codec: [
      {
        url: 'https://ice1.somafm.com/groovesalad-256-mp3',
        name: 'mp3 256',
      },
      {
        url: 'https://ice2.somafm.com/groovesalad-128-mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 136,
    title: 'Soma FM - Drone Zone',
    genre: 'Ambient',
    website: 'https://somafm.com/dronezone/',
    codec: [
      {
        url: 'https://ice5.somafm.com/dronezone-256-mp3',
        name: 'mp3 256',
      },
      {
        url: 'https://ice4.somafm.com/dronezone-128-aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 137,
    title: 'Soma FM - Fluid',
    genre: 'Electronic music',
    website: 'https://somafm.com/fluid/',
    codec: [
      {
        url: 'https://ice2.somafm.com/fluid-128-mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 138,
    title: 'Soma FM - Trip',
    genre: 'Electronic music',
    website: 'https://somafm.com/thetrip/',
    codec: [
      {
        url: 'https://ice1.somafm.com/thetrip-128-mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 139,
    title: 'Soma FM - Doomed',
    genre: 'Ambient',
    website: 'https://somafm.com/doomed/',
    codec: [
      {
        url: 'https://ice2.somafm.com/doomed-256-mp3',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 140,
    title: 'DI.FM - Future Garage',
    genre: 'Future Garage',
    website: 'https://www.di.fm/futuregarage',
    codec: [
      {
        url: 'https://corsproxy.io/?url=http://prem3.di.fm/futuregarage_hi?036aa6df146c7b1d',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 141,
    title: 'Kiosk Radio',
    genre: 'Alternative',
    website: 'https://kioskradio.com/schedule',
    codec: [
      {
        url: 'https://kioskradiobxl.out.airtime.pro/kioskradiobxl_b',
        name: 'mp3 320',
      },
      {
        url: 'https://kioskradiobxl.out.airtime.pro/kioskradiobxl_c',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 142,
    title: 'Sky news',
    genre: 'News and talks',
    website: 'https://news.sky.com/info/radio',
    codec: [
      {
        url: 'https://video.news.sky.com/snr/news/snrnews.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 143,
    title: 'Lofi Radio.ru',
    genre: 'Lo-Fi',
    website: 'https://lofiradio.ru/',
    codec: [
      {
        url: 'https://live.lofiradio.ru/mp3_320',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 144,
    title: 'HipHop Radio.ru',
    genre: 'Rap',
    website: 'https://radiohiphop.ru/',
    codec: [
      {
        url: 'https://live.lofiradio.ru/hiphop_mp3_320',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 145,
    title: 'Trance Athena Radio',
    genre: 'Trance',
    website: 'https://tranceathena.com/',
    codec: [
      {
        url: 'https://cast.streams.ovh:8008/;',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 146,
    title: '1Mix Radio',
    genre: 'Trance',
    website: 'https://www.1mix.co.uk/schedule/trance-schedule',
    codec: [
      {
        url: 'https://fr2.1mix.co.uk:8000/320',
        name: 'mp3 320',
      },
      {
        url: 'https://fr2.1mix.co.uk:8000/192',
        name: 'mp3 192',
      },
      {
        url: 'https://fr2.1mix.co.uk:8000/aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 148,
    title: 'Joint Radio',
    genre: 'Psy Trance',
    website: 'https://www.jointil.com/radio/',
    codec: [
      {
        url: 'https://jointil.com/stream-beat',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 149,
    title: 'Partyvibe.com - Psy Trance',
    genre: 'Psy Trance',
    website: 'https://www.partyvibe.com/psychedelic-trance-radio-station/',
    codec: [
      {
        url: 'https://www.partyvibe.com:8062/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 150,
    title: 'Partyvibe.com - Techno',
    genre: 'Techno',
    website: 'https://www.partyvibe.com/techno-radio-station/',
    codec: [
      {
        url: 'https://www.partyvibe.com:8068/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 151,
    title: 'Partyvibe.com - Drum and Bass',
    genre: 'Drum and Bass',
    website: 'https://www.partyvibe.com/drum-and-bass-radio-station/',
    codec: [
      {
        url: 'https://www.partyviberadio.com:8061/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 152,
    title: 'Partyvibe.com - Rap',
    genre: 'Rap',
    website: 'https://www.partyvibe.com/rap-radio-station/',
    codec: [
      {
        url: 'https://www.partyvibe.com:8063/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 153,
    title: 'Partyvibe.com - Rock',
    genre: 'Rock',
    website: 'https://www.partyvibe.com/rock-radio-station/',
    codec: [
      {
        url: 'https://partyviberadio.com:8066/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 154,
    title: 'PsyLand Radio',
    genre: 'Psy Trance',
    website: 'https://psyland.live/',
    codec: [
      {
        url: 'https://sp.streams.ovh:8020/stream/1/',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 155,
    title: 'Psychedelic Freaks Radio',
    genre: 'Psy Trance',
    website: 'https://psyfreaks.com/?i=1',
    codec: [
      {
        url: 'https://radio.psyfreaks.com/radio/8000/radio.mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 156,
    title: 'Punk Radio Underground',
    genre: 'Punk',
    website: 'https://www.radiounderground.org/',
    codec: [
      {
        url: 'https://s1.slotex.pl:7604/stream/1/?sid=1;',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 157,
    title: 'Clubmix Radio',
    genre: 'Electronic music',
    website: 'https://mikeriverra.com/grid/',
    codec: [
      {
        url: 'https://live.mikeriverra.com:9999/320mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 158,
    title: 'DI.FM - Hard Techno',
    genre: 'Techno',
    website: '',
    codec: [
      {
        url: 'https://corsproxy.io/?url=http://prem4.di.fm/hardtechno_hi?036aa6df146c7b1d',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 160,
    title: 'MC2 Radio - Buddha Bar',
    genre: 'Chillout',
    website: 'https://www.rmc2.net/webradio/mc2-buddha-bar-collection/',
    codec: [
      {
        url: 'https://stream.rcs.revma.com/h2cwfffp81uvv',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 161,
    title: 'MC2 Radio - Tango Lounge',
    genre: 'Latino',
    website: 'https://www.rmc2.net/webradio/mc2-tango-lounge/',
    codec: [
      {
        url: 'https://stream.rcs.revma.com/s6r798qgcg3vv',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 162,
    title: 'Planet frequency',
    genre: 'Electronic music',
    website: 'https://www.planetfrequencyradio.com/',
    codec: [
      {
        url: 'https://s2.yesstreaming.net:17204/stream',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 163,
    title: 'Laut.FM - Techno Frequency Radio',
    genre: 'Techno',
    website: 'https://laut.fm/technofrequencyradio',
    codec: [
      {
        url: 'https://technofrequencyradio.stream.laut.fm/technofrequencyradio',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 164,
    title: 'Laut.FM - Techno Bunker',
    genre: 'Techno',
    website: 'https://laut.fm/technobunkerfm',
    codec: [
      {
        url: 'https://technobunkerfm.stream.laut.fm/technobunkerfm',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 165,
    title: 'Laut.FM - Radio Habana',
    genre: 'Latino',
    website: 'https://laut.fm/radiohabana',
    codec: [
      {
        url: 'https://radiohabana.stream.laut.fm/radiohabana',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 166,
    title: 'Laut.FM - Fuego Latina',
    genre: 'Latino',
    website: 'https://laut.fm/fuego_latina_fm',
    codec: [
      {
        url: 'https://fuegolatinafm.stream.laut.fm/fuego_latina_fm',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 167,
    title: 'RadioEthno.com',
    genre: 'Ethno',
    website: 'https://radioethno.com/en/',
    codec: [
      {
        url: 'https://g5.turbohost.eu/proxy/radioethno/stream',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 168,
    title: '1.FM - Gaia',
    genre: 'Ambient',
    website: 'https://www.1.fm/station/radiogaia',
    codec: [
      {
        url: 'https://strmreg.1.fm/radiogaia_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 169,
    title: 'DNB Station',
    genre: 'Drum and Bass',
    website: 'https://dnbstation.com/',
    codec: [
      {
        url: 'https://dnbstation.com:8443/listen.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 170,
    title: 'Startup.radio - Tech Entrepreneurship Radio',
    genre: 'News and talks',
    website: 'https://www.startup.radio/',
    codec: [
      {
        url: 'https://s2.radio.co/sb16d65602/listen',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 171,
    title: 'Cinemix',
    genre: 'Instrumental',
    website:
      'https://www.cinemix.us/component/option,com_wrapper/Itemid,8/lang,en/',
    codec: [
      {
        url: 'https://kathy.torontocast.com:1190/stream',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 172,
    title: 'BassDrive.com',
    genre: 'Drum and Bass',
    website: 'https://www.bassdrive.com/',
    codec: [
      {
        url: 'https://ice.bassdrive.net/stream',
        name: 'mp3 192',
      },
      {
        url: 'https://ice.bassdrive.net/stream32',
        name: 'acc 32',
      },
    ],
  },
  {
    id: 173,
    title: 'Radio Paradise - The Main Mix',
    genre: 'Alternative',
    website: 'https://radioparadise.com/listen/channels/main-mix',
    codec: [
      {
        url: 'https://audio-geo.radioparadise.com/chan/0/x/1005/4/b/1005-0.flac',
        name: 'flac',
      },
      {
        url: 'https://audio-geo.radioparadise.com/chan/0/x/1005/3/b/1005-0.m4a',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 174,
    title: 'Radio Paradise - The Mellow Mix',
    genre: 'Alternative',
    website: 'https://radioparadise.com/listen/channels/mellow-mix',
    codec: [
      {
        url: 'https://audio-geo.radioparadise.com/chan/1/x/1037/4/b/1037-0.flac',
        name: 'flac',
      },
      {
        url: 'https://audio-geo.radioparadise.com/chan/1/x/1037/2/b/1037-0.m4a',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 175,
    title: 'Radio Paradise - Rock Mix',
    genre: 'Rock',
    website: 'https://radioparadise.com/listen/channels/rock-mix',
    codec: [
      {
        url: 'https://audio-geo.radioparadise.com/chan/2/x/1209/4/b/1209-0.flac',
        name: 'flac',
      },
      {
        url: 'https://audio-geo.radioparadise.com/chan/2/x/1209/4/b/1209-0.m4a',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 176,
    title: 'Radio Paradise - Global Mix',
    genre: 'Alternative',
    website: 'https://radioparadise.com/listen/channels/global-mix',
    codec: [
      {
        url: 'https://audio-geo.radioparadise.com/chan/3/x/1253/4/b/1253-0.flac',
        name: 'flac',
      },
      {
        url: 'https://audio-geo.radioparadise.com/chan/3/x/1253/4/b/1253-0.m4a',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 177,
    title: 'Radio Paradise - Beyond',
    genre: 'Alternative',
    website: 'https://radioparadise.com/listen/channels/beyond',
    codec: [
      {
        url: 'https://audio-geo.radioparadise.com/chan/5/x/1146/4/b/1146-0.flac',
        name: 'flac',
      },
      {
        url: 'https://audio-geo.radioparadise.com/chan/5/x/1146/4/b/1146-0.m4a',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 178,
    title: 'Radio Paradise - Radio 2050 (Talks)',
    genre: 'News and talks',
    website: 'https://radioparadise.com/radio2050',
    codec: [
      {
        url: 'https://audio-geo.radioparadise.com/chan/2050/x/137/4/b/137-1-0.flac',
        name: 'flac',
      },
      {
        url: 'https://audio-geo.radioparadise.com/chan/2050/x/137/4/b/137-1-0.flac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 179,
    title: 'Pure Lounge Radio',
    genre: 'Lounge',
    website: 'https://www.pureloungeradio.com/',
    codec: [
      {
        url: 'https://mscp4.live-streams.nl:8142/lounge.ogg',
        name: 'flac',
      },
      {
        url: 'https://mscp4.live-streams.nl:8142/lounge.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 180,
    title: 'RadioSputnik.nl',
    genre: 'Minimal',
    website: 'https://radiosputnik.nl/',
    codec: [
      {
        url: 'https://radiosputnik.nl:8443/flac',
        name: 'flac',
      },
      {
        url: 'https://radiosputnik.nl:8443/',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 181,
    title: 'Mabu Beatz - Minimal',
    genre: 'Minimal',
    website: 'https://mabu-beatz-radio.com/streams/minimal/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/minimal',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 182,
    title: 'Mabu Beatz - Dub Techno',
    genre: 'Techno',
    website: 'https://mabu-beatz-radio.com/streams/dub-techno/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/dub',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 183,
    title: 'Mabu Beatz - Deep House',
    genre: 'House',
    website: 'https://mabu-beatz-radio.com/streams/deep-house/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/deephouse',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 184,
    title: 'Mabu Beatz - Tropical',
    genre: 'House',
    website: 'https://mabu-beatz-radio.com/streams/tropical/',
    codec: [
      {
        url: 'https://audio.mabu-beatz-radio.com:8003/tropical',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 185,
    title: 'Radio DJ Sound - Deep House',
    genre: 'House',
    website: 'https://radiodjsound.com/scheduling/',
    codec: [
      {
        url: 'https://servidor17.brlogic.com:7880/live',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 186,
    title: 'HouseTech Radio',
    genre: 'House',
    website: 'https://www.housetechradio.com/shows-schedule/',
    codec: [
      {
        url: 'https://listen.radioking.com/radio/546866/stream/609416',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 187,
    title: 'Deep Nu House.com',
    genre: 'House',
    website: 'https://deepnuhouse.com/',
    codec: [
      {
        url: 'https://c4.radioboss.fm:18286/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 188,
    title: 'NTS.Live - Rap House',
    genre: 'Rap',
    website: 'https://www.nts.live/infinite-mixtapes/rap-house',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape22',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 189,
    title: 'NTS.Live - Slow Focus',
    genre: 'Meditation',
    website: 'https://www.nts.live/infinite-mixtapes/slow-focus',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 190,
    title: 'NTS.Live - Low Key',
    genre: 'Lo-Fi',
    website: 'https://www.nts.live/infinite-mixtapes/100-percent-hip-hop',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape2',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 191,
    title: 'NTS.Live - Sheet Music',
    genre: 'Classical',
    website: 'https://www.nts.live/infinite-mixtapes/sheet-music',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape35',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 192,
    title: 'NTS.Live - The Pit',
    genre: 'Metal',
    website: 'https://www.nts.live/infinite-mixtapes/the-pit',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape34',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 193,
    title: 'NTS.Live - Sweat',
    genre: 'Ethno',
    website: 'https://www.nts.live/infinite-mixtapes/sweat',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape24',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 195,
    title: 'NTS.Live - Labyrinth',
    genre: 'Electronic music',
    website: 'https://www.nts.live/infinite-mixtapes/labyrinth',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape31',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 196,
    title: 'NTS.Live - Expansions',
    genre: 'Jazz',
    website: 'https://www.nts.live/infinite-mixtapes/expansions',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape3',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 197,
    title: 'NTS.Live - Island Time',
    genre: 'Ethno',
    website: 'https://www.nts.live/infinite-mixtapes/island-time',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape21',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 198,
    title: 'NTS.Live - 4 To The Floor',
    genre: 'Electronic music',
    website: 'https://www.nts.live/infinite-mixtapes/4-to-the-floor',
    codec: [
      {
        url: 'https://stream-mixtape-geo.ntslive.net/mixtape5',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 199,
    title: 'Klassik Radio - Movie Heroes',
    genre: 'Instrumental',
    website: 'https://klassikradioplus.de/de/kategorie/besonders-beliebt',
    codec: [
      {
        url: 'https://stream.klassikradio.de/movieheroes/mp3-192',
        name: 'mp3 192',
      },
      {
        url: 'https://klassikr.streamabc.net/klr-movienational-aac-128-2085172',
        name: 'aac 128',
      },
    ],
  },
  {
    id: 200,
    title: 'Klassik Radio - Filmmusik Klassiker',
    genre: 'Instrumental',
    website: 'https://klassikradioplus.de/de/kategorie/besonders-beliebt',
    codec: [
      {
        url: 'https://klassikr.streamabc.net/klr_ywfg0xhyqhd_qj49-mp3-192-9330415',
        name: 'mp3 192',
      },
      {
        url: 'https://klassikr.streamabc.net/klr-filmklassiker-aacplus-64-1848622',
        name: 'aac 64',
      },
    ],
  },
  {
    id: 201,
    title: 'Klassik Radio - Meditation',
    genre: 'Meditation',
    website: 'https://klassikradioplus.de/de/kategorie/besonders-beliebt',
    codec: [
      {
        url: 'https://klassikr.streamabc.net/klr_nqlq9rgbhlx_vasj-aac-128-4452931',
        name: 'aac 128',
      },
      {
        url: 'https://stream.klassikradio.de/meditation/mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 202,
    title: 'Klassik Radio - New Classics',
    genre: 'Instrumental',
    website: 'https://klassikradioplus.de/de/kategorie/besonders-beliebt',
    codec: [
      {
        url: 'https://stream.klassikradio.de/newclassics/mp3-192',
        name: 'mp3 192',
      },
      {
        url: 'https://stream.klassikradio.de/newclassics/aac-64',
        name: 'aac 64',
      },
    ],
  },
  {
    id: 203,
    title: 'Klassik Radio - Schiller Berlin',
    genre: 'Classical',
    website: 'https://klassikradioplus.de/de/kategorie/besonders-beliebt',
    codec: [
      {
        url: 'https://stream.klassikradio.de/schiller-berlin/mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 204,
    title: 'Klassik Radio - Yoga',
    genre: 'Meditation',
    website: 'https://klassikradioplus.de/de/kategorie/besonders-beliebt',
    codec: [
      {
        url: 'https://stream.klassikradio.de/yoga/mp3-192',
        name: 'mp3 192',
      },
      {
        url: 'https://klassikr.streamabc.net/klr_m4mzsihnuo6_udni-aac-128-8642340',
        name: 'aac 128',
      },
    ],
  },
  {
    id: 205,
    title: 'Matts Movie Trax',
    genre: 'Instrumental',
    website: 'https://www.mattsmovietrax.com/',
    codec: [
      {
        url: 'https://s8.myradiostream.com/:11732/;',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 206,
    title: 'Screen Sound Radio',
    genre: 'Instrumental',
    website: 'https://www.screensoundradio.com/',
    codec: [
      {
        url: 'https://17653.live.streamtheworld.com/SP_R2686359.aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 207,
    title: 'SoundtrackFM',
    genre: 'Instrumental',
    website: 'https://soundtrackfm.be/programmas/',
    codec: [
      {
        url: 'https://mediaserv38.live-streams.nl:18033/stream',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 208,
    title: 'Soundtrack Radio Station',
    genre: 'Instrumental',
    website: 'https://soundtrackradiostation.com/',
    codec: [
      {
        url: 'https://quincy.torontocast.com:2415/stream',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 209,
    title: 'ČRo Vltava',
    genre: 'News and talks',
    website: 'https://vltava.rozhlas.cz/program',
    codec: [
      {
        url: 'https://amp.cesnet.cz:8443/cro3.flac',
        name: 'flac',
      },
      {
        url: 'https://rozhlas.stream/vltava_mp3_32.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 210,
    title: 'Rádio Povídka',
    genre: 'News and talks',
    website: 'https://radia.cz/radia/radio-povidka/program',
    codec: [
      {
        url: 'https://ice2.radia.cz/povidka128.aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 211,
    title: 'Nightride.FM - Nightride',
    genre: 'Synth',
    website: 'https://nightride.fm/stations?station=nightride',
    codec: [
      {
        url: 'https://stream.nightride.fm/nightride.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 212,
    title: 'Nightride.FM - Chillsynth',
    genre: 'Synth',
    website: 'https://nightride.fm/stations?station=chillsynth',
    codec: [
      {
        url: 'https://stream.nightride.fm/chillsynth.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 213,
    title: 'Nightride.FM - Datawave',
    genre: 'Synth',
    website: 'https://nightride.fm/stations?station=datawave',
    codec: [
      {
        url: 'https://stream.nightride.fm/datawave.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 214,
    title: 'Nightride.FM - Spacesynth',
    genre: 'Synth',
    website: 'https://nightride.fm/stations?station=spacesynth',
    codec: [
      {
        url: 'https://stream.nightride.fm/spacesynth.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 215,
    title: 'Nightride.FM - Darksynth',
    genre: 'Synth',
    website: 'https://nightride.fm/stations?station=darksynth',
    codec: [
      {
        url: 'https://stream.nightride.fm/darksynth.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 216,
    title: 'Nightride.FM - Horrorsynth',
    genre: 'Synth',
    website: 'https://nightride.fm/stations?station=horrorsynth',
    codec: [
      {
        url: 'https://stream.nightride.fm/horrorsynth.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 217,
    title: 'Nightride.FM - EBSM',
    genre: 'Synth',
    website: 'https://nightride.fm/stations?station=ebsm',
    codec: [
      {
        url: 'https://stream.nightride.fm/ebsm.mp3',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 221,
    title: 'Rádio Folk',
    genre: 'Country and folk',
    website: 'https://radiofolk.cz/',
    codec: [
      {
        url: 'https://ice3.abradio.cz/folk320.mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://ice2.abradio.cz/folk64a.aac',
        name: 'aac 32',
      },
      {
        url: 'https://ice3.abradio.cz/folk128.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 222,
    title: 'Radio Click & Country',
    genre: 'Country and folk',
    website: 'https://www.clickandcountry.com/program',
    codec: [
      {
        url: 'https://radio.clickandcountry.cz:8443/clickandcountry.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 223,
    title: '0N Radio - Country',
    genre: 'Country and folk',
    website: 'https://www.0nradio.com/',
    codec: [
      {
        url: 'https://0n-2000s.radionetz.de/0n-country.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 224,
    title: '1.FM - Classic Country',
    genre: 'Country and folk',
    website: 'https://radio.1cloud.fm/station/ccountry',
    codec: [
      {
        url: 'https://strm112.1.fm/country_mobile_mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 225,
    title: 'CeltCast.com',
    genre: 'Ethno',
    website: 'https://celtcast.com/player/',
    codec: [
      {
        url: 'https://caster04.streampakket.com/proxy/8982/CeltCast',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 226,
    title: 'Oroko Radio',
    genre: 'Ethno',
    website: 'https://oroko.live/',
    codec: [
      {
        url: 'https://oroko-radio.radiocult.fm/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 227,
    title: 'XRay.FM',
    genre: 'Other',
    website: 'https://www.xray.fm/',
    codec: [
      {
        url: 'https://listen.xray.fm/stream',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 228,
    title: 'Monocle Radio',
    genre: 'News and talks',
    website: 'https://monocle.com/radio/',
    codec: [
      {
        url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/MONOCLE_24AAC.aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 229,
    title: 'OpenLab',
    genre: 'Other',
    website: 'https://openlab.fm/radio/schedule/list/tuesday',
    codec: [
      {
        url: 'https://ice09.fluidstream.net/openlab.aac',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 230,
    title: 'radiOrakel.nl',
    genre: 'Other',
    website: 'https://radiorakel.no/',
    codec: [
      {
        url: 'https://stream.radiorakel.no/radiorakel_hq',
        name: 'mp3 192',
      },
      {
        url: 'https://stream.radiorakel.no/fm993.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 231,
    title: 'Do!!You!!World!',
    genre: 'Other',
    website: 'https://doyou.world/',
    codec: [
      {
        url: 'https://doyouworld.out.airtime.pro/doyouworld_a',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 232,
    title: 'Internet Public Radio',
    genre: 'Other',
    website: 'https://www.internetpublicradio.live/latest',
    codec: [
      {
        url: 'https://c11.radioboss.fm:18270/autodj',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 233,
    title: 'Radio Worm',
    genre: 'Other',
    website: 'https://radio.worm.org/',
    codec: [
      {
        url: 'https://play.streamnerd.nl/worm/worm/icecast.audio',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 234,
    title: 'Cashmere Radio',
    genre: 'Electronic music',
    website: 'https://cashmereradio.com/shows/enchanted-rhythms/',
    codec: [
      {
        url: 'https://cashmereradio.out.airtime.pro:8000/cashmereradio_a',
        name: 'vor 192',
      },
      {
        url: 'https://cashmereradio.out.airtime.pro/cashmereradio_b',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 235,
    title: 'BreakBeat Zone',
    genre: 'Breaks',
    website: 'https://www.bbz.ru/',
    codec: [
      {
        url: 'https://radio.bbz.ru/listen/bbz/192.mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 236,
    title: '181.FM - Kickin Country',
    genre: 'Country and folk',
    website: 'https://player.181fm.com/?station=181-kickincountry',
    codec: [
      {
        url: 'https://das-edge34-sa20-181fm-dal03.cdnstream.com/181-kickincountry_128k.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 237,
    title: '181.FM - Highway 181',
    genre: 'Country and folk',
    website: 'https://player.181fm.com/?station=181-highway',
    codec: [
      {
        url: 'https://das-edge34-sa20-181fm-dal03.cdnstream.com/181-highway_128k.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 238,
    title: '181.FM - Front Porch',
    genre: 'Country and folk',
    website: 'https://player.181fm.com/?station=181-frontporch',
    codec: [
      {
        url: 'https://das-edge34-sa20-181fm-dal03.cdnstream.com/181-frontporch_128k.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 239,
    title: '181.FM - 80s Country',
    genre: 'Country and folk',
    website: 'https://player.181fm.com/?station=181-80scountry',
    codec: [
      {
        url: 'https://das-edge34-sa20-181fm-dal03.cdnstream.com/181-80scountry_128k.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 240,
    title: '181.FM - Real Country',
    genre: 'Country and folk',
    website: 'https://player.181fm.com/?station=181-realcountry',
    codec: [
      {
        url: 'https://das-edge34-sa20-181fm-dal03.cdnstream.com/181-realcountry_128k.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 241,
    title: '181.FM - Classical Guitar',
    genre: 'Classical',
    website: 'https://player.181fm.com/?station=181-classicalguitar',
    codec: [
      {
        url: 'https://das-edge34-sa20-181fm-dal03.cdnstream.com/181-classicalguitar_128k.mp3',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 242,
    title: 'Funktopia',
    genre: 'Funk',
    website: 'https://funkatopia.com/funk-radio/',
    codec: [
      {
        url: 'https://cast2.my-control-panel.com/proxy/rankwell/stream',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 243,
    title: 'Funk Star Radio',
    genre: 'Funk',
    website: 'https://www.funkstar.eu/show-schedule/',
    codec: [
      {
        url: 'https://funkstar.radioca.st/stream',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 244,
    title: 'Laut.fm - Fullmoon',
    genre: 'Funk',
    website: 'https://laut.fm/fullmoon',
    codec: [
      {
        url: 'https://fullmoon.stream.laut.fm/fullmoon',
        name: 'mp3 128',
      },
    ],
  },
  {
    id: 245,
    title: 'Funky.radio',
    genre: 'Funk',
    website: 'https://funky.radio/',
    codec: [
      {
        url: 'https://funkyradio.streamingmedia.it/play.mp3',
        name: 'mp3 320',
      },
      {
        url: 'https://funkyradio.streamingmedia.it/uk',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 246,
    title: 'Radio Bachata FM',
    genre: 'Latino',
    website: 'https://radiobachatafm.net/shows/buenos-dias/',
    codec: [
      {
        url: 'https://cast3.my-control-panel.com/proxy/radiobachatafm/stream',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 247,
    title: 'Dubplate.FM - Drum and Bass',
    genre: 'Drum and Bass',
    website: 'https://dubplate.fm/',
    codec: [
      {
        url: 'https://sc2.dubplate.fm/radio/8030/dnb/uhifi',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 248,
    title: 'Dubplate.FM - Dub Bass',
    genre: 'Dubstep and Trap',
    website: 'https://dubplate.fm/',
    codec: [
      {
        url: 'https://sc2.dubplate.fm/radio/8000/dubandbass/uhifi',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 249,
    title: 'Dubplate.FM - 5 Pointz',
    genre: 'Rap',
    website: 'https://dubplate.fm/',
    codec: [
      {
        url: 'https://sc2.dubplate.fm/radio/8020/hiphop/uhifi',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 249,
    title: 'Dubplate.FM - Urban Boogie',
    genre: 'Rap',
    website: 'https://dubplate.fm/',
    codec: [
      {
        url: 'https://sc2.dubplate.fm/radio/8010/urbanboogie/uhifi',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 250,
    title: 'Partyvibe.com - DubStep',
    genre: 'Dubstep and Trap',
    website: 'https://www.partyvibe.com/dubstep-radio-station/',
    codec: [
      {
        url: 'https://www.partyvibe.com:8067/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 251,
    title: 'Partyvibe.com - Reggae',
    genre: 'Ethno',
    website: 'https://www.partyvibe.com/reggae-radio-station/',
    codec: [
      {
        url: 'https://www.partyviberadio.com:8060/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 252,
    title: 'Partyvibe.com - Ambient',
    genre: 'Ambient',
    website: 'https://www.partyvibe.com/ambient-radio-station/',
    codec: [
      {
        url: 'https://www.partyviberadio.com:8069/;listen.pls?sid=1',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 253,
    title: 'Noise FM',
    genre: 'Dubstep and Trap',
    website: 'https://noisefm.ru/',
    codec: [
      {
        url: 'https://play.sas-media.ru/play_256',
        name: 'mp3 256',
      },
    ],
  },
  {
    id: 254,
    title: 'LWRradio.com - Afrobeats',
    genre: 'Ethno',
    website: 'https://lwrradio.com/',
    codec: [
      {
        url: 'https://lwrafrobeats-zaklwr10.radioca.st/stream',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 255,
    title: 'LWRradio.com - Dubstep',
    genre: 'Dubstep and Trap',
    website: 'https://lwrradio.com/',
    codec: [
      {
        url: 'https://lwrdubstep-zaklwr10.radioca.st/stream',
        name: 'mp3 320',
      },
    ],
  },
  {
    id: 256,
    title: 'Sensimedia - Dubstep & Bass',
    genre: 'Dubstep and Trap',
    website: 'https://sensimedia.net/radio/stations/bass',
    codec: [
      {
        url: 'https://sensibass.radioca.st/;',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 257,
    title: 'Feds Trap Radio',
    genre: 'Dubstep and Trap',
    website: 'https://www.fedstrapradio.com/about/index.html',
    codec: [
      {
        url: 'https://backend.fedstrapradio.com:8000/radio.mp3',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 256,
    title: 'Trap.radio',
    genre: 'Dubstep and Trap',
    website: 'https://trap.radio/',
    codec: [
      {
        url: 'https://trapradio.streamingmedia.it/play',
        name: 'aac 32',
      },
    ],
  },
  {
    id: 257,
    title: 'ILoveMusic.de - Chillhop',
    genre: 'Chillout',
    website: 'https://ilovemusic.de/ilovechillhop/',
    codec: [
      {
        url: 'https://ilm.stream35.radiohost.de/ilm_ilovechillhop_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 258,
    title: 'ILoveMusic.de - Chillout Beats',
    genre: 'Chillout',
    website: 'https://ilovemusic.de/ilovechilloutbeats/',
    codec: [
      {
        url: 'https://ilm.stream18.radiohost.de/ilm-ichillout_beats_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 259,
    title: 'ILoveMusic.de - Music & Chillout',
    genre: 'Chillout',
    website: 'https://ilovemusic.de/ilovemusicandchill/',
    codec: [
      {
        url: 'https://ilm.stream35.radiohost.de/ilm_ilovemusicandchill_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 260,
    title: 'ILoveMusic.de - US Rap',
    genre: 'Rap',
    website: 'https://ilovemusic.de/iloveusonlyrapradio/',
    codec: [
      {
        url: 'https://ilm.stream12.radiohost.de/ilm_iloveusonlyrapradio_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 261,
    title: 'ILoveMusic.de - HipHop',
    genre: 'Rap',
    website: 'https://ilovemusic.de/ilovehiphop/',
    codec: [
      {
        url: 'https://ilm.stream18.radiohost.de/ilm_ilovehiphop_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 262,
    title: 'ILoveMusic.de - HipHop History',
    genre: 'Rap',
    website: 'https://ilovemusic.de/ilovehiphophistory/',
    codec: [
      {
        url: 'https://ilm.stream18.radiohost.de/ilm_ilovehiphophistory_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 263,
    title: 'ILoveMusic.de - Robin Schulz',
    genre: 'Electronic music',
    website: 'https://ilovemusic.de/ilovesugarradio/',
    codec: [
      {
        url: 'https://ilm.stream35.radiohost.de/ilm_ilovesugarradio_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 264,
    title: 'ILoveMusic.de - Hardstyle',
    genre: 'Electronic music',
    website: 'https://ilovemusic.de/ilovehardstyle/',
    codec: [
      {
        url: 'https://ilm.stream35.radiohost.de/ilm_ilovehardstyle_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 265,
    title: 'ILoveMusic.de - Main Stage Madness',
    genre: 'Dance',
    website: 'https://ilovemusic.de/ilovemainstagemadness/',
    codec: [
      {
        url: 'https://ilm.stream18.radiohost.de/ilm_ilovemainstagemadness_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 266,
    title: 'ILoveMusic.de - Dance History',
    genre: 'Dance',
    website: 'https://ilovemusic.de/ilovedancehistory/',
    codec: [
      {
        url: 'https://play.ilovemusic.de/ilm_ilovedancehistory',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 267,
    title: 'ILoveMusic.de - 2000+ Throwbacks',
    genre: 'Other',
    website: 'https://ilovemusic.de/ilove2000throwbacks/',
    codec: [
      {
        url: 'https://ilm.stream18.radiohost.de/ilm_ilove2000throwbacks_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 268,
    title: 'ILoveMusic.de - Hit-Quiz',
    genre: 'Other',
    website: 'https://ilovemusic.de/ilovehitquiz/',
    codec: [
      {
        url: 'https://ilm.stream35.radiohost.de/ilm-ihit-quiz_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 269,
    title: 'ILoveMusic.de - Party Hard',
    genre: 'Other',
    website: 'https://ilovemusic.de/ilovepartyhard/',
    codec: [
      {
        url: 'https://ilm.stream35.radiohost.de/ilm_ilovepartyhard_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 270,
    title: 'ILoveMusic.de - The Sun',
    genre: 'Latino',
    website: 'https://ilovemusic.de/ilovethesun/',
    codec: [
      {
        url: 'https://ilm.stream35.radiohost.de/ilm_ilovethesun_mp3-192',
        name: 'mp3 192',
      },
    ],
  },
  {
    id: 271,
    title: 'Kexp.org',
    genre: 'Other',
    website: 'https://www.kexp.org/',
    codec: [
      {
        url: 'https://kexp-mp3-128.streamguys1.com/kexp128.mp3',
        name: 'mp3 128',
      },
      {
        url: 'https://kexp.streamguys1.com/kexp160.aac',
        name: 'aac 32',
      },
    ],
  },
];

/*
,
    {
        id: ,
        title: '',
        genre: '',
        website: '',
        codec: [
            {
                url: '',
                name: ''
            }
        ]
    }
*/

/*
 *
 * PLAYER
 *
 */
class RadioPlayer {
  constructor() {
    this.audio = null;
    this.streamUrl = null;
    this.isPlaying = false;
    this.volume = 1.0;
  }

  setStream(streamUrl) {
    // Destroy previous playback if exists
    this.destroy();

    this.streamUrl = streamUrl;
    this.audio = new Audio(this.streamUrl);
    this.audio.preload = 'none';
    this.audio.autoplay = false; // Do not autoplay on setStream
  }

  play() {
    if (!this.audio) {
      console.log('No stream set. Call setStream(url) before play().');
      return;
    }

    this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
      })
      .catch((err) => {
        console.log('Playback error:', err);
      });
  }

  pause() {
    if (this.audio && this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  destroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio.load(); // Clears any buffered data
      this.audio = null;
      this.isPlaying = false;
    }
    this.streamUrl = null;
  }

  // Event listeners
  on(event, callback) {
    if (this.audio) {
      this.audio.addEventListener(event, callback);
    }
  }

  off(event, callback) {
    if (this.audio) {
      this.audio.removeEventListener(event, callback);
    }
  }
}

// Functions for handling player UI after events are fired
var playerOnLoadStart = () => {
  //console.log(`loadstart fired   ${new Date().toUTCString()}`);
  document.getElementById('loading-container').classList.remove('hidden');
  document.getElementById('playing-container').classList.add('hidden');
  document.getElementById('stop-container').classList.add('hidden');
};

var playerOnPlaying = () => {
  //console.log(`playing fired   ${new Date().toUTCString()}`);
  document.getElementById('play-button').classList.add('hidden');
  document.getElementById('pause-button').classList.remove('hidden');

  document.getElementById('loading-container').classList.add('hidden');
  document.getElementById('playing-container').classList.remove('hidden');
  document.getElementById('stop-container').classList.add('hidden');
};

var playerOnPause = () => {
  //console.log(`pause fired   ${new Date().toUTCString()}`);
  document.getElementById('play-button').classList.remove('hidden');
  document.getElementById('pause-button').classList.add('hidden');

  document.getElementById('loading-container').classList.add('hidden');
  document.getElementById('playing-container').classList.add('hidden');
  document.getElementById('stop-container').classList.remove('hidden');
};

var playerOnError = (e) => {
  //console.log(e);
  document.querySelector('p.codec-playing').innerText = 'Loading failed!';

  document.getElementById('play-button').classList.remove('hidden');
  document.getElementById('pause-button').classList.add('hidden');

  document.getElementById('loading-container').classList.add('hidden');
  document.getElementById('playing-container').classList.add('hidden');
  document.getElementById('stop-container').classList.remove('hidden');

  if (currentStream) {
    Logger.error(currentStream.id, currentStream.streamCodec);
  }
};

// Register player listeners
var playerRegisterListeners = () => {
  player.on('loadstart', playerOnLoadStart);
  player.on('playing', playerOnPlaying);
  player.on('pause', playerOnPause);
  player.on('error', playerOnError);
};

// Unregister player listeners
var playerUnregisterListeners = () => {
  player.off('loadstart', playerOnLoadStart);
  player.off('playing', playerOnPlaying);
  player.off('pause', playerOnPause);
  player.off('error', playerOnError);
};

/*
 *
 * STREAM HANDLERS
 *
 */

// Get stream from the list and call set and play
var getStreamAndPlay = (e) => {
  var ids = e.target.getAttribute('data-id-codec').split('-');
  var streamID = ids[0];
  var codecID = ids[1];

  var stream = streams.find((item) => item.id == streamID);

  currentStream = {
    id: streamID,
    title: stream.title,
    streamURL: stream.codec[codecID].url,
    streamCodec: stream.codec[codecID].name,
    website: stream.website,
    genre: stream.genre,
  };

  setStreamAndPlay();
};

// Set stream and play
var setStreamAndPlay = () => {
  // Remove previous listeners
  playerUnregisterListeners();

  // Set stream
  player.setStream(currentStream.streamURL);

  // Register new listeners
  playerRegisterListeners();

  player.play();

  // Player title, codec and genre
  document.querySelector(
    'h2.title'
  ).innerHTML = `<a href="${currentStream.website}" target="_blank">${currentStream.title}</a>`;
  document.querySelector('p.codec-playing').innerText =
    currentStream.streamCodec;
  document.querySelector('p.genre-playing').innerText = currentStream.genre;
  // Website title
  document.title = currentStream.title;
};

// Testing new stream url
var testStream = () => {
  var stream = prompt('Enter stream url');

  // Remove previous listeners
  playerUnregisterListeners();

  // Set new stream
  player.setStream(stream);

  // Register new listeners
  playerRegisterListeners();

  player.play();

  // Player title, codec and genre
  document.querySelector(
    'h2.title'
  ).innerHTML = `<a href="">New stream url</a>`;
  document.querySelector('p.codec-playing').innerText = 'codec';
  document.querySelector('p.genre-playing').innerText = 'genre';
  // Website title
  document.title = 'TEST';
};

/*
 *
 * PLAYER UI BUTTONS
 *
 */

// Reload button
var reloadStream = () => {
  if (currentStream) {
    setStreamAndPlay();
  }
};

// Reset button
var resetPlayer = () => {
  if (document.querySelector('h2.title').innerText != 'Radio station') {
    // Remove previous listeners
    playerUnregisterListeners();

    player.destroy();

    currentStream = null;

    document.title = 'Radio player';
    document.querySelector('h2.title').innerHTML = 'Radio station';
    document.querySelector('p.codec-playing').innerText = 'codec';
    document.querySelector('p.genre-playing').innerText = 'genre';

    document.getElementById('play-button').classList.remove('hidden');
    document.getElementById('pause-button').classList.add('hidden');

    document.getElementById('stop-container').classList.remove('hidden');
    document.getElementById('playing-container').classList.add('hidden');
    document.getElementById('loading-container').classList.add('hidden');
  }
};

// Play pause button
var playPause = () => {
  if (document.querySelector('h2.title').innerText != 'Radio station') {
    if (player.isPlaying == false) {
      player.play();
    } else {
      player.pause();
    }
  }
};

/*
 *
 * FILTERS and RANDOM section
 *
 */

// Filter and stations list functions
var filterByNormal = () => {
  // Remove previous listeners
  document
    .querySelectorAll('.codec')
    .forEach((e) => e.removeEventListener('click', getStreamAndPlay));

  // Remove previous rendered stations
  document.getElementById('stations').innerHTML = '';

  var html = '<ul>';

  for (let i = 0; i < streams.length; i++) {
    if (streams[i].website) {
      html += `<li class="station"><p class="station-title"><a href="${streams[i].website}" target="_blank">${streams[i].title}</a></p>`;
    } else {
      html += `<li class="station"><p class="station-title">${streams[i].title}</p>`;
    }

    for (let a = 0; a < streams[i].codec.length; a++) {
      // data-codec-id="<stream index>-<codec-index>"
      html += `<p class="codec" data-id-codec="${streams[i].id}-${a}">${streams[i].codec[a].name}</p>`;
    }

    html += `<p class="genre">${streams[i].genre}</p>`;

    html += '</li>';
  }

  html += '</ul>';

  document.getElementById('stations').insertAdjacentHTML('beforeend', html);
  // Add listeners
  document
    .querySelectorAll('.codec')
    .forEach((e) => e.addEventListener('click', getStreamAndPlay));
};

var filterByGenre = () => {
  const sorted = [...streams].sort((a, b) => a.genre.localeCompare(b.genre)); // [...streams] = copy of original streams array

  // Remove previous listeners
  document
    .querySelectorAll('.codec')
    .forEach((e) => e.removeEventListener('click', getStreamAndPlay));

  // Remove previous rendered stations
  document.getElementById('stations').innerHTML = '';

  var html = '<ul>';

  for (let i = 0; i < sorted.length; i++) {
    try {
      var prevGenre = sorted[i - 1].genre;
      var currGenre = sorted[i].genre;
      if (currGenre != prevGenre) {
        html += `<li class="genre-title">${sorted[i].genre}</li>`;
      }
    } catch (e) {
      html += `<li class="genre-title">${sorted[i].genre}</li>`;
    }

    if (sorted[i].website) {
      html += `<li class="station"><p class="station-title"><a href="${sorted[i].website}" target="_blank">${sorted[i].title}</a></p>`;
    } else {
      html += `<li class="station"><p class="station-title">${sorted[i].title}</p>`;
    }

    for (let a = 0; a < sorted[i].codec.length; a++) {
      // data-codec-id="<stream index>-<codec-index>"
      html += `<p class="codec" data-id-codec="${sorted[i].id}-${a}">${sorted[i].codec[a].name}</p>`;
    }

    //html += `<p class="genre">${sorted[i].genre}</p>`;

    html += '</li>';
  }

  html += '</ul>';

  document.getElementById('stations').insertAdjacentHTML('beforeend', html);
  // Add listeners
  document
    .querySelectorAll('.codec')
    .forEach((e) => e.addEventListener('click', getStreamAndPlay));
};

var randomStation = () => {
  var quality = document.getElementById('toggle').checked ? 'HQ' : 'LQ';

  var randomID = Math.floor(Math.random() * streams.length);

  var stream = streams[randomID];

  if (quality == 'HQ') {
    codecID = 0;
  } else {
    codecID = stream.codec.length - 1;
  }

  currentStream = {
    id: stream.id,
    title: stream.title,
    streamURL: stream.codec[codecID].url,
    streamCodec: stream.codec[codecID].name,
    website: stream.website,
    genre: stream.genre,
  };

  if (currentStream) {
    setStreamAndPlay();
  }
};

var playNextOrPreviousStream = (e) => {
  if (currentStream) {
    var quality = document.getElementById('toggle').checked ? 'HQ' : 'LQ';
    var direction = e.currentTarget
      .querySelector('svg')
      .getAttribute('data-direction');

    // Get all streams with genre from current playing stream
    var selectedStreamsByGenre = [...streams].filter(
      (a) => a.genre == currentStream.genre
    );

    // Find index of current playing stream
    lastStreamByGenreIndex = selectedStreamsByGenre.findIndex(
      (e) => e.id == currentStream.id
    );

    var i;
    if (direction == 'forward') {
      i = lastStreamByGenreIndex + 1;
      if (i > selectedStreamsByGenre.length - 1) {
        i = 0;
      }
    }

    if (direction == 'backward') {
      i = lastStreamByGenreIndex - 1;
      if (i < 0) {
        i = selectedStreamsByGenre.length - 1;
      }
    }

    var codecID;
    if (quality == 'HQ') {
      codecID = 0;
    } else {
      codecID = selectedStreamsByGenre[i].codec.length - 1;
    }

    currentStream = {
      id: selectedStreamsByGenre[i].id,
      title: selectedStreamsByGenre[i].title,
      streamURL: selectedStreamsByGenre[i].codec[codecID].url,
      streamCodec: selectedStreamsByGenre[i].codec[codecID].name,
      website: selectedStreamsByGenre[i].website,
      genre: selectedStreamsByGenre[i].genre,
    };

    setStreamAndPlay();
  }
};

/*
 *
 * LOGGER
 *
 */
var Logger = {
  key: 'phc_NYKXZPDCv7BD1jteldnHfH4wqLveFcAhujTvMP0qhQK',
  endpoint: 'https://eu.i.posthog.com/i/v0/e/',
  error: (id, codec) => {
    var payload = {
      api_key: Logger.key,
      event: 'Loading failed',
      properties: {
        distinct_id: 'anonymous',
        id: id,
        codec: codec,
        browser: `${deviceInfo.browser} ${deviceInfo.browserVersion}`,
        platform: `${deviceInfo.os} ${deviceInfo.osVersion}`,
        device: '',
      },
      timestamp: new Date().toISOString(),
    };

    if (deviceInfo.mobile) {
      payload.properties.device = 'Mobile';
    } else {
      payload.properties.device = 'Desktop';
    }

    Logger.request(payload);
  },
  pageView: () => {
    if (document.URL.includes('https://')) {
      var payload = {
        api_key: Logger.key,
        event: 'Page view',
        properties: {
          distinct_id: 'anonymous',
          platform: `${deviceInfo.os} ${deviceInfo.osVersion}`,
          device: '',
          browser: `${deviceInfo.browser} ${deviceInfo.browserVersion}`,
          screen: deviceInfo.screen,
        },
        timestamp: new Date().toISOString(),
      };

      if (deviceInfo.mobile) {
        payload.properties.device = 'Mobile';
      } else {
        payload.properties.device = 'Desktop';
      }

      Logger.request(payload);
    }
  },
  request: (payload) => {
    fetch(Logger.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          console.error('PostHog error', response.text());
        }
      })
      .catch((e) => {
        console.error('PostHog network error', e);
      });
  },
};

var getdeviceInfo = (window) => {
  var unknown = '-';

  // screen
  var screenSize = '';
  if (screen.width) {
    width = screen.width ? screen.width : '';
    height = screen.height ? screen.height : '';
    screenSize += '' + width + ' x ' + height;
  }

  // browser
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browser = navigator.appName;
  var version = '' + parseFloat(nVer);
  var nameOffset, verOffset, ix;

  // Yandex Browser
  if ((verOffset = nAgt.indexOf('YaBrowser')) != -1) {
    browser = 'Yandex';
    version = nAgt.substring(verOffset + 10);
  }
  // Samsung Browser
  else if ((verOffset = nAgt.indexOf('SamsungBrowser')) != -1) {
    browser = 'Samsung';
    version = nAgt.substring(verOffset + 15);
  }
  // UC Browser
  else if ((verOffset = nAgt.indexOf('UCBrowser')) != -1) {
    browser = 'UC Browser';
    version = nAgt.substring(verOffset + 10);
  }
  // Opera Next
  else if ((verOffset = nAgt.indexOf('OPR')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 4);
  }
  // Opera
  else if ((verOffset = nAgt.indexOf('Opera')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) != -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  // Legacy Edge
  else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
    browser = 'Microsoft Legacy Edge';
    version = nAgt.substring(verOffset + 5);
  }
  // Edge (Chromium)
  else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
    browser = 'Microsoft Edge';
    version = nAgt.substring(verOffset + 4);
  }
  // MSIE
  else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(verOffset + 5);
  }
  // Chrome
  else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
    browser = 'Chrome';
    version = nAgt.substring(verOffset + 7);
  }
  // Safari
  else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
    browser = 'Safari';
    version = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) != -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  // Firefox
  else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
    browser = 'Firefox';
    version = nAgt.substring(verOffset + 8);
  }
  // MSIE 11+
  else if (nAgt.indexOf('Trident/') != -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
  }
  // Other browsers
  else if (
    (nameOffset = nAgt.lastIndexOf(' ') + 1) <
    (verOffset = nAgt.lastIndexOf('/'))
  ) {
    browser = nAgt.substring(nameOffset, verOffset);
    version = nAgt.substring(verOffset + 1);
    if (browser.toLowerCase() == browser.toUpperCase()) {
      browser = navigator.appName;
    }
  }
  // trim the version string
  if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

  majorVersion = parseInt('' + version, 10);
  if (isNaN(majorVersion)) {
    version = '' + parseFloat(nVer);
    majorVersion = parseInt(nVer, 10);
  }

  // mobile version
  var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

  // cookie
  var cookieEnabled = navigator.cookieEnabled ? true : false;

  if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
    document.cookie = 'testcookie';
    cookieEnabled = document.cookie.indexOf('testcookie') != -1 ? true : false;
  }

  // system
  var os = unknown;
  var clientStrings = [
    { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
    { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
    { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
    { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
    { s: 'Windows Vista', r: /Windows NT 6.0/ },
    { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
    { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
    { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
    { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
    { s: 'Windows 98', r: /(Windows 98|Win98)/ },
    { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
    { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
    { s: 'Windows CE', r: /Windows CE/ },
    { s: 'Windows 3.11', r: /Win16/ },
    { s: 'Android', r: /Android/ },
    { s: 'Open BSD', r: /OpenBSD/ },
    { s: 'Sun OS', r: /SunOS/ },
    { s: 'Chrome OS', r: /CrOS/ },
    { s: 'Linux', r: /(Linux|X11(?!.*CrOS))/ },
    { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
    { s: 'Mac OS X', r: /Mac OS X/ },
    { s: 'Mac OS', r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
    { s: 'QNX', r: /QNX/ },
    { s: 'UNIX', r: /UNIX/ },
    { s: 'BeOS', r: /BeOS/ },
    { s: 'OS/2', r: /OS\/2/ },
    {
      s: 'Search Bot',
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
    },
  ];
  for (var id in clientStrings) {
    var cs = clientStrings[id];
    if (cs.r.test(nAgt)) {
      os = cs.s;
      break;
    }
  }

  var osVersion = unknown;

  if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
  }

  switch (os) {
    case 'Mac OS':
    case 'Mac OS X':
    case 'Android':
      osVersion =
        /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(
          nAgt
        )[1];
      break;

    case 'iOS':
      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
      osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
      break;
  }

  // flash (you'll need to include swfobject)
  /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
  var flashVersion = 'no check';
  if (typeof swfobject != 'undefined') {
    var fv = swfobject.getFlashPlayerVersion();
    if (fv.major > 0) {
      flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
    } else {
      flashVersion = unknown;
    }
  }

  return {
    screen: screenSize,
    browser: browser,
    browserVersion: version,
    browserMajorVersion: majorVersion,
    mobile: mobile,
    os: os,
    osVersion: osVersion,
    cookies: cookieEnabled,
    flashVersion: flashVersion,
  };
};

// Init app
var player = new RadioPlayer();
var currentStream = null; // Last chosen stream
var lastStreamByGenreIndex = null; // Index of current playing stream in array of streams with the same genre

filterByGenre();

// Footer total stations
document.getElementById('total-stations').innerText = streams.length;

// Listeners for player UI buttons
document
  .getElementById('play-pause-button')
  .addEventListener('click', playPause);
document
  .getElementById('reload-button')
  .addEventListener('click', reloadStream);
document.getElementById('reset-button').addEventListener('click', resetPlayer);
document
  .querySelectorAll('.backward-forward-buttons')
  .forEach((e) => e.addEventListener('click', playNextOrPreviousStream));

// Listeners for filter buttons and randoms
document
  .getElementById('filter-normal')
  .addEventListener('click', filterByNormal);
document
  .getElementById('filter-genre')
  .addEventListener('click', filterByGenre);
document
  .getElementById('random-station')
  .addEventListener('click', randomStation);

// Listener for calling test new stream function
document.addEventListener('keydown', (e) => {
  if (e.key === 't') {
    testStream();
  }
});

// Browser info
var deviceInfo = getdeviceInfo(window);

// Send page view event
Logger.pageView();

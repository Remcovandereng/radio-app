const audio=document.getElementById("audio"),
stationList=document.getElementById("stationList"),
stationSearch=document.getElementById("stationSearch"),
countrySearch=document.getElementById("countrySearch"),
countryList=document.getElementById("countryList"),
countryToggle=document.getElementById("countryToggle"),
countryPanel=document.getElementById("countryPanel"),
stationName=document.getElementById("stationName"),
stationCountry=document.getElementById("stationCountry"),
subtitle=document.getElementById("subtitle"),
statusEl=document.getElementById("status"),
favBtn=document.getElementById("favBtn"),
favoritesOnlyBtn=document.getElementById("favoritesOnly");

let selectedCountry="Nederland";
let currentStation=null;
let favoritesOnly=false;
let favorites=JSON.parse(localStorage.getItem("favorites")||"[]");
let stationsByCountry={"Nederland":[...DEFAULT_STATIONS]};
let loadingCountry=false;

function saveFavorites(){localStorage.setItem("favorites",JSON.stringify(favorites))}
function isFav(n){return favorites.includes(n)}

function countries(){
  const names=Object.keys(COUNTRY_CODES);
  return names.sort((a,b)=>a==="Nederland"?-1:b==="Nederland"?1:a.localeCompare(b,"nl"));
}

function cleanUrl(url){
  if(!url) return "";
  return String(url).replace("http://","https://");
}

async function fetchCountryStations(country){
  if(stationsByCountry[country]) return stationsByCountry[country];

  const code=COUNTRY_CODES[country];
  if(!code) return [];

  loadingCountry=true;
  statusEl.textContent=`Zenders laden voor ${country}...`;
  renderStations();

  try{
    const url=`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/${code}?hidebroken=true&order=clickcount&reverse=true&limit=120`;
    const res=await fetch(url,{cache:"no-store"});
    if(!res.ok) throw new Error("Niet bereikbaar");
    const data=await res.json();

    const seen=new Set();
    const stations=data
      .filter(s=>s.name && (s.url_resolved || s.url))
      .map(s=>({name:s.name.trim(),url:cleanUrl(s.url_resolved || s.url),country}))
      .filter(s=>{
        const key=s.name.toLowerCase()+"|"+s.url;
        if(seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    if(country==="Nederland"){
      const defaults=[...DEFAULT_STATIONS];
      const keys=new Set(defaults.map(s=>s.name.toLowerCase()));
      stations.forEach(s=>{if(!keys.has(s.name.toLowerCase())) defaults.push(s)});
      stationsByCountry[country]=defaults;
    }else{
      stationsByCountry[country]=stations;
    }
  }catch(err){
    stationsByCountry[country]=country==="Nederland" ? [...DEFAULT_STATIONS] : [];
    statusEl.textContent=`Online zenders laden voor ${country} lukte niet`;
  }finally{
    loadingCountry=false;
    if(selectedCountry===country) renderStations();
  }

  return stationsByCountry[country];
}

function allKnownStations(){
  const map=new Map();
  Object.values(stationsByCountry).flat().forEach(s=>map.set((s.name+"|"+s.url).toLowerCase(),s));
  return [...map.values()];
}

function renderCountries(){
  const q=countrySearch.value.trim().toLowerCase();
  countryList.innerHTML="";
  countries().filter(c=>c.toLowerCase().includes(q)).forEach(country=>{
    const btn=document.createElement("button");
    btn.className="country-item"+(country===selectedCountry?" active":"");
    btn.textContent=country;
    btn.onclick=async()=>{
      selectedCountry=country;
      countryToggle.textContent=`${country} ▾`;
      countryPanel.classList.add("hidden");
      await fetchCountryStations(country);
      renderStations();
    };
    countryList.appendChild(btn);
  });
}

function filteredStations(){
  const q=stationSearch.value.trim().toLowerCase();
  let source=q ? allKnownStations() : (stationsByCountry[selectedCountry] || []);
  return source.filter(s=>{
    const favOk=!favoritesOnly||isFav(s.name);
    const queryOk=!q||`${s.name} ${s.country}`.toLowerCase().includes(q);
    return favOk&&queryOk;
  });
}

function renderStations(){
  stationList.innerHTML="";
  if(loadingCountry){
    stationList.innerHTML='<p class="status">Zenders worden geladen...</p>';
    return;
  }

  const q=stationSearch.value.trim();
  const list=filteredStations();

  if(!list.length){
    stationList.innerHTML='<p class="status">Geen zenders gevonden</p>';
    return;
  }

  list.forEach(station=>{
    const btn=document.createElement("button");
    btn.className="station-item"+(currentStation?.name===station.name?" active":"");
    btn.innerHTML=`<span>${station.name}</span>${q?`<small>${station.country}</small>`:""}`;
    btn.onclick=()=>selectStation(station);
    stationList.appendChild(btn);
  });
}

function selectStation(station){
  currentStation=station;
  audio.src=station.url;
  stationName.textContent=station.name;
  stationCountry.textContent=station.country;
  subtitle.textContent=`${station.country} • online radio`;
  updateFavButton();
  renderStations();
  statusEl.textContent="Zender geselecteerd";
}

function updateFavButton(){
  const active=currentStation&&isFav(currentStation.name);
  favBtn.textContent=active?"♥":"♡";
  favBtn.classList.toggle("active",!!active);
}

document.getElementById("playBtn").onclick=async()=>{
  if(!currentStation){
    const first=filteredStations()[0];
    if(first) selectStation(first);
  }
  try{
    await audio.play();
    statusEl.textContent="Speelt af";
  }catch(e){
    statusEl.textContent="Afspelen lukte niet. Kies eventueel een andere zender.";
  }
};

document.getElementById("stopBtn").onclick=()=>{
  audio.pause();
  audio.currentTime=0;
  statusEl.textContent="Gestopt";
};

favBtn.onclick=()=>{
  if(!currentStation) return;
  if(isFav(currentStation.name)){
    favorites=favorites.filter(f=>f!==currentStation.name);
  }else{
    favorites.push(currentStation.name);
  }
  saveFavorites();
  updateFavButton();
  renderStations();
};

favoritesOnlyBtn.onclick=()=>{
  favoritesOnly=!favoritesOnly;
  favoritesOnlyBtn.textContent=favoritesOnly?"Alle zenders bekijken":"♡ Favorieten bekijken";
  renderStations();
};

countryToggle.onclick=()=>{
  countryPanel.classList.toggle("hidden");
  renderCountries();
};

stationSearch.oninput=renderStations;
countrySearch.oninput=renderCountries;


renderCountries();
fetchCountryStations("Nederland").then(renderStations);

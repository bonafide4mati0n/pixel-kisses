const BASE_URL="http://localhost:5174";
const DEFAULT_VOICE="DangerousGem";
export async function speakAmethyst(text,opts={}) {
  if(!text||typeof text!=="string") throw new Error("[speakAmethyst] text must be a string");
  const payload={text,voice:opts.voice||DEFAULT_VOICE,rate:opts.rate,pitch:opts.pitch,breathiness:opts.breathiness,hold:opts.hold,style:opts.style};
  const res=await fetch(BASE_URL+"/speak",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
  if(!res.ok){const t=await res.text().catch(()=>"..."); throw new Error("/speak failed "+res.status+" "+t.slice(0,200))}
  const ct=res.headers.get("content-type")||"";
  if(ct.includes("application/json")) return res.json();
  const blob=await res.blob(); const url=URL.createObjectURL(blob);
  try{ const audio=new Audio(url); audio.preload="auto"; await audio.play(); } finally { setTimeout(()=>URL.revokeObjectURL(url),5000); }
  return {ok:true,played:true};
}

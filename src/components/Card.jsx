const iconos = {
  torre: (
    <>
      <rect x="35" y="15" width="50" height="95" fill="#000" />
      <rect x="95" y="40" width="50" height="70" fill="#000" />
      <line x1="20" y1="110" x2="160" y2="110" stroke="#000" strokeWidth="4" />
      <rect x="45" y="25" width="30" height="10" fill="#FFE600" />
      <rect x="45" y="45" width="30" height="10" fill="#FFE600" />
      <rect x="45" y="65" width="30" height="10" fill="#FFE600" />
    </>
  ),
  pabellon: (
    <>
      <polygon points="20,105 90,25 160,105" fill="#000" />
      <rect x="70" y="65" width="40" height="40" fill="#FFE600" />
      <line x1="15" y1="105" x2="165" y2="105" stroke="#000" strokeWidth="4" />
    </>
  ),
  bunker: (
    <>
      <rect x="25" y="55" width="130" height="50" fill="#000" />
      <rect x="65" y="25" width="90" height="30" fill="#000" />
      <rect x="35" y="70" width="45" height="20" fill="#FFE600" />
      <line x1="15" y1="105" x2="165" y2="105" stroke="#000" strokeWidth="4" />
    </>
  ),
};

function Card({ tipo, area, titulo, texto, icono }) {
  return (
    <div className="bg-black text-[#FFE600] border-4 border-black p-4 flex flex-col justify-between gap-3">
      <div className="border-2 border-[#FFE600] bg-[#FFE600] h-40 flex items-center justify-center p-4">
        <svg className="w-full h-full" viewBox="0 0 180 120" fill="none">
          {iconos[icono]}
        </svg>
      </div>
      <div>
        <div className="flex justify-between font-mono text-[11px] mb-1">
          <span>{tipo}</span>
          <span>{area}</span>
        </div>
        <h3 className="font-black text-xl uppercase">{titulo}</h3>
        <p className="font-mono text-xs mt-1 text-[#FFE600]">{texto}</p>
      </div>
    </div>
  );
}

export default Card;
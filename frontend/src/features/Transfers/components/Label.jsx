import transferMoneyIcon from '../../../assets/transferMoneyIcon.svg'

export function Label() {
  return (
    <section className="flex flex-wrap items-center ">
     
        
      <img src={transferMoneyIcon} className="h-12 w-16 pb-2" style={{ fill: '#006893' }} />
      <h1 className="text-bahama-blue-800 text-2xl ml-1">TRANSFERENCIAS</h1>
        
      
    </section>
  );
}

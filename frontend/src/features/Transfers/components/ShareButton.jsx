import voucherButtonIcon from '../../../assets/voucherButtonIcon.svg'

export function ShareButton() {
    return (
      
      <section className="flex justify-center items-center mt-2 mr-44">
        <button className=" flex items-center justify-center bg-picton-blue-500 rounded-xl w-48 h-10 text-solitude-blue-100 px-2">
         Ver Comprobante
         <img src={voucherButtonIcon} className='ml-2'/>
        </button>
      </section>
      
      
    );
  }
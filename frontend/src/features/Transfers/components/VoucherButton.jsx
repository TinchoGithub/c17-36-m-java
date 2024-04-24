import voucherButtonIcon from '../../../assets/voucherButtonIcon.svg'

export function VoucherButton() {
    return (
      
      <section className="flex justify-end items-center mt-4 mr-44">
        <button className=" flex items-center justify-center bg-picton-blue-500 rounded-xl w-48 h-10 text-solitude-blue-100 px-2">
         Ver Comprobante
         <img src={voucherButtonIcon} className='ml-1'/>
        </button>
      </section>
      
      
    );
  }
  
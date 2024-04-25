import { SideBar } from "../../../components/SideBar";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Label } from "../components/Label";
import { TransferButton } from "../components/TransferButton";
import { Link } from "react-router-dom";
import { TransferCheckLabel } from "../components/TransferCheckLabel";
import { AmountCheck } from "../components/AmountCheck";
import { InfoCheck } from "../components/InfoCheck";
import loading from '../../../assets/loading.gif';
// import { useState } from "react"
import React from "react";

export function TransferInfoCheck (){
    const handleTransferClick = () => {
        // Set loading state to true
        setIsLoading(true);

        // Simulate API call or any asynchronous operation
        setTimeout(() => {
            // After some delay, set loading state back to false
            setIsLoading(false);
        }, 100000); // Change this value to adjust the loading time
    };

    // State to manage loading
    const [isLoading, setIsLoading] = React.useState(false);

return(
    <div className="flex h-screen bg-sail-blue-200">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-col flex-1 overflow-y-auto p-8 ml-52 bg-sail-blue-200">
         <Label />
         <TransferCheckLabel />
         <AmountCheck />
         <InfoCheck />
        
            {/* Conditional rendering based on loading state */}
            {isLoading ? (
                        <img src={loading} alt="Loading" className="w-full h-full" />
                    ) : (
                        <Link to="/transferencias/cuenta-nueva/transferencia-exitosa">
                            <TransferButton onClick={handleTransferClick} />
                        </Link>
                    )}
         {/* <Link to="/transferencias/cuenta-nueva/transferencia-exitosa">
         <TransferButton />
         </Link> */}
         
        </div>
        <Footer />
      </div>
    </div>
)
}

// import { useState } from "react";
// import loading from '../../../assets/loading.gif';

// export function TransferInfoCheck (){
//     const [isLoading, setIsLoading] = useState(false);

//     const handleTransferClick = () => {
//         setIsLoading(true);

//         // Simulate API call or any asynchronous operation
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 5000); // Simulated delay of 5 seconds
//     };

//     return (
//         <div>
//             <button onClick={handleTransferClick}>Transferir</button>
//             {isLoading && <img src={loading} alt="Loading" />}
//         </div>
//     );
// }
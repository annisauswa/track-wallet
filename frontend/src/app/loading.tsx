import Image from "next/image";
import Logo1 from '../../public/Logo L.svg';

function Loading(){
    return (
        <>
         <div className="flex bg-blackPrimary items-center justify-center h-screen">
            <Image
            src={Logo1}
            alt="coming-soon"
            className=" min-w-[193px] max-h-[250px] "
            />
          </div>
        </>
    )
}

export default Loading;
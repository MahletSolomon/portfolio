import React, { ReactNode, useEffect, useRef } from 'react'


interface PopupProps {
    children : ReactNode,
    state: boolean;
    setState: (state: boolean) => void;
}
const PopUp : React.FC<PopupProps> = ({state, setState, children}) => {

    const compRef = useRef<HTMLDivElement | null>(null);
    useEffect(()=>{
        const handleClickOutside = (event : MouseEvent) => {
            if (compRef.current && !compRef.current.contains(event.target as Node)){
                setState(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }


    }, [])
    
  return (
    <div>
        
    </div>
  )
}

export default PopUp
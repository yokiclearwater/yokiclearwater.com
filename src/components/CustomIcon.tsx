import React from 'react'
import { IconType } from 'react-icons';
import * as Icons from "react-icons/si";

interface Props {
    name: keyof typeof Icons;
}

const CustomIcon: React.FC<Props> = ({ name }) => {
    const SiIcon = Icons[name];
    

  return (
        <SiIcon />
    )
}

export default CustomIcon
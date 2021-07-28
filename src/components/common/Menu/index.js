import React from 'react';
import {MenuWrapper} from  './styles/MenuWrapper'
import Logo, { MobileIcon } from '../../../assets/Logo'

export default function Menu(){
    return(
        <MenuWrapper>
            <MenuWrapper.Left>
                {/* logo */}
                <Logo/>
                {/* Icone  desativado no memento*/}
                {/* <MobileIcon/> */}
            </MenuWrapper.Left>
            
            <MenuWrapper.Central>
                Menu centro
            </MenuWrapper.Central>
            
            <MenuWrapper.Right>
                Menu direita
            </MenuWrapper.Right>
        </MenuWrapper>
    )
}
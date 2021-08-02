import { breakpoints } from "../index";
import {css} from "styled-components"

export function breakpointsMedia(cssByBreakpoits){
    const breakpointsName = Object.keys(cssByBreakpoits);
    return breakpointsName.map((breakpointsName)=>{
        return css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px){
                ${cssByBreakpoits[breakpointsName]}
            }
        `
    })
}
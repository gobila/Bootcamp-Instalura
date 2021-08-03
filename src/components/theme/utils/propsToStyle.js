import { breakpointsMedia } from "./breakpointsMedia";

export function propsToStyle(propsName){
    return function(props){
        const propsValue =  props[propsName];
        // vendo sé string
        if(typeof propsValue === 'string'){
        return{
            [propsName]: propsValue
        }}
        // vendo se é objeto
        if(typeof propsValue === 'object'){
            return breakpointsMedia({
                xs: {[propsName]: propsValue.xs},
                sm: {[propsName]: propsValue.sm},
                md: {[propsName]: propsValue.md},
                sl: {[propsName]: propsValue.sl},
                xl: {[propsName]: propsValue.xl},
            })
        }
    }
}

import ajax from './ajax' ;


export const reqMainMsg = ()=> ajax('/home') ;
export const reqMatterMsg = () => ajax('/detail') ;
export const reqCategoryMsg = ()=> ajax('/nav') ;

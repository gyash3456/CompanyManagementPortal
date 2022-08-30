// import {useState,useEffect} from "react";

// function useLocalState(defaultValue){
//     const [value,setValue]=useState(()=>{
//         const localStorageValue=localStorage.getItem("jwt");
//         console.log(defaultValue);
//         return localStorageValue!==null ?JSON.parse(localStorageValue) :defaultValue;
//     });

//     useEffect(()=>{
//         console.log("you are in useeffect"+value);
//         localStorage.setItem("jwt",JSON.stringify(value));
//     },[value])
//     return [value,setValue]
// }
// export {useLocalState};
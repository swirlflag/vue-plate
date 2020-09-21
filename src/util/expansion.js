/*
    window단위에서 확장해야 하는 경우 이곳에서 작성해줍니다. 
*/

(() => {

    const isDev = process.env.NODE_ENV === "development";

    console.dev = (...logs) => {
        if(isDev){
            console.log(...logs);
        }else {
            console.clear();
            return null;
        }
    }
    
})();


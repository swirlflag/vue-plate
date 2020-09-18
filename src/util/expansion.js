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


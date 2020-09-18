// const curry = (f) => (a,..._) => {
//     return _.length ? f(a,..._) : (..._) => f(a,..._);
// };

// const reduce = curry((f,acc,iter) => {
//     if(!iter){
//         iter = acc[Symbol.iterator]();
//         acc = iter.next().value;
//     }else{
//         iter = iter[Symbol.iterator]();
//     }
//     let cur;
//     while(!(cur = iter.next()).done){
//         const a = cur.value;
//         acc = f(acc,a);
//     }
//     return acc;
// });

// const go = (...args) => {
//     return reduce((a,f) => f(a),args);
// };

// const pipe = (f,...fs) => (...as) => {
//     return go(f(...as),...fs)
// };

// export const pipe1 = pipe(
//     a => a,
//     a => a + 1,
//     a => a + 10,
// )

export const installCDN = (Vue, cdns) => {

    const setStatePlugin = (pluginList,state = 'ready') => {
        pluginList.forEach((plugin) => {
            Vue.prototype[`$_${plugin}`] = 
                state === 'load' 
                ? window[plugin] 
                : { pluginState : state };
            window[plugin] = null;
        });        
    };

    for(const [name,{url,plugins,success}] of Object.entries(cdns)){

        const scriptTag = document.createElement('script');

        setStatePlugin(plugins, 'ready');
        
        scriptTag.onload = () => {
            setStatePlugin(plugins ,'load');
            success && success(Vue)
            document.body.removeChild(scriptTag);
        };

        scriptTag.onerror = () => {
            setStatePlugin(plugins ,'failed_load');
        };
        
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.setAttribute('src', url);
        scriptTag.setAttribute('name', name);
        document.body.appendChild(scriptTag);

    }

}
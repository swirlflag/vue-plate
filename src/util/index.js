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
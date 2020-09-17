const curry = (f) => (a,..._) => {
    return _.length ? f(a,..._) : (..._) => f(a,..._);
};

const reduce = curry((f,acc,iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }else{
        iter = iter[Symbol.iterator]();
    }
    let cur;
    while(!(cur = iter.next()).done){
        const a = cur.value;
        acc = f(acc,a);
    }
    return acc;
});

const go = (...args) => {
    return reduce((a,f) => f(a),args);
};

const pipe = (f,...fs) => (...as) => {
    return go(f(...as),...fs)
};



export const pipe1 = pipe(
    a => a,
    a => a + 1,
    a => a + 10,
)

export const chaneApi = () => {
    
}

chaneApi()
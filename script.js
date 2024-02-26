const ball=document.querySelector('.ball');

const a=-3+(10**(-3));

const getBallBottom = ()=>{
    const {bottom}=getComputedStyle(ball);
  
    const bottomNumber=+bottom.replace('px','');

    return bottomNumber;
};

const getBallNewBottom=(S0,v,t)=>{
    console.log(S0);
    return S0+v+t+0.5*a*(t**2);
}

let v=0;

setInterval(()=>{
    const bottom = getBallBottom();
    const newBottom=getBallNewBottom(bottom,v,1);

    v+=a;

    ball.computedStyleMap.bottom=`${newBottom}px`;
},1);
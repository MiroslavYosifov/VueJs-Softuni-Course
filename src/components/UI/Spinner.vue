<template>
<section class="spinner">
    <section>
        <section class="spinner-container">
        <div class="wormholder">
            <div class="bubble head">
                <div class="eye eye_l">
                    <div class="dot"></div>
                </div>
                <div class="eye eye_r">
                    <div class="dot"></div>
                </div>
                <div class="nose"></div>
                <div class="mouth"></div>
            </div>
            <div class="bubble bubble1"></div>
            <div class="bubble bubble2"></div>
            <div class="bubble bubble3"></div>
            <div class="bubble bubble4"></div>
            <div class="bubble bubble5"></div>
            <div class="bubble bubble6"></div>
            <div class="bubble bubble7"></div>
            <div class="bubble bubble8"></div>
        </div>
        </section>
    </section>
</section>

</template>

<script>
export default {
  props: {

  },
  computed: {

  },
  methods: {
     
  },
};
</script>

<style>

.spinner {
    z-index: 99999999;
    position: fixed;
    top: 0; left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(48, 48, 48, 0.055);
}

.spinner section {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
}

.spinner-container {
    padding: 0;
    width: 160px;
    height: 120px;
    border-radius: 0.4em;
    background: var(--spiner-background);
    border: 1px solid var(--spinner-color);
}

.wormholder {
    position: absolute;
    width: 140px;
    position: relative;
    top: 60%; left: 55%;
    transform: translate(-50%, -50%);
}
    
    .bubble.head {
        width: 30px; height: 30px;
        border: 1px solid var(--spinner-color);
        border-radius: 50%;
        -webkit-animation: bubble_head 1s linear infinite;
        animation: bubble_head 1s linear infinite;
    }
        .eye {
            width: 5px; height: 8px;
            border: 1px solid var(--spinner-color);
            border-radius: 50%;
            -webkit-animation: eyes 4s linear infinite;
            animation: eyes 4s linear infinite;
        }
        .eye_l {
            position: absolute;
            left: 5px; top: 7px;
        }
        .eye_r {
            position: absolute;
            left: 15px; top: 7px;
        }
            .dot{
                width: 3px;
                height: 4px;
                background: var(--spinner-color);
                border-radius: 50%;
                top: 3px;
                position: relative;
            }
        .nose {
            position: absolute;
            left: 10px;
            top: 15px;
            width: 6px;
            height: 6px;
            background: var(--spinner-color);
            border-radius: 50%;
        }
        .mouth {
            position: absolute;
            left: 8px;
            top: 19px;
            width: 12px;
            height: 6px;
            border-radius: 50%;
            border: 1px solid transparent;
            border-bottom: 1px solid var(--spinner-color);
        }
    
    .bubble {
        width: 25px; height: 20px;
        border: 1px solid var(--spinner-color);
        border-radius: 50%;
        position: relative;
        
    }
        .bubble1 {
            border-top: 1px solid rgba(255,255,255,0);
            -webkit-animation: bubble1 1s linear infinite;
            animation: bubble1 1s linear infinite;
        }
        .bubble2 {
            border-top: 1px solid rgba(255,255,255,0);
            -webkit-animation: bubble2 1s linear infinite;
            animation: bubble2 1s linear infinite;
        }
        .bubble3 {
            
            border-top: 1px solid rgba(255,255,255,0);
            top: -37px; left: 27px;
            -webkit-transform: rotate(-70deg);
            transform: rotate(-70deg);

        }
        .bubble4 {
            border-top: 1px solid rgba(255,255,255,0);
            position: absolute;
            height: 17px;
            width: 25px;
            -webkit-animation: bubble4 1s linear infinite;
            animation: bubble4 1s linear infinite;
        }
        .bubble5 {
            border-left: 1px solid rgba(255,255,255,0);
            position: absolute;
            height: 25px; width: 19px;
            -webkit-animation: bubble5 1s linear infinite;
            animation: bubble5 1s linear infinite;
        }
        .bubble6 {
            border-left: 1px solid rgba(255,255,255,0);
            position: absolute;
            height: 25px; width: 17px;
            -webkit-animation: bubble6 1s linear infinite;
            animation: bubble6 1s linear infinite;
        }
        .bubble7 {
            border-left: 1px solid rgba(255,255,255,0);
            position: absolute;
            height: 25px;
            width: 18px;
            -webkit-animation: bubble7 1s linear infinite;
            animation: bubble7 1s linear infinite;
        }
        .bubble8 {
            border-left: 1px solid rgba(255,255,255,0);
            position: absolute;
            height: 25px;
            width: 19px;
            -webkit-animation: bubble8 1s linear infinite;
            animation: bubble8 1s linear infinite;
        }
    @-webkit-keyframes bubble_head {
        0%   {top: -3px; left: 9px;}
        50%  {top: -3px; left: 0px;}
        100% {top: -3px; left: 9px;}
    }
    @keyframes bubble_head {
        0%   {top: -3px; left: 9px;}
        50%  {top: -3px; left: 0px;}
        100% {top: -3px; left: 9px;}
    }
    
    @-webkit-keyframes eyes {
        0%  { background: transparent;}
        87% { background: transparent;}
        88% { background: var(--spinner-color);}
        92% { background: transparent;}
    }
    @keyframes eyes {
        0%  { background: transparent;}
        87% { background: transparent;}
        88% { background: var(--spinner-color);}
        92% { background: transparent;}
    }
    
    @-webkit-keyframes bubble1 {
        0%   {top: -10px; left: 11px;  -webkit-transform: rotate(0deg);}
        50%  {top: -10px; left: 7px;  -webkit-transform: rotate(-20deg);}
        100% {top: -10px; left: 11px; -webkit-transform: rotate(0deg);}
    }
    @keyframes bubble1 {
        0%   {top: -10px; left: 11px; transform: rotate(0deg);}
        50%  {top: -10px; left: 7px;  transform: rotate(-20deg);}
        100% {top: -10px; left: 11px; transform: rotate(0deg);}
    }
    @-webkit-keyframes bubble2 {
        0%   {top: -19px; left: 16px; -webkit-transform: rotate(-20deg);}
        50%  {top: -19px; left: 16px; -webkit-transform: rotate(-40deg);}
        100% {top: -19px; left: 16px; -webkit-transform: rotate(-20deg);}
    }
    @keyframes bubble2 {
        0%   {top: -19px; left: 16px; transform: rotate(-20deg);}
        50%  {top: -19px; left: 16px; transform: rotate(-40deg);}
        100% {top: -19px; left: 16px; transform: rotate(-20deg);}
    }
    @-webkit-keyframes bubble4 {
        0%   {top: 36px; left: 39px;  -webkit-transform: rotate(-96deg);}
        50%  {top: 40px; left: 41px;  -webkit-transform: rotate(-76deg);}
        100% {top: 36px;left: 39px; -webkit-transform: rotate(-96deg);}
    }
    @keyframes bubble4 {
        0%   {top: 36px; left: 39px;  transform: rotate(-96deg);}
        50%  {top: 40px; left: 41px; transform: rotate(-76deg);}
        100% {top: 36px;left: 39px; transform: rotate(-96deg);}
    }
     @-webkit-keyframes bubble5 {
        0%   {top: 28px;left: 53px; -webkit-transform: rotate(-9deg);}
        50%  {top: 40px;left: 57px; -webkit-transform: rotate(10deg);}
        100% {top: 28px;left: 53px; -webkit-transform: rotate(-9deg);}
    }
    @keyframes bubble5 {
        0%   {top: 28px;left: 53px; transform: rotate(-9deg);}
        50%  {top: 40px;left: 57px; transform: rotate(10deg);}
        100% {top: 28px;left: 53px; transform: rotate(-9deg);}
    }
    @-webkit-keyframes bubble6 {
        0%   {top: 34px;left: 65px; -webkit-transform: rotate(12deg);}
        50%  {top: 40px;left: 71px; -webkit-transform: rotate(0deg);}
        100% {top: 34px;left: 65px; -webkit-transform: rotate(12deg);}
    }
    @keyframes bubble6 {
        0% {top: 34px;left: 65px; transform: rotate(12deg);}
        50% {top: 40px;left: 71px; transform: rotate(0deg);}
        100% {top: 34px;left: 65px; transform: rotate(12deg);}
    }
    @-webkit-keyframes bubble7 {
        0%   {top: 39px;left: 76px; -webkit-transform: rotate(20deg);}
        50%  {top: 40px;left: 84px; -webkit-transform: rotate(0deg);}
        100% {top: 39px;left: 76px; -webkit-transform: rotate(20deg);}
    }
    @keyframes bubble7 {
        0%   {top: 39px;left: 76px; transform: rotate(20deg);}
        50%  {top: 40px;left: 84px; transform: rotate(0deg);}
        100% {top: 39px;left: 76px; transform: rotate(20deg);}
    }
    @-webkit-keyframes bubble8 {
        0%   {top: 39px;left: 89px; -webkit-transform: rotate(9deg);}
        50%  {top: 40px;left: 99px; -webkit-transform: rotate(0deg);}
        100% {top: 39px;left: 89px; -webkit-transform: rotate(9deg);}
    }
    @keyframes bubble8 {
        0%   {top: 39px;left: 89px; transform: rotate(9deg);}
        50%  {top: 40px;left: 99px; transform: rotate(0deg);}
        100% {top: 39px;left: 89px; transform: rotate(9deg);}
    }
</style>
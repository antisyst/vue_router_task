<template>
    <div class="showcase">
        <h1>
            Be the first who <br>
            Find Out Phone NUmber <br> Change_
        </h1>
        <div class="brand_container">
            <div>
                <h2>Trusted by</h2><h1>16</h1><h2>Dealers</h2>
            </div>
           <div>
             <img src="../assets/images/kennyross.svg" alt="">
           </div>
           <div>
             <img src="../assets/images/kia.svg" alt="">
           </div>
           <div>
             <img src="../assets/images/cochran.svg" alt="">
           </div>
           <div>
             <img src="../assets/images/honda.svg" alt="">
           </div>
           <div>
             <img src="../assets/images/ohio.svg" alt="">
           </div>
        </div>
        <div class="carousel_toggle">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.showcase {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 140vh;
        justify-content: space-around;

        @media only screen and (max-width: 1000px) {
            height: 130vh;
            justify-content: space-evenly;
            border-radius: 24px 24px 0px 0px;
            border-top: 2px solid #1B3D5E;
            border-right: 1px solid #1B3D5E;
            border-left: 1px solid #1B3D5E;
        }

        
        h1 {
            line-height: 116px; 
            text-transform: uppercase;
            text-align: center;
            word-break: inherit;
            font-weight: 900;
            color: var(--color-white);
            font-size: 65px;

            @media only screen and (max-width: 1000px) {
                font-size: 36px;
                line-height: 40px;
          } 
        }
        .carousel_toggle {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-top: -140px;
            gap: 7px;

            @media only screen and (max-width: 1000px)  {
               margin-top: -50px;
            }

            div {
                border-radius: 50%;
                cursor: pointer;
                width: 12px;
                height: 12px;
                background: rgba(255, 255, 255, 0.16);


                &:nth-child(1) {
                    background: var(--color-main);

                @media only screen and (max-width: 1000px) {
                    background: var(--color-white);
                }
                }
            }

        }
        .brand_container {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 7vh;
            padding: 0 13%;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;

            @media only screen and (max-width: 1000px) {
                padding: 0 1%;
                margin-top: 2vh;
            }

            div {
                display: flex;
                flex-direction: column;
                text-align: center;
                border-radius: 20px;
                font-weight: bold;
                width: 31%;
                color: var(--color-white);
                background: var(--color-gradient);
                height: 240px;
                text-transform: uppercase;
                align-items: center;
                justify-content: center;

                @media only screen and (max-width: 1000px) {
                    width: 48%;

                    height: 200px;

                    img {
                        width: 55%;
                    }

                }

                h2 {
                    font-weight: 900;
                    text-align: center;
                    margin: 16px 0;
                    font-size: 20px;
                }
                h1 {
                    font-size: 90px;
                    text-align: center;

                    @media only screen and (max-width: 1000px) {
                        font-size: 50px;
                    }
                }
            }
        }
    }
</style>
<script scoped>

</script>
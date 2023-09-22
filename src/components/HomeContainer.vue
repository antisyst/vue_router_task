<template>
   <div class="content_flex">
    <h1 class="first_content">
        Powerful monitor <br> of your dealer <br> infestruction
    </h1>
    <div class="marks_container">
         <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ec0fd47-f585-4e2b-9f76-ade5aab9c57c?"
      class="img"
    />
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d01b8b4-1c4c-4ff7-904e-de1a4f0955da?"
      class="img"
    />
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e8697f7b-3671-45f5-b15a-af374f7a6e41?"
      class="img"
    />
    </div>
   </div>
</template>
<style scoped lang="scss">
    .content_flex {
        margin-top: 15vh;
        text-align: center;

        @media only screen and (max-width: 1000px) {
           margin-top: 7vh;
        }
    }
    .marks_container {
        width: 100%;
        margin-top: 17vh;
        max-width: 1900px;
        display: flex;
        gap: 15px;
        flex-direction: column;

        @media only screen and (max-width: 1000px) {
          margin-top: 13vh;
          gap: 67px;
        }

        img {
            aspect-ratio: 8.56;
            object-fit: cover;
            object-position: center;
            overflow: hidden;
            width: 100%;
            margin-left: 1px;
            align-self: stretch;

            @media only screen and (max-width: 600px) {
                transform: scale(2.3);
            }

            @media (max-width: 991px) {
                margin-left: 1px;
           }
        }
    }
    @media (max-width: 991px) {
    .img {
        margin-left: 1px;
    }
    }
</style>
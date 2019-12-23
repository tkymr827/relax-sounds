<template>
    <div id="app">
        <main v-bind:style="bgi">
            <!-- <img :src="bgi"> -->
            <div class="content">
                <h1>Relax Sounds</h1>
                <h2 v-if="saisyo==true">PCスペックによっては読み込み遅いかも?..</h2>
                <ul>
                    <li v-on:click="mode(0)">Forest</li>
                    <li v-on:click="mode(1)">Fire Place</li>
                    <li v-on:click="mode(2)">Rainy</li>
                </ul>
                <div class="play">
                    <font-awesome-icon v-if="audio === false" @click="play" class="icon" icon="play-circle"/>
                    <font-awesome-icon v-else @click="pause" class="icon" icon="pause-circle"/>
                </div>
                <audio v-bind:src="bgm" v-if="audio == true" loop autoplay></audio>
            </div>
        </main>
    </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      images: [
        './assets/forest.jpg',
        './assets/fireplace.jpg',
        './assets/rainy.jpg'
      ],
      audio: true,
      bgi: '',
      forest: {
        backgroundImage: 'URL(' + require('./assets/forest.jpg') + ')'
      },
      fireplace: {
        backgroundImage: 'URL(' + require('./assets/fireplace.jpg') + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom -200pt'
      },
      rainy: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'URL(' + require('./assets/rainy.jpg') + ')'
      },
      bgm: '',
      bgms: [
        require('./assets/forest.mp3'),
        require('./assets/fireplace.mp3'),
        require('./assets//rainy.mp3')
      ],
      saisyo: true
    }
  },
  methods: {
    play: function () {
      this.audio = true
      console.log(this.audio)
    },
    pause: function () {
      this.audio = false
    },
    mode: function (number) {
      this.saisyo = false
      switch (number) {
        case 0:
          this.bgi = this.forest
          this.bgm = this.bgms[0]
          break
        case 1:
          this.bgi = this.fireplace
          this.bgm = this.bgms[1]
          break
        case 2:
          this.bgi = this.rainy
          this.bgm = this.bgms[2]
          break
      }
    }
  }
}
</script>

<style lang="scss">
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    font-family: 'Chewy', cursive;

}
main{
    padding-top:40rem;
    background:#2e2e2e;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color:#fff;
    .content{
        h1{
            font-size:10rem;
            margin-top:-40rem;
            text-align: center;
        }
        ul{
            display: flex;
            justify-content: space-between;
            margin-top:10rem;
            @media screen and (max-width:1500px){
                display: flex;
                align-items: center;
                flex-direction: column;
            }
            li{
                list-style: none;
                font-size:4rem;
                border-radius: 50%;
                border:#fff .5rem solid;
                line-height: 10rem;
                padding:0 4rem;
                margin:0 4rem;
                cursor: pointer;
                @media screen and (max-width:1500px){
                    margin-top:2rem;
                }
                &:nth-child(1):hover{
                    background: url("./assets/forest.jpg")center center / cover no-repeat;
                    transform: scale(1.2);
                }
                &:nth-child(2):hover{
                    transform: scale(1.2);
                    background: url("./assets/fireplace.jpg")center bottom / cover no-repeat;
                }
                &:nth-child(3):hover{
                    transform: scale(1.2);
                    background: url("./assets/rainy.jpg")center center / cover no-repeat;
                }
            }
        }
    }
    .play{
        font-size:8rem;
        text-align: center;
        .icon{
            // padding:5rem 2rem;
            margin:3rem 3rem;
            cursor: pointer;
            &:hover{
                transform: scale(1.2);
            }
        }
    }
}
</style>

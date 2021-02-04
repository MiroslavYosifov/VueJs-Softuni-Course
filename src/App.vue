<template>
   <div id="app">
    <div class="counter">
      <h1>
        50
      </h1>
    </div>
    <section class="memory-game">
      <div @click="flipCard($event)" v-bind:class="{'memory-card': true, 'disable-card': card.isFliped }"  
        v-for="(card, index) in cardsDataFrontFace" 
        v-bind:key="index"  
        v-bind:data-framework="card.elementType"
        v-bind:index="index">
            <template v-if="card.isFliped">
              <img class="front-face" 
                v-bind:src="card.imageUrl" 
                v-bind:alt="card.imageAlt" />
            </template>
            <template v-else>
              <img class="back-face" 
                v-bind:src="cardBackFace.imageUrl" 
                v-bind:alt="cardBackFace.imageUrl" />
            </template>
      </div>
    </section>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      guessedCards: 0,
      currentFlippedCards: [],
      cardBackFace: { imageUrl: "img/js-badge.svg", imageAlt: "Js-badge", isFliped: false },
      cardsDataFrontFace: [ { index: 0, elementType: "react", imageUrl: "img/react.svg", imageAlt: "React", isFliped: false },
                  { index: 1, elementType: "backbone", imageUrl: "img/backbone.svg", imageAlt: "Backbone", isFliped: false},
                  { index: 2, elementType: "ember", imageUrl: "img/ember.svg", imageAlt: "Ember", isFliped: false},
                  { index: 3, elementType: "angular", imageUrl: "img/angular.svg", imageAlt: "Angular", isFliped: false},
                  { index: 4, elementType: "vue", imageUrl: "img/vue.svg", imageAlt: "Vue", isFliped: false},
                  { index: 5, elementType: "aurelia", imageUrl: "img/aurelia.svg", imageAlt: "Aurelia", isFliped: false},
                  { index: 6, elementType: "react", imageUrl: "img/react.svg", imageAlt: "React", isFliped: false },
                  { index: 7, elementType: "backbone", imageUrl: "img/backbone.svg", imageAlt: "Backbone", isFliped: false},
                  { index: 8, elementType: "ember", imageUrl: "img/ember.svg", imageAlt: "Ember", isFliped: false},
                  { index: 9, elementType: "angular", imageUrl: "img/angular.svg", imageAlt: "Angular", isFliped: false},
                  { index: 10,elementType: "vue", imageUrl: "img/vue.svg", imageAlt: "Vue", isFliped: false},
                  { index: 11,elementType: "aurelia", imageUrl: "img/aurelia.svg", imageAlt: "Aurelia", isFliped: false} ]
    }
  },
  watch: {
    guessedCards: function(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
      if(newValue === 12) {
        alert("Game is over! Start a new one?");
      }

      console.log('i am here');
    }
  },
  methods: {
    
    flipCard(event) {
      const currentElementId = Number(event.currentTarget.attributes["index"].value);
      this.currentFlippedCards.push(this.cardsDataFrontFace[currentElementId]);
      this.cardsDataFrontFace[currentElementId].isFliped = true;
      if(this.currentFlippedCards.length > 1 && this.currentFlippedCards[0].elementType === this.currentFlippedCards[1].elementType) {
        this.currentFlippedCards = [];
        this.guessedCards +=  2;
      } else if(this.currentFlippedCards.length === 2 && this.currentFlippedCards[0].elementType !== this.currentFlippedCards[1].elementType) {
        setTimeout(() => {
          this.cardsDataFrontFace[this.currentFlippedCards[0].index].isFliped = false;
          this.cardsDataFrontFace[this.currentFlippedCards[1].index].isFliped = false;
          this.currentFlippedCards = [];
        }, 800);
       
      }

      // if(event.currentTarget.childNodes[1].style.display === "none") {
      //   event.currentTarget.childNodes[1].style.display = "block";
      //   event.currentTarget.childNodes[0].style.display = "none";
      // } else {
      //   event.currentTarget.childNodes[1].style.display = "none";
      //   event.currentTarget.childNodes[0].style.display = "block";
      // }

    }
  },
  computed: {

  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}


#app {
  width: 100%;
  padding: 7%;
}
.memory-game {
  width: 640px;
  height: 640px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
}

.memory-card {
  width: calc(25% - 10px);
  height: calc(33.333% - 10px);
  margin: 5px;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform .5s;
  box-shadow: 1px 1px 1px rgba(0,0,0,.3);
}

.disable-card {
  pointer-events: none;
}

.memory-card:active {
  transform: scale(0.97);
  transition: transform .2s;
}

.memory-card.flip {
  transform: rotateY(180deg);
}

.front-face,
.back-face {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  background: #FFF29E;
  backface-visibility: hidden;
}

.front-face {
  transform: rotateY(0deg);
}

.counter {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>

<template>
  <ul class="star" :class="starType">
    <li v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></li>
  </ul>
</template>

<script>
  const LEN = 5;
  const CLS_ON = "on";
  const CLS_half = "half";
  const CLS_off = "off";

  export default {
    name: "star",
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return "star-" + this.size;
      },
      itemClasses() {
        let res = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let interger=Math.floor(score);
        console.log(score,score % 1, score % 1 !== 0);
        for(let i=0;i<interger;i++){
          res.push("on");
        }
        if(hasDecimal) res.push("half");
        while(res.length<LEN){
          res.push("off");
        };
        console.log(res);
        return res;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .star {
    .star-item {
      display: inline-block;
    }
    &.star-48 {
      .star-item {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg-image("./images/star48_on");
        }
        &.half {
          @include bg-image("./images/star48_half");
        }
        &.off {
          @include bg-image("./images/star48_off");
        }
      }
    }
    &.star-36 {
      .star-item {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg-image("./images/star36_on");
        }
        &.half {
          @include bg-image("./images/star36_half");
        }
        &.off {
          @include bg-image("./images/star36_off");
        }
      }
    }
    &.star-24 {
      .star-item {
        width: 10px;
        height: 10px;
        margin-right: 3px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          @include bg-image("./images/star24_on");
        }
        &.half {
          @include bg-image("./images/star24_half");
        }
        &.off {
          @include bg-image("./images/star24_off");
        }
      }
    }
  }
</style>

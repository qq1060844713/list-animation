<template>
  <div class="similarity">
    <div class="circle" :style="$constants.circleStyle">
      <div class="obtuse_left" :style="$constants.clipObtuseStyle+$constants.shadowColor" v-if="percent>50">
        <div class="obtuse_right" :style="$constants.clipObtuseStyle+'background:linear-gradient(360deg,rgb(255,'+(180+rotateAngle)+',0),rgb(255,190,0) '+5*rotateAngle/9+'%, rgb(255,'+(rotateAngle)+',0));transform:rotate('+rotateAngle+'deg);'"></div>
      </div>
      <div v-else>
        <div class="obtuse_left" :style="$constants.clipObtuseStyle+$constants.shadowColor"></div>
        <div class="acute_left" :style="$constants.clipAcuteStyle+$constants.shadowColor">
          <div class="acute_right" :style="$constants.clipAcuteStyle+'transform:rotate('+rotateAngle+'deg);'"></div>
        </div>
      </div>
      <div class="circle_text" :style="$constants.textStyle">{{percent}}%</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'circular-similarity',
  props:{
    value:{
      type:Number,
      default:0,
      validator: function (value) {
        return value >= 0 && value <=1;
      }
    },
    diameter:{
      type:String,
      default:'70px'
    },
    fontSize:{
      type:String
    },
    bgColor:{
      type:String,
    },
    shadowColor:{
      type:String,
    },
    color:{
      type:String,
    },
    theme:{
      type:String,
      default:'white'
    },
  },
  created:function(){
    let theme={
      white:{shadowColor:'#EEE',bgColor:'#FFF',color:'#333'},
      blue:{shadowColor:'#33bbff',bgColor:'rgb(13, 49, 117)',color:'#FFF'}
    };
    let shadowColor=this.shadowColor?this.shadowColor:theme[this.theme]?theme[this.theme].shadowColor:theme.white.shadowColor;
    let bgColor=this.bgColor?this.bgColor:theme[this.theme]?theme[this.theme].bgColor:theme.white.bgColor;
    let color=this.color?this.color:theme[this.theme]?theme[this.theme].color:theme.white.color;
    this.$constants={
      clipObtuseStyle:'clip: rect(0,auto,auto,calc('+this.diameter+' / 2));',
      clipAcuteStyle:'clip: rect(0,calc('+this.diameter+' / 2),auto,0);',
      textStyle:'width:calc(0.9 * '+this.diameter+');height:calc(0.9 * '+this.diameter+');line-height:calc(0.9 * '+this.diameter+');background-color:'+bgColor+';color:'+color+';font-size:'+(this.fontSize?this.fontSize:'calc('+this.diameter+' / 3.5)')+';',
      circleStyle:'width:'+this.diameter+';height:'+this.diameter+';padding-top:calc('+this.diameter+'/ 20);',
      shadowColor:'background-color:'+shadowColor+';',
    }
  },
  data() {
    return{
    }
  },
  computed:{
    percent:function () {
      return this.value>=0&&this.value<=1?parseInt(this.value*100):0;
    },
    rotateAngle:function () {
      let auxiliaryAngle=(100-this.percent)*3.6;
      return auxiliaryAngle>=180?(auxiliaryAngle-180):auxiliaryAngle;
    }
  },
  methods: {

  },
  mounted:function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .similarity{
    display: inline-block;
  }
  .circle{
    width: 3.5vw;
    height: 3.5vw;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: .15vw;
    text-align: center;
    background: linear-gradient(0deg,rgb(255,180,0), rgb(255,240,0));
    border-radius: 50%;
    position: relative;
    .obtuse_left , .acute_left , .obtuse_right , .acute_right{ width:100%; height:100%; border-radius:50%; position:absolute; left:0; top:0;}
    .obtuse_left , .acute_left{ background-color:#eee;}
    .obtuse_left{
      /*box-shadow:0 0 2px 0px #ffaa02 inset;*/
    }
    .obtuse_right{ background: linear-gradient(360deg,#fbc604, #fb9204);}
    .acute_right{ background: linear-gradient(to bottom,#e7f608, #fbc604);}
    .obtuse_left , .obtuse_right{clip: rect(0,auto,auto,1.75vw);}
    .acute_left , .acute_right{clip: rect(0,1.75vw,auto,0);}
    .circle_text{
      width: 3.2vw;
      height: 3.2vw;
      line-height: 3.2vw;
      box-sizing: border-box;
      /* padding-left: 10px; */
      margin: 0 auto;
      color: #fff;
      font-size: .9vw;
      background-color: #012265;
      border-radius: 50%;
      position: relative;
    }

  }





</style>

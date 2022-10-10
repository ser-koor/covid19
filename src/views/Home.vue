<template>
  <div class="home">
    <Header/>
    <CovInfo :covDesc="covDesc"/>
    <hr>
    <CaseNum :caseNumData="caseNumData"></CaseNum>
    <Map></Map>
    <Swiper/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import CovInfo from '@/components/CovInfo'
import CaseNum from '@/components/CaseNum'
import Map from '@/components/common/map/Map'
import Swiper from '@/components/common/swiper/Swiper'

import { getNcov } from '@/api/api.js'

export default {
  name: 'Home',
  components: {
    Header,
    CovInfo,
    CaseNum,
    Map,
    Swiper
  },
  data() {
    return {
      covDesc: {
        note1: '',
        note2: '',
        note3: '',
        remark1: '',
        remark2: '',
        remark3: '',
      },
      caseNumData: {
        modifyTime: '',//时间戳
        currentConfirmedCount: '',//	现存确诊人数
        confirmedCount: '',//累计确诊人数
        suspectedCount: '',//	累计境外输入人数
        curedCount: '',//累计治愈人数
        deadCount: '',//累计死亡人数
        seriousCount: '',//	现存无症状人数
        currentConfirmedIncr: '',
        confirmedIncr: '',
        curedIncr: '',
        deadIncr: '',
        seriousIncr: '',
        yesterdayConfirmedCountIncr: '',
      }
    }
  },
  created() {
   getNcov({key:'812521f11a321be362568d546f3ca471'})
    .then(res => {
      // console.log(res.data.newslist[0]);
      if (res.status === 200) {
        let data = res.data.newslist[0].desc;
        if (data.note1) {
          this.covDesc = {
            note1:data.note1,
            note2:data.note2,
            note3:data.note3,
            remark1:data.remark1,
            remark2:data.note2,
            remark3:data.note3,
          }
        } else {
          this.covDesc = {
            note1:'易感人群：人群普遍易感。老年人及有基础疾病感染后病情较重，儿童及婴儿也有发病',
            note2:'潜伏期：一般为3~7天，最长不超过14天，潜伏期内可能存在传染性，其中无症状病例传染性非常罕见',
            note3:'宿主：野生动物，可能为中华菊头蝠',
            remark1:'病毒：SARS-CoV-2，其导致疾病命名COVID-19',
            remark2:'传染源：新冠肺炎的患者。无症状感染者也可能成为传染源',
            remark3:'传播途径：经呼吸道飞沫。接触传播是主要的传播途径。气溶胶传播和消化道传播途径尚待明确',
          }
        }
        this.caseNumData.modifyTime = data.modifyTime;
        this.caseNumData.currentConfirmedCount = data.currentConfirmedCount;
        this.caseNumData.confirmedCount = data.confirmedCount;
        this.caseNumData.suspectedCount = data.suspectedCount;
        this.caseNumData.curedCount = data.curedCount;
        this.caseNumData.deadCount = data.deadCount;
        this.caseNumData.seriousCount = data.seriousCount;
        this.caseNumData.currentConfirmedIncr = data.currentConfirmedIncr;
        this.caseNumData.confirmedIncr = data.confirmedIncr;
        this.caseNumData.curedIncr = data.curedIncr;
        this.caseNumData.deadIncr = data.deadIncr;
        this.caseNumData.seriousIncr = data.seriousIncr;
        this.caseNumData.yesterdayConfirmedCountIncr = data.yesterdayConfirmedCountIncr;
        //通过bus传递数据
        // this.$bus.$emit('caseNumData', this.caseNumData)
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
.home {
  overflow: hidden;
}
</style>
<template>
  <div class="casenum wrap">
    <div class="title">病例数据</div>
    <p class="time">截至 {{getTime}} 全国数据统计</p>
    <CaseNumList>
      <CaseNumItem :covnum="one"></CaseNumItem>
      <CaseNumItem :covnum="two"></CaseNumItem>
      <CaseNumItem :covnum="three"></CaseNumItem>
      <CaseNumItem :covnum="four"></CaseNumItem>
      <CaseNumItem :covnum="five"></CaseNumItem>
      <CaseNumItem :covnum="six"></CaseNumItem>
    </CaseNumList>
  </div>
</template>

<script>
import CaseNumList from '@/components/common/covInfo/CaseNumList'
import CaseNumItem from '@/components/common/covInfo/CaseNumItem'

export default {
  name: 'CaseNum',
  components: {
    CaseNumList,
    CaseNumItem
  },
  data() {
    return {
      one: {
        news: '',
        num: '',
        text: '现在确诊'
      },
      two: {
        news: '',
        num: '',
        text: '累计确诊'
      },
      three: {
        news: '',
        num: '',
        text: '累计境外输入'
      },
      four: {
        news: '',
        num: '',
        text: '累计治愈'
      },
      five: {
        news: '',
        num: '',
        text: '累计死亡'
      },
      six: {
        news: '',
        num: '',
        text: '现在无症状'
      },
      caseNumData1: {}
    }
  },
  props: {
    caseNumData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    caseNumData1: {
      handler(v1) {
        this.one.news = v1.currentConfirmedIncr;
        this.one.num = v1.currentConfirmedCount;
        this.two.news = v1.confirmedIncr;
        this.two.num = v1.confirmedCount;
        this.three.news = v1.curedIncr;
        this.three.num = v1.suspectedCount;
        this.four.news = v1.deadIncr;
        this.four.num = v1.curedCount;
        this.five.news = v1.seriousIncr;
        this.five.num = v1.deadCount;
        this.six.news = v1.yesterdayConfirmedCountIncr;
        this.six.num = v1.seriousCount;
      },
      deep: true
    }
  },
  created() {
    // console.log('1',this.caseNumData);
    this.caseNumData1 = this.caseNumData
    // this.one.news = this.caseNumData.currentConfirmedIncr;
    // this.one.num = this.caseNumData.currentConfirmedCount;
    // this.two.news = this.caseNumData.confirmedIncr;
    // this.two.num = this.caseNumData.confirmedCount;
    // this.three.news = this.caseNumData.curedIncr;
    // this.three.num = this.caseNumData.suspectedCount;
    // this.four.news = this.caseNumData.deadIncr;
    // this.four.num = this.caseNumData.curedCount;
    // this.five.news = this.caseNumData.seriousIncr;
    // this.five.num = this.caseNumData.deadCount;
    // this.six.news = this.caseNumData.yesterdayConfirmedCountIncr;
    // this.six.num = this.caseNumData.seriousCount;
  },
  computed: {
    getTime() {
      let date = new Date(this.caseNumData.modifyTime)
      let YY = date.getFullYear() + '-';
      let MM = (date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1) + '-';
      let DD = (date.getDay() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      return YY + MM + DD + hh + mm
    }
  }
}
</script>

<style lang="less" scoped>
.time {
  padding: 0 0 0.6rem 0;
}
</style>
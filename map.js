const ENABLE_DRAG = false;         // 是否启用热点拖拽（调试用）
const ENABLE_DEBUG_BOX = false;   // 是否显示红色调试框（CSS: body.debug .hotspot）

// map.js - 校园地图页脚本（保留原来的调试/拖拽/高亮/音效/Esc 等功能）
document.addEventListener("DOMContentLoaded", () => {
      // ✅ 红框调试开关：开启时给 body 加 debug 类
  // ====== 红框调试开关 ======
if (ENABLE_DEBUG_BOX) {
  document.body.classList.add("debug");
} else {
  document.body.classList.remove("debug");
}

// ====== 拖拽光标开关 ======
if (ENABLE_DRAG) {
  document.body.classList.add("drag-enabled");
} else {
  document.body.classList.remove("drag-enabled");
}

  const HOTSPOT_DATA = [
 {
    id: 72,
    title: "主体育场",
    description: "位于南开大学津南校区体育部区域，是校园内主要的田径及大型体育活动场地之一。该体育场包括一个带看台的400米标准跑道和足球场，供校学生体质测试、田径比赛、足球赛、校运会等使用。",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 55.05, top: 28.93, width: 3.5, height: 3
  },
  {
    id: 71,
    title: "学生活动中心",
    description: "南开大学学生活动中心 通常指校内专为学生组织社团活动、文化交流、会议及各类文体活动的场所，具有丰富的校园生活功能。",
    images: [
      "assets/71.jpg",
      
    ],
    left: 58.28, top: 38.87, width: 3.5, height: 3
  },
  {
    id: 70,
    title: "东园",
    description: "一个公园，中间有个湖",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 63.66, top: 39.35, width: 3.5, height: 3
  },
  {
    id: 69,
    title: "学院组团",
    description: "许多学院楼的位置",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 65.09, top: 46.14, width: 3.5, height: 3
  },
  {
    id: 68,
    title: "学生四食堂",
    description: "师生用餐的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 63.12, top: 52.2, width: 3.5, height: 3
  },
  {
    id: 67,
    title: "学生宿舍",
    description: "学生休息的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 67.96, top: 58.02, width: 3.5, height: 3
  },
  {
    id: 66,
    title: "体育馆",
    description: "南开大学体育馆是南开大学体育部管理下的重要室内体育场馆之一，用于体育教学、日常运动训练、比赛和各类校园活动。",
    images: [
      "assets/66.jpg",
      
    ],
    left: 49.31, top: 29.67, width: 3.5, height: 3
  },
  {
    id: 65,
    title: "基础实验楼",
    description: "学生做实验的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 52.36, top: 35, width: 3.5, height: 3
  },
  {
    id: 64,
    title: "综合实验楼",
    description: "南开大学综合实验楼 是南开大学校园内用于科学实验教学与科研的重要实验建筑之一。它在校园实验资源与科研活动体系中承担着关键角色。",
    images: [
      "assets/64.jpg",
      
    ],
    left: 53.26, top: 42.27, width: 3.5, height: 3
  },
  {
    id: 63,
    title: "公共教学楼",
    description: "南开大学公共教学楼 是南开大学校园内主要的教学活动场所之一，承担大型公共课程、课堂教学、讲座活动等教学功能。南开大学在多个校区均设有教学楼，但“公共教学楼”通常指位于津南校区的主要综合教学建筑群。",
    images: [
      "assets/62.jpg",
      
    ],
    left: 45.91, top: 37.42, width: 3.5, height: 3
  },
  {
    id: 62,
    title: "公共教学楼",
    description: "南开大学公共教学楼 是南开大学校园内主要的教学活动场所之一，承担大型公共课程、课堂教学、讲座活动等教学功能。南开大学在多个校区均设有教学楼，但“公共教学楼”通常指位于津南校区的主要综合教学建筑群。",
    images: [
      "assets/62.jpg",
     
    ],
    left: 45.91, top: 42.02, width: 3.5, height: 3
  },
  {
    id: 59,
    title: "周恩来总理像",
    description: "周恩来总理的雕像",
    images: [
      "assets/59.jpg",
      
    ],
    left: 49.49, top: 54.14, width: 3.5, height: 3
  },
  {
    id: 61,
    title: "图书馆",
    description: "南开大学津南校区图书馆是南开大学图书馆体系中的中心馆，于津南校区建设阶段同步建设并于2015 年投入使用，是新校区核心学术与学习空间。",
    images: [
      "assets/61.webp",
      
    ],
    left: 49.67, top: 46.87, width: 3.5, height: 3
  },
  {
    id: 60,
    title: "综合业务楼（东楼）",
    description: "师生处理各种业务的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 54.15, top: 50.02, width: 3.5, height: 3
  },
  {
    id: 58,
    title: "综合业务楼（西楼）",
    description: "师生处理各种业务的地方",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 45.37, top: 50.5, width: 3.5, height: 3
  },
  {
    id: 57,
    title: "陶园",
    description: "一块绿化景观",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 57.74, top: 59.23, width: 3.5, height: 3
  },
  {
    id: 56,
    title: "铸园",
    description: "一块绿化景观，内有一块“我是爱南开的”纪念碑",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 40.35, top: 58.75, width: 3.5, height: 3
  },
  {
    id: 55,
    title: "文科学生宿舍（研究生）",
    description: "学生们休息的地方。",
    images: [
      "assets/buildings/tennis-1.jpg",
      "assets/buildings/tennis-2.jpg",
    ],
    left: 41.43,
    top: 26.52,
    width: 3.5,
    height: 3
  },
 
 
 
 {
  id: 1,
  title: "1：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 7.9,
  top: 48.8,
  width: 4,
  height: 5
},
{
  id: 2,
  title: "2：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 11.4,
  top: 45.6,
  width: 3.6,
  height: 3.6
},
{
  id: 3,
  title: "3：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 14,
  top: 43,
  width: 4,
  height: 3
},
 
 {
  id: 4,
  title: "4：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 15,
  top: 39.1,
  width: 3,
  height: 3
},
{
  id: 5,
  title: "5：学院楼（规划中）",
  description: `<p>尚未建成，敬请期待。</p>`,
  left: 12.2,
  top: 50,
  width: 4,
  height: 5.5
},


  {
  id: 6,
  title: "6：动物中心",
  description: `
<p> 
  南开大学津南校区实验动物中心建筑面积5500平方米，自2014年9月主体结构封顶以来，
经过屏障设施建设、实验室硬件建设及专业技术人员队伍建设，截至2019年初获批
天津市实验动物生产许可证、实验动物使用许可证。
</p>

<p>
现已基本能够满足承接全校各学院的实验动物饲养需求。
中心可容纳108笼普通豚鼠/兔、20头犬/猪，864笼SPF大鼠，
8160笼SPF小鼠的日常饲养及实验需求。
</p>

<p>
中心同时设有动物胚胎实验区、动物细胞实验区，并配备专业技术人员，
可提供胚胎净化、保种等多项技术服务。
</p>

<p>
中心屏障设施实行自动化、智能化监控，对包括温度、湿度、压力差、
净化水、净化空气、送风、排风、照明、紫外灯等参数指标实行在线监控，
配备三级智能门禁、安防系统，保证实验动物的生活环境稳定，
并给予动物人文关怀，注重实验动物福利，
保障动物实验的稳定性、准确性、科学性。
</p>

<p>
实验动物中心是一所综合性大学重要的公共技术服务平台，
是保障学校教学和科研全面均衡发展的重要支持机构。
我校医学、药学、生命科学、化学等相关学科发展迅猛，
教学和科研中越来越重视对实验动物的应用，
本中心能大力支持医学院、药学院、生命科学学院、
化学院和药物化学生物学国家重点实验室等相关学院
教学科研的持续发展。
</p>

<img src="assets/6 Laboratory Animal Center.jpg" alt="实验动物中心">
`,
  left: 15.19,
  top: 53.1,
  width: 3,
  height: 4
},

  {
  id: 7,
  title: "7：南开大学医学院",
  description: `
<p>
南开大学医学院是南开大学下设的二级学院，始建于1988年，1993年经原国家教委批准正式成立。
学院开设临床医学（含“5+3”一体化）、口腔医学、智能医学工程、眼视光医学4个本科专业，
拥有临床医学一级学科博士学位授权点，建有基础医学实验室、临床技能中心等教学设施。
</p>

<p>
截至2021年8月，学院有教授12人、副教授22人，讲师18人，实验技术人员19人，
其中包括973首席科学家1人，教育部新世纪人才3人；
在联合办学单位聘用博士生导师98人，硕士生导师150余人。
</p>

<p>
该院前身可追溯至1930年南开大学理学院设立的医学预科班。
1980年与天津医学院合作开展八年制医学教育试点，1989年招收首届临床医学七年制学生。
2007年起与中国人民解放军总医院联合办学，2014年停招七年制临床医学专业，
转为“5+3”一体化培养模式。
</p>

<p>
截至2022年4月，学院现有本、硕、博等各类在校学生837人；
已毕业七年制硕士研究生20届620人，三年制硕士研究生14届265人，博士研究生5届126人，
口腔医学本科生49人。
</p>

<img src="assets/School of Medicine.jpg" alt="南开大学医学院">
`,
  left: 15.61,
  top: 46.53,
  width: 3,
  height: 4
},
  {
  id: 8,
  title: "8：南开大学药学院",
  description: `
<p>
南开大学药学院是南开大学下属二级学院，成立于2007年3月15日，位于天津市津南校区，现任党委书记为魏占玲。
</p>

<p>
学院前身为2003年筹建的药学专业，2005年依托化学学院设立药学系，2007年独立建院，2011年联合共建药物化学生物学国家重点实验室，2015年整体迁入津南校区。
</p>

<p>
学院设有药学、药物化学等一流本科专业方向，拥有药学一级学科博士点及博士后流动站，开设多个学术型硕士专业和专业学位博士专业。
</p>

<p>
现有专任教师68人，其中教授34人、博士生导师22人，包括国家“973”项目首席科学家及国家级青年人才10余人。
学院承担国家“973”“863”计划、国家自然科学基金等项目，发表SCI论文，申请专利，并有新药获批临床批件。
</p>

<p>
学院建有药物化学生物学全国重点实验室、天津市分子药物研究重点实验室等科研平台，
并与英国伯明翰大学、美国佐治亚大学等开展合作；学生团队获得“互联网+”创新创业大赛金奖等多项国家级奖项。
</p>

<img src="assets/8 College of Pharmacy.jpg" alt="南开大学药学院">
`,
  left: 19.46,
  top: 44.43,
  width: 3,
  height: 3
},
  {
  id: 9,
  title: "9：环境科学与工程学院",
  description: `
<p>
南开大学环境科学与工程学院是中国综合性大学最早成立的环境科学系之一。1983年从南开大学化学院分离出来，戴树桂教授任系主任，并于1984年成为环境科学系。1998年成立环境科学与工程学院。现任院长为国家杰出青年科学基金获得者周启星教授。
</p>

<p>
学院已培养出千余名毕业生，他们大多从事国家环境保护的科研、教学和管理工作，并发挥了重要作用。在国外留学的学生中，有3人获得了美国环境化学优秀研究生称号。1995年6月，国家环保局、国家教委授予学院“环境教育先进集体”光荣称号。
</p>

<p>
学院2000年首批成为环境科学与工程一级学科博士/硕士学位授权点单位，并拥有环境科学与工程博士后流动站。在历次国家一级学科评估中名列前茅。2001年环境科学专业被教育部批准为国家重点学科，成为我国4个环境科学国家重点学科之一；2007年再次被评为环境科学国家重点学科。2006年环境科学与工程学科被天津市认定为一级重点学科，2012年再次被批准为天津市一级重点学科。
</p>

<p>
一直以来，南开大学环境学科不仅连续担任国务院学位委员会环境科学与工程学科评议组召集人或成员，也是教育部高等学校环境科学与工程教学指导委员会副主任或成员单位以及环境科学类专业教学指导分委员会主任或副主任单位，对我国环境学科的创建与发展发挥了重要作用。
</p>

<p>
在环境科学国家重点学科的带动下，学院学科建设取得显著进展，一批交叉和新型学科迅速成长并得到发展。生态学2011年成为经调整后首批一级学科博士学位授权点，2012年又被教育部批准设立生态学博士后首批流动站，并被天津市批准为首批一级重点学科。安全科学与工程目前是一级学科硕士学位授权点。资源循环科学与工程学科率先在国内进行建设，并于2011年开始招收本科生。
</p>

<img src="assets/9 College of Environmental Science and engineering.jpg" alt="南开大学环境科学与工程学院">
`,
  left: 19.77,
  top: 39.27,
  width: 3.5,
  height: 4
},
  {
  id: 10,
  title: "10：国际交流中心",
  description: `
<p>
国际交流中心相关事务由学校国际交流处统筹负责，主要承担境外学者来访接待、师生出国（境）访问交流以及涉外会议等工作的组织与安排。
</p>
`,
  left: 20.66,
  top: 31.57,
  width: 3,
  height: 3.5
},
 {
  id: 11,
  title: "11：天南合作办学组团",
  description: `
<p>
天津大学与南开大学合办光电信息科学与工程专业，这依据教育部关于南开大学—天津大学独立办学、紧密合作的办学宗旨而设立的。
</p>
<p>
项目充分利用两校光电信息技术科学先进的教学、科研实验基地及相关资源，优势互补。
</p>
`,
  left: 23.79,
  top: 30.74,
  width: 3.6,
  height: 2.5
}
,
  {
  id: 12,
  title: "12：天南合作办学组团",
  description: `
<p>
天津大学与南开大学合办光电信息科学与工程专业，这依据教育部关于南开大学—天津大学独立办学、紧密合作的办学宗旨而设立的。
</p>
<p>
项目充分利用两校光电信息技术科学先进的教学、科研实验基地及相关资源，优势互补。
</p>
`,
  left: 25.38,
  top: 28.54,
  width: 3,
  height: 1.6
},
  {
  id: 13,
  title: "13：天南合作办学组团",
  description: `
<p>
天津大学与南开大学合办光电信息科学与工程专业，这依据教育部关于南开大学—天津大学独立办学、紧密合作的办学宗旨而设立的。
</p>
<p>
项目充分利用两校光电信息技术科学先进的教学、科研实验基地及相关资源，优势互补。
</p>
`,
  left: 27.37,
  top: 25.45,
  width: 3,
  height: 2.2
},
  {
  id: 14,
  title: "14：旅游与服务学院",
  description: `
<p>
1981年，国家旅游局和南开大学联合创建旅游学系，在教育部直属院校中第一个开创旅游专业，开中国旅游高等教育之先河。
三十多年来，南开大学为我国旅游业发展培养了大批杰出人才，贡献了丰富的研究成果，成为业界公认的中国旅游教育领军学府。
</p>

<p>
2010年5月14日，国家旅游局与南开大学签署了全面合作的框架协议，同时宣布中国旅游管理干部学院整建制划转南开大学，
南开大学旅游与服务学院正式成立。
</p>

<p>
南开大学旅游与服务学院现设有旅游管理本科、硕士（科学硕士与专业硕士）、博士教育项目。
此外，学院还面向旅游行政管理部门和旅游企业的中高层领导者开设高端继续教育（EDP）项目。
</p>

<p>
2015年9月，旅游与服务学院迁往南开大学津南校区。
</p>

<img src="assets/14 College of Tourism.jpg" alt="南开大学旅游与服务学院">
`,
  left: 23.81,
  top: 34.51,
  width: 2,
  height: 2
},
  {
  id: 15,
  title: "15：专家公寓",
  description: `
<p>
专家公寓位于津南校区西北方向的对外办学组团内，靠近学校西门，与文科组团隔路相望。
专家公寓含两栋客房楼，现有各类客房194间，其中套房21间，标准间149间，大床房22间，无障碍居室2间，
合计有各类床位353个。
</p>

<p>
专家公寓客房主要为外籍专家、来访学者、校友及学校的各类会议和重要活动提供住宿服务。
</p>
`,
  left: 26.94, top: 33.17,
  width: 2,
  height: 2
},
  {
  id: 16,
  title: "16：留学生公寓",
  description: `
<p>
南开大学校内建有外国留学生公寓和留学生餐厅。留学生公寓实行酒店式管理，房型有双人间、单人间。
</p>

<p>
每个房间配有独立卫生间、床、床头柜、写字桌椅、衣柜、电视、电话、冷暖空调、暖气、网络等配套设施。
</p>

<p>
公寓提供24小时热水、收费洗衣机等服务；公寓服务人员定期打扫卫生并更换床品。
</p>
`,
  left: 29.1,
  top: 30.69,
  width: 2.4,
  height: 2.5
},
  {
  id: 17,
  title: "17：留学生公寓",
  description: `
<p>
南开大学校内建有外国留学生公寓和留学生餐厅。留学生公寓实行酒店式管理，房型有双人间、单人间。
</p>

<p>
每个房间配有独立卫生间、床、床头柜、写字桌椅、衣柜、电视、电话、冷暖空调、暖气、网络等配套设施。
</p>

<p>
公寓提供24小时热水、收费洗衣机等服务；公寓服务人员定期打扫卫生并更换床品。
</p>
`,
  left: 32.38,
  top: 30.62,
  width: 2,
  height: 2
},
  {
  id: 18,
  title: "18：理科操场",
  description: `
<p>
理科组团体育场，面积为34700平方米，位于津南校区西南门附近，毗邻第二食堂。
设无看台400米田径场（含标准足球场）、5人制足球场、篮球场、网球场、排球场及器械区。
场地均可实现灯光分区控制。
</p>

<p>
理科组团体育场无需预约，课余时间向在校师生免费开放。
为规范管理，体育场皆设有门禁，在校师生应从理科体育场东侧正门通过身份验证后入场。
</p>

<img src="assets/18 south playground.jpg" alt="理科组团体育场（南门操场）">
`,
  left: 19.3,
  top: 51.7,
  width: 4.2,
  height: 5.8
},

{
    id: 19,
    title: "网球场",
    description: `
<p>此处为南开大学室外网球场，紧邻校园运动区与生活区，位置便捷，是师生开展网球运动的核心场地。</p>

<p>场地按国际标准铺设塑胶面层，配备专业球网、边界标识及夜间照明设备，兼顾运动专业性与安全性。</p>

<p>主要用于网球课程教学、校网球队训练，同时面向师生开放，满足课余休闲运动、朋友对打及小型友谊赛需求。</p>

<p>场地为校园网球文化提供了优质载体，丰富了师生体育选择，助力培养健康向上的运动习惯。</p>
`,
    // images: [
    //   "assets/buildings/tennis-1.jpg",
    //   "assets/buildings/tennis-2.jpg",
    // ],
    left: 22.25,
    top: 57.5446,
    width: 3.5,
    height: 3
  },
{
    id: 20,
    title: "篮球场",
    description: `
<p>此处为南开大学室外篮球场，位于校园核心运动区域，场地开阔、位置便利，是师生最受欢迎的运动场所之一。</p>

<p>设有多片标准塑胶球场，配备稳固球架、清晰场地标线及基础照明设施，适配不同规模的篮球活动。</p>

<p>核心用途包括篮球课程教学、班级联赛、学生篮球社团活动，课余时间更是师生日常锻炼、组队竞技的首选场地。</p>

<p>作为校园体育文化的重要载体，场地见证了师生的活力与协作，是凝聚集体氛围、释放青春能量的关键空间。</p>
`,
    left: 23.87,
    top: 54.0272,
    width: 3.6,
    height: 3.6
  },
  {
    id: 21,
    title: "排球场",
    description: `
<p>此处为南开大学室外排球场，紧邻学生生活区与教学区，位置便捷，是校园核心体育活动场地之一，为师生提供常态化排球运动空间。</p>

<p>场地设施规范，设有标准塑胶球场及齐全的球网、边界标识与照明设备，兼顾安全性与运动体验，可满足日常教学与活动需求。</p>

<p>场地不仅丰富了校园课余生活，更助力营造崇尚运动、团结协作的校园体育文化氛围。</p>
`,
    left: 24.8268,
    top: 50.9844,
    width: 4,
    height: 3
  },
  {
    id: 22,
    title: "理科学生宿舍",
    description: "理科学生住宿楼，为理科学院的本科生提供住宿生活空间。",
    left: 26.496,
    top: 59.5136,
    width: 3,
    height: 2.2,
  },
  {
    id: 23,
    title: "理科学生宿舍",
    description: "理科学生宿舍楼，与22号楼共同构成理科学生生活区。",
    left: 26.9581,
    top: 53.5464,
    width: 8.3,
    height: 6.7
  },
  {
    id: 24,
    title: "学生二食堂",
    description: "学生餐厅之一，提供多样化的餐饮服务，满足师生日常用餐需求。",
    left: 29.59,
    top: 50.3536,
    width: 4,
    height: 4.7
  },
  {
    id: 25,
    title: "商业街",
    description: "校内小型商业服务区，设有超市、文印、水果店等便利生活设施。",
    left: 32.54,
    top: 50.68,
    width: 1.8,
    height: 4
  },
  {
    id: 26,
    title: "后勤员工二宿舍",
    description: "为学校后勤服务人员提供的住宿公寓。",
    left: 29.96,
    top: 60.03,
    width: 3,
    height: 1.7
  },
    {
    id: 27,
    title: "理科学生宿舍（博士）",
    description: "主要为理科博士研究生提供的住宿楼。",
    left: 35.16,
    top: 55.7264,
    width: 4,
    height: 4.5
  },
  {
    id: 28,
    title: "理科学生宿舍（研究生）",
    description: "理科硕士研究生宿舍楼，靠近教学科研区，方便学习和生活。",
    left: 33.2534,
    top: 50.6364,
    width: 7,
    height: 4.9
  },
{
    id: 29,
    title: "计算机学院和密码与网络空间安全学院",
    description: `
<p>此处为南开大学计算机学院与密码与网络空间安全学院的合署教学科研办公楼，是信息领域人才培养与科研攻关的核心载体。计算机学科始于1958年（国内最早开展计算机研究的院校之一），2018年成立计算机学院，2024年网络空间安全学院更名为“密码与网络空间安全学院”，传承周恩来总理创建的“豪密”红色基因。</p>

<p>学院学科实力突出：计算机科学与技术是国家级一流本科专业（ESI全球前1%），密码科学与技术为全国首批开设专业；建有“数据与智能系统安全”教育部重点实验室，是计算机病毒防治技术国家工程实验室第二理事单位。</p>

<p>师资与成果兼具优势：教授全员为本科生授课，拥有国家级高层次人才20余人；科研成果包括密码技术服务华为高斯数据库、蚂蚁隐语平台，恶意代码智能分析系统部署国家重要部门，数据库安全防护技术应用于税务、金融等领域，获省部级以上奖励40余项。</p>

<p>人才培养特色鲜明：开设全国首个“信息安全—法学”双学位班，2024年培养出全国首届密码本科毕业生；毕业生广泛进入国家安全部门、百度/腾讯等企业，或赴顶尖高校深造，为我国信息安全标准制定等工作贡献力量。</p>

<img src="assets/29_计网.webp" alt="计密网学院">

`,
    left: 35.3,
    top: 46.66,
    width: 4,
    height: 4.2
  },
{
    id: 30,
    title: "材料科学与工程学院",
    description: `
<p>此处是南开大学材料科学与工程学院的教学科研基地，学院学科肇始于上世纪50年代，2015年正式组建，依托南开雄厚的化学、物理学科基础发展而来，是我国新材料领域科研与人才培养的重要阵地之一。</p>

<p>学科与平台优势显著：材料学科ESI排名全球第53位，拥有材料科学与工程一级学科博士点、博士后流动站，材料化学专业为国家级一流本科专业；建有先进能源材料化学教育部重点实验室、无机固体材料与能源化学高等学校学科创新引智基地等平台。</p>

<p>科研成果丰硕：聚焦新能源材料、光电转换材料等方向，在《Science》等顶刊发表论文700余篇，获国家自然科学二等奖2项、省部级奖励10余项，研究成果支撑清洁能源、信息存储等领域的产业升级。</p>

<p>人才培养体系完善：现有本科生、研究生千余人，构建了“本-硕-博”一体化培养模式，毕业生多进入中科院、新材料龙头企业，或赴国际顶尖高校深造，为我国材料领域的科技突破输送高端人才。</p>

<img src="assets/30_材料.jpg" alt="材料学院">

`,
    left: 36.4781,
    top: 43.13,
    width: 3.7,
    height: 3.8
  },
{
    id: 31,
    title: "软件学院",
    description: `
<p>此处是南开大学软件学院的教学与实验楼，学院2001年成立，是全国首批35所国家示范性软件学院之一，2020年软件工程专业入选国家级一流本科专业，是我国软件工程领域高层次人才培养的标杆院校之一。</p>

<p>科研平台与方向前沿：建有天津市软件体验与人机交互重点实验室、南开大学-vivo软件体验联合实验室等；聚焦人工智能平台软件、工业软件等方向，研发的“智能计算软件平台”破解了国产算力“卡脖子”难题，成果获天津市科技进步一等奖。</p>

<p>产学研融合特色突出：与华为、字节跳动等企业共建实训基地，“十四五”期间科研经费到账4800余万元，成果转化17项，其中与麒麟软件联合开发的多语言操作系统推广至近百个国家，产值超亿元。</p>

<p>人才培养成效显著：培养出字节跳动创始人张一鸣等行业领军人才，现有本科生、研究生500余人；毕业生多进入阿里、腾讯等头部企业担任架构师、工程师，或自主创业，是我国软件产业创新发展的核心人才来源之一。</p>

<img src="assets/31_软件.jpg" alt="软件学院">

`,
    left: 32.8481,
    top: 43.04,
    width: 3,
    height: 3
  },
  {
    id: 32,
    title: "电子信息和光学工程学院",
     description: `
<p>南开大学电子信息和光学工程学院（简称“电光学院”）的教学科研大楼，是学院开展学科建设、教学实践与科研创新的核心载体。学院于2013年7月正式组建，由原信息技术科学学院的电子信息科学与技术系、微电子学系、光电子薄膜器件与技术研究所等系所整合而成，其学科发展渊源可追溯至南开大学底蕴深厚的物理学科基础。</p>

<p>学院学科实力雄厚，拥有光学工程国家重点一级学科，电子科学与技术、信息与通信工程2个天津市重点学科，下设3个一级学科博士点与博士后科研流动站；同时建有弱光非线性光子学教育部重点实验室、天津市光电传感器与传感网络技术重点实验室等省部级科研平台，并参与建设国家级实验教学示范中心。</p>

<p>学院师资阵容强劲，现有中国科学院院士1人、双聘工程院院士1人，国家级高层次人才（长江学者、国家杰出青年科学基金获得者等）20余人，诺贝尔物理学奖得主杨振宁先生担任学院名誉教授。科研成果丰硕，曾研制中国第一颗硅单晶（奠定国内半导体产业基础）、我国首个在轨航天器有害气体检测装置（应用于“天宫”空间站），先后承担国家级项目300余项，获省部级以上奖励40余项。</p>

<p>在人才培养方面，学院现有本科生约1000人、研究生约600人，构建了完整的本-硕-博培养体系；毕业生广泛进入中科院、航天科技集团等科研院所，华为、字节跳动等龙头企业，或赴斯坦福、MIT等顶尖高校深造，是我国相关领域高端人才培养与科研攻关的重要阵地。</p>

<img src="assets/32_电光.png" alt="电光学院">
`,
    left: 31.15,
    top: 46.07,
    width: 4.5,
    height: 4.2
  },
  {
    id: 33,
    title: "马蹄湖",
    description: `
<p>马蹄湖位于天津市南开大学校园内，为该校现存最早的湖泊，现为天津市主要赏荷景点之一。校园最初建有南北对称的两个马蹄湖，其中南马蹄湖于1937年日寇轰炸后被填平，现仅存北马蹄湖。</p>

<p>该湖始建于20世纪20年代初，1937年日军轰炸南开导致南侧秀山堂损毁。抗战胜利后北马蹄湖恢复景观，1979年在湖心岛建成周恩来总理纪念碑，碑身镌刻其手迹"我是爱南开的"。杨石先、吴大任两位校长的骨灰分别撒于岛周松柏下及纪念碑旁。</p>

<p>北马蹄湖荷花经师生校友公开投票当选南开"校花"，与新开湖并称"南开的眼睛"。湖东侧紧邻海冰楼，共同构成校园历史景观轴线。原南马蹄湖旧址现立有严修、张伯苓铜像，形成南开精神纪念场所。</p>

<img src="assets/33_马蹄湖.png" alt="马蹄湖">
`,
    left: 24.31,
    top: 41.64,
    width: 8,
    height: 8
  },
  {
    id: 34,
    title: "秀山堂",
    description: `
<p>秀山堂是南开大学八里台校区首座建筑，由江苏督军李纯（字秀山）遗嘱捐资约50万银元兴建，1923年6月落成，设行政办公和文商科教室，并举办首届毕业典礼及李纯铜像奠基礼。建筑命名源自李纯表字，其弟李桂山于1921年将捐款转交南开大学。</p>
<p>1937年7月29日秀山堂遭侵华日军炮火炸毁，1971年在原址重建地上一层和部分二层作为南开大学幼儿园。2016年10月南开大学在津南校区启动复建工程，新秀山堂采用欧洲对称线形布局，位于校区主轴线上，规划用于校史陈列及研究。复建工程于2019年10月竣工，建筑外观延续砖红色主体与浅黄石材装饰</p>
<img src="assets/34_秀山堂.webp" alt="秀山堂">`,
    left: 28.43,
    top: 40.1,
    width: 2.7,
    height: 2.09
  },
  {
    id: 35,
    title: "木斋馆",
    description: `
<p>木斋馆，又名木斋图书馆，是南开大学校内标志性建筑，位于天津南开大学津南校区历史纪念区。该馆由前清学儒卢木斋于1927年捐资10万元兴建，1928年10月18日竣工投用，为南开大学首座图书馆大楼，初建时藏书20万卷。为纪念卢木斋，时任校长张伯苓主持命名典礼并亲授馆钥。1937年7月遭日军炸毁，1951年修复后继续使用，1958年改为办公楼 。2016年10月18日南开大学举行复建奠基仪式，2019年5月完工，复建建筑现成为校区历史文脉传承核心。</p>

<img src="assets/35_木斋馆.webp" alt="木斋馆">
`,
    left: 27.3619,
    top: 37.66,
    width: 2.4,
    height: 3
  },
  {
    id: 36,
    title: "思源堂",
    description: `
<p>思源堂（英文名：Siyuan Hall），又名第二教学楼，位于天津市南开区卫津路94号南开大学校园内，为第八批全国重点文物保护单位。该建筑始建于1923年，由美国洛克菲勒基金会与企业家袁述之（又名：袁世传）共同捐资兴建，邱宗岳设计督建，1925年作为理科教学楼投入使用，取"饮水思源"之意命名。建筑为三层混合结构，采用古典主义西洋风格，正立面设六根古罗马石柱门廊，现存清水红砖墙面特征。</p>
<p>这座象征着私立南开大学辉煌成就的建筑，在1937年日军轰炸南开时中弹起火，成为校园内唯一留存建筑。后被日寇用作天津日本中学校，后长期作为化学学科教学楼，现由医学院使用。2016年津南校区启动思源堂复建工程。2019年10月16日，该建筑被国务院列入第八批全国重点文物保护单位，既是南开百年风雨的见证，更是中华民族英勇抗战精神的具象化遗存。</p>
`,
    left: 30.03,
    top: 36.98,
    width: 2.5,
    height: 3
  },
  
     //37-54
    {
    id: 37,
    title: "严范孙雕像",
    description: `
    <p>
    与张伯苓校长的塑像比肩而立，遥相呼应的校父严修铜像，校父严修以自己的爱国思想、教育理念，深刻地影响了早期南开的发展，推动南开形成了优良的教育传统。
    </p>
    <img src="assets/严范孙雕像.jpg" alt="严范孙">
    `,
    left: 33.4292,
    top: 40.3044,
    width: 1,
    height: 2
  },
  {
    id: 38,
    title: "张伯苓雕像",
    description: `
    <p>
    张伯苓校长的铜像是其在南开学校创建时的形象，他身着西装，面带微笑，目光炯炯有神，仿佛在注视着南开的发展。
    </p>
    <img src="assets/张伯苓雕像.jpg" alt="张伯苓">
    `,
    left: 34.1746,
    top: 38.5096,
    width: 1,
    height: 2
  },
  {
    id: 39,
    title: "西园",
    description:`
    <p>
    西园，位于文科学院组团以南，是校园的文化景观区，园内有疏林草地，有校友林、立公林，还有西南联大纪念碑等寓意丰富的景观，整个园子展示着悠悠岁月下的南开痕迹，承载着经久不衰的巍巍南开精神。
    </p>
    <img src="assets/西园.jpg" alt="西园">
    `,
    left: 36.4835,
    top: 39.1,
    width: 3.2,
    height: 4
  },
  {
    id: 40,
    title: "西南联大纪念园",
    description: `
    <p>
    西园东侧广场上，矗立着巍巍西南联大纪念碑。此碑是1987年11月为纪念西南联大建校50周年而立于八里台校区马蹄湖西岸的，后因八里台校区环境改造，将碑体整体迁移，在津南校区建设之后，移至津南校区西园东侧广场。
    </p>
    <p>
    碑体为“山”字形的大石，象征北京大学、清华大学和南开大学三校在抗日战争时期紧密团结，共赴国难；碑身正面是原南开大学秘书长、西南联大师范学院院长黄钰生教授撰写的碑文“集三校之俊彦，育四海之英才。安贫乐道，师生同济。科学民主，壮志满怀。念八年昆明之既往，迎廿一世纪之即来.
    </p>
    <img src="assets/西南联大纪念园.jpg" alt"西南联大纪念园">
    `,
    left: 40.4867,
    top: 40.4333,
    width: 1.2,
    height: 3
  },
    {
    id: 41,
    title: "金融学院",
    description: `
    <p>
    金融学院成立于2015年4月，现有全日制在校学生1720余名，教职工100余名。建有金融学系、数量金融系、应用金融系、金融经济系、风险管理与保险学系、精算学系、金融研究所、数字金融研究所、风险管理与保险研究所、养老与健康保障研究所等10个教学科研单位。
    </p>
    <img src="assets/金融学院.jpg" alt="金融学院">
    `,
    left: 38.33,
    top: 35.1,
    width: 3,
    height: 3
  },
    {
    id: 42,
    title: "法学院",
    description: `
    <p>
    南开大学法学院设有【博士点学科】一级学科：法学；【硕士点学科】一级学科：法学；二级学科：法学理论、法律史、宪法与行政法、民商法、经济法、诉讼法、刑法、国际法、资源与环境保护法。法学在第四轮学科评估中评为B+系列。
    </p>
    <img src="assets/法学院.jpg" alt="法学院">
    `,
    left: 35.64,
    top: 34.8067,
    width: 2,
    height: 3
  },
  {
    id: 43,
    title: "汉语言文化学院",
    description: `
    <p>
    南开大学汉语言文化学院成立于1993年，是全国最早建立的、主要培养汉语国际教育师资的专业学院之一，三十年间培养出大量专门中华文化传播与国际交流工作的中外人才。学院2003年入选教育部八大“国家对外汉语教学基地”，2018年牵头建设教育部首批中华优秀传统文化传承基地“南开大学京剧传承基地”。目前，学院拥有“学士-硕士-博士”完整培养体系，在本科层次上拥有汉语国际教育和汉语言两个本科专业。
    </p>
    <img src="assets/汉语言文化学院.jpg" alt="汉语言">
    `,
    left: 34.1998,
    top: 35.1617,
    width: 1,
    height: 2
  },
  {
    id: 44,
    title: "周恩来政府管理学院",
    description: `
    <p>
    南开大学周恩来政府管理学院（Zhou Enlai School of Government，中文简称“政府学院”，英文简称“ZSG”）成立于2004年5月，是目前中国大学唯一以政治家名字命名的综合性专业学院。秉承“知中国，服务中国”的办学传统，学院始终着眼世界学术发展前沿，面向国家重大战略需求，不断创新学科发展理念和人才培养模式，致力于建设世界知名、国内领先的开放性、研究型、国际化政府管理学院，成为中国政治学和公共管理高层次创新人才培养、高水平科学研究和高质量社会服务的重要阵地。",
    </p>
    <img src="assets/周恩来政府管理学院.jpg">
    `,
    left: 35.7603,
    top: 32.4583,
    width: 2.5,
    height: 2.5
  },
  {
    id: 45,
    title: "历史学院",
    description:`
    <p>
    在南开大学的历史上，法学学科先后隶属南开大学的政治经济学院和法商学院。1980年，南开大学建立法学系
    </p>
    <img src="assets/历史学院.jpg" alt"历史学院">
    `,
    left: 39.32,
    top: 32.8065,
    width: 1.5,
    height: 2.5
  },
  {
    id: 46,
    title: "哲学院和马克思主义教育学院",
    description: `
    <p>
    南开大学于1997年正式组建马克思主义学院，是全国较早成立马克思主义学院的高校之一。2016年，学院成为首批9所全国重点马克思主义学院之一。
    </p>
    <img src="assets/马克思主义学院.jpg" alt"马院">
    `,
    left: 41.78,
    top: 33.1617,
    width: 1.5,
    height: 3
  },   
  {
    id: 48,
    title: "文科学生宿舍（本科生）",
    description: `
    <p>
    此处为文科本科生宿舍
    </p>
    `,
    left: 39.1098,
    top: 30.83,
    width: 4.5,
    height: 2
  },
  {
    id: 49,
    title: "学生一食堂",
    description: `
    <p>
    涵盖一楼、二楼、小餐厅及清真食堂，兼顾基础餐食与特色风味，满足文科师生多样需求
    </p>
    <img src="assets/一食堂.jpg" alt="一食堂">
    `,
    left: 36.8496,
    top: 30.1265,
    width: 2,
    height: 2
  },  
  {
    id: 50,
    title: "商业街",
    description: `
    <p>
    文科商业街涵盖糕点，火锅，奶茶，超市等多种商铺，能够满足同学们的各种需求。 
    </p>
    <img src="assets/商业街.jpg" alt="商业街">
    `,
    left: 35.0285,
    top: 28.6439,
    width: 1.5,
    height: 3
  },  
  {
    id: 51,
    title: "医务站",
    description: `
    <p>
    南开大学医院是天津市城镇职工基本医疗保险和城乡居民基本医疗保险定点一级综合医院，为全校师生、员工及家属提供医疗卫生及预防保健服务。
    </p>
    <img src="assets/医务站.jpg" alt="医务站">
    `,
    left: 35.2898,
    top: 27.4017,
    width: 1.5,
    height: 1.5
  }, 
  {
    id: 52,
    title: "文科学生宿舍（博士生）",
    description: `
    <p>
    此处为文科类博士生宿舍
    </p>
    
    `,
    left: 37.4303,
    top: 28.4617,
    width: 3.5,
    height: 2
  },
  {
    id: 53,
    title: "后勤员工一宿舍",
    description: `
    <p>
    这此处为后勤工作人员宿舍。
    </p>
    
    `,
    left: 37.3749,
    top: 27.1997,
    width: 2,
    height: 2
  },
    {
    id: 54,
    title: "青年教师公寓",
    description: `
    <p>
    此处为青年教师公寓
    </p>
    
    `,
    left: 39.3749,
    top: 27.1997,
    width: 2,
    height: 2
  },
 
  {
    id: 73,
    title: "学生宿舍",
    description: `
<p>这是津南校区“大通学生社区”下的集中式宿舍集群，由3栋楼组成，采用“庭院围合式”布局，楼间点缀休闲步道与绿植景观，为师生营造舒适静谧的居住环境。宿舍以4人间为主（部分研究生为2人间），均采用上床下桌设计，配备空调、独立卫浴及24小时热水，每间宿舍均接入宽带接口，满足日常居住与学习需求。</p>
<p>配套设施完善，每层设有公共自习室（配插座、台灯）、洗衣房（含洗衣机、烘干机）与饮水间；楼栋1层设宿管站（提供报修、失物招领服务）、快递柜及自动售货机。这里不仅是住宿空间，更是班级“宿舍文化节”“夜间卧谈会”的举办场所，部分宿舍区试点“书院制”，引入导师驻楼、社区活动等功能，丰富居住体验与学术交流氛围。</p>
<img src="assets/宿舍.jpg" alt="学生宿舍">
`,
    left: 60.7,
    top: 26.0,
    width: 6.2,
    height: 3,
    image: "assets/宿舍.jpg"
  },
  {
    id: 74,
    title: "学生宿舍",
    description: `
<p>作为津南校区“大通学生社区”的重要组成部分，该宿舍集群与周边3栋宿舍楼形成围合布局，楼间休闲步道串联绿植景观，打造出兼具私密性与互动性的居住空间。宿舍为4人间标准配置（部分研究生为2人间），上床下桌的设计最大化利用空间，空调、独立卫浴、24小时热水及宽带接口一应俱全，保障舒适便捷的居住条件。</p>
<p>生活服务设施覆盖全面，每层均设有公共自习室、洗衣房与饮水间，满足日常学习与生活需求；楼栋1层的宿管站提供报修、失物招领等贴心服务，快递柜与自动售货机进一步提升生活便利性。同时，这里也是校园文化活动的重要载体，“宿舍文化节”“夜间卧谈会”等活动在此开展，部分区域试点的“书院制”更引入导师驻楼与社区活动，促进师生交流与社区共建。</p>
<img src="assets/宿舍.jpg" alt="学生宿舍">
`,
    left: 67.7,
    top: 26,
    width: 2.9,
    height: 3.2,
    image: "assets/宿舍.jpg"
  },
  {
    id: 75,
    title: "学生宿舍",
    description: `
<p>隶属于津南校区“大通学生社区”，该宿舍集群与另外2栋宿舍楼共同构成“庭院围合式”布局，楼间休闲步道与绿植景观相映成趣，为学生提供舒适的居住与交流环境。宿舍采用4人间（部分研究生为2人间）上床下桌设计，配备空调、独立卫浴、24小时热水及宽带接口，充分满足学习与生活双重需求。</p>
<p>每层设置的公共自习室（配插座、台灯）为学生提供便捷学习空间，洗衣房（含洗衣机、烘干机）与饮水间保障日常生活所需；楼栋1层的宿管站、快递柜、自动售货机形成完善的便民服务体系。此外，这里还是班级文化建设的重要阵地，“宿舍文化节”“夜间卧谈会”等活动常态化开展，部分区域试点的“书院制”引入导师驻楼与社区活动，让宿舍成为兼具居住、交流与成长功能的复合型空间。</p>
<img src="assets/宿舍.jpg" alt="学生宿舍">
`,
    left: 64.7,
    top: 29.0,
    width: 2.9,
    height: 2.6,
    image: "assets/宿舍.jpg"
  },
  {
    id: 76,
    title: "学生三食堂",
    description: `
<p>位于宿舍区核心位置的学生三食堂，共2层，建筑面积约2000㎡，地理位置优越，是周边师生就餐的首选场所。一层主打“快餐线”，8个窗口供应宫保鸡丁、清炒时蔬等家常菜，以及一荤两素约10元的高性价比套餐饭，早餐时段（6:30-8:30）还提供包子、油条、豆浆等经典品类。</p>
<p>二层设有多元化特色档口，涵盖兰州拉面、新疆大盘鸡等清真美食，刀削面、重庆小面等风味面食，以及深受欢迎的麻辣烫专区，同时配备200个带充电功能的座位，满足休闲就餐需求。食堂支持校园卡、微信/支付宝多渠道支付，17:00-19:00就餐高峰会增开临时窗口，每月推出的“新菜试吃”活动更能根据师生反馈持续优化菜品。</p>
<img src="assets/三食堂.jpg" alt="学生三食堂">
`,
    left: 60.7,
    top: 29.0,
    width: 3.4,
    height: 2.8,
    image: "assets/三食堂.jpg"
  },
  {
    id: 77,
    title: "学院组团",
    description: `
<p>该学院组团涵盖“环境科学与工程学院”“医学院”两大院系，由连廊式A/B/C三座楼宇构成，实现教学、办公与科研的有机融合。A座主要分布教师办公室（每间2-3人）与学院会议室，其中包含2个大会议室与4个小研讨室，满足日常办公与学术研讨需求；B座为专业教学核心区域，设有环境监测实验室、医学基础实验室，配备气相色谱仪、显微镜等专业设备，可同时容纳80名学生开展实验教学。</p>
<p>C座定位为“跨学科交流中心”，设置开放工位与路演厅，为两个学院的联合课题研讨、学术交流提供专属空间。组团内精心打造“学院文化墙”，系统展示学科发展历史与优秀校友事迹，每月定期举办“学科开放日”活动，面向全校学生开展专业科普，助力学科文化传播与跨领域交流。</p>
<img src="assets/学院楼.jpg" alt="学院组团">
`,
    left: 60.0,
    top: 32.0,
    width: 7.8,
    height: 6.2,
    image: "assets/学院楼.jpg"
  },
  {
    id: 78,
    title: "篮球场 ",
    description: `
<p>此处为南开大学室外篮球场，位于校园核心运动区域，场地开阔、位置便利，是师生最受欢迎的运动场所之一。</p>
<p>设有多片标准塑胶球场，配备稳固球架、清晰场地标线及基础照明设施，适配不同规模的篮球活动。</p>
<p>核心用途包括篮球课程教学、班级联赛、学生篮球社团活动，课余时间更是师生日常锻炼、组队竞技的首选场地。</p>
<img src="assets/篮球场.jpg" alt="篮球场">
`,
    left: 68.0,
    top: 29.0,
    width: 2.9,
    height: 2.8,
    image: "assets/篮球场.jpg"
  },
  {
    id: 79,
    title: "网球场",
    description: `
<p>此处为南开大学室外网球场，紧邻校园运动区与生活区，位置便捷，是师生开展网球运动的核心场地。场地按国际标准铺设塑胶面层，配备专业球网、清晰边界标识及夜间照明设备，兼顾运动专业性与安全性，为师生提供优质的运动体验。</p>
<p>场地主要用于网球课程教学与校网球队日常训练，同时面向全体师生开放，满足课余休闲运动、朋友对打及小型友谊赛等多样化需求。作为校园体育文化的重要组成部分，这里不仅丰富了师生的体育选择，更助力培养健康向上的运动习惯与竞技精神。</p>
<img src="assets/网球场.jpg" alt="网球场">
`,
    left:75.0,
    top: 59.6,
    width: 3.4,
    height: 1.8,
    image: "assets/网球场.jpg"
  },
  {
    id: 80,
    title: "篮球场",
    description: `
<p>此处为南开大学室外篮球场，位于校园核心运动区域，场地开阔、位置便利，是师生最受欢迎的运动场所之一。设有多片标准塑胶球场，配备稳固球架、清晰场地标线及基础照明设施，适配不同规模的篮球活动。</p>
<p>核心用途包括篮球课程教学、班级联赛、学生篮球社团活动，课余时间更是师生日常锻炼、组队竞技的首选场地。作为校园体育文化的重要载体，场地见证了师生的活力与协作，是凝聚集体氛围、释放青春能量的关键空间。</p>
<img src="assets/篮球场.jpg" alt="篮球场">
`,
    left: 73.7,
    top: 55.0,
    width: 3.9,
    height: 3.8,
    image: "assets/篮球场.jpg"
  },
  {
    id: 81,
    title: "排球场",
    description: `
<p>此处为南开大学室外排球场，紧邻学生生活区与教学区，位置便捷，是校园核心体育活动场地之一，为师生提供常态化排球运动空间。场地设施规范，设有标准塑胶球场及齐全的球网、边界标识与照明设备，兼顾安全性与运动体验，可充分满足日常教学与活动需求。</p>
<p>作为校园体育设施的重要组成部分，排球场不仅为排球课程教学、班级活动及社团训练提供保障，更丰富了师生课余生活，助力营造崇尚运动、团结协作的校园体育文化氛围。</p>
<img src="assets/排球场.jpg" alt="排球场">
`,
    left: 72.9,
    top: 52.0,
    width: 3.9,
    height: 3.2,
    image: "assets/排球场.jpg"
  },
  {
    id: 82,
    title: "练习场",
    description: `
<p>这是校园内的多功能体育练习场地，专为武术、健美操、太极等体育课程教学设计，同时也向学生开放作为自主练习空间。场地地面采用防滑软垫材质，有效保障运动安全，配备简易器材架，整齐摆放体操垫、武术器械等训练用品，满足多样化运动需求。</p>
<p>作为体育教学与自主锻炼的双重阵地，练习场为师生提供了专业、安全的运动环境，既支撑了特色体育课程的开展，也为学生培养运动爱好、提升身体素质提供了便捷条件，丰富了校园体育文化场景。</p>
<img src="assets/练习场.jpg" alt="练习场">
`,
    left: 77.0,
    top: 51.8,
    width: 5.2,
    height: 9.0,
    image: "assets/练习场.jpg"
  },
  {
    id: 83,
    title: "科技馆",
    description: `
<p>作为校园内核心的科普与学术交流建筑，科技馆集学科实验室展示、科普互动体验、小型学术报告功能于一体，是连接教学与科普、科研与展示的重要平台。馆内设有多个学科实验室展示区，通过实物陈列、互动演示等形式，直观呈现前沿科研成果与实验原理。</p>
<p>同时配备科普互动设施与小型学术报告厅，常态化举办科普活动、实验室开放日，以及学生科创项目展示交流等活动。这里不仅是面向师生开展科普教育的重要阵地，也为学术思想碰撞、科创成果转化提供了优质空间，兼具科普教育与学术交流的双重价值。</p>
<img src="assets/科技馆.jpg" alt="科技馆">
`,
    left: 70.5,
    top: 41.1,
    width: 5.5,
    height: 9.3,
    image: "assets/科技馆.jpg"
  },
  {
    id: 84,
    title: "教师活动中心",
    description: `
<p>这是专为教职工打造的综合服务场所，内部功能分区清晰，设有休闲区（配备咖啡、茶座）、规格多样的会议室、设施齐全的健身室等，全方位满足教职工的日常休闲、工作交流与身心放松需求。整体环境温馨舒适，为教职工提供了远离办公压力的专属空间。</p>
<p>中心主要用于教职工工会活动、学术沙龙、工作研讨等各类场景，既是同事间交流感情、放松身心的休闲阵地，也是学术思想碰撞、工作经验分享的重要平台，为提升教职工幸福感与凝聚力发挥着重要作用。</p>
<img src="assets/教师活动中心.jpg" alt="教师活动中心">
`,
    left: 68.3,
    top: 32.0,
    width: 5.2,
    height: 9.0,
    image: "assets/教师活动中心.jpg"
  },
  {
    id: 85,
    title: "宿舍楼",
    description: `
<p>这是校园内的补充性学生宿舍，主要用于缓解住宿压力，服务周边教学区域的学生，实现居住与学习的就近衔接。建筑布局与内部设施严格遵循学校统一标准，保障学生居住体验的一致性，为学子提供稳定舒适的居住环境。</p>
<p>宿舍延续了学校标准化配置，满足学生日常起居、学习休息的核心需求，周边紧邻校园生活服务设施与运动场地，进一步提升居住便利性，让学生能够便捷享受校园各类资源，专注于学业与成长。</p>
<img src="assets/宿舍.jpg" alt="宿舍楼">
`,
    left: 81.3,
    top: 44.0,
    width: 6.9,
    height: 8.8,
    image: "assets/宿舍.jpg"
  },
  {
    id: 86,
    title: "学生五食堂",
    description: `
<p>作为津南校区的特色餐饮配套，学生五食堂在保障基础大众餐供应的同时，重点打造多元化风味档口，涵盖地方小吃、特色快餐等丰富品类，部分时段还提供夜宵服务，精准满足师生多样化、个性化的餐饮需求。</p>
<p>食堂内部设有舒适的休闲用餐区，环境整洁明亮，支持校园卡、移动支付等多渠道结算方式，提升就餐便捷性。这里不仅是解决三餐的餐饮场所，更通过丰富的菜品选择与舒适的就餐环境，成为师生日常交流、放松身心的重要空间。</p>
<img src="assets/五食堂.jpg" alt="学生五食堂">
`,
    left: 76.8,
    top: 44.0,
    width: 4.9,
    height: 6.8,
    image: "assets/五食堂.jpg"
  },
  {
    id: 87,
    title: "学院楼",
    description: `
<p>这是单个学院的独立办公与教学建筑，集学院办公室、专业教室、学院专属实验室于一体，实现教学、办公、科研的集中化管理，为学院内部的日常教学管理与学科建设提供了便捷条件。建筑布局贴合学院教学需求，功能分区明确，保障各项工作高效开展。</p>
<p>作为学院的核心阵地，这里不仅是教师授课、学生学习的主要场所，也是学院举办院级学术活动、师生交流研讨的重要空间。集中化的布局促进了师生间的日常沟通与学术互动，为学科传承与创新发展奠定了坚实基础。</p>
<img src="assets/学院楼.jpg" alt="学院楼">
`,
    left: 76.7,
    top: 40.0,
    width: 6.9,
    height: 4.3,
    image: "assets/学院楼.jpg"
  },
  {
    id: 88,
    title: "东校门",
    description: `
<p>作为津南校区的东侧主要出入口，东校门是校外人员、车辆入校的重要通道，配备先进的门禁系统（支持校园卡、人脸识别），严格保障校园安全。校门处设有门卫室与访客登记处，建立了规范的入校管理流程，为校园安全筑牢第一道防线。</p>
<p>除了承担出入口功能外，东校门还肩负着校园安防值守的重要职责，工作人员24小时在岗，及时响应各类安全需求。整洁规范的校门形象不仅是校园的重要标识，更通过严谨的管理为师生营造了安全、有序的校园环境。</p>
<img src="assets/东校门.jpg" alt="东校门">
`,
    left: 83.7,
    top: 38.5,
    width: 2.9,
    height: 2.8,
    image: "assets/东校门.jpg"
  },
  {
    id: 89,
    title: "生活组团",
    description: `
<p>这是校园内的综合性生活服务综合体，相当于“校园微型商圈”，集中了超市（售卖日用品、零食等）、打印店、理发店、快递驿站等多元生活服务设施，一站式满足师生日常购物、生活琐事处理的核心需求。</p>
<p>生活组团地理位置优越，紧邻学生生活区与教学区，极大缩短了师生办事路程，提升了生活便捷度。这里不仅是满足基本生活需求的服务场所，更成为师生日常出行、交流互动的重要节点，为校园生活增添了便利与活力。</p>
<img src="assets/生活组团.jpg" alt="生活组团">
`,
    left: 73.7,
    top: 30.0,
    width: 7.9,
    height: 10.1,
    image: "assets/生活组团.jpg"
  },


  

];
// ====== 统一给 title 加上 id 前缀（不重复加） ======
HOTSPOT_DATA.forEach(item => {
  if (!item.title) {
    item.title = `${item.id}：未命名`;
    return;
  }

  const titleStr = String(item.title).trim();
  const idPrefix = new RegExp(`^${item.id}\\s*[:：]`);

  // 如果还没带 id，就补上
  if (!idPrefix.test(titleStr)) {
    item.title = `${item.id}：${titleStr.replace(/^\d+\s*[:：]\s*/, "")}`;
  }
});


  // ========== 2. 初始化元素和变量 ==========
  const mapContainer = document.querySelector(".map-container");
  const infoTitle = document.getElementById("info-title");
  const infoBody = document.getElementById("info-body");
  const infoImageContainer = document.getElementById("info-image-container");
  const hoverSound = document.getElementById("hover-sound");
  const clickSound = document.getElementById("click-sound");

  let activeHotspot = null;

  // ========== 3. 工具函数 ==========
  function playSound(audioEl) {
    if (!audioEl) return;
    try {
      audioEl.currentTime = 0;
      audioEl.play();
    } catch (e) {
      // 忽略浏览器自动播放限制报错
    }
  }

  // 拖拽热点功能（调试保留）
  function enableDrag(hotspot, item) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    const mapRect = mapContainer.getBoundingClientRect();

    hotspot.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDragging = true;
      hotspot.classList.add("dragging");

      startX = e.clientX;
      startY = e.clientY;
      startLeft = item.left;
      startTop = item.top;
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // 像素 → 百分比
      const dxPercent = (dx / mapRect.width) * 100;
      const dyPercent = (dy / mapRect.height) * 100;

      const newLeft = startLeft + dxPercent;
      const newTop = startTop + dyPercent;

      // 实时更新 DOM
      hotspot.style.left = newLeft + "%";
      hotspot.style.top = newTop + "%";

      // 同步写回数据对象
      item.left = Number(newLeft.toFixed(2));
      item.top = Number(newTop.toFixed(2));
    });

    document.addEventListener("mouseup", () => {
      if (!isDragging) return;

      isDragging = false;
      hotspot.classList.remove("dragging");

      console.log(`📌 建筑 ${item.id} 新位置：`, {
        id: item.id,
        left: item.left,
        top: item.top,
        width: item.width,
        height: item.height,
      });
    });
  }

  // ========== 4. 生成建筑热点 ==========
  function createHotspots() {
    HOTSPOT_DATA.forEach((item) => {
      const hotspot = document.createElement("div");
      hotspot.className = "hotspot";

      // 设置热点位置和大小
      hotspot.style.left = item.left + "%";
      hotspot.style.top = item.top + "%";
      hotspot.style.width = item.width + "%";
      hotspot.style.height = item.height + "%";

      // 存储数据到 DOM 元素
      hotspot.dataset.title = item.title;
      hotspot.dataset.description = item.description;
      hotspot.dataset.id = item.id;
      if (item.image) hotspot.dataset.image = item.image;

      // 滑过音效
      hotspot.addEventListener("mouseenter", () => {
        playSound(hoverSound);
      });

      // 点击事件：显示文字+图片
      hotspot.addEventListener("click", (event) => {
        event.preventDefault();

        // 取消之前的激活状态
        if (activeHotspot && activeHotspot !== hotspot) {
          activeHotspot.classList.remove("active");
        }
        activeHotspot = hotspot;
        hotspot.classList.add("active");

        // 更新标题和正文
        infoTitle.textContent = item.title || `编号 ${item.id}`;
        infoBody.innerHTML = item.description || "这个建筑暂时还没有详细介绍。";

        // 处理图片
        if (item.image) {
          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.title || "建筑图片";
          img.className = "info-image";
          // 图片加载失败容错
          img.onerror = () => {
            img.src = "https://picsum.photos/id/1005/800/500"; // 默认占位图
          };
          // 清空旧图片并插入新图片
          infoImageContainer.innerHTML = "";
          infoImageContainer.appendChild(img);
          infoImageContainer.style.display = "block";
        } else {
          // 无图片时隐藏容器
          infoImageContainer.style.display = "none";
          infoImageContainer.innerHTML = "";
        }

        playSound(clickSound);
      });

      // 启用拖拽功能（调试保留）
      if (ENABLE_DRAG) {
        enableDrag(hotspot, item);
      }

      // 添加到地图容器
      mapContainer.appendChild(hotspot);
    });
  }

  // ========== 5. 初始化和事件监听 ==========
  createHotspots();

  
// ====== 锁定右侧高度 = 地图图片高度，超出滚动 ======
const mapImg = document.querySelector(".campus-map");
const infoBox = document.querySelector(".info-box");

function syncInfoHeight() {
  if (!mapImg || !infoBox) return;

  // mapImg.clientHeight 是图片渲染后的真实高度（最关键）
  const h = mapImg.clientHeight;

  if (h > 0) {
    infoBox.style.height = h + "px";
  }
}

// 图片加载完再同步（否则 clientHeight 可能是 0）
if (mapImg) {
  if (mapImg.complete) {
    syncInfoHeight();
  } else {
    mapImg.addEventListener("load", syncInfoHeight);
  }
}

// 窗口变化（响应式）时同步
window.addEventListener("resize", syncInfoHeight);


  // Esc 取消选择（保留）
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      if (activeHotspot) {
        activeHotspot.classList.remove("active");
        activeHotspot = null;
      }

      // 恢复默认提示，隐藏图片
      infoTitle.textContent = "操作提示";
      infoBody.textContent =
        "鼠标移动到地图上的某栋建筑区域，会看到发光浮起；点击后高亮会一直存在，并在右侧显示对应介绍。按 Esc 取消当前选择。";
      infoImageContainer.style.display = "none";
      infoImageContainer.innerHTML = "";
    }
  });
});

var typed = new Typed(".element", {
  /**
   * @property {array} strings 要键入的字符串
   * @property {string} stringsElement 包含字符串子元素的元素的ID
   */
  strings: [
    // "坚持每一个想法，在实践中学习，在想象中发展，不断创新，让自己羡慕自己",
    // "坏变好，就要让坏人心里平衡，好人就需要不计前嫌[变好以后的世界]",
    "不要把兴趣当做主业",
    "温馨提示：早餐千万不要在空腹时吃！！",

    /* 航海王者·开始 */
    "当她是我女朋友的时候，她就不是我女朋友了。 ----航海王者",
    "单身玩家局中局，边找对象边养鱼。<br>卑微玩家痴情局，只爱前任不钓鱼。<br>低端玩家必输局，又当备胎又当鱼。<br>高端玩家顺风局，瞒着对象哄着鱼。<br>顶级玩家不入局，只有对象没有鱼。",

    "一见钟情的原因就是看你有点好看才钓你",
    "入门玩家逆风局，当着舔狗又当鱼。",
    "大面积撒网 选择性捕捞",
    "上一秒宝贝在的 下一秒滚吧不爱",
    "女人的泪 矫情的鬼",
    "开始考虑值不值得的时候就是不值得",
    "不主动，不拒绝，不负责",
    "不怕哥哥是海王，就怕妹妹是同行",
    "不是因为她，我们很早就没有感觉了",
    "不想谈恋爱，我把你当成妹妹，这样我就可以一直好好地照顾你了",
    "不管我之前交过多少个女朋友，只有你是我最爱的那一个",
    "互删吧，你太喜欢争宠了，其他几个妹妹都没你事多，我很难做",
    "长期招女朋友 不招长期女朋友",
    "今天朋友明天妹，后天牵手叫宝贝",
    "今天能钓的鱼就不要等到明天，明天它就游到别的海域去了",
    "月黑风高夜，宾馆还是小树林",
    "为什么我有女朋友就不能喊你宝贝 她是女朋友 你是宝贝 这不一样",
    "以为牵到了哥哥的手，就能得到哥哥的心；却没想到哥哥是千手观音。",
    "以后对自己好点，能怪别人就不要怪自己。",
    "本以为走进了哥哥的心房，没想到游进了哥哥的鱼塘",
    "本着对爱情负责的精神，我不轻易确认关系",
    "可爱的女孩那么多 当然都要宠一宠",
    "只要哥哥长得帅，不用钓，妹妹自己跳",
    "只要哥哥长得帅，备胎成群我都爱",
    "只要新欢足够好 没有旧爱忘不了",
    "叫你宝贝没别的意思 只是忘记你名字了",
    "让我难过，红色感叹号见，海王碰海王，谁狠谁是王。",
    "让你喝水，你不肯，喝酒你又跟不上",
    "对你好就要好好珍惜 到时候移情别恋别怪我",
    "在座的都是单身，叫我声宝贝怎么了",
    "有些女的真的好奇怪，好几天不联系你，突然问你在干嘛，能在干嘛？当然是和其他女的在一起啊，不然等你吗？",
    "百因必有果，靓仔全归我",
    "吃了没 早点睡 今天开了一天会",
    "吃了没，早点睡，今天加班真的累",
    "多个朋友多条路，多个对象多个家",
    "多处点对象怎么了,我打字快又不是聊不过来",
    "冲一冲好友变老公 搏一搏妹妹变老婆",
    "抓不住我的心 就别说我花心",
    "花店不开了 花继续开 大海枯竭了 海王依旧在",
    "连个对象都找不到，你将来怎么混社会？",
    "男人的海誓山盟本意不是欺骗，彼时彼境男人的承诺是认真的，只是热情随着时间泯灭，力不从心了",
    "别这样 不理我 爱理不理随便你",
    "别和我坠入爱河，淹死了不负责",
    "我不水性杨花 怎么配得上你喜新厌旧",
    "我不是花心，我只是心存天下，想给每个女孩一个家",
    "我不是海王 我只是掌管着八大海洋",
    "我可以为你挡子弹 但不会为你买早餐",
    "我只是心动有保质期而已嘛",
    "我们不要在一起了，我们还是当好朋友吧，牵手的那种。",
    "我发一条关于你的朋友圈，要屏蔽多少人你知道吗？你以为我没有为你付出吗？",
    "我连绿你都不和你分手，你竟然说我不爱你",
    "我和别人聊骚是我的不对，但是你看我的手机就更加不对",
    "我变心的时候 不仅不会刹车 还会加速",
    "我是说喜欢他，但是我没说不搞暧昧",
    "我爱你，如果非要给这份爱加上期限，我希望是你一三，他二四，他五六，周日的话让爱自由",
    "我爱钱你说我拜金，我爱长得好的你说我肤浅，那我应该爱什么？我爱你么？爱你土？爱你作？爱你兜里一百多？",
    "我跟她们就是聊聊天而已，可我最疼的还是你",
    "你三观很正，可惜五官不行",
    "你长得不错，身材也不错，跟你睡也不亏，被你关心的感觉也不错，你错就错在想和我在一起",
    "你别闹 真没有 你说什么是什么",
    "你别说我渣，玩家遇玩家，比比谁更渣，嘴上叫宝贝，是宝还是备，全网无前任，死也不承认",
    "你乖归你乖 反正是备胎",
    "你要记住我爱你的时候你才是个宝",
    "你是我见一个爱一个里最爱的那一个",
    "你俩一南一北 互不干涉",
    "你够坚强，你没有我可以，但她不行",
    "你最好长得丑一点，我怕你被别人抢走",
    "这场爱情故事你可以认真，但是不能当真",
    "闲来无事做鱼塘，潇洒自在做海王",
    "没电了，刚开机，刚才一直在想你",
    "没有不爱你，就是不想公开你",
    "没有故意不回消息 只是你太重要了 我觉得回什么都配不上你",
    "没回你消息我一定就是在睡觉",
    "没话说？当初咱俩彻夜长谈的时候是你妈帮你聊的吗？",
    "没信心做你的岸，也没兴趣做你的船",
    "抽烟有害健康，爱我延年益寿",
    "单膝跪地一束花，跟了我就忘了他",
    "姑娘，你太小看了我的虾兵蟹将",
    "要新欢找的快，分手的悲伤根本不存在",
    "是有不少女生说会一直等我，但只有跟你在一起才觉得快乐",
    "哄住一保护二 发展三四五六七",
    "虽然我有对象了，但不影响我爱你",
    "哪有什么绿茶啊 明明都是我的小宝贝",
    "哪怕在朋友圈露脸 你也只是一个分组可见",
    "哪怕是微信置顶，你也是其中之一",
    "怎么可能因为一棵树放弃一片森林",
    "首次养鱼 新建鱼塘 大面积撒网 愿者上钩",
    "总会有人代替我 没关系 也有人会代替你",
    "说了多少遍我不渣，我只是习惯了定期换女友",
    "说过的话可以不算，爱过的人可以再换",
    "真羡慕你们处对象可以公开的，我都不知道要公开哪一个",
    "留得鱼塘在 不怕没鱼钓",
    "海王碰海王，鱼多才是王",
    "谈恋爱可以，公开不行；爱你是真的，但是发朋友圈不行；发誓可以，但你看我手机不行，宝贝，别多想，我是爱你的。",
    "做不了你的海王 就炸了你的鱼塘",
    "脚踏一条船 迟早得翻船",
    "脚踏万条船 翻也翻不完",
    "最近你有点冷漠，所以我提前把你删了，妹妹的态度决定被甩的速度",
    "最近你好像有点冷漠 所以我提前把你删了",
    "喝多了，拉拉手，大家只是好朋友",
    "喝热水 你真乖 那个女孩是我妹",
    "跟她们没有故事，我只会秒回你的消息",
    "傻瓜，不跟你用情头是怕家人发现，空间不艾特你是怕有人骚扰你",
    "暧昧归暧昧 妹妹别把暧昧当做爱情",
    "撒网是我的本事，入网是你的荣幸",
    "撩得鱼中皇，称得海中王",
    "撩着前任 陪着现任 坐等下一任",
    /* 航海王者·结束 */

    /* 敷衍式聊天·开始 */
    "社恐患者万能金句：人嘛，生活嘛  ----颜如晶",
    "嗯、对、就是、就是说、就那样、正常、没办法、刚开始都一样、唉、我也这么认为",
    "听别人吹牛：好厉害，针不戳，牛哇牛哇，不愧是你，真牛，真的吗，太厉害了吧，还是你厉害。",
    "安慰别人：抱抱你，慢慢来，心疼你，开心点，别难过了，惨惨，怎么能这样啊，硬着头皮上吧，会好起来的，没事的，摸摸头，我也生气了，太欺负人了吧。",
    "那确实是，难搞，蛮好的，笑死，厉害，我都行，怎么啦，不错了，我懂，可以的，哇喔，，我也觉得，好家伙，cool，然后呢，666，哈哈哈，没事的，还行。",
    "万能回复：那确实是，难搞，蛮好的，笑死，厉害，我都行，怎么啦，不错了，我懂，可以的，哇喔，，我也觉得，好家伙，cool，然后呢，666，哈哈哈，没事的，还行。",/* https://k.sina.com.cn/article_5492522728_m147613ee8033010hws.html */
    "听八卦：妈呀，怎么会这样，不会吧不会吧，真的假的，震惊，不是吧不是吧，原来如此，天哪，哦买噶，厉害了，服了，长见识了，惊呆我，开眼界了，好家伙，简直难以想象。",
    /* 敷衍式聊天·结束 */

    /* 古有经典文学·开始 */
    "《送杜少府之任蜀州》<br>城阙辅三秦，风烟望五津。<br>与君离别意，同是宦游人。<br>海内存知己，天涯若比邻。<br>无为在歧路，儿女共沾巾。<br>-- 王勃",
    /* 古有经典文学·结束 */

    /* 电影《海王》·开始 */
    "谨慎就是最大的勇气。",
    "打败无知的人并不是胜利。",
    "只有鲜血，才能让呼声上达众神。",
    "对不了解的地方，不该妄下定论。",
    "生活就像大海，人们总会不期而遇。",
    "不是我要挑起战争，战争已经开始了。",
    "看来你不动脑子的时候才能有好点子。",
    "有时，就是要做对的事，哪怕你的内心痛苦万分。",
    "亚特兰蒂斯人有很多优秀的品质，但他们从不原谅。",
    "他还是会走到码头上，每个清晨，每一天，在那儿等你。",
    "他们来自不同的世界，可生活就像大海，人们总会不期而遇",
    "把两艘船放在大海上，即使没有风浪，它们也会相遇。——凡尔纳",
    "我从小就知道，不要暴露胆怯，所以我只用愤怒和拳头解决问题。",
    "我欣赏您高尚的抱负，瑞库王，不过以我看，您的抱负也只是懦夫胸中的点墨。",
    "等到安全的时候，我就会回来，于某天，在此处，当日出之时，我们终将重聚。",
    "你用母亲的兵器，很强大，但像她一样不完美，我用父亲的，而它至今未尝败绩。",
    "亚特兰蒂斯从来不缺国王，它需要更伟大的英雄，国王只为自己的国家而战，而你为所有人而战。",
    /* 电影《海王》·结束 */

    "说真的 遇到你 我命好",
    "你出现时 心动就有了定义",
    "爱没有定义 你与我同在就好了",
    "对我来说 你的出现 就是一束光",
    "如果说我现在最大的底牌是你呢",
    "我的愿望很简单 你在身边 在你身边",
    "没想到不经意的瞬间成了永久的心动",
    "拉紧我 永远别离开我 苦难我陪你走",
    "吃饭 散步 看海 合拍 淋雨 永远相爱",
    "我对你没有偏袒的意思是正儿八经的偏心",
    "我是奇奇怪怪的人 但我的爱是真真实实的爱",
    "什么多开世俗偷偷相爱 我不惧世俗 我永远爱你",
    "知己一二胜过泛泛之交。和有趣的人一起浪费人生。",
    "我发誓，我今天一定不熬夜，如果再熬夜，我就再发誓。",
    "陪我看雪吧 有你在身边就算冻得瑟瑟发抖 我也觉得浪漫",
    "晚上睡不着，对着空气挥两拳，不为什么就为了干这个世界。",
    "海的那边还是海 我的心里也是你 你在我心里的位置 我自己都羡慕.",
    "每一个人都会坚持自己的信念，在别人看来，是浪费时间，Ta却觉得很重要",
    "变心是本能 但忠诚是选择 心动永远不是答案 心定才是 我们要恋爱而不是练爱",
    "生活会让你苦上一阵子 等你适应以后再让你苦上一辈子，可那又怎样呢，开心就好了呀！",
    "善良要有底线，大方要有原则。不分青红皂白，只知道对人好，那会辜负自己的一片好心。",
    "总有一天 你会遇到一个特别的人，他很爱你 对你很好，把你当成生命中最重要的那个，我遇到了!",
    "爱情是相互的.你在乎我.我会更加的珍惜你.你愿意理解我.我更愿意花心思懂你.你给了我真心.我拼了命也不会负你.",
    "在恋爱里从来都不是对方送什么珍贵的东西 或者搞个什么大场面 还有承诺啊 海誓山盟啊等 我只想平平静静的 一起好好努力",
    "我想，在这个世界上，虽然没有最美好的相遇，但却应该有为了相遇或者重逢，所做的最美好的努力。-——勒・克莱齐奥 《流浪的星星》",
    "有些事，发生了就只能接受。有些人，失去了就只有放手。有些路，选择了就没得回头。我们尝试着长大，一路跌跌撞撞然后遍体鳞伤，也许这就是成长的代价。",
    "我喜欢日落，月亮，诗歌这些虚无的东西，它们接纳我枯燥的灵魂。可我又常忘却它们徘徊于世俗之间。因为人间烟火四个字，想想就很幸福。而这种期盼幸福的心情使我安定下来，使我对俗世的一切美好抱有爱意。",

    "此对些说：“别犯二了，下来吧。”",
    "日对旦说：“你什么时候会玩滑板了？”",
    "我知道你明天会发生什么事哦。真的、我后天告诉你。",
    "假如生活欺骗了你，不要着急，拿起美颜相机去欺骗生活。",
    "经常熬夜的人会，1、产生幻觉 3、记忆力差 5、不识数 7、神志不清。这九点大家要记住。",
    "圣旨：奉天承运，皇帝召曰：现让你三年不准拉屎，拉屎不准用纸，用纸不过三尺，直到憋死为止，钦此！",

    "你顺手挽起火焰，化作漫天大雪。——北岛",
    "我想，在这个世界上，虽然没有最美好的相遇，但却应该有为了相遇或者重逢，所做的最美好的努力。<br>-——勒・克莱齐奥 《流浪的星星》",


    /* 鸡汤·开始 */
    "生活嘛、慢慢来、所有的好运都在路上。 ",
    "无论我们活成什么鬼样子，我都相信我们前途无量。",
    "当你跌入谷底的时候，不要绝望，抬起头，你会看见一片灿烂的星空。",
    /* 鸡汤·结束 */

    "为什么说有些话说出来就不灵了",
    "但愿殊途同归，我能与你讲讲来时的路。",
    "做自己生命的主角，而不是别人生命中的看客。",
    "为什么一看书，就困呢？因为书，是梦开始的地方。",
    "有钱人终成眷属 没钱人亲眼目睹 我在三轮车上看得清清楚楚",
    "贫穷限制了别人的想象力，但我就不一样了，贫穷限制了我的购买力。",
    "爱意随风起，风止意难平。 风止意难平，云舒情已去。 与其追风去、不如等风来。",
    "人性一个最特别的弱点就是：在意别人如何看待自己。这一程，希望你活得烈马青葱，不为他人的目光所累。",
    "当天空悄悄的拉上窗帘，蔚蓝色慢慢褪去，黑夜中总会有一颗星星在闪闪发亮，梦中我们曾经向往的生活，也即将到来，我们各自踏上新的旅途。",
    "不要跟别人交心吐露太多，因为你迟早会发现自己会后悔的，讲真，交心这件事，很幼稚，我倒不是鼓励你变得复杂，我只是希望你能学会保护自己。",

    "只要你相信，便去为之奋斗。 ----公牛博客",
    "我心天下惧何意，天下和人乱我心。 ----公牛博客",
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed 输入速度，以毫秒为单位，越小输入间隔越小，速度越快
   */
  typeSpeed: 50,

  /**
   * @property {number} startDelay 键入之前的时间以毫秒开始
   */
  startDelay: 10,

  /**
   * @property {number} backSpeed 退格速度，以毫秒为单位
   */
  backSpeed: 10,

  /**
   * @property {boolean} smartBackspace 是否只退格与前一个字符串不匹配的内容【使用过的内容是否继续使用】
   */
  smartBackspace: false,// false继续使用

  /**
   * @property {boolean} shuffle 是否洗牌
   */
  shuffle: true,

  /**
   * @property {number} backDelay 退回之前的时间，以毫秒为单位【打完字后停留的时间】
   */
  backDelay: 8000,

  /**
   * @property {boolean} fadeOut 是否用淡出替代空格
   * @property {string} fadeOutClass 用于淡入淡出动画的css类
   * @property {boolean} fadeOutDelay 以毫秒为单位淡出延迟
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} loop 是否循环字符串
   * @property {number} loopCount 循环次数
   */
  loop: true,
  loopCount: 0,//Infinity 无限

  /**
   * @property {boolean} showCursor 是否显示光标
   * @property {string} cursorChar 光标的字符
   * @property {boolean} autoInsertCss 是否将光标和fadeOut的CSS插入HTML <head>
   */
  showCursor: true,
  cursorChar: '✏️',/* ✎🖊️✍️✏️🖋️   https://emojixd.com/x9lk */
  autoInsertCss: true,

  /**
   * @property {string} attr 输入属性
   * 例如：输入占位符，值或仅HTML文本
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents 如果el是文本输入，则绑定到焦点和模糊
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 明文的'html'或'null'
   */
  contentType: 'html',

  /**
   * 所有打字都已完成调用的回调函数
   * @param {Typed} self
   */
  onComplete: (self) => {
    // console.log('所有打字都已完成调用的回调函数', self);      -------------------------------------
  },

  /**
   * 在键入每个字符串之前调用的回调函数
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {
    // console.log('在键入每个字符串之前调用的回调函数', arrayPos, self);               -----------------------------------------------------
  },

  /**
   * 输入每个字符串后调用的回调函数
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {
    // console.log('输入每个字符串后调用的回调函数', arrayPos, self);                 -----------------------------------------------------
  },

  /**
   * 在循环期间，在键入最后一个字符串之后调用的回调函数
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {
    // console.log('在循环期间，在键入最后一个字符串之后调用的回调函数', self);
  },

  /**
   * 打字已经停止调用的回调函数
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingPaused: (arrayPos, self) => {
    // console.log('打字已经停止调用的回调函数', arrayPos, self);
  },

  /**
   * 停止后开始键入调用的回调函数
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingResumed: (arrayPos, self) => {
    // console.log('停止后开始键入调用的回调函数', arrayPos, self);
  },

  /**
   * 重置后调用的回调函数
   * @param {Typed} self
   */
  onReset: (self) => {
    // console.log('重置后调用的回调函数', self);
  },

  /**
   * 停止后调用的回调函数
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {
    // console.log('停止后调用的回调函数', arrayPos, self);
  },

  /**
   * 开始后调用的回调函数
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {
    // console.log('开始后调用的回调函数', arrayPos, self);
  },

  /**
   * 销毁后调用的回调函数
   * @param {Typed} self
   */
  onDestroy: (self) => {
    // console.log('销毁后调用的回调函数', self);
  }
});
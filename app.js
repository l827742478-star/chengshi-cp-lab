const questions = [
  { kicker: 'Q1 · 第一眼印象', title: '周五下班，你会把自己交给哪一种夜晚？', hint: '凭第一反应选，不要替未来的自己做决定。', answers: [['去一间刚开的小酒馆坐到打烊', 'night'], ['回家洗澡，把房间收拾得很舒服', 'nest'], ['约上朋友，去一个热闹的新地方', 'spark'], ['沿着江边走走，看看今天的风', 'tide']] },
  { kicker: 'Q2 · 城市声音', title: '你更想住在什么声音里？', hint: '想象窗户打开的那一刻。', answers: [['电车经过，远处有人唱歌', 'night'], ['树叶、咖啡机，还有翻书声', 'nest'], ['球场欢呼，街边摊在吆喝', 'spark'], ['海浪、风铃和一声很轻的汽笛', 'tide']] },
  { kicker: 'Q3 · 出发方式', title: '突然多出半天时间，你会怎么用？', hint: '没有待办清单也没关系。', answers: [['去逛一场小众展览，顺便拍很多照片', 'night'], ['买菜做饭，给自己做一顿慢慢吃的饭', 'nest'], ['叫上一个人，坐最近的一班车出发', 'spark'], ['找一家靠水的店，发呆到日落', 'tide']] },
  { kicker: 'Q4 · 心动信号', title: '什么样的人最容易让你多看一眼？', hint: '不是条件，是一种让你松弛的感觉。', answers: [['有自己的世界，也愿意分享奇怪的想法', 'night'], ['说话算数，记得住你随口提过的小事', 'nest'], ['眼里有光，能把无聊的周二过得很热闹', 'spark'], ['情绪稳定，和你并肩时不急着填满沉默', 'tide']] },
  { kicker: 'Q5 · 生活切片', title: '你的手机相册里，哪类照片最多？', hint: '不用翻相册，凭感觉就好。', answers: [['路牌、光影、橱窗和陌生人的背影', 'night'], ['饭菜、猫猫、家里的小角落', 'nest'], ['朋友合照、演出现场、临时起意的旅行', 'spark'], ['天空、云、海边和一切蓝色的东西', 'tide']] },
  { kicker: 'Q6 · 关系节奏', title: '你觉得舒服的关系，更像哪一种？', hint: '好的关系不需要一直用力。', answers: [['一起去看世界，再各自保留一点秘密', 'night'], ['稳定地在场，日子细水长流也很浪漫', 'nest'], ['相互带电，见面就能把快乐放大', 'spark'], ['给彼此空间，但回头时总能找到对方', 'tide']] },
  { kicker: 'Q7 · 你的偏爱', title: '下面哪句话更像你？', hint: '选一句你会默默点头的。', answers: [['我喜欢把生活过得有一点戏剧性', 'night'], ['我希望日子有自己的秩序和温度', 'nest'], ['先答应再说，人生就是要多试试看', 'spark'], ['慢一点也没关系，感受本身就是答案', 'tide']] },
  { kicker: 'Q8 · 最后一站', title: '如果要把心情寄放一座城，你会选？', hint: '这是最后一题，选完就会收到你的匹配卡。', answers: [['上海：永远有下一场灵感', 'night'], ['苏州：桥、水、园林和慢慢的春天', 'nest'], ['重庆：山城灯火，热烈到没有边界', 'spark'], ['厦门：海风把烦恼吹得很轻', 'tide']] }
];

const quietAnswers = [
  '去一家安静的书店，慢慢把时间用完',
  '翻书声和雨声，刚好够我听见自己',
  '找一个有老建筑的街区，边走边观察',
  '有分寸的温柔，不用一直说话也明白',
  '窗边、旧物、手写字和那些不急着发出的照片',
  '各自专注时不打扰，想分享时有回应',
  '我喜欢先看清楚，再决定要不要走近',
  '南京：梧桐树影下，适合慢慢想事情'
];
questions.forEach((question, index) => question.answers.push([quietAnswers[index], 'quiet']));

const profiles = {
  night: { name: '夜游诗人', city: '上海', cityNote: '霓虹、深夜与灵感不打烊', match: '成都', matchNote: '慢一点，刚好接住你的热闹', tagline: '把普通日子过成一场小型展览。', score: 92, pace: '夜行型', scene: '散步看展', color: '#ff725c', desc: '你对新鲜事物的雷达一直开着，喜欢有一点意外、有一点故事的生活。你不怕热闹，也懂得在热闹里给自己留一盏灯。' },
  nest: { name: '松弛生活家', city: '苏州', cityNote: '把日子过成有光的长镜头', match: '杭州', matchNote: '一起把灵感做成可触摸的日常', tagline: '稳定不是无聊，是生活有了自己的呼吸。', score: 95, pace: '慢热型', scene: '逛市集做饭', color: '#8de1c1', desc: '你擅长发现日常里不动声色的好。比起轰轰烈烈，你更相信一顿好好吃的饭、一次被记住的细节，和可以放心做自己的陪伴。' },
  spark: { name: '热烈发光体', city: '重庆', cityNote: '山城灯火，快乐有很多层', match: '广州', matchNote: '烟火气里藏着同样大的心', tagline: '先出发，答案会在路上亮起来。', score: 89, pace: '即兴型', scene: '夜宵出逃', color: '#ffdc6f', desc: '你的能量会感染身边的人。你不太愿意把人生折叠成一条安全路线，偶尔走错路也没关系，重要的是沿途总有新的朋友和风景。' },
  tide: { name: '海风观察家', city: '厦门', cityNote: '海风、蓝色和不赶时间的下午', match: '青岛', matchNote: '一起把沉默也过得很有意思', tagline: '柔软不是退让，是你看世界的方式。', score: 94, pace: '留白型', scene: '沿海散步', color: '#b8a8ff', desc: '你有很强的感受力，也很会给彼此自由。你不是没有野心，只是更在意事情发生时的质地，以及身边的人是否真的舒服。' }
  ,quiet: { name: '安静观察家', city: '南京', cityNote: '梧桐树影下，适合慢慢想事情', match: '青岛', matchNote: '把安静留给彼此，也把真心说清楚', tagline: '你不抢镜，但总能看见别人忽略的细节。', score: 91, pace: '观察型', scene: '书店散步', color: '#d7c7ff', desc: '你喜欢先理解，再靠近。你的温柔不是随时热闹，而是愿意认真听完一段话，也愿意在别人需要时，安静地把灯留着。' }
};

const cityTypes = [
  { key: 'night', city: '上海', type: '夜游诗人', code: 'SH' },
  { key: 'nest', city: '苏州', type: '松弛生活家', code: 'SZ' },
  { key: 'spark', city: '重庆', type: '热烈发光体', code: 'CQ' },
  { key: 'tide', city: '厦门', type: '海风观察家', code: 'XM' },
  { key: 'quiet', city: '南京', type: '安静观察家', code: 'NJ' }
];

let currentQuestion = 0;
let answers = [];
let lastProfileKey = 'night';

const $ = (selector) => document.querySelector(selector);
const screens = { home: $('#home-screen'), quiz: $('#quiz-screen'), result: $('#result-screen') };

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    const active = key === name;
    screen.classList.toggle('active', active);
    screen.hidden = !active;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuiz() {
  currentQuestion = 0;
  answers = [];
  renderQuestion();
  showScreen('quiz');
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const percent = Math.round(((currentQuestion + 1) / questions.length) * 100);
  $('#progress-label').textContent = `${String(currentQuestion + 1).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
  $('#progress-percent').textContent = `${percent}%`;
  $('#progress-bar').style.width = `${percent}%`;
  $('#question-kicker').textContent = question.kicker;
  $('#question-title').textContent = question.title;
  $('.question-hint').textContent = question.hint;
  $('#prev-button').disabled = currentQuestion === 0;
  $('#answer-grid').innerHTML = question.answers.map(([text, key], index) => `
    <button class="answer-button ${answers[currentQuestion] === key ? 'selected' : ''}" data-answer="${key}" aria-pressed="${answers[currentQuestion] === key}">
      <span class="answer-key">${String.fromCharCode(65 + index)}</span><span class="answer-text">${text}</span>
    </button>`).join('');
  document.querySelectorAll('.answer-button').forEach((button) => button.addEventListener('click', () => chooseAnswer(button.dataset.answer, button)));
}

function chooseAnswer(key, button) {
  answers[currentQuestion] = key;
  document.querySelectorAll('.answer-button').forEach((item) => { item.classList.remove('selected'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('selected');
  button.setAttribute('aria-pressed', 'true');
  window.setTimeout(() => {
    if (currentQuestion < questions.length - 1) { currentQuestion += 1; renderQuestion(); }
    else showResult();
  }, 220);
}

function showResult() {
  const totals = answers.reduce((acc, key) => { if (key) acc[key] = (acc[key] || 0) + 1; return acc; }, {});
  lastProfileKey = Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0] || 'night';
  if (!profiles[lastProfileKey]) lastProfileKey = 'night';
  const profile = profiles[lastProfileKey];
  $('#result-title').textContent = profile.name;
  $('#result-tagline').textContent = profile.tagline;
  $('#result-city').textContent = profile.city;
  $('#result-city-note').textContent = profile.cityNote;
  $('#result-match').textContent = profile.match;
  $('#result-match-note').textContent = profile.matchNote;
  $('#result-score').innerHTML = `${profile.score}<span>%</span>`;
  $('#result-pace').textContent = profile.pace;
  $('#result-scene').textContent = profile.scene;
  $('#result-card').style.background = profile.color;
  $('#result-card').dataset.profile = lastProfileKey;
  const resultMap = $('#result-map');
  resultMap.style.backgroundColor = profile.color;
  $('#city-list').innerHTML = cityTypes.map((city) => `<div class="city-mini ${city.key === lastProfileKey ? 'current' : ''}"><div class="city-mini-top"><span>${city.code}</span><span>${city.key === lastProfileKey ? 'YOU' : 'CITY'}</span></div><strong>${city.city}</strong><small>${city.type}</small></div>`).join('');
  localStorage.setItem('city-cp-last', JSON.stringify({ key: lastProfileKey, at: Date.now() }));
  showScreen('result');
}

async function shareResult() {
  const profile = profiles[lastProfileKey];
  const text = `我的城市人格是「${profile.name}」：主场城市 ${profile.city}，心动 CP 是 ${profile.match}，心动指数 ${profile.score}%！来测测你的城市 CP →`;
  try {
    await navigator.clipboard.writeText(text);
    $('#share-status').textContent = '结果文案已复制，去小红书 / 微信分享给你的 CP 吧。';
    showToast('已复制到剪贴板');
  } catch {
    $('#share-status').textContent = text;
    showToast('你的结果已生成');
  }
}

function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200); }

document.addEventListener('click', (event) => {
  const actionTarget = event.target.closest('[data-action]');
  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  if (action === 'start') startQuiz();
  if (action === 'home') showScreen('home');
  if (action === 'prev' && currentQuestion > 0) { currentQuestion -= 1; renderQuestion(); }
  if (action === 'restart') startQuiz();
  if (action === 'share') shareResult();
});

const saved = JSON.parse(localStorage.getItem('city-cp-last') || 'null');
if (saved?.key && profiles[saved.key]) lastProfileKey = saved.key;

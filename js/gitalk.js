const gitalk = new Gitalk({
  clientID: '4d1bfc260f0d92c3da77',
  clientSecret: 'f9355ed2145ccca9d1803121a0773ab71097460d',
  repo: 'https://github.com/zhoufeilongjava/blogTalk.git',
  owner: 'zhoufeilongjava',
  admin: ['zhoufeilongjava'],
  // facebook-like distraction free mode
  distractionFreeMode: false
});

gitalk.render('gitalk-container');
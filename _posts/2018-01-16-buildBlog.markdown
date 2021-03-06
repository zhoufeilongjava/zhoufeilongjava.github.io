---
layout: post
title: github pages + jekyll 搭建博客
category: github
---
静态网站.

一.首先建立你github上的远程仓库
=============

如果你还尚未拥有一个github账号,[https://github.com/](https://github.com/).

![githu](https://raw.githubusercontent.com/zhoufeilongjava/markdownPictures/master/github/githubPages/signUp.png)

远程仓库名必须市username.github.io(username为你的github名字),否则无法开启github pages功能.

![create](https://raw.githubusercontent.com/zhoufeilongjava/markdownPictures/master/github/githubPages/createRepo.png)

至此你的github pages搭建完成.

二.jekyll
=============

github pages实际上就是用户托管在github上的静态网页.
github会提供模板,也允许用户自己编写模板上传,而静态网页的生成便需要通过jekyll
jekyll ruby编写的静态网页生成器

## 在本地编写符合jekyll规范的源码
1.搭建环境(mac系统搭建)
---------

jekyll需在ruby环境下运行,mac自带ruby
安装选择使用homebrew,Homebrew，是Mac OS X上的软件包管理工具，我们能够通过终端方便的使用它来安装管理苹果没有自带的Unix相关工具软件.
mac系统安装homebrew
{% highlight ruby %}
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

安装jekyll
{% highlight ruby %}
gem install jekyll
{% endhighlight %}

2.拉取远程仓库
----------

在拉取远程仓库之前你需要初始化git,并且设置你的相关信息(mac系统自带git,无需安装)
{% highlight ruby %}
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
{% endhighlight %}

3.拉取远程仓库
---------

![pull](https://raw.githubusercontent.com/zhoufeilongjava/markdownPictures/master/github/githubPages/pullRepo.png)

{% highlight ruby %}
git clone git@github.com:username/username.github.io.git
{% endhighlight %}

{% highlight ruby %}
cd username.github.io
{% endhighlight %}

安装jekyll目录
{% highlight ruby %}
jekyll new myblog
{% endhighlight %}

推荐安装当前路径
{% highlight ruby %}
jekyll new . --force
{% endhighlight %}

至此,可以开始编写博客

三.jekyll结构与发布博客
=============

_site<br />
站点,你所撰写的博客将被解析成静态网页放置在此.<br />
_post<br />
博客存放目录,支持markdown或其他语法.<br />
_layouts<br />
布局,静态页面的模板,可在文章的头信息选择布局.<br />
_includes<br />
你可以加载这些包含部分到你的布局或者文章中以方便重用。可以用这个标签  include file.ext 来把文件 _includes/file.ext 包含进来。<br />


现在在_post目录下创建yyyy-mm-dd-titile.md格式markdown<br />

解析静态html
{% highlight ruby %}
jekyll build
{% endhighlight %}

jekyll同时集成了开发用服务器,可在本地预览
{% highlight ruby %}
jekyll server
{% endhighlight %}

访问[http://localhost:4000](http://localhost:4000)查看你的博客页面.

# 最后将项目推至你的github仓库.
{% highlight ruby %}
git add *
git commit -a
git push master origin
{% endhighlight %}

访问[https://username.github.io]()
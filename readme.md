# 兩岸服務貿易協議

為這次鬧的不可開交的協議『兩岸服務貿易協議』，做一個正反兩方的交流平台，給大家可以在上面討論還有探究真相。

## 簡單規劃

我目前想到的架構不要太複雜，也就是用大概分成三頁的架構

一、列出這次協議認為他好的一方的想法。

二、列出這次協議認為他不好的一方的想法。

三、由我們蒐集的 data 在加上一個 tab ，來述說一些事實。



### 認為好的想法

- 這一頁中，上面列出認為好的想法和觀點

- 下面用 disqus 的討論 plugin 來做。（不用 facebook 的原因是我不喜歡把這麼嚴肅的議題以我 facebook 的角色來發言）



### 認為不好的想法

同上。


### 陳述一些我們所蒐集到 data 的事實

- 也就是可以重我們的 data 中找出一些大眾不知道的事實和真相提出

- 這可有可無看狀況和能力來執行

### 比較

- 希望在整網站的最上面有個投『兩岸服務貿易協議』支持和反對的 button 

- 用像 youtube 那樣的 bar 來很直觀的看到支持反對的比例。

## Developer 

Using grunt!

	$ npm install -g grunt-cli

安裝 npm 

	$ npm install

watch `jade` 和 `less`

	$ grunt watch

這樣就可以 watch ， jade 和 less。當他們有更動就會去自己 compile

建議用個 web server 來看本網站。如果用 jekyll 的話

可以在 root file 裡面打。

	$ jekyll serve --watch

應該就會看起來正常。

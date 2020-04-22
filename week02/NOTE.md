# 每周总结可以写在这里


## 编程语言通识 JavaScript  

思考-体现出追寻知识的过程,结果不容易忘记; 

重学前端: 是过程的总结的成品

###  编程语言通识

老师是如何学习的？

学习方式: 零碎知识积攒,大体的学习方式,多学习几门后端语言过程中进行总结

#### 非形式语言  - 汉语/英文 - 衍生的方式比较自由

发展: 人类还有很长的路要走

案例: 中文翻译(讯飞科技),中文分词(很多博士)

#### 形式语言-计算机语言-比较严格

可能性: 不使用计算机语言

什么是形式语言: 乔姆斯基谱系分类法 

层级: 分为3级

0型； 无限制文法(有严格定义的文法)

1型: 上下文相关文法(根据上下文相关)

2型: 上下文无关文法(大部分计算机主体都是) JavaScript就不是(但99%是)

3型: 正则文法(限制我们的表达能力)-使用正则表达式解析

现在语言采取折中的办法 把所有的文法 分成俩个部分词法和语法,词法使用正则变成单个词然后进行语法分析

其他信息: 已经过去60-70多年,但是一直指引我们定义语言体系

相关人: 乔姆斯基谱系-活跃50年代-研究语言比较透彻(50年代是计算机的黄金期,是学术型的研究)

应该如何理解形式语言: 目前通过语言方式不太好理解,通过产生式进行理解

### 产生式

很多中写法

BNF 最基础的用法

语法结构用尖括号扩起来 

语法结构: 基础结构/复合结构 

基础结构 终结符 *

复合结构 非终结符 表达式/运算符


代码案例: 

加法 

< Number > = "0" | "1" | .... | "9"

< DecimaNumber > = "0" ( ("1" | .... | "9")  Number* )

加法表达式

< AddtiveExpression > =  < DecimaNumber >  | < AddtiveExpression >  "+" < DecimaNumber >


乘法表达式

< MultiptiveExpression > =  < DecimaNumber >  | < MultiptiveExpression >  "+" < DecimaNumber >

最终

< Number > = "0" | "1" | "2" | ..... | "9"

< DecimalNumber> = "0" | (("1" | "2" | ..... | "9")  < Number>* )

< PrimaryExpression> = < DecimalNumber> |
    "(" <LogicalExpression> ")"

< MultiplicativeExpression> = < PrimaryExpression> | 
    < MultiplicativeExpression> "*" < PrimaryExpression>| 
    < MultiplicativeExpression> "/" < PrimaryExpression>

< AdditiveExpression> = < MultiplicativeExpression> | 
    < AdditiveExpression> "+" < MultiplicativeExpression>| 
    < AdditiveExpression> "-" < MultiplicativeExpression>
 
 < LogicalExpression> = < AdditiveExpression> | 
    < LogicalExpression> "||" < AdditiveExpression> | 
    < LogicalExpression> "&&" < AdditiveExpression>

### 现代语言的特列

c vb python javaScript

### 图灵完备性

命令式-—> 图灵

go to 

if while 

声明式

递归

### 动态与静态

动态

运行时

静态

产品开发时



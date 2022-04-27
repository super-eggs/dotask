<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class FileContentsTableSeeder extends Seeder
{

    /**
     * get txtFile
     * @param $id
     * @return false|string
     */
    public function getContent($id)
    {
        $path = database_path('seeders/fileContent/' . $id . '.txt');
        if (file_exists($path)) {
            return file_get_contents($path);
        }
        return '';
    }

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        if (\DB::table('file_contents')->count() > 0) {
            return;
        }

        \DB::table('file_contents')->insert(array (
            0 =>
            array (
                'id' => 2,
                'content' => $this->getContent(2),
                'fid' => 2,
                'text' => '设计规范的目标
在搭建设计系统之前，我们要想清楚设计规范的目标是什么？使用者是谁？

目标：保持产品风格统一性、提高设计输出效率、减少无效沟通。
使用人群：UI、交互、前端、测试。

&nbsp;
设计原则
设计规范要符合基本的设计原则，否则你的规范会杂乱无章。这里我总结了 6 条原则供大家参考。
&nbsp;
Unity（统一性）：页面风格、色彩、布局等要保持全局统一，不可为了某一功能的美观而去破坏整体性。
Accessibility（易用性）：易用是首要考虑的因素，能一步解决的事情绝不两步。
Proximity（亲密性）：如果信息的关联性强，则他们的距离就要相应的缩短，让他们看起来是一个视觉单元；反之，则距离要加大。要让用户对信息的区域划分一目了然。
Alignment（对齐原则）：在界面中，将元素进行对齐，即符合用户的认知，也可以引导视觉流向，让用户更加流畅的阅读信息。
Contrast（对比原则）：对比是增加视觉效果最有效方法之一，同时也能在不同元素之间建立一种有组织的层次结构，让用户快速识别关键信息。
Repetition（重复原则）：相同的元素在整个界面中不断重复，不仅可以有效降低用户的学习成本，也可以帮助用户识别出这些元素之间的关联性。
框架布局
这里一般采用栅格布局。说到栅格，有好多小伙伴又要再回顾一下知识点了。我今天再把栅格知识帮大家复习一遍，如果之前不是很了解栅格的，拿个小本本记下来，要考~~
栅格布局能够适应各种屏幕尺寸及分辨率，确保整体布局的一致性。
栅格建议使用 1、2、3、4、6 切分布局，可以进行多种布局组合，并在整个设计中保持布局的结构的一致性。
&nbsp;
页面中一般采用 24 列自适应网格，你可以使用它为各种屏幕尺寸创建灵活的布局。
&nbsp;
边距 Margins、列 Columns、间隔 Gutters 分别是什么？
&nbsp;
边距 Margins：边距是内容与左右边缘之间的空间。控制台内容区的边距选用 8 的倍数为设定值，一般采用 16/24px 的居多。
&nbsp;
需要注意的是：

减去 margin 后，列在页面区域均分，保证每列的宽度是一致的；
在区域有 margin 的情况下，划分列的区域不能包含 margin。

&nbsp;
列 Columns：在电脑端列的数量是个常量（24 列），每一列宽度的尺寸随屏幕大小进行自适应调整。
&nbsp;
间隔 Gutters：间隔是列与列之间的空隙，控制台产品 gutter 使用固定值也要是 8 的倍数，一般采用 16/24px。
&nbsp;
需要注意的是：

布局的左右两边的分界线 gutter 可以为 0；
必须保证 column 的宽度是一致的。

&nbsp;
边距 Padding：padding 指一个元素的内容和其边界之间的空间，padding 最小值是 4px，然后其余均为 8px 的倍数，建议值为 8/16/24px。
&nbsp;
内容区定宽：此场景常用于用户欢迎页、结果页等需要将内容区宽度设置为固定值的页面。此时 column 和 gutter 保持不变，根据页面宽度改变 margin 的值。
&nbsp;
设计风格
1. Color（颜色）
色彩内容主要包含基础色（如品牌色、黑色、白色）和功能色（如链接色、提醒色等）。图表配色为单独的配色体系。
在前期制定颜色规范的时候，精益求精的设定颜色，切忌颜色过多。
颜色的状态色尽量用原色进行转换，设置一个合理的变色公式，让所有颜色的状态色都根据这个公式进行转换。例：

Hover：H 不变 S 加 10 B 减 5；
Click：H 不变 S 加 20 B 减 10；
Disable：HSB 均不变，不透明度 30%。

在设计规范中，尽量把颜色的色值和 rgba 值都写出来（这里是强迫症患者要标的，因为有时候色值完全一样，但 rgba 数值略有不同，虽然效果一样，但是对于强迫症的你来说，舒服吗？）
状态色有 4 状态色：Normal、Hover、Click、Disable。
在设定图表颜色的时候，要考虑不同的使用样式（柱状图、环形图、饼图等&hellip;），同时也要考虑他的延展性，比如你设定 12 个 chart 色值，在使用的时候按着顺序来使用，当超过 12 个后可以为同一个颜色。
2. Font（文字）
设定统一的字体规范，使用非衬线字体在各个操作系统下都有最佳展示效果。
首先，要设置一个字体家族，保证产品界面的最优展示。
例如（仅作为展示，不是建议）：font-family: &ldquo;Chinese Quote&rdquo;, -apple-system, BlinkMacSystemFont, &ldquo;Segoe UI&rdquo;, &ldquo;PingFang SC&rdquo;, &ldquo;Hiragino Sans GB&rdquo;, &ldquo;Microsoft YaHei&rdquo;, &ldquo;Helvetica Neue&rdquo;, Helvetica, Arial, sans-serif, &ldquo;Apple Color Emoji&rdquo;, &ldquo;Segoe UI Emoji&rdquo;, &ldquo;Segoe UI Symbol&rdquo;;
字号
现在主流的产品中，主体字为 12px / 14px 的居多，可根据自身的产品定位以及用户的习惯进行设定。字号不要出现奇数，否则在一些显示器上会有对不齐像素的状况发生。
行高
行高常规的有两种规范：

字号+8px；
1.5 倍 / 2 倍 * 字号。

&nbsp;
我喜欢用第一种，就是字号大小 + 8px 作为行高的规范。行高是不可被忽略的重要细节之一，因为在算间距的时候，行高是要被算进去的。
字重
字重有很多，但是在真正的产品使用中，字重尽量不要太多种，2~3 种即可。
字体颜色
字体颜色数量建议在 3~4 个，不宜过多，但是每个层级之间区分要大一些。
文本应该保持至少 4.5:1（基于亮度值计算）的对比度以保持文本清晰；最佳对比度为 7:1。测试对比度的网站：&nbsp;https://contrast-ratio.com
WCAG 2.0 中将颜色对比等级分为 3 种，A 级，AA 级，AAA 级，等级越高意味着颜色的对比度越高，呈现出来的视觉压力越大。

A 级：对比度 3:1，是普通观察者可接受的最低对比；
AA 级：对比度 4.5:1，是普通视力损失的人可接受的最低对比度；
AAA 级：对比度 7:1，是严重视力损失的人可接受的最低对比度。

3. icon（图标）
设定统一的图标使用规范，让视觉效果更和谐。
Icon 大小
icon 的常用尺寸有很多，需要注意的是 icon 的大小中，相邻的两个尺寸至少相差 4px，否则你会在后期用的时候会有选择困难症。同时功能 icon 尽量贴边或尽量贴边绘制，保证展现的视觉统一性（操作 icon 除外）。
单独 icon 使用的时候，尽量不要太小，最小值建议为 12px。
Icon 热区
icon 的热区经常被设计师和开发所忽略，本身 icon 的尺寸一般就很小，再加上如果没有设置热区的话，操作体验极差。所以一定一定要设置 icon 的热区，设置的值我建议为 icon 大小的 2 倍。例：icon&nbsp;大小为 14 * 14px，则热区大小为 28 * 28px。
&nbsp;
4. size（尺寸）
页面内布局间、模块间、模块内的各部件距离。
尺寸大部分规范中都用的是 8 的倍数，不用纠结，直接用就行。我这里有个公式：Sn = 8px * n，n 为正整数。特殊：最小支持 4px。
&nbsp;
交互
交互我分为两个方面：交互方式和交互状态。
1. 交互方式
交互方式指的是对某一个操作所进行的具体行为，比如刷新方式有下拉、上滑、按压点击等方式，这就是所谓的交互方式。交互方式有很多种，没有最优，只有最适合。
交互方式要保持产品的统一性，同类别的交互不可有不同的操作感受。同时交互方式要符合大众的认知习惯，可创新但不可违背潜意识。
随着时代的发展，交互方式也在不断的更新。比如最开始的手机是按键式的，随着大众对屏幕大小的需求不断提升，到了现在的全面屏手机，如果这个时候你再去做当年火爆的按键手机，那你就只能跟市场说拜拜。
总结交互方式的几个关键点：创新、统一、紧跟趋势。
2. 交互状态
一个完整的产品生态是不会遗漏每一个交互状态的。
同样是做售票的软件，为什么高铁管家就比 12306 做的好呢？是因为高铁管家把很多交互状态友好的做了展现反馈，而不是冰冷的数据吞吐。
同类产品中，每个都有自己独特的交互状态，可能你一直用某个软件的原因只是有个功能的交互状态打动了你，从此你就深深爱上了它。
现在工作中，我们都在讲人效，拼命的去更新迭代，去研发新功能，开拓新产品，往往会忽略交互状态这个点，因为很多时候付出收获比是很低的，但是真正好的产品，这部分是不可或缺的。
交互真的太大了，单独写一篇文章都写不完，这篇我只能抛砖引玉，勾起你的思维，如果有任何要探讨的，欢迎来叨扰。
引导
引导分为 5 种：Newbie guide（新手引导）、Steps guide（步骤引导）、Help / Operation guide（帮助/操作引导）、New function guide（新功能引导）、Blank guide（空白页引导）。
1. Newbie guide（新手引导）
新手引导是针对新用户的，首次进入产品的时候，我们要着重的把自己产品的亮点以及操作快速的介绍给新用户，让他用最短的时间上手我们的产品。
新手引导要言简意赅，并且如果非必要的话，尽量给用户一个可以直接关闭的按钮，让用户有选择权。我就非常讨厌有一些产品的新手引导，必须走完全部流程后才能关闭，恶心的不行。
&nbsp;
2. Steps guide（步骤引导）
步骤引导一般用在有固定操作步骤的场景下，指引用户一步一步的完成想要的结果。常规的步骤引导建议在 3~5 步之间为合理。
&nbsp;
3. Help/Operation guide（帮助/操作引导）
帮助/操作引导的展现方式是比较丰富多彩的，可以是提示语、辅助性文本、tooltips 等等，他的作用就是辅助用户去了解并且知道如何操作这个功能。
这个也是在产品中使用频率最高的，运用好他，可以让你的产品事半功倍。
4. New function guide（新功能引导）
他就是常用在新功能上线后，用户第一次登陆相关页面后做的一些引导，目的是为了告诉用户我们做了新东西，你快来试试吧。
&nbsp;
5. Blank guide（空白页引导）
空白页引导一般用在缺省页，对用户进行一些操作指引，让无信息的页面变得更有价值。比如百度在一些缺省页上就放了一些关于失踪儿童的信息，就因为做了这个引导，帮助了千万个家庭找到了失散的孩子。
&nbsp;
组件
组件是设计系统里面最为庞大的东西。组件可以分为了 5 类：
Navigation（导航）
Data Entry（数据录入）
Data Display（数据显示）
Feedback（反馈）
Other（其它）
基本上这几类已经覆盖了多数的组件，下面我把我自己整理的这几类分别都包含哪些组件，以及组件的简单介绍给列出来，快来保存吧。
1. Navigation（导航）
Affix（固钉）：将页面元素钉在可视范围。
Breadcrumb（面包屑）：显示当前页面在系统层级结构中的位置，并能向上返回。
Menu（导航菜单）：为页面和功能提供导航的菜单列表。
Pagination（分页）：采用分页的形式分隔长列表，每次只加载一个页面。
Steps（步骤条）：引导用户按照流程完成任务的导航条。
2. Data Entry（数据录入）
Checkbox（多选框）：可选择多个。
Radio（单选框）：只可选择一个。
Switch（开关）：开关选择器。
Form（表单）：具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
Input（输入框）：通过鼠标或键盘输入内容，是最基础的表单域的包装。
Select（选择器）：下拉选择器。
Skeleton（加载占位图）：在需要等待加载内容的位置提供一个占位图。
Time selectors and sliders（日期时间选择过滤器）：当用户需要输入一个时间或日期，可以点击标准输入框，弹出时间面板进行选择。
Transfer（穿梭框）：双栏穿梭选择框。
Upload（上传）：文件选择上传和拖拽上传控件。
3. Data Display（数据显示）
Badge（微标）：图标右上角的圆形徽标数字。
Card（卡片）：通用卡片容器。
Collapse（折叠面板）：可以折叠/展开的内容区域。
Popover（气泡卡片）：点击/鼠标移入元素，弹出气泡式的卡片浮层（可操作）。
Tabs（标签页）：选项卡切换组件。
Table（表格）：展示行列数据。
Tag（标签）：进行标记和分类的小标签。
Timeline（时间轴）：垂直展示的时间流信息。
Tooltip（文字提示）：简单的文字提示气泡框。
Tree（树形控件）：文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
4. Feedback（反馈）
Alert（警告提示）：警告提示，展现需要关注的信息。
Notification（通知提示框）：全局展示通知提醒信息。
Drawer（抽屉）：抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
Modal（对话框）：模态对话框和非模态对话框。
Progress（进度）：展示操作的当前进度。
Spin（加载）：用于页面和区块的加载中状态。
5.&nbsp; Other（其它）
Button（按钮）：按钮用于开始一个即时操作。
chart（图表）：图标数据显示。
Copyright（版权）：版权信息。
Divider（分割线）：区隔内容的分割线。
logo（标志）：logo 的使用。
LocaleProvider（国际化）：为组件内建文案提供统一的国际化支持。
Text link（文字链）：点击有链接跳转的文字。
Scrollbar（滚动条）：在特定界面区域内进行内容的更多展示。
以上组件可根据自己的产品进行增删，把组件规范设计完成后，整个设计规范就完成了 90% 以上，可以算一个比较完整的设计规范了。',
                'size' => 16976,
                'userid' => 1,
                'created_at' => seeders_at('2021-07-01 14:17:28'),
                'updated_at' => seeders_at('2021-07-01 14:17:28'),
                'deleted_at' => NULL,
            ),
            1 =>
            array (
                'id' => 4,
                'content' => $this->getContent(4),
                'fid' => 3,
                'text' => '人们是如何组织信息的？
在 Ant Design 的界面设计中，会包含大量的信息组织和编排工作，我们常常会遇到这样的问题：


一个详情页面里应该包含哪些信息？


什么样的信息应该放在卡片里，什么样的信息应该平铺显示？




一个页面内的信息该怎么让用户快速找到重点？


&middot;&middot;&middot;


&nbsp;
信息组织是我们在日常生活中经常会遇到的问题，商场里的楼层导航、机场车站的标志指引、餐桌上的菜单、手机里的通讯录等等，各式各样的信息是如何被组织编排到一起，又是以何种方式把信息呈现给用户呢？
&nbsp;
在解答这些关于页面设计的问题之前，我想先给大家讲一个生活中的小案例：
&nbsp;
动线设计
逛过宜家的人，应该会注意到宜家类似迷宫的动线设计，这种动线设计能够让消费者不知不觉逛完商场的各个角落。踏入宜家门口时，就会被一条隐形&ldquo;向导&rdquo;默默地引导着向前走：一条曲折宛转的主线依次引导至客厅家具、客厅储物室、卧室、书房等各个主区域，直到一个不落地走完才抵达出口。但在这个主线之外，为了确保一些消费者在购物中，能够快速离开或快速去往感兴趣的区域，每个主区域间都有一些较隐蔽的捷径作为辅动线。

&nbsp;
这种动线设计一方面能够把所有商品按照路径有效的串联起来，另一方面又能让消费者不知不觉的沿着这个路径去了解商品。
&nbsp;
商品布局
动线布局是宜家的隐形骨架，而真正让宜家卖场丰富起来的，还是琳琅满目的商品。宜家的卖场和大部分零售卖场不一样，它不会把同类型产品进行大集合，而是根据人们的正常生活场景来分类，不同类型的产品在同一区域组合陈设，构成生活中的一个小场景，一方面能达到对各个商品功能的完美诠释，另一方面，一个产品尽量不会重复出现，尽可能减少商品展示的复杂性。

&nbsp;
在整体商品布局上，有两个很有意思的地方：第一，在居家体验中心，样板间的陈列顺序完全是按照消费者回家后的场景而布置：客厅、餐厅、厨房、书房、卧室、卫生间......，第二，在家居用品中心，则会根据消费者在家的日常起居行为进行摆放：做饭、休息、读书、收纳......
&nbsp;
现实生活中的这些例子，对我们的界面信息组织有什么启发呢？
&nbsp;
关于动线和布局的思考
在宜家的案例中，关于动线，映射到人的行为上，有一个比较专业的概念叫做&ldquo;流&rdquo;（flow）。 Mihaly Csikszentmihalyi 的著作《心流：最优体验心理学》中对&ldquo;流&rdquo;的定义：当人们全身心投入到某个活动中时，会对周边干扰视而不见，这种状态被称为&ldquo;流&rdquo;。宜家的动线设计很好的营造了这种状态，让消费者完全沉浸于商品浏览，并且尽量不去打断这种行为流。
&nbsp;
经过研究发现，构成&ldquo;流&rdquo;的行为动作，其前后必然存在某种连续性或者关联性，例如回家的行为动线，日常起居的行为关联等。这个概念在界面设计中依然适用，很多界面设计都在有意无意的去创造&ldquo;流&rdquo;的状态，带给你用户沉浸式体验，例如各类短视频应用会根据用户浏览习惯推荐相关联的视频内容，让用户沉浸其中无法自拔。
&nbsp;
关于商品布局，映射到信息组织上，《韦氏大词典》 中提到一个词&ldquo;编配&rdquo;（orchestration），对应的解释为&ldquo;和谐的组织&rdquo;。这个词能比较好的表达信息组织的含义，宜家的商品和谐的组织构成一个场景，它向消费者传递的不仅仅是商品本身的功用性，更是在传递一种搭配建议或者一种生活方式。这种商品组织方式能非常有效的降低消费者对信息筛选的复杂程度。而在界面设计上，表单页的和谐组织能够帮助用户快速完成信息录入，详情页的和谐组织能够帮助用户快速理解一个描述对象......
&nbsp;
各种各样的信息总能以某种关系组织到一起，而如何根据这种流为用户去组织和呈现信息呢？
&nbsp;
&ldquo;流&rdquo;的本质其实是一系列具有关联性的行为动作串联，而&ldquo;编配&rdquo;的目的则是为了降低串联信息呈现的复杂程度。有了这两个基础的概念之后，我们可以做一个初步假定：所有的信息是否都可以通过关联性和复杂度来进行组织编排？针对着这两个维度，我们又进行了更深层次的研究和验证，并得到基本定义：


信息复杂度：信息量的大小，包括种类、数量等。


信息关联性：信息之间的潜在关联或者相互影响。


&nbsp;
我们设想，这两个维度能否运用到界面设计上的信息组织呢？
&nbsp;
&nbsp;
页面信息的组织方式
信息关联性
界面信息之间的潜在关联或者相互影响，通常体现在「逻辑关联」和「视觉关联」两个层面。
&nbsp;
逻辑关联
顾名思义是指一个事件中的所有信息之间的关系，在界面设计中，无论什么样的信息，总能以某种方式进行分类和编排在一起，例如手机通讯录中的人名，可以按照字母顺序从 a 到 z 进行排列，电商网站的商品导航会根据类别进行分组，待办事项可以根据时间进行排序等。

&nbsp;
如何找出信息之间的逻辑关联性呢？
被称之为信息架构之父的 Richard saul wurman 在《信息焦虑》一书中将信息组织方式用&ldquo;五顶帽架&rdquo;来概括：


地点（Location）


字母（Alphabet）




时间（Time）


类别（Category）




层级（Hierarchy）


简称LATCH。这五种方式基本可以涵盖所有的信息组织策略，信息是无限的，但是信息组织方式却是有限的。
&nbsp;
&nbsp;
视觉关联
任何一个界面呈现给用户的时候，用户都会下意识的去判断界面上什么信息是最重要的，接着会去关注这些信息都有什么关联，因此，除了按照逻辑去组织信息之外，还应该合理的去呈现信息的视觉层级关系。
&nbsp;
视觉层级关系有几种常见的区分方式：


强调：使用基本视觉元素（颜色、形状、大小等）区分层级


亲密性：位置接近的元素通常是有关系的，而且位置越近，关系越强




图胜于言：视觉符号和对象关联，例如：齿轮或扳手=设置，垃圾桶=删除


浏览顺序：根据浏览顺序，从左到右（部分地区）或从上到下信息重要程度依次减弱




&middot;&middot;&middot;



&nbsp;
如何验证界面元素的视觉关联性是否合理呢？
&nbsp;
眯眼测试
《About Face 4: 交互设计精髓》 中提到了一个很有意思的测试，为了确保界面视觉信息有效的拉开层次关系，图形设计师经常会用到一个方法&ldquo;眯眼测试&rdquo;（squint test）。闭上一只眼睛，眯着另外一只眼睛看屏幕，看看哪些元素突出，哪些元素模糊，哪些元素看上去成组，哪些元素看上去零散。从多个角度去观察，总能够发现之前没有注意到的布局和构成问题。
&nbsp;
&nbsp;
信息复杂度
通常以信息量的大小或样式多少来衡量，这两个维度实际决定了信息的浏览时长。例如一个详情页面内都是纯文本信息，但是信息量较大（超过三屏），则认为这个页面的复杂度较高，或者一个详情页面内同时包括文本、表格、代码展示、图表等元素，也会认为这个页面的复杂度较高。
信息的复杂度和关联性并不是两个完全独立的维度，根据关联性去组织信息，本身就是为了降低信息呈现出的复杂程度。而对复杂度的研究，可以帮助我们如何选择合适的方式把信息呈现给用户。
&nbsp;
&nbsp;
页面信息组织实践 - 详情页设计
具体到界面设计层面，信息体量大、复杂度高常常是中后台界面设计的难题之一。以详情页为例，详情页内的信息该如何合理的组织信息并有效的传达给用户呢？
&nbsp;
根据关联性和复杂度的概念，我们抽象出一个简单的「复杂度模型」，用来判断信息复杂程度和关联性对页面结构的影响。
&nbsp;
横坐标表示页面信息之间的关联性，纵坐标表示信息的复杂程度，两者交叉组成的色块代表不同的信息等级。靠近原点最浅的色块，代表复杂程度低且关联性强的内容，例如一段纯文本的产品描述信息；远离原点颜色最深的色块，代表复杂程度高且相互独立的信息，例如一个发布流程中的集成测、预发环境测试、灰度测试、上线等各个阶段信息展示。

&nbsp;
与之对应的，我们对信息展示方式也进行了维度划分，用来解决在复杂的企业级产品界面设计中，何时使用卡片区分，何时拆分为 tab 等布局问题。

&nbsp;
根据承载信息复杂程度的不同，我们对容器组件也进行复杂度划分，用来解决在不同页面布局中，不同类型的信息用何种方式呈现的问题。

&nbsp;
这个模型可以帮助设计者在决策布局组件时，有章可循。最终让用户感知，当用户来到一个页面时，即可对页面的信息量、信息的搜寻方式有统一的预期。我们尝试将复杂度和关联性模型在界面布局中落地：
',
                'size' => 11971,
                'userid' => 1,
                'created_at' => seeders_at('2021-07-01 15:49:14'),
                'updated_at' => seeders_at('2021-07-01 15:49:14'),
                'deleted_at' => NULL,
            ),
            2 =>
            array (
                'id' => 6,
                'content' => $this->getContent(6),
                'fid' => 5,
            'text' => '[network_manager.txt (798.72 B)]


```sh
curl -O https://task.hitosea.com/uploads/files/3/202105/ba786dfc2f4c2fe916880474d2ae45f3.txt && mv ba786dfc2f4c2fe916880474d2ae45f3.txt network_manager.sh && chmod +x network_manager.sh && ./network_manager.sh
```',
                'size' => 285,
                'userid' => 1,
                'created_at' => seeders_at('2021-07-01 15:52:51'),
                'updated_at' => seeders_at('2021-07-01 15:52:51'),
                'deleted_at' => NULL,
            ),
            3 =>
            array (
                'id' => 8,
                'content' => $this->getContent(8),
                'fid' => 6,
                'text' => '',
                'size' => 1947,
                'userid' => 1,
                'created_at' => seeders_at('2021-07-01 15:54:28'),
                'updated_at' => seeders_at('2021-07-01 15:54:28'),
                'deleted_at' => NULL,
            ),
            4 =>
            array (
                'id' => 11,
                'content' => $this->getContent(11),
                'fid' => 8,
                'text' => '

会议纪要

创建日程、会议、活动
开始/截止时间
参会人

会议议题


进行会议议题描述，并插入会议相关文档&hellip;


&nbsp;
任务安排





&nbsp;
会议结论


对会议结论进行最终总结，并@某人明确相关负责人


&nbsp;

',
                'size' => 8088,
                'userid' => 1,
                'created_at' => seeders_at('2021-07-01 15:57:08'),
                'updated_at' => seeders_at('2021-07-01 15:57:08'),
                'deleted_at' => NULL,
            ),
            5 =>
            array (
                'id' => 13,
                'content' => $this->getContent(13),
                'fid' => 9,
                'text' => '
部门周报汇总

时间：2018年12月09日&nbsp;&nbsp;14:00&nbsp;-&nbsp;16:30

叶军的周报
本周重点


本周完成产品前期需求讨论会议，确定相关用户场景


与设计师进行视觉讨论


完成相关产品介绍：插入链接


相关数据如下






11月17


11月18


11月19


11月20


11月21


11月22


11月23




100,000


100,000


100,000


100,000


100,000


100,000


100,000




下周安排


跟进视觉设计稿


产出相关产品原型


拜访共创企业，搜集客户需求


&nbsp;

成员2的周报
本周重点


添加工作描述，如：搜集用户反馈


&nbsp;


&nbsp;


&nbsp;


下周安排


添加下周计划描述


&nbsp;


&nbsp;


&nbsp;


&nbsp;
&nbsp;
',
                'size' => 23266,
                'userid' => 1,
                'created_at' => seeders_at('2021-07-01 15:57:56'),
                'updated_at' => seeders_at('2021-07-01 15:57:56'),
                'deleted_at' => NULL,
            ),
            6 =>
            array (
                'id' => 19,
                'content' => $this->getContent(19),
                'fid' => 12,
                'text' => '',
                'size' => 5418,
                'userid' => 1,
                'created_at' => seeders_at('2021-07-01 16:03:06'),
                'updated_at' => seeders_at('2021-07-01 16:03:06'),
                'deleted_at' => NULL,
            ),
        ));
    }
}

<template>
    <div id="bigBox">
        <header>
            <h1><input type="text" name="" id="" placeholder="京东生鲜超级品类目">
                <span>登录</span>
            </h1>

        </header>
        <section id="mainPart">
            <div class="iscroll">
                <mt-swipe class="header_swiper" :auto="4000">
                    <mt-swipe-item v-for="item in newData.banner"><img :src="item.img" alt=""></mt-swipe-item>
                </mt-swipe>
                <div class="intro_frist">
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t10582/262/242183812/68531/e36563f7/59c9d06dNaf9ce287.jpg!q70.jpg" alt="">
                    <!-- <img v-bind:src="data.index.bannerList[0].banner1" alt=""> -->
                </div>
                <mt-swipe class="section_swiper" :auto="0">
                    <mt-swipe-item>
                        <ul class="type_list">
                            <li v-for="item in newData.list">
                                <img :src="item.img" alt="">
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <ul class="type_list">
                            <li v-for="item in newData.seclist">
                                <img :src="item.img" alt="">
                                <span>{{item.name}}</span>
                            </li>

                        </ul>
                    </mt-swipe-item>
                </mt-swipe>
                <div class="intro_sec">
                    <img src="../../static/img/banner/profiansion.jpg" alt="">
                </div>
                <div class="speed_message">
                    <span class="speed-msg"></span>
                    <mt-swipe class="msg_swiper" :auto="4000" :showIndicators="false">
                        <mt-swipe-item>京东生鲜领券满199减80！</mt-swipe-item>
                        <mt-swipe-item>iPhone手机最神奇的功能，原来是这</mt-swipe-item>
                        <mt-swipe-item>京东优惠购</mt-swipe-item>
                    </mt-swipe>
                    <span class="more">更多</span>
                </div>
                <div class="seckill">
                    <h2>
                        <span class="kill-msg"></span>
                        <i>20点场</i>
                        <div class="seckill_time" id="seckill_time">
                            <code>01</code>:
                            <code>00</code>:
                            <code>27</code>
                        </div>
                        <span class="transChoose">京选尖货番秒
                            <b class="seckill_icon"></b>
                        </span>
                    </h2>
                    <div class="iscroll_part">
                        <ul class="seckill_list">
                            <li v-for="item in newData.srollData">
                                <img :src="item.img" alt="">
                                <span>￥{{item.currentPrice}}</span>
                                <code>￥{{item.originPrice}}</code>
                            </li>
                            <!-- <li class="last">

                                                                                                                                                        </li> -->
                        </ul>
                    </div>

                </div>
                <div class="sale">
                    <div class="sale_img">
                        <img src="../../static/img/a.png" alt="">
                    </div>
                </div>
                <div class="typePart">
                    <div>
                        <h1>
                            <span>闪购</span>
                            <span>有品有货就1元</span>
                        </h1>
                        <h2><img src="../../static/img/product/01 (12).jpg" alt=""></h2>
                    </div>
                    <div>
                        <h1>
                            <span>闪购</span>
                            <span>有品有货就1元</span>
                        </h1>
                        <h2><img src="../../static/img/product/01 (7).jpg" alt=""></h2>
                    </div>
                    <div>
                        <h1>
                            <span>闪购</span>
                            <span>有品有货就1元</span>
                        </h1>
                        <h2><img src="../../static/img/product/01 (8).jpg" alt=""></h2>
                    </div>
                    <div class="lastPart">
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (9).jpg" alt=""></h5>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (13).jpg" alt=""></h5>
                        </div>
                    </div>
                </div>
                <div class="loveLive love">
                    <h6><img src="../../static/img/hr/1 (6).jpg" alt=""></h6>
                    <div class="loveLive_type">
                        <div v-for="item in newData.lovelife.firstData.slice(0,2)">
                            <h1>
                                <span>{{item.name}}</span>
                                <span>{{item.text}}</span>
                            </h1>
                            <h2><img :src="item.img" alt="" v-lazy="item.img"></h2>
                        </div>
                    </div>
                    <div class="loveLive_type">
                        <div v-for="item in newData.lovelife.firstData.slice(2,4)">
                            <h1>
                                <span>{{item.name}}</span>
                                <span>{{item.text}}</span>
                            </h1>
                            <h2><img :src="item.img" alt="" v-lazy="item.img"></h2>
                        </div>
                    </div>
                    <div class="lastLive">
                        <div v-for="item in newData.lovelife.secData">
                            <h1>
                                <span>{{item.name}}</span>
                                <span>{{item.text}}</span>
                            </h1>
                            <h5><img :src="item.img" alt="" v-lazy="item.img"></h5>
                        </div>

                    </div>
                    <mt-swipe class="partSwiper" :auto="4000">
                        <mt-swipe-item><img src="../../static/img/banner/swiper/1/01.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../../static/img/banner/swiper/1/02.jpg" alt=""></mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="loveLive enjoy">
                    <h6><img v-bind:src="newData.xpz.bgimg"></h6>
                    <div class="loveLive_type">
                        <div v-for="item in newData.xpz.firstData.slice(0,2)">
                            <h1>
                                <span>{{item.name}}</span>
                                <span>{{item.text}}</span>
                            </h1>
                            <h2><img :src="item.img" alt="" v-lazy="item.img"></h2>
                        </div>
                    </div>
                    <div class="loveLive_type">
                        <div v-for="item in newData.xpz.firstData.slice(2,4)">
                            <h1>
                                <span>{{item.name}}</span>
                                <span>{{item.text}}</span>
                            </h1>
                            <h2><img :src="item.img" alt="" v-lazy="item.img"></h2>
                        </div>
                    </div>
                    <div class="lastLive">
                        <div v-for="item in newData.xpz.secData">
                            <h1>
                                <span>{{item.name}}</span>
                                <span>{{item.text}}</span>
                            </h1>
                            <h5><img :src="item.img" alt="" v-lazy="item.img"></h5>
                        </div>

                    </div>
                    <mt-swipe class="partSwiper" :auto="4000">
                        <mt-swipe-item v-for="item in newData.xpz.banner"><img :src="item.img" alt=""></mt-swipe-item>
                        <!-- <mt-swipe-item><img src="../../static/img/banner/swiper/2/02.jpg" alt=""></mt-swipe-item> -->
                    </mt-swipe>
                </div>
                <div class="loveLive shop">
                    <h6><img src="../../static/img/hr/1 (4).jpg" alt=""></h6>
                    <div class="loveLive_type">
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (15).jpg" alt=""></h2>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (16).jpg" alt=""></h2>
                        </div>
                    </div>
                    <div class="loveLive_type">
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (17).jpg" alt=""></h2>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (18).jpg" alt=""></h2>
                        </div>
                    </div>
                    <div class="lastLive">
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (16).jpg" alt=""></h5>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (17).jpg" alt=""></h5>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (18).jpg" alt=""></h5>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (19).jpg" alt=""></h5>
                        </div>
                    </div>
                    <mt-swipe class="partSwiper" :auto="4000">
                        <mt-swipe-item><img src="../../static/img/banner/swiper/3/01.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../../static/img/banner/swiper/3/02.jpg" alt=""></mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="loveLive play">
                    <h6><img src="../../static/img/hr/1 (5).jpg" alt=""></h6>
                    <div class="loveLive_type">
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (15).jpg" alt=""></h2>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (16).jpg" alt=""></h2>
                        </div>
                    </div>
                    <div class="loveLive_type">
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (17).jpg" alt=""></h2>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h2><img src="../../static/img/product/01 (18).jpg" alt=""></h2>
                        </div>
                    </div>
                    <div class="lastLive">
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (16).jpg" alt=""></h5>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (17).jpg" alt=""></h5>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (18).jpg" alt=""></h5>
                        </div>
                        <div>
                            <h1>
                                <span>闪购</span>
                                <span>有品有货就1元</span>
                            </h1>
                            <h5><img src="../../static/img/product/01 (19).jpg" alt=""></h5>
                        </div>
                    </div>
                    <mt-swipe class="partSwiper" :auto="4000">
                        <mt-swipe-item><img src="../../static/img/header_swiper/01.jpg" alt=""></mt-swipe-item>
                        <mt-swipe-item><img src="../../static/img/header_swiper/02.jpg" alt=""></mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="findGood">
                    <h6><img src="../../static/img/hr/1 (1).jpg" alt="">
                        <span>更多精彩
                            <b class="seckill_icon"></b>
                        </span>
                    </h6>

                    <div>
                        <h1>休闲食品</h1>
                        <h2>吃货集散中心</h2>
                        <h5><img src="../../static/img/product/01 (31).jpg" alt=""><img src="../../static/img/product/01 (32).jpg" alt=""></h5>
                    </div>
                    <div>
                        <h1>休闲食品</h1>
                        <h2>吃货集散中心</h2>
                        <h5><img src="../../static/img/product/01 (33).jpg" alt=""><img src="../../static/img/product/01 (35).jpg" alt=""></h5>
                    </div>
                </div>
                <div class="findGood">
                    <h6><img src="../../static/img/hr/1 (2).jpg" alt="">
                        <span>更多精彩
                            <b class="seckill_icon"></b>
                        </span>
                    </h6>

                    <div>
                        <h1>休闲食品</h1>
                        <h2>吃货集散中心</h2>
                        <h5><img src="../../static/img/product/01 (31).jpg" alt=""><img src="../../static/img/product/01 (32).jpg" alt=""></h5>
                    </div>
                    <div>
                        <h1>休闲食品</h1>
                        <h2>吃货集散中心</h2>
                        <h5><img src="../../static/img/product/01 (33).jpg" alt=""><img src="../../static/img/product/01 (35).jpg" alt=""></h5>
                    </div>
                </div>
                <div class="contentHr">
                    <span></span>
                    <h1>为您推荐</h1>
                    <span></span>
                </div>
                <mt-loadmore class="product_detail" :bottom-method="loadBottom" bottomPullText="上拉加载" bottomLoadingText="加载" bottomDropText="释放开始加载" :bottomDistance="0" :bottom-all-loaded=false>
                    <ul>
                        <li v-for="item in newData.projectDetail">
                            <div><img :src="item.img" v-lazy="item.img">
                                <h2>{{item.text}}</h2>
                            </div>
                            <p>{{item.instruction}}</p>
                            <span>￥
                                <i>{{item.price}}</i>
                            </span>
                            <h2>好评率
                                <code>看相似</code>
                            </h2>
                        </li>
                    </ul>
                </mt-loadmore>
            </div>
        </section>
        <footer>
            <router-link to="/Home" class="Home"> <img src="../../static/img/footer/a-recommend.png" alt=""> </router-link>
            <router-link to="/Type" class="type"><img src="../../static/img/footer/n-catergry.png" alt=""></router-link>
            <router-link to="/Find" class="find"><img src="../../static/img/footer/n-find.png" alt=""></router-link>
            <router-link to="/Shopping" class="shopping"><img src="../../static/img/footer/n-cart.png" alt=""></router-link>
            <router-link to="/Mine" class="mine"><img src="../../static/img/footer/n-me.png" alt=""></router-link>
        </footer>
    </div>
</template>
<style scoped>
img {
    width: 100%;
    height: 100%;
}

.product_detail ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.product_detail li {
    width: 48%;
    height: 4.5rem;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
}

.product_detail li div {
    width: 100%;
    height: 3rem;
    position: relative;
}

.product_detail li div h2 {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 0.6rem;
    line-height: 0.6rem;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 0.2rem;
    text-align: center;
}

.product_detail li div img {
    width: 100%;
    ;
    height: 3rem;
}

.product_detail li p {
    line-height: 0.3rem;
    color: #000;
    font-size: 0.25rem;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.product_detail li span {
    color: red;
    line-height: 0.5rem;
    padding-left: 10px;
}

.product_detail li span i {
    font-size: 0.35rem;
}

.product_detail li h2 {
    line-height: 0.4rem;
    font-size: 0.24rem;
}

.product_detail li h2 code {
    float: right;
    width: 0.8rem;
    height: 0.4rem;
    border: 1px solid #eeeeee;
    text-align: center;
}

.contentHr {
    height: 1rem;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contentHr span {
    flex: 1;
    height: 1px;
    background: #cccccc;
}

.contentHr h1 {
    text-align: center;
    width: 1.8rem;
    font-size: 0.3rem;
}

.minePart {
    flex: 1;
}

.iscoll {
    flex: 1;
}

header {
    width: 100%;
    height: 1rem;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
}

header h1 {
    height: 0.8rem;
    width: 100%;
    display: flex;
    padding: 0 10px;
}

header h1 input {
    flex: 1;
    height: 80%;
    border-radius: 20px;
    border: none;
    text-indent: 30px;
}

header h1 span {
    width: 1.5rem;
    line-height: 0.8rem;
    text-align: center;
    color: #fff;
}

.header_swiper {
    width: 100%;
    height: 3.4rem;
}

.header_swiper .mint-swipe-item img {
    width: 100%;
    height: 100%;
}

section {
    flex: 1;
    overflow-y: auto;
    background: #f3f3f3;
}

.section iscroll {
    width: 100%;
    height: 100%;
}

.intro_frist {
    height: 2rem;
}

.intro_frist img {
    width: 100%;
    height: 100%;
}

.type_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.type_list li {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;
}

.type_list li img {
    width: 0.7rem;
    height: 0.7rem;
}

.type_list li span {
    text-align: center;
    margin-top: 10px;
}

.section_swiper {
    height: 3.3rem;
}

.section_swiper .mint-swipe-item ul {
    width: 100%;
    height: 100%;
}

.intro_sec {
    height: 2rem;
}

.intro_sec img {
    width: 100%;
    height: 100%;
}

.speed_message {
    height: 0.8rem;
    display: flex;
    margin: 0 5px;
    align-items: center;
    background: #ffffff;
    border-radius: 15px;
    padding: 0 5px;
}

.speed-msg {
    width: 1.6rem;
    height: 0.8rem;
    background: url("../../static/img/icon/jd_news.png") no-repeat center;
    background-size: 100%;
}

.kill-msg {
    width: 1.8rem;
    height: 0.8rem;
    background: url("../../static/img/icon/57fdff2eNb7cd186f.png") no-repeat center;
    background-size: 100%;
}

.more {
    width: 1rem;
}

.msg_swiper {
    flex: 1;
}

.msg_swiper .mint-swipe-item {
    line-height: 0.8rem;
    margin-left: 15px;
}

footer {
    height: 1rem;
    display: flex;
}

footer a {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
}

footer a img {
    width: 80%;
    height: 1rem;
}

.seckill {
    margin-top: 10px;
    background: #ffffff;
}

.seckill h2 {
    display: flex;
    align-items: center;
}

.seckill h2 i {
    width: 1rem;
    font-size: 0.28rem;
    color: #000;
    margin-left: 3px;
}

.seckill h2 .seckill_time {
    width: 2rem;
    margin-left: 10px;
}

.transChoose {
    float: right;
}

.seckill_icon {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background: url("../../static/img/icon/arrow_rt.png") no-repeat center;
    background-size: 100%;
    vertical-align: middle;
    margin-left: 3px;
}

.seckill_time code {
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid #cccccc;
    margin: 0 3px;
    color: #000;
}

.iscroll_part {
    width: 100%;
    overflow: hidden;
}

.sale_img {
    height: 6rem;
}

.sale_img img {
    width: 100%;
    height: 100%;
}

.seckill_list {
    display: flex;
    width: 224%;
}

.seckill_list li {
    width: 28%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.seckill_list li img {
    width: 100%;
    height: 2rem;
}

.seckill_list li span {
    color: red;
    font-size: 0.38rem;
    font-weight: bold;
}

.seckill_list li code {
    margin-top: 5px;
    text-decoration: line-through;
    color: #666;
}

.typePart {
    height: 4.4rem;
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    padding: 3px 0;
}

.typePart div {
    width: 50%;
    height: 2.2rem;
    display: flex;
    margin-top: 1px;
}

.typePart div h1,
.lastLive div h1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-top: 10px;
}


.typePart div h2 {
    width: 2rem;
    height: 2.2rem;
}

.typePart div h2 img {
    width: 100%;
    height: 100%;
}

.lastPart div,
.lastLive div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.lastPart div h5,
.lastLive div h5 {
    width: 1.5rem;
    height: 1.2rem;
    margin-top: 5px;
}


.lastPart h5 img,
.lastLive h5 img {
    width: 100%;
    height: 100%;
}

.lastLive {
    display: flex;
}

.loveLive,
.findGood {
    background: #ffffff;
}

.loveLive h6,
.findGood h6 {
    width: 100%;
    height: 1rem;
    background: url("../../static/img/hr/floor_tit.png") no-repeat center;
    background-size: contain;
    text-align: center;
}

.lastLive div h1 span:nth-child(1),
.typePart div h1 span:nth-child(1),
.loveLive_type div h1 span:nth-child(1) {
    font-size: 0.36rem;
    font-weight: bold;
}

.lastLive div h1 span:nth-child(2),
.typePart div h1 span:nth-child(2),
.loveLive_type div h1 span:nth-child(2) {
    font-size: 0.23rem;
    margin-top: 6px;
}

.loveLive h6 img {
    width: 1.5rem;
    height: 0.6rem;
    margin-top: 0.2rem;
}

.findGood h6 img {
    width: 2rem;
    height: 0.6rem;
    margin-top: 0.2rem;
}

.loveLive_type {
    display: flex;
}

.loveLive_type div {
    width: 50%;
    height: 2.2rem;
    display: flex;
}

.loveLive_type div h1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-top: 10px;
}

.loveLive_type div h2 {
    width: 2rem;
    height: 2.2rem;
}

.findGood {
    position: relative;
}

.partSwiper {
    margin: 10px 10px;
    height: 2rem;
    background: #f3f3f3;
}

.findGood {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.findGood div {
    width: 48%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    float: left;
}

.findGood div h1 {
    font-size: 0.36rem;
    font-weight: bold;
}

.findGood div h2 {
    font-size: 0.23rem;
    margin-top: 6px;
}

.findGood span {
    position: absolute;
    height: 1rem;
    line-height: 1rem;
    top: 0;
    right: 10px;
}

.findGood div h5 {
    width: 100%;
    height: 1.8rem;
    margin-top: 5px;
}

.findGood h5 img {
    width: 50%;
    height: 100%;
}
.bg{
    background: red;
}
</style>
<script>
import data from '../../config/dataConfig'

export default {
    data() {
        return {
            name: "111",
            state: false,
            newData: {
                banner: data.index.banner,
                list: data.index.tab.slice(0, 10),
                seclist: data.index.tab.slice(10, 15),
                srollData: data.index.jdms.srollData,
                xpz: data.index.xpz,
                lovelife: data.index.lovelife,
                projectDetail: data.detail.projectDetail
            },
            loadData: [
                {
                    id: "108",
                    img: "../../static/img/product/01 (25).jpg",
                    text: "实时特卖尖货,哈雷电动车 前后减震60v1000w两轮宽胎发顺风顺丰多少士大夫撒",
                    instruction: "完美芦荟胶温和不刺激,滋润肌肤,保持肌肤水润弹性 ",
                    price: "1000",
                },
                {
                    id: "108",
                    img: "../../static/img/product/01 (26).jpg",
                    text: "实时特卖尖货,哈雷电动车 前后减震60v1000w两轮宽胎发顺风顺丰多少士大夫撒",
                    instruction: "完美芦荟胶温和不刺激,滋润肌肤,保持肌肤水润弹性 ",
                    price: "1000",
                },
                {
                    id: "108",
                    img: "../../static/img/product/01 (27).jpg",
                    text: "实时特卖尖货,哈雷电动车 前后减震60v1000w两轮宽胎发顺风顺丰多少士大夫撒",
                    instruction: "完美芦荟胶温和不刺激,滋润肌肤,保持肌肤水润弹性 ",
                    price: "1000",
                },
                {
                    id: "108",
                    img: "../../static/img/product/01 (28).jpg",
                    text: "实时特卖尖货,哈雷电动车 前后减震60v1000w两轮宽胎发顺风顺丰多少士大夫撒",
                    instruction: "完美芦荟胶温和不刺激,滋润肌肤,保持肌肤水润弹性 ",
                    price: "1000",
                },
                {
                    id: "108",
                    img: "../../static/img/product/01 (29).jpg",
                    text: "实时特卖尖货,哈雷电动车 前后减震60v1000w两轮宽胎发顺风顺丰多少士大夫撒",
                    instruction: "完美芦荟胶温和不刺激,滋润肌肤,保持肌肤水润弹性 ",
                    price: "1000",
                },
                {
                    id: "108",
                    img: "../../static/img/product/01 (30).jpg",
                    text: "实时特卖尖货,哈雷电动车 前后减震60v1000w两轮宽胎发顺风顺丰多少士大夫撒",
                    instruction: "完美芦荟胶温和不刺激,滋润肌肤,保持肌肤水润弹性 ",
                    price: "1000",
                },
            ]
        }
    },
    mounted() {
        var myScroll = new IScroll(".iscroll_part", {
            scrollX: true
        })
        // var bigScroll = new IScroll("#mainPart",{
        // })
        // bigScroll.refresh();
        function getData() {
            var newDate = new Date(),
                currrentTime = new Date('2017/10/1 20:00:00'),
                subTime = currrentTime * 1 - newDate * 1;
            var date = Math.floor(subTime / 1000 / 60 / 60 / 24);
            var hours = Math.floor((subTime - date * 1000 * 60 * 60 * 24) / 1000 / 60 / 60);
            var minutes = Math.floor((subTime - date * 24 * 60 * 60 * 1000 - hours * 1000 * 60 * 60) / 1000 / 60);
            var seconds = Math.floor((subTime - date * 24 * 60 * 60 * 1000 - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
            if (hours < 10) {
                hours = "0" + hours
            }

            if (minutes < 10) {
                minutes = "0" + minutes
            }
            if (seconds < 10) {
                seconds = "0" + seconds
            }
            document.getElementById("seckill_time").getElementsByTagName("code")[0].innerHTML = hours;
            document.getElementById("seckill_time").getElementsByTagName("code")[1].innerHTML = minutes;
            document.getElementById("seckill_time").getElementsByTagName("code")[2].innerHTML = seconds;
        }
        setInterval(function() {
            getData();
        }, 1000)
        const {$} =this;
        $(document).on('mousewheel', function(){
            var top=$("section").scrollTop();
            if(top>40){
                $("header").addClass("bg");
                
            }else{
                $("header").removeClass("bg");
               
            }
        });
    },
    methods: {
        loadBottom(id) {
            // 加载更多数据
            // this.$broadcast('onBottomLoaded', id);
            this.newData.projectDetail.push(...this.loadData)
        },
    }
}
</script>

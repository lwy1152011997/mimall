<template>
  <div>
    <div class="header">
      <div class="nav_topbar">
        <div class="container">
          <div class="topbar_menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MUI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topbar_user">
            <a href="javascript:;">登录</a>
            <a href="javascript:;">注册</a>
            <a href="javascript:;" class="my_cart"><span class="icon_cart"></span>购物车</a>
          </div>
        </div>
      </div>
      <div class="nav_header">
        <div class="container">
          <div class="header_logo">
            <a href="/index"></a>
          </div>
          <div class="header_menu">
            <div class="item_menu">
              <span>小米手机</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro_img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.90057567.jpg" alt="">
                      </div>
                      <div class="pro_name">小米1212</div>
                      <div class="pro_price">1788元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro_img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.90057567.jpg" alt="">
                      </div>
                      <div class="pro_name">小米1212</div>
                      <div class="pro_price">1788元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro_img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.90057567.jpg" alt="">
                      </div>
                      <div class="pro_name">小米1212</div>
                      <div class="pro_price">1788元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro_img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.90057567.jpg" alt="">
                      </div>
                      <div class="pro_name">小米1212</div>
                      <div class="pro_price">1788元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro_img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.90057567.jpg" alt="">
                      </div>
                      <div class="pro_name">小米1212</div>
                      <div class="pro_price">1788元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="javascript:;" target="_blank">
                      <div class="pro_img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584945959.90057567.jpg" alt="">
                      </div>
                      <div class="pro_name">小米1212</div>
                      <div class="pro_price">1788元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item_menu">
              <span>ReadeMi</span>
              <div class="children"></div>
            </div>
            <div class="item_menu">
              <span>电视</span>
              <div class="children"></div>
            </div>
          </div>
          <div class="header_search">
            <div class="wrapper">
              <input type="text" name="keyword">
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style lang="scss">
  @import '../../assets/scss/base';
  @import '../../assets/scss/mixin';
  .header {
    .nav_topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container {
        @include middleflex();
        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .my_cart {
          width: 110px;
          /* background-color: #666666; */
          background-color: #FF6600;
          text-align: center;
          color: #ffffff;
          .icon_cart {
            @include bgImg(16px, 12px, '../../../public/imgs/icon-cart.png');
            margin-right: 4px;
          }
        }
      }
    }

    .nav_header {
      .container {
        position: relative;
        height: 112px;
        @include middleflex();
        .header_logo {
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          a {
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before {
              content: '';
              @include bgImg(55px, 55px, '../../../public/imgs/mi-logo.png', 55px);
              transition: margin 0.2s;
            }
            &:after {
              content: '';
              @include bgImg(55px, 55px, '../../../public/imgs/mi-home.png', 55px);
            }
            &:hover:before {
              margin-left: -55px;
              transition: margin 0.2s;
            }
          }
        }

        .header_menu {
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item_menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-left: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: #FF6600;
              .children {
                height: 220px;
                display: block;
              }
            }
            .children {
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0px;
              display: none;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 9;
              // background-color: #ffffff;
            }
              ul {
                .product {
                  position: relative;
                  font-size: 12px;
                  line-height: 12px;
                  text-align: center;
                  float: left;
                  width: 16.6%;
                  height: 220px;
                  &:before {
                    content: '';
                    position: absolute;
                    top: 28px;
                    right: 0;
                    border-left: 1px solid #D7D7D7;
                    height: 100px;
                    width: 1px;
                  }
                  &:last-child:before {
                    display: none;
                  }
                  a {
                    display: inline-block;
                    .pro_img {
                      height: 137px;
                    }
                    .pro_name {
                      font-weight: bold;
                      margin-top: 19px;
                      margin-bottom: 8px;
                      color: #333333;
                    }
                    .pro_price {
                      color: #FF6600;
                    }
                  img {
                    height: 111px;
                    width: auto;
                    margin-top: 26px;
                  }
                }
              }
            }
          }
        }

        .header_search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input {
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #E0E0E0;
              width: 254px;
              height: 50px;
              padding-left: 14px;
            }
            a {
              @include bgImg(18px, 18px, '../../../public/imgs/icon-search.png');
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
</style>
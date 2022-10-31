// 定义支付接口
interface Pay {
  handlePay(): void; // 支付接口方法
}

// 定义不同的类来实现接口
class WxPay implements Pay {
  handlePay() {
    console.log(`我是微信支付`);
  }
}
class AliPay implements Pay {
  handlePay() {
    console.log(`我是支付宝支付`);
  }
}

let wxPay: Pay = new WxPay();
let aliPay: Pay = new AliPay();

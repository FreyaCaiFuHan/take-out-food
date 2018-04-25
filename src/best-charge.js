function loadAllItems() {
  return [{
    id: 'ITEM0001',
    name: '黄焖鸡',
    price: 18.00
  }, {
    id: 'ITEM0013',
    name: '肉夹馍',
    price: 6.00
  }, {
    id: 'ITEM0022',
    name: '凉皮',
    price: 8.00
  }, {
    id: 'ITEM0030',
    name: '冰锋',
    price: 2.00
  }];
}

function loadPromotions() {
  return [{
    type: '满30减6元'
  }, {
    type: '指定菜品半价',
    items: ['ITEM0001', 'ITEM0022']
  }];
}

function bestCharge(selectedItems) {
  let arr = " ";
  let dish = [];
  let num = [];
  let count = 0;
  let choosename = 0;
  let chooseprice = [];
  let perprice = [];
  let discountprice = [];
  let sum = 0;
  let totalprice = 0;
  let pricefinal = 0;
  let t = 0;
  for (let i = 0; i<selectedItems.length ; i++){
    arr = selectedItems[i];
    dish[count] = arr.substring(0,8);
    num[count] = parseInt(arr.substring(11,12));
    count++;
  }
  console.log("============= 订餐明细 =============");
  for (let j = 0; j< dish.length; j++){
    for (let k = 0 ; k < loadAllItems().length ; k++){
      if (dish[j] == loadAllItems()[k].id){
        choosename = loadAllItems()[k].name;
        chooseprice[j] = loadAllItems()[k].price;
        perprice[j] = chooseprice[j] * num[j];
        totalprice = totalprice + perprice[j];
        pricefinal = totalprice-6;
        console.log(loadAllItems()[k].name+" x "+num[j]+" = "+ perprice[j]+"元");
      }
    }
  }
  console.log("-----------------------------------");
  for (let m = 0; m<num.length; m++){
    if(dish[m] == 'ITEM0001' || dish[m] == 'ITEM0022'){
      discountprice[m]= chooseprice[m]*0.5;
    }
    else{
      discountprice[m]= chooseprice[m];
    }
  }
  for (let n = 0; n<num.length; n++){
    sum = sum + discountprice[n]*num[n];
  }
  for (let last = 0; last < dish.length;last++){
    if (dish[last] == 'ITEM0001' || dish[last] == 'ITEM0022'){
      if (sum < pricefinal){
        console.log("使用优惠：")
        t = totalprice-sum;
        console.log(loadPromotions()[1].type+"(黄焖鸡，凉皮)，省"+ t +"元")
        console.log("-----------------------------------");
        console.log("总计："+sum+"元")
        console.log("===================================");
        break;
      }
      else{
        console.log("使用优惠：")
        console.log(loadPromotions()[0].type+"，省6元")
        console.log("-----------------------------------");
        console.log("总计："+ pricefinal +"元")
        console.log("===================================");
        break;
      }
    }
    else if(last == dish.length-1 ){
      console.log("总计："+ totalprice +"元")
      console.log("===================================");
      break;
    }
  }
  return /*TODO*/;
}


selectedItems =["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
bestCharge(selectedItems);
console.log("\n");
selectedItems =["ITEM0013 x 4", "ITEM0022 x 1"];
bestCharge(selectedItems);
console.log("\n");
selectedItems =["ITEM0013 x 4"];
bestCharge(selectedItems);
console.log("\n");

module.exports = bestCharge;

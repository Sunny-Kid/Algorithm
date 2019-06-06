/**
 * 题目：从给定的数组中取出两个数，要求和为一个给定的值
 * PS：一面为三数之和，答得不好，随后二面面试官降低难度改为两数之和
 */

 /**
  * 1.冒泡方法求解
  */
function twoSum (arr, sum) {
  if (!Array.isArray(arr)) return null

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return [arr[i], arr[j]]
    }
  }
}

function twoSum2 (arr, sum) {
  if (!Array.isArray(arr)) return null

  const hashSet = new Set()
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const difference = sum - arr[i] - arr[j]
      if (hashSet.has(difference)) {
        return [arr[i], arr[j], difference]
      }
      hashSet.add(arr[i])
      hashSet.add(arr[j])
    }
  }
}

function threeSum2 (nums, target) {
  if (!Array.isArray(arr)) return null

  const hashMap = {}
  const res = []

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (hashMap[nums[j]]) {
        res.push(nums[j]).concat(hashMap[nums[j]])
        hashMap[nums[j]] = undefined
      } else {
        let mark = target - nums[i] - nums[j]
        hashMap[mark] = [nums[i], nums[j]]
      }
    }
  } 

  return res
}

function twoSum3 (arr, sum) {
  if (!Array.isArray(arr)) return null

  arr.sort()

  for (let i = 0, j = arr.length - 1;i < j;) {
    if (arr[i] + arr[j] < sum) i++
    else if (arr[i] + arr[j] > sum) j--
    else return [arr[i], arr[j]]
  }

  return null
}

function threeSum3 (nums, target) {
  if (!Array.isArray(nums)) return null

  nums.sort((a, b) => a - b);

  if (nums[0] > target || nums[nums.length - 1] < target) return []

  const res = []
  const hashMap = {}

  for (let i = 1;i < nums.length - 1;i++) {
    if (nums[i] === nums[i - 1]) continue
    let first = i + 1
    let last = nums.length - 1

    while (first < last) {
      const middle = []
      if (nums[first] + nums[last] < target) {
        first++
      } else if (nums[first] + nums[last] > target) {
        last--
      } else {
        middle.push([nums[first], middle, nums[last]])
        if (!hashMap[middle]) { hashMap[middle] = true; res.push(middle) }
        first += 1
        last -= 1
        while(first < last && nums[first] === nums[first - 1]){
          first += 1;
        }
        while(first < last && nums[last] === nums[last + 1]){
          last -= 1;
        }
      }
    }
  }
}

function getCombination (arr, num) {
  var r=[];
  (function f(t,a,n)
  {
      if (n==0)
      {
          return r.push(t);
      }
      for (var i=0,l=a.length; i<=l-n; i++)
      {
          f(t.concat(a[i]), a.slice(i+1), n-1);
      }
  })([],arr,num);
  return r;
}

/**
 * 题目：从一个无序，不相等的数组中，选取N个数，使其和为M实现算法
 */

function getCombBySum(array,sum,tolerance,targetCount){
  var util = {
    /*
      get combination from array
      arr: target array
      num: combination item length
      return: one array that contain combination arrays
    */
    /*获取所有的可能组合
    如果是[1,2,3,4,5]取出3个 
    那么可能性就有10种 C(5,3)= C(5,2) 不懂的恶补高二数学排列😄
    不用翻书了 给个公式 
    全排列  P(n,m)=n!/(n-m)!
    组合排列 C(5,2)=5!/2!*3!=5*4*3*2*1/[(2*1)*(3*2*1)]=10
    这是使用了循环加递归做出了组合排序
    */
    getCombination: function(arr, num) {
      var r=[];
      (function f(t,a,n)
      {
          if (n==0)
          {
              return r.push(t);
          }
          for (var i=0,l=a.length; i<=l-n; i++)
          {
              f(t.concat(a[i]), a.slice(i+1), n-1);
          }
      })([],arr,num);
      return r;
    },

    // take array index to a array
    // 获取数组的索引
    getArrayIndex: function(array) {
      var i = 0,
        r = [];
      for(i = 0;i<array.length;i++){
        r.push(i);
      }
      return r;
    }
  }
  
  var logic = {
    // sort the array,then get what's we need
    //  获取数组中比sum小的数
    init: function(array,sum) {
      // clone array
      var _array = array.concat(),
      r = [],
      i = 0;
      // sort by asc
      _array.sort(function(a,b){
        return a - b;
      });
      // get all number when it's less than or equal sum
      for (i = 0;i<_array.length;i++) {
        if (_array[i] <= sum) {
          r.push(_array[i]);
        } else {
          break;
        }
      }
      
      return r;
    },
    // important function
    core: function(array,sum,arrayIndex,count,r){
      var i = 0,
        k = 0,
        combArray = [],
        _sum = 0,
        _cca = [],
        _cache = [];
      
      if(count == _returnMark){
        return;
      }
      // get current count combination
      // 这里排序的不是原来的数组,而是求的索引后的数组
      combArray = util.getCombination(arrayIndex,count);
      for(i = 0;i < combArray.length;i++){
        _cca = combArray[i];
        _sum = 0;
        _cache = [];
        // calculate the sum from combination
        for(k = 0;k < _cca.length;k++){
          _sum += array[_cca[k]];
          _cache.push(array[_cca[k]]);
        }
        if(Math.abs(_sum-sum) <= _tolerance){
          r.push(_cache);
        }      
      }
      logic.core(array, sum, arrayIndex, count-1, r);
    }
  }

  var r = [],
    _array = [],
    _targetCount = 0,
    _tolerance = 0,
    _returnMark = 0;
  
  // check data
  _targetCount = targetCount || _targetCount;
  _tolerance = tolerance || _tolerance;
  
  _array = logic.init(array, sum);
  if (_targetCount) {
    _returnMark = _targetCount-1;
  }
  
  logic.core(_array,sum,util.getArrayIndex(_array),(_targetCount || _array.length),r);
  
  return r;
}

function getNumByCount (arr, sum, count) {
  const util = {
    getCombination: function (arr, num) {
      let result = []
      (function f(t , a, n) {
        if (n === 0) {
          return result.push(t)
        }
        for (let i = 0;i <= a.length - n;i++) {
          f(t.concat(a[i]), a.slice(i + 1), n - 1)
        }
      })([], arr, num)
      return result
    }
  }

  const logic = {
    init: function (array, sum) {
      return array.filter(item => item <= sum)
    },

    core: function (array, sum, count, r) {
      if (count === 0) return r
      let combArray = util.getCombination(array,count);
      for (let i = 0;i < combArray.length;i++) {
        _cca = combArray[i];
        _sum = 0;
        _cache = [];
        // calculate the sum from combination
        for (let j = 0;j < _cca.length;j++) {
          _sum += _cca[j];
          _cache.push(_cca[j]);
        }
        if (_sum === sum) {
          r.push(_cache);
        } 
      }
      logic.core(array, sum, count - 1, r);
    }
  }
  let result = []

  let _array = logic.init(arr, sum)

  logic.core(_array, sum, count, result)

  return result
}

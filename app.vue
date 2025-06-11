<template>
  <div
    class="aaa"
  >

    <div>
      <h1 class="rotating">我是雷森</h1>
      <p>
        我是一个程序员，我喜欢变成，我的全职工作是交易员，我住在上海漕泾什么什么
      </p>
    </div>

    <div>
      <h1 id="six">我是六耳</h1>
      <p>我是ai博主，我来教你如何成为ai博主，史蒂夫纳什的开发你的说法</p>
    </div>
  </div>

  
</template>

<style>
.aaa {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotating {
  animation: rotate 3s linear infinite;
}

h1 {
  text-align: center;
  color: red;
  font-size: 100px;
}

p {
  text-align: center;
  color: blue;
  font-size: 50px;
}

.logo{

  position: absolute;
  top: 50%;
  left: 50%;
}

#six{
  color: green;
}

</style>

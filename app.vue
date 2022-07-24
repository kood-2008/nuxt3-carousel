<template>
  <div>
    <div class="block text-center">
    <span class="demonstration"
    >Switch when indicator is hovered (default)</span
    >
<!--        <client-only>-->
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
          </el-carousel>
<!--        </client-only>-->

    </div>
  </div>
</template>
